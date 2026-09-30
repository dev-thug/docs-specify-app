// 사이트 전역 상수. 배포 도메인은 Vercel 환경 변수로 덮어쓸 수 있다.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://docs.specify.app").replace(/\/$/, "");

/** 제품(앱) 주소 — 헤더 CTA, 요금제 등 원천 페이지 링크에 쓴다 */
export const PRODUCT_URL = "https://specify.app";

export const SUPPORT_EMAIL = "support@specify.app";

export const SITE_NAME = "Specify Docs";
