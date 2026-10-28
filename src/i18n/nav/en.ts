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
    writing: "Design, canvas & AI",
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
      description: "Understand and review code through diagrams and feature documentation. Start with visualization, certification documents, or MCP.",
    },
    quickstart: {
      title: "Quickstart",
      description: "Create your first document from GitHub, review the architecture, and share improvements with your coding agent.",
    },
    concepts: {
      title: "Core concepts",
      description: "Learn how workspaces, documents, canvases, chat, repository links, edit history, and MCP fit together.",
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
    "guides/canvas": {
      title: "Architecture diagrams and canvases",
      description: "Edit canvases directly and refine designs with the agent using bottom commands and selected elements.",
    },
    "guides/editor": {
      title: "Write and edit docs",
      description:
        "Edit documents and canvases, and manage results with agent edit locks, edit history, and reverts.",
    },
    "guides/automations": {
      title: "Automatic document updates",
      description: "Understand how repository pushes update linked documents and canvases, and what to check afterward.",
    },
    "guides/plugins-skills": {
      title: "Tools and skills",
      description: "Manage connectors and skills to teach the agent repeatable working procedures.",
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
      title: "Create documents and diagrams from code",
      description: "Read a repository to create feature documents and architecture canvases, then check their evidence.",
    },
    "guides/review-proposals": {
      title: "Check automatic updates",
      description: "Review direct updates and edit history for linked documents and canvases, and revert changes when needed.",
    },
    "guides/automation-settings": {
      title: "Manage repository links",
      description: "Manage repository connections and automatic update scope for each document and canvas.",
    },
    "guides/medical-device-docs": {
      title: "Medical device and certification documents",
      description: "Draft certification documents from product evidence and code, and identify items for expert review.",
    },
    "guides/use-cases": {
      title: "Find a workflow for your work",
      sidebarTitle: "Explore workflows",
      description: "Choose an outcome in architecture design, planning, development, customer communication, or quality work, then follow the preparation and workflow.",
    },
    "guides/architecture-design": {
      title: "Design architecture with a technical lead",
      sidebarTitle: "Architecture design",
      description: "Follow Jimin’s Mamma (a parenting app) scenario from current architecture and alternatives to target design, decisions, and MCP-assisted implementation.",
    },
    "guides/planning-with-mcp": {
      title: "Connect planning changes to development with MCP",
      sidebarTitle: "Planning and development",
      description: "Review requirements with the current implementation, create an improvement document, and connect it to implementation and testing through MCP.",
    },
    "guides/security-questionnaires": {
      title: "Prepare customer security questionnaire answers",
      sidebarTitle: "Security questionnaires",
      description: "Collect policy and operating evidence to prepare answers, citations, and owner review items for security questionnaires.",
    },
    "guides/project-handover": {
      title: "Build a handover from code and team documents",
      sidebarTitle: "Project handover",
      description: "Compare product notes with code to document implementation scope, run instructions, and the next owner’s checklist.",
    },
    "guides/customer-updates": {
      title: "Turn changes into customer updates and FAQs",
      sidebarTitle: "Customer updates and FAQs",
      description: "Use change material and existing FAQs to align customer announcements and answers around shared evidence.",
    },
    "guides/api-docs": {
      title: "Keep API docs up to date",
      description:
        "Compare code with API explanations and inspect direct updates to linked documents alongside requests, responses, and examples.",
    },
    "guides/onboarding-docs": {
      title: "Generate onboarding docs",
      description:
        "Guide new teammates through setup, their first run, code navigation, and team procedures.",
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
      description: "Learn the terms for workspaces, documents, canvases, repository links, edit history, RAG, and MCP.",
    },
    "resources/faq": {
      title: "FAQ",
      description: "Frequently asked questions about adoption, documentation automation, security, AI models, MCP, and pricing.",
    },
  },
};
