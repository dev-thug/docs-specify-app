import { cn } from "@/lib/utils";

// "Specify" 워드마크. 브랜드 글꼴(145KB)을 내려받지 않도록 글꼴로 한 번 렌더한 이미지(public/brand/wordmark.png,
// scripts/brand/render-wordmark.mjs)를 CSS mask 로 쓴다. 글자 색은 currentColor(또는 배경 그라데이션)가 정하므로
// 라이트/다크와 로고타입 호버 효과가 그대로 동작한다. 크기는 부모 글자 크기(em)를 따른다.
// 비율 456:118 은 이미지 크기, 높이 0.98em 은 같은 글꼴로 글자를 찍었을 때의 글리프 높이다.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Specify"
      className={cn(
        "inline-block aspect-[456/118] h-[0.98em] shrink-0 bg-current [mask-image:url(/brand/wordmark.png)] [mask-repeat:no-repeat] [mask-size:100%_100%]",
        className,
      )}
    />
  );
}
