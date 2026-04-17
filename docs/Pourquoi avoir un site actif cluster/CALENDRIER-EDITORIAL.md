# Calendrier éditorial — Cluster "Site actif"

> **Statut global** : 🟡 En cours — Sprint 1 ✅ + Sprint 2 A2 ✅ data injectée — prochain : A3 (calculateur)
> **Démarrage** : 2026-04-15
> **Dernière mise à jour** : 2026-04-17
> **Production** : via `/seo-article` (pipeline complet) ou `/seo-brief` → `/seo-write` → `/humanizer` → `/seo-enrich` → `/seo-review`
> **Pilier** : refonte de `visibilite-site-internet-2026.md` (pas un nouveau fichier)
> **Mantra** : pilier + 3 assets différenciants en 6 semaines avant tout le reste

## 📍 Où on en est (fin session 2026-04-17)

**Fait** :
- 3 articles rédigés via vrai pipeline `/seo-article` (P, A1, A2) — scores 13/14, 12/14, 12/14
- Briefs complets dans `docs/Pourquoi avoir un site actif cluster/` (BRIEF-PILIER, BRIEF-A1, BRIEF-A2)
- Briefs sémantiques auto-générés dans `.briefs/` + `src/content/blog/.briefs/`
- 20 covers webp regénérées (tous les articles du blog)
- **Audit terrain 50 sites finalisé** : CSV + constats agrégés + patterns positifs + log dans `docs/Pourquoi avoir un site actif cluster/`
- **A2 data injectée** : tous les `[DATA-À-INJECTER]` et `<!-- TODO-DATA -->` remplacés par les chiffres réels de l'audit (76% dormants, 64/100 Lighthouse, 36% sans schema, etc.)
- A2 `draft: false`, build Astro OK

**En attente / non bloquant** :
- ⏳ **PDF lead magnet** `/public/ressources/checklist-15-signes-site-dort.pdf` — référencé depuis P + A1 mais pas produit. Option Canva/Figma OU HTML→PDF. Non bloquant pour publier A2.
- ⏳ **4 images A2** — `<!-- TODO:image -->` dans l'article (cover composite, flowchart méthodo, triptyque archétypes, checklist patterns). Hors scope texte, à générer via `/generate-images` ou design.
- ⏳ **Décision CSV public** — `<!-- TODO-DATA: si Jonathan publie le CSV anonymisé -->` en ligne 114 de A2.

**Prochaine session — à reprendre** :
1. **Publier A2** (article prêt, `draft: false`) — optionnel : générer d'abord les 4 images
2. **Sprint 2 suite — A3** : calculateur Astro interactif "combien te coûte ton site dormant" + article (`cout-site-web-dormant-calculateur.md`). Se débloque sans dépendance externe.
3. Puis A5 (cas Léo, 20 400 impressions) + A4 (concurrent) en Sprint 3 via sous-agents parallèles.

---

## Légende statut
- ⬜ À faire
- 🟡 Brief prêt, rédaction non lancée
- 🟠 En cours de rédaction
- 🔵 Rédigé, en review/enrichissement
- ✅ Publié
- 🔄 Refresh / recâblage d'un article existant

---

## Vue d'ensemble — 12 nouveaux articles + 6 recâblages

