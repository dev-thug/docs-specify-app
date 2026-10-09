import type { NavLabels } from "@/lib/navigation";

export const koNav: NavLabels = {
  tabs: {
    "get-started": "시작하기",
    guides: "가이드",
    ai: "모델·지식",
    mcp: "MCP",
    resources: "리소스",
  },
  groups: {
    "first-steps": "첫 단계",
    workspace: "워크스페이스",
    writing: "문서 작성과 AI",
    automation: "문서 자동화",
    extend: "자동화와 확장",
    "use-cases": "활용 가이드",
    models: "모델",
    knowledge: "지식과 검색",
    "specify-mcp": "Specify MCP",
    reference: "참고",
  },
  pages: {
    intro: {
      title: "Specify 소개",
      description:
        "Specify는 개발팀을 위한 개발문서 자동화 도구입니다. GitHub의 코드 변경과 관련 문서를 연결하고, 근거가 있는 수정안을 준비합니다.",
    },
    quickstart: {
      title: "빠른 시작",
      description: "워크스페이스를 만들고 GitHub 저장소를 연결해 첫 개발문서를 생성하는 과정을 안내합니다.",
    },
    concepts: {
      title: "핵심 개념",
      description: "워크스페이스, 노드, 문서 프로젝트, 수정안, 스킬 등 Specify를 이해하는 데 필요한 개념을 정리합니다.",
    },
    "workspace/tour": {
      title: "화면 둘러보기",
      description: "사이드바, 탭, 검색, 인박스, AI 패널 등 Specify 화면 구성과 각 영역의 역할을 실제 화면으로 안내합니다.",
    },
    "workspace/members": {
      title: "팀 초대와 권한",
      description: "워크스페이스에 팀원을 초대하고 소유자·관리자·편집자·뷰어 역할별로 할 수 있는 일과 문서 접근 범위를 확인합니다.",
    },
    "workspace/settings": {
      title: "설정 한눈에 보기",
      description: "계정, 워크스페이스, AI 에이전트, 요금·사용량 설정이 어디에 있고 무엇을 바꿀 수 있는지 정리합니다.",
    },
    "guides/editor": {
      title: "문서 작성과 편집",
      description: "문서를 만들고 블록 명령어, 상태, 공유, 파일 업로드로 팀 문서를 정리하는 방법입니다.",
    },
    "guides/automations": {
      title: "자동화 루틴",
      description: "정해진 일정에 에이전트가 프롬프트를 실행하도록 자동화를 만들고 관리합니다.",
    },
    "guides/plugins-skills": {
      title: "플러그인과 스킬",
      description: "공식 플러그인을 설치하고 스킬로 반복 작업의 절차를 에이전트에게 알려 주는 방법입니다.",
    },
    "guides/connectors": {
      title: "커넥터 연결",
      description: "GitHub, Notion, Slack, Jira, Linear, Google과 커스텀 MCP 서버를 연결해 AI가 참고할 자료를 넓힙니다.",
    },
    "models/overview": {
      title: "모델 개요",
      description: "Specify의 현행 AI 모델, 플랜별 이용 범위, 컨텍스트와 사고 강도를 안내합니다.",
    },
    "models/choosing": {
      title: "모델 선택 가이드",
      description: "문서 작성·편집 성능과 도구 호출 기록을 바탕으로 작업에 맞는 모델 선택 기준을 안내합니다.",
    },
    "models/usage": {
      title: "사용량과 AI 예산",
      description: "AI 사용량이 계산되는 방식, 예산 경고와 충전, 사용량을 아끼는 방법을 설명합니다.",
    },
    "knowledge/rag": {
      title: "워크스페이스 RAG",
      description: "워크스페이스의 문서와 파일, 연결된 자료를 AI가 검색해 근거로 답하고 문서를 쓰는 방식을 설명합니다.",
    },
    "knowledge/standards": {
      title: "표준 문서 라이브러리",
      description: "IEC 62304·ISO 14971 등 표준 조항을 RAG로 검색해 근거와 인용이 있는 정확한 문서를 작성하는 방법입니다.",
    },
    "guides/github": {
      title: "GitHub 연결",
      description: "워크스페이스에 GitHub 계정과 저장소를 연결하는 방법과 조직 저장소 승인 절차를 안내합니다.",
    },
    "guides/doc-projects": {
      title: "문서 프로젝트 만들기",
      description: "GitHub 소스, 문서 종류, 갱신 방식을 선택해 코드 기반 문서 프로젝트를 만듭니다.",
    },
    "guides/review-proposals": {
      title: "수정안 검토와 반영",
      description: "코드 변경으로 준비된 문서 수정안을 근거와 함께 검토하고 반영하는 흐름을 설명합니다.",
    },
    "guides/automation-settings": {
      title: "자동화 상세 설정",
      description: "push 트리거, 작성 스킬, 출력 폴더, 프로젝트 스타일 가이드로 문서 자동화를 조정합니다.",
    },
    "guides/medical-device-docs": {
      title: "의료기기 SW 개발 문서 자동화",
      sidebarTitle: "의료기기 개발 문서",
      description: "의료기기 개발 문서의 빈 곳을 찾기 어려울 때. 코드 근거가 있는 요구사항·설계·SOUP 초안과 갭 리포트를 만듭니다. 담당자와 전문가가 누락·미확정 항목을 검토합니다.",
    },
    "guides/use-cases": {
      title: "내 업무에 맞는 활용사례 찾기",
      sidebarTitle: "활용사례 둘러보기",
      description: "기획·개발·고객 대응·품질 업무에서 겪는 문제를 고르고, 필요한 자료와 Specify 활용 순서·결과를 확인합니다.",
    },
    "guides/planning-with-mcp": {
      title: "기획 변경을 MCP로 개발에 연결하기",
      sidebarTitle: "기획·개발 협업",
      description: "기획이 바뀌었는데 개발은 옛 문서를 볼 때. 기획을 Specify의 같은 문서에 정리하고 Claude Code·Codex에서 MCP로 다시 읽습니다. 변경된 조건을 구현 계획과 테스트에 맞춥니다.",
    },
    "guides/security-questionnaires": {
      title: "고객 보안 질문서 답변 준비",
      sidebarTitle: "보안 질문서 답변",
      description: "고객 보안 질문에 어떤 답을 써야 할지 모를 때. 최신 정책과 과거 답변을 비교해 질문별 답변·근거·확인 상태를 만듭니다. 담당자가 확인할 질문을 따로 모읍니다.",
    },
    "guides/project-handover": {
      title: "코드와 팀 자료로 인수인계 문서 만들기",
      sidebarTitle: "프로젝트 인수인계",
      description: "담당자가 바뀌는데 구현 범위를 모를 때. 기획 메모와 코드를 대조해 완료 기능과 미구현 요청을 구분합니다. 실행 방법과 다음 담당자의 확인 목록을 남깁니다.",
    },
    "guides/customer-updates": {
      title: "변경사항을 고객 안내문과 FAQ로 정리하기",
      sidebarTitle: "고객 안내문과 FAQ",
      description: "릴리스 안내와 FAQ가 서로 다를 때. 변경 자료와 기존 FAQ로 고객 안내·FAQ 수정안을 함께 준비합니다. 바뀐 설명과 유지할 한도·조건을 맞춥니다.",
    },
    "guides/api-docs": {
      title: "API 문서 최신화",
      description: "API는 바뀌었는데 문서와 예시가 그대로일 때. GitHub 변경을 근거가 있는 API 문서 수정안으로 연결합니다. 관련 문서의 요청·응답·예시를 대조한 뒤 반영합니다.",
    },
    "guides/onboarding-docs": {
      title: "온보딩 문서 생성",
      description: "새 팀원이 설치와 실행부터 막힐 때. 저장소를 읽어 설치·실행·코드 탐색 순서를 안내합니다. 팀 절차를 보완하고 새 환경에서 따라 해 보며 문서를 고칩니다.",
    },
    "guides/ask-ai": {
      title: "AI 채팅과 질문",
      description: "AI 채팅에서 팀 문서와 코드 맥락을 근거로 답을 얻고, 모델과 사고 강도를 고르는 방법입니다.",
    },
    "mcp/overview": {
      title: "MCP 개요",
      description: "Specify MCP 서버로 Claude Code·Codex·Cursor 같은 코딩 에이전트에 팀 맥락을 연결합니다.",
    },
    "mcp/connect": {
      title: "에디터·에이전트 연결",
      description: "Claude Code, Codex, Cursor, VS Code, Claude Desktop에 Specify MCP 서버를 등록하는 방법입니다.",
    },
    "mcp/tools": {
      title: "제공 도구",
      description: "Specify MCP 서버가 노출하는 검색·읽기·탐색·생성·편집 도구를 설명합니다.",
    },
    "mcp/access": {
      title: "토큰과 접근 정책",
      description: "MCP 토큰의 권한 범위, 폐기 방법, 관리자용 워크스페이스 접근 정책을 설명합니다.",
    },
    "resources/security": {
      title: "보안과 데이터",
      description: "Specify가 워크스페이스 데이터를 다루는 방식과 권한 경계를 설명합니다.",
    },
    "resources/plans": {
      title: "요금제",
      description: "Specify 요금제 구성과 최신 요금·한도를 확인하는 방법을 안내합니다.",
    },
    "resources/glossary": {
      title: "용어집",
      description: "워크스페이스, 문서 프로젝트, 수정안, RAG, MCP 등 Specify 문서와 제품에서 사용하는 용어를 한 줄 정의로 정리합니다.",
    },
    "resources/faq": {
      title: "자주 묻는 질문",
      description: "도입, 문서 자동화, 보안, AI 모델, MCP, 요금에 대해 자주 묻는 질문과 답변입니다.",
    },
  },
};
