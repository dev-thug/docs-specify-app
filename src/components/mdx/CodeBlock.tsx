"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

// MDX `pre` 대체 — rehype-pretty-code 가 만든 <pre> 를 표면(card + border)으로 감싸고 복사 버튼을 단다.
// 접근성 라벨은 i18n 사전 대신 data 속성으로 받는다(mdx-components 에서 주입).
export function CodeBlock({
  className,
  children,
  copyLabel = "Copy",
  copiedLabel = "Copied",
  ...props
}: ComponentProps<"pre"> & { copyLabel?: string; copiedLabel?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // 클립보드 권한이 없으면 조용히 무시한다 — 사용자는 직접 선택해 복사할 수 있다.
    }
  };

  return (
    <div data-code-block className="group relative overflow-hidden rounded-2xl border border-border bg-card">
      <pre ref={preRef} className={cn("panel-scroll-subtle", className)} {...props}>
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? copiedLabel : copyLabel}
        title={copied ? copiedLabel : copyLabel}
        className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground opacity-0 outline-none transition-[opacity,color] duration-150 group-hover:opacity-100 hover:text-foreground focus-visible:opacity-100 focus-visible:ring-[3px] focus-visible:ring-ring/50 pointer-coarse:opacity-100"
      >
        {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
      </button>
    </div>
  );
}
