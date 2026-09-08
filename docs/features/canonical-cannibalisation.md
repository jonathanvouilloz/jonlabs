# Feature — Canonical non-www, cannibalisation et dispersion

> Ouvert le 2026-09-08. **Lots A + B LIVRÉS le 2026-09-08. Lots C, D, E ouverts.**
> Sources data : `.seo-data/cannibalisation-jonlabs-ch-2026-06-08_to_2026-09-06.json` (GSC 91 j,
> 500 lignes query×page, 23 pages fetchées) · `.seo-data/gsc-villes-s4-2026-09-08.json` ·
> `.seo-data/gsc-mobile-s4-2026-09-08.json` · snapshots hub `jonlabs` semaines 2026-03-23 → 2026-08-31.

## État session 2026-09-08 (lots A + B)

**Fait :**
- **Lot A** — les 38 URLs non-www sont éradiquées. `public/llm.txt` et `public/llms.txt` normalisés
  sur `https://www.jonlabs.ch`, resynchronisés (ils avaient divergé), purgés de
  `/blog/referencement-local-geneve` (301), `/services/automatisation` et `/services/refonte-site-web`
  (`noindex`). JSON-LD `Dataset.creator.url` de `audit-50-sites-indeps-romands.md` et URL d'exemple
  de `google-post-business-profile-conversion.md` passées en www.
- **Écart assumé au plan** : `/services/developpement-application-mobile` a été **ajouté** à
  `llm(s).txt`. Le pilier du chantier mobile n'y figurait pas alors que c'est une page active du
  silo ; vérifiée indexable au build. À retirer si Jon juge l'ajout hors périmètre.
- **Garde-fou** — `scripts/check-canonical-host.mjs` (node pur, zéro dépendance) branché en
  `prebuild` dans `package.json`, donc actif aussi sur Vercel. Deux assertions, **échec dur** :
  aucune URL non-www dans `src/` et `public/`, et `llm.txt` ≡ `llms.txt`. Échec vérifié en
  introduisant volontairement une URL non-www, puis annulé.
- **Lot B** — `GeoZonesStrip` retiré de `src/pages/index.astro` et le composant supprimé. Il n'a
  pas été déplacé vers le hub : `developpement-web/index.astro` a déjà une section villes plus
  riche, le déplacer aurait fait doublon.
- **Hub désorphelinée** — fil d'Ariane visible ajouté sur `developpement-web/[ville].astro`, miroir
  exact du `getBreadcrumbSchema` déjà déclaré. Le hub passe de **0 à 5 liens entrants**.
- **Commentaires de doctrine réécrits** dans `src/data/navigation.ts` et
  `developpement-web/index.astro` — ils décrivaient encore le maillage par la home.

**Mesuré après build (350 pages, vert) :**

| | Avant | Après |
|---|---:|---:|
| URLs non-www dans `src/` + `public/` | 38 | **0** |
| Liens home → silo géo | 6 | **0** |
| Liens entrants du hub `/developpement-web` | 0 | **5** |
| Liens entrants par page ville | 7 à 10 | 6 à 9 |
| Home → `/services` · `/developpeur-web-freelance-geneve` | 2 · 3 | 2 · 2 |

**Prochain :** réindexation GSC de `/` et des 5 pages ville *(Jon)*, puis mesure S+3 (~29.09) :
re-run `/seo-cannibalisation` — les 41 conflits non-www doivent avoir disparu — et
`/seo-gsc --page-filter "developpement-web/"` contre les 2 173 imp / 1 clic / pos 17,9 du 08.09.
Les lots C et D attendent volontairement cette mesure.

**Pièges :**
- **Ne pas remettre de lien géo sur la home.** C'est la cause mesurée, pas une préférence
  esthétique. Le commentaire de `navigation.ts` porte la décision.
- **Le `prebuild` casse le déploiement Vercel** si une URL non-www réapparaît. C'est voulu.
  Message d'erreur explicite avec fichier, ligne et correction.
- **`llm.txt` et `llms.txt` doivent rester identiques** — `cp public/llm.txt public/llms.txt`.
  Le garde-fou le vérifie.
- Le fil d'Ariane de `[ville].astro` est le **seul** lien interne vers le hub. Le retirer réorpheline
  le hub.

**Commit :** (voir la section Suivi)

## Objectif

