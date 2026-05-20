# Chantier SEO Refactor — 2026-05

> **Suivi maître du gros chantier de refonte SEO multi-sessions.**
> Démarré le 2026-05-20. À mettre à jour à chaque session.
>
> **⏸️ État au 2026-05-20** : Sessions 1-3 terminées et commitées. Reprise prévue Session 4 (fusion `developpement-mvp` + `outils-sur-mesure` → `applications-sur-mesure` avec brief SEO propre). Voir détail Session 4 ci-dessous.

---

## 🎯 Objectifs

1. **Slugs propres** : retirer les années des slugs des futurs articles (règle universelle dans seo-brief). Renommer uniquement les slugs sans trafic ; garder les autres (jus SEO).
2. **Concentration des services** : 4 piliers au lieu de 9 (création site, référencement local, gestion fiche Google, applications sur mesure). Archiver le reste.
3. **Vocabulaire** : remplacer "SEO" par "référencement" sur le site (FR-CH, mot plus recherché). Garder "SEO" uniquement pour le terme technique.
4. **Articles "apparaître sur X"** : reformuler avec "référencer" (slugs sans trafic donc peu de risque).
5. **Maillage interne + indexation** : auditer les pages non indexées, consolider, lier.
6. **Données réelles** : piloter par DataForSEO + GSC, pas à l'intuition.

---

## 🧭 Principes recadrés (à respecter à chaque session)

- **Slug = URL permanente** → ne pas modifier sauf si trafic = 0
- **Title/H1/contenu = mutables** → c'est là qu'on reflète l'année courante
- **Skill seo-brief reste universel** → pas de règles spécifiques à Jon Labs (vocabulaire = sur-mesure projet)
- **Strategy "bombarder un sujet"** → focus actuel = SEO local + GMB + référencement local

---

## 📊 État du chantier

| Session | Statut | Date |
|---------|--------|------|
| 1 — Snapshot + données réelles | ✅ Terminée | 2026-05-20 |
| 2 — Skill + slugs apparaître | ✅ Terminée | 2026-05-20 |
| 3 — Refonte page Services | ✅ Terminée | 2026-05-20 |
| 4 — Page Tarifs + sweep vocab | ⬜ À faire | — |
| 5 — Maillage + indexation | ⬜ À faire | — |
| 6 — Refresh articles à fort potentiel | ⬜ À faire | — |
| 7 — Vérif + commit final | ⬜ À faire | — |

---

## 📋 Détail des sessions

### Session 1 — Snapshot + données réelles ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟢 zéro (lecture pure)
**Livrable** : [`docs/snapshots/2026-05-20-pre-refactor.md`](./snapshots/2026-05-20-pre-refactor.md)

#### Checklist
- [x] `/seo-gsc` : positions actuelles → 7'922 imp / 91j / pos moy 9.7
- [x] `/seo-index-diagnose` : 46/75 indexées (61%), 9 services non indexés sur 9
- [x] `/seo-keywords` clusters services (10 topics) :
  - Volumes FR-CH réels obtenus via DataForSEO
- [x] Consolidation dans `docs/snapshots/2026-05-20-pre-refactor.md`

#### Découvertes majeures
1. **Astro config contient déjà 7 redirects** pour les articles "apparaitre" → on peut les **inverser** au lieu de redo
2. **`geo-seo-ia-2026`** a 652 impressions pos 5.5 — c'est la meilleure page blog
3. **`apparaitre-claude` (sans année) a 375 imp** via redirect → le jus est sur l'ancien slug
4. **0/9 pages /services/ correctement indexées** — problème structurel
5. **`agence référencement Genève` = 110/mois** ⭐ — keyword principal à privilégier
6. **`référencement local Genève` = 0/mois** sur DataForSEO — pivot keyword nécessaire
7. **`création site web Genève` = 90/mois** — bon ciblage actuel

#### Classification finale des articles
- **7 REVERT** vers slug sans année : `apparaitre-claude`, `apparaitre-copilot`, `apparaitre-perplexity`, `apparaitre-gemini`, `apparaitre-grok`, `apparaitre-chatgpt-geneve`, `geo-seo-ia` (à valider)
- **6 KEEP** : `prix-site-web-suisse-2026`, `visibilite-site-internet-2026`, `no-show-rendez-vous-2026`, `notebooklm-guide-complet-2026`, `fiche-google-my-business-guide-complet-2026`, `optimiser-fiche-google-my-business-checklist-2026`
- **1 wait** : `repondre-avis-google-modeles-2026` (pas encore publié)

