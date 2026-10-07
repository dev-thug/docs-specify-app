import { PageActions } from "@/components/docs/PageActions";
import { PageFooter } from "@/components/docs/PageFooter";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { createMdxComponents } from "@/components/mdx/components";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/i18n";
import { extractFaq, extractToc, getRawSource } from "@/lib/content";
import { DEFAULT_LOCALE, isLocale, LOCALES, OG_LOCALES } from "@/lib/i18n";
import { breadcrumbJsonLd, docArticleJsonLd, faqPageJsonLd } from "@/lib/jsonld";
import { getLastModified } from "@/lib/last-modified";
import { findPage, getAllPages, pageHref } from "@/lib/navigation";
import { OG_IMAGE } from "@/lib/site";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

// 모든 문서는 빌드 시 정적 생성한다. navigation 에 없는 slug 는 요청 시 notFound() 로 떨어져
// 로케일 레이아웃 안의 [lang]/not-found.tsx 가 렌더된다. (dynamicParams=false 면 레이아웃 없는
// 기본 404 가 나가므로 true 로 둔다. 로케일 세그먼트 자체는 layout 의 dynamicParams=false 와 proxy 가 막는다.)
export const dynamicParams = true;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => getAllPages(lang).map((page) => ({ lang, slug: page.slug.split("/") })));
}

interface PageProps {
  params: Promise<{ lang: string; slug: string[] }>;
}

async function resolve(params: PageProps["params"]) {
  const { lang, slug: segments } = await params;
  if (!isLocale(lang)) return null;
  const slug = segments.join("/");
  const page = findPage(lang, slug);
  return page ? { lang, slug, page } : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { lang, slug, page } = resolved;
  const url = pageHref(lang, slug);
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map((locale) => [locale, pageHref(locale, slug)])),
        "x-default": pageHref(DEFAULT_LOCALE, slug),
      },
      // LLM·에이전트용 Markdown 원문 — proxy 가 /raw/ 로 rewrite 하는 공개 주소
      types: { "text/markdown": `${url}.md` },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      locale: OG_LOCALES[lang],
      alternateLocale: LOCALES.filter((locale) => locale !== lang).map((locale) => OG_LOCALES[locale]),
      type: "article",
      modifiedTime: getLastModified(lang, slug),
      images: [OG_IMAGE],
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { lang, slug, page } = resolved;

  const source = await getRawSource(lang, slug);
  if (source === null) notFound();

  // 공식 @next/mdx 동적 import 패턴 — generateStaticParams 범위 안에서만 해석된다.
  const { default: Content } = (await import(`@/content/${lang}/${slug}.mdx`)) as {
    default: ComponentType<{ components?: MDXComponents }>;
  };

  const dict = getDictionary(lang);
  const toc = extractToc(source);
  const breadcrumb = breadcrumbJsonLd(lang, page, dict.meta.siteTitle);
  // FAQ 형식(h3 질문 + 답변) 문서만 FAQPage 를 싣는다
  const faq = slug === "resources/faq" ? faqPageJsonLd(lang, page, extractFaq(source)) : null;

  return (
    <div className="flex gap-12 px-5 pt-10 pb-20 sm:px-8 lg:px-12 xl:pr-8">
      {/* 문서 엔티티 + 탐색 경로 — 사이트 엔티티(WebSite·Organization)는 레이아웃에 있다 */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            docArticleJsonLd(lang, page, getLastModified(lang, slug)),
            ...(breadcrumb ? [breadcrumb] : []),
            ...(faq ? [faq] : []),
          ],
        }}
      />
      <article className="mx-auto w-full max-w-3xl min-w-0 xl:mx-0 xl:flex-1">
        <header className="mb-10 flex flex-col gap-4 border-b border-border pb-8">
          <p className="text-sm font-medium text-brand">{page.group.title}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{page.title}</h1>
            <PageActions markdownHref={`${pageHref(lang, slug)}.md`} dict={dict.page} />
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">{page.description}</p>
        </header>

        <div className="docs-prose">
          <Content components={createMdxComponents(dict, lang)} />
        </div>

        <PageFooter locale={lang} slug={slug} title={page.title} dict={dict.page} />
      </article>

      <aside className="sticky top-[calc(var(--spacing-header)+2.5rem)] hidden max-h-[calc(100dvh-var(--spacing-header)-5rem)] w-toc shrink-0 self-start overflow-y-auto panel-scroll-subtle xl:block">
        <TableOfContents items={toc} title={dict.toc.title} />
      </aside>
    </div>
  );
}
