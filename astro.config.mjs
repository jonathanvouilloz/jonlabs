// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import remarkTldr from './src/plugins/remark-tldr.mjs';
import { readFileSync, readdirSync } from 'node:fs';

// lastmod réel par URL, lu depuis les frontmatter (updatedDate > pubDate).
// Sans ça, un lastmod = date de build sur les 88 pages dit à Google « tout a changé »
// à chaque rebuild cron (lundi/vendredi) et détruit le signal de fraîcheur.
// Les pages .astro n'ont pas de date fiable : on ne leur en invente pas.
function buildLastmodMap() {
  const map = new Map();
  const sources = [
    { dir: './src/content/blog', route: '/blog' },
    { dir: './src/content/pages', route: '/guides' },
  ];
  for (const { dir, route } of sources) {
    let files = [];
    try {
      files = readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = readFileSync(`${dir}/${file}`, 'utf-8').slice(0, 2000);
      const date =
        raw.match(/^updatedDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1] ??
        raw.match(/^pubDate:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
      if (!date) continue;
      const slug = file.replace(/\.mdx?$/, '');
      map.set(`https://www.jonlabs.ch${route}/${slug}`, new Date(date).toISOString());
    }
  }
  return map;
}

const lastmodByUrl = buildLastmodMap();

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
        !page.includes('/mentions-legales') &&
        // Services en draft Session 3 — gardés accessibles aux liens internes mais hors sitemap + noindex
        !page.includes('/services/automatisation') &&
        !page.includes('/services/integration-outils') &&
        !page.includes('/services/validation-idee') &&
        !page.includes('/services/refonte-site-web'),
      serialize(item) {
        const lastmod = lastmodByUrl.get(item.url.replace(/\/$/, ''));
        if (lastmod) item.lastmod = lastmod;
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
