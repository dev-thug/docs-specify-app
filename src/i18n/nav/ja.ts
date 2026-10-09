import type { NavLabels } from "@/lib/navigation";

export const jaNav: NavLabels = {
  tabs: {
    "get-started": "はじめに",
    guides: "ガイド",
    ai: "モデル・ナレッジ",
    mcp: "MCP",
    resources: "リソース",
  },
  groups: {
    "first-steps": "最初のステップ",
    workspace: "ワークスペース",
    writing: "ドキュメント作成とAI",
    automation: "ドキュメント自動化",
    extend: "オートメーションと拡張",
    "use-cases": "活用ガイド",
    models: "モデル",
    knowledge: "ナレッジと検索",
    "specify-mcp": "Specify MCP",
    reference: "リファレンス",
  },
  pages: {
    intro: {
      title: "Specifyの概要",
      description:
        "Specifyは開発ドキュメントを自動化するツールです。GitHubのコード変更と関連ドキュメントをつなぎ、根拠のある修正案を用意します。",
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
    "workspace/tour": {
      title: "画面ツアー",
      description:
        "サイドバー、タブ、検索、インボックス、AIパネルなど、Specifyの画面構成と各領域の役割を実際の画面で説明します。",
    },
    "workspace/members": {
      title: "チームの招待と権限",
      description: "ワークスペースにチームメンバーを招待し、オーナー・管理者・編集者・閲覧者の役割ごとにできることと文書へのアクセス範囲を確認します。",
    },
    "workspace/settings": {
      title: "設定の概要",
      description: "アカウント、ワークスペース、AIエージェント、プラン・使用量の設定がどこにあり、何を変更できるかをまとめます。",
    },
    "guides/editor": {
      title: "ドキュメントの作成と編集",
      description: "ドキュメントを作成し、ブロックコマンド、ステータス、共有、ファイルのアップロードでチームのドキュメントを整理する方法です。",
    },
    "guides/automations": {
      title: "オートメーション",
      description: "決められたスケジュールでエージェントがプロンプトを実行するように、オートメーションを作成・管理します。",
    },
    "guides/plugins-skills": {
      title: "プラグインとスキル",
      description: "公式プラグインをインストールし、スキルで繰り返し作業の手順をエージェントに伝える方法です。",
    },
    "guides/connectors": {
      title: "コネクターの接続",
      description:
        "GitHub、Notion、Slack、Jira、Linear、GoogleとカスタムMCPサーバーを接続し、AIが参照できる資料を広げます。",
    },
    "models/overview": {
      title: "モデルの概要",
      description: "Specifyの現行AIモデル、プラン別の利用範囲、コンテキストと思考の強度を案内します。",
    },
    "models/choosing": {
      title: "モデル選択ガイド",
      description: "文書の作成・編集性能とツール呼び出し記録を基に、作業に合わせたモデル選択の基準を案内します。",
    },
    "models/usage": {
      title: "使用量とAI予算",
      description: "AI使用量の計算方法、予算の警告とチャージ、使用量を節約する方法を説明します。",
    },
    "knowledge/rag": {
      title: "ワークスペースRAG",
      description:
        "ワークスペースのドキュメントやファイル、接続された資料をAIが検索し、それを根拠に回答やドキュメント作成を行う仕組みを説明します。",
    },
    "knowledge/standards": {
      title: "規格文書ライブラリ",
      description:
        "IEC 62304・ISO 14971などの規格の条項をRAGで検索し、根拠と引用のある正確なドキュメントを作成する方法です。",
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
    "guides/medical-device-docs": {
      title: "医療機器ソフトウェアの開発文書自動化",
      sidebarTitle: "医療機器の開発文書",
      description: "医療機器の開発文書の不足を見つけにくい。コード根拠付きの要求・設計・SOUPの下書きとギャップレポートを作ります。担当者と専門家が漏れや未確定項目を確認します。",
    },
    "guides/use-cases": {
      title: "自分の業務に合う活用例を探す",
      sidebarTitle: "活用例一覧",
      description: "企画・開発・顧客対応・品質業務の問題を選び、必要な資料とSpecifyで解決する手順・成果を確認します。",
    },
    "guides/planning-with-mcp": {
      title: "企画変更をMCPで開発につなぐ",
      sidebarTitle: "企画・開発の協業",
      description: "企画が変わっても開発は古い文書を見ている。Specifyの同じ文書に企画を整理し、Claude Code・CodexからMCPで再読します。変更条件を実装計画とテストに合わせます。",
    },
    "guides/security-questionnaires": {
      title: "顧客のセキュリティ質問票への回答を準備する",
      sidebarTitle: "セキュリティ質問票",
      description: "顧客のセキュリティ質問にどの回答を使うか迷う。最新ポリシーと過去の回答を照合し、回答・根拠・確認状態を作ります。担当者への確認が必要な質問をまとめます。",
    },
    "guides/project-handover": {
      title: "コードとチーム資料から引き継ぎ文書を作る",
      sidebarTitle: "プロジェクトの引き継ぎ",
      description: "担当者が変わっても実装範囲が分からない。企画メモとコードを照合し、実装済み機能と未完了の要望を分けます。実行方法と次の担当者の確認一覧を残します。",
    },
    "guides/customer-updates": {
      title: "変更内容を顧客向け案内とFAQにまとめる",
      sidebarTitle: "顧客向け案内とFAQ",
      description: "リリース案内とFAQが食い違う。変更資料と既存FAQから顧客案内とFAQ修正案を作ります。変更する説明と維持する上限・条件を合わせます。",
    },
    "guides/api-docs": {
      title: "APIドキュメントを最新に保つ",
      description: "APIは変わったのに文書や例が古いまま。GitHub変更を根拠付きの文書修正案につなげます。関連文書のリクエスト・レスポンス・例を照合して反映します。",
    },
    "guides/onboarding-docs": {
      title: "オンボーディングドキュメントの生成",
      description: "新メンバーがインストールと実行でつまずく。リポジトリからインストール・実行・コード探索の案内を作ります。チーム手順を補完し、新しい環境で試して改善します。",
    },
    "guides/ask-ai": {
      title: "AIチャットと質問",
      description: "AIチャットでチームのドキュメントとコードの文脈を根拠に答えを得る方法と、モデルと思考の強度の選び方です。",
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
      description: "ワークスペース、ドキュメントプロジェクト、修正案、RAG、MCPなど、Specifyのドキュメントと製品で使われる用語を一行で定義します。",
    },
    "resources/faq": {
      title: "よくある質問",
      description: "導入、ドキュメント自動化、セキュリティ、AIモデル、MCP、料金についてよくある質問と回答です。",
    },
  },
};
