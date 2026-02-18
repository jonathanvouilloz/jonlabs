// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jonlabs.ch',
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
  trailingSlash: 'never',
  integrations: [
    mdx(),
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
