import GithubSlugger from "github-slugger";
import fs from "node:fs/promises";
import path from "node:path";
import type { Locale } from "./i18n";
import { findPage, getAllPages, pageHref } from "./navigation";

// MDX 원문을 다루는 서버 전용 유틸. 페이지 렌더(목차), 검색 색인, Markdown 원문 제공에 쓴다.
// slug 는 항상 navigation 에 등록된 값만 받아들이므로 경로 조작(../)이 끼어들 수 없다.

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}

export interface SearchSection {
  /** 섹션 앵커 id. 페이지 머리(첫 제목 이전)는 빈 문자열 */
  id: string;
  heading: string;
  text: string;
}

export interface SearchDocument {
  href: string;
  title: string;
  description: string;
  tab: string;
  group: string;
  sections: SearchSection[];
}

export async function getRawSource(locale: Locale, slug: string): Promise<string | null> {
  if (!findPage(locale, slug)) return null;
  try {
    return await fs.readFile(path.join(CONTENT_DIR, locale, `${slug}.mdx`), "utf8");
  } catch {
    return null;
  }
}

const FENCE = /^\s*(```|~~~)/;
const HEADING = /^(#{1,6})\s+(.+?)\s*#*\s*$/;

/** 인라인 마크다운을 평문으로 — rehype-slug 가 보는 heading 텍스트와 같아야 id 가 일치한다 */
export function stripInlineMarkdown(value: string): string {
  // 인라인 코드는 먼저 떼어 두었다가 마지막에 되돌린다 — `read_document` 의 `_` 를 강조로 오인하지 않게.
  const codeSpans: string[] = [];
  const masked = value.replace(/`([^`]+)`/g, (_match, code: string) => {
    codeSpans.push(code);
    return `\u0000${codeSpans.length - 1}\u0000`;
  });
  return masked
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.+?)\1/g, "$2")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/(^|[^\p{L}\p{N}_])_(.+?)_(?=[^\p{L}\p{N}_]|$)/gu, "$1$2")
    .replace(/<[^>]+>/g, "")
    .replace(/\u0000(\d+)\u0000/g, (_match, index: string) => codeSpans[Number(index)])
    .trim();
}

/**
 * h2·h3 목차를 만든다. rehype-slug 는 문서의 모든 heading(h1~h6)을 한 slugger 로 순서대로
 * 처리하므로, 중복 접미사(-1, -2)를 맞추기 위해 h4 이하도 slugger 에는 통과시킨다.
 */
export function extractToc(source: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of source.split("\n")) {
    if (FENCE.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = HEADING.exec(line);
    if (!match) continue;
    const depth = match[1].length;
    const text = stripInlineMarkdown(match[2]);
    const id = slugger.slug(text);
    if (depth === 2 || depth === 3) items.push({ id, text, depth });
  }
  return items;
}

/** 검색용 평문 — import/export, JSX 태그, 마크다운 기호를 걷어낸다. 코드 블록 내용은 남긴다 */
function toPlainText(markdown: string): string {
  return markdown
    .replace(/^\s*(import|export)\s.+$/gm, "")
    .replace(/^\s*(```|~~~).*$/gm, "")
    .replace(/<\/?[A-Za-z][^>]*>/g, " ")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/\|/g, " ")
    .replace(/^[\s:-]+$/gm, "")
    .split("\n")
    .map((line) => stripInlineMarkdown(line))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/** h2·h3 단위로 본문을 나눠 섹션 검색이 가능하게 한다 */
export function splitSections(source: string): SearchSection[] {
  const slugger = new GithubSlugger();
  const sections: { id: string; heading: string; lines: string[] }[] = [
    { id: "", heading: "", lines: [] },
  ];
  let inFence = false;

  for (const line of source.split("\n")) {
    if (FENCE.test(line)) inFence = !inFence;
    const match = !inFence ? HEADING.exec(line) : null;
    if (match) {
      const depth = match[1].length;
      const text = stripInlineMarkdown(match[2]);
      const id = slugger.slug(text);
      if (depth === 2 || depth === 3) {
        sections.push({ id, heading: text, lines: [] });
        continue;
      }
    }
    sections[sections.length - 1].lines.push(line);
  }

  return sections
    .map((section) => ({
      id: section.id,
      heading: section.heading,
      text: toPlainText(section.lines.join("\n")),
    }))
    .filter((section) => section.heading || section.text);
}

export async function buildSearchIndex(locale: Locale): Promise<SearchDocument[]> {
  const pages = getAllPages(locale);
  return Promise.all(
    pages.map(async (page) => {
      const source = (await getRawSource(locale, page.slug)) ?? "";
      return {
        href: pageHref(locale, page.slug),
        title: page.title,
        description: page.description,
        tab: page.tab.title,
        group: page.group.title,
        sections: splitSections(source),
      };
    }),
  );
}

/** Markdown 원문 응답 — 제목·설명을 머리에 붙여 LLM·복사용으로 자립적인 문서를 만든다 */
export async function getMarkdownDocument(locale: Locale, slug: string): Promise<string | null> {
  const page = findPage(locale, slug);
  const source = await getRawSource(locale, slug);
  if (!page || source === null) return null;
  const body = source.replace(/^\s*(import|export)\s.+$/gm, "").trim();
  return `# ${page.title}\n\n> ${page.description}\n\n${body}\n`;
}
