# Feature — Refonte SEO / restructuration par clusters

> Chantier de fond : re-simplifier le site autour de **3 clusters** (app custom, app mobile, création web+référencement), garder ce qui ranke, virer l'invisible hors-périmètre.
> **Plan maître** : `docs/restructuration-clusters.md` (archi cible, verdict par page, liste KILL, feuille de route 5 phases).
> **Diagnostic data** : `.seo-data/diagnostic-gsc-pages-cannibalisation.md`.

## Etat session 2026-06-25

**Fait :**
- Diagnostic GSC 3 mois + indexation (URL Inspection API) + graphe de maillage interne → `docs/restructuration-clusters.md` (93 routes classées par cluster, verdict KEEP/IMPROVE/MERGE/ACTIVATE/KILL).
- Corrigé 2 faux positifs du diagnostic initial : pages géo/portfolio **pas orphelines** (liées via `navigation.ts`) ; doublons d'articles `geo-seo-ia`/`apparaitre-grok` = **301 déjà en place**, pas de la cannibalisation.
- **Phase 0 livrée** : fat footer (`Footer.astro`) avec liens profonds plain-HTML sitewide (3 piliers + 5 zones + services + articles) sur 188 pages. Build OK.
- Vérifié : canonical www **déjà actif** (308 `jonlabs.ch → www`), trailing-slash déjà géré → aucune action code nécessaire de ce côté.

**Prochain :** Phase 1 — lancer `/seo-topical-map` pour les 3 clusters (commencer par **C2 app mobile** : créer le pilier service manquant `/services/...application-mobile`, puis relier les 10 articles déjà produits). Voir feuille de route dans `docs/restructuration-clusters.md`.

**Pièges :**
- Décisions actées : GMB **gardé** (sous-pilier C3) ; pages géo **gardées + maillées** (principe 1 page = 1 intention, désambiguïser la home) ; KILL **au cas par cas** (liste annotée dans le plan maître, à valider page par page).
- Action manuelle en attente côté Jonathan : **Request Indexing** GSC sur les 3 piliers www (developpeur-web-freelance-geneve, services/developpeur-webflow, services/developpeur-wordpress).
- Re-checker `/seo-gsc` à J+3-10 pour confirmer indexation des piliers + fin du résiduel non-www.

**Commit :** ff2d641 feat(seo): fat footer + diagnostic restructuration clusters

---

## Carte du code
> Mise a jour : 2026-06-25

| Fichier | Role |
|---------|------|
| `docs/restructuration-clusters.md` | Plan maître du chantier : 3 clusters, verdict par page, liste KILL, feuille de route 5 phases |
| `.seo-data/diagnostic-gsc-pages-cannibalisation.md` | Diagnostic data (GSC perf, indexation, cannibalisation) |
| `src/components/Footer.astro` | Fat footer : liens profonds sitewide (piliers/zones/services) depuis `mainNav.columns` |
| `src/data/navigation.ts` | Source de vérité du maillage (méga-menu + footer) — piliers & zones y sont déclarés |
| `.seo-data/gsc-jonlabs-last_3_months.json` | Snapshot GSC brut (régénérable via `/seo-gsc`) |

### Decisions cles
- Canonical = **www** (déjà enforced par 308 infra Vercel) ; tout le code déclare www (Astro.site, SITE_URL, robots, sitemap).
- Maillage profond = **footer plain-HTML** (le méga-menu JS est sous-pondéré au crawl) ; ne pas compter sur la nav seule pour la découvrabilité.
- Le fat footer lit `mainNav.columns` — pour ajouter une page au maillage sitewide, l'ajouter dans `navigation.ts`.
