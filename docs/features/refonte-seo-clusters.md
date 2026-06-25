# Feature — Refonte SEO / restructuration par clusters

> Chantier de fond : re-simplifier le site autour de **3 clusters** (app custom, app mobile, création web+référencement), garder ce qui ranke, virer l'invisible hors-périmètre.
> **Plan maître** : `docs/restructuration-clusters.md` (archi cible, verdict par page, liste KILL, feuille de route 5 phases).
> **Diagnostic data** : `.seo-data/diagnostic-gsc-pages-cannibalisation.md`.

## Etat session 2026-06-25 — Phase 1 / C2 : pilier service mobile

**Fait :**
- **Pilier service mobile créé** : `src/pages/services/developpement-application-mobile.astro` (modèle = developpement-mvp.astro) — hero, pain points, méthode, résultats, prix, section **Ressources** reliant les 10 articles du cluster, FAQ, about, local, CTA. Intent **transactionnel** (anti-cannibalisation avec le pillar blog informationnel).
- **4 visuels doodle** générés via OpenAI `gpt-image-1` (clé Gemini expirée) → `src/assets/services/mobile-{hero,problemes,methode,cta-final}.png`, style cohérent avec les visuels MVP.
- **Schema Service** ajouté (`serviceSchemas["developpement-application-mobile"]`) + breadcrumb + FAQPage.
- **Découvrabilité** : item « Application mobile » ajouté dans `navigation.ts` (colonne Web & apps) → méga-menu + fat footer sitewide.
- **CTA repointé** : les 2 CTA transactionnels du pillar blog `developper-application-mobile-suisse` pointent désormais vers le pilier service (le lien MVP contextuel de `freelance-ou-agence` préservé volontairement).
- Build OK (**195 pages**, +7), page dans le sitemap, dist généré.

**Prochain :** Phase 1 — topical maps **C1 (app custom/IA)** et **C3 (web + réf. local + GEO + GMB)**. Voir feuille de route `docs/restructuration-clusters.md`.

**Pièges :**
- Clé **GEMINI_API_KEY expirée** → la génération d'images est passée par OpenAI cette session. À renouveler côté Google pour réactiver le pipeline `/generate-images` natif.
- Visuels mobile = doodles OpenAI (corrects, captions lisibles) ; régénérables en Gemini plus tard si on veut l'aligner pixel-perfect sur les MVP.

**Commit :** d9031b5 feat(seo): pilier service application mobile + maillage cluster C2

---

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
| `src/pages/services/developpement-application-mobile.astro` | **Pilier service C2 (mobile)** : page transactionnelle + section Ressources reliant les 10 articles du cluster |
| `src/components/Footer.astro` | Fat footer : liens profonds sitewide (piliers/zones/services) depuis `mainNav.columns` |
| `src/data/navigation.ts` | Source de vérité du maillage (méga-menu + footer) — piliers & zones y sont déclarés |
| `.seo-data/gsc-jonlabs-last_3_months.json` | Snapshot GSC brut (régénérable via `/seo-gsc`) |

### Decisions cles
- Canonical = **www** (déjà enforced par 308 infra Vercel) ; tout le code déclare www (Astro.site, SITE_URL, robots, sitemap).
- Maillage profond = **footer plain-HTML** (le méga-menu JS est sous-pondéré au crawl) ; ne pas compter sur la nav seule pour la découvrabilité.
- Le fat footer lit `mainNav.columns` — pour ajouter une page au maillage sitewide, l'ajouter dans `navigation.ts`.
