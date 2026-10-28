# 모델 섹션 시각 가이드 보완

- 범위: models/overview, choosing, usage의 ko·en·ja 9개 문서.
- 개요: 모델·스킬·플러그인/연동·커넥터 역할 비교, 맘마(육아 앱) 예제, 도구 화면 진입과 GitHub 연결/내 AI 사용 확인, 상세 가이드 링크.
- sandbox 실제 UI에서 모델 선택, 사고 강도, 스킬 검색, GitHub 커넥터 검색, 사용량을 3개 언어 × 라이트·다크로 촬영. 새 PNG 30개. 원본은 /tmp/specify-model-captures.
- 메뉴는 실제 화면을 자르고, 사용량은 이메일과 충전 금액을 제외한 영역만 사용. 스킬 설명 본문은 제품이 현재 표시하는 원문 그대로 보존.
- Screenshot 컴포넌트는 작은 캡처를 원본 너비까지만 표시해 과도한 확대를 방지.
- 근거: Specify의 ComposerModelSettings.tsx, SkillsConnectorsTab.tsx, UsageSection.tsx, server/adapters/agent-tools/capabilities.ts 및 실제 sandbox UI. 플러그인 연동은 현재 커넥터 화면의 서비스/MCP 연결로 설명.
- 검증: npm run validate 통과(typecheck, lint, build 234 routes), git diff --check 통과, 3개 로케일 제목 구조·스크린샷 이름 일치 및 30개 테마 자산 존재 확인. 브라우저에서 라이트·다크 전환과 390px 모바일 가로 넘침 없음 확인. 캡처 연락시트 및 사고 강도 6장 시각 검수.
