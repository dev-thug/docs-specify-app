import { buildSearchIndex } from "@/lib/content";
import { isLocale, LOCALES } from "@/lib/i18n";

// 클라이언트 검색 색인 — 빌드 시 정적 JSON 으로 생성된다.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return new Response("Not found", { status: 404 });
  return Response.json(await buildSearchIndex(lang));
}
