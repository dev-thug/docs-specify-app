# docs-specify-app — repository instructions

Specify 공식 문서 사이트. Next.js 16 App Router + `@next/mdx`, Tailwind v4, Vercel 배포.

- 정보 구조의 SSOT는 `src/lib/navigation.ts`(`NAV_STRUCTURE`). 제목·설명은 `src/i18n/nav/<locale>.ts`.
  페이지를 추가·이동하면 ko·en·ja 세 로케일의 라벨과 `src/content/<locale>/<slug>.mdx` 를 함께 맞춘다.
  한국어가 원문이며, 번역본은 같은 제목 구조·컴포넌트·코드 블록을 유지하고 UI 라벨은 Specify `src/messages/*/{en,ja}.json` 값을 쓴다.
- 문서 내용의 사실 근거는 Specify 저장소(`../specify`)의 실행 코드·메시지·`docs/`다. 확인하지 못한 기능·UI 경로·가격을 쓰지 않는다. 가격은 specify.app/pricing 링크로 대신한다.
- 디자인 토큰은 Specify `src/app/globals.css` 미러다. 역할 토큰 클래스만 쓰고 hex·Tailwind 팔레트 클래스를 쓰지 않는다. hover 에 lift(translate/scale)를 넣지 않는다.
- UI 문자열은 `src/i18n/<locale>.ts` 사전으로만 노출한다. 코드 주석은 한국어.
- 검증: `npm run validate` (typecheck + lint + build). UI 변경은 브라우저에서 라이트·다크·모바일을 확인한다.
