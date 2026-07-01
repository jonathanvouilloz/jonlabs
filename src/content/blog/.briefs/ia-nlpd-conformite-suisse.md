# Brief SEO : IA et nLPD — automatiser en conformité en Suisse

## Metadata
- Slug: ia-nlpd-conformite-suisse
- Slug rationale: descriptif, contient les entités "ia" + "nlpd" + "conformite" + "suisse", aligné avec le lien déjà câblé en dur dans `src/data/metiers-ia.ts` (articlesConnexes de `metiers/ia-fiduciaire`, href `/blog/ia-nlpd-conformite-suisse`) — ce slug est donc contractuel, ne pas le modifier
- Page type: article
- Module: B (informationnel / trust — pas de comparatif de prix, angle conformité + réassurance)
- Target word count: 1400-1800
- Primary keyword: IA nLPD entreprise suisse / IA protection des données Suisse
- pubDate: 2026-08-24 (lundi — créneau cadence confirmé libre, prochain après 2026-08-21)
- category: automatisation
- Persona: Indépendant romand / dirigeant TPE-PME (30-55 ans). Sensible à la question "où vont mes données" dès qu'on parle d'IA, sans être juriste. Secteurs à forte sensibilité représentés dans le cluster : fiduciaires, cabinets (avocats/médecins). Ce qu'il veut savoir : est-ce que je risque quelque chose en utilisant un agent IA, où sont hébergées mes données, qu'est-ce qui doit rester en Suisse.
- Tonalite: direct, pragmatique, sans bullshit marketing — pédagogique sur un sujet perçu comme aride, pas de posture d'avocat
- Registre: tutoiement (blog)
- Contexte charge depuis: docs/identity.md + docs/voice.md + docs/seo-context.md + docs/topical-map-consultant-ia.md (Cluster G, entrée #9, score 5/9 + Complétude ⚡, angle suisse qu'un concurrent FR ne peut pas tenir) ✓
- Recherche keyword: aucun .seo-data/keywords-ia-nlpd-*.json disponible — sujet de niche réglementaire, volume probablement faible mais intent trust/E-E-A-T fort, cohérent avec le score topical map (Outer + Complétude)
- Disclaimer obligatoire dans l'article : ceci n'est pas un conseil juridique, renvoyer vers un juriste/spécialiste conformité pour un cas précis — cohérent avec le garde-fou anti-hallucination du pipeline (pas de faux conseil juridique déguisé en fait établi)

## Snippet recommandé
- Title: "IA et nLPD : automatiser en conformité en Suisse" (49 car.)
- H1: "IA et nLPD : ce que la conformité suisse change vraiment quand tu automatises avec l'IA" (86 car.)
- Meta description: "Où vont tes données quand tu utilises un agent IA ? Ce que la nLPD suisse impose vraiment aux PME, sans jargon juridique inutile." (132 car.)

## Snippet variantes
- **Expertise (E-E-A-T)** — Title: "Conformité nLPD et IA : le guide pour PME suisses" (50 car.) / Meta: "Registre des traitements, hébergement des données, sous-traitance IA : ce que la nLPD suisse demande concrètement à ta PME." (124 car.)
- **Solution (Douleur)** — Title: "Ton agent IA est-il conforme à la nLPD suisse ?" (49 car.) / Meta: "La plupart des outils IA hébergent tes données à l'étranger. Voici ce que la loi suisse impose et comment rester conforme." (124 car.)
- **Local (GEO)** — Title: "IA souveraine et nLPD : automatiser en Suisse romande" (55 car.) / Meta: "Automatiser avec l'IA en Suisse romande sans exposer tes données : hébergement, nLPD, et ce qu'un prestataire suisse garantit." (127 car.)

Recommandation : variante **recommandé** (title neutre "IA et nLPD") pour rester cohérent avec le lien déjà câblé en dur dans `metiers-ia.ts` qui utilise ce titre exact — un changement de title ici casserait la cohérence de l'ancre déjà écrite ailleurs sur le site.

## Keyword Cluster
| Role | Keyword (query brut) | Volume | Placement | Formulation naturelle (prose) |
|---|---|---|---|---|
| **Principal** | IA nLPD entreprise suisse | non chiffré (niche réglementaire) | Title, H1, intro, meta | l'IA et la nLPD pour une entreprise suisse |
| **Principal (bis)** | IA protection des données Suisse | non chiffré | H2, body | la protection des données et l'IA en Suisse |
| Secondaire | agent IA conformité nLPD | — | H2 dédié, body | un agent IA conforme à la nLPD |
| Secondaire | hébergement données Suisse IA | — | H2 hébergement | l'hébergement des données en Suisse pour un agent IA |
| Secondaire | IA souveraine PME | — | H2 IA souveraine | une IA souveraine pour une PME |
| Secondaire | données personnelles Suisse IA | — | intro, body | les données personnelles et l'IA en Suisse |
| Long-tail | sous-traitant IA nLPD | — | H2 "ce qui change concrètement" | un sous-traitant IA au sens de la nLPD |
| Long-tail | transfert données étranger nLPD | — | H2 hébergement | le transfert de données à l'étranger sous la nLPD |
| Long-tail | IA nLPD fiduciaire cabinet | — | body, vers la fin | la nLPD pour une fiduciaire ou un cabinet qui utilise l'IA |

**Rappel au writer** : utiliser la colonne "Formulation naturelle" dans le corps, jamais la forme brute du query.

## Structure

### H2: La nLPD, c'est quoi concrètement quand tu utilises l'IA dans ta PME
Keywords: IA nLPD entreprise suisse, IA protection des données Suisse
Contenu attendu: Définition courte et non-jargonneuse de la nLPD (loi fédérale sur la protection des données, révisée, en vigueur depuis le 1er septembre 2023). Poser d'emblée le disclaimer : ceci n'est pas un conseil juridique, c'est un cadrage pratique pour un dirigeant non-juriste, à valider avec un spécialiste pour un cas précis. Expliquer pourquoi ça concerne directement l'IA : dès qu'un agent IA lit, trie ou traite des données qui identifient une personne (client, prospect, employé), la nLPD s'applique.

### H2: Où vont vraiment tes données quand tu utilises un agent IA
Keywords: hébergement données Suisse IA, données personnelles Suisse IA
Contenu attendu: Expliquer le chemin réel d'une donnée dans un agent IA classique (l'email ou le document part vers l'API d'un modèle de langage, potentiellement hébergé à l'étranger, avant de revenir sous forme de réponse). Ne pas dramatiser mais rendre concret ce que la plupart des dirigeants ignorent : utiliser ChatGPT ou une API US pour traiter des données clients n'est pas neutre au regard de la nLPD si aucune garantie de transfert n'est en place.

### H2: Ce qui doit rester en Suisse (ou en UE) et ce qui peut sortir
Keywords: transfert données étranger nLPD, sous-traitant IA nLPD
Contenu attendu: Poser la logique simple : la nLPD encadre le transfert de données vers un pays qui n'offre pas un niveau de protection jugé adéquat, pas une interdiction générale d'utiliser des outils étrangers. Expliquer les leviers concrets pour une PME : choisir un hébergement en Suisse ou en UE quand la donnée est sensible, formaliser un contrat de sous-traitance avec le prestataire IA, et distinguer les cas à faible enjeu (brouillon de texte générique) des cas à enjeu réel (dossier client nominatif, données de santé, données financières).

### H2: Agents IA et nLPD, ce que ça change concrètement pour ta PME
Keywords: agent IA conformité nLPD
Contenu attendu: Traduire la loi en actions pratiques pour un déploiement d'agent IA : tenir un registre des traitements à jour (même simplifié pour une PME), documenter les cas où l'agent traite des données sensibles, prévoir une procédure si une violation de données survient (notification au Préposé fédéral en cas de risque élevé pour la personne concernée), et intégrer le principe de "privacy by design" dès le cadrage du projet plutôt qu'en rustine après coup.

### H2: L'IA souveraine, une alternative concrète pour les PME qui veulent tout garder en interne
Keywords: IA souveraine PME
Contenu attendu: Présenter l'option d'un agent IA open source auto-hébergé (cohérent avec Hermes Agent et OpenClaw déjà documentés dans le cluster) comme alternative pour une PME qui veut garder la main sur l'hébergement de bout en bout, plutôt que de dépendre d'une API tierce à l'étranger. Rester honnête : ce choix demande un peu plus de mise en place initiale, mais donne un contrôle total sur la localisation des données.

### H2: Pourquoi l'ancrage suisse d'un prestataire IA change la donne en matière de conformité
Keywords: IA nLPD fiduciaire cabinet
Contenu attendu: Angle différenciant central de l'article. Sans nommer de concurrent, expliquer qu'un prestataire réellement basé en Suisse peut signer un contrat de sous-traitance sous droit suisse, connaît la nLPD par pratique et pas par lecture à distance, et n'a pas besoin de gérer une double conformité (droit français + droit suisse) comme un prestataire transfrontalier qui facture depuis l'étranger tout en ciblant des clients romands. Rejoint directement l'angle déjà posé dans `docs/seo-context.md` (gap concurrentiel face à hgnn.io, basé côté français).

### H2: Check-list conformité avant de déployer un agent IA dans ta PME
Keywords: agent IA conformité nLPD, IA nLPD entreprise suisse
Contenu attendu: Liste actionnable de 5-6 points de vérification avant mise en production (registre des traitements à jour, savoir où sont hébergées les données de l'outil IA choisi, contrat de sous-traitance signé si prestataire externe, procédure de notification en cas d'incident, information des personnes concernées si nécessaire, distinction claire entre données sensibles et données à faible enjeu). Chaque point doit être formulé comme une action, pas une définition.

## Maillage interne (liens sortants)
| Ancre | Cible | Section |
|---|---|---|
| guide complet sur l'automatisation dans ta PME suisse | /blog/automatisation-pme-suisse-guide-complet | Intro (lien obligatoire, hub info) |
| IA pour les fiduciaires romandes | /metiers/ia-fiduciaire | H2 "Ce qui doit rester en Suisse" ou H2 "Pourquoi l'ancrage suisse change la donne" |
| Hermes Agent | /blog/hermes-agent-ia-pme | H2 "L'IA souveraine, une alternative concrète" |
| accompagnement pour cadrer ton agent IA en conformité | /consultant-ia | Conclusion (CTA principal) |

> Note maillage : ne pas lier `/metiers/ia-cabinet` (page pas confirmée en ligne au moment du brief) ni de page géo — cet article reste Outer/trust, le lien transactionnel principal est `/consultant-ia` en conclusion.

## Image Briefs

### Cover
- placement: cover
- type: schema
- subject: schéma épuré du parcours d'une donnée entre une PME suisse et un agent IA, avec un marqueur "Suisse / UE" vs "hors zone"
- description: Visuel brutaliste (bordures épaisses, accents vert menthe/jaune) représentant un document ou une donnée qui part d'un poste de travail vers un agent IA, avec une distinction visuelle claire entre hébergement local (coché, rassurant) et hébergement flou à l'étranger. Pas de cadenas générique ni d'iconographie "hacker" clichée.
- alt_text: "Schéma de conformité nLPD pour un agent IA en entreprise suisse : hébergement des données et sous-traitance"
- aspect_ratio: 16:9

> Note image : conformément à la consigne de production, AUCUNE image inline (`![...]`) dans le corps de l'article. Seule la cover ci-dessus est autorisée. Pas d'Image 2/3/4 dans ce brief pour ne laisser aucune tentation d'insérer une référence non générée.

## Sources
Aucune source externe citée par URL précise pour éviter toute hallucination de référence légale exacte. Faits généraux mobilisables (connaissance publique, non spécifique à une source unique, à formuler avec prudence et sans citer de faux article de loi précis) : la nLPD (loi fédérale sur la protection des données révisée) est en vigueur en Suisse depuis le 1er septembre 2023 ; elle encadre notamment le registre des traitements, l'analyse d'impact pour les traitements à risque élevé, la notification des violations de données au Préposé fédéral à la protection des données et à la transparence (PFPDT), et le transfert de données vers l'étranger selon le niveau de protection du pays destinataire. **Le writer doit inclure un disclaimer explicite indiquant que l'article n'est pas un conseil juridique** et renvoyer vers un spécialiste conformité pour un cas précis — ne pas inventer de numéro d'article de loi ni de montant d'amende non vérifié.

## Objectif business
Capter la requête de trust/conformité "IA et nLPD en Suisse" que **aucun concurrent français ne peut occuper avec la même crédibilité** (hgnn.io, basé côté français, ne peut pas revendiquer un ancrage juridique suisse réel). Nourrit l'E-E-A-T du silo IA et sert de page de réassurance pour les secteurs sensibles du cluster Métiers (fiduciaire, cabinet), déjà câblée en dur comme ressource connexe dans `src/data/metiers-ia.ts`.

## Angle unique / POV
Mode A (fourni par l'utilisateur) : la conformité suisse comme différenciant structurel qu'un concurrent français ne peut pas tenir. L'article ne vend pas la peur réglementaire, il démystifie un sujet perçu comme aride avec un ton pragmatique, et positionne l'ancrage suisse réel (pas transfrontalier) comme un avantage concret et vérifiable, pas un argument marketing vague.

## Gap concurrent identifié
hgnn.io (concurrent IA frontal identifié dans `docs/seo-context.md`), basé côté français (Grenoble/Annecy/Lyon), cible Genève en transfrontalier mais ne peut pas revendiquer le même ancrage juridique et opérationnel suisse. Aucun concurrent romand direct (Cappelle, Vixal, Mivelaz, We Acend) ne traite le sujet nLPD appliqué à l'IA. C'est un terrain de contenu vide et un axe de trust que seul un prestataire réellement suisse peut occuper avec crédibilité.
Date de l'analyse : 2026-06-30 (issue de docs/seo-context.md, section concurrents, mise à jour topical map)

## CTA cible
- Lead chaud: /consultant-ia — "Cadrer ton agent IA en conformité" — placer en conclusion
- Lead tiède: /metiers/ia-fiduciaire — lien contextuel dans le corps pour le lecteur du secteur fiduciaire
- Nurturing: articles du cluster déjà publiés (`/blog/agent-ia-entreprise-cas-usage`, `/blog/prix-agent-ia-automatisation-suisse`) si publiés au moment de la rédaction

## Données brutes
- nLPD en vigueur depuis le 1er septembre 2023 (fait public connu, à formuler prudemment, sans citer d'article de loi précis)
- Coût horaire chargé PME romande déjà établi dans le cluster : CHF 60-90/h (référence de contexte si besoin, usage secondaire ici)
- Aucune fourchette de prix propre à cet article — ce n'est pas un article Module A prix

## Citations exploitables (GEO — Quotation Addition)
Aucune citation d'expert externe fournie. Le writer peut mentionner, sans citation précise, l'existence du Préposé fédéral à la protection des données et à la transparence (PFPDT) comme autorité de référence en Suisse, sans lui attribuer de citation directe non vérifiée.
