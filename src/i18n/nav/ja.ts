import type { NavLabels } from "@/lib/navigation";

export const jaNav: NavLabels = {
  tabs: {
    "get-started": "はじめに",
    guides: "ガイド",
    mcp: "MCP",
    resources: "リソース",
  },
  groups: {
    "first-steps": "最初のステップ",
    workspace: "ワークスペース",
    automation: "ドキュメント自動化",
    "use-cases": "活用ガイド",
    "specify-mcp": "Specify MCP",
    reference: "リファレンス",
  },
  pages: {
    intro: {
      title: "Specifyの概要",
      description:
        "Specifyは小規模な開発チームのための開発ドキュメント自動化ツールです。GitHubのコード変更と関連ドキュメントをつなぎ、根拠のある修正案を用意します。",
    },
    quickstart: {
      title: "クイックスタート",
      description: "ワークスペースを作成し、GitHubリポジトリを接続して最初の開発ドキュメントを生成するまでの流れを説明します。",
    },
    concepts: {
      title: "主要な概念",
      description:
        "ワークスペース、ノード、ドキュメントプロジェクト、修正案、スキルなど、Specifyを理解するために必要な概念をまとめます。",
    },
    "workspace/members": {
      title: "チームの招待と権限",
      description: "ワークスペースにチームメンバーを招待し、役割ごとにできることを確認します。",
    },
    "guides/github": {
      title: "GitHubの接続",
      description: "ワークスペースにGitHubアカウントとリポジトリを接続する方法と、組織リポジトリの承認手順を説明します。",
    },
    "guides/doc-projects": {
      title: "ドキュメントプロジェクトの作成",
      description: "GitHubソース、ドキュメント種別、更新方式を選択して、コードに基づくドキュメントプロジェクトを作成します。",
    },
    "guides/review-proposals": {
      title: "修正案のレビューと反映",
      description: "コード変更によって用意されたドキュメントの修正案を、根拠とあわせてレビューし反映する流れを説明します。",
    },
    "guides/automation-settings": {
      title: "自動化の詳細設定",
      description: "pushトリガー、作成スキル、出力フォルダ、プロジェクトのスタイルガイドでドキュメント自動化を調整します。",
    },
    "guides/api-docs": {
      title: "APIドキュメントを最新に保つ",
      description: "リクエスト・レスポンス・認証・エラー・例がコードとずれないようにAPIドキュメントを維持する方法です。",
    },
    "guides/onboarding-docs": {
      title: "オンボーディングドキュメントの生成",
      description: "新しいチームメンバーが初日に実行までたどり着けるオンボーディングドキュメントを生成し、補完する方法です。",
    },
    "guides/ask-ai": {
      title: "AIに質問する",
      description: "チームのドキュメントとコードの文脈を根拠に、「なぜ」と「どこ」の質問に答えを得る方法です。",
    },
    "mcp/overview": {
      title: "MCPの概要",
      description: "Specify MCPサーバーで、Claude Code・Codex・Cursorなどのコーディングエージェントにチームの文脈をつなぎます。",
    },
    "mcp/connect": {
      title: "エディター・エージェントの接続",
      description: "Claude Code、Codex、Cursor、VS Code、Claude DesktopにSpecify MCPサーバーを登録する方法です。",
    },
    "mcp/tools": {
      title: "提供ツール",
      description: "Specify MCPサーバーが公開する検索・読み取り・探索・作成・編集ツールについて説明します。",
    },
    "mcp/access": {
      title: "トークンとアクセス方針",
      description: "MCPトークンの権限スコープ、失効方法、管理者向けのワークスペースアクセス方針について説明します。",
    },
    "resources/security": {
      title: "セキュリティとデータ",
      description: "Specifyがワークスペースのデータを扱う方法と権限の境界について説明します。",
    },
    "resources/plans": {
      title: "料金プラン",
      description: "Specifyの料金プランの構成と、最新の料金・上限を確認する方法を説明します。",
    },
    "resources/glossary": {
      title: "用語集",
      description: "Specifyのドキュメントと製品で使われる用語をまとめます。",
    },
    "resources/faq": {
      title: "よくある質問",
      description: "導入、ドキュメント自動化、セキュリティ、MCPについてよくある質問と回答です。",
    },
  },
};
