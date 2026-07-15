# Feature — Devis Cabinet Dentaire Grange-Canal

> Devis client publié sur le site (collection `devis`), pour le **Cabinet Dentaire Grange-Canal** (Ch. de Grange-Canal 6, 1224 Chêne-Bougeries · dentiste-gc.ch · fondatrice **Malika Hafici**, hygiéniste dentaire). Offre : **refonte Astro 750 CHF** + **partenaire digital 260 CHF/mois**, engagement 6 mois. (Prix abaissé de 290 à 260 le 15.07 au soir.)
> **Statut** : 🔄 **PAS ENVOYÉ** — `status: draft`. Reste des vérifs à faire au call (voir Pièges).
> URL : `/devis-client/cabinet-grange-canal` · mot de passe **`malika`** · `noindex` (hérité du layout devis).

## Etat session 2026-07-15 (soir) — Devis créé + schema devis étendu + fix dev server ✅

**Fait :** le devis complet, l'extension du schema `devis` pour le porter, la MAJ du case study Barber Concept, et deux fix transverses. Build vert (238 pages).

- **`cabinet-grange-canal.md`** — devis complet. Architecture voulue : **le problème avant le prix**. hero → diagnostic → offres → déroulé → conseil → 2 preuves → ROI → disclaimer → portfolio → next steps → corps markdown.
- **Schema `devis` étendu** (`src/content/config.ts`) : nouveau bloc **`audit`** (`moments` / `scores` / `screenshot` / `nuance`), flag **`showComparison`** (défaut `true`), et **`proof`** accepte désormais un objet **ou un tableau** (union Zod + normalisation dans le composant). Tout est rétrocompatible — les 2 anciens devis rendent comme avant.
- **`[slug].astro`** : rendu du bloc `audit` (inséré entre hero et offers), **`timeline` enfin rendue** (elle était destructurée ligne 21 et jamais affichée depuis janvier — la timeline de Constantin s'affiche maintenant), tableau comparatif conditionné à `showComparison`, boucle sur `proofs`, et style `.feature-group` pour les intertitres de features en MAJUSCULES.
- **Case study `barber-concept.md` mis à jour** : bloc `results` (GSC), `platform` → Astro (Webflow à l'origine), phase 3 « Optimisation SEO (en cours) » → « Refonte Astro et activation SEO (2026) » avec le récit réel, 2 learnings ajoutés, tags + Astro/SEO/GEO.
- **Fix bug dev server** (transverse, pas lié au devis) — voir Pièges.

**Prochain :** rien de bloquant côté code. Côté commercial : Jonathan relit la page, tranche les 3 points ouverts (voir Pièges), passe `status: sent` et envoie. **Ne pas envoyer avant le relevé de la fiche Google au call.**

**Pièges / décisions :**

- **Le bug qui cassait `npm run dev`** (préexistant, commit blueprint) : `ContactForm.astro` avait `<script>` **dans un commentaire de frontmatter** (« tout le `<script>` »). Le dep-scanner esbuild de Vite le prend pour une vraie balise ouvrante, avale le HTML qui suit et casse sur `Expected ">" but found "class"`. **`npm run build` ne fait pas ce scan** → le build passait pendant que le dev était mort. Même piège corrigé dans `outils/checklist-15-signes-site-dort.astro`. **Ne jamais écrire `<script>` littéral dans un commentaire `.astro`.**
- **Warning `Duplicate id` du glob-loader** : apparaît sur un fichier de contenu qu'on vient d'éditer, disparaît au sync suivant. **Artefact transitoire d'Astro 5, sans effet sur le rendu** — vérifié (1 seule occurrence en sortie). Ne pas chercher de doublon, il n'y en a pas.
- **Non tranché — `Argument ROI`** : titre en dur dans `[slug].astro`, donc visible par la cliente. Jargon de vendeur sur un doc de cabinet médical. Proposition : « Ce que ça représente ». Touche les 2 autres devis (clos) → arbitrage Jonathan.
- **Non tranché — emoji 🔒** sur l'écran de déverrouillage (`[slug].astro`). Viole la règle zéro emoji. Préexistant.
- **À vérifier avant envoi — « vous en avez 31, c'est un actif réel et il dort »** (offre 2). Le « il dort » suppose qu'elle **ne répond pas** à ses avis. Non vérifié. Si elle y répond, la phrase est fausse et vexante → l'enlever.
- **À vérifier avant envoi — « cité dans les AI Overviews »** (devis + case study Barber). Affirmation forte, sur parole de Jonathan, vérifiable par n'importe qui. Une capture serait utile.
- **Preuve Lécureux volontairement écartée** : les 328 clics / 16'500 impressions du devis Constantin sont les chiffres de l'incident du 03.07. Physio Pommier (santé) + Barber Concept (chiffres) font mieux le travail. Ne pas les réintroduire sans re-sortir la data de GSC.

**Commit :** [96631a9] docs(handoff): wrap session 15.07 (soir) — portrait hero + bandeau de confiance *(dernier commit avant cette session)*

---

## Carte du code
> Mise a jour : 2026-07-15

| Fichier | Role |
|---------|------|
| `src/content/devis/cabinet-grange-canal.md` | Le devis lui-même — frontmatter (hero/audit/offers/timeline/advice/proof×2/roi/disclaimer/portfolio/nextSteps) + corps markdown (vélocité, 3 angles, 31 avis, souveraineté, options) |
| `src/content/config.ts` | Schema `devis` : bloc `audit`, flag `showComparison`, `proof` en union objet\|tableau (`proofSchema` extrait en const) |
| `src/pages/devis-client/[slug].astro` | Rendu : bloc `audit` avant les offres, `timeline` (bug réparé), `proofs` normalisés en tableau, `.feature-group`, styles `.moment` / `.scores-grid` / `.nuance-box` |
| `src/content/portfolio/barber-concept.md` | Case study MAJ : `results` GSC, refonte Astro 2026, learnings « trafic de marque » |
| `src/components/ContactForm.astro` | Fix `<script>` dans un commentaire (cassait `npm run dev`) |
| `src/pages/outils/checklist-15-signes-site-dort.astro` | Même fix |
| `public/devis/pagespeed-grange-canal.png` | Capture PageSpeed du site actuel (preuve à charge) |
| `public/devis/gsc-barber-concept.png` | Capture GSC Barber Concept 6 mois (preuve de résultat) |

### Decisions cles

- **Prix : 750 setup + 260/mois, engagement 6 mois puis mensuel.** Le setup est vendu **sous son coût** — c'est le récurrent qui le finance. Sans engagement, le loss-leader devient une perte.
- **Cadence : 12 pages en 6 mois, une toutes les 2 semaines**, chacune relue par un praticien (YMYL / LPMéd-SSO). Le brief initial disait « 2 articles/semaine » = 48 relectures praticien → intenable et non rentable à ce tarif. Arbitré le 15.07.
- **Aucune promesse de résultat.** Le doc n'écrit jamais « vous aurez plus de patients ». Il s'engage sur un livrable (12 pages existeront) et laisse la cliente conclure. Le disclaimer et cet engagement se tiennent mutuellement — ajouter la promesse détruit les deux.
- **Pas de style infomercial** (prix barré, valeur ancrée) : sur un cabinet de santé ça fait *baisser* la confiance et frotte avec les règles de com des professions médicales. La valeur perçue vient de **l'accumulation de preuves mesurées** + de la traduction du jargon en bénéfice patient.
- **Le 100/100 SEO est désamorcé dans le doc** (bloc `audit.nuance`). Le rapport PageSpeed affiche SEO 100 en vert : si elle le lance elle-même, l'argument s'effondre. On l'explique avant qu'elle le trouve (le score note la plomberie, pas le contenu).
- **Sanity CMS : option sur demande, jamais dans le devis initial.** Livrer l'autonomie d'édition contredit la ligne « mises à jour incluses, vous ne touchez à rien » qui justifie le recurrent. Réponse à l'objection lock-in, pas une offre.
- **L'argument « vous économisez ~120 CHF/an de Wix » n'est PAS un pilier** — 120/an contre 3'480/an invite au mauvais calcul. Une ligne dans « inclus », sans emphase.
- **L'audit Roso Squad (`~/Downloads/Audit_CabinetGrangeCanal_*.md`) est de la matière première, pas un livrable.** Il n'est pas republié : il dit « tout est réparable dans Wix », ce qui contredit la refonte. On pioche ses preuves, on jette le reste. Signature **Jon Labs seule**.

### Data mesurée (relevés du 15.07.2026)

| Source | Chiffre |
|---|---|
| PageSpeed mobile dentiste-gc.ch | **47** perf · 92 access · 77 bonnes pratiques · **100 SEO** · 2/3 nav. agentique |
| Citations IA sur prompts de soin | 0/21 |
| Score visibilité IA | 13/100 |
| Adresses testées → 404 | 17 |
| Pages vs Centre dentaire Chêne-Bourg | 9 vs ~160 |
| Avis Google réels | **31** (confirmé par Jonathan — la note, elle, reste non relevée) |
| Physio Pommier (preuve) | 98 perf · 91 access · 100 SEO · 25+ pages |
| Barber Concept (preuve) | 15'000 clics · 571'000 impressions · position 6,8 (6 mois) |

**Barber Concept — l'histoire réelle** (à ne pas déformer) : site Webflow de 2023, **aucun SEO pendant 2 ans**, trafic uniquement de marque. Refonte **Astro début 2026**, contenu publié régulièrement **à partir de mai 2026** → la courbe décolle et ne redescend plus, jusqu'aux AI Overviews. C'est le **même dossier que le dentiste** (trafic de marque, rien sur les services) — c'est ce qui en fait la preuve, pas le total.

### Tarifs du cabinet (source : leur page tarifs, via l'audit)

Contrôle dès 120 · détartrage 140 (forfait ferme) · urgence dès 140 · carie 230-400 · racine dès 600 · **implant dès 3'000** · blanchiment dès 390 · couronne/facette dès 1'250 · valeur du point **1.10**.
→ Le ROI du devis s'appuie dessus : **2'490 CHF** sur 6 mois contre **un implant à 3'000**. Chiffres à eux, pas à nous.
