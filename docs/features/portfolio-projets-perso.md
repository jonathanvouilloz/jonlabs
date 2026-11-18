# Portfolio : projets perso (Barnaby, Inkmesh, Quikform)

> **Statut** : DONE (code) · **Livré** : 2026-11-19 · **Commits** : `b9a3b97`, `246553a` (base `ffb81a4`)

## Ce que ça fait
Trois side-projects de Jonathan (outils qu'il utilise lui-même) rejoignent le portfolio : Barnaby (dictée vocale et notes de réunion en local), Inkmesh (espace Markdown partagé entre équipes et agents IA, open source), Quikform (formulaires écrits par des agents IA). Barnaby remplace `systeme-ia-jonlabs` parmi les trois cas de la home.

## Comment ça marche
1. Chaque projet est une fiche `src/content/portfolio/{slug}.md`, `entryType: "side-project"`, `status: "live"`, validée par le schéma de la collection `portfolio` (`src/content/config.ts`).
2. `src/data/portfolio-relations.ts` (`portfolioServiceLinks`) rattache chaque fiche à un service : `barnaby` et `inkmesh` -> `/services/application-sur-mesure`, `quikform` -> `/hermes`.
3. Home : `src/pages/index.astro` prend les cas `featured: true` non-draft, triés par date décroissante, `slice(0, 3)`. Barnaby passe `featured: true`, `systeme-ia-jonlabs` passe `featured: false`.
4. Les `results` des fiches sont rendus par `CaseSpec` (`.v2-kv-roi`). `v2.css` : première colonne `minmax(96px, auto)` pour que les valeurs longues (« Chaque jour », « 1 phrase ») ne soient plus coupées.
5. Images : `public/images/portfolio/{barnaby,inkmesh,quikform}/*.webp`. Le hero de Quikform est un montage des deux captures mobiles du dépôt.

## Carte du code
> Mise à jour : 2026-11-19

| Fichier | Rôle |
|---|---|
| `src/content/portfolio/barnaby.md` | Fiche Barnaby (v0.4.5, premier commit 23.10.2026), `featured: true` |
| `src/content/portfolio/inkmesh.md` | Fiche Inkmesh (dépôt public 21.10.2026, MIT) |
| `src/content/portfolio/quikform.md` | Fiche Quikform (dépôt public 23.10.2026) |
| `src/content/portfolio/systeme-ia-jonlabs.md` | `featured` passé à `false` (sort de la home) |
| `src/data/portfolio-relations.ts` | Lien fiche -> service |
| `src/styles/v2.css` | `.v2-kv-roi` : colonne valeur en `minmax(96px, auto)` |
| `src/pages/index.astro` | Sélection des 3 cas de la home (non modifié, logique `featured` + date) |
| `public/images/portfolio/{barnaby,inkmesh,quikform}/` | Captures et hero |

### Décisions clés
- Barnaby en avant sur la home, au lieu de `systeme-ia-jonlabs` : projet perso plus récent et concret (limité à 3 cas, tri par date).
- Clients nommés pour Inkmesh limités à Barber Concept et Barber Media : déjà publics sur le site.
- `results` = repères d'usage déclarés par Jonathan le 19.11.2026, pas des mesures ; `insights` rédigés par l'assistant à la demande de Jonathan.

## Comment débuguer
- **Par où entrer** : le frontmatter de la fiche concernée, puis `src/content/config.ts` (schéma).
- **Ce qu'on observe** : `npm run build` (échec = frontmatter invalide), pages `/portfolio`, `/portfolio/{slug}`, home.
- **Pannes connues** : une fiche absente de la home -> `featured` faux, `draft` vrai, ou plus de 3 cas plus récents ; valeur de résultat tronquée -> règle `.v2-kv-roi` de `v2.css`.
- **Pièges** : la home trie par `date` : une nouvelle fiche `featured` plus récente évince la plus ancienne sans avertissement. Le slug `barnaby` existe aussi dans `cerveau/_system/projects.yaml` (hors repo).

## Configuration
Aucune.

## Tests et vérifications
| Vérif | Commande | Résultat réel |
|---|---|---|
| Build | `npm run build` | OK, 125 pages (rapporté, non relancé) |
| Rendu home, `/portfolio/barnaby`, `/portfolio/quikform`, `/portfolio` | captures manuelles | OK (rapporté) |
| Rendu `/portfolio/inkmesh` | - | non vérifié |
| Rendu mobile | - | non vérifié |

## Limites et dettes
- `/portfolio/inkmesh` et le mobile non vérifiés visuellement.
- `results` et `insights` non mesurés : à remplacer par des chiffres réels si disponibles.
- `.v2-kv-roi` est partagé (`CaseSpec`) : l'effet de `minmax(96px, auto)` sur les autres pages n'a pas été revérifié.
