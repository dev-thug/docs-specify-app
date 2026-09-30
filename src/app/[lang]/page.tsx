import { isLocale } from "@/lib/i18n";
import { FIRST_SLUG, pageHref } from "@/lib/navigation";
import { redirect } from "next/navigation";

// `/ko` → 첫 문서(`/ko/intro`)
export default async function LocaleIndex({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) redirect("/");
  redirect(pageHref(lang, FIRST_SLUG));
}
