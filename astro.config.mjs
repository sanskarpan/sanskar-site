// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// TODO: change this to your real domain once you own it.
const SITE = 'https://sanskarpan.sanskarpandey2004.workers.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // static site -> deploy the dist/ folder to Cloudflare Pages
  output: 'static',

  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      // Dual theme: paper-friendly light + warm dark. Switched via the `.dark` class on <html>.
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: true,
    },
  },

  adapter: cloudflare()
});