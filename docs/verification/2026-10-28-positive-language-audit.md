# 공식문서 표현 전수 점검과 아키텍처 활용 가이드

2026-10-28 사용자 요청을 반영했다.

## 점검 범위와 결과

- 기존 ko·en·ja 108페이지 전수 점검: 96페이지의 표현을 개선하고 12페이지의 적절한 안내를 유지했다.
- 아키텍처 설계 가이드를 세 언어로 추가·검토했다. 총 점검 범위는 111페이지다.
- 탐색 제목·설명과 활용사례 진입점도 함께 확인했다.
- 표준 목록은 `../specify/catalog/standards/manifest.json`의 `PUBLISHED` 11개 항목과 표준명·판을 대조한 표로 바꿨다.

## 문장 원칙

가능한 작업, 적용 조건, 사용자가 이어서 할 행동 순서로 설명한다. 기능을 부정하는 대조문 대신 실제로 지원되는 흐름을 안내한다. 사실 범위와 보안 조건은 유지한다.

| 이전 표현 유형 | 개선 방향 |
| --- | --- |
| 완료 표시만으로 검증된 것은 아님 | 저장 결과와 소스를 대조하고 보완을 요청하는 순서 |
| MCP는 작업을 보내는 기능이 아님 | 코딩 에이전트에서 문서 읽기와 구현을 요청하는 실제 흐름 |
| 인증을 보장하지 않음 | 초안 작성 → 전문가 검토 → 해당 평가 절차에서 적합성 확인 |
| 예전 모델 측정값을 적용할 수 없음 | 현행 모델의 측정 상태를 밝히고 동일 조건으로 별도 비교 |
| 자료가 없음·확인할 수 없음 | 처리 상태, 원문, 추가 확인할 질문을 안내 |

영구 삭제의 복구 조건, 토큰·시크릿 취급, 권한 범위, 미저장 내용, 미측정 모델, 인증 심사 조건은 의미를 보존했다. 실제 UI의 오류·상태 라벨과 기능 범위를 한정하는 표현도 유지했다. 코드 블록의 사실·보안 지시문은 작업 의미를 기준으로 검토했다.

## 새 활용 가이드

가상의 기술 리드 지민이 맘마 기록 저장 기능의 다음 구조를 설계한다. 실제 코드에서 만든 현재 구조와 가상 요구사항에 대한 목표 설계를 구분한다. 준비 자료, 현재 구조 분석, 대안 비교, 목표 캔버스, 설계 결정 문서, MCP 구현 요청, 갱신 결과 확인, 완료 체크리스트를 제공한다. 자동 갱신 연결은 현재 상태 자료에 적용하고 목표 결정 문서는 합의 기준으로 유지한다.

## 페이지별 점검

각 행은 ko·en·ja 세 언어를 모두 포함한다.

| 문서 경로 | 점검 결과 |
| --- | --- |
| `concepts` | 표현 개선 |
| `guides/api-docs` | 표현 개선 |
| `guides/architecture-design` | 추가·검토 |
| `guides/ask-ai` | 표현 개선 |
| `guides/automation-settings` | 표현 개선 |
| `guides/automations` | 표현 개선 |
| `guides/connectors` | 표현 개선 |
| `guides/customer-updates` | 표현 개선 |
| `guides/doc-projects` | 표현 개선 |
| `guides/editor` | 표현 개선 |
| `guides/github` | 표현 개선 |
| `guides/medical-device-docs` | 표현 개선 |
| `guides/onboarding-docs` | 표현 개선 |
| `guides/planning-with-mcp` | 표현 개선 |
| `guides/plugins-skills` | 표현 개선 |
| `guides/project-handover` | 표현 개선 |
| `guides/review-proposals` | 표현 개선 |
| `guides/security-questionnaires` | 표현 개선 |
| `guides/use-cases` | 표현 개선 |
| `intro` | 표현 개선 |
| `knowledge/rag` | 표현 개선 |
| `knowledge/standards` | 표현 개선 |
| `mcp/access` | 표현 개선 |
| `mcp/connect` | 표현 개선 |
| `mcp/overview` | 표현 개선 |
| `mcp/tools` | 표현 개선 |
| `models/choosing` | 표현 개선 |
| `models/overview` | 표현 개선 |
| `models/usage` | 표현 개선 |
| `quickstart` | 표현 개선 |
| `resources/faq` | 표현 개선 |
| `resources/glossary` | 기존 안내 유지 |
| `resources/plans` | 기존 안내 유지 |
| `resources/security` | 기존 안내 유지 |
| `workspace/members` | 표현 개선 |
| `workspace/settings` | 표현 개선 |
| `workspace/tour` | 기존 안내 유지 |

## 검증

- `npm run validate`: typecheck, lint, 정적 빌드 통과. 234개 정적 경로 생성.
- 111페이지 내부 링크·로케일·제목/컴포넌트/코드 블록 구조와 60개 Screenshot 참조 확인, 오류 0.
- 표준 표 세 언어 모두 `PUBLISHED` 11개 항목과 일치.
- 새 가이드의 현재/목표 설계 구분, MCP 캔버스 읽기, 언어별 구조를 독립 검토했다. 중요 지적 없음.
- 브라우저에서 새 가이드 라이트·다크와 표준 표의 390px 모바일 배치를 확인했다. 가로 넘침 없음.
- `git diff --check` 통과. 운영 배포는 수행하지 않았다.
