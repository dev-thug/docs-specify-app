import type { MDXComponents } from "mdx/types";
import { createMdxComponents } from "@/components/mdx/components";
import { getDictionary } from "@/i18n";
import { DEFAULT_LOCALE } from "@/lib/i18n";

// @next/mdx 가 요구하는 전역 진입점. 페이지는 로케일별 컴포넌트를 `components` prop 으로 다시 넘기므로
// 여기 값은 기본 로케일 폴백이다.
const defaults = createMdxComponents(getDictionary(DEFAULT_LOCALE));

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return { ...defaults, ...components };
}
