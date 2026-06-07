# HANDOFF — 2026-06-07

## Epic en cours
Session 8 — Cluster plateformes Webflow + WordPress → docs/chantier-cluster-plateformes.md

## Etat
- Fait cette session : data complète (GSC 91j : 0 query webflow, `freelance wordpress geneve` 47 imp pos 40 ; 3 batchs DataForSEO CH+FR ; 2 SERP scans → `.seo-data/serp-*.json` ; 2 clusters keywords)
- 2 briefs complets : `content/_drafts/services/developpeur-webflow.md` + `developpeur-wordpress.md`
- Chantier documenté en checklist : `docs/chantier-cluster-plateformes.md` (+ Session 8 dans chantier-seo-refactor.md)
- Dernier commit : baf50e9 (avant session — rien de commité encore, commit proposé au wrap)

## Prochaine etape (par quoi commencer)
1. Faire valider les 2 briefs par Jonathan (surtout les fourchettes tarifs CHF — reprendre celles de /tarifs : low 1490 / high 2490).
2. Puis Phase 2 : créer `src/pages/services/developpeur-webflow.astro` en copiant `creation-site-web.astro` (7 sections, FAQ 10q, schema dans src/data/schema.ts + servicesListData + navigation.ts).

## Pieges / contexte chaud
- Anti-contradiction bloquante : reformuler "Pas de WordPress qui rame" dans creation-site-web.astro (~l.58) AVANT de publier la page WordPress.
- Partition intents (anti-cannibalisation) : tableau dans chantier-cluster-plateformes.md Phase 4 — ne pas toucher le keyword de /developpeur-web-freelance-geneve.
- Pages publiques (PAS noindex, contrairement aux 4 services draft soft).
- Registre vouvoiement (pages services), banned_words identity.md.
- webflow-vs-prestashop droppé (0 volume) — ne pas le réintroduire.
