import { LOCALE_LABELS, LOCALES } from "@/lib/i18n";
import { findPage, NAVIGATION, pageHref } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site";

// llms.txt — LLM 이 문서 구조를 파악하도록 페이지 목록과 Markdown 원문 링크를 제공한다 (llmstxt.org 형식).
// 모든 로케일이 같은 구조를 가지므로 로케일별로 섹션을 반복한다.
export const dynamic = "force-static";

const START_PAGES = ["intro", "quickstart", "guides/use-cases", "resources/faq"] as const;

export function GET() {
  const lines: string[] = [
    "# Specify Docs",
    "",
    "> Specify automates developer documentation. It connects GitHub code changes to the documents they affect and prepares reviewable update proposals with supporting context. This site is the official Specify documentation, available in Korean, English, and Japanese.",
    "",
    `The full documentation in a single file: ${SITE_URL}/llms-full.txt`,
    "",
    "## Start here",
    "",
    // 언어별 시작 문서 — 소개, 빠른 시작, 활용 예시, FAQ를 우선 안내한다.
    ...LOCALES.flatMap((locale) => [
      `### ${LOCALE_LABELS[locale]}`,
      "",
      ...START_PAGES.flatMap((slug) => {
        const page = findPage(locale, slug);
        return page ? [`- [${page.title}](${SITE_URL}${pageHref(locale, slug)}.md): ${page.description}`] : [];
      }),
      "",
    ]),
  ];

  for (const locale of LOCALES) {
    for (const tab of NAVIGATION[locale]) {
      lines.push(`## ${tab.title} (${LOCALE_LABELS[locale]})`, "");
      for (const group of tab.groups) {
        for (const page of group.pages) {
          lines.push(`- [${page.title}](${SITE_URL}${pageHref(locale, page.slug)}.md): ${page.description}`);
        }
      }
      lines.push("");
    }
  }

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
