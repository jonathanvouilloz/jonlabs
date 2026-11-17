# Architecture des pages SEO hors menu — rebrand v2

> 2026-11-17, branche `rebrand-v2`. Analyse seulement : rien n'est appliqué (ni code, ni `vercel.json`).
> Périmètre : les pages encore en ancien design. Les pages du menu v2 (`/`, `/services`, `/portfolio`,
> `/blog`, `/about`, `/contact`, `/tarifs`) sont hors périmètre, sauf pour le maillage.

## Sources

| Donnée | Source | Fenêtre |
|---|---|---|
| Impressions / clics / position | API Search Console, propriété `sc-domain:jonlabs.ch` (service account du skill `seo-gsc`), dimension `page`, `dataState: final`, URL normalisées (www/non-www, ancre, slash fusionnés) | **3 m** = 15.08 → 14.11.2026 · **12 m** = 15.11.2025 → 14.11.2026 |
| Indexation | API URL Inspection, lancée le 17.11.2026 sur chaque URL | état au 17.11 |
| Sitemap, robots, canonical, liens entrants | build local du 17.11 (`dist/`, 141 pages, 87 URL au sitemap), liens `<a href>` internes comptés par page source distincte | — |
| Décisions | `docs/DECISIONS.md` (09.11, 27.09, 02.09, 08.09, 10.07), `tri-contenu-focus-ia.md`, `silo-mobile-agence.md`, `planSEOIA.md`, `src/data/pricing.ts` | — |

Les données de l'app `seo-stats` (Neon) n'ont pas été lues : pas de `DATABASE_URL` en local. L'API GSC
directe donne la même source.

**Liens entrants** : `total` = toutes les pages du build ; `v2` = pages déjà en chrome v2 (65 pages :
menu + 50 articles + 10 cas). Les liens venant de l'ancien header/footer disparaissent à la bascule ;
seul `v2` compte pour l'après. Un chiffre `v2` de 64-65 = lien sitewide (méga-menu « Systèmes IA » ou
footer v2).

---

## 1. Inventaire

Format : `impressions / clics / position moyenne`. « — » = aucune ligne GSC sur la période.

### Silo IA

| URL | 3 m | 12 m | Sitemap | Indexation (17.11) | Liens total · v2 |
|---|---|---|---|---|---|
| `/consultant-ia` | 414 / 5 / 23.8 | 571 / 6 / 21.8 | oui | indexée | 124 · 65 |
| `/consultant-ia/geneve` | — | — | oui | **détectée, non indexée** (jamais crawlée) | 4 · 1 |
| `/consultant-ia/lausanne` | 97 / 2 / 7.6 | 130 / 2 / 7.9 | oui | indexée | 3 · 0 |
| `/metiers/ia-fiduciaire` | 499 / 5 / 24.2 | 703 / 7 / 23.0 | oui | indexée | 123 · 65 |
| `/metiers/ia-agence-immobiliere` | 62 / 0 / 17.9 | 89 / 0 / 16.3 | oui | indexée | 123 · 65 |
| `/hermes` | 176 / 6 / 7.2 | 307 / 9 / 6.9 | oui | indexée | 124 · 65 |
| `/services/formation-ia-equipe` | 164 / 0 / 31.3 | 210 / 0 / 31.0 | oui | indexée | 124 · 65 |
| `/guides` | 48 / 0 / 28.1 | 71 / 0 / 29.5 | oui | indexée | 123 · 65 |
| `/guides/mettre-en-place-ia-entreprise-guide` | 178 / 0 / 25.7 | 286 / 0 / 28.5 | oui | indexée | 123 · 65 |

Collections : `villes-suisse-ia.ts` = geneve, lausanne · `metiers-ia.ts` = ia-fiduciaire, ia-agence-immobiliere ·
`content/pages` = 1 guide.

### Silo app mobile

