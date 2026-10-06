# CLAUDE.md: Napa Walks site (operating rules)

Astro 5 static site for napawalks.com. Hosted on Netlify, auto-deploys on push to `main`.
Repo: github.com/timsharkey/napa-walks. Local: `C:\Code\napa-walks`.

## Read this first
Business context, decisions, tour priority, design system, open items, and status live in:
`C:\Users\timsh\Documents\Projects\Napa Walks\PROJECT.md`
That file is the source of truth. Do not copy its contents here. If this file and PROJECT.md disagree, PROJECT.md wins; tell Tim so one of them gets fixed.

## Rules
- Never work on `main`. Use a branch, commit there, and tell Tim which branch to push. Tim pushes, reviews the Netlify deploy preview, and merges.
- Never move this repo into the Google Drive synced Projects folder (Drive writes desktop.ini into `.git` and breaks Git).
- No em dashes in any copy or writing. Use commas, colons, or periods.
- Do not invent prices, routes, stops, or company history. Pricing lives in the tour pages and must match Trafft once it is connected. If something is missing, ask.
- Orange (#E36628) never sits behind small text. Use the tokens in `src/styles/global.css`, not new hex values.
- All pages use `src/layouts/Layout.astro` and the single stylesheet `src/styles/global.css`. Do not add per-page copies of the CSS.
- Brand SVGs are in `public/assets/`. Decorative only: CSS backgrounds or `alt=""`.

## Commands
- `npm install`, `npm run dev`, `npm run build`, `npm run preview`
- Build must pass before any commit.

## Branches
See PROJECT.md for current status. Create feature branches off `main`.
