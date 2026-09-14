# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Development server at localhost:3000
npm run build        # Production build → generates out/ (static export)
npm run lint         # ESLint with zero-warnings enforcement
npm run lint:fix     # ESLint auto-fix
npm run typecheck    # tsc --noEmit (type check without build)
npm run test         # Vitest run (unit tests)
npm run test:watch   # Vitest in watch mode
npm run lighthouse:ci # Lighthouse CI audits (requires a build first)
```

Tests only cover `src/lib/` and `src/functions/`. Run a single test file: `npx vitest run src/lib/chat-demo.test.ts`.

Quality gate before any PR: `npm run lint && npm run build`.

## Architecture

**Geko Marketing** is a static-export Next.js 16 (App Router) corporate website for a digital marketing agency. It deploys as pure HTML/CSS/JS to Hostinger (`out/` → `public_html`). There is no backend — the site runs entirely client-side.

### Layer breakdown

| Layer | Path | Role |
|---|---|---|
| Pages & layouts | `src/app/` | Route definitions. All public pages live under `(marketing)/` route group. |
| Marketing sections | `src/components/marketing/` | One component per page section (hero, pricing, features, etc.) |
| Global UI | `src/components/global/` | Cross-cutting: chat modal, providers, icons, language toggle, images |
| UI primitives | `src/components/ui/` | Reusable base components (shadcn-style, CVA variants, animated primitives) |
| Static data | `src/constants/` | Business data: plans, reviews, links, perks |
| Translations | `src/translations/` | ES/EN string dictionary; accessed via `t()` helper from language context |
| Chat logic | `src/lib/chat-demo.ts` | Intent-matcher for the demo chat assistant (no external API) |
| Utilities | `src/functions/` | `cn()` classname helper, metadata builders |
| Styles | `src/styles/globals.css` | CSS variables, Tailwind base, global tokens |

### Key architectural decisions

- **Static export only**: `next.config.mjs` sets `output: "export"`. No API routes or server components that require Node.js at runtime.
- **Dark mode only**: Tailwind configured with `darkMode: "class"` but the site never applies the light theme — single visual theme for brand consistency.
- **i18n via context**: Language (ES/EN) is managed in `src/context/language-context.tsx`. All UI strings come from `src/translations/index.ts` via the `useLanguage()` hook.
- **Image optimization**: Uses `next-image-export-optimizer` (not Next.js default image loader) to generate WebP + LQIP at build time — required for static export compatibility.
- **Barrel exports**: Each major directory has an `index.ts` that controls public exports. Import from the barrel, not directly from implementation files.
- **Absolute imports**: Use `@/` alias (maps to `src/`). Never use relative paths that traverse more than one level up.

### Chat demo

The chat assistant (`src/components/global/chat-modal.tsx`) uses `src/lib/chat-demo.ts` for local intent-matching. It supports intents: services, plans/pricing, recommendation, process, timelines, integrations, support, FAQ, contact. No external AI API is wired — `AI_CHAT_SETUP.md` documents how to add Hugging Face / Vercel AI SDK if needed.

## Conventions

- Components: PascalCase filenames and exports
- Utilities/hooks: kebab-case filenames
- All components export from `src/components/index.ts` barrel
- ESLint enforces: `===`, template literals over concatenation, curly braces on control flow
- Lighthouse CI thresholds: Performance ≥ 0.90, Accessibility/Best Practices/SEO ≥ 0.95 — avoid changes that regress these scores
