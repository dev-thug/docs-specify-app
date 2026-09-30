import type { SearchDocument } from "@/lib/content";

export interface SearchResult {
  key: string;
  href: string;
  title: string;
  /** 섹션 제목 (페이지 자체 결과면 undefined) */
  heading?: string;
  breadcrumb: string;
  snippet: string;
  score: number;
}

const SNIPPET_RADIUS = 60;

function makeSnippet(text: string, needle: string): string {
  if (!text) return "";
  const index = text.toLowerCase().indexOf(needle);
  if (index < 0) return text.slice(0, SNIPPET_RADIUS * 2) + (text.length > SNIPPET_RADIUS * 2 ? "…" : "");
  const start = Math.max(0, index - SNIPPET_RADIUS);
  const end = Math.min(text.length, index + needle.length + SNIPPET_RADIUS);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

/**
 * 가벼운 클라이언트 검색 — 모든 토큰이 포함된 섹션만 남기고,
 * 제목 > 섹션 제목 > 설명 > 본문 순으로 가중치를 준다. 한국어는 부분 문자열로 일치시킨다.
 */
export function searchDocuments(index: SearchDocument[], rawQuery: string, limit = 12): SearchResult[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];
  const tokens = query.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const doc of index) {
    const title = doc.title.toLowerCase();
    const description = doc.description.toLowerCase();
    const breadcrumb = `${doc.tab} › ${doc.group}`;

    for (const section of doc.sections) {
      const heading = section.heading.toLowerCase();
      const text = section.text.toLowerCase();
      const haystack = `${title} ${heading} ${description} ${text}`;
      if (!tokens.every((token) => haystack.includes(token))) continue;

      let score = 0;
      if (title.includes(query)) score += 100;
      if (heading.includes(query)) score += 60;
      for (const token of tokens) {
        if (title.includes(token)) score += 20;
        if (heading.includes(token)) score += 12;
        if (description.includes(token)) score += 6;
        if (text.includes(token)) score += 2;
      }
      // 페이지 머리 섹션은 페이지 자체 결과로 취급해 살짝 우대한다
      if (!section.id) score += 5;

      results.push({
        key: `${doc.href}#${section.id}`,
        href: section.id ? `${doc.href}#${section.id}` : doc.href,
        title: doc.title,
        heading: section.heading || undefined,
        breadcrumb,
        snippet: makeSnippet(section.text || doc.description, tokens[0]),
        score,
      });
    }
  }

  // 같은 페이지 결과가 목록을 독점하지 않도록 페이지당 최대 3개
  const perPage = new Map<string, number>();
  return results
    .sort((a, b) => b.score - a.score)
    .filter((result) => {
      const page = result.href.split("#")[0];
      const count = perPage.get(page) ?? 0;
      perPage.set(page, count + 1);
      return count < 3;
    })
    .slice(0, limit);
}
