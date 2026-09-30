"use client";

import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";
import { FIRST_SLUG, pageHref } from "@/lib/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

// not-found 는 params 를 받지 못한다. 서버 headers() 를 쓰면 [lang] 트리 전체가 동적 렌더로
// 바뀌어 문서 페이지가 정적 생성되지 않으므로, 클라이언트에서 경로 첫 세그먼트로 로케일을 정한다.
export default function NotFound() {
  const segment = usePathname()?.split("/")[1];
  const locale = isLocale(segment) ? segment : DEFAULT_LOCALE;
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