| # | Sprint | Titre court | Type | Mot-clé principal | Statut | Fichier final |
|---|---|---|---|---|---|---|
| **P** | S1 | Pilier — Site qui dort vs qui travaille | Guide pilier (refresh) | stratégie de contenu site web | 🔵 | `visibilite-site-internet-2026.md` (refondu, score 13/14, cover OK) |
| **A1** | S1 | 15 signes que ton site dort | Checklist diagnostic + lead magnet | mon site web ne fonctionne pas | 🔵 | `15-signes-site-web-dort.md` (score 12/14 · 88/100, cover OK) |
| **A2** | S2 | J'ai audité 50 sites d'indépendants romands | Enquête data terrain | audit site web suisse romande | 🔵 | `audit-50-sites-indeps-romands.md` (score 12/14 · 88/100, cover OK, data à collecter) |
| **A3** | S2 | Combien te coûte un site dormant (calculateur) | Article + outil interactif | combien rapporte un site internet | ⬜ | `cout-site-web-dormant-calculateur.md` |
| **A5** | S3 | Cas Léo — 20 400 impressions avec 1 article | Étude de cas chiffrée | étude de cas SEO Suisse | ⬜ | `cas-leo-lecureux-contenu-seo.md` |
| **A4** | S3 | Pourquoi ton concurrent apparaît avant toi | Comparatif décortiqué | concurrent mieux placé sur Google | ⬜ | `concurrent-mieux-place-google.md` |
| **A6** | S4 | Comment je rédige un article SEO de A à Z | Méthode transparente | rédaction article SEO | ⬜ | `methode-redaction-article-seo.md` |
| **A7** | S4 | Google Freshness + QDF : ce que dit vraiment Google | Benchmark technique sourcé | google freshness algorithm | ⬜ | `google-freshness-qdf-explique.md` |
| **A8** | S5 | Anatomie d'un cluster SEO (méta-démo) | Démonstration live | cluster SEO page pilier | ⬜ | `anatomie-cluster-seo-page-pilier.md` |
| **A9** | S5 | "Instagram me ramène des clients" : le plafond invisible | Myth-busting chiffré | réseaux sociaux suffisent indépendant | ⬜ | `instagram-suffit-plafond-3-5.md` |
| **A10** | S6 | Combien d'articles par mois pour ranker en CH ? | Guide fréquence honnête | combien d'articles par mois SEO | ⬜ | `frequence-articles-blog-seo-suisse.md` |
| **A11a** | S7 | Blog pour avocat romand : ce qui marche vraiment | Playbook sectoriel YMYL | blog avocat Genève | ⬜ | `blog-avocat-geneve-strategie.md` |
| **A11b** | S7 | Blog pour cabinet médical romand : guide E-E-A-T | Playbook sectoriel YMYL | contenu site cabinet médical | ⬜ | `blog-cabinet-medical-romand.md` |
| **A11c** | S8 | Blog pour artisan romand : la méthode anti-périodes creuses | Playbook sectoriel | blog artisan Suisse | ⬜ | `blog-artisan-romand-clients.md` |
| **A12** | S8 | Google puis ChatGPT : pourquoi un site mort devient invisible pour les IA | Pont GEO ↔ pilier | site web visible IA générative | ⬜ | `site-mort-invisible-ia-generatives.md` |

---

## Recâblages (articles existants à connecter au cluster)

| Article existant | Action | Maillage à ajouter |
|---|---|---|
| `visibilite-site-internet-2026.md` | 🔄 **Devient le pilier** — refresh complet | Liens sortants vers tous les satellites |
| `creer-site-vitrine-ia-visibilite-google.md` | 🔄 Sous-cas du pilier (IA builders) | Lien retour pilier + A1 |
| `prix-site-web-suisse-2026.md` | 🔄 BOFU pricing | Lien depuis A3 (calculateur), A6 (méthode) |
| `freelance-ou-agence-web.md` | 🔄 BOFU choix prestataire | Lien depuis pilier section "qui s'en occupe" |
| `0a30joursgooglevisible.mdx` | 🔄 BOFU plan d'action | Lien depuis A1, A2, pilier |
| `geo-seo-ia-2026.md` + cluster `apparaitre-*` | 🔄 Connecté via A12 | A12 link bidirectionnel vers les 7 articles GEO |

---

## Sprint 1 — Fondations (semaine 1-2)

**Objectif** : pilier ranke + premier lead magnet en ligne.

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 1.1 | Brief détaillé pilier | `BRIEF-PILIER.md` (ce dossier) | ✅ |
| 1.2 | Refresh `visibilite-site-internet-2026.md` | Article publié | `/seo-article` | ✅ (13/14) |
| 1.3 | Brief A1 (checklist 15 signes) | `BRIEF-A1.md` | `/seo-brief` via skill | ✅ |
| 1.4a | Rédaction A1 via pipeline | Article publié | `/seo-article` | ✅ (12/14) |
| 1.4b | PDF lead magnet checklist | `/ressources/checklist-15-signes-site-dort.pdf` | manuel | ⬜ |
| 1.5 | Cover images P + A1 | webp générés | `/generate-images` | ✅ |
| 1.6 | Maillage interne pilier ↔ A1 | Liens contextuels validés | auto (via skill) | ✅ |

