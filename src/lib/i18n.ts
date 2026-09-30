// 문서 사이트 로케일 설정. 새 언어는 여기와 src/content/<locale>/, src/i18n/<locale>.ts,
// src/i18n/nav/<locale>.ts 를 함께 추가한다.
export const LOCALES = ["ko", "en", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ko";

/** 언어 선택 메뉴 표기 — 각 언어의 자국어 이름 */
export const LOCALE_LABELS: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

/** OpenGraph locale 코드 */
export const OG_LOCALES: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
};

/** 언어 선택을 기억하는 쿠키 — proxy 가 로케일 없는 경로를 리다이렉트할 때 우선 사용한다 */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** proxy 가 요청 로케일을 서버 컴포넌트(not-found)에 전달하는 요청 헤더 */
export const LOCALE_HEADER = "x-docs-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Accept-Language 헤더에서 지원 로케일을 고른다. q 값 순으로 보고, `ja-JP` 처럼 지역 코드가 붙어도
 * 기본 언어로 맞춘다. 맞는 게 없으면 null.
 */
export function matchAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const candidates = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter((c) => c.base && c.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const candidate of candidates) {
    if (isLocale(candidate.base)) return candidate.base;
  }
  return null;
}
