"use client";

import { SpecifyWordmark } from "@/components/brand/SpecifyLogo";
import { SearchDialog } from "@/components/search/SearchDialog";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/i18n";
import { NAVIGATION, pageHref } from "@/lib/navigation";
import { PRODUCT_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { useActiveSlug } from "./useActiveSlug";

interface DocsHeaderProps {
  locale: Locale;
  dict: Pick<Dictionary, "header" | "search" | "theme" | "sidebar">;
}

// 2단 헤더 — 1단: 로고·검색·액션, 2단: 문서 섹션 탭(platform.claude.com/docs 배치).
// 표면은 캔버스와 같은 면에 반투명 유리(glass)를 얹어 스크롤 시 본문이 비친다.
export function DocsHeader({ locale, dict }: DocsHeaderProps) {
  const pathname = usePathname();
  const { activeTab } = useActiveSlug(locale, pathname);
  const tabs = NAVIGATION[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-glass backdrop-blur-glass backdrop-saturate-150">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center gap-3 px-4 lg:px-6">
        <MobileNav locale={locale} dict={dict} />

        <Link
          href={pageHref(locale, tabs[0].groups[0].pages[0].slug)}
          aria-label={dict.header.homeAria}
          className="flex shrink-0 items-center gap-2 rounded-md outline-none transition-opacity duration-150 hover:opacity-80 focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <SpecifyWordmark />
          <span className="rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {dict.header.docs}
          </span>
        </Link>

        <div className="flex flex-1 justify-end md:justify-center">
          <SearchDialog locale={locale} dict={dict.search} />
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <LanguageSwitcher locale={locale} label={dict.header.languageAria} />
          <ThemeToggle label={dict.theme.toggle} />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
              {dict.header.openApp}
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Button>
        </div>
      </div>

      <nav aria-label={dict.header.tabsAria} className="mx-auto hidden h-11 max-w-[90rem] items-stretch gap-6 px-6 lg:flex">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <Link
              key={tab.id}
              href={pageHref(locale, tab.groups[0].pages[0].slug)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative flex items-center text-sm font-medium outline-none transition-colors duration-150 focus-visible:text-foreground",
                "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-full after:transition-colors",
                isActive
                  ? "text-foreground after:bg-foreground"
                  : "text-muted-foreground after:bg-transparent hover:text-foreground",
              )}
            >
              {tab.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
