import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// 검색과 AI 검색 크롤러가 공개 문서를 읽을 수 있음을 명시한다.
const SEARCH_CRAWLERS = ["Googlebot", "bingbot", "OAI-SearchBot", "PerplexityBot", "Claude-SearchBot"] as const;

// 프리뷰 배포(VERCEL_ENV=preview)는 색인되지 않게 막는다.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/raw/"] },
      ...SEARCH_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/raw/"] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
