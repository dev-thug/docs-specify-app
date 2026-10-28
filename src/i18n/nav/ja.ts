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
    writing: "設計・キャンバスとAI",
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
      description: "コードを設計図と機能文書で理解してレビューします。可視化、認証文書、MCPから目的に合わせて始めます。",
    },
    quickstart: {
      title: "クイックスタート",
      description: "GitHubから最初の文書を作成し、設計図をレビューして改善内容をコーディングエージェントにつなげます。",
    },
    concepts: {
      title: "主要な概念",
      description: "ワークスペース、文書、キャンバス、チャット、リポジトリ接続、編集履歴、MCPの関係を学びます。",
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
    "guides/canvas": {
      title: "アーキテクチャ図とキャンバス",
      description: "キャンバスを直接編集し、下部の指示と選択項目からエージェントと設計を改善します。",
    },
    "guides/editor": {
      title: "ドキュメントの作成と編集",
      description: "文書とキャンバスを編集し、エージェント編集ロック、編集履歴、元に戻す操作で結果を管理します。",
    },
    "guides/automations": {
      title: "文書の自動更新",
      description: "リポジトリのpushで接続した文書とキャンバスを更新する流れと確認事項です。",
    },
    "guides/plugins-skills": {
      title: "ツールとスキル",
      description: "コネクタとスキルを管理し、繰り返す作業の手順をエージェントに伝えます。",
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
      title: "コードから文書・設計図を作る",
      description: "リポジトリを読み、機能文書とアーキテクチャキャンバスを作成して根拠を確認します。",
    },
    "guides/review-proposals": {
      title: "自動更新の結果を確認",
      description: "接続した文書・キャンバスの直接更新と編集履歴を確認し、必要に応じて元に戻します。",
    },
    "guides/automation-settings": {
      title: "リポジトリ接続の管理",
      description: "文書・キャンバスごとのリポジトリ接続と自動更新の範囲を管理します。",
    },
    "guides/medical-device-docs": {
      title: "医療機器文書と認証準備",
      description: "製品資料とコードを根拠に認証文書の草案を作成し、専門家による確認事項を整理します。",
    },
    "guides/use-cases": {
      title: "自分の業務に合う活用例を探す",
      sidebarTitle: "活用例一覧",
      description: "アーキテクチャ設計、企画・開発、顧客対応、品質業務の目的から、準備資料と進め方を確認します。",
    },
    "guides/architecture-design": {
      title: "ペルソナと進めるアーキテクチャ設計",
      sidebarTitle: "アーキテクチャ設計",
      description: "技術リードのジミンと、Mamma（育児アプリ）の現状把握、代替案比較、目標設計、決定文書、MCPでの実装を進めます。",
    },
    "guides/planning-with-mcp": {
      title: "企画変更をMCPで開発につなぐ",
      sidebarTitle: "企画・開発の協業",
      description: "企画と現在の実装を一緒に確認して改善文書を作り、MCPを通じて実装・テストにつなげます。",
    },
    "guides/security-questionnaires": {
      title: "顧客のセキュリティ質問票への回答を準備する",
      sidebarTitle: "セキュリティ質問票",
      description: "ポリシーと運用証跡を集め、セキュリティ質問への回答・根拠・担当者の確認事項を準備します。",
    },
    "guides/project-handover": {
      title: "コードとチーム資料から引き継ぎ文書を作る",
      sidebarTitle: "プロジェクトの引き継ぎ",
      description: "企画資料とコードを照合し、実装範囲、起動手順、次の担当者の確認事項をまとめます。",
    },
    "guides/customer-updates": {
      title: "変更内容を顧客向け案内とFAQにまとめる",
      sidebarTitle: "顧客向け案内とFAQ",
      description: "変更資料と既存FAQを根拠に、顧客案内と回答を同じ基準で整理します。",
    },
    "guides/api-docs": {
      title: "APIドキュメントを最新に保つ",
      description: "コードとAPI説明を照合し、接続した文書の直接更新をリクエスト・レスポンス・例と併せて確認します。",
    },
    "guides/onboarding-docs": {
      title: "オンボーディングドキュメントの生成",
      description: "新しいメンバーの初回起動とコード理解を支える、セットアップ・起動・探索の手順とチームの進め方を整理します。",
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
      description: "ワークスペース、文書、キャンバス、リポジトリ接続、編集履歴、RAG、MCPの用語を学びます。",
    },
    "resources/faq": {
      title: "よくある質問",
      description: "導入、ドキュメント自動化、セキュリティ、AIモデル、MCP、料金についてよくある質問と回答です。",
    },
  },
};
