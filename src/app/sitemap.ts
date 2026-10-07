import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";
import { getLastModified } from "@/lib/last-modified";
import { getAllPages, pageHref } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    getAllPages(locale).map((page) => ({
      url: `${SITE_URL}${pageHref(locale, page.slug)}`,
      lastModified: getLastModified(locale, page.slug),
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${pageHref(l, page.slug)}`])),
          // hreflang 폴백 — 페이지 메타의 alternates.languages 와 같은 규칙
          "x-default": `${SITE_URL}${pageHref(DEFAULT_LOCALE, page.slug)}`,
        },
      },
    })),
  );
}
