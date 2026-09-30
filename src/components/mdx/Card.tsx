import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  FileSearch,
  FileText,
  FolderGit2,
  GitPullRequest,
  KeyRound,
  Library,
  LifeBuoy,
  MessageSquareText,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

// MDX 에서는 아이콘을 이름 문자열로 지정한다: <Card icon="rocket" ... />
const ICONS = {
  blocks: Blocks,
  book: BookOpen,
  "file-search": FileSearch,
  file: FileText,
  git: FolderGit2,
  pr: GitPullRequest,
  key: KeyRound,
  library: Library,
  help: LifeBuoy,
  message: MessageSquareText,
  plug: Plug,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  sparkles: Sparkles,
  terminal: Terminal,
  users: Users,
  workflow: Workflow,
} satisfies Record<string, LucideIcon>;

export type CardIcon = keyof typeof ICONS;

interface CardProps {
  title: string;
  href?: string;
  icon?: CardIcon;
  /** 하단 행동 문구(예: "빠른 시작으로 이동") */
  cta?: string;
  children?: ReactNode;
}

// 떠 있는 표면 = rounded-2xl. hover 는 lift 없이 테두리·배경 대비로만 표현한다.
export function Card({ title, href, icon, cta, children }: CardProps) {
  const Icon = icon ? ICONS[icon] : null;
  const isExternal = href?.startsWith("http");

  const body = (
    <>
      {Icon ? (
        <span className="mb-4 flex size-9 items-center justify-center rounded-xl border border-border bg-muted text-foreground">
          <Icon className="size-4" aria-hidden />
        </span>
      ) : null}
      <span className="text-[0.9375rem] font-semibold text-foreground">{title}</span>
      {children ? (
        <div className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground [&_p]:m-0">{children}</div>
      ) : null}
      {cta ? (
        <span className="mt-4 flex items-center gap-1 text-sm font-medium text-foreground">
          {cta}
          <ArrowRight className="size-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );

  const className = cn(
    "group flex h-full flex-col rounded-2xl border border-border bg-card p-5 no-underline outline-none transition-colors duration-150",
    href && "hover:border-border-strong hover:bg-accent/40 focus-visible:ring-[3px] focus-visible:ring-ring/50",
  );

  if (!href) return <div className={className}>{body}</div>;
  if (isExternal) {
    return (
      <a data-card href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {body}
      </a>
    );
  }
  return (
    <Link data-card href={href} className={className}>
      {body}
    </Link>
  );
}

export function CardGroup({ cols = 2, children }: { cols?: 1 | 2 | 3; children: ReactNode }) {
  return (
    <div
      className={cn(
        "my-6 grid gap-4",
        cols === 2 && "sm:grid-cols-2",
        cols === 3 && "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {children}
    </div>
  );
}