**Sortie sprint** : pilier + 1 article + 1 PDF.

---

## Sprint 2 — Assets différenciants (semaine 3-4)

**Objectif** : sortir les 2 contenus que personne d'autre n'a (audit terrain + calculateur).

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 2.1 | Audit data réelle 50 sites (collecte) | Spreadsheet privé | Claude cowork (recommandé) ou script Node local | ⬜ |
| 2.2 | Brief A2 (enquête terrain) | `BRIEF-A2.md` | `/seo-brief` via skill | ✅ |
| 2.3 | Rédaction A2 (structure + placeholders) | Article publié avec `[DATA-À-INJECTER]` | `/seo-article` | ✅ (12/14) |
| 2.3b | Injection data réelle dans A2 | Article finalisé sans placeholders | manuel après 2.1 | ⬜ |
| 2.4 | Cover A2 | webp généré | `/generate-images` | ✅ |
| 2.5 | Build calculateur Astro (composant) | Composant `<CostCalculator />` | dev Astro | ⬜ |
| 2.6 | Brief A3 (article calculateur) | `BRIEF-A3.md` | `/seo-brief` | ⬜ |
| 2.7 | Rédaction A3 + intégration outil | Article + outil live | `/seo-article` | ⬜ |

**Sortie sprint** : 2 assets uniques au marché romand.

---

## Sprint 3 — Preuves sociales (semaine 5-6)

**Objectif** : convertir les conscients via cas + comparatifs.

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 3.1 | Brief A5 (cas Léo angle contenu) | `BRIEF-A5.md` | `/seo-brief` | ⬜ |
| 3.2 | Rédaction A5 | Article publié | `/seo-article` | ⬜ |
| 3.3 | Analyse SERP 3 cas concurrent (anonymisés) | Notes brief | manuel | ⬜ |
| 3.4 | Brief A4 + rédaction | Article publié | `/seo-article` | ⬜ |

**Sortie sprint** : crédibilité chiffrée installée.

---

## Sprint 4 — Expertise technique (semaine 7-8)

**Objectif** : prouver la maîtrise (méthode + sourcing brevets Google).

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 4.1 | Brief A6 (méthode rédaction transparente) | `BRIEF-A6.md` | `/seo-brief` | ⬜ |
| 4.2 | Rédaction A6 | Article publié | `/seo-article` | ⬜ |
| 4.3 | Recherche brevets Google (US7346839, QDF, freshness) | Notes sourcées | WebSearch + lecture brevets | ⬜ |
| 4.4 | Brief A7 + rédaction | Article publié | `/seo-article` | ⬜ |

**Sortie sprint** : positionnement expert technique.

---

## Sprint 5 — Méta + reframe (semaine 9-10)

**Objectif** : démo vivante + reframe Instagram.

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 5.1 | Brief A8 (anatomie cluster — méta) | `BRIEF-A8.md` | `/seo-brief` | ⬜ |
| 5.2 | Rédaction A8 + schéma SVG du cluster | Article + visuel réutilisable | `/seo-article` + design | ⬜ |
| 5.3 | Brief A9 (Instagram plafond) | `BRIEF-A9.md` | `/seo-brief` | ⬜ |
| 5.4 | Rédaction A9 | Article publié | `/seo-article` | ⬜ |

**Sortie sprint** : asset visuel cluster réutilisable + reframe RS.

---

## Sprint 6 — Long tail technique (semaine 11-12)

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 6.1 | Brief A10 (fréquence) | `BRIEF-A10.md` | `/seo-brief` | ⬜ |
| 6.2 | Rédaction A10 | Article publié | `/seo-article` | ⬜ |

---

