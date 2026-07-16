# Brief SEO : Pivot page /services/referencement-local

> **Type** : refonte page service existante (pas un article blog)
> **Slug** : `/services/referencement-local` (gardé tel quel — règle universelle du chantier, jus SEO préservé)
> **Date** : 2026-05-20
> **Chantier parent** : `docs/chantier-seo-refactor.md` — Session 4

## Metadata
- Slug: referencement-local (URL `/services/referencement-local`)
- Slug rationale: gardé tel quel — page établie, jus SEO accumulé via redirects et liens internes existants
- Module: B (SEO Local)
- Target word count: page existante ~3500 mots, à conserver
- Primary keyword: référencement Genève
- Date: 2026-05-20
- Persona: Indépendant romand / dirigeant TPE-PME (30-55 ans, Genève/Vaud/Neuchâtel principalement) — 3 questions clés : combien ça coûte, combien de temps ça prend, est-ce que ça marche dans mon secteur
- Tonalité: direct, pragmatique, sans bullshit marketing
- Registre: **vouvoiement** (page service, register `formal` selon identity.md)
- Contexte chargé depuis: identity.md ✓ + seo-context.md ✓ + voice.md ✓
- Auteur : Jon (Jonathan Vouilloz, dev web freelance)

## Décisions cadrées

- **Pas de mot "agence"** dans Title / H1 / Meta principale → positionnement freelance/indé assumé
- **"Agence" autorisé dans le contenu** : FAQ "Pourquoi pas une agence SEO classique ?", section "Alternative à une agence" — pour capter la query commerciale via long-tail/proximité sémantique
- **Garder "SEO" dans contextes techniques** : balises Schema.org, mentions techniques (différence SEO/Ads, Schema.org, Core Web Vitals, audit SEO), formulaire id `seo-form`
- **Sweep "SEO → référencement"** sur les passages éditoriaux non-techniques (titres de sections, pain points, accroches)

## Snippet recommandé (variante "Freelance local")

- **Title**: `Référencement à Genève — Freelance SEO local PME romandes` (58 car.) ✓
- **H1**: `Référencement à Genève pour PME : passez d'invisible à visible sur Google` (74 car.) — naturel, jamais identique au title
- **Meta description**: `Référencement local pour PME à Genève et Suisse romande. Freelance SEO transparent, outils Google gratuits, position #1 prouvée en 5 mois. Audit gratuit.` (155 car.) ✓

## Snippet variantes

### Variante "Expertise (E-E-A-T)"
- **Title**: `Référencement local Genève — Cas réel #1 sur Google en 5 mois` (60 car.) ✓
- **H1**: `Référencement à Genève : une méthode prouvée par un cas concret en 5 mois`
- **Meta description**: `Spécialiste référencement local à Genève. Méthode éprouvée sur le cas Lécureux : position #1 en 5 mois dans une niche juridique concurrentielle.` (148 car.) ✓

### Variante "Local (GEO) — alternative aux agences"
- **Title**: `Référencement Genève PME — Freelance indé, sans contrat 12 mois` (60 car.) ✓
- **H1**: `Vos clients vous cherchent à Genève. Est-ce qu'ils vous trouvent sur Google ?` (existante — gardée)
- **Meta description**: `Référencement local pour PME romandes : pas de contrat 12 mois, outils Google gratuits, rapports clairs. Alternative aux agences SEO à Genève. Audit gratuit.` (158 car. — légèrement trop, à raccourcir)

**Variante recommandée** : **"Freelance local"** — meilleur équilibre primary keyword (`référencement Genève`) + différenciateur (`freelance`) + signal local (`Suisse romande`) + preuve sociale implicite (PME romandes).

## Keyword Cluster

