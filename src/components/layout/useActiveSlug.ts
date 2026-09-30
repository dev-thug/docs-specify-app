import type { Locale } from "@/lib/i18n";
import { findTabBySlug } from "@/lib/navigation";

/** `/ko/guides/github` → slug `guides/github` 과 해당 탭 */
export function useActiveSlug(locale: Locale, pathname: string) {
  const prefix = `/${locale}/`;
  const slug = pathname.startsWith(prefix) ? decodeURIComponent(pathname.slice(prefix.length)).replace(/\/$/, "") : "";
  return { slug, activeTab: findTabBySlug(locale, slug) };
}
