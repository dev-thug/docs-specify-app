import { getMarkdownDocument } from "@/lib/content";
import { LOCALES } from "@/lib/i18n";
import { getAllPages, pageHref } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site";

// 모든 문서의 Markdown 원문을 한 파일로 — LLM 컨텍스트에 통째로 넣는 용도.
export const dynamic = "force-static";

export async function GET() {
  const parts: string[] = [];
  for (const locale of LOCALES) {
    for (const page of getAllPages(locale)) {
      const markdown = await getMarkdownDocument(locale, page.slug);
      if (markdown) parts.push(`<!-- ${SITE_URL}${pageHref(locale, page.slug)} -->\n\n${markdown}`);
    }
  }
  return new Response(parts.join("\n---\n\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