| Rôle | Keyword (query brut) | Volume CH | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | référencement Genève | ~10-30 (estimé, data manquante) | Title, H1, meta, intro | référencement à Genève / référencement local à Genève |
| Secondaire | agence référencement Genève | 110 ⭐ | FAQ "Pourquoi pas une agence", body section "alternative", H3 différenciation | alternative aux agences de référencement à Genève / au lieu d'une agence de référencement à Genève |
| Secondaire | référencement local Genève | 0 (mais sémantiquement central) | H2 "référencement local", body, schema serviceType | référencement local à Genève / référencement local en Suisse romande |
| Secondaire | référencement local Suisse romande | 0 (mais expansion géo utile) | H2 zones, footer page, intro | référencement local en Suisse romande |
| Secondaire | freelance SEO Genève | ~5-10 (estimé) | Title, intro, section "différence freelance vs agence" | freelance SEO à Genève / référenceur freelance à Genève |
| Secondaire | référencer site Google | 10 | FAQ, contenu pédagogique méthode | référencer son site sur Google |
| Long-tail | combien coûte référencement Genève | ~5 (estimé) | FAQ pricing, section "investissement" | combien coûte le référencement à Genève |
| Long-tail | référencement local PME Suisse | ~5 (estimé) | Body, accroches sections | référencement local pour PME en Suisse romande |
| Long-tail | comment être premier sur Google Genève | ~5 (estimé) | H2 méthode, FAQ | comment apparaître en première position sur Google à Genève |
| Related | SEO local Genève | déjà couvert par fiche-google-my-business | Lien interne sortant | SEO local à Genève (lien vers /services/gestion-fiche-google) |
| Related | Google Business Profile Genève | déjà couvert | Lien interne sortant | fiche Google Business Profile (lien vers /services/gestion-fiche-google) |

**Rappel writer** : utiliser systématiquement la colonne "Formulation naturelle" dans la prose. Forme brute admise dans Title / H1 / H2 / Meta / schema / alt text.

## Structure H2/H3 cible (alignée sur la page existante)

La page actuelle a déjà une structure forte. Le pivot consiste à **réécrire les titres et accroches de section**, pas à restructurer le squelette. Mapping section ↔ keywords :

### Hero
- Keywords cibles: référencement Genève (principal), freelance SEO Genève
- Contenu attendu: garder l'accroche "Vos clients vous cherchent sur Google. Est-ce qu'ils vous trouvent ?" ; ajuster sous-titre pour mentionner "référencement local" + "PME romandes" ; mentionner explicitement "freelance" comme différenciateur

### H2: Vous vous reconnaissez ? (Pain points — existant)
- Keywords cibles: référencement Genève (implicit), pain points
- Contenu attendu: 4 cards existantes. Réécrire la card "Le SEO fait peur" → "Le référencement vous semble opaque" (sweep vocab). Garder les 3 autres avec micro-ajustements.

### H2: De invisible à #1 sur Google en 5 mois (Cas Lécureux — existant)
- Keywords cibles: référencement Genève, cas réel SEO Genève
- Contenu attendu: garder la structure (stats grid + contexte). Renommer le H2 si possible vers "Étude de cas : référencement réussi à Genève en 5 mois" (plus SEO).

### H2: Comment je vous fais remonter sur Google (Méthode 4 phases — existant)
- Keywords cibles: référencer site Google, méthode référencement local
- Contenu attendu: garder les 4 phases. Vérifier que les descriptions parlent de "référencement" plutôt que "SEO" sauf contexte technique légitime.

### H2: Ce que vous obtenez (Résultats — existant)
- Keywords cibles: résultats référencement Genève, visibilité Google Maps
- Contenu attendu: garder les 6 cards. La card "Visibilité Google Maps & Search" reste pertinente.

### H2: 3 approches selon votre situation (Formules — existant)
- Keywords cibles: audit référencement Genève, accompagnement référencement
- Contenu attendu: renommer les 3 cards : "Audit SEO" → "Audit de référencement" ; "SEO + Site web" → "Référencement + Site web" ; "Accompagnement SEO" → "Accompagnement référencement". (Garder "SEO" dans le texte de description si pertinent techniquement.)

