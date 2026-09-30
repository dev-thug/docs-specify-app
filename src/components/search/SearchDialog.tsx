"use client";

import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import type { SearchDocument } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { CornerDownLeft, FileText, Hash, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { searchDocuments } from "./searchEngine";

type IndexState =
  | { status: "idle" | "loading" | "error" }
  | { status: "ready"; docs: SearchDocument[] };

// 색인은 첫 열림 때 한 번만 받는다 — 빌드 시 정적으로 생성된 JSON 이다.
const indexCache = new Map<Locale, SearchDocument[]>();

function highlight(text: string, query: string) {
  const token = query.trim().split(/\s+/)[0];
  if (!token) return text;
  const index = text.toLowerCase().indexOf(token.toLowerCase());
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded-xs bg-brand/15 text-foreground">{text.slice(index, index + token.length)}</mark>
      {text.slice(index + token.length)}
    </>
  );
}

export function SearchDialog({ locale, dict }: { locale: Locale; dict: Dictionary["search"] }) {
  const router = useRouter();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState<IndexState>(() => {
    const cached = indexCache.get(locale);
    return cached ? { status: "ready", docs: cached } : { status: "idle" };
  });
  const listRef = useRef<HTMLUListElement>(null);
  const loadingRef = useRef(false);

  // 색인 요청은 이벤트 핸들러(열기)에서만 시작한다. 이미 받았거나 요청 중이면 무시하고,
  // 실패했다면 다음 열기에서 다시 시도한다.
  const loadIndex = useCallback(async () => {
    if (indexCache.has(locale) || loadingRef.current) return;
    loadingRef.current = true;
    setIndex({ status: "loading" });
    try {
      const response = await fetch(`/${locale}/search-index.json`);
      if (!response.ok) throw new Error(String(response.status));
      const docs = (await response.json()) as SearchDocument[];
      indexCache.set(locale, docs);
      setIndex({ status: "ready", docs });
    } catch {
      setIndex({ status: "error" });
    } finally {
      loadingRef.current = false;
    }
  }, [locale]);

  // ⌘K / Ctrl+K / "/" 단축키
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.isContentEditable || target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !isTyping)) {
        event.preventDefault();
        void loadIndex();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [loadIndex]);

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      void loadIndex();
    } else {
      setQuery("");
      setActiveIndex(0);
    }
  };

  const results = useMemo(
    () => (index.status === "ready" ? searchDocuments(index.docs, query) : []),
    [index, query],
  );

  const go = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(results[activeIndex]?.href ?? results[0].href);
    }
  };

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const activeId = results[activeIndex] ? `${listId}-${activeIndex}` : undefined;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="hidden h-9 w-full max-w-sm items-center gap-2 rounded-full border border-border bg-background px-3.5 text-sm text-muted-foreground outline-none transition-colors duration-150 hover:border-border-strong hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 md:flex"
        >
          <Search className="size-4" aria-hidden />
          <span className="flex-1 text-left">{dict.trigger}</span>
          <kbd className="rounded-sm border border-border bg-muted px-1.5 font-sans text-2xs font-medium">⌘K</kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={dict.trigger}
          className="text-muted-foreground hover:text-foreground md:hidden"
        >
          <Search className="size-4" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-scrim data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed top-[12vh] left-1/2 z-50 flex max-h-[70vh] w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border border-border bg-popover text-popover-foreground shadow-lg outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            (event.currentTarget as HTMLElement).querySelector("input")?.focus();
          }}
        >
          <Dialog.Title className="sr-only">{dict.dialogTitle}</Dialog.Title>
          <Dialog.Description className="sr-only">{dict.hint}</Dialog.Description>
          <div className="flex items-center gap-3 border-b border-border px-5">
            <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={onInputKeyDown}
              placeholder={dict.placeholder}
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls={listId}
              aria-activedescendant={activeId}
              aria-autocomplete="list"
              className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded-sm border border-border bg-muted px-1.5 text-2xs font-medium text-muted-foreground">
              ESC
            </kbd>
          </div>

          <div className="panel-scroll-subtle min-h-0 flex-1 overflow-y-auto p-2">
            {index.status === "loading" ? (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">{dict.loading}</p>
            ) : index.status === "error" ? (
              <p className="px-3 py-8 text-center text-sm text-destructive">{dict.error}</p>
            ) : !query.trim() ? (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">{dict.hint}</p>
            ) : results.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-muted-foreground">{dict.empty}</p>
            ) : (
              <ul ref={listRef} id={listId} role="listbox" aria-label={dict.dialogTitle} className="flex flex-col gap-0.5">
                {results.map((result, i) => {
                  const Icon = result.heading ? Hash : FileText;
                  const isActive = i === activeIndex;
                  return (
                    <li
                      key={result.key}
                      id={`${listId}-${i}`}
                      data-index={i}
                      role="option"
                      aria-selected={isActive}
                      onMouseMove={() => setActiveIndex(i)}
                      onClick={() => go(result.href)}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-2xl px-3 py-2.5",
                        isActive ? "bg-accent" : "hover:bg-accent/60",
                      )}
                    >
                      <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-2xs text-muted-foreground">{result.breadcrumb}</p>
                        <p className="truncate text-sm font-medium text-foreground">
                          {highlight(result.title, query)}
                          {result.heading ? (
                            <span className="text-muted-foreground"> › {highlight(result.heading, query)}</span>
                          ) : null}
                        </p>
                        {result.snippet ? (
                          <p className="mt-0.5 line-clamp-2 text-ui text-muted-foreground">
                            {highlight(result.snippet, query)}
                          </p>
                        ) : null}
                      </div>
                      {isActive ? (
                        <CornerDownLeft className="mt-1 size-3.5 shrink-0 text-muted-foreground" aria-hidden />
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="hidden items-center gap-4 border-t border-border px-5 py-2.5 text-2xs text-muted-foreground sm:flex">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded-sm border border-border bg-muted px-1">↑</kbd>
              <kbd className="rounded-sm border border-border bg-muted px-1">↓</kbd>
              {dict.navigate}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded-sm border border-border bg-muted px-1">↵</kbd>
              {dict.select}
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="rounded-sm border border-border bg-muted px-1">esc</kbd>
              {dict.close}
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
