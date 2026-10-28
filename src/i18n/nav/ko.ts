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
    writing: "설계·캔버스와 AI",
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
      description: "코드를 설계도와 기능 문서로 이해하고 리뷰합니다. 인증 문서 준비와 MCP 연결까지 원하는 작업에서 시작하세요.",
    },
    quickstart: {
      title: "빠른 시작",
      description: "GitHub 저장소에서 첫 문서를 만들고 설계도를 리뷰한 뒤 개선 내용을 코딩 에이전트와 연결합니다.",
    },
    concepts: {
      title: "핵심 개념",
      description: "워크스페이스, 문서, 캔버스, 채팅, 저장소 연결, 편집 기록과 MCP의 관계를 익힙니다.",
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
    "guides/canvas": {
      title: "아키텍처 다이어그램과 캔버스",
      description: "캔버스를 직접 편집하고 하단 명령과 선택 영역으로 에이전트와 설계를 개선합니다.",
    },
    "guides/editor": {
      title: "문서 작성과 편집",
      description: "문서와 캔버스를 편집하고 에이전트 편집 잠금, 변경 기록과 되돌리기로 결과를 관리합니다.",
    },
    "guides/automations": {
      title: "문서 자동 갱신",
      description: "저장소 push로 연결된 문서와 캔버스를 갱신하는 흐름과 확인할 사항입니다.",
    },
    "guides/plugins-skills": {
      title: "도구와 스킬",
      description: "커넥터와 스킬을 관리하고 반복할 작업의 절차를 에이전트에게 알려 줍니다.",
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
      title: "코드로 문서·설계도 만들기",
      description: "저장소를 읽어 기능 문서와 아키텍처 캔버스를 만들고 결과의 근거를 확인합니다.",
    },
    "guides/review-proposals": {
      title: "자동 갱신 결과 확인",
      description: "연결된 문서·캔버스의 직접 갱신 결과와 편집 기록을 검토하고 필요한 변경을 되돌립니다.",
    },
    "guides/automation-settings": {
      title: "저장소 연결 관리",
      description: "문서·캔버스별 저장소 연결과 자동 갱신 범위를 관리합니다.",
    },
    "guides/medical-device-docs": {
      title: "의료기기 문서와 인증 준비",
      description: "제품 자료와 코드 근거로 인증 문서 초안을 준비하고 전문가가 검토할 항목을 정리합니다.",
    },
    "guides/use-cases": {
      title: "내 업무에 맞는 활용사례 찾기",
      sidebarTitle: "활용사례 둘러보기",
      description: "아키텍처 설계, 기획·개발, 고객 대응과 품질 업무에서 원하는 결과를 고르고 준비 자료와 활용 순서를 확인합니다.",
    },
    "guides/architecture-design": {
      title: "페르소나로 따라 하는 아키텍처 설계",
      sidebarTitle: "아키텍처 설계",
      description: "기술 리드 지민의 맘마(육아 앱) 사례로 현재 구조 파악, 대안 비교, 목표 설계, 결정 문서와 MCP 구현까지 따라 합니다.",
    },
    "guides/planning-with-mcp": {
      title: "기획 변경을 MCP로 개발에 연결하기",
      sidebarTitle: "기획·개발 협업",
      description: "기획과 현재 구현을 함께 검토해 개선 문서를 만들고, 코딩 에이전트가 MCP로 읽어 구현·테스트하도록 연결합니다.",
    },
    "guides/security-questionnaires": {
      title: "고객 보안 질문서 답변 준비",
      sidebarTitle: "보안 질문서 답변",
      description: "정책과 운영 증적을 모아 보안 질문별 답변·근거·담당자 확인 항목을 준비합니다.",
    },
    "guides/project-handover": {
      title: "코드와 팀 자료로 인수인계 문서 만들기",
      sidebarTitle: "프로젝트 인수인계",
      description: "기획 자료와 코드를 대조해 구현 범위, 실행 방법과 다음 담당자의 확인 목록을 정리합니다.",
    },
    "guides/customer-updates": {
      title: "변경사항을 고객 안내문과 FAQ로 정리하기",
      sidebarTitle: "고객 안내문과 FAQ",
      description: "변경 자료와 기존 FAQ를 근거로 고객 안내와 답변을 같은 기준으로 정리합니다.",
    },
    "guides/api-docs": {
      title: "API 문서 최신화",
      description: "코드와 API 설명을 대조하고 저장소에 연결한 문서의 직접 갱신 결과를 요청·응답·예시와 함께 확인합니다.",
    },
    "guides/onboarding-docs": {
      title: "온보딩 문서 생성",
      description: "새 팀원이 첫 실행과 코드 이해까지 이어갈 수 있도록 설치·실행·탐색 순서와 팀 절차를 정리합니다.",
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
      description: "워크스페이스, 문서, 캔버스, 저장소 연결, 편집 기록, RAG와 MCP 용어를 익힙니다.",
    },
    "resources/faq": {
      title: "자주 묻는 질문",
      description: "도입, 문서 자동화, 보안, AI 모델, MCP, 요금에 대해 자주 묻는 질문과 답변입니다.",
    },
  },
};
