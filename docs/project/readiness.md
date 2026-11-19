---
project: jonlabs
schema_version: 1
overall_status: initialized_with_followups
last_audited_on: "2026-11-19"
orchestrator: init-all
---

# Readiness du projet

> Mémoire opérationnelle maintenue par `init-all`. Les faits et décisions canoniques restent dans leurs documents propriétaires.

## Résumé

Migration v3 terminée côté fichiers : toutes les sorties obligatoires existent et `content-creator` peut tourner. Marque, design et SEO restent `needs_review` parce qu'ils ont été écrits depuis les documents existants, sans interview, et que trois décisions de Jonathan sont ouvertes. Ce statut ne veut pas dire « prêt à publier sans relecture ».

## État des modules

| Module | Manifeste | Sorties | Sources | Validation | Contrôle runtime | Statut readiness | Prochaine action |
|---|---|---|---|---|---|---|---|
| Projet | ready | complètes (`project.yaml`, `AGENTS.md`, `docs/project/`) | PRD écrit par migration | PRD à relire | n/a | ready | Relecture du PRD § 14 |
| Marque | needs_review | 8 sur 8 (`docs/business/profile.md`, `docs/brand/*`) | canon + décisions du repo ; corpus blog partiel | en attente | n/a | needs_review | BRAND-INPUT-001, 002, 003 |
| Design UI | needs_review | `docs/design/system.md` ; tokens et styleguide déjà dans le code | code + `design-v2.md` | directions validées le 17.11 | 2 contrastes insuffisants, focus global à vérifier, pas de contrôle navigateur | needs_review | DESIGN-001 |
| Moodboard | ready | `moodboard.md`, `visual/presets.yaml`, `visual/refs/` (19 fichiers), `visual/fonts/` | canon `visual-refs` | direction déjà validée (canon) | 1 cover générée et contrôlée à l'œil le 19.11 | ready | — |
| SEO | needs_review | `context.md`, `competitors.md`, `content-map.md` ; snapshot compilé | recherche du 19.11.2026 | en attente | `compile_context --strict` : OK | needs_review | Lever les hypothèses de `context.md` |
| Suivi SEO | needs_review | manifeste renseigné, `.seo-data/` présent | GSC 90 j du 17.11 | — | dry-runs `seo-gsc`, `seo-weekly` non lancés | needs_review | SEO-MON-001 |
| GMB | disabled | — | — | — | — | disabled | — |
| Newsletter | disabled | — | — | — | — | disabled | — |
| LinkedIn | disabled | — (vit dans `atelier/`) | — | — | — | disabled | — |
| Pages de vente | disabled | — | — | — | — | disabled | — |

## L'agent peut continuer

| ID | Module | Action | Dépendances | Statut |
|---|---|---|---|---|
| ART-001 | Contenu | Humanizer, seo-lint, seo-review sur `installer-hermes-agent` et `claude-duet-suisse` ; cover du second | aucune | ouvert |
| SEO-MON-001 | Suivi SEO | Dry-run `seo-gsc` et `seo-weekly` avec `GSC_CREDENTIALS_PATH` | secret à matérialiser depuis bws | ouvert |
| DOC-001 | Docs | Transmettre à `doc-keeper` les écarts de `docs/design/system.md` § Écarts, et le remplacement de `docs/seo-context.md`, `docs/moodboard.md`, `docs/identity.md`, `docs/voice.md` par les chemins v3 dans `CLAUDE.md` et `docs/README.md` | aucune | ouvert |
| LINT-001 | Outillage | `seo_lint.py` ne lit pas le frontmatter imbriqué (`image`, `faqs`) | aucune | ouvert |

## Informations humaines requises

| ID | Priorité | Module | Question ou élément attendu | Pourquoi | Format attendu | Bloquant | Statut |
|---|---|---|---|---|---|---|---|
| BRAND-INPUT-001 | haute | Marque | Le canon `noyau/brand/` (positionnement, tagline, offre, rôle, signature des liens) doit-il passer au positionnement « systèmes et agents IA » ? | Le canon dit encore « visibilité Google + IA » ; `docs/brand/identity.md` § Écarts liste huit divergences | « oui, je mets à jour le canon » / « non, deux positionnements selon le canal » / « plus tard » | non (le site suit ses propres décisions) | ouvert |
| BRAND-INPUT-002 | moyenne | Marque | Désigner 3 à 5 articles du blog que tu considères comme les plus proches de ta façon d'écrire | `patte-ecrite.md` est provisoire : aucun article écrit à la main n'est identifié | liste de slugs | non | ouvert |
| BRAND-INPUT-003 | haute | Marque, preuves | « Freelance à Genève » et « hébergé en Suisse chez Infomaniak » : que dit-on ? | Le canon annonce un départ fin 2026 ; les installations réelles tournent chez Hostinger et HostHatch | une phrase par sujet, ou « à décider plus tard » | oui pour toute page qui cite l'hébergement | ouvert (hébergement : tâche déjà posée le 19.11) |

## Plus tard, sans bloquer

| ID | Module | Amélioration | Déclencheur conseillé | Statut |
|---|---|---|---|---|
| DESIGN-001 | Design | Contraste de `--dim` (2,7) et de `--accent-strong` en petit texte (3,0) ; règle `:focus-visible` globale | Prochain passage sur `v2.css` | ouvert |
| PRD-001 | Projet | Cibles chiffrées à 3 et 6 mois, outil d'analytics, devenir des pages web et mobile | Bilan du tri « focus IA » (23.11 → 09.12) | ouvert |
| LEGACY-001 | Projet | Retirer `docs/seo-context.md`, `docs/moodboard.md`, `moodboard/presets.yaml` une fois `CLAUDE.md` et `docs/README.md` repointés ; `docs/identity.md` et `docs/voice.md` restent générés par `brand/sync.py` | Après DOC-001 | ouvert |
| LINT-002 | Contenu | Passer `content.lint_mode` de `shadow` à `enforce` | Après un passage du lint sur les 49 articles | ouvert |

## Réponses et décisions reçues

| ID lié | Réponse ou source | Reçu le | Effet sur le setup |
|---|---|---|---|
| — | Accès SSH `barber` en lecture, accord pour citer les chiffres du VPS Barber | 2026-11-19 | Preuves mesurées utilisables (`proofs.md`) |
| — | Cadence : un article tous les deux jours du 22.11 au 31.12 | 2026-11-19 | `docs/seo/context.md` § Cadence |

## Prochain checkpoint

BRAND-INPUT-001, BRAND-INPUT-002, BRAND-INPUT-003. En attendant, ART-001 se poursuit.

## Fallbacks legacy encore lus

`docs/seo-context.md`, `docs/moodboard.md`, `moodboard/` (presets GMB, LinkedIn, carrousel), `docs/identity.md` et `docs/voice.md` (projections générées, ancien positionnement).

## Historique

| Date | Événement | Modules affectés | Résultat |
|---|---|---|---|
| 2026-11-19 | Migration v3 commencée puis interrompue | Projet, profil métier | `project.yaml`, `docs/project/`, `docs/business/` écrits, non relus |
| 2026-11-19 | Reprise : marque, design, moodboard, SEO, readiness | tous | `initialized_with_followups`. Environnement Python de `generate-images` recréé (venv 3.14 cassé par Python 3.15). Style de base `editorial-collage` ajouté au skill `init-moodboard`. Une cover générée par appel réel : `--dry-run` est sans effet en mode single |
