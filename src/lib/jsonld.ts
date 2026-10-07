import { OG_LOCALES, type Locale } from "./i18n";
import { FIRST_SLUG, pageHref, type ResolvedPage } from "./navigation";
import { OG_IMAGE, PRODUCT_URL, SITE_URL } from "./site";

// schema.org JSON-LD 빌더. 검색엔진과 AI 크롤러가 사이트·문서를 구조화된 엔티티로 읽게 한다.
// 엔티티 간 참조(@id)의 파편화를 막기 위해 상수와 빌더는 이 파일에서만 정의한다.

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** inLanguage 는 BCP 47 — OG_LOCALES(ko_KR)를 하이픈 형태로 바꾼다 */
const bcp47 = (locale: Locale) => OG_LOCALES[locale].replace("_", "-");

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Specify",
    url: PRODUCT_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 480, height: 480 },
  };
}

export function webSiteJsonLd(name: string) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name,
    inLanguage: ["ko-KR", "en-US", "ja-JP"],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** 문서 페이지용 TechArticle — 제목·설명·언어·정식 URL과 사이트/발행자 참조를 담는다 */
export function docArticleJsonLd(locale: Locale, page: ResolvedPage, dateModified?: string) {
  const canonical = `${SITE_URL}${pageHref(locale, page.slug)}`;
  return {
    "@type": "TechArticle",
    "@id": `${canonical}#article`,
    headline: page.title,
    description: page.description,
    inLanguage: bcp47(locale),
    mainEntityOfPage: canonical,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    ...(dateModified ? { dateModified } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@type": "SoftwareApplication", name: "Specify", url: PRODUCT_URL },
  };
}

/** 질문·답변 쌍이 있는 문서(FAQ)용 — 화면에 보이는 질문과 답변 원문을 그대로 싣는다 */
export function faqPageJsonLd(locale: Locale, page: ResolvedPage, items: { question: string; answer: string }[]) {
  if (items.length === 0) return null;
  const canonical = `${SITE_URL}${pageHref(locale, page.slug)}`;
  return {
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    url: canonical,
    inLanguage: bcp47(locale),
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** 문서 홈 → 그룹 첫 페이지 → 현재 페이지. 문서 홈(intro) 자체는 단일 항목이라 싣지 않는다 */
export function breadcrumbJsonLd(locale: Locale, page: ResolvedPage, siteName: string) {
  if (page.slug === FIRST_SLUG) return null;
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: siteName,
      item: `${SITE_URL}${pageHref(locale, FIRST_SLUG)}`,
    },
  ];
  const firstOfGroup = page.group.pages[0];
  if (firstOfGroup.slug !== page.slug) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: page.group.title,
      item: `${SITE_URL}${pageHref(locale, firstOfGroup.slug)}`,
    });
  }
  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: page.title,
    item: `${SITE_URL}${pageHref(locale, page.slug)}`,
  });
  return { "@type": "BreadcrumbList", itemListElement: items };
}
