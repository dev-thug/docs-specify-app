"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LOCALE_COOKIE, LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// 언어 선택 — 같은 문서의 다른 언어 버전으로 이동하고, 선택을 쿠키에 기억한다.
// 모든 로케일이 같은 slug 구조를 공유하므로 경로의 로케일 세그먼트만 바꾼다.
export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const hrefFor = (target: Locale) => {
    const rest = pathname.split("/").slice(2).join("/");
    return `/${target}${rest ? `/${rest}` : ""}${typeof window === "undefined" ? "" : window.location.hash}`;
  };

  const select = (target: Locale) => {
    // 1년 유지. 서버는 이 값을 로케일 없는 경로의 리다이렉트에만 쓴다.
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    if (target !== locale) router.push(hrefFor(target));
  };

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label={label}
          className="gap-1.5 px-2.5 text-muted-foreground hover:text-foreground has-[>svg]:px-2.5"
        >
          <Languages className="size-4" aria-hidden />
          <span className="hidden text-ui sm:inline">{LOCALE_LABELS[locale]}</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="z-50 min-w-40 rounded-2xl border border-border bg-popover p-1.5 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          <DropdownMenu.RadioGroup value={locale} onValueChange={(value) => select(value as Locale)}>
            {LOCALES.map((target) => (
              <DropdownMenu.RadioItem
                key={target}
                value={target}
                lang={target}
                className={cn(
                  "flex h-9 cursor-pointer items-center justify-between gap-3 rounded-lg px-3 text-sm outline-none select-none",
                  "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
                )}
              >
                {LOCALE_LABELS[target]}
                <DropdownMenu.ItemIndicator>
                  <Check className="size-4" aria-hidden />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
