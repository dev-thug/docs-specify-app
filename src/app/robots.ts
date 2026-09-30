import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// 프리뷰 배포(VERCEL_ENV=preview)는 색인되지 않게 막는다.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/raw/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
