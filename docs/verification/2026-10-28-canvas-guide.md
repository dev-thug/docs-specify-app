# 아키텍처·캔버스 가이드 보완

## 문서 구성

- guides/canvas 신규 3개 언어: 다이어그램/캔버스 선택, 첫 아키텍처 생성, 하단 명령, 선택 항목 맥락, 직접 편집, 저장 검토, MCP 구현 연결.
- 가이드 첫 페이지를 캔버스로 배치하고 그룹 이름을 설계·캔버스와 AI로 확장.
- editor, ask-ai, architecture-design의 세 언어 본문에 하단 명령과 새 가이드 연결.
- 영문 입력 안내는 chat/en.json의 실제 Ask to edit this canvas… 사용.

## 제품 근거와 실제 실행

- CanvasContentContainer.tsx: 활성 캔버스 하단 composer host와 선택 context 전달, 저장 상태, 잠금/저장 안내.
- WorkspaceLayoutClient.tsx: 같은 ConversationPanel의 composerTarget 위치 변경. 패널을 닫아도 같은 대화의 입력을 캔버스 하단에서 사용.
- selectionContext.ts: 선택 도형·연결선·라벨을 인용 자료로 전달. 선택 외 영역 보호를 보장한다고 쓰지 않고 요청 범위 명시와 결과 검토를 안내.
- CanvasEditor.tsx: 직접 도형/텍스트/연결 편집, 이동/확대, 실행 취소·다시 실행.
- MermaidDiagramView/Viewer와 diagramClipboard: 문서 다이어그램 확대·복사 및 캔버스 붙여넣기.
- sandbox Mamma 한국어 아키텍처 하단에서 Claude Haiku 5.5/끄기로 기존 구성요소와 연결을 유지하며 흐름 배치를 정리하도록 요청. read_canvas, edit_canvas 완료와 저장됨 및 실제 변경된 도형 배치를 확인.
- 선택 항목 명령 장면은 데이터 API를 실제 선택한 뒤 작성한 전송 전 예시. 추가적인 선택 영역 수정 실행을 검증했다고 주장하지 않음.

## 캡처와 검증

- canvas-command, canvas-selection: ko/en/ja × light/dark = PNG 12개.
- 실제 제품 UI/로케일과 해당 언어 캔버스 사용. 1440×1000 뷰포트에서 1130×940 콘텐츠 영역을 자름. 이메일과 탐색기의 다른 테스트 항목은 캡처 범위에서 제외.
- 촬영 원본 /tmp/specify-canvas-captures. 영문·일문·한국어 라이트 선택 장면은 실제 선택 표시 1개를 확인하고 native 전체 캡처에서 잘라 저장.
- npm run validate 통과: typecheck, lint, build 240 routes.
- 네 가이드의 세 로케일 제목·스크린샷·코드 블록 구조 일치, PNG 12개 존재 및 git diff --check 확인.
- 브라우저 라이트/다크 전환 이미지 로딩 확인, 390px 모바일 가로 넘침 없음.
