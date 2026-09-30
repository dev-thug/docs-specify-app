import { Info, Lightbulb, OctagonAlert, TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "note" | "tip" | "warning" | "danger";

// 상태 원색은 의미에만 쓴다 — note=info, tip=success, warning=amber, danger=rose.
// 틴트 표면 위 아이콘·제목은 *-on-subtle 을 쓴다 (DESIGN.md Colors).
const STYLES: Record<CalloutType, { icon: LucideIcon; surface: string; accent: string }> = {
  note: { icon: Info, surface: "border-info/25 bg-info/6", accent: "text-info-on-subtle" },
  tip: { icon: Lightbulb, surface: "border-success/25 bg-success/6", accent: "text-success-on-subtle" },
  warning: { icon: TriangleAlert, surface: "border-amber/30 bg-amber/8", accent: "text-amber-on-subtle" },
  danger: { icon: OctagonAlert, surface: "border-rose/25 bg-rose/6", accent: "text-rose-on-subtle" },
};

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const { icon: Icon, surface, accent } = STYLES[type];
  return (
    <div
      role={type === "warning" || type === "danger" ? "alert" : "note"}
      className={cn("my-6 flex gap-3 rounded-2xl border px-4 py-3.5 text-[0.9375rem] leading-relaxed", surface)}
    >
      <Icon className={cn("mt-1 size-4 shrink-0", accent)} aria-hidden />
      <div className="min-w-0 flex-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-2">
        {title ? <p className={cn("font-semibold", accent)}>{title}</p> : null}
        {children}
      </div>
    </div>
  );
}

export const Note = (props: { title?: string; children: ReactNode }) => <Callout type="note" {...props} />;
export const Tip = (props: { title?: string; children: ReactNode }) => <Callout type="tip" {...props} />;
export const Warning = (props: { title?: string; children: ReactNode }) => <Callout type="warning" {...props} />;
export const Danger = (props: { title?: string; children: ReactNode }) => <Callout type="danger" {...props} />;