| URL | 3 m | 12 m | Sitemap | Indexation | Liens total · v2 |
|---|---|---|---|---|---|
| `/services/developpement-application-mobile` | 7 619 / 4 / 28.0 | **10 630 / 6 / 28.0** | oui | indexée | 78 · 19 |
| `/services/developpement-application-mobile/geneve` | — | — | oui | **inconnue de Google** | 2 · 0 |
| `/services/developpement-application-mobile/lausanne` | 152 / 1 / 26.0 | 152 / 1 / 26.0 | oui | indexée | 2 · 0 |

Collection `villes-mobile.ts` = geneve, lausanne. Le pilier est la 1ʳᵉ page du site en impressions
(« développement application mobile suisse » 1 306 imp p23, « agence application mobile genève » 637 imp p18).

### Silo sites web

| URL | 3 m | 12 m | Sitemap | Indexation | Liens total · v2 |
|---|---|---|---|---|---|
| `/services/creation-site-web` | 17 / 0 / 36.5 | 39 / 0 / 30.0 | oui | indexée | 124 · 65 (footer v2) |
| `/services/refonte-site-web` | — | 19 / 0 / 13.3 | oui | **détectée, non indexée** | 60 · 2 |
| `/services/developpeur-webflow` | 614 / 1 / 38.1 | 829 / 1 / 40.4 | oui | indexée | 63 · 4 |
| `/developpeur-web-freelance-geneve` | 1 635 / 7 / 32.9 | 1 907 / 8 / 32.8 | oui | indexée | 60 · 2 |
| `/developpement-web` | 27 / 1 / 37.7 | 27 / 1 / 37.7 | oui | **explorée, non indexée** | 2 · 0 |
| `/developpement-web/annemasse` | 1 602 / 1 / 31.7 | 2 039 / 2 / 30.2 | oui | indexée | 6 · 1 |
| `/developpement-web/gaillard` | 493 / 3 / 13.5 | 1 049 / 3 / 16.6 | oui | **explorée, non indexée** | 6 · 1 |

Collection `villes-frontalieres.ts` = annemasse, gaillard (3 villes retirées le 09.11, déjà en 301).
`creation-site-web` reçoit déjà 15 redirections 301 de `vercel.json` (articles site web et WordPress supprimés).

### Hors silo

| URL | 3 m | 12 m | Sitemap | Robots / indexation | Liens total · v2 |
|---|---|---|---|---|---|
| `/outils` | 4 / 0 / 3.0 | 55 / 0 / 5.9 | oui | index · **explorée, non indexée** | 1 · 0 |
| `/outils/reddit-dashboard` | 40 / 0 / 9.2 | 88 / 1 / 10.5 | oui | indexée | 123 · 65 (méga-menu Blog) |
| `/cv` | 166 / 8 / 6.7 | 466 / 13 / 7.0 | oui | indexée | 58 · 1 (`/about`) |
| `/cv-pdf` | — | — | non | noindex, nofollow | 1 · 0 |
| `/mentions-legales` | — | — | non | noindex (exclue) | 123 · 65 (footer v2) |
| `/styleguide`, `-blog`, `-compo`, `-components`, `-lab`, `-nav`, `-portfolio`, `-services` (8) | — | — | non | noindex | 0 · 0 |
| `/v2` | — | — | **oui (bug)** | noindex, nofollow · inconnue de Google | 64 · 64 (logo v2) |
| `/v2/styleguide` | — | — | non | noindex | 0 · 0 |

Deux anomalies relevées au build :
- **`/v2` est dans le sitemap alors qu'il est `noindex`** : le filtre de `astro.config.mjs` exclut `/styleguide` mais pas `/v2`. Le logo du chrome v2 pointe vers `/v2` (64 pages).
- **`/services` (menu v2) annonce encore « référencement local »** dans sa meta description, offre fermée le 09.11.

---

## 2. Verdict par URL

