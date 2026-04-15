# Brief détaillé — A2 : "J'ai audité 50 sites d'indépendants romands"

> **Action** : créer `src/content/blog/audit-50-sites-indeps-romands.md`
> **Skill cible** : pipeline `/seo-article` avec placeholders data très visibles
> **Position dans le cluster** : satellite S2, enquête data unique au marché romand
> **Statut data** : méthodologie prête, chiffres à collecter par Jonathan avant publication

---

## 1. Métadonnées SEO

| Champ | Valeur |
|---|---|
| **Slug** | `audit-50-sites-indeps-romands` |
| **Title (H1)** | J'ai audité 50 sites d'indépendants romands : voici ce que j'ai trouvé |
| **Meta title (≤60c)** | Audit 50 sites indépendants romands : l'état des lieux |
| **Meta description (≤155c)** | J'ai audité 50 sites d'indépendants romands (Genève, Vaud, Neuchâtel). Méthode Lighthouse + GMB + Wayback. Les constats bruts, les 3 archétypes, le coût. |
| **OG type** | `article` |
| **Schema** | `Article` + `FAQPage` + `Dataset` (méthodologie + résultats) |
| **pubDate** | 2026-04-22 |
| **Catégorie** | `tech` |
| **Tags** | audit, seo, suisse-romande, site-web, data, etude |

---

## 2. Cible & intention

- **Persona** : Problem-aware. Indépendant/dirigeant qui doute de son propre site, veut un benchmark chiffré avant de décider.
- **Intention** : validation ("je ne suis pas le seul"), benchmarking, puis action.
- **Action finale** : télécharger l'étude complète OU cliquer vers A1 checklist OU demander un audit.

---

## 3. Cluster sémantique

### Mot-clé principal
`audit site web suisse romande`

### Mots-clés secondaires
- audit site indépendant
- état des sites PME romandes
- étude site web Suisse
- qualité sites web Genève
- score Lighthouse moyen PME
- sites web dormants Suisse

### Longueur
2 200 - 2 800 mots.

---

## 4. Structure H2/H3

- **TL;DR** (3 variantes chiffres / méthode / archétypes)
- H2 — Pourquoi j'ai mené cette enquête
- H2 — Méthodologie : comment j'ai audité 50 sites
  - H3 — Le panel : 50 sites, 5 secteurs, 3 cantons
  - H3 — Les critères mesurés (Lighthouse, GMB, Wayback, schema, indexation)
  - H3 — Les outils utilisés
  - H3 — Limites et biais
- H2 — Les 7 constats bruts
  - H3 — #1 : X% n'ont pas publié depuis 12+ mois
  - H3 — #2 : X% ont une fiche GMB inactive
  - H3 — #3 : X% n'ont aucun schema.org
  - H3 — #4 : score Lighthouse perf médian XX/100
  - H3 — #5 : X% sont indexés sur moins de 20 pages
  - H3 — #6 : X% affichent un copyright obsolète
  - H3 — #7 : X% ont un blog zombie
- H2 — 3 archétypes de sites
  - H3 — Le vitrine fossile
  - H3 — Le blog abandonné
  - H3 — Le squelette mobile-cassé
- H2 — Le coût économique cumulé (estimation)
- H2 — Ce que font différemment les 5 meilleurs
- H2 — Comment savoir où vous vous situez
- H2 — FAQ
- H2 — Télécharger l'étude complète

---

## 5. Maillage interne

| Ancre | Cible |
|---|---|
| "pourquoi un site actif change tout" | `visibilite-site-internet-2026.md` (pilier) |
| "checklist 15 signes que ton site dort" | `15-signes-site-web-dort.md` (A1) |
| "plan 30 jours pour devenir visible" | `0a30joursgooglevisible.mdx` |
| "les sites générés par IA tombent dans les mêmes pièges" | `creer-site-vitrine-ia-visibilite-google.md` |
| "combien coûte vraiment un site web en Suisse" | `prix-site-web-suisse-2026.md` |
| "demander un audit personnalisé" | `/services/refonte-site-web` |

---

## 6. Placeholders data (à compléter par Jonathan)

Chaque chiffre est marqué `[DATA-À-INJECTER : ...]` + commentaire HTML `<!-- TODO-DATA: ... -->` pour grep rapide.

Catégories :
1. Composition du panel (répartition cantons, secteurs, âge sites)
2. Constats quantitatifs (7 stats)
3. Coût cumulé estimé
4. Patterns des 5 meilleurs
