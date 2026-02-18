// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jonlabs.ch',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/cv-pdf') &&
        !page.includes('/merci-') &&
        !page.includes('-pdf/')
    })
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  }
});
