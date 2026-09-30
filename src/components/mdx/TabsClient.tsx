"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// WAI-ARIA Tabs 패턴 — 좌우 화살표·Home·End 로 탭 이동. 비활성 패널도 DOM 에 남겨 검색·SEO 가 읽는다.
export function TabsClient({ titles, panels }: { titles: string[]; panels: ReactNode[] }) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    const next = (index + titles.length) % titles.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight") focusTab(active + 1);
    else if (event.key === "ArrowLeft") focusTab(active - 1);
    else if (event.key === "Home") focusTab(0);
    else if (event.key === "End") focusTab(titles.length - 1);
    else return;
    event.preventDefault();
  };

  return (
    <div className="my-6">
      <div role="tablist" className="flex gap-1 overflow-x-auto border-b border-border">
        {titles.map((title, index) => (
          <button
            key={title}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            id={`${baseId}-tab-${index}`}
            role="tab"
            type="button"
            aria-selected={index === active}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onKeyDown}
            className={cn(
              "relative -mb-px shrink-0 border-b-2 px-3 py-2 text-sm font-medium outline-none transition-colors duration-150 focus-visible:ring-[3px] focus-visible:ring-ring/50",
              index === active
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {title}
          </button>
        ))}
      </div>
      {panels.map((panel, index) => (
        <div
          key={titles[index]}
          id={`${baseId}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={index !== active}
          className="pt-2 [&>*:first-child]:mt-4"
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
