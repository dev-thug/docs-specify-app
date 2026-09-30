import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, LOCALE_HEADER } from "@/lib/i18n";
import { FIRST_SLUG, pageHref } from "@/lib/navigation";
import { headers } from "next/headers";
import Link from "next/link";

// not-found 는 params 를 받지 못하므로 proxy 가 넘긴 요청 헤더로 로케일을 정한다.
export default async function NotFound() {
  const value = (await headers()).get(LOCALE_HEADER);
  const locale = isLocale(value) ? value : DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-semibold text-foreground">{dict.notFound.title}</h1>
      <p className="text-muted-foreground">{dict.notFound.description}</p>
      <Button asChild className="mt-2">
        <Link href={pageHref(locale, FIRST_SLUG)}>{dict.notFound.home}</Link>
      </Button>
    </div>
  );
}
