# Artem Martirosian — Portfolio

Animated single-page developer portfolio built with the official Next.js App Router and Tailwind CSS.

## Stack

- Next.js 16.3.1 with Turbopack and App Router
- React 19.2
- TypeScript 5.9
- Tailwind CSS 4.3.3 through PostCSS
- OpenNext for the Cloudflare Workers production runtime

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run build
npm run lint
npm test
```

`npm run build` creates the official Next.js production build. `npm test` starts that production build and verifies the rendered portfolio and pinned framework versions.

## Cloudflare / Sites build

```bash
npm run build:sites
```

This runs the Next.js build, adapts it with OpenNext, and stages the Worker-compatible output under `dist/` for Sites packaging. The existing Sites project binding lives in `.openai/hosting.json`.

## Project structure

- `app/page.tsx` — portfolio content and interactions
- `app/globals.css` — Tailwind import, visual system, responsive layout, and motion
- `app/layout.tsx` — metadata, fonts, and root layout
- `public/` — favicon, downloadable CV, and cache headers
- `open-next.config.ts` / `wrangler.jsonc` — Cloudflare Worker adapter configuration
- `scripts/prepare-sites-build.mjs` — Sites-compatible output staging
