---
allowed-tools: Bash(gh pr view:*), Bash(gh pr diff:*), Bash(gh pr list:*), Bash(gh pr comment:*), Bash(gh pr edit:*), Bash(gh search:*), Bash(gh issue view:*)
description: Summarize a pull request for FlowForge
disable-model-invocation: false
---

Generate a concise, structured summary for the given pull request and post it as a comment.

Follow these steps:

1. Check if the pull request:
   - (a) is closed,
   - (b) is a draft that should not be summarized yet, or
   - (c) already has a summary comment from you.
   If (c), stop unless the user explicitly asks to re-summarize; if the diff has changed materially since the last summary, edit the existing comment instead of posting a new one.

2. Fetch pull request metadata and diff:
   - `gh pr view <pr> --json title,body,author,baseRefName,headRefName,files,additions,deletions,commits,labels`
   - `gh pr diff <pr>`

3. Produce the three standardized sections of the summary based on the diff and FlowForge architecture:

   a. **What changed** — A 1–3 sentence plain-English description of the user-visible or developer-visible change. Lead with the intent (feature, bug fix, refactor, chore, docs), not the raw file list. Use FlowForge project vocabulary:
      - Next.js App Router routes and layouts under `src/app/`
      - UI components under `src/components/`
      - Shared helpers and libraries under `src/lib/`
      - TypeScript interfaces and types under `src/types/`
      - Tailwind CSS utility styles and design tokens
      - Metadata, OG images, and icons in `src/app/layout.tsx` or `public/`
      - Path alias `@/*` pointing to `src/*`

   b. **Files & scope** — Group the changed files into logical buckets and describe each in one line:
      - `src/app/**` (App Router pages, layouts, `globals.css`, route handlers)
      - `src/components/**` (reusable UI components)
      - `src/lib/**` (utilities, API clients, shared helpers)
      - `src/types/**` (TypeScript declarations and types)
      - `public/**` (static assets, icons, SVGs)
      - Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `package.json`, `yarn.lock`
      Report totals: files changed, additions, deletions, commits.

   c. **Test plan** — A short bulleted checklist (`- [ ]` GitHub-style checkboxes) of manual verification steps a reviewer or the author should run before merging. Draw items directly from the diff:
      - Run `yarn dev` and verify touched route(s) at `http://localhost:3000/…`; verify responsive layouts across desktop, tablet (`≤ 991px`), and mobile (`≤ 449px`).
      - Run `yarn build` to ensure TypeScript compilation and Next.js Turbopack build succeed without errors.
      - Run `yarn lint` to verify ESLint passes with no warnings or errors.
      - For component changes: verify prop variants, interactive states (hover/active/disabled), and accessibility attributes.
      - For styling changes: inspect elements in DevTools to confirm Tailwind styles and responsive breakpoints apply correctly.
      - For metadata / assets: verify `<title>`, `<meta>`, favicon, and asset loading in DevTools Network tab.
      - Skip this section for trivial diffs (single-line copy tweak, documentation, whitespace).

4. Post the summary via `gh pr comment`. If a prior summary comment exists and the diff has been updated, use `gh pr comment --edit-last` (or edit by comment id) instead of double-posting.

---

### Comment format:

```markdown
### PR summary

**What changed**
<1–3 sentences>

**Files & scope**
- <bucket>: <one-line description>
- ...

_Totals: N files changed, +A / -D, C commits._

**Test plan**
- [ ] <step 1>
- [ ] <step 2>
- ...
```

---

### Fallback for trivial diffs:

```markdown
### PR summary

<one-line description>. No test plan required.
```

---

### Guidelines & Rules:
- **No emojis** in the generated PR comment.
- **Ignore auto-generated files**: Mention only the fact that files like `yarn.lock` or `next-env.d.ts` were updated; do not enumerate line-by-line diffs.
- **Keep it concise**: Omit empty sections rather than padding with generic text.
- **CLI interactions**: Use `gh` for all GitHub interactions. Never call the raw GitHub API directly.
- **Links**: When referencing specific code lines, use the full commit SHA format:
  `https://github.com/<owner>/<repo>/blob/<FULL_SHA>/<path>#L<start>-L<end>`
