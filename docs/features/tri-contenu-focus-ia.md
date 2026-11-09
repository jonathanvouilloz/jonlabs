# Tri du contenu « focus IA »

> Démarré le 2026-11-09. Pivot : jonlabs se recentre sur l'IA en entreprise, les applications sur mesure
> et l'automatisation des processus métiers. Le SEO local, les fiches Google et le GEO ne sont plus poussés.
> Décision détaillée → `docs/DECISIONS.md` (entrée 2026-11-09).

## Etat session 2026-11-09

**Fait :**
- Audit GSC 6 mois (pages × impressions/clics) + URL Inspection des 125 URLs du sitemap : 74 indexées, 37 « explorée, non indexée ».
- Supprimé 33 articles (SEO local, fiches Google, GEO sauf `apparaitre-claude`/`geo-seo-ia`, site vitrine, 3 automatisation hors pivot) et 8 pages (`/services/referencement-local`, `/services/gestion-fiche-google`, 2 checklists + PDF + pages merci, 3 villes frontalières). Critère : hors positionnement et 0-1 clic sur 6 mois. 301 dans `vercel.json`.
- Offre SEO local fermée partout (tarifs, pricing, schema, nav, home, villes, Genève) ; carte IA mise en avant sur `/tarifs` ; scénario `/services` « Invisible sur Google » remplacé par « Aucun logiciel ne colle ».
- Refresh CTR par sous-agents : `application-mobile-pme-suisse` (snippet prix/délais, BLUF) et `openclaw-pme-suisse` (intention prestataire, section intégration 5 étapes, FAQ).
- `doc-keeper` (mode audit) : 85 fichiers `docs/` SEO/GMB/GEO supprimés, docs vivants mis à jour ; script `scripts/gmb_build_from_articles.py` supprimé.

**Prochain :** bilan entre le 23.11 et le 09.12 : relancer `/seo-gsc` (pages, 6 mois glissants) et `/seo-index-diagnose` (sitemap), comparer à la baseline ci-dessous. Puis fusionner les 13 articles IA à 0 clic dans `/guides/mettre-en-place-ia-entreprise-guide` (sauf `garde-fous-ia-validations-audit`, à réécrire).

**Pieges :**
- Remplacer en masse une URL morte par la cible de sa 301 dans les fichiers conservés produit des liens absurdes (libellé « 15 signes… » vers la page création de site). Retirer le lien et réécrire la phrase à la main.
- Une regex `<a href=…>…</a>` multi-ligne détruit les cartes `.astro` : éditer les `.astro`/`.ts` à la main.
- Les pages `/blog/tag/PME`, `react native`… sortent cassées en build local (collision de casse sous Windows) ; problème antérieur, non vérifié sur Vercel.
- Non tranchés : articles GEO/web avec clics (`apparaitre-claude` 24 clics, `geo-seo-ia`, `prix-site-web-suisse-2026`, `specialiste-developpement-web-suisse`), pages création/refonte/Webflow, `/developpement-web` + Annemasse/Gaillard, `/developpeur-web-freelance-geneve`. Prix OpenClaw à trancher par Jon (CHF 200-800 vs dès 1'500).

**Commit :** [18dd79a] content(blog): snippet et intention des 2 articles IA à impressions sans clic

---

## Carte du code
> Mise a jour : 2026-11-09

| Fichier | Role |
|---------|------|
| `vercel.json` | 301 de toutes les URLs supprimées vers la page conservée la plus proche (sans chaîne) |
| `astro.config.mjs` | alias `-2026` des anciens articles GEO pointés directement sur `/blog/geo-seo-ia` |
| `src/data/pricing.ts` | grille à 3 offres, `seoLocal` retiré |
| `src/pages/tarifs.astro` | 3 cartes (IA mise en avant), offerCatalog sans SEO local |
| `src/data/scenarios.ts` | section `seo-local` retirée, scénario `custom-tool` (outil sur mesure) |
| `src/data/schema.ts` | ItemList services à 7, serviceSchemas sans SEO local / fiche Google |
| `src/data/navigation.ts` | menu et footer sans pages supprimées |
| `src/data/villes-frontalieres.ts` | ne garde qu'Annemasse et Gaillard |
| `src/lib/blog.ts` · `src/content/config.ts` | catégorie `seo-local` retirée |
| `.seo-data/gsc-pages-baseline-2026-11-09.json` | baseline GSC par page (6 mois + dernier mois), gitignorée |
| `.seo-data/index-jonlabs-2026-11-09.json` | baseline indexation (74/125), gitignorée |

### Decisions cles
- Suppression plutôt qu'archivage : le contenu hors pivot sans clic dilue l'autorité (Google désindexait : 90 → 74 pages indexées entre septembre et novembre).
- Les articles hors pivot avec ≥ 2 clics sont gardés jusqu'au bilan.
