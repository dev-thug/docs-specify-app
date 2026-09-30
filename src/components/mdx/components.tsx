import type { Dictionary } from "@/i18n";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Callout, Danger, Note, Tip, Warning } from "./Callout";
import { Card, CardGroup } from "./Card";
import { CodeBlock } from "./CodeBlock";
import { Step, Steps } from "./Steps";
import { Tab, Tabs } from "./Tabs";

// 제목 — rehype-slug 가 붙인 id 로 앵커 링크를 만든다. hover 시 # 표식.
function heading(Tag: "h2" | "h3" | "h4") {
  function Heading({ id, children, ...props }: ComponentProps<"h2">) {
    return (
      <Tag id={id} className="group" {...props}>
        {id ? (
          <a data-heading-anchor href={`#${id}`} className="text-inherit no-underline outline-none focus-visible:underline">
            {children}
            <span aria-hidden className="ml-2 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              #
            </span>
          </a>
        ) : (
          children
        )}
      </Tag>
    );
  }
  Heading.displayName = `Heading(${Tag})`;
  return Heading;
}

function DocLink({ href = "", children, ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function Table({ children, ...props }: ComponentProps<"table">) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-border">
      <table {...props}>{children}</table>
    </div>
  );
}

/** 로케일 사전을 받아 MDX 컴포넌트 맵을 만든다 — 페이지에서 `<Content components={...} />` 로 넘긴다 */
export function createMdxComponents(dict: Pick<Dictionary, "code">): MDXComponents {
  return {
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    a: DocLink,
    table: Table,
    pre: (props: ComponentProps<"pre">) => (
      <CodeBlock copyLabel={dict.code.copy} copiedLabel={dict.code.copied} {...props} />
    ),
    Callout,
    Note,
    Tip,
    Warning,
    Danger,
    Card,
    CardGroup,
    Steps,
    Step,
    Tabs,
    Tab,
    // 인라인 키보드 표기: <Kbd>⌘K</Kbd>
    Kbd: ({ children }: { children: ReactNode }) => (
      <kbd className="rounded-sm border border-border bg-muted px-1.5 py-0.5 font-sans text-xs font-medium">{children}</kbd>
    ),
  };
}