Le site gagne des impressions et ne gagne pas de clics. Ce chantier ne produit **aucun contenu neuf** :
il enlève ce qui empêche les pages existantes de sortir. Trois causes mesurées, traitées dans l'ordre
de leur poids.

---

## Ce que dit la mesure

### Les deux S+4 attendus sont tombés — les deux disent la même chose

| Feature | Baseline (28 j) | S+4 : 2026-08-10 → 09-06 (28 j) | Verdict |
|---|---|---|---|
| Villes frontalières (07.08) | 1 210 imp · 0 clic · pos 18,4 | **2 173 imp · 1 clic · pos 17,9** | impressions ×1,8, position figée, CTR toujours nul |
| Silo mobile (06.08) | 1 972 imp · 1 clic · pos 28,9 | **2 920 imp · 1 clic · pos 26,7** | +48 % d'impressions, −2,2 de position, 0 gain de clic |

Le silo mobile avait raison dans son propre post-mortem : *« le levier est le classement, pas le
snippet »*. Ce qui manquait, c'est **pourquoi** le classement ne bouge pas. C'est l'objet de ce chantier.

### Le site entier, 24 semaines

| | 2026-03-23 | 2026-08-31 |
|---|---:|---:|
| Impressions / semaine | 27 | 2 346 |
| Clics / semaine | 0 | 0 |
| Position moyenne | 14,9 | 28,9 |

**Le site s'élargit et s'enfonce.** Il se déclenche sur de plus en plus de requêtes, de plus en plus loin.

### L'audit de cannibalisation : 80 conflits, dont la moitié sont un bug d'hôte

| Catégorie | Conflits | Impressions |
|---|---:|---:|
| **Disparaissent si le non-www disparaît** | **41** | **1 491** |
| Conflits de contenu réels | 39 | 2 312 |
| — dont bruit (home à pos > 50, < 30 imp) | ~28 | ~700 |
| — dont actionnables | **~11** | **~1 600** |

---

## Cause n°1 — `jonlabs.ch` (non-www) vit encore, et il bat les pages géo

Le 308 non-www → www **fonctionne** (vérifié le 08.09 sur `/`, `/blog`,
`/developpement-web/annemasse`). Le `<link rel="canonical">` est correct : `SEO.astro` le
construit depuis `Astro.site` = `https://www.jonlabs.ch`. Le problème n'est donc pas la
redirection, c'est que **le repo continue de publier des URLs non-www**, ce qui maintient l'hôte
vivant comme cible de crawl.

### Ce que ça coûte, chiffré

Sur les 24 conflits où la home bat la page spécialisée, **24 sur 24 sont le non-www**, et **tous**
sont des requêtes ville France voisine :

| Requête | non-www home | page ville dédiée |
|---|---|---|
| agence de développement web ville-la-grand | **pos 1,1** (47 imp) | pos 7 (16 imp) |
| agence web ville-la-grand | **pos 6,2** (52 imp) | pos 9,8 (12 imp) |
| agence seo ville-la-grand | **pos 6,8** (38 imp) | pos 15 (8 imp) |
| agence de référencement internet ville-la-grand | **pos 7** (49 imp) | pos 12,2 (16 imp) |
| agence de développement web la-roche-sur-foron | **pos 8,6** (38 imp) | pos 9 (30 imp) |
| agence de développement web annemasse | **pos 12,1** (32 imp) | pos 16,4 (16 imp) |
| creation site web annemasse | **pos 13,1** (11 imp) | pos 26,5 (43 imp) |
| agence web annemasse | **pos 16,4** (40 imp) | pos 34,6 (48 imp) |

Une home genevoise générique sert de résultat sur « agence web Ville-la-Grand » **en position 1,1**,
avec 0 clic — personne ne clique sur « Développeur Web Freelance à Genève » quand il cherche
Ville-la-Grand. **C'est la raison pour laquelle le S+4 villes frontalières est resté à 1 clic** :
les metas par ville ont été écrites sur des pages que Google ne montre pas.

### Ce qui maintient le non-www vivant

| Fichier | Occurrences | Détail |
|---|---:|---|
| `public/llm.txt` | 19 | 19 URLs non-www, **0 en www** |
| `public/llms.txt` | 17 | idem — et les deux fichiers **divergent** |
| `src/content/blog/audit-50-sites-indeps-romands.md:371` | 1 | JSON-LD `"url": "https://jonlabs.ch"` |
| `src/content/blog/google-post-business-profile-conversion.md:156` | 1 | lien UTM en dur dans le corps |

