"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { NAVIGATION, pageHref, type NavTab } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { useActiveSlug } from "./useActiveSlug";

interface SidebarNavProps {
  locale: Locale;
  /** true 면 모든 탭을 섹션 제목과 함께 펼친다(모바일 시트) */
  showAllTabs?: boolean;
  onNavigate?: () => void;
}

// 사이드바 행 — 36px 목록 행(rounded-lg), 활성 행은 sidebar-accent 표면.
function TabGroups({
  tab,
  locale,
  activeSlug,
  onNavigate,
}: {
  tab: NavTab;
  locale: Locale;
  activeSlug: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {tab.groups.map((group) => (
        <div key={group.title} className="mb-6">
          <p className="mb-1.5 px-3 text-xs font-medium text-muted-foreground">{group.title}</p>
          <ul className="flex flex-col gap-0.5">
            {group.pages.map((page) => {
              const isActive = page.slug === activeSlug;
              return (
                <li key={page.slug}>
                  <Link
                    href={pageHref(locale, page.slug)}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex min-h-9 items-center rounded-lg px-3 py-1.5 text-sm outline-none transition-colors duration-150 focus-visible:ring-[3px] focus-visible:ring-ring/50",
                      isActive
                        ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                    )}
                  >
                    {page.sidebarTitle ?? page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export function SidebarNav({ locale, showAllTabs = false, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const { slug, activeTab } = useActiveSlug(locale, pathname);

  if (!showAllTabs) {
    return <TabGroups tab={activeTab} locale={locale} activeSlug={slug} onNavigate={onNavigate} />;
  }

  return (
    <>
      {NAVIGATION[locale].map((tab) => (
        <section key={tab.id} className="mb-2">
          <p className="mb-3 px-3 text-sm font-semibold text-foreground">{tab.title}</p>
          <TabGroups tab={tab} locale={locale} activeSlug={slug} onNavigate={onNavigate} />
        </section>
      ))}
    </>
  );
}
