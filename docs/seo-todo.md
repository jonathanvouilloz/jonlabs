# SEO Audit - TODO

> Audit réalisé le 20.02.2026 sur toutes les pages piliers de jonlabs.ch

---

## P0 - Urgent

- [x] ~~**Page About complète** — Page avec hero, parcours timeline, compétences, philosophie, passions, CTA~~
- [x] ~~**Mentions légales** — `/mentions-legales` créée (LPD Suisse, hébergeur, propriété intellectuelle)~~
- [x] ~~**Politique de confidentialité** — Intégrée dans mentions légales avec ancre `#confidentialite`~~
- [x] ~~**OG Image en PNG** — `og-image.png` généré, toutes les refs mises à jour (Layout, SEO, schema)~~
- [x] ~~**Logo schema en PNG** — Toutes les refs schema.ts pointent vers `/og-image.png`~~

---

## P1 - Title Tags (max 60 car., format uniforme)

- [x] ~~**Services** (71 car.) → `Services de développement web à Genève | Jon Labs` (52)~~
- [x] ~~**Refonte** (67 car.) → `Refonte de site web à Genève | Jon Labs` (42)~~
- [x] ~~**MVP** (70 car.) → `Développement MVP à Genève | Jon Labs` (41)~~
- [x] ~~**CV** (66 car.) → `Jonathan Vouilloz | Développeur Web Genève | CV` (49)~~
- [x] ~~**Contact** (19 car.) → `Contact | Développeur Web Freelance Genève | Jon Labs` (54)~~
- [x] ~~**Blog** (16 car.) → `Blog | Développement Web & Automatisation | Jon Labs` (54)~~
- [x] ~~**Portfolio** → `Réalisations Web & Études de Cas | Jon Labs` (45)~~
- [x] ~~**Outils** (27 car.) → `Outils Gratuits pour Entrepreneurs | Jon Labs` (48)~~
- [x] ~~**Outils sur mesure** (61 car.) → `Outils & Applications sur mesure | Jon Labs Genève` (52)~~
- [x] ~~**Harmoniser le séparateur** — `|` partout~~

---

## P1 - Meta Descriptions (120-155 car., avec CTA)

- [x] ~~**Homepage** — Ajouté CTA "Devis gratuit"~~
- [x] ~~**Portfolio** — Allongée + "Résultats mesurables à l'appui"~~
- [x] ~~**Blog** — Plus spécifique + "Retours d'expérience concrets"~~
- [x] ~~**Lab** (85 car.) → allongée à ~130 car.~~
- [x] ~~**Outils** — Développée avec bénéfice utilisateur~~
- [x] ~~**Refonte** — Reformulée, moins technique~~
- [x] ~~**MVP** — Harmonisé en "vous"~~
- [x] ~~**Harmoniser tu/vous** — Meta descriptions harmonisées en "vous" (outils index, checklist, merci-checklist). Contenu éditorial interne reste en "tu" par choix de ton.~~

---

## P1 - Schema.org manquants

- [x] ~~**FAQPage schema sur Contact** — Ajouté avec 4 questions~~
- [x] ~~**FAQPage schema sur les 7 landing pages services** — Ajouté sur création, refonte, automatisation, intégration, outils-sur-mesure, MVP, validation~~
- [x] ~~**Supprimer SearchAction** du WebSite schema — Supprimé (le blog n'a pas de recherche côté serveur)~~
- [x] ~~**Ajouter `sameAs`** au ProfessionalService schema — LinkedIn + GitHub ajoutés~~

---

## P1 - Headings (H1) sémantiques

- [x] ~~**Portfolio H1** : "Études de cas" → "Réalisations web & études de cas"~~
- [x] ~~**Blog H1** : "Blog & Réflexions" → "Blog développement web & automatisation"~~
- [x] ~~**Contact H1** : → "Contactez un développeur web freelance à Genève"~~
- [x] ~~**Services H2** : "Mes services en détail" → "Services de développement web en détail"~~

---

## P2 - E-E-A-T / Confiance

- [ ] **Témoignages clients** — Ajouter 2-3 témoignages (même courts) sur homepage ou services
- [ ] **Logos clients** — Étoffer le banner "Ils m'ont fait confiance" avec de vrais logos si possible
- [ ] **Parcours/formations** — Mentionner sur la page About (informaticien de gestion, etc.)
- [ ] **Fourchettes de prix** — Ajouter `offers` dans le schema des services qui n'en ont pas

---

## P2 - Divers

- [ ] **Vérifier canonical URLs** — S'assurer qu'il n'y a pas de doublons avec/sans trailing slash
- [ ] **OG Image par page** — Actuellement toutes les pages utilisent le même og-image générique
- [ ] **Hreflang** — Si multilingue prévu plus tard, préparer la structure

---

## Pages concernées (référence rapide)

| Page | Route | Title | Desc | Schema | H1 |
|------|-------|-------|------|--------|-----|
| Homepage | `/` | ✅ | ✅ | ✅ | ✅ |
| Services | `/services` | ✅ | ✅ | ✅ | ✅ |
| Portfolio | `/portfolio` | ✅ | ✅ | ✅ | ✅ |
| About | `/about` | ✅ | ✅ | ✅ | ✅ |
| Contact | `/contact` | ✅ | ✅ | ✅ FAQ | ✅ |
| Blog | `/blog` | ✅ | ✅ | ✅ | ✅ |
| Lab | `/lab` | ✅ | ✅ | ✅ | ✅ |
| Création site | `/services/creation-site-web` | ✅ | ✅ | ✅ FAQ | ✅ |
| Refonte | `/services/refonte-site-web` | ✅ | ✅ | ✅ FAQ | ✅ |
| Automatisation | `/services/automatisation` | ✅ | ✅ | ✅ FAQ | ✅ |
| Intégration | `/services/integration-outils` | ✅ | ✅ | ✅ FAQ | ✅ |
| Outils mesure | `/services/outils-sur-mesure` | ✅ | ✅ | ✅ FAQ | ✅ |
| MVP | `/services/developpement-mvp` | ✅ | ✅ | ✅ FAQ | ✅ |
| Validation | `/services/validation-idee` | ✅ | ✅ | ✅ FAQ | ✅ |
| CV | `/cv` | ✅ | ✅ | ✅ | ? |
| Outils | `/outils` | ✅ | ✅ | ✅ | ✅ |