| URL | Verdict | Justification |
|---|---|---|
| `/consultant-ia` | **GARDER + RÉÉCRIRE** | Pilier IA, 571 imp / 6 clics, lien sitewide. Angle « consultant » → « systèmes IA sur mesure » ; garder URL et ancres `#automatisation` `#integration-outils` `#agents-sur-mesure` (cibles de 301 et du méga-menu). |
| `/consultant-ia/geneve` | **FUSIONNER → `/consultant-ia`** | 0 impression en 12 m, jamais crawlée en 4,5 mois. Genève est la ville du pilier : doublon. |
| `/consultant-ia/lausanne` | **GARDER** | Pos 7.9 sur « meilleur consultant ia lausanne », 2 clics. Seule déclinaison géo IA qui marche. |
| `/metiers/ia-fiduciaire` | **GARDER** | 703 imp / 7 clics : 2ᵉ page IA en clics. |
| `/metiers/ia-agence-immobiliere` | **GARDER** | 89 imp, 0 clic, mais même gabarit que fiduciaire, dans le méga-menu, cœur du pivot. À relire au bilan. |
| `/hermes` | **GARDER** | Meilleure page transactionnelle IA : 9 clics, pos 6.9 sur « hermes agent ». Lien de la carte IA de `/tarifs`. |
| `/services/formation-ia-equipe` | **GARDER** | Offre vendue (`pricing.formationIA`), 210 imp. Pos 31 : le rattrapage passe par le maillage v2, pas par une fusion. |
| `/guides` | **REDIRIGER → `/blog`** | Hub d'un seul guide, 71 imp / 0 clic. Rien à lister tant qu'il n'y a pas de 2ᵉ guide (cf. Q5). |
| `/guides/mettre-en-place-ia-entreprise-guide` | **GARDER** | 286 imp, lien sitewide, cible de 3 redirections et de la future fusion des 13 articles IA à 0 clic (`tri-contenu-focus-ia.md`). |
| `/services/developpement-application-mobile` | **GARDER** | 10 630 imp, 1ʳᵉ page du site. Offre conservée. Garder le recentrage « agence + ville » décidé le 02.09. |
| `/services/developpement-application-mobile/geneve` | **FUSIONNER → pilier mobile** | Inconnue de Google après 3 mois ; le pilier porte déjà « agence application mobile genève » (637 imp p18). |
| `/services/developpement-application-mobile/lausanne` | **GARDER** | 152 imp, indexée, gagnait sur « agence application mobile lausanne » (31 → 24, mesure du 02.09). |
| `/services/creation-site-web` | **GARDER + RÉÉCRIRE** | Offre vendue (dès CHF 850), cible de 15 301 et du footer v2. Devient le pilier web unique : absorbe refonte (et Webflow si Q1 = oui). |
| `/services/refonte-site-web` | **FUSIONNER → `/services/creation-site-web`** | 19 imp / 0 clic en 12 m, non indexée, plus d'offre « refonte » dans `pricing.ts`. |
| `/services/developpeur-webflow` | **FUSIONNER → `/services/creation-site-web`** *(si Q1 = oui)* | 829 imp mais pos 40 et 1 clic en 12 m. Webflow reste une ligne de la carte « Site web » ; une section suffit. |
| `/developpeur-web-freelance-geneve` | **GARDER + RÉÉCRIRE** | 1 907 imp / 8 clics : 2ᵉ page du périmètre en clics. Requêtes identité (« développement web genève », « freelance … astro »). Réécrire en page « freelance à Genève » qui mène aux 3 offres (cf. Q4). |
| `/developpement-web` | **REDIRIGER → `/services/creation-site-web`** | Hub de 2 villes, non indexé, 27 imp. Le pilier web reprend le rôle de parent (fil d'Ariane des villes). |
| `/developpement-web/annemasse` | **GARDER (sursis)** | 2 039 imp, 2 clics, pos 30. Laissée « non tranchée » le 09.11 ; décision au bilan 23.11 → 09.12 (cf. Q2). |
| `/developpement-web/gaillard` | **GARDER (sursis)** | 1 049 imp, 3 clics, pos 13.5 sur 3 m, mais sortie de l'index (« explorée, non indexée »). Même sursis. |
| `/outils` | **REDIRIGER → `/outils/reddit-dashboard`** | Hub d'un seul outil, non indexé, 1 lien entrant. |
| `/outils/reddit-dashboard` | **GARDER** | Indexé, 88 imp / 1 clic, pos 10.5. Coût nul (cf. Q3 pour sa place dans le menu). |
| `/cv` | **GARDER + RÉÉCRIRE** | 13 clics en 12 m (requêtes marque). Title « développeur web à Genève » → aligner sur le positionnement IA. |
| `/cv-pdf` | **NOINDEX** (inchangé) | Version imprimable, hors sitemap. |
| `/mentions-legales` | **NOINDEX** (inchangé) | Page légale, hors sitemap, lien footer v2. |
| `/styleguide` + 7 variantes | **SUPPRIMER** (404 suffit) | Styleguides de l'ancien design, noindex, jamais indexés, 0 lien. `/v2/styleguide` les remplace. Pas de 410 : aucune URL connue de Google. |
| `/v2` | **REDIRIGER → `/`** à la bascule | D'ici là : sortir du sitemap. Le logo v2 doit pointer `/` à la bascule. |
| `/v2/styleguide` | **NOINDEX** (inchangé) | Référence vivante des composants. |

### Comptes

| Verdict | URL |
|---|---|
| GARDER | 11 |
| GARDER + RÉÉCRIRE | 4 |
| FUSIONNER (301) | 4 (dont Webflow, conditionnel à Q1) |
| REDIRIGER (301) | 4 (dont `/v2` à la bascule) |
| NOINDEX | 3 |
| SUPPRIMER | 8 (styleguides) |
| **Total** | **34** |

Les 8 URL redirigées ou fusionnées pèsent ensemble 1 001 imp / 2 clics sur 12 m (dont 829 / 1 pour Webflow).
Les 15 URL gardées pèsent 18 666 imp / 58 clics.

---

## 3. Architecture cible

### Arborescence

```
/                                    menu v2
/services                            menu v2 (Systèmes IA) — hub des 3 offres
├─ IA (cœur)
│  /consultant-ia                    pilier IA
│  ├─ /consultant-ia/lausanne        déclinaison ville
│  ├─ /metiers/ia-fiduciaire         déclinaison métier
│  ├─ /metiers/ia-agence-immobiliere déclinaison métier
│  /hermes                           produit (offre « dès CHF 1'500 »)
│  /services/formation-ia-equipe     service
│  /guides/mettre-en-place-ia-entreprise-guide   guide pilier (contenu)
├─ App mobile
│  /services/developpement-application-mobile    pilier mobile
│  └─ /services/developpement-application-mobile/lausanne
└─ Sites web (hors menu, footer)
   /services/creation-site-web       pilier web (absorbe refonte + Webflow)
   ├─ /developpement-web/annemasse   sursis jusqu'au bilan
   ├─ /developpement-web/gaillard    sursis jusqu'au bilan
   /developpeur-web-freelance-geneve page « freelance à Genève » (identité locale)
/tarifs                              gardée (décision 17.11)
/outils/reddit-dashboard             outil
/cv · /mentions-legales              pages simples
```

### Maillage : quelles pages v2 poussent vers quelles pages SEO

| Depuis | Vers | État au 17.11 | À faire |
|---|---|---|---|
| Méga-menu « Systèmes IA » (sitewide) | `/consultant-ia`, `/hermes`, `/services/formation-ia-equipe`, 2 métiers, guide | en place (lit `mainNav`) | Retirer « Tous les guides » (`/guides` redirigée) ; remplacer « Cadrage projet IA » par le libellé réécrit du pilier |
| Méga-menu « Blog » | `/outils/reddit-dashboard` | en place | Selon Q3 |
| Footer v2 « Sites & SEO » | `/services/creation-site-web` | en place | Libellé « Sites web » : l'offre SEO est fermée depuis le 09.11 |
| `/services` bloc IA | `/consultant-ia`, `/hermes`, formation, métiers | en place | — |
| `/services` bloc Sites web | `/services/creation-site-web`, Webflow | en place | Retirer le lien Webflow si fusion |
| `/services` bloc App mobile | pilier mobile | en place | Ajouter `/lausanne` en lien secondaire |
| `/services` section Zone | Annemasse, Gaillard, `/developpeur-web-freelance-geneve` | en place | Ajouter `/consultant-ia/lausanne` (0 lien v2 aujourd'hui) |
| `/tarifs` cartes | `/hermes`, `/services/creation-site-web`, pilier mobile | en place (`pricing.offers`) | — |
| `/about` | `/cv`, ajouter `/developpeur-web-freelance-geneve` | `/cv` seul | 1 lien |
| Piliers → déclinaisons | `/consultant-ia` → Lausanne + métiers ; mobile → Lausanne ; web → Annemasse, Gaillard | en place (ancien design) | Garder dans les gabarits v2 ; c'est le seul maillage des villes (décision 10.07 : pas de villes au footer ni au menu, ni sur la home, décision 08.09) |
| Déclinaisons → pilier | fil d'Ariane visible + lien retour | en place | Fil d'Ariane des villes web : parent = `/services/creation-site-web` (plus `/developpement-web`) |

Liens internes à retoucher à cause des 301 (sinon liens vers une redirection) : `/blog/prix-agent-ia-automatisation-suisse` → `/consultant-ia/geneve` ;
`/blog/prix-site-web-suisse-2026` et `/portfolio/swiss-dental-care` → refonte ; `/blog/prix-site-web-suisse-2026`,
`/blog/specialiste-developpement-web-suisse`, `/portfolio/barber-concept`, `/services` → Webflow ; `reddit-dashboard.astro` → `/outils` (2 liens) ;
`Footer.astro` (ancien) et `navigation.ts` → `/guides`. Les liens blog sont à faire après le chantier tags en cours.

### Place des pages hors menu

Le menu v2 ne porte que l'IA (méga-menu). Le silo web n'a qu'une porte sitewide : le lien footer vers
`/services/creation-site-web`, qui distribue ensuite vers les villes et `/developpeur-web-freelance-geneve`.
Le silo mobile n'a pas de lien sitewide : il vit du bloc `/services`, de `/tarifs` et de 19 articles v2.
C'est suffisant pour la page la plus vue du site, à condition que le gabarit v2 garde ses liens descendants.

---

## 4. Gabarits v2

**3 gabarits à créer + 1 réutilisé.** Prérequis commun : `Bento`, `Steps`, `Proofs`, `Pricing`,
`Testimonials` et `Contact` n'ont pas de props (contenu de la home en dur) ; il faut leur passer les
données en props avant de les réutiliser. `Faq` (`items`), `CaseSpec` (`entry`), `ProjectForm`
(`action`), `Nav`/`Dock`/`Footer` sont déjà paramétrables.

| # | Gabarit | Pages (15) | Blocs, dans l'ordre |
|---|---|---|---|
| 1 | **Page service** | `/consultant-ia`, `/hermes`, `/services/formation-ia-equipe`, pilier mobile, `/services/creation-site-web`, `/developpeur-web-freelance-geneve` (6) | `Nav` · en-tête `.v2-head` (H1 + lead, une cellule teal) · `Proofs` (chiffres) · blocs sous-services façon `/services` (`sv-n-*` : titre collant / contenu) · `Bento` (ce que je construis) · `Steps` (méthode) · `CaseSpec` (1-2 cas liés) · prix lu dans `pricing.ts` (cellule simple, ou `Pricing` filtré sur une offre pour `/hermes`) · liens descendants (villes, métiers) · `Testimonials` · `Faq` · `Contact` · `Footer` + `Dock`. Schémas Service/FAQ/Breadcrumb inchangés. |
| 2 | **Page déclinée** (ville ou métier) | `/consultant-ia/lausanne`, `/services/developpement-application-mobile/lausanne`, `/developpement-web/annemasse`, `/developpement-web/gaillard`, `/metiers/ia-fiduciaire`, `/metiers/ia-agence-immobiliere` (6) | `Nav` · fil d'Ariane visible (= `getBreadcrumbSchema`) · `.v2-head` (H1 exact-match) · contexte local ou métier (prose) · `Bento` (secteurs / cas d'usage / outils du métier) · `Steps` (méthode partagée, constante) · preuve locale (`CaseSpec` si cas existant) · `Faq` (FAQ propres à l'entrée) · voisines + retour au pilier · `Contact` · `Footer`. Un seul composant pour les 4 sources (`villes-suisse-ia`, `villes-mobile`, `villes-frontalieres`, `metiers-ia`) : aligner leurs champs communs plutôt que 4 gabarits. |
| 3 | **Page simple** | `/cv`, `/mentions-legales`, `/outils/reddit-dashboard` (3) | `Nav` · `.v2-head` · colonne de lecture (même colonne que l'article, `.co-prose`) ou slot pour l'îlot outil · `Footer`. Pas de CTA sur les mentions. |
| 4 | **Article** (réutilisé) | `/guides/mettre-en-place-ia-entreprise-guide` (1) | Mise en page de `/blog/[slug]` (magazine centré, sommaire, « À lire ensuite ») à extraire en layout partagé ; garder le schéma et le `lastmod` de la collection `pages`. |

Les 3 routes ville actuelles (536, 571 et 669 lignes) et la route métier (571 lignes) tombent sur un
seul gabarit 2. Les 7 pages service actuelles (700 à 1 050 lignes chacune) tombent sur le gabarit 1.

---

## 5. Redirections (format `vercel.json`, à ajouter à `redirects`)

Pas de chaîne : les 8 règles existantes qui visent `/outils` et les 3 qui visent `/developpement-web`
sont **remplacées** (mêmes `source`, nouvelle `destination`).

```json
    { "source": "/services/refonte-site-web", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/services/refonte-site-web/", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/consultant-ia/geneve", "destination": "/consultant-ia", "permanent": true },
    { "source": "/consultant-ia/geneve/", "destination": "/consultant-ia", "permanent": true },
    { "source": "/services/developpement-application-mobile/geneve", "destination": "/services/developpement-application-mobile", "permanent": true },
    { "source": "/services/developpement-application-mobile/geneve/", "destination": "/services/developpement-application-mobile", "permanent": true },
    { "source": "/developpement-web", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/guides", "destination": "/blog", "permanent": true },
    { "source": "/guides/", "destination": "/blog", "permanent": true },
    { "source": "/outils", "destination": "/outils/reddit-dashboard", "permanent": true },
    { "source": "/outils/", "destination": "/outils/reddit-dashboard", "permanent": true },
```

Si Q1 confirme la fusion Webflow :

```json
    { "source": "/services/developpeur-webflow", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/services/developpeur-webflow/", "destination": "/services/creation-site-web", "permanent": true },
```

À la bascule `/v2` → `/` :

```json
    { "source": "/v2", "destination": "/", "permanent": true },
    { "source": "/v2/", "destination": "/", "permanent": true },
```

Règles existantes à **modifier** (destination seulement) :

```json
    { "source": "/developpement-web/saint-julien-en-genevois", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/saint-julien-en-genevois/", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/ville-la-grand", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/ville-la-grand/", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/la-roche-sur-foron", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/developpement-web/la-roche-sur-foron/", "destination": "/services/creation-site-web", "permanent": true },
    { "source": "/outils/checklist-commerce-google-pdf", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-commerce-google-pdf/", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-15-signes-site-dort-pdf", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-15-signes-site-dort-pdf/", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-commerce-google", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-commerce-google/", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-15-signes-site-dort", "destination": "/blog", "permanent": true },
    { "source": "/outils/checklist-15-signes-site-dort/", "destination": "/blog", "permanent": true },
    { "source": "/merci-checklist-15-signes", "destination": "/blog", "permanent": true },
    { "source": "/merci-checklist-15-signes/", "destination": "/blog", "permanent": true },
    { "source": "/merci-checklist", "destination": "/blog", "permanent": true },
    { "source": "/merci-checklist/", "destination": "/blog", "permanent": true },
```

(Les checklists vers `/blog` plutôt que vers le Reddit dashboard : aucun rapport de sujet, et c'est la
cible déjà retenue pour les autres contenus SEO local supprimés.)

À faire en même temps que les 301 : supprimer les entrées `geneve` de `villes-suisse-ia.ts` et
`villes-mobile.ts`, les fichiers `refonte-site-web.astro`, `developpement-web/index.astro`,
`guides/index.astro`, `outils/index.astro`, les 8 `styleguide*.astro` ; ajouter `/v2` au filtre du
sitemap tant que la bascule n'est pas faite.

---

## 6. Questions pour Jonathan

| # | Question | Ce que disent les données | Recommandation |
|---|---|---|---|
| Q1 | **L'offre Webflow est-elle encore vendue ?** `pricing.ts` l'affiche encore (dès CHF 950). | Page à pos 40, 1 clic en 12 m, 829 imp sur « développeur webflow ». | La garder comme option de l'offre site web (une section de `/services/creation-site-web`) et **fusionner la page** (301). Si Webflow n'est plus vendu du tout : même 301, et retirer la ligne de `pricing.ts`. |
| Q2 | **Vends-tu encore des sites web en zone frontalière (Annemasse, Gaillard) ?** | 3 069 imp / 5 clics en 12 m pour les deux ; Gaillard vient de sortir de l'index. Laissées « non tranchées » le 09.11. | Les garder jusqu'au bilan du 09.12 (gabarit 2, coût marginal). Si moins de 2 clics sur les 6 mois suivants : 301 vers `/services/creation-site-web`. |
| Q3 | **Le Reddit dashboard reste-t-il une vitrine ?** | 88 imp / 1 clic, indexé, lié depuis le méga-menu Blog sur toutes les pages v2. Hors positionnement IA. | Le garder (aucun coût, indexé) mais le sortir du méga-menu ; lien depuis `/about` ou un article seulement. |
| Q4 | **Quel angle pour `/developpeur-web-freelance-geneve` : « développeur web » ou « freelance systèmes IA à Genève » ?** | 1 907 imp / 8 clics, requêtes « développement web genève », « freelance … astro ». | Garder l'URL et « développeur freelance Genève » dans le title (c'est ce qui ramène les clics), réécrire le corps en page identité qui présente les 3 offres, IA en premier. |
| Q5 | **Un 2ᵉ guide est-il prévu à court terme ?** | `/guides` liste 1 guide, 71 imp / 0 clic ; le plan prévoit de fusionner 13 articles dans le guide existant, pas d'en créer un autre. | Non → 301 `/guides` vers `/blog` maintenant ; recréer le hub le jour où il y aura 3 guides. |

## Arbitrages de Jonathan (2026-11-17)

- **Q1 Webflow** : option de l'offre site web. `/services/developpeur-webflow` → 301 `/services/creation-site-web` ; Webflow reste dans `pricing.ts`.
- **Q2 Zone frontalière** : plus de sites web à Annemasse/Gaillard, « on aura du service IA à la place ». `/developpement-web/{annemasse,gaillard}` → 301 vers des pages IA de ville `/consultant-ia/{annemasse,gaillard}` (à créer sur le gabarit décliné).
- **Q3 Reddit dashboard** : gardé, sorti du méga-menu Blog (recommandation appliquée).
- **Q4 `/developpeur-web-freelance-geneve`** : URL gardée, page « freelance à Genève », IA d'abord puis sites et apps.
- **Q5 Guides** : 301 `/guides` → `/blog` (recommandation appliquée).
