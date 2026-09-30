"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { SpecifyWordmark } from "@/components/brand/SpecifyLogo";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/i18n";
import { PRODUCT_URL } from "@/lib/site";
import { SidebarNav } from "./SidebarNav";

// 모바일·태블릿(<1024px) 탐색 시트 — 전체 탭을 섹션별로 펼쳐 보여준다.
export function MobileNav({ locale, dict }: { locale: Locale; dict: Pick<Dictionary, "header" | "sidebar"> }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={dict.header.openMenu}
          className="-ml-1 text-muted-foreground hover:text-foreground lg:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-scrim data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 flex w-[min(20rem,85vw)] flex-col border-r border-border bg-background shadow-lg outline-none data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:animate-in data-[state=open]:slide-in-from-left">
          <div className="flex h-14 items-center justify-between px-4">
            <Dialog.Title className="sr-only">{dict.sidebar.aria}</Dialog.Title>
            <SpecifyWordmark />
            <Dialog.Close asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={dict.header.closeMenu}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="size-5" />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">{dict.sidebar.aria}</Dialog.Description>
          <nav aria-label={dict.sidebar.aria} className="panel-scroll-subtle flex-1 overflow-y-auto px-3 pt-4 pb-6">
            <SidebarNav locale={locale} showAllTabs onNavigate={() => setOpen(false)} />
          </nav>
          <div className="border-t border-border p-4">
            <Button asChild className="w-full">
              <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                {dict.header.openApp}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
