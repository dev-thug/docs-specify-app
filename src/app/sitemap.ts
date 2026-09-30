import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { getAllPages, pageHref } from "@/lib/navigation";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    getAllPages(locale).map((page) => ({
      url: `${SITE_URL}${pageHref(locale, page.slug)}`,
      changeFrequency: "weekly" as const,
      priority: page.slug === "intro" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}${pageHref(l, page.slug)}`])),
      },
    })),
  );
}
