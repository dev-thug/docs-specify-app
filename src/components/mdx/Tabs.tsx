import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import { TabsClient } from "./TabsClient";

interface TabProps {
  title: string;
  children?: ReactNode;
}

/** 탭 패널 표식 — 실제 렌더는 Tabs 가 맡는다 */
export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

// 서버에서 Tab 요소의 title 을 읽어 클라이언트 탭에 넘긴다.
// (클라이언트에서 children props 를 들여다보지 않아도 되도록 제목·패널을 분리해 전달)
export function Tabs({ children }: { children: ReactNode }) {
  const tabs = Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> =>
      isValidElement<TabProps>(child) && typeof child.props.title === "string",
  );
  return <TabsClient titles={tabs.map((tab) => tab.props.title)} panels={tabs.map((tab) => tab.props.children)} />;
}
