# HANDOFF — 2026-06-07 (session 2)

## Epic en cours
Session 8 — Cluster plateformes Webflow + WordPress → docs/chantier-cluster-plateformes.md

## Etat
- Phases 2-5 TERMINÉES : pages `/services/developpeur-webflow` + `/services/developpeur-wordpress` créées (schema 3×JSON-LD, nav, hub, tarifs alignés /tarifs 1'490/2'490/devis)
- Maillage : 5 sources entrantes (freelance-geneve, 3 articles blog, template [ville] ≈10 pages) ; anti-contradiction creation-site-web réglée
- Build OK 194 pages, sitemap + index,follow vérifiés
- Dernier commit : voir git log (feat(seo) cluster plateformes)

## Prochaine etape (par quoi commencer)
1. **Actions Jonathan post-deploy** : Rich Results Test + GSC Request indexing sur les 2 URLs.
2. Phase 6 (sessions suivantes) : satellites blog — commencer par `webflow-vs-wordpress` (50 CH / 320 FR), pipeline /seo-keywords → /seo-serp → /seo-brief. Priorités et specs dans chantier-cluster-plateformes.md Phase 6.

## Pieges / contexte chaud
- Chaque satellite : 2+ liens contextuels vers /services/developpeur-webflow, slug sans année.
- webflow-vs-prestashop droppé (0 volume) — ne pas le réintroduire.
- Phase 7 : /seo-weekly à S+2 (~21.06) sur `développeur webflow`, `freelance wordpress geneve`, `webflow ecommerce`, `migration wordpress`.
- La card "Refonte" des pages [ville] pointe désormais vers la page WordPress (l'ancienne cible /services/refonte-site-web est noindex).
