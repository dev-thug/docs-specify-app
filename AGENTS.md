# docs-specify-app — repository instructions

Specify 공식 문서 사이트. Next.js 16 App Router + `@next/mdx`, Tailwind v4, Vercel 배포.

- 정보 구조의 SSOT는 `src/lib/navigation.ts`(`NAV_STRUCTURE`). 제목·설명은 `src/i18n/nav/<locale>.ts`.
  페이지를 추가·이동하면 ko·en·ja 세 로케일의 라벨과 `src/content/<locale>/<slug>.mdx` 를 함께 맞춘다.
  한국어가 원문이며, 번역본은 같은 제목 구조·컴포넌트·코드 블록을 유지하고 UI 라벨은 Specify `src/messages/*/{en,ja}.json` 값을 쓴다.
- 문서 내용의 사실 근거는 Specify 저장소(`../specify`)의 실행 코드·메시지·`docs/`다. 확인하지 못한 기능·UI 경로·가격을 쓰지 않는다. 가격은 specify.app/pricing 링크로 대신한다.
- 스크린샷은 `<Screenshot name alt caption/>` + `public/images/docs/<locale>/<name>.png`(없으면 ko 대체). sandbox 에서만 캡처하고
  개인 정보·테스트 데이터를 가린다. 요금제별 내부 AI 예산 금액, 기능 플래그 이름 같은 내부 값은 문서에 쓰지 않는다.
- 모델 추천은 `../specify/scripts/bench/baselines/` 의 측정 결과와 `amplify/shared/agent/llm/model_catalog.json` 을 근거로 하고,
  측정하지 않은 모델은 측정하지 않았다고 쓴다.
- 디자인 토큰은 Specify `src/app/globals.css` 미러다. 역할 토큰 클래스만 쓰고 hex·Tailwind 팔레트 클래스를 쓰지 않는다. hover 에 lift(translate/scale)를 넣지 않는다.
- UI 문자열은 `src/i18n/<locale>.ts` 사전으로만 노출한다. 코드 주석은 한국어.
- 검증: `npm run validate` (typecheck + lint + build). UI 변경은 브라우저에서 라이트·다크·모바일을 확인한다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
