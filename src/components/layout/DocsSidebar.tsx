import type { Locale } from "@/lib/i18n";
import { SidebarNav } from "./SidebarNav";

// 데스크톱 좌측 탐색 — 헤더 아래에 고정되고 본문과 독립적으로 스크롤된다.
export function DocsSidebar({ locale, label }: { locale: Locale; label: string }) {
  return (
    <aside className="sticky top-header hidden h-[calc(100dvh-var(--spacing-header))] w-sidebar shrink-0 lg:block">
      <nav aria-label={label} className="panel-scroll-subtle h-full overflow-y-auto px-4 pt-8 pb-10">
        <SidebarNav locale={locale} />
      </nav>
    </aside>
  );
}
