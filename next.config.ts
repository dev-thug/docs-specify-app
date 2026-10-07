import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // 로케일별 예제 자료(public/examples/<locale>/*.zip) — 파일명은 URL 마지막 경로를 쓴다.
        source: "/examples/:locale/:file",
        headers: [{ key: "Content-Disposition", value: "attachment" }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

// Turbopack 은 MDX 플러그인을 직렬화 가능한 형태(패키지 이름 문자열 + JSON 옵션)로만 받는다.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
          defaultLang: { block: "plaintext", inline: "plaintext" },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