#### Questions ouvertes pour Session 2
1. `geo-seo-ia-2026` (652 imp) — revert ou keep ?
2. `/services/referencement-local` — pivoter vers `agence référencement Genève` comme keyword principal ?
3. Pages services 9/9 non indexées — revoir le template avant Session 3 ?
4. `no-show-rendez-vous-2026` crawled_not_indexed — content thinness ?

---

### Session 2 — Skill seo-brief + renommage articles "apparaître" ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟠 modéré (redirections + réindexation à demander)

#### Checklist
- [x] Skill `seo-brief/SKILL.md` : section "Année suffixée -[YEAR]" remplacée par règle bloquante "JAMAIS d'année dans un slug" + exemples ❌/✅ inversés
- [x] 7 fichiers articles renommés (git mv) : `apparaitre-{claude,copilot,perplexity,gemini,grok,chatgpt-geneve}-2026.md` + `geo-seo-ia-2026.md` → versions sans année
- [x] Suppression de l'override `slug: "apparaitre-grok-2026"` dans le frontmatter de `apparaitre-grok.md`
- [x] 7 redirects inversés dans `astro.config.mjs` (`/blog/X-2026` → `/blog/X`)
- [x] Liens internes mis à jour : 81 remplacements dans 16 fichiers (paths images `/images/blog/X-2026.webp` préservés)
- [x] Build local OK : 182 pages, 7 redirects HTML avec meta refresh + canonical générés
- [x] Sitemap contient les 7 nouvelles URLs ; anciennes (`-2026`) absentes (Astro exclut les redirects)

