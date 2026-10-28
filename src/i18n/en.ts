import type { Dictionary } from "./ko";

// 영어 UI 문자열. 키 구성은 ko.ts 와 동일해야 한다 (Dictionary 타입이 검사한다).
export const en: Dictionary = {
  meta: {
    siteTitle: "Specify Docs",
    siteDescription:
      "Official Specify documentation — understand and review code through diagrams and feature documents, prepare certification documents, and connect knowledge through MCP.",
  },
  header: {
    docs: "Docs",
    homeAria: "Specify Docs home",
    openApp: "Open Specify",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    tabsAria: "Documentation sections",
    skipToContent: "Skip to content",
    languageAria: "Select language",
  },
  search: {
    trigger: "Search docs",
    placeholder: "Search docs...",
    empty: "No results found.",
    loading: "Loading index...",
    error: "Couldn't load the search index.",
    hint: "Type a keyword to search titles, sections, and body text.",
    navigate: "Navigate",
    select: "Open",
    close: "Close",
    dialogTitle: "Search docs",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  sidebar: {
    aria: "Docs navigation",
  },
  toc: {
    title: "On this page",
  },
  page: {
    copy: "Copy page",
    copied: "Copied",
    viewMarkdown: "View as Markdown",
    prev: "Previous",
    next: "Next",
    feedback: "Found something wrong in this page, or have a suggestion?",
    feedbackCta: "Send feedback",
  },
  code: {
    copy: "Copy code",
    copied: "Copied",
  },
  footer: {
    design: "Design & visualization",
    certify: "Certification documents",
    mcp: "Specify MCP",
    product: "Product",
    home: "Specify home",
    pricing: "Pricing",
    blog: "Blog",
    legal: "Legal",
    privacy: "Privacy policy",
    terms: "Terms of service",
    support: "Support",
    contact: "Contact us",
    copyright: "© Specify",
  },
  notFound: {
    title: "Page not found",
    description: "The address may have changed, or the page may have been removed.",
    home: "Back to docs home",
  },
};
