// og:image par page (postbuild). Parcourt dist/**/*.html ; pour chaque URL /og/….png citée par la page
// (og:image par défaut, primaryImageOfPage), rend la carte 1200×630 (titre = H1, sinon og:title sans la marque) dans dist/og/….
// Usage : node scripts/og-images.mjs [distDir]   ·   node scripts/og-images.mjs --generic (→ public/og-image.png)
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const font = readFileSync(join(root, 'scripts/og/FunnelDisplay-Medium.ttf'));
const C = { bg: '#FFFFFF', ink: '#14161A', mut: '#686C70', dim: '#9A9D9F', line: '#E3E4E1', accent: '#00D9A3' };

const h = (type, style, children) => ({ type, props: { style, children } });

// title = [ligne principale, 2e ligne grisée optionnelle] (titre en deux temps de la DA v2).
export async function render([main, dim = '']) {
  const len = main.length + dim.length;
  const size = len <= 36 ? 84 : len <= 64 ? 68 : 54;
  const svg = await satori(
    h('div', { width: 1200, height: 630, display: 'flex', background: C.bg, padding: 32, boxSizing: 'border-box', fontFamily: 'Funnel Display', color: C.ink }, [
      h('div', { flex: 1, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: `1px solid ${C.line}`, padding: '48px 56px' }, [
        h('div', { display: 'flex', alignItems: 'baseline', fontSize: 40 }, [
          'Jon Labs',
          h('span', { color: C.accent }, '.'),
        ]),
        h('div', { display: 'flex', flexDirection: 'column', fontSize: size, lineHeight: 1.04, maxWidth: 1000 }, [
          h('div', { display: 'flex' }, main),
          ...(dim ? [h('div', { display: 'flex', color: C.dim }, dim)] : []),
        ]),
        h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26, color: C.mut }, [
          'Systèmes IA sur mesure · Genève',
          h('div', { display: 'flex', background: C.accent, color: C.ink, padding: '10px 22px', borderRadius: 5 }, 'jonlabs.ch'),
        ]),
      ]),
    ]),
    { width: 1200, height: 630, fonts: [{ name: 'Funnel Display', data: font, weight: 500, style: 'normal' }] }
  );
  return new Resvg(svg).render().asPng();
}

const decode = (s) =>
  s.replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ').trim();

// H1 coupé au premier <br> : [ligne 1, suite] ; sans H1, og:title sans la marque.
export function pageTitle(html) {
  const h1 = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (h1 && decode(h1)) {
    const [a, ...b] = h1.split(/<br\s*\/?>/i);
    return [decode(a), decode(b.join(' '))];
  }
  const og = html.match(/<meta property="og:title" content="([^"]*)"/)?.[1] ?? '';
  return [decode(og).replace(/\s*[|–-]\s*Jon\s?Labs\s*$/i, '')];
}

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []
  );

if (process.argv[2] === '--generic') {
  writeFileSync(join(root, 'public/og-image.png'), await render(['Développement IA', 'sur mesure à Genève.']));
  console.log('og: public/og-image.png');
} else {
  console.assert(pageTitle('<h1 class="x">Agent IA<br><span>sur&#39;mesure</span></h1>').join('|') === "Agent IA|sur'mesure");
  console.assert(pageTitle('<meta property="og:title" content="Tarifs | Jonlabs">').join('|') === 'Tarifs');
  const dist = process.argv[2] ?? join(root, 'dist');
  let n = 0;
  for (const file of walk(dist)) {
    const html = readFileSync(file, 'utf8');
    // og:image par défaut et primaryImageOfPage (lib/seo.ts) pointent tous deux vers /og/<route>.png.
    for (const path of new Set([...html.matchAll(/https:\/\/www\.jonlabs\.ch(\/og\/[^"'\s]+?\.png)/g)].map((m) => m[1]))) {
      const out = join(dist, decodeURIComponent(path));
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, await render(pageTitle(html)));
      n++;
    }
  }
  console.log(`og: ${n} images dans ${join(dist, 'og')}`);
}
