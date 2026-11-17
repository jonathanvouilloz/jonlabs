# Mobile responsive — menu burger et correctifs du rebrand v2

> **Statut** : DONE (code) · **Livré** : 2026-11-18 · **Commits** : `7f64fd5..d1b661c` (un seul commit, `d1b661c`). Reste des écarts connus, voir « Limites et dettes ».

## Ce que ça fait
Sur mobile, tablette et tout écran tactile, le visiteur dispose d'un menu burger qui ouvre un panneau plein écran (mêmes entrées que le méga-menu desktop, plus Tarifs et Contact). Le hero, le bento, le dock flottant, la FAQ, le hub et les tableaux ne sont plus coupés ni trop petits pour le doigt. La fenêtre Cal.com « Discuter de mon projet » s'ouvre plus vite, car elle est préchargée dès l'intention.

## Comment ça marche
- **Menu** : `Nav.astro` rend un `<div id="v2-menu" popover>` après le `<header>`. Les boutons `.v2-burger` (nav haute) et `.v2-dock-menu` (dock) l'ouvrent via `popovertarget="v2-menu"` (API Popover native, sans JS pour ouvrir/fermer). Le contenu est construit depuis les mêmes données que le méga-menu : une entrée avec `mega` devient un `<details>` (« Vue d'ensemble » + liens des colonnes), sinon un lien simple.
- **Fermeture** : `v2-ui.ts` écoute les clics dans `#v2-menu` et appelle `hidePopover()` dès qu'un lien est suivi (sinon le panneau reste au-dessus d'une ancre de la même page).
- **Seuil d'affichage** : `v2.css`, `@media (max-width: 1024px), (hover: none)` affiche les burgers et masque `.v2-pill`. Entre 1024 et 1180 px, le premier méga-menu est recalé à gauche (il sortait de l'écran).
- **≤ 520 px** : nav haute = logo + CTA réduit à une icône agenda + burger ; dock = 2 liens + menu + agenda ; hero en hauteur libre avec CTA empilés ; bento et figures iso raccourcis ; 5e étape centrée.
- **Grilles** : `minmax(0, 1fr)` sur `.v2-hero` et `.v2-bento` pour que les pistes puissent descendre sous la largeur de leur contenu.
- **iOS** : `Layout.astro` passe le viewport à `width=device-width, initial-scale=1, viewport-fit=cover` ; le dock utilise `env(safe-area-inset-bottom)`.
- **Cal.com** : `Layout.astro` ajoute `preconnect` vers `app.cal.com` et `cal.com`. `v2-ui.ts` appelle `cal()('preload', { calLink })` une seule fois (`warmCal`) au `pointerenter`, `touchstart` ou `focus` d'un `[data-cal-popup]`. Le clic ouvre toujours `cal()('modal', …)` ; le lien `/contact#agenda` reste le repli sans JS.
- **Perf/batterie** : `DitherBg.tsx` fige le shader si `(pointer: coarse)` ou `prefers-reduced-motion` ; le `data-reveal` n'écoute le scroll que tant que le bloc est visible (IntersectionObserver + une peinture par frame).
- **Finitions** : `text-wrap: balance/pretty` sur titres et chapôs ; cibles tactiles 44 px (retour portfolio, flèches de film, liens du pied, ancres de `/services`) ; textes minimum 12 px ; tableaux `.co-prose` scrollables avec `min-width: 9rem` par cellule ; `prefers-reduced-motion` neutralise transitions et `scroll-behavior` ; Tarifs et Contact ajoutés au pied de page ; espace sous l'agenda pour que le dock ne le masque pas.

## Carte du code
> Mise à jour : 2026-11-18

