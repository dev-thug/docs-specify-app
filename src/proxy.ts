import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  matchAcceptLanguage,
  type Locale,
} from "@/lib/i18n";
import { FIRST_SLUG, pageHref } from "@/lib/navigation";
import { NextResponse, type NextRequest } from "next/server";

// Next.js 16 proxy(구 middleware).
// 1) 로케일 접두사가 없는 경로 → 선호 로케일로 리다이렉트 (`/` → `/<locale>/intro`, `/quickstart` → `/<locale>/quickstart`)
//    선호 로케일 = 언어 선택 쿠키 → Accept-Language → 기본 로케일(ko)
// 2) `/<lang>/<slug>.md` → Markdown 원문 라우트(`/raw/<lang>/<slug>`)로 rewrite
function preferredLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;
  return matchAcceptLanguage(request.headers.get("accept-language")) ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = "", ...rest] = pathname.split("/");

  if (isLocale(first)) {
    if (pathname.endsWith(".md") && rest.length > 0) {
      const url = request.nextUrl.clone();
      url.pathname = `/raw/${first}/${rest.join("/").slice(0, -".md".length)}`;
      return NextResponse.rewrite(url);
    }
    // not-found 는 params 를 받지 못하므로 로케일을 요청 헤더로 넘긴다
    const headers = new Headers(request.headers);
    headers.set(LOCALE_HEADER, first);
    return NextResponse.next({ request: { headers } });
  }

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? pageHref(locale, FIRST_SLUG) : `/${locale}${pathname}`;
  const response = NextResponse.redirect(url);
  // 언어 협상 결과가 요청 헤더·쿠키에 따라 달라지므로 캐시가 섞이지 않게 한다
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // 정적 자산·메타 라우트·원문 라우트는 proxy 를 거치지 않는다. `.md` 는 rewrite 대상이라 제외하지 않는다.
  matcher: [
    "/((?!_next/|raw/|favicons/|fonts/|logo\\.png|llms\\.txt|llms-full\\.txt|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|webmanifest|woff2|json|txt|xml)$).*)",
  ],
};
