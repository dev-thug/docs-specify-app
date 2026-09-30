import type { Dictionary } from "./ko";

// 일본어 UI 문자열. 키 구조는 ko.ts 의 Dictionary 타입을 그대로 따른다.
export const ja: Dictionary = {
  meta: {
    siteTitle: "Specifyドキュメント",
    siteDescription:
      "Specify公式ドキュメント — GitHubのコード変更と開発ドキュメントをつなぐ開発ドキュメント自動化、AIドキュメント検索、MCP接続ガイド。",
  },
  header: {
    docs: "Docs",
    homeAria: "Specifyドキュメントのホーム",
    openApp: "Specifyを開く",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    tabsAria: "ドキュメントのセクション",
    skipToContent: "本文へスキップ",
    languageAria: "言語を選択",
  },
  search: {
    trigger: "ドキュメントを検索",
    placeholder: "ドキュメントを検索...",
    empty: "検索結果がありません。",
    loading: "インデックスを読み込んでいます...",
    error: "検索インデックスを読み込めませんでした。",
    hint: "キーワードを入力してください。タイトル、セクション、本文から検索します。",
    navigate: "移動",
    select: "開く",
    close: "閉じる",
    dialogTitle: "ドキュメントを検索",
  },
  theme: {
    toggle: "テーマを切り替え",
    light: "ライト",
    dark: "ダーク",
    system: "システム",
  },
  sidebar: {
    aria: "ドキュメントのナビゲーション",
  },
  toc: {
    title: "このページの内容",
  },
  page: {
    copy: "ページをコピー",
    copied: "コピーしました",
    viewMarkdown: "Markdownで表示",
    prev: "前へ",
    next: "次へ",
    feedback: "このドキュメントに誤りや改善点はありますか？",
    feedbackCta: "フィードバックを送る",
  },
  code: {
    copy: "コードをコピー",
    copied: "コピーしました",
  },
  footer: {
    product: "製品",
    home: "Specifyホーム",
    pricing: "料金プラン",
    blog: "ブログ",
    legal: "ポリシー",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    support: "サポート",
    contact: "お問い合わせ",
    copyright: "© Specify",
  },
  notFound: {
    title: "ページが見つかりません",
    description: "アドレスが変更されたか、削除されたドキュメントの可能性があります。",
    home: "ドキュメントのホームへ",
  },
};
