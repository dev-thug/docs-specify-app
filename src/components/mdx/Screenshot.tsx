import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

const IMAGE_ROOT = path.join(process.cwd(), "public", "images", "docs");

// 기본 파일은 라이트 촬영본, -dark 파일은 다크 촬영본이다.
// 로케일별 테마 이미지가 없으면 같은 로케일 기본본, 한국어 순서로 대체한다.
function resolveImage(locale: Locale, name: string, dark = false) {
  const candidates = dark
    ? [[locale, `${name}-dark`], [locale, name], [DEFAULT_LOCALE, `${name}-dark`], [DEFAULT_LOCALE, name]]
    : [[locale, name], [DEFAULT_LOCALE, name]];
  const [chosenLocale, chosenName] = candidates.find(([lang, file]) =>
    fs.existsSync(path.join(IMAGE_ROOT, lang, `${file}.png`)),
  ) ?? [DEFAULT_LOCALE, name];
  const file = path.join(IMAGE_ROOT, chosenLocale, `${chosenName}.png`);
  // PNG 헤더의 실제 크기로 자리를 확보해 촬영 규격이 달라도 레이아웃 이동을 막는다.
  const bytes = fs.existsSync(file) ? fs.readFileSync(file) : null;
  return {
    src: `/images/docs/${chosenLocale}/${chosenName}.png`,
    width: bytes ? bytes.readUInt32BE(16) : 1440,
    height: bytes ? bytes.readUInt32BE(20) : 900,
  };
}

export function createScreenshot(locale: Locale) {
  function Screenshot({ name, alt, caption }: { name: string; alt: string; caption?: string }) {
    const light = resolveImage(locale, name);
    const dark = resolveImage(locale, name, true);
    return (
      <figure className="my-8">
        <div className="mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-sm" style={{ maxWidth: Math.max(light.width, dark.width) }}>
          <Image
            {...light}
            alt={alt}
            sizes="(min-width: 1280px) 768px, 100vw"
            className="h-auto w-full dark:hidden"
          />
          <Image
            {...dark}
            alt={alt}
            sizes="(min-width: 1280px) 768px, 100vw"
            className="hidden h-auto w-full dark:block"
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
