# sanskar-site: "The Ledger"

A warm-paper personal site + technical blog. Astro + MDX, static output, built to deploy on Cloudflare Pages.

**Aesthetic:** Instrument Serif (display) · Newsreader (body) · JetBrains Mono (labels), on parchment with a burnt-sienna accent, subtle paper grain, and a warm dark mode.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/  (also builds the Pagefind search index)
npm run preview
```

## Where things live

| Path | What |
| --- | --- |
| `src/consts.ts` | Name, nav, socials, **edit this first** |
| `src/content/writing/*.mdx` | Blog posts (frontmatter: title, description, date, tags) |
| `src/content/notes/*.md` | Garden notes (frontmatter: title, date, stage: seed/sapling/evergreen) |
| `src/data/projects.ts` | Project cards |
| `src/pages/about\|uses\|now.astro` | Personal pages (have `TODO(sanskar)` markers) |
| `src/styles/global.css` | The entire design system (CSS variables at the top) |

## Add a post

Drop a file in `src/content/writing/`:

```mdx
---
title: My post
description: One-line summary (used for SEO + the list).
date: 2026-07-15
tags: ['go', 'systems']
---

Markdown / MDX here. Code blocks are syntax-highlighted; the theme
switches with dark mode automatically.
```

The URL is the filename: `my-post.mdx` -> `/writing/my-post/`.

## Deploy (Cloudflare Pages)

Push to GitHub, then in Cloudflare Pages: **Build command** `npm run build`, **Output directory** `dist`. Add your custom domain. Static output = effectively free, no cold starts.

## TODO before launch

- [ ] Set your real domain in `src/consts.ts` and `astro.config.mjs`.
- [ ] Personalize `about`, `uses`, `now` (search for `TODO(sanskar)`).
- [ ] Verify repo URLs in `src/data/projects.ts`.
- [ ] Optional: add comments (Giscus), analytics (Plausible/Umami), a newsletter (Buttondown), and wire the Pagefind UI into a search page.
