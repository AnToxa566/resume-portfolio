<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository structure & placement rules

Portfolio site. Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 (CSS-first, **no
`tailwind.config`**) · TypeScript. Import alias: `@/*` → `src/*`. Dark theme only.

```
src/
  app/
    layout.tsx        Root layout: applies font CSS vars, metadata, <noscript> reveal fallback
    page.tsx          Home page — composes <Section> components only, no markup of its own
    fonts.ts          next/font definitions (Archivo / Inter Tight / IBM Plex Mono)
    globals.css       Tailwind import + design tokens + base layer + `.display` + keyframes
  components/
    ui/               SHARED, reusable, presentational primitives (Button, Tag, Metric, …)
    *.tsx             Layout-level shared pieces (SiteHeader, Section, Reveal)
    sections/         One file per home-page section + its sub-parts (Hero, Work, ProjectCard…)
  data/
    *.json            Content for each section
    types.ts          Interfaces for every JSON file
    index.ts          The ONLY place JSON is imported; casts + re-exports typed `*Data`
  lib/                Framework-agnostic helpers (e.g. `cn`)
```

## Where does X go?

| You are adding… | Put it in | Rules |
|---|---|---|
| Section text, lists, projects, stats, links | `src/data/<name>.json` + a type in `src/data/types.ts` + a cast/export in `src/data/index.ts` | Never hardcode content strings in components. Components import `{ workData, profileData, … }` from `@/data`, never the raw `.json`. |
| A reusable UI element (button, chip, badge, card shell, label, stat) | `src/components/ui/<name>.tsx` | Presentational only — no data imports, no `useState`. Take content via props. Accept an optional `className` and merge with `cn()`. Server component unless it genuinely needs interactivity. |
| A whole home-page section | `src/components/sections/<name>.tsx`, then add it to `src/app/page.tsx` | Wrap in `<Section id label>` (the mono-rail layout) unless the design says otherwise (Hero is the exception). Read content from `@/data`. Split large sections into sub-components in the same folder (e.g. `project-card.tsx`). |
| Interactivity (state, effects, DOM/browser APIs) | A `"use client"` component, kept as small as possible | Keep the client boundary at the leaf. Pages/sections stay server components and pass data down as props. Honour `prefers-reduced-motion`. |
| A generic helper / util | `src/lib/` | No React, no Next imports. |
| A new route | `src/app/<route>/page.tsx` | Reuse `Section`, `ui/*`, and `@/data`. Add new content as its own `data/*.json` + type. |

## Design system

- Tokens live in `src/app/globals.css` (`:root` raw values → `@theme inline` utilities).
  Use the semantic utilities: `bg-bg`, `bg-surface`, `border-line`, `text-ink`, `text-muted`,
  `text-signal` / `bg-signal`. The accent is also the CSS var `--signal`; `--stripes` is the
  placeholder hatch.
- Fonts are CSS vars from `fonts.ts`: `font-sans` (Inter Tight, default), `font-mono`
  (IBM Plex Mono — labels/tags/metrics/meta), and the **`.display`** class for headings
  (Archivo, `font-stretch:112%`); add size/leading utilities on top of `.display`.
- Prefer Tailwind utilities over new CSS. Only touch `globals.css` for a genuinely global
  token, base rule, or keyframe. No CSS Modules unless a utility genuinely can't express it.

## Source design

The UI comes from the Claude Design project `02e46df3-f324-4b2e-bd7c-133f787a7f55`
(`Home.dc.html`, `About.dc.html`, `Case Study - *.dc.html`). Read it with the `claude_design`
(DesignSync) MCP — `method: "list_files"` / `"get_file"`. It needs `/design-login` run once in
an interactive Claude Code session first; a headless session can't do the OAuth itself.
Implemented so far: **home page only**.
