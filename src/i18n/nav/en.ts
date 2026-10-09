import type { NavLabels } from "@/lib/navigation";

export const enNav: NavLabels = {
  tabs: {
    "get-started": "Get started",
    guides: "Guides",
    ai: "Models & Knowledge",
    mcp: "MCP",
    resources: "Resources",
  },
  groups: {
    "first-steps": "First steps",
    workspace: "Workspace",
    writing: "Writing & AI",
    automation: "Documentation automation",
    extend: "Automation & Extensions",
    "use-cases": "Workflows",
    models: "Models",
    knowledge: "Knowledge & Search",
    "specify-mcp": "Specify MCP",
    reference: "Reference",
  },
  pages: {
    intro: {
      title: "Introduction to Specify",
      description:
        "Specify automates developer documentation. It connects GitHub code changes to the related docs and prepares proposed updates backed by evidence.",
    },
    quickstart: {
      title: "Quickstart",
      description: "Create a workspace, connect a GitHub repository, and generate your first developer document.",
    },
    concepts: {
      title: "Core concepts",
      description:
        "The concepts you need to understand Specify: workspaces, nodes, document projects, proposed updates, skills, and more.",
    },
    "workspace/tour": {
      title: "Tour the interface",
      description:
        "A walkthrough of the Specify interface, including the sidebar, tabs, search, Inbox, and AI panel, and what each area does, with real screenshots.",
    },
    "workspace/members": {
      title: "Invite your team and manage roles",
      sidebarTitle: "Team and roles",
      description: "Invite teammates to your workspace and see what the Owner, Admin, Editor, and Viewer roles can do, including document access.",
    },
    "workspace/settings": {
      title: "Settings at a glance",
      description:
        "Where to find account, workspace, AI agent, and billing and usage settings, and what you can change in each.",
    },
    "guides/editor": {
      title: "Write and edit docs",
      description:
        "Create docs and organize your team's knowledge with block commands, statuses, sharing, and file uploads.",
    },
    "guides/automations": {
      title: "Automations",
      description: "Create and manage automations that have the agent run a prompt on a set schedule.",
    },
    "guides/plugins-skills": {
      title: "Plugins and skills",
      description:
        "Install official plugins and use skills to teach the agent the procedure for recurring tasks.",
    },
    "guides/connectors": {
      title: "Connect connectors",
      description:
        "Connect GitHub, Notion, Slack, Jira, Linear, Google, and custom MCP servers to expand what AI can reference.",
    },
    "models/overview": {
      title: "Models overview",
      description:
        "Explore current Specify models, plan availability, context limits, and reasoning effort.",
    },
    "models/choosing": {
      title: "Choosing a model",
      description:
        "Choose models for your tasks using document drafting and editing performance and tool call records.",
    },
    "models/usage": {
      title: "Usage and AI budget",
      description: "How AI usage is calculated, budget warnings and top-ups, and ways to use less.",
    },
    "knowledge/rag": {
      title: "Workspace RAG",
      description:
        "How AI searches your workspace's docs, files, and connected sources to ground its answers and the docs it writes.",
    },
    "knowledge/standards": {
      title: "Standards library",
      description:
        "Use RAG to search clauses from standards such as IEC 62304 and ISO 14971 and write accurate docs with evidence and citations.",
    },
    "guides/github": {
      title: "Connect GitHub",
      description:
        "Connect a GitHub account and repositories to your workspace, and get approval for organization repositories.",
    },
    "guides/doc-projects": {
      title: "Create a document project",
      description: "Choose a GitHub source, document types, and an update mode to create a code-based document project.",
    },
    "guides/review-proposals": {
      title: "Review and apply proposed updates",
      description: "Review the proposed document updates that code changes produce, along with their evidence, and apply them.",
    },
    "guides/automation-settings": {
      title: "Automation settings",
      description:
        "Tune documentation automation with push triggers, writing skills, output folders, and a project style guide.",
    },
    "guides/medical-device-docs": {
      title: "Medical device software documentation",
      sidebarTitle: "Medical device documentation",
      description: "Gaps in medical device development documents are hard to find. Create code-backed requirements, design, and SOUP drafts plus a gap report. Owners and experts review omissions and unconfirmed items.",
    },
    "guides/use-cases": {
      title: "Find a workflow for your work",
      sidebarTitle: "Explore workflows",
      description: "Choose a planning, development, customer, or quality problem and find the sources, Specify workflow, and results for solving it.",
    },
    "guides/planning-with-mcp": {
      title: "Connect planning changes to development with MCP",
      sidebarTitle: "Planning and development",
      description: "Plans change, but development uses an old copy. Keep requirements in a shared Specify document and reread it through MCP in Claude Code or Codex. Align changed conditions with implementation plans and tests.",
    },
    "guides/security-questionnaires": {
      title: "Prepare customer security questionnaire answers",
      sidebarTitle: "Security questionnaires",
      description: "You cannot tell which security answer is current. Compare current policies with past responses to prepare answers, evidence, and review status. Gather questions that need an owner’s confirmation.",
    },
    "guides/project-handover": {
      title: "Build a handover from code and team documents",
      sidebarTitle: "Project handover",
      description: "Ownership changes, but implementation scope is unclear. Compare project notes with code to separate implemented features from unfinished requests. Leave run instructions and the next owner’s checklist.",
    },
    "guides/customer-updates": {
      title: "Turn changes into customer updates and FAQs",
      sidebarTitle: "Customer updates and FAQs",
      description: "Release communications disagree with the FAQ. Prepare an announcement and FAQ update from change notes and existing answers. Align changed explanations with limits and conditions that remain.",
    },
    "guides/api-docs": {
      title: "Keep API docs up to date",
      description:
        "API code changes while docs and examples stay behind. Connect GitHub changes to evidence-backed documentation updates. Compare requests, responses, and examples across related documents before applying them.",
    },
    "guides/onboarding-docs": {
      title: "Generate onboarding docs",
      description:
        "New teammates get stuck before their first run. Use the repository to draft setup, run, and code-reading instructions. Add team procedures and improve the guide by following it in a clean environment.",
    },
    "guides/ask-ai": {
      title: "AI chat and questions",
      description:
        "Get answers in AI chat grounded in your team's docs and code context, and choose a model and reasoning effort.",
    },
    "mcp/overview": {
      title: "MCP overview",
      description:
        "Use the Specify MCP server to give coding agents such as Claude Code, Codex, and Cursor access to your team's context.",
    },
    "mcp/connect": {
      title: "Connect editors and agents",
      description: "Register the Specify MCP server in Claude Code, Codex, Cursor, VS Code, and Claude Desktop.",
    },
    "mcp/tools": {
      title: "Available tools",
      description: "The search, read, browse, create, and edit tools that the Specify MCP server exposes.",
    },
    "mcp/access": {
      title: "Tokens and access policies",
      description: "MCP token scopes, how to revoke tokens, and the workspace access policies available to admins.",
    },
    "resources/security": {
      title: "Security and data",
      description: "How Specify handles workspace data and where its permission boundaries are.",
    },
    "resources/plans": {
      title: "Plans",
      description: "How Specify plans are structured and where to find current pricing and limits.",
    },
    "resources/glossary": {
      title: "Glossary",
      description: "One-line definitions of terms used across the Specify product and docs, including workspace, document project, proposed update, RAG, and MCP.",
    },
    "resources/faq": {
      title: "FAQ",
      description: "Frequently asked questions about adoption, documentation automation, security, AI models, MCP, and pricing.",
    },
  },
};
