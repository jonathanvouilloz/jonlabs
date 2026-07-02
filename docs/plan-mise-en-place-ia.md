# Plan d'exécution — Cluster « Mettre l'IA en place »

> Créé le 2026-07-02. Fichier de **tracking** du sous-cluster « HOW ».
> Topical map (source de vérité contenu) : `docs/topical-map-mise-en-place-ia.md`.
> Cluster parent : `docs/topical-map-consultant-ia.md` · Roadmap globale IA : `docs/planSEOIA.md`.
> Convention statut : ⬜ à faire · 🔄 en cours · ✅ fait · 🅿️ backlog.

## Etat session 2026-07-02

**Fait :** Méga-exploration (4 agents // : calendrier, silo IA, contexte SEO, archi skills) · topical map du cluster créée puis passée au skill `/seo-topical-map` (SERP + fan-out + mini-briefs + scoring + cannibalisation) · constat clé « mur FR → moat suisse » encodé par article · nettoyage du parent (2 articles migrés dans 4 docs) · plan de tracking + résumé de production chiffré · skill lead-magnet cadré et mis en backlog (portée = FOND uniquement).
**Prochain :** Démarrer le chantier — `/seo-brief mettre-en-place-ia-entreprise-guide` (le pillar en premier, `page_type: pillar` → `src/content/pages/`). Puis produire dans l'ordre du Tableau de production (#1 → #13). Caler sur créneaux lun/ven libres dès septembre 2026 (`/calendar`).
**Pieges :** Cadence blog pleine jusqu'au 28.08 → ce cluster démarre septembre. Cluster commercial-heavy (50/50) → rédiger les « automatiser X » en vrai how-to dense (garde-fou GEO). Cannibalisation à surveiller : pillar vs hub `automatisation-pme-suisse`, `cartographier` vs `comment-choisir-quoi-automatiser` (résolutions dans la topical map).
**Commit :** (à créer ce wrap) docs(seo): cluster « mise en place IA »

## Carte du code
> Mise a jour : 2026-07-02 — session de planification (docs uniquement, aucun code touché)

| Fichier | Role |
|---------|------|
| `docs/topical-map-mise-en-place-ia.md` | Source de vérité contenu du cluster : hiérarchie, Mermaid, fan-out, tableau de production, mini-briefs prêts pour `/seo-brief`, cannibalisation |
| `docs/plan-mise-en-place-ia.md` | Ce fichier — tracking d'exécution : phases, cases à cocher, résumé de production, backlog lead-magnet |
| `docs/topical-map-consultant-ia.md` | Cluster parent (conversion) — 2 articles migrés hors de lui vers ce cluster |
| `docs/planSEOIA.md` · `docs/HANDOFF.md` | Roadmap globale IA + index de reprise — mis à jour pour refléter la migration + le nouveau cluster |

### Decisions cles
- Nouveau cluster = **silo frère** rattaché à la marque (pas un spoke de `consultant-ia`) : couche « comment mettre en place », transversale par fonction.
- Angle imposé par le SERP : **moat suisse** (nLPD, CHF, outils CH, first-party) — un article générique FR est invisible.
- Skill `/lead-magnet` = **FOND uniquement** (contenu brut `.md`) ; infra de livraison (page, capture email, calculateur) en backlog, session dédiée à prévoir.

---

## Objectif

Publier la couche informationnelle **« comment mettre l'IA en place »** (méthode, processus transversaux, gain de temps mesuré, adoption, gouvernance) — 1 pillar dédié + 13 satellites — et la mailler proprement au hub conversion `/consultant-ia`.

## Résumé de production — combien d'articles ?

**Ce cluster : 14 contenus à produire, 0 existant.**

| Rôle | Nombre | Type de page | Emplacement |
|------|--------|--------------|-------------|
| **Pillar** | **1** | `pillar` (`WebPage`) | `src/content/pages/mettre-en-place-ia-entreprise-guide.md` |
| **Satellites** | **13** | `article` (`BlogPosting`) | `src/content/blog/{slug}.md` |
| **Total** | **14** | — | — |

Détail des 13 satellites par sous-cluster : Méthode (3) · Processus transversaux (5) · Gain de temps/ROI (2) · Adoption/gouvernance (3).
- **6 flaggés ⚡ information-gain** (à prioriser) : pillar, `implementer-agent-ia-etapes`, `automatiser-facturation-relances-ia`, `calculer-gain-temps-automatisation`, `integrer-agent-ia-outils-existants`, `avant-apres-automatisation-pme-romande`.
- **5 lead magnets** rattachés (skill 🅿️ backlog — non comptés comme articles).

**Contexte global IA (pour mémoire, hors ce cluster)** — `docs/topical-map-consultant-ia.md` : silo conversion, 28 entrées actives (13 existantes + 15 à créer : pages géo/métiers/services/landings), Phase 1-2 faites, Phase 3 en attente. Les 2 articles migrés (`rag-documents-pme`, `chatbot-vs-agent-ia-support`) sont désormais comptés **ici**.

**Cadence** : 2 articles/sem (lun/ven). 14 contenus ≈ 7 semaines de production. Calendrier plein jusqu'au 28.08.2026 → ce cluster démarre **septembre 2026**.

**Mind map** : le diagramme Mermaid du cluster est dans `docs/topical-map-mise-en-place-ia.md` § « Carte visuelle » (pillar → Core/Outer → 13 spokes + liens latéraux vers pages métiers). Rendu sur GitHub ou tout viewer Markdown/Obsidian compatible Mermaid.

## Décisions verrouillées (2026-07-02)

- **Pillar dédié** : `mettre-en-place-ia-entreprise-guide` (pas de rattachement au hub existant).
- **Lead magnet** : capture email (Web3Forms) — mais **skill limité au FOND** (voir backlog).
- **Lead magnet pilote** : calculateur gain de temps (calcul libre + rapport CHF par email).
- **Calage calendrier** : septembre → mi-octobre 2026 (planning plein jusqu'à fin août).

---

## Phase 0 — Validation stratégique

- ✅ Passer le cluster au skill `/seo-topical-map` — fait 2026-07-02 : SERP-informé, fan-out, mini-briefs, scoring, cannibalisation (constat clé : mur FR → moat suisse nLPD/CHF/outils CH/first-party)
- ⬜ Retirer `rag-documents-pme` + `chatbot-vs-agent-ia-support` du parent `topical-map-consultant-ia.md` (absorbés ici par #6 et #5)
- ⬜ Valider l'angle du pillar avant rédaction de masse

## Phase 1 — Pillar

- ⬜ `/seo-brief mettre-en-place-ia-entreprise-guide`
- ⬜ Rédaction + enrich + cover + review
- ⬜ Publication + maillage montant vers `/consultant-ia` et latéral vers hub info

## Phase 2 — Cluster J (gain de temps / ROI) — démarrer par le démonstrateur

- ⬜ `calculer-gain-temps-automatisation` (article) — porte le lead magnet pilote
- ⬜ `avant-apres-automatisation-pme-romande` (preuve E-E-A-T chiffrée)

## Phase 3 — Cluster H (méthode & mise en place)

- ⬜ `implementer-agent-ia-etapes`
- ⬜ `projet-pilote-ia-30-jours`
- ⬜ `cartographier-processus-avant-automatiser`

## Phase 4 — Cluster I (processus transversaux par fonction)

- ⬜ `automatiser-facturation-relances-ia` → maille `metiers/ia-fiduciaire`
- ⬜ `automatiser-support-client-ia` (absorbe `chatbot-vs-agent-ia-support`) → maille `metiers/ia-commerce-retail`
- ⬜ `automatiser-emails-documents-ia` (absorbe `rag-documents-pme`) → maille `notebooklm-guide-complet-2026`
- ⬜ `automatiser-prospection-crm-ia` → maille `metiers/ia-agence-immobiliere`
- ⬜ `automatiser-rh-onboarding-ia` → maille `metiers/ia-cabinet`

## Phase 5 — Cluster K (adoption & gouvernance)

- ⬜ `adoption-ia-equipe-change-management`
- ⬜ `garde-fous-ia-validations-audit`
- ⬜ `integrer-agent-ia-outils-existants`

## Phase 6 — Bouclage

- ⬜ Vérifier maillage complet (tous → pillar → hub conversion)
- ⬜ Ajouter la colonne « Mise en place IA » ou entrées au méga-menu si pertinent
- ⬜ Build vert + Request Indexing GSC des nouvelles URLs
- ⬜ `/epic-recap` en fin de cluster (demander à Jonathan avant)

---

## 🅿️ Backlog — Système Lead Magnet (à concevoir indépendamment)

> Décision 2026-07-02 : ne PAS bricoler le lead magnet dans ce cluster. En faire un **skill enrichi et réutilisable**, conçu à part.

**Portée du futur skill `/lead-magnet`** : produire uniquement le **FOND** — le contenu brut de la ressource en `.md` (checklist, template, feuille de route, canevas, kit interne, données du calculateur). Le skill juge la pertinence (gate) puis rédige la substance. Il NE gère PAS la mise en forme, la livraison, ni la capture.

**À traiter séparément (hors skill, ou skill downstream)** :
- 🅿️ Infra Astro : collection `resources` (`src/content/config.ts`) + route `/ressources/[slug].astro`
- 🅿️ Composant capture email Web3Forms (réutiliser le pattern `src/pages/outils/checklist-*`)
- 🅿️ Rendu online lisible (design brutaliste) + option PDF client-side (html2pdf.js)
- 🅿️ Injection du bloc CTA dans l'article source
- 🅿️ JSON-LD `LearningResource` / diffusion (newsletter à réactiver ?)
- 🅿️ Calculateur pilote « gain de temps » (composant interactif — dépend de l'infra ci-dessus)

**Cartographie ressource ↔ article** : voir `docs/topical-map-mise-en-place-ia.md` § « Lead magnets rattachés ».

**Session dédiée à prévoir** : cadrer le skill (inputs/outputs, types de ressource, gate de pertinence, format du `.md` de sortie) avant de coder quoi que ce soit.

---

## Suivi rapide

| Phase | Contenus | Statut |
|-------|----------|--------|
| 0 — Validation | topical-map skill + nettoyage parent | ⬜ |
| 1 — Pillar | 1 | ⬜ |
| 2 — Gain de temps | 2 | ⬜ |
| 3 — Méthode | 3 | ⬜ |
| 4 — Processus | 5 | ⬜ |
| 5 — Adoption | 3 | ⬜ |
| 6 — Bouclage | — | ⬜ |
| 🅿️ Lead magnet | skill + infra | 🅿️ backlog |

**Total cluster** : 14 contenus (1 pillar + 13 satellites).
