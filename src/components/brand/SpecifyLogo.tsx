import Image from "next/image";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

// Specify 로고 — specify/public/logo.png 원본 자산. 보라는 로고에만 존재한다.
export function SpecifyMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={size}
      height={size}
      priority
      className={cn("shrink-0 object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
}

/** 로고 + 대구북성로 로고타입. 랜딩 헤더(LandingHeader)와 같은 조합이다 */
export function SpecifyWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-lg text-foreground", className)}>
      <SpecifyMark size={28} />
      <Wordmark />
    </span>
  );
}
