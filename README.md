# docs-specify-app

Specify 공식 문서 사이트(`docs.specify.app`). Next.js 16(App Router, Turbopack) + MDX로 만들고 Vercel에 배포한다.
레이아웃은 platform.claude.com/docs 구성을 따르고, 디자인 토큰·폰트·로고는 Specify 앱(`../specify`)에서 그대로 가져왔다.

## 개발

```bash
nvm use            # Node 24
npm ci
npm run dev        # http://localhost:3000 → /ko/intro 로 이동
npm run validate   # typecheck + lint + build
```

## 구조

| 경로 | 역할 |
| --- | --- |
| `src/lib/navigation.ts` | 탭·그룹·페이지 순서와 slug 의 SSOT (`NAV_STRUCTURE`, 모든 로케일 공유) |
| `src/i18n/nav/<locale>.ts` | 로케일별 탭·그룹·페이지 제목·설명. `NavLabels` 타입이 누락을 막는다 |
| `src/content/<locale>/<slug>.mdx` | 문서 본문. 로케일마다 같은 slug 파일을 둔다 |
| `src/lib/i18n.ts` | 지원 로케일(`ko`·`en`·`ja`), 기본 로케일(`ko`), Accept-Language 협상 |
| `src/app/[lang]/layout.tsx` | 루트 레이아웃(`<html lang>`), 헤더·사이드바·푸터 |
| `src/app/[lang]/[...slug]/page.tsx` | 문서 페이지(정적 생성), 목차, 이전/다음 |
| `src/components/mdx/` | MDX 컴포넌트: `Callout`/`Note`/`Tip`/`Warning`/`Danger`, `Card`/`CardGroup`, `Steps`/`Step`, `Tabs`/`Tab`, `Screenshot`, 코드 블록 |
| `public/images/docs/<locale>/` | 문서 스크린샷(PNG). 로케일별 UI 언어로 캡처 |
| `src/i18n/` | UI 문자열 사전 |
| `src/proxy.ts` | 로케일 없는 경로 → 선호 로케일(쿠키 `NEXT_LOCALE` → Accept-Language → `ko`)로 리다이렉트, `/<lang>/<slug>.md` → Markdown 원문 rewrite |
| `src/app/globals.css` | Specify 디자인 토큰(Foundation → Semantic → `@theme`) + 문서 본문 스타일 |

## 문서 추가하기

1. `src/lib/navigation.ts` 의 `NAV_STRUCTURE` 에서 원하는 그룹의 `pages` 에 slug 를 추가한다.
2. `src/i18n/nav/{ko,en,ja}.ts` 의 `pages` 에 `{ title, description }` 을 추가한다 (빠지면 typecheck 가 실패한다).
3. `src/content/{ko,en,ja}/<slug>.mdx` 를 만든다. 제목(H1)과 설명은 라벨 값으로 렌더되므로 본문은 `##` 부터 쓴다.
   내부 링크는 해당 로케일 접두사(`/en/...`)를 쓰고, 세 언어의 `##`·`###` 제목 수를 맞춘다.
4. `npm run build` — 라벨은 있는데 파일이 없으면 빌드가 실패한다.

## 언어

`ko`(기본)·`en`·`ja` 세 로케일이 같은 정보 구조를 공유한다. 헤더의 언어 선택은 같은 문서의 다른 언어로 이동하고
선택을 `NEXT_LOCALE` 쿠키에 1년간 기억한다. 제품 UI 라벨(굵은 글씨)은 Specify 저장소의
`src/messages/<namespace>/{ko,en,ja}.json` 에 있는 실제 문자열을 따른다. 새 언어는 `src/lib/i18n.ts` 의 `LOCALES`,
`src/i18n/<locale>.ts`, `src/i18n/nav/<locale>.ts`, `src/content/<locale>/` 를 함께 추가한다.

MDX 예시:

```mdx
<Note>새 프로젝트는 자동 반영 없이 시작합니다.</Note>

<CardGroup cols={2}>
  <Card icon="rocket" title="빠른 시작" href="/ko/quickstart" cta="이동">설명</Card>
</CardGroup>

<Steps>
  <Step title="첫 단계">내용</Step>
</Steps>
```

### 스크린샷

```mdx
<Screenshot name="editor" alt="화면 설명(스크린 리더용)" caption="선택 캡션" />
```

`name` 은 `public/images/docs/<locale>/<name>.png` 를 가리킨다. 해당 로케일 파일이 없으면 `ko` 이미지로 대체된다.
스크린샷은 Specify 로컬 개발 서버 + sandbox 백엔드의 테스트 워크스페이스에서 1440×900으로 캡처했고,
이메일·이름·워크스페이스 이름 같은 개인 정보는 DOM 에서 가상 값(예: `minji@acme.dev`)으로 바꾼 뒤 찍었다.
새로 찍을 때도 production 계정을 쓰지 않고, 개인 정보·테스트 데이터가 보이지 않게 한 뒤 256색으로 양자화해 용량을 줄인다.

`Card` 아이콘 이름은 `src/components/mdx/Card.tsx` 의 `ICONS` 를 따른다. 목차는 `##`·`###` 제목으로 만들어지므로 제목을 JSX 컴포넌트 안에 넣지 않는다.

## AI·검색용 출력

- `/<lang>/<slug>.md` — 페이지 Markdown 원문 (헤더의 "페이지 복사"가 사용)
- `/llms.txt`, `/llms-full.txt` — LLM용 문서 목록과 전체 원문
- `/<lang>/search-index.json` — ⌘K 검색 색인 (빌드 시 정적 생성)
- `/sitemap.xml`, `/robots.txt` — 프리뷰 배포(`VERCEL_ENV !== production`)는 색인을 막는다

## 디자인 시스템 동기화

`src/app/globals.css` 의 토큰 값, `src/components/ui/button.tsx`, `public/logo.png`·`public/fonts/`·`public/favicons/` 는
Specify 저장소의 `src/app/globals.css`, `src/components/ui/button.tsx`, `public/` 원본을 복사한 것이다.
토큰을 바꿀 때는 Specify 쪽을 먼저 고치고 같은 값을 이 저장소에 반영한다. Tailwind 기본 팔레트는 제거되어 있으므로
`bg-background`, `text-muted-foreground`, `text-brand` 같은 역할 토큰 클래스만 쓴다.

## Vercel 배포

1. 이 저장소를 GitHub에 올리고 Vercel에서 Import 한다. Framework 는 Next.js 로 자동 감지되며 Node 버전은 `package.json` `engines`(24.x)를 따른다.
2. Settings → Domains 에 `docs.specify.app` 을 추가하고, Vercel이 안내하는 CNAME 레코드를 `specify.app` DNS에 등록한다.
3. (선택) 환경 변수 `NEXT_PUBLIC_SITE_URL` — 기본값 `https://docs.specify.app`. canonical·sitemap·llms.txt 절대 주소에 쓰인다.

모든 문서는 빌드 시 정적으로 생성되며, 런타임 코드는 proxy(리다이렉트·rewrite)뿐이다. 인증이 필요한 엔드포인트는 없다.
