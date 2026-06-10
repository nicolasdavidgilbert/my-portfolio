// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const tailwindPlugin = /** @type {any} */ (tailwindcss());

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nicogilbert.es/',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindPlugin]
  }
});
