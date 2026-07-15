# Feature — Devis Cabinet Dentaire Grange-Canal

> Devis client publié sur le site (collection `devis`), pour le **Cabinet Dentaire Grange-Canal** (Ch. de Grange-Canal 6, 1224 Chêne-Bougeries · dentiste-gc.ch · fondatrice **Malika Hafici**, hygiéniste dentaire). Offre : **refonte Astro 750 CHF** + **partenaire digital 260 CHF/mois**, engagement 6 mois. (Prix abaissé de 290 à 260 le 15.07 au soir.)
> **Statut** : 🔄 **PAS ENVOYÉ** — `status: draft`. Page en ligne mais personne n'a l'URL. 3 vérifs bloquantes avant envoi (voir Pièges).
> URL : `/devis-client/cabinet-grange-canal` · **sans mot de passe** (champ `password` retiré du frontmatter le 15.07 — le template ouvre le doc directement quand le champ est absent) · `noindex`.

## Etat session 2026-07-15 (nuit) — Migration blueprint + réécriture complète du devis ✅

**Fait :** le template devis migré au design system, l'ordre des sections refait en arc de proposition, et le contenu réécrit de bout en bout pour la cliente. Build vert (236 pages), poussé.

- **`[slug].astro` réécrit** : le brutaliste standalone (son propre `<html>`, sa palette en dur, Plus Jakarta) passe au blueprint via `Layout` + `robots="noindex, nofollow"`, `<main class="co-root">`, namespace `.dv-*`. Pas de Header/Footer (doc client privé). Le lock screen est préservé à l'identique (IDs, clé localStorage, `define:vars`).
- **Ordre refait** : le prix passait en position 4/15, il est maintenant en 6/7 — après l'argument qui le justifie. `roi` rendu **après** les offres (le calcul n'a de sens qu'une fois le prix lu), `disclaimer` **avant** le prix, `nextSteps` retiré du rendu, `timeline` retirée du devis. Le corps markdown est remonté juste après le diagnostic. Les eyebrows (`01 —`, `02 —`) se numérotent **dynamiquement** selon les sections présentes.
- **3 CTA WhatsApp** (`wa.me/41789447707`, message pré-rempli avec le nom du client) : 2 inline + 1 dans le CTA final sombre.
- **Schema étendu** : `options` (pistes à discuter, `price` optionnel), `legal`, `proof.caseStudy` (lien vers l'étude de cas interne).
- **Contenu réécrit** pour une hygiéniste : zéro jargon IA, scores abstraits remplacés par 3 chiffres lisibles, sujet des phrases = son cabinet, « je » réservé aux engagements. Passe humanizer : negative parallelism 8 → 2, em dashes → 0, rule of three → 0, « je/moi/mon » 29 → 15 lignes.
- **3 affirmations fausses retirées** (voir Pièges) et **les 2 devis Constantin supprimés** (périmés, janvier 2026).

**Prochain :** rien côté code. Côté commercial : trancher les **3 vérifs bloquantes** (voir Pièges), puis `status: sent` après le relevé de la fiche Google au call. Si le « 45 à 60 minutes » n'est pas capturable, retirer le moment 3 de `audit.moments`.

**Pièges / décisions :**

- **⛔ VÉRIF BLOQUANTE — « 45 à 60 minutes » attribué à un concurrent** (`audit.moments[2]`). C'est une réponse d'IA : **non reproductible d'un run à l'autre**. Si elle teste et obtient autre chose, la phrase passe pour inventée, et contrairement à un rang on ne peut pas la reformuler de façon robuste (c'est l'observation elle-même qui est instable). **Capture, ou retrait.**
- **⛔ VÉRIF BLOQUANTE — « 9 vs 160 »** (`audit.scores[0]`). Vient de l'audit Roso Squad, jamais recompté. Vérifiable via le sitemap de cdchenebourg.ch.
- **⛔ VÉRIF BLOQUANTE — « un vrai socle, dont personne ne se sert »** (offre 2, avis). Suppose qu'elle **ne répond pas** à ses avis. Non vérifié depuis 2 sessions. Si elle y répond : faux **et** vexant.
- **🔥 INCIDENT — « Vous êtes absente » était FAUX.** Le devis affirmait qu'elle ne sortait pas sur « dentiste ouvert aujourd'hui près de Chêne-Bougeries ». Jonathan a testé : **elle sort 3e**. Récidive de l'incident Lécureux du 03.07 (chiffre gravé sans revérification). Réécrit en argument *plus fort* : elle sort dans les premiers **grâce à sa fiche seule que personne ne gère**, et elle est invisible sur l'urgence **parce que ça se joue sur les pages**. C'est la séparation des deux leviers que le devis vend. **Règle : ne jamais graver de rang ni d'affirmation d'absence** — le pack local est géolocalisé et bouge selon l'endroit exact d'où on tape.
- **🔥 « Vos données restent en Suisse » était FAUX** : le site est hébergé sur Vercel/Netlify (US), et il ne contient que des infos publiques. Section supprimée, ainsi que la promesse d'hébergement suisse qui traînait dans l'option « formulaire de première consultation ». Le « un seul interlocuteur » (vrai) a été rapatrié en fin de section « pourquoi un nouveau site ».
- **🔥 « Je les fais retirer » (faux avis) était une promesse intenable** — introduite par erreur en réécrivant (l'original disait « signalement »). **Google seul tranche.** Reformulé : repérer + argumenter le signalement.
- **Ne jamais graver ce que Wix lui coûte** : elle est la seule personne à connaître ce chiffre exactement. Le devis donne le nôtre (~30 CHF/an hébergement + domaine, tout compris) et la laisse comparer.
- **🐛 PIÈGE BUILD — template literal imbriqué dans un frontmatter `.astro`.** Écrire `` `...${encodeURIComponent(`...`)}` `` (un backtick dans l'interpolation d'un autre) **désynchronise le scanner esbuild** et fait échouer `npm run build` sur un `Unexpected "export"` **pointant une ligne sans rapport** (58:0). Coûte 30 min à diagnostiquer. Solution : extraire la chaîne interne dans une const. **Même famille que la balise script en commentaire** — le scanner relit les `.astro` en texte brut.
- **Warning `Duplicate id` du glob-loader** : artefact transitoire d'Astro 5, sans effet. Ne pas chercher de doublon.
- **Tranché — « Argument ROI » → « Le calcul »** (jargon de vendeur sur un doc médical). Emoji 🔒 du lock screen → `ri-lock-line`. Les deux points ouverts de la session précédente sont réglés.

**Commit :** [8c522b9] feat(devis): migre le template en blueprint et réécrit le devis Grange-Canal

---

## Etat session 2026-07-15 (soir) — Devis créé + schema devis étendu + fix dev server ✅

**Fait :** le devis complet, l'extension du schema `devis` pour le porter, la MAJ du case study Barber Concept, et deux fix transverses. Build vert (238 pages).

- **`cabinet-grange-canal.md`** — devis complet. Architecture voulue : **le problème avant le prix**. hero → diagnostic → offres → déroulé → conseil → 2 preuves → ROI → disclaimer → portfolio → next steps → corps markdown.
- **Schema `devis` étendu** (`src/content/config.ts`) : nouveau bloc **`audit`** (`moments` / `scores` / `screenshot` / `nuance`), flag **`showComparison`** (défaut `true`), et **`proof`** accepte désormais un objet **ou un tableau** (union Zod + normalisation dans le composant). Tout est rétrocompatible — les 2 anciens devis rendent comme avant.
- **`[slug].astro`** : rendu du bloc `audit` (inséré entre hero et offers), **`timeline` enfin rendue** (elle était destructurée ligne 21 et jamais affichée depuis janvier — la timeline de Constantin s'affiche maintenant), tableau comparatif conditionné à `showComparison`, boucle sur `proofs`, et style `.feature-group` pour les intertitres de features en MAJUSCULES.
- **Case study `barber-concept.md` mis à jour** : bloc `results` (GSC), `platform` → Astro (Webflow à l'origine), phase 3 « Optimisation SEO (en cours) » → « Refonte Astro et activation SEO (2026) » avec le récit réel, 2 learnings ajoutés, tags + Astro/SEO/GEO.
- **Fix bug dev server** (transverse, pas lié au devis) : `ContactForm.astro` avait `<script>` **dans un commentaire de frontmatter**. Le dep-scanner esbuild de Vite le prend pour une vraie balise ouvrante, avale le HTML qui suit et casse. **`npm run build` ne fait pas ce scan** → le build passait pendant que le dev était mort. Même piège corrigé dans `outils/checklist-15-signes-site-dort.astro`. **Ne jamais écrire `<script>` littéral dans un commentaire `.astro`.**

**Commit :** [96631a9] docs(handoff): wrap session 15.07 (soir) — portrait hero + bandeau de confiance

---

## Carte du code
> Mise a jour : 2026-07-15 (nuit)

| Fichier | Role |
|---------|------|
| `src/content/devis/cabinet-grange-canal.md` | Le devis — frontmatter (hero/audit/offers/advice/proof×2/roi/disclaimer/options/legal/portfolio) + corps markdown (31 avis, 3 angles, pourquoi un nouveau site). **Pas de `timeline` ni de `nextSteps`** : retirés du devis. |
| `src/pages/devis-client/[slug].astro` | Template blueprint, namespace `.dv-*`. Ordre en arc de proposition, eyebrows numérotés dynamiquement (`num()`), 3 CTA WhatsApp, lock screen préservé. Supporte encore `constat` / `comparison` / `postponed` / `timeline` / `nextSteps` pour de futurs devis. |
| `src/content/config.ts` | Schema `devis` : `audit`, `showComparison`, `proof` en union objet\|tableau + `caseStudy`, `options` (`price` optionnel), `legal`. |
| `.claude/commands/devis.md` | Générateur de futurs devis. **Remis à jour** : ordre des sections, champs, et les pièges du template. |
| `src/content/portfolio/barber-concept.md` | Case study MAJ : `results` GSC, refonte Astro 2026, learnings « trafic de marque ». |
| `src/components/ContactForm.astro` · `src/pages/outils/checklist-15-signes-site-dort.astro` | Fix `<script>` dans un commentaire (cassait `npm run dev`). Commit séparé [3d8423c]. |
| `public/devis/pagespeed-grange-canal.png` | Capture PageSpeed du site actuel (preuve à charge). |
| `public/devis/gsc-barber-concept.png` | Capture GSC Barber Concept 6 mois (preuve de résultat). |
| ~~`src/content/devis/constantin-*.md`~~ | **Supprimés** le 15.07 (périmés). Récupérables en git si besoin d'un exemple avec `comparison` / `constat`. |

### Decisions cles

- **Prix : 750 setup + 260/mois, engagement 6 mois puis mensuel.** Le setup est vendu **sous son coût** — c'est le récurrent qui le finance. Sans engagement, le loss-leader devient une perte. Le ROI du doc : `750 + (260 × 6) = 2'310 CHF` contre **un implant à 3'000** (reste 690).
- **Les 2 postes se cumulent, ce n'est pas un choix.** Nommés « Au démarrage : le nouveau site » et « Ensuite : vous n'avez plus à y penser ». Pas de badge `recommended` : sur des postes cumulatifs il fait croire à une alternative. `showComparison: false`.
- **Le doc est écrit pour une hygiéniste, pas pour un technicien.** Elle veut des patients pour ses dentistes et la paix mentale. Tout ce qui est technique, comptable (nombre de pages, nombre de publications) ou jargon IA est du **bruit pour elle** et a été retiré. Ce qu'on vend : plus de clients, une gestion simple, une meilleure réputation, automatiquement, sans qu'elle ait rien à faire.
- **Le « je » est réservé aux engagements.** Sujet des phrases = son cabinet (« Votre fiche vit chaque semaine », pas « Je la fais vivre »). Le « je » ne survit que là où il *est* l'argument : `disclaimer`, `advice`, `roi.result`, « je ne revendiquerai jamais », « que je sois encore là ou pas », « j'ai tapé les recherches moi-même ». Le supprimer partout transformerait le disclaimer en clause de CGV et détruirait l'argument « vous parlez directement à la personne qui fait le travail ».
- **Aucune promesse de résultat.** Le disclaimer et l'engagement se tiennent mutuellement — ajouter la promesse détruit les deux. ⚠️ **Le compteur de pages ayant été retiré du doc** (elle s'en fout), l'engagement concret est devenu plus flou : le doc s'engage sur « la page urgence existera, d'autres derrière, les avis reçoivent une réponse, la fiche est tenue ». À surveiller si elle demande du contractuel.
- **Cadence interne : ~12 pages en 6 mois**, chacune relue par un praticien (YMYL / LPMéd-SSO). **Ce chiffre n'est plus écrit dans le devis** — il reste la base économique du 260. Le brief initial disait « 2 articles/semaine » = 48 relectures praticien → intenable.
- **L'argument Wix est devenu un pilier, cadré sur l'indépendance et non sur l'économie** (renverse la décision du 15.07 soir). Pas « vous économisez 120 balles » (100/an contre 3'120/an invite au mauvais calcul), mais : l'abonnement est facturé par la plateforme, pas par nous ; ailleurs c'est ~30 CHF/an tout compris ; **et ça reste vrai le jour où elle part**. Répond en creux à l'objection lock-in.
- **Le 100/100 SEO est désamorcé par le label de la carte de score** (« tout est en ordre, le problème n'est pas là »), plus par un bloc `nuance` : trois paragraphes d'explication de plomberie étaient du bruit. Le bloc `audit.nuance` n'est plus utilisé par ce devis (le schema le supporte toujours).
- **Pas de style infomercial** (prix barré, valeur ancrée) : sur un cabinet de santé ça fait *baisser* la confiance et frotte avec les règles de com des professions médicales. La valeur perçue vient de **l'accumulation de preuves mesurées**.
- **Les demandes d'avis automatiques et les rappels de contrôle ne sont PAS chiffrés** : ça dépend du CRM/logiciel d'accueil du cabinet. C'est un diagnostic à part → section `options` (« À discuter ensemble »). Idem pour les **photos du cabinet** (demi-journée à caler entre deux patients, personnel à consulter).
- **L'audit Roso Squad est de la matière première, pas un livrable.** Il dit « tout est réparable dans Wix », ce qui contredit la refonte. On pioche ses preuves, on jette le reste. Signature **Jon Labs seule**.
- **Preuve Lécureux volontairement écartée** : les 328 clics / 16'500 impressions du devis Constantin sont les chiffres de l'incident du 03.07. Physio Pommier (santé) + Barber Concept (chiffres) font mieux le travail.

### Data mesurée (relevés du 15.07.2026)

| Source | Chiffre | Dans le devis ? |
|---|---|---|
| PageSpeed mobile dentiste-gc.ch | **47** perf · 92 access · 77 bonnes pratiques · **100 SEO** | ✅ 47 (capture) + 100 (score) |
| Pages vs Centre dentaire Chêne-Bourg | 9 vs ~160 | ✅ ⛔ à recompter |
| Pages parlant d'un soin précis | 0 | ✅ |
| Avis Google réels | **31** (confirmé par Jonathan — la note reste non relevée) | ✅ |
| Rang « dentiste ouvert aujourd'hui près de Chêne-Bougeries » | **3e** (test Jonathan, 15.07) | ⚠️ jamais gravé (géolocalisé, bouge) |
| Citations IA sur prompts de soin | 0/21 | ❌ retiré (jargon IA) |
| Score visibilité IA | 13/100 | ❌ retiré (jargon IA) |
| Adresses testées → 404 | 17 | ❌ retiré (illisible pour elle) |
| Physio Pommier (preuve) | 98 perf · 100 SEO · 25+ pages | ✅ 98 + 25+ |
| Barber Concept (preuve) | 15'000 clics · 571'000 impressions · position 6,8 | ✅ 15'000 + 571'000 |

**Barber Concept — l'histoire réelle** (à ne pas déformer) : site Webflow de 2023, **aucun SEO pendant 2 ans**, trafic uniquement de marque. Refonte **Astro début 2026**, contenu publié régulièrement **à partir de mai 2026** → la courbe décolle et ne redescend plus. C'est le **même dossier que le dentiste** (trafic de marque, rien sur les services) — c'est ce qui en fait la preuve, pas le total. La mention « cité dans les AI Overviews » a été **retirée du devis** (invérifiable, et jargon IA).

### Tarifs du cabinet (source : leur page tarifs, via l'audit)

Contrôle dès 120 · détartrage 140 (forfait ferme) · urgence dès 140 · carie 230-400 · racine dès 600 · **implant dès 3'000** · blanchiment dès 390 · couronne/facette dès 1'250 · valeur du point **1.10**.
→ Le ROI du devis s'appuie dessus : **2'310 CHF** sur 6 mois contre **un implant à 3'000**. Chiffres à eux, pas à nous.
