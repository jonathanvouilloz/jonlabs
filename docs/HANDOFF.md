# HANDOFF — 2026-06-25 (maj)

## Features actives
| Feature | Fichier | Statut |
|---------|---------|--------|
| Refonte SEO / restructuration clusters | docs/features/refonte-seo-clusters.md | **EN COURS** |
| Cluster plateformes Webflow + WordPress | docs/chantier-cluster-plateformes.md | EN ATTENTE |
| Cluster application mobile | docs/features/cluster-application-mobile.md | ✅ DONE |

## Reprendre ici
**Refonte SEO** — Phase 3 : pilier `refonte-site-web` **activé** (noindex retiré → index,follow + section Ressources 7 spokes + sibling réciproque creation-site-web). Prochaine brique code : **étoffer `/services/developpement-mvp`** (pilier C1 Build faible : section Ressources `clusterGroups` + maillage spokes) — ⚠️ les 4 spokes C1 Build n'existent pas encore (`/seo-brief` à lancer). Action manuelle Jonathan : **Request Indexing** GSC sur refonte-site-web (+ les 3 piliers UNKNOWN + creation-site-web + landing geneve). Surveiller `/seo-gsc` J+30/60.
Commit : [à compléter] feat(seo): activation pilier refonte-site-web — index + Ressources + sibling (Phase 3)