### H2: Des tarifs clairs (Pricing — existant)
- Keywords cibles: prix référencement Genève, tarif référencement PME
- Contenu attendu: garder les 3 plans (Présence / Visibilité / Autorité). Vérifier que les bullets parlent de "référencement" plutôt que "SEO".

### H2: Questions fréquentes (FAQ — existant)
- Keywords cibles: long-tail variées (combien coûte, est-ce que ça marche, garantie position 1, etc.)
- Contenu attendu: garder les 10 FAQ E-E-A-T. **Action ciblée** : reformuler les Q en parlant de "référencement" (sauf "Quelle différence entre SEO et Google Ads" où le terme SEO doit rester pour matcher la requête de l'utilisateur).
- **FAQ critique à muscler** : "Pourquoi pas une agence SEO classique ?" — c'est là qu'on capte le keyword "agence référencement Genève" (110/mois). Enrichir : structure "freelance vs agence", coûts comparés, transparence, durée d'engagement.

### H2: Un freelance référencement à Genève, ça change quoi ? (Local — existant, à reformuler)
- Keywords cibles: freelance SEO Genève, référenceur freelance Genève, alternative agence
- Contenu attendu: garder les advantages (échanges facilités, réalité business, réactivité, réseau local). **Reformuler le H2** : "Un expert SEO à Genève" → "Un freelance référencement à Genève". Renforcer l'angle "alternative à une agence".

### H2: Prêt à devenir visible sur Google ? (CTA + Form — existant)
- Keywords cibles: audit référencement gratuit, contact référenceur Genève
- Contenu attendu: garder le formulaire. Vérifier le subject Web3Forms : "Demande référencement local SEO - Jon Labs" → garder ou simplifier en "Demande référencement local - Jon Labs".

## Maillage interne (liens sortants)

| Ancre | Cible | Section |
|---|---|---|
| gestion de fiche Google Business Profile | `/services/gestion-fiche-google` | Section Résultats (card "Fiche Google Business optimisée") + FAQ "C'est quoi le SEO local exactement ?" |
| création de site web optimisé pour le référencement | `/services/creation-site-web` | Section "3 approches" (card "Référencement + Site web") |
| voir tous les services | `/services` | Section "Pas encore prêt" (déjà présent, à conserver) |
| consulter la page tarifs pour le détail | `/tarifs` | Section Pricing (déjà présent, à conserver) |
| étude de cas Léo Lécureux | `/portfolio/leo-lecureux-seo` | Section Cas (déjà présent, à conserver) |
| guide complet de la fiche Google My Business | `/blog/fiche-google-my-business-guide-complet-2026` | FAQ "C'est quoi le SEO local exactement ?" (compléter le lien existant vers apparaitre-chatgpt) |
| optimiser sa fiche Google My Business | `/blog/optimiser-fiche-google-my-business-checklist-2026` | Section Résultats ou FAQ |

**Minimum** : 2-3 liens / 1000 mots. La page fait ~3500 mots → 7-10 liens internes minimum. Liste actuelle = 7 → conforme.

## Image briefs

**Aucune image à générer** : la page est full HTML/CSS (mockup Google fictif, icônes Remix Icon, pas d'images bitmap). Garder tel quel.

## Sources (E-E-A-T)

- Cas Léo Lécureux (`/portfolio/leo-lecureux-seo`) — métrique propre, vérifiable dans GSC
- DataForSEO 2026-05-20 — volumes keywords (location_code=2756 Switzerland, lang=fr) → `.seo-data/keywords-*.json`
- Audit terrain 50 sites d'indépendants romands 2026 (référence `docs/identity.md` eeat_proof)

## Objectif business

- **Primary** : générer des leads via le formulaire de contact intégré (audit gratuit) pour des prestations de référencement local
- **Secondary** : capturer le trafic du keyword commercial "agence référencement Genève" (110/mois) en se positionnant comme alternative freelance moins chère et plus transparente
- **Long-term** : asseoir l'autorité E-E-A-T sur "référencement Genève" et "référencement local Suisse romande" — keywords où le site est actuellement positionné mais sans volume

## Angle unique / POV (Mode A — fourni)

**"L'alternative freelance aux agences SEO genevoises : moins cher, plus transparent, sans contrat 12 mois, avec un cas réel #1 en 5 mois."**

- Capitalise sur le positionnement freelance/indé (cf. identity.md positioning)
- Différencie face aux agences locales (Antistatique, etc.) qui dominent le keyword "agence référencement Genève"
- S'appuie sur la preuve sociale Lécureux (chiffrée, vérifiable)
- Cohérent avec le ton "sans bullshit marketing" de la marque

## Gap concurrent identifié

> Note : pas de SERP scan formel via /seo-serp pour ce keyword. Analyse basée sur connaissance marché + concurrents documentés dans `docs/seo-context.md`.

Les agences SEO genevoises (positionnées sur "agence référencement Genève") :
- **Coûtent plus cher** (forfaits annuels typiques 1500-5000 CHF/mois)
- **Imposent des contrats 12 mois minimum**
- **Utilisent des outils payants** (SEMrush, Ahrefs) facturés au client
- **Sous-traitent souvent** le travail technique
- **Manquent de transparence** sur les méthodes (boîte noire)

Concurrents directs identifiés dans `docs/seo-context.md` :
- **Justin Cappelle** : freelance romand, ton direct → gap SEO local non couvert
- **Mivelaz Consulting** : couvre SEO Suisse romande mais ton agence
- **Paul Vengeons** (Paris) : a publié une page "Consultant SEO Suisse" pour capter ce marché → opportunité de le détrôner avec ancrage terrain réel

**Gap exploité** : Aucun freelance romand ne combine simultanément :
1. Cas client documenté avec métriques GSC vérifiables
2. Méthode publique (audit terrain 50 sites)
3. Transparence tarifaire (3 plans affichés, pas de "sur devis" caché)
4. Positionnement "alternative aux agences" assumé

Date de l'analyse : 2026-05-20

## CTA cible

- **Lead chaud** : `#contact` (ancre interne) — "Obtenir mon audit gratuit" — déjà placé dans Hero, Pricing, Section Form
- **Lead tiède** : `https://cal.com/jonathan-vouilloz/appel-de-bienvenue` — "Prendre rendez-vous sur Cal.com" — déjà placé en bas de form
- **Nurturing** : `/services/gestion-fiche-google` (cross-sell complémentaire SEO local + GMB)
- **Note** : le CTA hot global `/services/refonte-site-web` configuré dans seo-context.md est invalide (page en draft soft Session 3) — le formulaire interne reste la conversion principale

## Données brutes (à conserver dans la page)

- Cas Lécureux : #1 position, 20.4k impressions, 485 clics, 2.4% CTR, 100/100 score SEO, 1 client signé via le site
- 5 mois pour atteindre position #1
- 46% des recherches Google sont locales (chiffre déjà cité dans hero)
- 800+ cabinets d'avocats à Genève (contexte concurrence cas Lécureux)
- 3 plans : Présence 1'490 CHF, Visibilité 2'490 CHF, Autorité sur devis
- Zones couvertes : Genève (primaire), Vaud / Valais / Neuchâtel / Fribourg (secondaires), toute Suisse romande (tertiaire)

## Banned words (rappel)

Ne pas utiliser : crucial, innovant, l'ère du numérique, dans un monde où, solutions, expertise reconnue, game-changer, disruptif, pivot, synergies, digitalisation, transformation digitale, écosystème, paradigme.

---

## Sortie du brief — prochaine étape

Brief sauvegardé dans `docs/snapshots/2026-05-20-brief-pivot-referencement-local.md`.

**Action suivante** : appliquer manuellement le brief à `src/pages/services/referencement-local.astro` + `src/data/schema.ts` (Phase 2 du plan).
