// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://artisticembr.com',
  integrations: [robotsTxt(), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});