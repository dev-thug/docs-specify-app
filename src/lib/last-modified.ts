import { execFileSync } from "node:child_process";
import path from "node:path";
import type { Locale } from "./i18n";

// 문서 최종 수정일 — 빌드 시 git 커밋 시각을 읽어 sitemap lastmod·TechArticle dateModified 에 쓴다.
// 얕은 클론(shallow)에서는 경계 커밋이 모든 파일을 "수정"한 것처럼 보여 날짜가 부풀려지므로 싣지 않는다.
// Vercel 은 기본이 얕은 클론이라 VERCEL_DEEP_CLONE=true 를 설정해야 프로덕션에도 날짜가 나간다.

const cache = new Map<string, string | undefined>();

function git(args: string[]): string {
  return execFileSync("git", args, { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

const historyAvailable = (() => {
  try {
    return git(["rev-parse", "--is-shallow-repository"]) === "false";
  } catch {
    return false;
  }
})();

/** ISO 8601 커밋 시각. git 이력이 없거나 커밋되지 않은 파일이면 undefined */
export function getLastModified(locale: Locale, slug: string): string | undefined {
  if (!historyAvailable) return undefined;
  const file = path.join("src", "content", locale, `${slug}.mdx`);
  if (cache.has(file)) return cache.get(file);
  let value: string | undefined;
  try {
    value = git(["log", "-1", "--format=%cI", "--", file]) || undefined;
  } catch {
    value = undefined;
  }
  cache.set(file, value);
  return value;
}