#### Décisions exécutées
- **Revert vers slugs sans année** : 7 articles (le jus SEO est resté sur les anciennes URLs via les redirects existants)
- **Images conservées** : les filenames `/images/blog/X-2026.webp` ne sont pas touchés (pas d'impact SEO direct, scope réduit)

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Demander indexation des 7 nouvelles URLs via URL Inspection :
  - `https://www.jonlabs.ch/blog/apparaitre-claude`
  - `https://www.jonlabs.ch/blog/apparaitre-copilot`
  - `https://www.jonlabs.ch/blog/apparaitre-perplexity`
  - `https://www.jonlabs.ch/blog/apparaitre-gemini`
  - `https://www.jonlabs.ch/blog/apparaitre-grok`
  - `https://www.jonlabs.ch/blog/apparaitre-chatgpt-geneve`
  - `https://www.jonlabs.ch/blog/geo-seo-ia`
- [ ] Monitorer positions S+2, S+4 (cf. Session 7)

---

### Session 3 — Concentration des Services (draft soft) ✅

**Statut** : terminée
**Date** : 2026-05-20
**Risque** : 🟢 faible (approche soft, aucune redirection 301)

#### Décisions actées (révisées en Session 3)
- ✅ **Piliers gardés publics** : creation-site-web, referencement-local, gestion-fiche-google
- ✅ **Branche dev gardée publique** (en attente fusion Session 4) : developpement-mvp, outils-sur-mesure
- ⏸️ **Draft soft (noindex + hors sitemap + hors nav/hub)** : automatisation, integration-outils, validation-idee, refonte-site-web
- 🔜 **Fusion mvp + outils-sur-mesure → applications-sur-mesure** : reportée Session 4 (avec brief SEO propre)
- 🔜 **Pivot keyword `referencement-local`** : reporté à session dédiée (brief SEO heavy sur `agence référencement Genève` 110/mois)

#### Checklist
- [x] 4 pages services en `robots="noindex, follow"` (automatisation, integration-outils, validation-idee, refonte-site-web)
- [x] 4 exclusions ajoutées au filter() du sitemap dans `astro.config.mjs`
- [x] navigation.ts : structure simplifiée en 2 colonnes (Web & apps : 3 items / SEO local : 2 items), 4 entries draft retirées
- [x] scenarios.ts : `serviceSections[]` restructuré en 2 sections (`web-outils` 3 items + `seo-local` 2 items) ; sections `automatisation` et `validation` supprimées ; `gestion-fiche-google` ajoutée
- [x] scenarios.ts : 4 `scrollTo` (tools-sync, time-lack, idea-validation, mvp-urgent) repointés vers `web-outils` (sections cibles supprimées)
- [x] `services.astro` hub : 2 `<ServiceSection>` au lieu de 3 (web-outils + seo-local)
- [x] `servicesListData` schema.ts : 5 items au lieu de 9, `numberOfItems` corrigé
- [x] Build OK : 182 pages, noindex présent dans dist/, sitemap propre (4 draft absents, 5 publics présents)

#### Hors scope Session 3 (futures)
- Fusion `developpement-mvp` + `outils-sur-mesure` → applications-sur-mesure (Session 4)
- Refonte heavy `/services/referencement-local` avec brief SEO sur `agence référencement Genève`
- Refonte conversations des scenarios `tools-sync` / `time-lack` / `idea-validation` (parlent encore d'automatisation/validation, contenu inadapté à la nouvelle stratégie SEO)
- Mise à jour des liens internes blog/outils qui pointent vers les 4 pages draft (acceptable car `follow` est gardé, le crawl Google passera quand même)

#### Actions utilisateur post-déploiement (Jonathan)
- [ ] Push + déployer (Vercel auto)
- [ ] Resoumettre sitemap dans GSC : `https://www.jonlabs.ch/sitemap-index.xml`
- [ ] Monitorer dans 2-4 semaines : les 4 pages draft devraient sortir de l'index Google ; les 5 publics devraient gagner en autorité

---

### Session 4 — Page Tarifs + sweep vocabulaire ⬜

**Risque** : 🟢 faible

#### Checklist
- [ ] Refonte `/tarifs.astro` :
  - [ ] Title (selon data Session 1)
  - [ ] Meta description (référencement local au lieu de SEO local)
  - [ ] Schema Offer (3 packages)
  - [ ] Corps de page (sweep SEO → référencement)
- [ ] Sweep global :
  - [ ] `/index.astro` (home)
  - [ ] `/about.astro`
  - [ ] Footer
  - [ ] Navigation
- [ ] **Garder "SEO"** : usage technique uniquement (balises SEO, schémas Schema.org, ids JS comme `serviceSchemas["referencement-local"]`)

#### Notes / Décisions

*À remplir*

---

### Session 5 — Maillage interne + indexation ⬜

**Risque** : 🟢 zéro

#### Checklist
- [ ] Trier les pages non indexées (Session 1) :
  - [ ] Bucket "améliorer" → action contenu/title
  - [ ] Bucket "consolider" → fusion vers page mère
  - [ ] Bucket "laisser tomber" → noindex ou suppression
- [ ] Audit maillage :
  - [ ] Articles orphelins → ajouter liens entrants
  - [ ] Pages services → liens depuis articles cluster
  - [ ] Hub `/blog` → vérifier exhaustivité
- [ ] Livrable : `docs/snapshots/2026-05-XX-internal-linking-fix.md`

#### Notes / Décisions

*À remplir*

---

### Session 6 — Refresh articles à fort potentiel ⬜

**Risque** : 🟢 zéro (slugs gardés, seul le contenu bouge)

#### Cibles identifiées (selon brief utilisateur)
- `visibilite-site-internet-2026` (prend un peu de trafic)
- `prix-site-web-suisse-2026` (prend un peu de trafic)
- + autres identifiés en Session 1

#### Checklist
- [ ] Contenu rafraîchi 2026
- [ ] Title/H1/meta mis à jour
- [ ] Demande de re-crawl GSC

#### Notes / Décisions

*À remplir*

---

### Session 7 — Vérification + commit final ⬜

#### Checklist
- [ ] Build complet
- [ ] `/seo-review` sur pages services modifiées
- [ ] `/seo-index-diagnose` après 1-2 semaines (mesure impact)
- [ ] Commit + push
- [ ] Plan de monitoring positions (semaine S+2, S+4)

---

## 📚 Snapshots & livrables

| Document | Session | Statut |
|----------|---------|--------|
| `docs/snapshots/2026-05-20-pre-refactor.md` | 1 | ⏳ à créer |
| `docs/snapshots/2026-05-XX-internal-linking-fix.md` | 5 | ⬜ |

---

## 🧠 Articles avec année dans le slug (référence)

**Total : 14 articles à analyser en Session 1**

| Slug | Statut trafic à confirmer | Décision préliminaire |
|------|---------------------------|------------------------|
| ~~apparaitre-claude-2026~~ → `apparaitre-claude` | 375 imp / pos 6.6 (ancien slug) | ✅ RENAMED Session 2 |
| ~~apparaitre-chatgpt-geneve-2026~~ → `apparaitre-chatgpt-geneve` | 92 imp / pos 26.2 | ✅ RENAMED Session 2 |
| ~~apparaitre-copilot-2026~~ → `apparaitre-copilot` | 140 imp / pos 7.2 | ✅ RENAMED Session 2 |
| ~~apparaitre-gemini-2026~~ → `apparaitre-gemini` | url_unknown | ✅ RENAMED Session 2 |
| ~~apparaitre-grok-2026~~ → `apparaitre-grok` | 387 imp / pos 6.7 | ✅ RENAMED Session 2 |
| ~~apparaitre-perplexity-2026~~ → `apparaitre-perplexity` | 357 imp / pos 7.6 | ✅ RENAMED Session 2 |
| ~~geo-seo-ia-2026~~ → `geo-seo-ia` | 652 imp / pos 5.5 | ✅ RENAMED Session 2 |
| visibilite-site-internet-2026 | Un peu de trafic (user) | KEEP |
| prix-site-web-suisse-2026 | Un peu de trafic (user) | KEEP |
| notebooklm-guide-complet-2026 | À vérifier | À décider |
| no-show-rendez-vous-2026 | À vérifier | À décider |
| optimiser-fiche-google-my-business-checklist-2026 | À vérifier | À décider |
| fiche-google-my-business-guide-complet-2026 | À vérifier | À décider |
| repondre-avis-google-modeles-2026 | Récent (publication 26 mai) | À décider |

---

## 🔗 Liens utiles

- Plan détaillé : ce fichier
- Skill SEO concerné : `~/.claude/skills/seo-brief/SKILL.md`
- CLAUDE.md projet : `C:\Users\jojo-\Desktop\jonlabs\CLAUDE.md`
- Identity / Voice / SEO context : `docs/identity.md`, `docs/voice.md`, `docs/seo-context.md`

---

## 📝 Journal des décisions

### 2026-05-20
- Création du chantier
- Validation des 4 piliers services (création / référencement local / GMB / applications sur mesure)
- Validation principe : slugs permanents sauf exception trafic-nul
- Validation : skill seo-brief modifié seulement sur la règle slug-année (universel), pas sur le vocabulaire "référencement vs SEO" (spécifique projet)
- ✅ Session 1 terminée → snapshot `docs/snapshots/2026-05-20-pre-refactor.md`
- ✅ Session 2 terminée :
  - Skill `seo-brief/SKILL.md` : règle "JAMAIS d'année dans un slug" maintenant universelle
  - 7 articles renommés via revert (le jus SEO était resté sur les anciennes URLs grâce aux redirects existants)
  - Redirects inversés dans `astro.config.mjs` (anciens slugs `-2026` redirigent maintenant vers les versions sans année)
  - Build OK : 182 pages, sitemap propre, redirects HTML statiques en place
  - **Action utilisateur en attente** : push + resoumettre sitemap GSC + demander indexation des 7 URLs
- ✅ Session 3 terminée :
  - 4 pages services mises en draft soft (noindex + hors sitemap + hors nav/hub) : automatisation, integration-outils, validation-idee, refonte-site-web
  - Hub `/services` restructuré en 2 sections claires : Web & apps (3 items) + SEO local (2 items, dont `gestion-fiche-google` désormais visible)
  - Navigation simplifiée : 2 colonnes au lieu de 3
  - `servicesListData` (schema.ts) : 5 items au lieu de 9, aligné avec le hub
  - Build OK : 182 pages, noindex confirmé dans dist/, sitemap propre
  - Reportés : fusion mvp+outils-sur-mesure → Session 4 ; pivot keyword referencement-local → session dédiée
