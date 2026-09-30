import { DocsHeader } from "@/components/layout/DocsHeader";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { getDictionary } from "@/i18n";
import { isLocale, LOCALES, OG_LOCALES } from "@/lib/i18n";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";

// 로케일 세그먼트가 루트 레이아웃이다 — <html lang> 이 URL 로케일을 따른다.
// 지원하지 않는 로케일은 proxy 가 먼저 `/<기본 로케일>/...` 로 보내므로 여기까지 오지 않는다.

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.siteTitle, template: `%s | ${dict.meta.siteTitle}` },
    description: dict.meta.siteDescription,
    applicationName: SITE_NAME,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: OG_LOCALES[lang],
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
    },
    twitter: { card: "summary" },
    icons: {
      icon: [
        { url: "/favicons/favicon.svg", type: "image/svg+xml" },
        { url: "/favicons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      ],
      apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/favicons/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            {dict.header.skipToContent}
          </a>
          <DocsHeader
            locale={lang}
            dict={{ header: dict.header, search: dict.search, theme: dict.theme, sidebar: dict.sidebar }}
          />
          <div className="mx-auto flex max-w-[90rem]">
            <DocsSidebar locale={lang} label={dict.sidebar.aria} />
            <main id="main-content" className="min-w-0 flex-1">
              {children}
            </main>
          </div>
          <SiteFooter locale={lang} dict={dict.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
