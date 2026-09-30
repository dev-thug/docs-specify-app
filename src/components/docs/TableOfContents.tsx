"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/content";
import { cn } from "@/lib/utils";

// 우측 "이 페이지의 내용" — 스크롤 위치에서 가장 가까운 윗 제목을 활성으로 표시한다.
export function TableOfContents({ items, title }: { items: TocItem[]; title: string }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) return;
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 120;
      let current = headings[0]?.id ?? null;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top - offset <= 8) current = heading.id;
        else break;
      }
      // 문서 끝에 닿으면 마지막 제목을 활성으로 둔다
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = headings[headings.length - 1]?.id ?? current;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label={title}>
      <p className="mb-3 text-xs font-medium text-muted-foreground">{title}</p>
      <ul className="flex flex-col border-l border-border">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l py-1 text-ui leading-5 outline-none transition-colors duration-150 focus-visible:text-foreground",
                  item.depth === 3 ? "pl-6" : "pl-3",
                  isActive
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
