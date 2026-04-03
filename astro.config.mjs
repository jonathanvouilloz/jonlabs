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
  redirects: {
    '/blog/apparaitre-copilot': '/blog/apparaitre-copilot-2026',
    '/blog/apparaitre-perplexity': '/blog/apparaitre-perplexity-2026',
    '/blog/apparaitre-gemini': '/blog/apparaitre-gemini-2026',
    '/blog/apparaitre-claude': '/blog/apparaitre-claude-2026',
    '/blog/apparaitre-chatgpt-geneve': '/blog/apparaitre-chatgpt-geneve-2026',
  },
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
  trailingSlash: 'never',
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/cv-pdf') &&
        !page.includes('/merci-') &&
        !page.includes('-pdf/') &&
        !page.includes('/devis-client/'),
      serialize(item) {
        // Default lastmod for all pages
        item.lastmod = new Date().toISOString();
        return item;
      }
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
