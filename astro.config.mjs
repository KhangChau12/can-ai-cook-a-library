// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://khangchau12.github.io',
  base: '/can-ai-cook-a-library',
  trailingSlash: 'always',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    // This project is nested inside a larger repo that has its own Tailwind
    // v3 + postcss.config.js at the parent directory. Vite/PostCSS's config
    // file search walks up parent directories by default and picks that up
    // by mistake, breaking this project's Tailwind v4 setup. Disabling
    // file-based postcss config forces Vite to rely solely on the
    // `@tailwindcss/vite` plugin above, scoped correctly to this project.
    css: {
      postcss: { plugins: [] }
    }
  }
});