Trois de ces URLs pointent en plus vers des pages mortes ou volontairement `noindex` :
`/blog/referencement-local-geneve` (301 → `/services/referencement-local` dans `vercel.json`),
`/services/refonte-site-web` et `/services/automatisation` (`noindex` + hors sitemap).

---

## Cause n°2 — la home porte elle-même les noms de villes

`src/pages/index.astro:56` monte `<GeoZonesStrip />`, dont le contenu textuel est :

> **Développement web** dans la région · « Basé à Genève, j'interviens aussi dans les **villes
> frontalières** : » · Annemasse · Gaillard · Ville-la-Grand · Saint-Julien · La Roche-sur-Foron

La home contient donc littéralement les deux moitiés de « développement web + \<ville\> ». Avec
l'autorité d'une home face à des pages ville jeunes, Google la préfère. Le fat footer avait déjà
été purgé de ces liens le 10.07 (`d247cc7`) pour cette raison — **le strip de la home est le
même problème, resté en place**.

---

## Cause n°3 — dispersion et lignes de démarcation absentes

Les seuls conflits de contenu qui coûtent vraiment, une fois le bruit écarté :

| Requête | Imp | Situation |
|---|---:|---|
| **création application mobile suisse** | 248 | blog **pos 7** (77 imp) vs pilier service **pos 27** (171 imp) — le blog gagne, le service encaisse le volume |
| **choisir un freelance pour création de site avec astro** | 159 | **6 URLs**, la meilleure à pos 23 : `/developpeur-web-freelance-geneve`, `/blog/specialiste-developpement-web-suisse`, `/tarifs`, `/services/developpeur-webflow`, `/blog/prix-site-web-suisse-2026`, `/` |
| **agent hermes** | 106 | `/hermes` pos 6,2 (20 imp) vs `/blog/hermes-agent-ia-pme` pos 8,7 (86 imp) — les deux en page 1, elles se partagent |
| agence web développement avancé · agence drupal suisse (romande) · agence développement web custom | 258 | `/blog/specialiste-developpement-web-suisse` capte des requêtes **commerciales** « agence X » qu'aucune page service ne couvre |

---

## Le plan

### Lot A — Éradiquer le non-www *(le plus gros gain, 41 conflits / 1 491 imp)*

