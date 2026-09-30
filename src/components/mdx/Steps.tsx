import type { ReactNode } from "react";

// 번호 단계 — CSS counter 로 번호를 매기고 세로 선으로 흐름을 잇는다.
// 단계 제목은 heading 이 아니라서 목차에 섞이지 않는다.
export function Steps({ children }: { children: ReactNode }) {
  return <ol className="my-8 ml-3.5 list-none! border-l border-border pl-0! [counter-reset:step]">{children}</ol>;
}

export function Step({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <li className="relative m-0! pb-8 pl-8! [counter-increment:step] last:pb-0 before:absolute before:top-0 before:-left-3.5 before:flex before:size-7 before:items-center before:justify-center before:rounded-full before:border before:border-border before:bg-background before:text-xs before:font-semibold before:text-foreground before:content-[counter(step)]">
      <p className="mt-0! mb-2! pt-0.5 font-semibold text-foreground">{title}</p>
      <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </li>
  );
}
