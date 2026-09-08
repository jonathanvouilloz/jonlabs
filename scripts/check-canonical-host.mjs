#!/usr/bin/env node
// Garde-fou d'hôte canonique — branché en `prebuild`, tourne donc aussi sur Vercel.
//
// Pourquoi : le 308 non-www → www et le <link rel="canonical"> sont corrects, mais tant que
// le repo PUBLIE des URLs `https://jonlabs.ch` (sans www), Google garde l'hôte vivant comme
// cible de crawl. Mesuré le 2026-09-08 : 41 des 80 conflits de cannibalisation étaient des
// doublons d'hôte, et le non-www de la home battait les 5 pages ville sur leurs propres
// requêtes (jusqu'à la position 1,1). Détail → docs/features/canonical-cannibalisation.md
//
// Deux assertions, échec dur (exit 1) :
//   1. aucune URL non-www dans src/ et public/
//   2. public/llm.txt et public/llms.txt sont identiques (ils avaient divergé)

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const SCANNED_DIRS = ['src', 'public'];
const SKIPPED_DIRS = new Set(['node_modules', '.git', 'dist', '.astro', '.vercel']);
// Extensions binaires : rien à y chercher, et les lire coûte cher.
const SKIPPED_EXT = /\.(webp|png|jpe?g|gif|svg|ico|avif|mp4|webm|woff2?|ttf|otf|eot|pdf|zip)$/i;

// `https://jonlabs.ch` non suivi de `www` — la seule forme jamais légitime.
const BAD_HOST = /https:\/\/jonlabs\.ch/g;

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIPPED_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (!SKIPPED_EXT.test(entry)) out.push(full);
  }
  return out;
}

const offenders = [];
for (const dir of SCANNED_DIRS) {
  let files = [];
  try {
    files = walk(join(ROOT, dir));
  } catch {
    continue; // dossier absent = rien à vérifier
  }
  for (const file of files) {
    let content;
    try {
      content = readFileSync(file, 'utf-8');
    } catch {
      continue; // binaire mal détecté
    }
    if (!BAD_HOST.test(content)) continue;
    BAD_HOST.lastIndex = 0;
    content.split('\n').forEach((line, i) => {
      if (line.includes('https://jonlabs.ch')) {
        offenders.push({ file: relative(ROOT, file), line: i + 1, text: line.trim().slice(0, 120) });
      }
    });
  }
}

let failed = false;

if (offenders.length > 0) {
  failed = true;
  console.error(`\n✗ Hôte non canonique : ${offenders.length} occurrence(s) de "https://jonlabs.ch" sans www.\n`);
  for (const o of offenders) console.error(`  ${o.file}:${o.line}\n    ${o.text}`);
  console.error('\n  Correction : écrire "https://www.jonlabs.ch". Le non-www redirige en 308,');
  console.error('  mais toute URL publiée sans www maintient l\'hôte dupliqué vivant pour Google.');
  console.error('  Contexte → docs/features/canonical-cannibalisation.md\n');
}

try {
  const a = readFileSync(join(ROOT, 'public/llm.txt'), 'utf-8');
  const b = readFileSync(join(ROOT, 'public/llms.txt'), 'utf-8');
  if (a !== b) {
    failed = true;
    console.error('\n✗ public/llm.txt et public/llms.txt ont divergé.');
    console.error('  Ils doivent rester identiques : `cp public/llm.txt public/llms.txt`\n');
  }
} catch (error) {
  failed = true;
  console.error(`\n✗ Lecture de public/llm(s).txt impossible : ${error.message}\n`);
}

if (failed) process.exit(1);
console.log('✓ Hôte canonique www — OK · llm.txt ≡ llms.txt');
