import type { NavLabels } from "@/lib/navigation";

export const koNav: NavLabels = {
  tabs: {
    "get-started": "시작하기",
    guides: "가이드",
    mcp: "MCP",
    resources: "리소스",
  },
  groups: {
    "first-steps": "첫 단계",
    workspace: "워크스페이스",
    automation: "문서 자동화",
    "use-cases": "활용 가이드",
    "specify-mcp": "Specify MCP",
    reference: "참고",
  },
  pages: {
    intro: {
      title: "Specify 소개",
      description:
        "Specify는 작은 개발팀을 위한 개발문서 자동화 도구입니다. GitHub의 코드 변경과 관련 문서를 연결하고, 근거가 있는 수정안을 준비합니다.",
    },
    quickstart: {
      title: "빠른 시작",
      description: "워크스페이스를 만들고 GitHub 저장소를 연결해 첫 개발문서를 생성하는 과정을 안내합니다.",
    },
    concepts: {
      title: "핵심 개념",
      description: "워크스페이스, 노드, 문서 프로젝트, 수정안, 스킬 등 Specify를 이해하는 데 필요한 개념을 정리합니다.",
    },
    "workspace/members": {
      title: "팀 초대와 권한",
      description: "워크스페이스에 팀원을 초대하고 역할별로 할 수 있는 일을 확인합니다.",
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
    "guides/api-docs": {
      title: "API 문서 최신화",
      description: "요청·응답·인증·오류·예시가 코드와 어긋나지 않도록 API 문서를 유지하는 방법입니다.",
    },
    "guides/onboarding-docs": {
      title: "온보딩 문서 생성",
      description: "새 팀원이 첫날 실행까지 도달할 수 있는 온보딩 문서를 생성하고 보완하는 방법입니다.",
    },
    "guides/ask-ai": {
      title: "AI에게 질문하기",
      description: "팀 문서와 코드 맥락을 근거로 \"왜\"와 \"어디\" 질문에 답을 얻는 방법입니다.",
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
      description: "Specify 문서와 제품에서 사용하는 용어를 정리합니다.",
    },
    "resources/faq": {
      title: "자주 묻는 질문",
      description: "도입, 문서 자동화, 보안, MCP에 대해 자주 묻는 질문과 답변입니다.",
    },
  },
};
