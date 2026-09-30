import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

// 실제 앱 화면 캡처. public/images/docs/<locale>/<name>.png 를 쓰고,
// 해당 로케일 캡처가 없으면 기본 로케일(ko) 캡처로 대체한다 (빌드 시 정적으로 결정).
const IMAGE_ROOT = path.join(process.cwd(), "public", "images", "docs");

function resolveSrc(locale: Locale, name: string): string {
  const exists = (l: string) => fs.existsSync(path.join(IMAGE_ROOT, l, `${name}.png`));
  const chosen = exists(locale) ? locale : DEFAULT_LOCALE;
  return `/images/docs/${chosen}/${name}.png`;
}

export function createScreenshot(locale: Locale) {
  function Screenshot({ name, alt, caption }: { name: string; alt: string; caption?: string }) {
    return (
      <figure className="my-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src={resolveSrc(locale, name)}
            alt={alt}
            width={1440}
            height={900}
            sizes="(min-width: 1280px) 768px, 100vw"
            className="h-auto w-full"
          />
        </div>
        {caption ? (
          <figcaption className="mt-2.5 text-center text-sm text-muted-foreground">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }
  return Screenshot;
}