| Fichier | Rôle |
|---|---|
| `src/components/v2/Nav.astro` | Burger dans la nav haute, CTA agenda en icône, panneau `#v2-menu` (popover). |
| `src/components/v2/Dock.astro` | Bouton `.v2-dock-menu` qui ouvre le même popover. |
| `src/scripts/v2-ui.ts` | Fermeture du menu au clic sur un lien, préchargement Cal.com (`warmCal`), scroll du `data-reveal` borné. |
| `src/styles/v2.css` | Section « Mobile (audit 2026-11-18) » : menu, burgers, seuils 1024/1180/900/520 px, safe-area, reduced-motion. |
| `src/layouts/Layout.astro` | Viewport `viewport-fit=cover`, `preconnect` Cal.com, `scroll-behavior` désactivé en reduced-motion. |
| `src/components/v2/DitherBg.tsx` | Shader figé sur pointeur tactile. |
| `src/components/v2/Footer.astro` | Ajoute Tarifs et Contact à la nav du pied. |
| `src/components/v2/Faq.astro` | Espace avant `? ! : ;` conservé pour le rendu typographique FR. |
| `src/pages/portfolio/[slug].astro` | Cibles tactiles 44 px (retour, flèches du film). |
| `src/pages/services.astro` | Espacement des ancres `.sv-n-jump`. |
| `src/styles/blueprint.css` | Tableaux `.co-prose` scrollables, cellules `min-width: 9rem`. |

### Décisions clés
- Popover natif plutôt qu'un composant JS : ouverture, fermeture à Échap, focus et clic extérieur gérés par le navigateur (détail → DECISIONS.md).
- Burger aussi sur écran `(hover: none)` : une tablette large reste tactile, le méga-menu au survol y est inutilisable.
- Préchargement Cal.com à l'intention, pas au chargement de page : pas de coût réseau pour qui ne clique pas.

## Comment débuguer
- **Par où entrer** : `#v2-menu` dans `Nav.astro` (structure) puis la section « Mobile » de `v2.css` (affichage). Pour Cal.com, `warmCal` dans `v2-ui.ts`.
- **Ce qu'on observe** : mode appareil des devtools (≤ 520 px, 1024 px, puis `hover: none`) ; onglet Network pour voir `embed.js` et la page de réservation partir au survol/toucher.
- **Pannes connues** : burger invisible sur desktop souris → normal au-dessus de 1024 px ; le menu reste ouvert après un lien d'ancre → le handler de `v2-ui.ts` ne s'est pas attaché (`#v2-menu` absent de la page) ; contenu qui déborde horizontalement → chercher une piste de grille sans `minmax(0, 1fr)` ou un enfant sans `min-width: 0`.
- **Pièges** : l'id `v2-menu` est unique, donc un seul `<Nav>` par page ; le menu mobile et le méga-menu lisent les mêmes données de navigation, il ne faut pas les diverger ; `warmCal` ne se déclenche qu'une fois (`calWarm`) ; le CSS du menu utilise `:popover-open`, qui exige un navigateur récent.

## Configuration
Aucune variable d'env. Le lien Cal.com est la constante `CAL_LINK` de `src/scripts/v2-ui.ts`.

## Tests et vérifications
| Vérif | Commande | Résultat réel |
|---|---|---|
| Build de production | `npm run build` | OK, 121 pages, relancé le 2026-11-18 |
| Rendu mobile | devtools / navigateur | Constaté par la session de dev, non relancé ici |
| iPhone réel | manuel | Non fait |

Aucun test automatisé n'existe pour cette feature.

## Limites et dettes
- Visuels `hero.webp` des 4 études de cas IA : provisoires, à remplacer par de vrais visuels.
- `/contact` étape 1 : les cartes `.cs-kind` sont décalées de 21 px ; cause non creusée.
- Blog : le compteur affiche « 48 articles » alors que l'onglet « Tous » en liste 47 (l'article mis en avant est exclu de la liste). Incohérence visible.
- Test sur iPhone réel non fait (safe-area, popover, préchargement Cal.com non vérifiés sur appareil).
- Le commit n'est pas du pur « fix » : il inclut une fonctionnalité (menu) et un chantier d'audit entier, en un seul commit.