## Sprint 7-8 — Verticalisation sectorielle (semaine 13-16)

**Objectif** : 3 playbooks sectoriels + pont GEO. Possibilité de paralléliser via `/seo-blog-writer` Module B (local) + Module C (YMYL).

| Tâche | Livrable | Skill | Statut |
|---|---|---|---|
| 7.1 | Brief + rédaction A11a (avocat) | Article publié | `/seo-article` | ⬜ |
| 7.2 | Brief + rédaction A11b (médical) | Article publié | `/seo-article` | ⬜ |
| 8.1 | Brief + rédaction A11c (artisan) | Article publié | `/seo-article` | ⬜ |
| 8.2 | Brief + rédaction A12 (pont GEO) | Article publié | `/seo-article` | ⬜ |
| 8.3 | Audit maillage global cluster | Validation liens entrants/sortants | manuel | ⬜ |

---

## Assets hors-blog (en parallèle des sprints)

| Asset | Sprint cible | Statut | Notes |
|---|---|---|---|
| **Calculateur "site dormant"** | S2 | ⬜ | Composant Astro, intégré dans A3 |
| **PDF checklist 15 signes** | S1 | ⬜ | Dérivé de A1, gating email optionnel |
| **Schéma SVG cluster** | S5 | ⬜ | Réutilisable LinkedIn + propositions commerciales |
| **Audit Tally (formulaire)** | S5+ | ⬜ | Capture lead — uniquement quand bande passante OK |
| ~~Comparateur Lighthouse 2 sites~~ | reporté | ⬜ | ROI incertain — phase 2 |

---

## LinkedIn — repurposing (à activer dès S2)

Workflow : article publié → 2-3 jours après → post LinkedIn via `/linkedin-weekly-posts`.

| Article source | Angle LinkedIn | Format |
|---|---|---|
| A1 (15 signes) | "15 signes que ton site dort, le 7e tue" | Carrousel |
| A2 (audit 50) | "J'ai audité 50 sites romands. Voici le constat brut." | Storytelling + chiffres |
| A3 (calculateur) | "Combien te coûte ton site dormant ce mois-ci ?" | Hook + lien outil |
| A4 (concurrent) | "Pourquoi ton concurrent te dépasse sur Google" | Carrousel décortiqué |
| A5 (cas Léo) | "20 400 impressions avec 1 article. Voici comment." | Storytelling cas |
| A9 (Instagram) | "Si tu fais que de l'Instagram, tu plafonnes à 3,5%." | Controverse |

---

## Métriques de suivi

| Métrique | Objectif 6 mois | Outil |
|---|---|---|
| Pilier classé top 10 sur "stratégie de contenu site web" | Top 10 | Search Console |
| Trafic organique cluster | +100% baseline | GSC + GA4 |
| Leads via lead magnets (PDF + audit) | 20+ emails | Tally + Resend |
| Articles cluster qui rankent (top 20) | 8/12 | GSC |
| Backlinks naturels | 5+ | Ahrefs / Search Console |

---

## Notes d'exécution

- **Toujours commencer par `/seo-brief`** avant `/seo-write` — sauf pour les refresh où on part de l'article existant.
- **Maillage** : à chaque nouvel article publié, mettre à jour le pilier (ajouter le lien sortant) ET au moins 2 satellites existants (ajouter lien entrant). Cluster vivant > cluster figé.
- **Refresh trimestriel** : tous les articles publiés depuis 90+ jours → relire, ajouter section "mise à jour [date]", republier (signal fraîcheur).
- **Pas de cannibalisation** : avant chaque brief, vérifier les mots-clés ciblés vs articles existants (cf. tableau audit). Si overlap, choisir : refresh ou angle distinct.
- **Pipeline complet** : `/content-pipeline` après chaque article = post LinkedIn + post GMB générés automatiquement.

---

## Prochaine action immédiate

➡️ **Lancer le pilier (P)** : ouvrir `BRIEF-PILIER.md`, puis `/seo-write` à partir de ce brief en mode refresh de `visibilite-site-internet-2026.md`.
