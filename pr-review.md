---
allowed-tools: Bash(gh pr view:*), Bash(gh pr diff:*), Bash(gh pr list:*), Bash(gh pr comment:*), Bash(gh pr review:*), Bash(gh api:*), Bash(gh search:*), Bash(gh issue view:*)
description: Code review a pull request for FlowForge
disable-model-invocation: false
---

Provide a code review for the given pull request, following the FlowForge review format below.

## 1. Pre-checks

Check whether the pull request:

- (a) is closed,
- (b) is a draft that should not be reviewed yet,
- (c) does not need a review (automated PR, docs-only, trivially simple), or
- (d) already has a code review comment from you.

If any apply, stop. If (d) and the diff has changed materially, post a re-review (see section 5) instead of repeating the original review.

## 2. Review the change

Read the diff (`gh pr diff <pr>`) and the full changed files, then review against FlowForge conventions:

- **CLAUDE.md / project conventions**: design tokens from `src/app/globals.css` (`--text-*`, `--bg-*`, `--border-*`, `--spacing-*`, `--radius-*`, `--font-size-*`, `--line-height-*`, `--font-weight-*`) referenced via `var(--...)` instead of hardcoded hex/px values; `--font-figtree` as the body font; path alias `@/*` instead of deep relative imports; `"use client"` present on anything using hooks, event handlers, browser APIs, or styled-components; each component as `index.tsx` + `styles.tsx` under `src/components/<Name>/`.
- **Bug scan**: missing `"use client"`; styled-components transient props missing the `$` prefix; template literals referencing a CSS variable that is not declared under `:root`; `SVGIcon` used with a `name` that has no matching `case` in `src/assets/icons/SVGIcon.tsx`; broken `@/*` imports; `next/image` misuse (missing `width`/`height`, or `fill` without a positioned parent); `metadata` exported from a client component; `<a>` where `next/link` should be used; missing `key` on mapped children; stale closures or missing effect cleanup; invalid DOM nesting (for example an anchor inside an anchor); hydration mismatches; credentials or secrets written to `console`.
- **Comments / types compliance**: callers passing props that do not exist on the interface, props declared but never consumed, `AuthPageData`/`HomeHeroData`-style data contracts drifting from `src/global/appTypes.tsx` and `src/helpers/raw.tsx`, unused or orphaned styled-components exports.
- **Best practices & structure**: routes and layouts under `src/app/`, reusable UI under `src/components/`, shared helpers under `src/helpers/`, types under `src/global/appTypes.tsx`, shared styled primitives under `src/styles/common.tsx`, icons through `SVGIcon` only (no one-off inline SVGs), static content data in `src/helpers/raw.tsx`, assets under `src/assets/` or `public/` (served from `/`, never `public/...`).
- **Cross-file consistency**: every new CSS custom property, `SVGIcon` name, variant value, and `@/*` import resolves to something that exists; every new prop is consumed; no duplicated style/markup blocks that already exist elsewhere.

## 3. Filter the findings

Only report issues that are introduced by this pull request. Drop anything that scores below 50:

- 0: false positive, pre-existing issue, or does not hold up to scrutiny
- 25: possibly real but unverified, or a stylistic nitpick
- 50: verified but minor
- 75: verified and will impact functionality, or violates project conventions
- 100: confirmed and will definitely cause problems

Ignore:

- pre-existing issues not introduced by this PR
- pedantic nitpicks a senior engineer would not flag
- intentional functionality changes
- missing tests (there is no test harness in this repo)
- linter/style nits (`yarn lint` and `yarn build` already cover these)
- the specific px value chosen for a media query - the design uses several breakpoints (`1179px`, `991px`, `767px`, `449px`) and the choice itself is not a review issue

## 4. Comment format

Post with `gh pr comment <pr> --body-file <file>` (or `gh pr review <pr> --comment --body-file <file>`). Keep it brief, no emojis, no summary of the whole PR - only concrete issues.

```markdown
### Code review

Found N issues:

1. <one-sentence description of the problem> (bug: <why it breaks> / CLAUDE.md says "<rule>" / best practice: <reason>)

https://github.com/Harekrushnvaghasiya/FlowForge/blob/<FULL_SHA>/<path>#L<start>-L<end>

2. ...

Generated with [Claude Code](https://claude.ai/code)
```

When nothing survives filtering:

```markdown
### Code review

No issues found. Checked for bugs, CLAUDE.md compliance, and best practices.

Generated with [Claude Code](https://claude.ai/code)
```

## 5. Re-review format

After fixes are pushed, verify each previously flagged issue against the new head commit and post:

```markdown
### Code review

Both previously flagged issues verified fixed on `<short-sha>`:

1. <what changed to fix it>

https://github.com/Harekrushnvaghasiya/FlowForge/blob/<FULL_SHA>/<path>#L<start>-L<end>

2. ...

No new issues found. Checked for bugs, CLAUDE.md compliance, and best practices.

Generated with [Claude Code](https://claude.ai/code)
```

Use `N previously flagged issues` when there are more than two. If an issue is still present, say so explicitly instead of claiming it is fixed.

## 6. Link rules

Links must be permanent so they render in the GitHub Markdown preview:

- Use the full 40-character commit SHA, never `HEAD`, `main`, or a short SHA.
- Format: `https://github.com/Harekrushnvaghasiya/FlowForge/blob/<FULL_SHA>/<path>#L<start>-L<end>`
- Paths are relative to the repo root (`src/...`, `public/...`), and the repo name must match exactly.
- Include one line of context before and after the commented lines (for lines 5-6, link `#L4-L7`).
- Cite the changed file, not a file that happens to import it.

## 7. Notes

- Use `gh` for all GitHub interactions; never call the raw GitHub API directly when a `gh` command exists.
- Do not report build or lint output as review findings; run them only if the user asks.
- One comment per review. If a review already exists and the diff moved, use the re-review format and edit or replace the previous comment rather than double-posting.