| # | Fichier | Changement |
|---|---|---|
| A1 | `public/llm.txt` | 19 URLs `https://jonlabs.ch/…` → `https://www.jonlabs.ch/…` |
| A2 | `public/llms.txt` | 17 URLs idem |
| A3 | `public/llm.txt` + `llms.txt` | retirer `/blog/referencement-local-geneve` (301) ; retirer `/services/refonte-site-web` et `/services/automatisation` (`noindex`) |
| A4 | `public/llm.txt` + `llms.txt` | resynchroniser les deux fichiers (ils divergent aujourd'hui) — un seul contenu, deux noms |
| A5 | `src/content/blog/audit-50-sites-indeps-romands.md:371` | JSON-LD `"url"` → `https://www.jonlabs.ch` |
| A6 | `src/content/blog/google-post-business-profile-conversion.md:156` | lien UTM → `https://www.jonlabs.ch/…` |
| A7 | `tests/` (nouveau) | garde-fou : le build échoue si `https://jonlabs.ch` sans `www` apparaît dans `src/` ou `public/` |

**Vérif :** `grep -rn "https://jonlabs\.ch" src/ public/ | grep -v www` → 0 ligne · `npm run build` vert.

### Lot B — Sortir `GeoZonesStrip` de la home

| # | Fichier | Changement |
|---|---|---|
| B1 | `src/pages/index.astro` | retirer `<GeoZonesStrip />` (l. 56) et son import (l. 13) |
| B2 | `src/pages/developpement-web/index.astro` | y monter le strip — c'est le hub géo, sa place légitime |
| B3 | `src/components/GeoZonesStrip.astro` | remplacer le CTA `/developpeur-web-freelance-geneve` par un lien de retour cohérent avec le hub |

**Ce que ça coûte :** les 5 pages ville perdent un lien depuis la home. Elles gardent 6 à 9 liens
en corps (hub `/developpement-web`, `/services`, cross-links voisins) — c'est documenté dans
`navigation.ts` l. 180-186. Acceptable, et c'est précisément le but.

**Variante plus douce si B1 fait peur :** garder le strip mais retirer « Développement web » du
`<h2>` et « villes frontalières » du sous-titre, pour casser la collocation. Moins efficace, moins
risqué. **Je recommande B1** : le fat footer a déjà été purgé pour la même raison, il n'y a pas de
raison de traiter la home différemment.

### Lot C — Poser les lignes de démarcation *(dépend d'un arbitrage, cf. plus bas)*

| # | Cible | Changement |
|---|---|---|
| C1 | `/blog/developper-application-mobile-suisse` | re-scoper title/H1/intro vers l'informationnel (« comment ça se passe, étapes, délais ») et laisser le commercial au pilier |
| C2 | `/services/developpement-application-mobile` | renforcer explicitement « création application mobile suisse » dans title/H1/intro |
| C3 | C1 ↔ C2 | maillage croisé dans les deux sens, une phrase de contexte chacun |
| C4 | `/hermes` vs `/blog/hermes-agent-ia-pme` | différencier les titles : page produit (« c'est quoi, ce que ça fait ») vs guide (« comment l'installer chez une PME ») |

### Lot D — Dispersion Astro / « agence »

| # | Cible | Changement |
|---|---|---|
| D1 | `/developpeur-web-freelance-geneve` | section dédiée « refonte et création de site avec Astro » — c'est déjà la meilleure URL du groupe (pos 23), on la désigne au lieu de laisser Google arbitrer entre 6 |
| D2 | `/blog/specialiste-developpement-web-suisse` | il capte « agence drupal suisse », « agence développement web custom », « agence web développement avancé » (258 imp) sans qu'aucune page service ne les couvre. **Ne rien réécrire ici** : le noter comme un manque de page service, à trancher plus tard |

### Lot E — Mesure

| # | Action |
|---|---|
| E1 | après déploiement : demander la réindexation de `/` et des 5 pages ville dans la GSC *(Jon — accès GSC)* |
| E2 | S+3 (~2026-09-29) : re-run `/seo-cannibalisation` — les 41 conflits non-www doivent avoir disparu |
| E3 | S+3 : `/seo-gsc --page-filter "developpement-web/"` — comparer aux 2 173 imp / 1 clic / pos 17,9 du 08.09 |
| E4 | S+1 (~2026-09-15) : premier snapshot mesurant les 8 snippets réécrits le 02.09, jusqu'ici jamais mesurés |

---

## Ce que je ne fais PAS, et pourquoi

- **Aucun article neuf.** 78 articles + 24 pages service/géo pour 0 clic par semaine : le stock
  n'est pas le problème.
- **Les 8 conflits géo × géo ne sont pas traités.** Vérification faite : dans 7 cas sur 8 la bonne
  page ville gagne, et le perdant a 1 à 5 impressions. Total 155 imp. C'est du bruit statistique —
  et ça corrige la note que j'avais mise dans `jonlabs-human.md` le 08.09, qui les présentait comme
  un chantier.
- **Les ~28 conflits où la home est à pos > 50 avec quelques impressions.** Google teste, il classe
  très bas, ça ne coûte rien.
- **Les 35 URLs non indexées** restent hors périmètre : elles dépendent d'un export GSC manuel
  (tâche ouverte côté Jon) et relèvent de `refonte-seo-clusters.md`.

## Arbitrages qui ne sont pas à moi

1. **Lot C1/C2** — qui porte « création application mobile suisse » ? Le blog est à pos 7, le pilier
   service à pos 27 avec 2× plus d'impressions. Sacrifier la position 7 du blog pour tenter de
   remonter le pilier est un pari. *(déjà dans `jonlabs-human.md`)*
2. **Lot D2** — créer ou non une page service « développement sur mesure / technologies » pour
   capter les requêtes « agence X » (258 imp). C'est une décision de périmètre d'offre.

## Ordre d'exécution recommandé

**A → B en un seul commit et un seul déploiement**, puis E1 dans la foulée. Ces deux lots traitent
la même cause (la home capte les requêtes ville) et se mesurent ensemble. C et D attendent la
mesure de A+B pour ne pas brouiller la lecture — c'est exactement l'erreur que le silo mobile a
évitée en gelant ses propositions.
