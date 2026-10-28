# 공식문서 전체 개편 계획

**Goal:** 최근 Specify 코드와 랜딩의 설계·시각화 메시지를 바탕으로 ko/en/ja 문서와 실제 sandbox 이미지를 갱신한다.
**Architecture:** 기존 Next.js MDX와 NAV_STRUCTURE를 유지한다. 설계·시각화, 인증 문서, MCP 진입점을 연결하고 제거된 프로젝트·수정안 승인 설명을 현재 문서/캔버스 연결·직접 갱신·기록 확인 흐름으로 교체한다.
**Tech Stack:** Next.js 16.3.7, MDX, Tailwind v4, sandbox AWS, 실제 브라우저.

## 제약과 검토 기준

- Specify 실행 코드·메시지를 사실 근거로 사용한다. 기존 주소는 유지하며 표시 제목을 갱신한다.
- ko/en/ja 제목 구조·컴포넌트·코드 블록을 맞춘다. 가격은 pricing 링크로 안내한다.
- 기존 Specify 작업 트리 변경을 건드리지 않는다. 새 촬영 계정은 별도 임시 디렉터리에 자격증명을 보관한다.
- AWS identity와 sandbox 스택 소유권을 확인한 뒤 새 계정과 해당 계정 데이터만 변경한다.
- 스크린샷은 실제 UI에서 촬영한다. 개인 정보와 내부 값은 노출하지 않는다.
- 이전 기능 안내, 잘못된 UI 경로, 누락 이미지, 로케일 불일치, 모바일 overflow를 확인한다.

## 작업

- [x] 1. 전체 36개 원문과 대응 번역을 실행 코드·메시지에 대조하여 근거와 수정 범위를 기록한다.
- [x] 2. 사용자 후속 지시에 따라 기존 로그인 계정을 정리한다. Max 상태를 확인하고 GitHub 연결을 유지한다. 처음 만든 미사용 촬영 계정은 sandbox 소유권 재확인 후 삭제한다. 실제 결제는 하지 않는다.
- [x] 3. 가상 서비스 문서·캔버스·채팅 사례를 작성하고 각 로케일의 주요 화면을 촬영한다.
- [x] 4. 소개·빠른 시작·기능 가이드·모델·MCP·리소스와 인증 제품 진입점을 모든 언어에서 갱신한다.
- [x] 5. 링크·이미지·로케일 구조 점검, npm run validate, 라이트·다크·모바일 브라우저 확인 후 변경 결과와 남은 제한을 기록한다.


## 완료 기록

- 2026-10-28: ko/en/ja 각각 36개, 총 108개 본문과 탐색 제목·설명을 최신 실행 코드에 맞췄다.
- 기존 문서·캔버스 13개와 기존 채팅 8개를 사용자 최종 확인 후 삭제했다. 촬영 중 만들어진 임시 배치 검증 캔버스도 삭제했다. 휴지통과 설정 보관함을 비웠고 인박스의 `모두 확인했습니다` 상태를 확인했다.
- 기존 개인 워크스페이스를 `Mamma`로 정리했다. 이미 Max였으므로 결제나 구독 상품 변경은 하지 않았다.
- `dev-thug/mamma`의 `develop` 코드를 실제로 읽어 문서 3개와 캔버스 3개를 만들었다. 생성·리뷰 작업 모델은 Claude Haiku 5.5였다. 자료를 한국어·English·日本語 폴더에 나눴다.
- 문서와 캔버스 6개에 각각 맘마 저장소를 연결하고 대상 브랜치와 연결 상태를 확인했다. 소스 저장소에 push를 만들지는 않았으므로 웹훅에 의한 갱신 실행은 이번 검증 범위에 포함하지 않는다.
- 홈, GitHub 저장소 선택, 문서, 캔버스, 리뷰 채팅, 콘텐츠 연결의 6개 장면을 세 언어·두 테마에서 촬영했다. 36개 PNG 모두 1440×900이다. 원본 UI와 실제 생성 콘텐츠를 사용했으며 이미지 위에 가짜 UI나 번역을 합성하지 않았다.
- 미사용 이미지 116개를 제거했다. 이미지 디렉터리는 약 49MB에서 5.3MB로 줄었다.
- `Screenshot.tsx`는 라이트 기본 PNG와 `-dark.png`를 CSS 테마로 전환한다. PNG 헤더의 실제 크기로 레이아웃을 예약한다. 현재 54개 Screenshot 사용처는 모두 해당 언어의 두 테마 이미지를 갖춘다.
- 소개의 제품 카드와 공통 푸터에 설계·시각화, 인증 문서, MCP 진입점을 제공한다. 인증 지원은 Specify Certify와 문서 준비 가이드로 연결한다.

## 검증 근거

- `npm run validate`: typecheck, ESLint, Next.js 정적 빌드 모두 통과. 228개 정적 경로 생성.
- 별도 구조 점검: 108개 문서의 내부 링크, 로케일 일치, 제목·컴포넌트·코드 블록 구조, 테마별 이미지 존재 확인. 오류 0.
- `git diff --check`: 통과.
- 브라우저: 데스크톱 1280px에서 다크·라이트 실제 이미지 경로와 표시 전환 확인. 390px 모바일에서 실제 이미지 로딩과 3개 언어 소개, 빠른 시작, 문서·설계도 가이드, 인증 문서, MCP 연결 페이지의 가로 넘침 없음 확인.
- 독립 검토: 본문, MCP/모델/권한, 공통 푸터와 이미지 컴포넌트를 검토했다. 남아 있던 예약 자동화 문구와 낡은 라벨을 수정했고 최종 중요 지적 없음.
- 운영 배포와 GitHub push는 하지 않았다.

## 주요 사실 근거

| 범위 | Specify 실행 코드·메시지 |
| --- | --- |
| 저장소 문서 생성 | `src/features/workspace/components/start/RepositoryDocumentStart.tsx`, `src/messages/workspace/{ko,en,ja}.json`의 `start.repositoryDocument` |
| 직접 자동 갱신 | `server/application/document-automation/service.ts` |
| 저장소 연결 UI | `src/features/content/components/ContentConnectionsButton.tsx`, `explorer/EventConnectionsSubmenu.tsx` |
| 문서·캔버스·이력 | `src/features/content/components/CanvasContentContainer.tsx`, `RequestHistoryToolbar.tsx`, `src/messages/agentEditHistory/` |
| MCP 도구와 권한 | `server/transport/mcp/tools.ts`, `server/application/mcp/scopes.ts`, `server/composition/mcp.ts` |
| 모델 | `shared/models/model_catalog.json`, `shared/models/pricing.ts` |
| 설정·스킬·커넥터 | `src/features/settings/components/SettingsSidebar.tsx`, `src/features/workspace/components/SkillsConnectorsTab.tsx`, `src/features/connectors/providers/catalog.ts` |
| 표준 | `catalog/standards/manifest.json`, `docs/ops/knowledge-standards-runbook.md` |
| 랜딩 방향 | `src/messages/home/`, `src/messages/product/`, `src/components/landing/`, `src/components/product/` |
| 인증 지원 | `../specify-certify/src/messages/ko.ts`, `../specify-certify/src/lib/service-links.ts` |

모델 측정 원천으로 지시된 `scripts/bench/baselines/`는 현재 저장소에 없으므로 기존의 검증되지 않은 성능 수치를 제거하고, 측정 근거가 없는 모델 우열을 추천하지 않았다.
