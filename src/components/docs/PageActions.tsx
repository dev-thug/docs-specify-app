"use client";

import { Check, Copy, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n";

// 페이지 원문(Markdown)을 복사하거나 새 탭으로 연다 — LLM 에 문서를 그대로 넘기는 용도.
// 원문은 클릭 시점에 `<경로>.md` 로 받아 HTML 에 중복으로 싣지 않는다.
export function PageActions({ markdownHref, dict }: { markdownHref: string; dict: Dictionary["page"] }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  const copy = async () => {
    try {
      const response = await fetch(markdownHref);
      if (!response.ok) throw new Error(String(response.status));
      await navigator.clipboard.writeText(await response.text());
      setState("copied");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 2000);
  };

  return (
    <div className="flex shrink-0 items-center gap-1.5">
      <Button type="button" variant="outline" size="sm" onClick={copy} aria-live="polite">
        {state === "copied" ? <Check aria-hidden /> : <Copy aria-hidden />}
        {state === "copied" ? dict.copied : dict.copy}
      </Button>
      <Button asChild variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground">
        <a href={markdownHref} target="_blank" rel="noopener" aria-label={dict.viewMarkdown} title={dict.viewMarkdown}>
          <FileText aria-hidden />
        </a>
      </Button>
    </div>
  );
}
