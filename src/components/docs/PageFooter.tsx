import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/lib/i18n";
import { getPrevNext, pageHref } from "@/lib/navigation";
import { SUPPORT_EMAIL } from "@/lib/site";

// 문서 하단 — 개선 의견 경로와 이전/다음 페이지.
export function PageFooter({
  locale,
  slug,
  title,
  dict,
}: {
  locale: Locale;
  slug: string;
  title: string;
  dict: Dictionary["page"];
}) {
  const { prev, next } = getPrevNext(locale, slug);
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`[Docs] ${title}`)}`;

  return (
    <footer className="mt-16 flex flex-col gap-8">
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{dict.feedback}</p>
        <a
          href={mailto}
          className="inline-flex items-center gap-1.5 self-start rounded-full text-sm font-medium text-foreground outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 sm:self-auto"
        >
          <Mail className="size-4" aria-hidden />
          {dict.feedbackCta}
        </a>
      </div>

      <nav className="grid gap-3 sm:grid-cols-2" aria-label={`${dict.prev} / ${dict.next}`}>
        {prev ? (
          <Link
            href={pageHref(locale, prev.slug)}
            className="group flex flex-col gap-1 rounded-2xl border border-border px-5 py-4 outline-none transition-colors duration-150 hover:border-border-strong hover:bg-card focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="size-3.5" aria-hidden />
              {dict.prev}
            </span>
            <span className="text-sm font-medium text-foreground">{prev.title}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={pageHref(locale, next.slug)}
            className="group flex flex-col items-end gap-1 rounded-2xl border border-border px-5 py-4 text-right outline-none transition-colors duration-150 hover:border-border-strong hover:bg-card focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              {dict.next}
              <ArrowRight className="size-3.5" aria-hidden />
            </span>
            <span className="text-sm font-medium text-foreground">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </footer>
  );
}
