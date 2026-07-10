// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import remarkTldr from './src/plugins/remark-tldr.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jonlabs.ch',
  redirects: {
    // Revert 2026-05-20 : retour aux slugs sans année (le jus SEO est resté sur les URLs sans -2026)
    '/blog/apparaitre-copilot-2026': '/blog/apparaitre-copilot',
    '/blog/apparaitre-perplexity-2026': '/blog/apparaitre-perplexity',
    '/blog/apparaitre-gemini-2026': '/blog/apparaitre-gemini',
    '/blog/apparaitre-claude-2026': '/blog/apparaitre-claude',
    '/blog/apparaitre-chatgpt-geneve-2026': '/blog/apparaitre-chatgpt-geneve',
    '/blog/apparaitre-grok-2026': '/blog/apparaitre-grok',
    '/blog/geo-seo-ia-2026': '/blog/geo-seo-ia',
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
        !page.includes('-pdf') &&
        !page.includes('/devis-client/') &&
        !page.includes('/blog/tag/') &&
        !page.includes('/styleguide') &&
        // Services en draft Session 3 — gardés accessibles aux liens internes mais hors sitemap + noindex
        !page.includes('/services/automatisation') &&
        !page.includes('/services/integration-outils') &&
        !page.includes('/services/validation-idee') &&
        !page.includes('/services/refonte-site-web'),
      serialize(item) {
        // Default lastmod for all pages
        item.lastmod = new Date().toISOString();
        return item;
      }
    })
  ],
  markdown: {
    remarkPlugins: [remarkTldr],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  }
});
