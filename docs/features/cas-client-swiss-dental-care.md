# Cas client Swiss Dental Care

État : version validée par Jonathan, publication production autorisée le 14 octobre 2026.

## Artefact

- Contenu canonique : `src/content/portfolio/swiss-dental-care.md`.
- Route : `/portfolio/swiss-dental-care` ; entrée intégrée dans la collection et prête pour le déploiement de production.
- Visuels prêts à servir : `public/images/portfolio/swiss-dental-care/`.
- Préparation locale des planches et captures brutes : `outputs/swiss-dental-care/` (ignoré par Git).
- Gabarit commun : `src/pages/portfolio/[slug].astro` ; rendu du champ `approach.image` déjà prévu dans le schéma, titres de sections configurables avec valeurs par défaut historiques, statut dans la fiche projet.

## Sources consultées

Dépôt client : `C:/Users/jojo-/noyau/projets/swiss-dental-care-emdash` (lecture seule).

| Sujet | Source dans le dépôt client |
|---|---|
| Lancement effectif et recette de 58 pages | `.seo-data/production-launch-2026-10-11.md`, `docs/DECISIONS.md` |
| Wix historique | `docs/sources/legacy-site/README.md`, `docs/sources/legacy-site/pages/` |
| Évolution de la DA | `docs/design/FOUNDATION.md`, `docs/design/HERO-DIRECTION.md` |
| Déclinaisons du symbole | `docs/design/logo/README.md`, `comparatif.png` |
| Illustrations | `public/media/services/*.webp` |
| Architecture et intentions SEO | `docs/seo/content-map.md`, `docs/seo/context.md`, `docs/seo/semantic-audit-2026-09-11.md` |
| CMS | `docs/architecture/EMDASH-NATIVE-MIGRATION.md`, `docs/features/emdash-test.md`, structure du code |

Les README et HANDOFF client datés de septembre décrivent encore une préproduction. Les décisions et le relevé du 11 octobre établissent la mise en ligne. Ne pas réintroduire leur ancien statut dans le cas client.

## Interview du 14 octobre

Source : réponses directes de Jonathan dans ce chat.

- Le cabinet avait déjà une bonne visibilité. Environ cinq pages principales et un SEO peu développé laissaient une marge de progression. L’archive technique recense neuf URL en incluant les documents légaux : ne pas confondre les périmètres.
- Après la reprise du cabinet, Malika voulait un site qui lui ressemble, avec peu de temps pour s’en occuper. L’explication de cette motivation est rapportée par Jonathan, sans citation attribuée à Malika.
- Le point central est l’architecture bilingue du CMS et la facilité de modification de presque tout le site. Présenter EmDash par l’usage préparé pour Malika ; l’expérimentation technique de Jonathan n’est pas l’angle éditorial retenu.
- DA proposée par Jonathan, puis plusieurs itérations vers une expression plus claire et plus affirmée, en conservant l’esprit de l’identité. Satisfaction finale rapportée par Jonathan ; aucun témoignage direct disponible.
- Mandat sur six mois : un mois de mise en place puis cinq mois de suivi des nouvelles données, d’articles de blog, de suivi GBP et de rapports mensuels sur les clics et le SEO local.

Précisions reçues dans la deuxième série de réponses : mandat commencé début septembre 2026, mise en ligne confirmée au 11 octobre ; Malika est hygiéniste et gère le cabinet, elle n’est pas médecin-dentiste. Suivi global, avec une attention possible aux prestations d’hygiène et à la section urgences. Aucun objectif chiffré de réussite n’a été fixé dans l’interview ; ne pas en inventer.

## Provenance des images

- `hero.webp` : montage des captures réelles desktop 1440 × 1000 et mobile 390 × 844 de l’accueil public, prises le 14 octobre 2026.
- `direction-visuelle.webp` : mise en page de `public/media/hero-exploration.webp` et `hero-welcome.webp`. Exploration sombre et direction claire du projet ; personnes fictives générées, signalées dans la planche et la légende. Ce n’est pas un avant/après de l’ancien Wix.
- `exploration-logo.webp` : réduction WebP de la planche de travail existante, explicitement présentée comme exploration.
- `illustrations-soins.webp` : composition de six illustrations existantes, sans modification de leur contenu.
- `soins.webp`, `page-soin.webp` : captures du site public du 14 octobre 2026.
- `parcours-bilingue.webp` : captures réelles du même soin FR/EN, côte à côte.

Pas de capture visuelle fiable de l’ancien Wix retrouvée dans les deux dépôts client. Son contenu est documenté par l’archive textuelle ; aucun avant/après visuel n’est fabriqué.

## Garde-fous éditoriaux

Pas de hausse SEO, trafic ou rendez-vous annoncée à ce stade. Les chiffres décrivent le périmètre livré et le mandat. Aucun témoignage inventé ni avis de patient repris en citation. Les documents internes, sauvegardes, contacts privés et données d’authentification restent hors du site Jon Labs.

## Vérification

- `npm run build` réussi : 359 pages, dont le nouveau cas. Dernière compilation après arrêt du serveur de développement et régénération du cache de contenu, sans avertissement de doublon. Un avertissement CSS préexistant sur `--yellow/violet` reste hors périmètre.
- Le bac à sable Windows provoquait `EPERM` sur la résolution des fichiers Astro ; compilation et serveurs locaux exécutés avec l’autorisation automatique hors bac à sable. Aucune modification d’infrastructure.
- 133 références locales du HTML compilé contrôlées, aucune ressource manquante ; un seul H1, image de partage spécifique au cas et présence de la carte portfolio.
- Rendu desktop 1440 × 1000 et mobile 390 × 844 vérifié dans le navigateur ; aucun débordement horizontal constaté.
- Zoom ouvert au clavier sur une planche de démarche ; navigation de la première à la deuxième image, puis fermeture par Échap vérifiées. Six images agrandissables.
- Valeurs historiques des titres de sections conservées sur la fiche Physio Pommier compilée.
- Accès depuis la carte « Swiss Dental Care » de `/portfolio` vérifié sur le site compilé.
- Captures de recette : `outputs/swiss-dental-care/cas-client-desktop.jpg`, `cas-client-mobile.jpg`, `demarche-desktop.jpg` ; synthèse `verification.json`.
- Prévisualisation statique locale : `http://127.0.0.1:4321/portfolio/swiss-dental-care`.

Le champ `draft: false` intègre la fiche dans la collection. Après validation de la V1, Jonathan a explicitement demandé sa publication en production. Circuit vérifié : dépôt GitHub `jonathanvouilloz/jonlabs`, branche `main`, déploiement automatique Vercel du projet `jonlabs` dans `newsletterjojo-4318s-projects`. URL cible : `https://www.jonlabs.ch/portfolio/swiss-dental-care`.
