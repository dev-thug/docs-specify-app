import type { NavLabels } from "@/lib/navigation";

export const enNav: NavLabels = {
  tabs: {
    "get-started": "Get started",
    guides: "Guides",
    mcp: "MCP",
    resources: "Resources",
  },
  groups: {
    "first-steps": "First steps",
    workspace: "Workspace",
    automation: "Documentation automation",
    "use-cases": "Use cases",
    "specify-mcp": "Specify MCP",
    reference: "Reference",
  },
  pages: {
    intro: {
      title: "Introduction to Specify",
      description:
        "Specify automates developer documentation for small development teams. It connects GitHub code changes to the related docs and prepares proposed updates backed by evidence.",
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
    "workspace/members": {
      title: "Invite your team and manage roles",
      sidebarTitle: "Team and roles",
      description: "Invite teammates to your workspace and see what each role can do.",
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
    "guides/api-docs": {
      title: "Keep API docs up to date",
      description:
        "Keep API docs aligned with the code so requests, responses, authentication, errors, and examples stay accurate.",
    },
    "guides/onboarding-docs": {
      title: "Generate onboarding docs",
      description:
        "Generate and refine onboarding docs that get a new teammate to a working local setup on their first day.",
    },
    "guides/ask-ai": {
      title: "Ask AI",
      description: "Get answers to \"why\" and \"where\" questions grounded in your team's docs and code context.",
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
      description: "Terms used across the Specify product and docs.",
    },
    "resources/faq": {
      title: "FAQ",
      description: "Frequently asked questions about adoption, documentation automation, security, and MCP.",
    },
  },
};
