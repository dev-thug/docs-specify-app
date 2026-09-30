// 한국어 UI 문자열. 컴포넌트는 문자열을 직접 쓰지 않고 getDictionary(locale) 로 받는다.
export const ko = {
  meta: {
    siteTitle: "Specify 문서",
    siteDescription:
      "Specify 공식 문서 — GitHub 코드 변경과 개발문서를 연결하는 개발문서 자동화, AI 문서 검색, MCP 연결 가이드.",
  },
  header: {
    docs: "Docs",
    homeAria: "Specify 문서 홈",
    openApp: "Specify 열기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    tabsAria: "문서 섹션",
    skipToContent: "본문으로 건너뛰기",
    languageAria: "언어 선택",
  },
  search: {
    trigger: "문서 검색",
    placeholder: "문서 검색...",
    empty: "검색 결과가 없습니다.",
    loading: "색인을 불러오는 중...",
    error: "검색 색인을 불러오지 못했습니다.",
    hint: "키워드를 입력하세요. 제목, 섹션, 본문에서 찾습니다.",
    navigate: "이동",
    select: "열기",
    close: "닫기",
    dialogTitle: "문서 검색",
  },
  theme: {
    toggle: "테마 전환",
    light: "라이트",
    dark: "다크",
    system: "시스템",
  },
  sidebar: {
    aria: "문서 탐색",
  },
  toc: {
    title: "이 페이지의 내용",
  },
  page: {
    copy: "페이지 복사",
    copied: "복사됨",
    viewMarkdown: "Markdown으로 보기",
    prev: "이전",
    next: "다음",
    feedback: "이 문서에 잘못된 내용이 있거나 개선할 점이 있나요?",
    feedbackCta: "의견 보내기",
  },
  code: {
    copy: "코드 복사",
    copied: "복사됨",
  },
  footer: {
    product: "제품",
    home: "Specify 홈",
    pricing: "요금제",
    blog: "블로그",
    legal: "정책",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    support: "지원",
    contact: "문의하기",
    copyright: "© Specify",
  },
  notFound: {
    title: "페이지를 찾을 수 없습니다",
    description: "주소가 바뀌었거나 삭제된 문서일 수 있습니다.",
    home: "문서 홈으로",
  },
};

export type Dictionary = typeof ko;
