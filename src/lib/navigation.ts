import { NAV_LABELS } from "@/i18n/nav";
import { LOCALES, type Locale } from "./i18n";

// 문서 정보 구조의 SSOT.
// - 구조(탭·그룹·페이지 순서와 slug)는 모든 로케일이 공유한다 — 아래 NAV_STRUCTURE.
// - 제목·설명은 로케일별 라벨 파일(src/i18n/nav/<locale>.ts)에 있다. NavLabels 타입이 누락을 막는다.
// - 각 slug 는 src/content/<locale>/<slug>.mdx 파일과 1:1 로 대응한다.
// 클라이언트 컴포넌트(사이드바·검색)도 import 하므로 순수 데이터만 둔다.

export const NAV_STRUCTURE = [
  {
    id: "get-started",
    groups: [
      { id: "first-steps", pages: ["intro", "quickstart", "concepts"] },
      { id: "workspace", pages: ["workspace/tour", "workspace/members", "workspace/settings"] },
    ],
  },
  {
    id: "guides",
    groups: [
      { id: "writing", pages: ["guides/editor", "guides/ask-ai"] },
      {
        id: "automation",
        pages: ["guides/github", "guides/doc-projects", "guides/review-proposals", "guides/automation-settings"],
      },
      { id: "extend", pages: ["guides/automations", "guides/plugins-skills", "guides/connectors"] },
      {
        id: "use-cases",
        pages: [
          "guides/use-cases",
          "guides/planning-with-mcp",
          "guides/medical-device-docs",
          "guides/security-questionnaires",
          "guides/project-handover",
          "guides/customer-updates",
          "guides/api-docs",
          "guides/onboarding-docs",
        ],
      },
    ],
  },
  {
    id: "ai",
    groups: [
      { id: "models", pages: ["models/overview", "models/choosing", "models/usage"] },
      { id: "knowledge", pages: ["knowledge/rag", "knowledge/standards"] },
    ],
  },
  {
    id: "mcp",
    groups: [{ id: "specify-mcp", pages: ["mcp/overview", "mcp/connect", "mcp/tools", "mcp/access"] }],
  },
  {
    id: "resources",
    groups: [
      { id: "reference", pages: ["resources/security", "resources/plans", "resources/glossary", "resources/faq"] },
    ],
  },
] as const;

type Structure = typeof NAV_STRUCTURE;
export type TabId = Structure[number]["id"];
export type GroupId = Structure[number]["groups"][number]["id"];
export type PageSlug = Structure[number]["groups"][number]["pages"][number];

export interface PageLabel {
  title: string;
  description: string;
  /** 사이드바에 표시할 짧은 제목 (생략 시 title) */
  sidebarTitle?: string;
}

/** 로케일별 라벨 — 모든 탭·그룹·페이지를 빠짐없이 채워야 타입 검사를 통과한다 */
export interface NavLabels {
  tabs: Record<TabId, string>;
  groups: Record<GroupId, string>;
  pages: Record<PageSlug, PageLabel>;
}

export interface NavPage extends PageLabel {
  slug: PageSlug;
}

export interface NavGroup {
  id: GroupId;
  title: string;
  pages: NavPage[];
}

export interface NavTab {
  id: TabId;
  title: string;
  groups: NavGroup[];
}

function buildNavigation(labels: NavLabels): NavTab[] {
  return NAV_STRUCTURE.map((tab) => ({
    id: tab.id,
    title: labels.tabs[tab.id],
    groups: tab.groups.map((group) => ({
      id: group.id,
      title: labels.groups[group.id],
      pages: group.pages.map((slug) => ({ slug, ...labels.pages[slug] })),
    })),
  }));
}

export const NAVIGATION = Object.fromEntries(
  LOCALES.map((locale) => [locale, buildNavigation(NAV_LABELS[locale])]),
) as Record<Locale, NavTab[]>;

/** 첫 문서 slug — 로케일 루트(`/ko`)와 사이트 루트(`/`)가 이곳으로 이동한다 */
export const FIRST_SLUG: PageSlug = NAV_STRUCTURE[0].groups[0].pages[0];

export interface ResolvedPage extends NavPage {
  tab: NavTab;
  group: NavGroup;
}

export function getAllPages(locale: Locale): ResolvedPage[] {
  return NAVIGATION[locale].flatMap((tab) =>
    tab.groups.flatMap((group) => group.pages.map((page) => ({ ...page, tab, group }))),
  );
}

export function findPage(locale: Locale, slug: string): ResolvedPage | undefined {
  return getAllPages(locale).find((page) => page.slug === slug);
}

/** 경로의 slug 로 현재 탭을 찾는다 — 헤더 탭 활성 표시와 사이드바 범위에 쓴다 */
export function findTabBySlug(locale: Locale, slug: string): NavTab {
  const tabs = NAVIGATION[locale];
  return findPage(locale, slug)?.tab ?? tabs[0];
}

/** 전체 순서 기준 이전/다음 페이지 */
export function getPrevNext(locale: Locale, slug: string) {
  const pages = getAllPages(locale);
  const index = pages.findIndex((page) => page.slug === slug);
  return {
    prev: index > 0 ? pages[index - 1] : undefined,
    next: index >= 0 && index < pages.length - 1 ? pages[index + 1] : undefined,
  };
}

export function pageHref(locale: Locale, slug: string) {
  return `/${locale}/${slug}`;
}
