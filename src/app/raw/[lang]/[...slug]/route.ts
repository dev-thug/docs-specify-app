import { getMarkdownDocument } from "@/lib/content";
import { isLocale, LOCALES } from "@/lib/i18n";
import { getAllPages } from "@/lib/navigation";

// 문서 Markdown 원문. 공개 주소는 `/<lang>/<slug>.md` 이며 proxy 가 이 경로로 rewrite 한다.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => getAllPages(lang).map((page) => ({ lang, slug: page.slug.split("/") })));
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string; slug: string[] }> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return new Response("Not found", { status: 404 });
  const markdown = await getMarkdownDocument(lang, slug.join("/"));
  if (markdown === null) return new Response("Not found", { status: 404 });
  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
