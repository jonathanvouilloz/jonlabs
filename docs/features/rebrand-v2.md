# Rebrand v2 — nouvelle DA « freelance systèmes IA »

> Branche `rebrand-v2`. Redesign de toutes les pages, home comprise (basculée sur `/` le 2026-11-17).
> Système de design figé dans `docs/design-v2.md`.

> **Statut** : EN PRODUCTION depuis le 2026-11-17 (`main` = `rebrand-v2`) · **Commits** : `cd59f58..f6d7f27`

## Ce que ça fait
Refonte visuelle du site jonlabs.ch sur le système « v2 » (grille à filets, Funnel Display, teal), page par page, sur la branche `rebrand-v2`. Le visiteur voit un site cohérent « freelance systèmes IA », home incluse : `/v2` redirige en 301 vers `/`. Le site vouvoie, le blog tutoie.

## Comment ça marche
- Home : `src/pages/index.astro` (copy validée : hero « Des applications où vos équipes et vos agents IA collaborent », méthode en 5 étapes, bento, hub, FAQ 7 questions, contact). Title « Développement IA sur mesure à Genève » ; schémas = organisation, localBusiness, website, webPage.
- Bouton « Discuter de mon projet » (Hero, Nav, Dock, Contact, home) : `[data-cal-popup]` ouvre Cal.com en fenêtre ; un seul chargeur Cal dans `v2-ui.ts` sert aussi l'agenda inline `#cal-inline` (home, contact).
- Coquille : `layouts/V2Page.astro` (Layout + Nav + Dock + Footer + `v2.css` + `v2-ui.ts`, prop `current` pour la pastille de nav). `layouts/V2Simple.astro` ajoute en-tête centré + colonne 680px `.co-prose` (cv, mentions, reddit-dashboard).
- Pages service : `components/v2/ServicePage.astro` reçoit un objet (head, proofs, sections, bento, method, cases, links, testimonials, faq) ; chaque route (`hermes`, `consultant-ia`, formation IA, app mobile, création de site, développeur freelance Genève) ne fait que fournir les données.
- Pages déclinées (villes, métiers) : `components/v2/declinee/DeclineePage.astro` + contrat `types.ts` (`DcPage`) ; chaque route mappe sa source (`villes-suisse-ia`, `villes-mobile`, `metiers-ia`) vers ce contrat via `shared.ts`.
- Blog : `PostCells.astro` = grille partagée par `/blog` et `/blog/tag/[tag]` ; `lib/tags.ts` porte les libellés des 33 tags normalisés (anciens 148 → 33, table dans `docs/research/tags-normalisation.md`).
- Contact : `ContactSteps.astro`, formulaire 3 étapes, POST `fetch` vers `api.web3forms.com/submit` (conservé de l'ancienne page).
- Portfolio : `/portfolio` en rangées (`data-rise`), `/portfolio/[slug]` = dossier technique + lightbox. 4 études de cas IA ajoutées (`wildcat-agent-mails`, `barber-hub-automatisation`, `systeme-ia-jonlabs`, `gestion-camps-budget` anonymisée) ; images hero provisoires.
- Sous-services des pages service : `src/data/service-sections.ts` (remplace `scenarios.ts`, supprimé). Hébergement IA « dès CHF 15 / mois » : `pricing.ts` (`runningCost`).
- Redirections : fusions et retraits dans `vercel.json` (301), arbitrés dans `docs/research/architecture-pages-v2.md`. `/developpement-web` retiré ; refonte et Webflow absorbées par création de site ; Genève fusionnée dans les piliers.
- `v2-ui.ts` : `[data-rise]` (enfants directs qui montent en décalé, inactif sous `prefers-reduced-motion`) ; les liens `/contact#agenda` de Nav/Dock deviennent `#agenda` quand la page a son propre agenda (home, contact).

## Comment débuguer
- **Par où entrer** : le gabarit concerné (`V2Page`, `ServicePage`, `DeclineePage`), puis `src/styles/v2.css` et `src/scripts/v2-ui.ts`.
- **Ce qu'on observe** : `npm run build` (121 pages), `/v2/styleguide` (non redirigée par la 301 `/v2` exacte, à vérifier en preview) pour la référence des composants, `dist/` pour title/schémas.
- **Pannes connues** : voir les Pièges du bloc 2026-11-17 (suite) plus bas (marges `.co-prose`, spécificité `.v2 a`, grille d'article).
- **Pièges** : l'ouverture Cal en fenêtre dépend du chargeur de `v2-ui.ts` ; sans JS le lien `/contact#agenda` fait office de repli. `data-rise` pose `opacity:0` en JS sur les enfants ; un enfant ajouté après coup reste visible. Un seul `.v2-teal` par page (la cellule teal de `/tarifs` est `<Pricing />`).

## Configuration
Clé Web3Forms du formulaire contact (dans `ContactSteps.astro`, publique côté client) ; 301 dans `vercel.json` ; `prebuild` = `scripts/check-canonical-host.mjs`.

## Tests et vérifications
| Vérif | Commande | Résultat réel |
|---|---|---|
| Build complet | `npm run build` | OK, 121 pages, relancé le 2026-11-17 |
| Fenêtre Cal.com (`[data-cal-popup]`) | build local + navigateur headless | OK en local (fenêtre ouverte, page inchangée) ; non retesté en production |
| 301 (anciens tags encodés, fusions, `/v2`) | `curl` sur www.jonlabs.ch | OK en production (308) ; `/v2/styleguide` reste en 200 |
| Envoi réel du formulaire contact | navigateur | **non testé** |
| Contrôle visuel 1536×808 et 390px | manuel | rapporté, non relancé |

## Limites et dettes
- Non testés en production : envoi réel du formulaire contact, fenêtre Cal.com, dock mobile qui recouvre les boutons du formulaire `/contact`, visuel des pages service.
- `src/pages/devis-client/[slug].astro` encore en ancien design (`global.css`, noindex, devis client).
- `blueprint.css` reste importé par `Layout.astro` : `.co-prose` (corps des articles) en dépend. `Header`/`Footer`/`Hero` anciens et composants de l'ancienne home sont supprimés.
- Études de cas IA : images provisoires, captures et chiffres réels à fournir (tâche Jonathan) ; l'étude `gestion-camps-budget` porte une date de livraison approximative (dernier commit 13.10.2026).
- Témoignages en lorem ; formulaire contact non branché au CRM (tâche Jonathan).
- Mot-clé de la home : volumes et SERP google.ch réelle non obtenus (cf. `docs/research/home-mot-cle.md`), à mesurer en GSC.

## Etat session 2026-11-17 (suite 4)

**Fait :**
- Preview Vercel de `rebrand-v2` (protégée par SSO, non testable sans connexion), puis merge fast-forward dans `main` et mise en production.
- 301 vérifiées sur www.jonlabs.ch (`/v2`, tags encodés, fusions Webflow/refonte, `/developpement-web/*`, `/guides`, `/outils`, doublons Genève).
- Correctif : 301 des tags qui ne différaient que par la casse (`PME`, `ROI`, `Flutter`), Vercel étant sensible à la casse.

**Prochain :** Jonathan teste en production l'envoi réel du formulaire `/contact`, la fenêtre Cal.com et le dock mobile sur `/contact` ; dans 6 à 8 semaines, vérifier en GSC que les requêtes « développeur web » sont passées sur `/developpeur-web-freelance-geneve`.

**Pieges :**
- Le serveur de dev de Jonathan a perdu ses scripts après l'ajout de la figure `phone` (cache Vite) : relancer `npm run dev`.
- Les redirections Vercel sont sensibles à la casse : une source qui ne diffère que par la casse de sa cible ne boucle pas, il faut la poser.
- Les previews Vercel du projet sont protégées : tester avec un jeton de contournement ou connecté.

**Commit :** [f6d7f27] fix(seo): 301 des tags qui ne différaient que par la casse (PME, ROI, Flutter)

---

## Etat session 2026-11-17 (suite 3)

**Fait :** interview de copy de la home (vouvoiement site / tutoiement blog, hero, méthode 5 étapes, bento, FAQ 7 questions, hébergement IA « dès CHF 15 / mois »), bouton Cal.com en fenêtre, `scenarios.ts` retiré (`service-sections.ts`), mot-clé de la home + `/consultant-ia` recentré + lien footer vers `/developpeur-web-freelance-geneve`, 4 études de cas IA, **bascule `/v2` → `/`** (301 dans `vercel.json`, ancien Header/Footer/Hero et composants de l'ancienne home supprimés). Build : 121 pages.

**Prochain :** merger `rebrand-v2` dans `main`, déployer en preview Vercel, tester 301 / formulaire contact / pages service, puis `/epic-recap`.

**Commit :** [2370f5f] feat(home): bascule de la home v2 sur /

---

## Etat session 2026-11-17 (suite 2)

**Fait :** toutes les pages hors home passées en v2 (tarifs, portfolio + détail, about, services, blog + tags, contact, pages service, déclinées, simples, guide), tags normalisés avec 301, audit SEO et arbitrages (`docs/research/architecture-pages-v2.md`), `data-rise`, `.v2-gap`, offre `<Pricing />` sur la trame `DitherBg`, Nav/Dock « Réserver un appel » vers `/contact#agenda`. Beaucoup de composants de l'ancien design supprimés (-22k lignes).

**Prochain :**
1. Bascule `/v2` → `/` quand la copy de Jonathan arrive : poser la 301 `/v2` → `/`, supprimer l'ancien `Header`/`Footer`/CSS blueprint (seul `index.astro` les importe).
2. Tester les 301 sur un déploiement preview Vercel (URLs encodées des anciens tags).
3. Tester l'envoi réel du formulaire contact ; le brancher sur le CRM (tâche Jonathan).

## Etat session 2026-11-17 (suite)

**Fait :**
- Méga-menu v2 (C · Carte flottante) dans `Nav.astro` sur Systèmes IA et Blog, contenu tiré de `mainNav` ; la pastille suit aussi ces liens.
- Page article `/blog/[slug]` passée en v2 (B · Magazine centré) : titre centré, image 21/9, colonne 680px, sommaire repliable, « À lire ensuite » ; le corps garde `.co-prose`.
- `<Pricing />` (C · Bento mis en avant) ; les 3 offres de `/tarifs` déplacées dans `data/pricing.ts`. `/tarifs` **gardée** (décision Jonathan).
- `<Testimonials />` (A · Grande citation), sur du **lorem** (`testimonials`, `data/v2.ts`) en attendant les vrais.
- Styleguide : sections Tarifs (19) et Témoignages (20) ajoutées ; essais écartés dans git (`34b921c`, `8f021b3`, `3a58c6c`, `4aea0cd`).

**Prochain :** redesign des pages en v2, en commençant par `/tarifs` (`src/pages/tarifs.astro` : chrome v2 + `<Pricing />` + FAQ `<Faq />`, garder les schémas SEO), puis `/portfolio`, `/about`, `/services`, `/blog` selon `docs/design-v2.md` § 8.

**Pieges :**
- `.v2 p/ul/ol { margin: 0 }` (0,1,1) écrase `.co-prose` : la page article redonne les marges via `.v2 .v2-art-prose …`. Même réflexe pour tout contenu blueprint posé dans `.v2`.
- `.v2 a { color: inherit }` bat une classe simple sur un lien : préfixer `.v2 .classe`.
- `.co-prose` dans `.v2` a besoin des alias `--muted` / `--surface` / `--line-2` (posés sur `.v2-art`) ; le widget MDX `BrowserAgentsCompare` en dépend.
- Pastille nav : position calculée par `getBoundingClientRect` (un lien de méga-menu est dans un parent positionné, `offsetLeft` serait faux).
- Grille d'article : `grid-template-columns: minmax(0, 1fr)` obligatoire, sinon un tableau large pousse la colonne hors écran en mobile.
- Méga-menu : desktop seulement (Échap non géré) ; carte 760px, à vérifier vers 1024px.
- Trame de points invisible sur `.v2-teal.v2-dots` (le fond teal écrase la trame) : défaut antérieur, question posée à Jonathan, non tranchée.
- Captures headless de `/v2/styleguide` : `Page.captureScreenshot` expire maintenant (page longue + animations) ; capturer une page plus courte ou vérifier en live.

**Commit :** [5a40ce9] feat(ui): témoignages v2 direction A (grande citation) validée

---

## Etat session 2026-11-17

**Fait :**
- `/v2/styleguide` : 18 éléments × 3 essais, choix de Jonathan (grille B, boutons B, liens A, nav B, dock B, hero B, fond A, titres A, tags A, cas B, bento A, process A, FAQ A, chiffres A, contact A, formulaire C, articles C, footer C). Essais écartés archivés dans `c16aaa5`.
- 12 composants dans `src/components/v2/`, comportements par attribut dans `src/scripts/v2-ui.ts` (Anime.js 4.5), `/v2` reconstruit dessus (+ rangée de compteurs après les cas) ; le styleguide est devenu la référence vivante des composants validés.
- Retouches Jonathan : hero en pleine largeur (seule section hors container), cellule de titre « Ce que je construis » en teal dans le container, descendantes (g) plus coupées par le masque des mots.
- Zag et le réseau iso du hero retirés (ne servaient qu'aux essais écartés). `docs/design-v2.md` § 2, 4, 5, 6 à jour.

**Prochain :** session neuve. Dans l'ordre : (1) méga-menu v2 — partir du méga-menu existant de `src/components/Header.astro` (`mainNav`, sections `type: 'mega'`) et l'intégrer à `src/components/v2/Nav.astro` ; (2) page article de blog v2 (`src/pages/blog/[slug].astro` → colonne de lecture dans le container, § 8 de `design-v2.md`) ; (3) pricing cards (à confirmer avec Jonathan, la page Tarifs doit sortir) ; (4) composant témoignages, à créer (aucune donnée de témoignage dans les collections : demander de vrais témoignages, ne rien inventer). Pour chaque nouveau composant : 3 essais sur `/v2/styleguide` (skill `design-variants`), choix, intégration.

**Pieges :**
- `::before` / `::after` d'un `.w` sont pris par les repères en croix (`.r > .w`) : tout effet décoratif passe par un élément enfant (cas `.v2-dots-glow`).
- Variables locales d'un composant (`--dot` sur `.v2-dots`) écrasent celles héritées d'un parent : redéfinir sur le sélecteur composé (`.v2-teal.v2-dots`).
- `splitText` avec `wrap: 'clip'` coupe les descendantes sous un interligne < 1 : `roomForDescenders` dans `v2-ui.ts` ajoute `.14em` en bas.
- `.v2 .v2-steps` (0,2,0) écrasait la règle mobile `.v2-steps` : les cercles ne passaient jamais à 3 colonnes ; corrigé, garder le préfixe `.v2` dans les media queries.
- `ProjectForm` n'a aucun backend : passer `action` avant tout usage en production.
- Captures Playwright : pleine page Chrome tronquée au-delà de ~16 000 px, capturer par section ; `networkidle` n'arrive jamais en dev (HMR + shader), attendre `load` + délai.

**Commit :** [dc6afe4] style(v2): hero pleine largeur, titre « Ce que je construis » sur teal, descendantes non coupées

---

## Etat session 2026-11-16

**Fait :**
- Analyse des refs (sakib.design, luzia, nuance, atraen) en captures via `agent-browser` ; squelette validé par Jonathan.
- Home v2 complète sur `/v2` : nav haute → dock bas au scroll, hero plein écran avec fond isométrique animé (canvas), bande défilante, études de cas bord à bord, « Comment je travaille » (cercles + 3 colonnes), bento avec figures Hairline, hub sombre, à-propos avec texte révélé, section « pas tout est public », FAQ pilules animée, contact bento, Cal.com inline 3 colonnes.
- DA : Funnel Display (titres, interlettrage -0.055em) + Inter Tight (texte) + Fragment Mono (métadonnées), fond blanc, rayon max 5px, boutons pilule, grille « à la Sakib » (filets pleine largeur + container bordé rempli).
- `docs/design-v2.md` rédigé pour appliquer le système aux autres pages.

**Prochain :** quand le repositionnement est figé, écrire la copy de `/v2` (hero, sections, FAQ, outils) et remplacer les placeholders du hub (`src/data/hub.ts`) ; puis extraire nav/dock/footer en composants et attaquer `/portfolio` selon `docs/design-v2.md` § 8.

**Pieges :**
- `box-sizing: border-box` est indispensable sur le hero (sinon le padding s'ajoute à `100svh` et le contenu descend).
- `.v2 p/ul/ol { margin: 0 }` a une spécificité (0,1,1) qui écrase les classes simples : préfixer `.v2 .classe` pour redonner une marge (cas `.v2-lead`, `.v2-steps`).
- Le flux RSS YouTube de la chaîne répond 404 : vidéos listées à la main dans `src/data/hub.ts`.
- Barre d'outils dev d'Astro désactivée dans `astro.config.mjs` (elle masquait l'indicateur de scroll et le dock).
- Cal.com : l'embed n'affiche les 3 colonnes qu'en pleine largeur (~1000px) ; dans une demi-colonne il passe à 2.

**Commit :** feat(rebrand): home v2 en spike + design system v2 (ce commit)

---

## Carte du code
> Mise a jour : 2026-11-17 (suite 3)

| Fichier | Role |
|---------|------|
| `src/pages/index.astro` | Home (ex-`/v2`) : composants v2 + hub, à-propos, section privée, Cal.com ; `/v2` redirige vers elle |
| `src/data/service-sections.ts` | Sous-services des pages service (remplace `scenarios.ts`) |
| `src/content/portfolio/{wildcat-agent-mails,barber-hub-automatisation,systeme-ia-jonlabs,gestion-camps-budget}.md` | 4 études de cas IA |
| `src/pages/v2/styleguide.astro` | Styleguide v2 : un bloc par composant validé (référence vivante, 21 sections) |
| `src/pages/blog/[slug].astro` | Page article v2 (magazine centré), chrome v2, corps `.co-prose`, schémas SEO inchangés |
| `src/components/v2/*.astro` | Nav (+ méga-menu), Dock, Hero, CaseSpec, Proofs, Steps, Bento, Faq, Contact, ProjectForm, PostFeature, Pricing, Testimonials, Footer |
| `src/components/v2/DitherBg.tsx` | Fond tramé du hero (shader Paper, îlot React) |
| `src/scripts/v2-ui.ts` | Comportements par attribut : roulement, pastille, nav/dock, lettres/mots, gris→noir, projecteur, compteurs, heure, témoignages, Hairline |
| `src/styles/v2.css` | Styles v2 partagés, dont méga-menu, page article (`.v2-art*`), tarifs (`.v2-price*`), témoignages (`.v2-testi*`) |
| `src/layouts/V2Page.astro` · `V2Simple.astro` | Coquille v2 des pages hors home ; variante page simple (en-tête + colonne de lecture) |
| `src/components/v2/ServicePage.astro` | Gabarit des pages service, piloté par un objet de données |
| `src/components/v2/declinee/*` | Gabarit des pages villes/métiers (`DeclineePage`, contrat `types.ts`, `shared.ts`) |
| `src/components/v2/PostCells.astro` · `Article.astro` · `ContactSteps.astro` | Grille d'articles partagée blog/tags ; article du guide ; formulaire contact 3 étapes |
| `src/lib/tags.ts` | Libellés des 33 tags normalisés du blog |
| `vercel.json` | 301 des pages fusionnées/retirées et des anciens tags |
| `docs/research/architecture-pages-v2.md` · `tags-normalisation.md` | Audit SEO, arbitrages, table de correspondance des tags |
| `src/data/v2.ts` | Nav v2 (`mega` + `iso`), contenus de la home, `testimonials` (lorem) |
| `src/data/pricing.ts` | Seule source des prix + les 3 `offers` lues par `/tarifs` et `<Pricing />` |
| `src/data/hub.ts` | Contenu du hub (vidéos YouTube, tweets et post LinkedIn en placeholder) |
| `src/styles/v2-styleguide.css` | Cadre de la page styleguide (`.sg-*`) |
| `docs/design-v2.md` | Système de design v2 : tokens, typo, grille, composants, motion, règles pour les autres pages |

### Decisions cles
- Grille « à la Sakib » : chaque section remplit le container, cellules séparées par filets 1px, pas de `gap` (sauf photos).
- Rayon max 5px ; 0 quand l'élément touche le cadre ; seuls les boutons sont en pilule.
- Figures isométriques via `@lucasmarkes/hairline` (API vanilla, pas d'îlot React).
- URLs existantes conservées (`/services`, `/portfolio`, `/blog`, `/about`) ; pages SEO hors menu, lien « Sites & SEO » en footer ; page `/tarifs` **gardée** (Jonathan, 2026-11-17 : bonne page SEO potentielle), refaite en v2 avec `<Pricing />`.
- Le méga-menu lit `mainNav` (`data/navigation.ts`) : une seule source pour l'ancien header et la v2.
- Les articles gardent `.co-prose` (TL;DR, tableaux, code, widgets MDX) plutôt qu'une prose v2 réécrite.
- Pages service et déclinées = gabarits pilotés par données (une route ne fournit que du contenu) ; les schémas SEO restent dans les routes.
- Fusions arbitrées par Jonathan : création de site absorbe refonte + Webflow, `/developpement-web` retiré, Genève fusionnée dans les piliers (301 dans `vercel.json`).
- Tags du blog 148 → 33, anciens tags en 301.
- `<Pricing />` occupe la cellule teal de la page : pas d'autre `.v2-teal` sur `/tarifs`.

## Taches

- [x] Analyse des références et squelette de home
- [x] Spike `/v2` (forme)
- [x] `docs/design-v2.md`
- [x] Styleguide v2 : 3 essais par élément
- [x] Choix des essais (Jonathan) puis intégration en composants
- [x] Copy de la home
- [x] Études de cas IA (4, images provisoires) ; [ ] vraies captures et chiffres
- [ ] Contenu réel du hub (tweets, post LinkedIn) + 2 photos
- [x] Extraire nav / dock / footer en composants
- [ ] Brancher `ProjectForm` (home) sur un envoi réel
- [x] Méga-menu v2 (direction C · Carte flottante, Systèmes IA + Blog)
- [x] Page article de blog v2 (direction B · Magazine centré)
- [x] Cartes tarifs `<Pricing />` (direction C · Bento mis en avant)
- [x] Page `/tarifs` en v2 (avec `<Pricing />`)
- [x] Composant témoignages `<Testimonials />` (direction A · Grande citation)
- [ ] Vrais témoignages à la place du lorem (`testimonials`, `data/v2.ts`)
- [x] Redesign `/portfolio`, `/portfolio/[slug]`, `/blog`, `/blog/[slug]`, `/about`, `/services`, `/contact`, pages service/déclinées/simples
- [ ] Tester les 301 sur un preview Vercel
- [ ] Tester l'envoi réel du formulaire contact, puis le brancher au CRM
- [x] Bascule `/v2` → `/` (301, ancien Header/Footer supprimés ; `blueprint.css` conservé pour `.co-prose`)
- [ ] Merger `rebrand-v2` dans `main` + preview Vercel
- [ ] `devis-client/[slug].astro` en v2
