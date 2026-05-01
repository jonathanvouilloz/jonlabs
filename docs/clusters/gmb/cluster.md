---
cluster: gmb
title: "Fiche Google My Business — calendrier éditorial"
project: jonlabs
brand: Jon Labs
total_articles: 24
months: 3
cadence: 2/semaine (lun + jeu)
start_date: 2026-05-04
end_date: 2026-07-23
service_cta:
  url: /services/gestion-fiche-google
  status: live
  fallback: /contact
geo_focus: Francophonie globale (FR-FR), spécialisations CH romande / Genève en mois 3
created_at: 2026-05-01
updated_at: 2026-05-01
states_legend:
  - todo: Pas encore commencé
  - keywords: Recherche keywords DataForSEO faite
  - serp: SERP gap analysis faite
  - brief: Brief SEO créé (.briefs/{slug}.md)
  - draft: Article rédigé (in progress)
  - enriched: Frontmatter + Schema + maillage retour
  - reviewed: Validé via /seo-review
  - published: Publié sur jonlabs.ch
---

# Cluster GMB — Calendrier éditorial complet

> Source de vérité opérationnelle pour le cluster "Fiche Google My Business".
> Mise à jour au fil de la production. Lu par humain + futurs runs `/calendar`.
>
> **Mois 1 validé** pour production immédiate (2026-05-04 → 2026-05-31).
> **Mois 2 et 3** validés conceptuellement, à confirmer au fil de l'eau (signaux GSC, opportunités émergentes).

## Données stratégiques

- **Marché de référence** : France (location 2250) — la francophonie totalise volumes utiles, le marché CH romand seul est trop étroit pour la plupart des KW.
- **Source DataForSEO** : `.seo-data/keywords-*.json` (16 topics scannés le 2026-05-01).
- **Sources éditoriales** :
  - `docs/clusters/gmb/sources/` (3 fichiers : SOP Claudia Tomina, Google Post définition/localrank, analyse-backlinks Whitespark 2026)
  - `docs/research/gmb-optimisation/` (21 notes), `docs/research/gmb-avis/` (12 notes), `docs/research/gmb-site-web/` (11 notes) — bibliothèque interne
  - Obsidian `30-Resources/SEO/Local/` (référence externe, sync via `/inbox`)
- **Voice** : Jon (1ère personne), accent franco-suisse, banned_words appliqués (cf. `docs/identity.md`)
- **CTA service** : `/services/gestion-fiche-google` (page à scaffolder en parallèle), fallback `/contact` ou `https://cal.com/jonathan-vouilloz/appel-de-bienvenue`

## Anti-cannibalisme

| Article existant jonlabs | Couvre | Cluster GMB | Couvre |
|---|---|---|---|
| `referencement-local-geneve` | 7 leviers SEO local Genève (vue ensemble) | Pillar M1.01 | La fiche GMB en profondeur, francophonie |
| `0a30joursgooglevisible` | Plan d'action 30j pour commerces genevois | M1.02 naïf | Comprendre comment ça marche (intent débutant) |
| `tarif-package-seo-local-suisse` | Pricing transparent gestion SEO local | — | (Service GMB = page service à créer) |
| `geo-seo-ia-2026` | GEO/AI search 6 moteurs | Pillar (mention AI Search) | — |

Aucun chevauchement direct détecté.

---

## Vue d'ensemble — 24 articles sur 3 mois

| # | Date | Slug | Type | Vol | Diff | État |
|---|---|---|---|---|---|---|
| **M1.01** | 2026-05-04 | fiche-google-my-business-guide-complet-2026 | Pillar | 5400 | 16 | reviewed |
| **M1.02** | 2026-05-07 | comment-apparaitre-google-maps-pme-debutant | Naïf | 140 | 0 | reviewed |
| **M1.03** | 2026-05-11 | creer-fiche-google-my-business-etape-par-etape | Setup | 590 | 10 | reviewed |
| **M1.04** | 2026-05-14 | optimiser-fiche-google-my-business-checklist-2026 | Optim | 260 | 4 | reviewed |
| **M1.05** | 2026-05-18 | google-post-business-profile-conversion | Posts | 480 | 3 | todo |
| **M1.06** | 2026-05-21 | qr-code-avis-google-collecte-pme | Avis | 1000 | 0 | todo |
| **M1.07** | 2026-05-25 | repondre-avis-google-modeles-2026 | Avis | 480 | 2 | todo |
| **M1.08** | 2026-05-28 | fiche-google-my-business-suspendue-recours | Diag | 110 | 0 | todo |
| **M2.09** | 2026-06-01 | supprimer-avis-google-fictif-methode | Avis | 1300 | 0 | todo |
| **M2.10** | 2026-06-04 | repondre-avis-negatif-google-modeles | Avis | 90 | 0 | todo |
| **M2.11** | 2026-06-08 | modele-reponse-avis-positif-google | Avis | 140 | 0 | todo |
| **M2.12** | 2026-06-11 | gestion-avis-google-pme-strategie | Avis (CTA) | 140 | 9 | todo |
| **M2.13** | 2026-06-15 | categorie-principale-fiche-google-business | Cocon | 10-50 | — | todo |
| **M2.14** | 2026-06-18 | description-fiche-google-my-business-750-caracteres | Cocon | 10-50 | — | todo |
| **M2.15** | 2026-06-22 | photos-fiche-google-my-business-strategie | Cocon | 10-50 | — | todo |
| **M2.16** | 2026-06-25 | verifier-fiche-google-my-business-methodes | Setup | 320 | 15 | todo |
| **M3.17** | 2026-06-29 | modifier-fiche-google-my-business-changement-info | Diag | 110 | 2 | todo |
| **M3.18** | 2026-07-02 | supprimer-fiche-google-my-business-fermeture | Diag | 140 | 2 | todo |
| **M3.19** | 2026-07-06 | backlinks-fiche-google-mythe-whitespark-2026 | Authority | 0 | — | todo |
| **M3.20** | 2026-07-09 | nap-coherent-fiche-google-site-web-romand | CH romand | <50 | — | todo |
| **M3.21** | 2026-07-13 | gestion-fiche-google-business-pme-romande | CH romand | <50 | — | todo |
| **M3.22** | 2026-07-16 | audit-fiche-google-business-geneve | Genève | <50 | — | todo |
| **M3.23** | 2026-07-20 | gestion-fiche-google-restaurant-pme | Niche secteur | <50 | — | todo |
| **M3.24** | 2026-07-23 | gestion-fiche-google-artisan-paysagiste | Niche secteur | <50 | — | todo |

---

# MOIS 1 — Fondations (validé pour production)

## M1.01 — Pillar — 2026-05-04

- **Slug** : `fiche-google-my-business-guide-complet-2026`
- **État** : todo
- **Type** : Pillar (englobe tout le cluster, lie aux 7 satellites M1)
- **Intent** : "Je veux comprendre globalement ma fiche GMB en 2026" — informational + navigational
- **Primary KW** : `fiche google my business` — 5,400/mo, difficulty 16, intent navigational
- **Cocon sémantique** :
  - `fiche d'établissement google` (5,400/mo, comp 4)
  - `mon entreprise plus` (480/mo, comp 2) — appellation officielle FR
  - `ma fiche google` (590/mo, comp 5)
  - `google business profile francais` (170/mo, comp 13)
  - `gérer mon entreprise` (390/mo, comp 32)
  - `fiche google business` (880/mo, comp 8)
- **Length cible** : 3,500-4,000 mots
- **Structure H2 indicative** :
  1. Qu'est-ce qu'une fiche Google My Business en 2026 (rebrand vers Google Business Profile)
  2. Pourquoi c'est central pour une PME (Whitespark 2026 : 32% du Local Pack + AI Search Visibility)
  3. Cycle de vie de la fiche : créer → optimiser → animer → mesurer (linke vers les 7 satellites M1)
  4. Le mythe des backlinks vers GBP (mini-section, développée dans M3.19)
  5. Les vrais signaux de ranking (mix qui marche en 2026)
  6. Erreurs typiques qui plombent une fiche (lien vers M1.08)
  7. Outils de suivi (mention LocalRanker, Whitespark, BrightLocal)
- **CTA** : `/services/gestion-fiche-google` (anchor : "Confier la gestion de ma fiche")
- **Maillage interne** :
  - Liens vers M1.02 → M1.08 (les 7 satellites)
  - Liens vers `referencement-local-geneve`, `geo-seo-ia-2026`
- **Sources prioritaires** : `analyse-backlinks-gbp-vs-site.md` (Whitespark LSRF 2026), Obsidian Optimisation GMB
- **Note** : ne pas reproduire les 7 leviers SEO local de `referencement-local-geneve` — focus *fiche elle-même*

## M1.02 — Naïf — 2026-05-07

- **Slug** : `comment-apparaitre-google-maps-pme-debutant`
- **État** : todo
- **Type** : Article naïf / intent débutant
- **Intent** : "J'ai un commerce, je veux apparaître sur Google Maps, je sais pas par où commencer"
- **Primary KW** : `comment apparaître sur google maps` — 140/mo, difficulty 0, intent navigational ⭐ quick win
- **Cocon sémantique** :
  - `mon entreprise sur google maps` (140/mo, comp 43)
  - `ma fiche google` (590/mo, comp 5)
  - `comment se référencer sur google` (320/mo, comp 47)
- **Length cible** : 2,000-2,500 mots
- **Structure H2 indicative** :
  1. C'est quoi "apparaître sur Google Maps" (vs résultats classiques, vs Local Pack)
  2. Pourquoi tu n'apparais pas (les 4 raisons typiques)
  3. Les 5 étapes concrètes pour exister sur Maps en 30 jours
  4. Combien de temps avant de voir des résultats
  5. Erreurs débutant à éviter
- **CTA** : `/services/gestion-fiche-google`
- **Maillage** : Pillar M1.01 + M1.03 (créer fiche)
- **Note** : ton ultra-pédagogique, zéro jargon SEO, parle au commerçant qui découvre

## M1.03 — Setup — 2026-05-11

- **Slug** : `creer-fiche-google-my-business-etape-par-etape`
- **État** : todo
- **Type** : Setup / how-to
- **Intent** : "Comment créer concrètement ma fiche GMB"
- **Primary KW** : `créer fiche google my business` — 590/mo, difficulty 10, intent navigational
- **Cocon sémantique** :
  - `créer une fiche google my business` (590/mo, comp 10)
  - `comment créer une fiche google my business` (90/mo, comp 23)
  - `création fiche google my business` (90/mo, comp 14)
  - `vérifier mon entreprise` (320/mo, comp 15)
  - `créer fiche d'établissement google` (210/mo, comp 7)
- **Length cible** : 2,500-3,000 mots
- **Structure H2 indicative** :
  1. Avant de créer : prérequis (compte Google, nom commercial, adresse)
  2. Étape 1 : aller sur business.google.com
  3. Étape 2 : choisir le type (commerce physique / zone de service / SaaS)
  4. Étape 3 : catégorie principale (le choix qui détermine 80% du ranking)
  5. Étape 4 : adresse vs zone de chalandise
  6. Étape 5 : NAP cohérent avec le site
  7. Étape 6 : vérification (carte postale / téléphone / email / vidéo)
  8. Étape 7 : premiers contenus (description, photos, services)
  9. Cas particuliers : multi-établissements, sans adresse physique, déménagement
- **CTA** : `/services/gestion-fiche-google` (anchor : "Faire créer ma fiche par un pro")
- **Maillage** : Pillar M1.01 + M1.04 (optim) + M2.16 (vérification approfondie)

## M1.04 — Optim — 2026-05-14

- **Slug** : `optimiser-fiche-google-my-business-checklist-2026`
- **État** : todo
- **Type** : Méta-checklist
- **Intent** : "J'ai une fiche, je veux la passer au niveau pro / mieux ranker"
- **Primary KW** : `optimiser fiche google my business` — 260/mo, difficulty 4, intent navigational
- **Cocon sémantique** :
  - `comment optimiser sa fiche google my business` (170/mo, comp 7)
  - `optimiser sa fiche google my business` (40/mo, comp 51)
  - Long-tail des sous-thèmes (catégorie, description, photos, attributs, services, horaires) — couverts ici en checklist
- **Length cible** : 3,000-3,500 mots
- **Structure H2 indicative** : checklist 25 points organisée par section
  1. Identité (nom, catégorie principale, secondaires)
  2. Contenu (description 750c, services natifs/perso, produits)
  3. Visuel (photos couverture, intérieur, équipe, vidéos, visite 360)
  4. Attributs (identité, accessibilité)
  5. Horaires (réguliers, exceptionnels, digitaux)
  6. Zone de chalandise vs adresse
  7. Posts cadence (lien vers M1.05)
  8. Avis & réponses (lien vers M1.06, M1.07)
  9. Maillage GBP ↔ site web (NAP, schema, lien vers landing)
- **CTA** : `/services/gestion-fiche-google` (anchor : "Audit complet de ma fiche")
- **Sources prioritaires** : 21 notes Obsidian "Optimisation GMB"
- **Maillage** : pillar + tous les satellites M1 + M2 (cocons sémantiques détaillés)

## M1.05 — Posts — 2026-05-18

- **Slug** : `google-post-business-profile-conversion`
- **État** : todo
- **Type** : Contenu / how-to copy
- **Intent** : "Comment écrire des Google Posts qui convertissent"
- **Primary KW** : `google post` — 480/mo, difficulty 3, intent navigational
- **Cocon sémantique** :
  - `post google my business` (90/mo, comp 9)
  - `format post google my business` (30/mo, comp 2)
  - `google my business post` (90/mo, comp 9)
  - `post my business on google` (90/mo, comp 9)
- **Length cible** : 2,500-3,000 mots
- **Structure H2 indicative** :
  1. Posts ≠ social media (mindset bottom-of-funnel)
  2. Les 3 types : nouveauté / offre / événement (cas d'usage)
  3. Framework copy "Value + Scarcity + Redemption" (premier 100-150c critiques)
  4. Choisir le bon CTA (Réserver / Commander / En savoir plus / Inscription)
  5. UTM tracking pour mesurer (Google UTM Builder)
  6. Cadence : pourquoi 1/semaine min, ce qui se passe quand tu spames
  7. Posts refusés : les 5 raisons (numéro tél, photo modifiée, etc.) et comment fix
  8. Multi-établissements : copier vers 20 fiches en 1 clic
- **CTA** : `/services/gestion-fiche-google` (anchor : "Confier la rédaction de mes posts")
- **Sources prioritaires** : SOP Claudia Tomina (`docs/clusters/gmb/sources/Google Business Profile Posts Best.txt`), `Google Post définition, localrank.txt`

## M1.06 — Avis collecte — 2026-05-21

- **Slug** : `qr-code-avis-google-collecte-pme`
- **État** : todo
- **Type** : Avis / méthode actionnable ⭐ quick win majeur
- **Intent** : "Comment récupérer plus d'avis Google facilement"
- **Primary KW** : `qr code avis google` — 1,000/mo, difficulty 0, intent navigational ⭐
- **Cocon sémantique** :
  - `lien avis google` (320/mo, comp 1)
  - `google avis client` (1,300/mo, comp 9) — primary alternatif
  - `gestion des avis google` (140/mo, comp 9) — match exact CTA service
  - `avis google qr code` (210/mo, comp 100)
  - `comment obtenir des avis google` (30/mo, comp 65)
- **Length cible** : 2,000-2,500 mots
- **Structure H2 indicative** :
  1. Pourquoi les avis font autant ranker (Whitespark 2026 : 20% du Local Pack)
  2. La règle de la vélocité (50% des avis < 30 jours)
  3. Générer son lien GMB court + son QR code (étapes pratiques)
  4. Les 5 supports physiques où l'afficher (table, ticket, carte de visite, vitrine, panneau)
  5. SMS / email post-prestation : modèles concrets
  6. Le sondage filtrant pré-avis (4-5★ → public Google / 1-3★ → SAV interne) — le truc qui change tout
  7. Ce que dit Google sur les incitations (pourquoi pas de cadeau)
  8. Outils (Trustmary, Birdeye, ou simple Typeform)
- **CTA** : `/services/gestion-fiche-google` (anchor : "Mettre en place un système d'avis automatique")
- **Sources prioritaires** : Obsidian Avis & réputation (Fréquence, Collecte, Faciliter le dépôt, Éviter les incitations)

## M1.07 — Avis réponses — 2026-05-25

- **Slug** : `repondre-avis-google-modeles-2026`
- **État** : todo
- **Type** : Avis / modèles ⭐ quick win
- **Intent** : "J'ai un avis (positif ou négatif), comment je réponds"
- **Primary KW** : `répondre avis google` — 480/mo, difficulty 2, intent commercial ⭐
- **Cocon sémantique** :
  - `comment répondre à un avis sur google` (260/mo, comp 2)
  - `comment repondre avis google` (30/mo, comp 5)
  - `modèle réponse avis positif` (140/mo, comp 0)
  - `répondre à un avis négatif` (90/mo, comp 0)
  - `répondre à un avis google négatif` (50/mo, comp 1)
  - `exemple réponse avis google positif` (70/mo, comp 1)
- **Length cible** : 2,500-3,000 mots
- **Structure H2 indicative** :
  1. Pourquoi répondre booste le ranking (impact LocalGuide + signal de fraîcheur)
  2. La règle des mots-clés service+ville (placer naturellement dans la réponse)
  3. 6 modèles avis positifs (par secteur)
  4. 6 modèles avis négatifs (du mécontent normal au troll)
  5. Avis 1-2★ injuste : la procédure de signalement
  6. Cadence : combien de temps pour répondre, faut-il répondre à tous
  7. Ce qu'il faut absolument éviter (réponses copier-coller, accuser le client, etc.)
- **CTA** : `/services/gestion-fiche-google` (anchor : "Confier la gestion des réponses")
- **Sources prioritaires** : Obsidian "Répondre aux avis", `gmb-review-responder` skill JLabs (architecture inspirante)

## M1.08 — Diagnostic — 2026-05-28

- **Slug** : `fiche-google-my-business-suspendue-recours`
- **État** : todo
- **Type** : Diagnostic / urgence ⭐ funnel-bottom
- **Intent** : urgence "ma fiche est suspendue, comment je récupère"
- **Primary KW** : `fiche google my business suspendue` — 110/mo, difficulty 0, intent navigational ⭐
- **Cocon sémantique** :
  - `supprimer fiche google my business` (140/mo, comp 2)
  - `modifier ma fiche google my business` (110/mo, comp 2)
  - `fiche google my business piratée`
  - `recours fiche google suspendue`
- **Length cible** : 2,000-2,500 mots
- **Structure H2 indicative** :
  1. Pourquoi Google suspend une fiche (les 7 causes principales)
  2. Comment savoir si ta fiche est suspendue (vs invisible vs dupliquée)
  3. La procédure de réclamation (formulaire, délais, format)
  4. Ce qu'il faut absolument joindre (preuves)
  5. Si la réclamation échoue (recours forum produit, contact Google)
  6. Comment ne plus se faire suspendre (pratiques à éviter)
- **CTA** : `/services/gestion-fiche-google` (anchor : "Faire débloquer ma fiche par un pro") — fort funnel-bottom
- **Sources prioritaires** : recherche complémentaire à faire (forums Google Business Profile, Whitespark guide)

---

# MOIS 2 — Approfondissement avis & cocon optim (à confirmer)

## M2.09 — Supprimer avis Google fictif — 2026-06-01
- **Slug** : `supprimer-avis-google-fictif-methode`
- **État** : todo | **Type** : Avis ⭐ quick win majeur
- **Intent** : "On a laissé un faux avis ou un avis injuste, comment je le fais retirer"
- **Primary KW** : `supprimer avis google` — 1,300/mo, difficulty 0, intent informational ⭐
- **Cocon** : `supprimer un avis google` (1,300), `comment supprimer un avis google` (590), `signaler un avis google`
- **Sources** : doc Google Reviews policy + retours d'expérience

## M2.10 — Répondre avis négatif — 2026-06-04
- **Slug** : `repondre-avis-negatif-google-modeles`
- **État** : todo | **Type** : Avis spécialisé
- **Intent** : "J'ai un avis 1-2 étoiles, comment je réponds sans aggraver"
- **Primary KW** : `répondre à un avis négatif` — 90/mo, difficulty 0
- **Cocon** : `répondre à un avis google négatif` (50), `comment répondre avis négatif`
- **Note** : article séparé du M1.07 car intent différent (urgence/crise vs panorama général)

## M2.11 — Modèle réponse avis positif — 2026-06-08
- **Slug** : `modele-reponse-avis-positif-google`
- **État** : todo | **Type** : Avis spécialisé
- **Intent** : "Je veux un modèle de réponse pour un avis positif"
- **Primary KW** : `modèle réponse avis positif` — 140/mo, difficulty 0
- **Cocon** : `exemple réponse avis google positif` (70), `écrire un avis positif exemple` (590 mais intent client)
- **Format** : 15 modèles concrets organisés par secteur

## M2.12 — Gestion avis Google PME stratégie — 2026-06-11
- **Slug** : `gestion-avis-google-pme-strategie`
- **État** : todo | **Type** : Avis pillar mineur (CTA fort)
- **Intent** : "Je veux structurer la gestion des avis comme un système"
- **Primary KW** : `gestion des avis google` — 140/mo, difficulty 9, intent commercial ⭐ MATCH CTA service
- **Note** : article funnel-bottom — la page service va probablement reprendre cet angle

## M2.13 — Catégorie principale fiche Google Business — 2026-06-15
- **Slug** : `categorie-principale-fiche-google-business`
- **État** : todo | **Type** : Cocon sémantique
- **Intent** : "Comment choisir la bonne catégorie principale"
- **Primary KW** : `catégorie google my business` (10/mo) — pas viable autonome, mais cocon nécessaire
- **Length cible** : 1,500-2,000 mots (format léger)
- **Note** : article asset autorité topical, pas pour le trafic direct

## M2.14 — Description fiche GMB 750c — 2026-06-18
- **Slug** : `description-fiche-google-my-business-750-caracteres`
- **État** : todo | **Type** : Cocon sémantique
- **Intent** : "Comment rédiger les 750 caractères de description"
- **Primary KW** : `description google my business` (10/mo) — cocon
- **Length** : 1,500-2,000 mots
- **Sources** : Obsidian "Description qualitative"

## M2.15 — Photos fiche GMB stratégie — 2026-06-22
- **Slug** : `photos-fiche-google-my-business-strategie`
- **État** : todo | **Type** : Cocon sémantique
- **Intent** : "Quelles photos publier sur ma fiche"
- **Primary KW** : `photos google my business` (10/mo) — cocon
- **Angle différenciant** : stat Google "fiches >100 photos = +520% itinéraires, +106% clics site"
- **Length** : 1,500-2,000 mots

## M2.16 — Vérifier fiche GMB méthodes — 2026-06-25
- **Slug** : `verifier-fiche-google-my-business-methodes`
- **État** : todo | **Type** : Setup avancé
- **Intent** : "Comment vérifier ma fiche (carte / téléphone / vidéo)"
- **Primary KW** : `vérifier mon entreprise` — 320/mo, difficulty 15
- **Cocon** : `verification fiche google`, `vidéo verification google business`

---

# MOIS 3 — Spécialisation & cas (à confirmer)

## M3.17 — Modifier fiche GMB info — 2026-06-29
- **Slug** : `modifier-fiche-google-my-business-changement-info`
- **État** : todo | **Type** : Diagnostic
- **Primary KW** : `modifier ma fiche google my business` — 110/mo, difficulty 2

## M3.18 — Supprimer fiche GMB fermeture — 2026-07-02
- **Slug** : `supprimer-fiche-google-my-business-fermeture`
- **État** : todo | **Type** : Diagnostic
- **Primary KW** : `supprimer fiche google my business` — 140/mo, difficulty 2

## M3.19 — Backlinks GMB mythe Whitespark — 2026-07-06
- **Slug** : `backlinks-fiche-google-mythe-whitespark-2026`
- **État** : todo | **Type** : Authority builder (0 vol mais angle différenciant fort)
- **Intent** : "Est-ce que les backlinks vers ma fiche GMB aident vraiment ?"
- **Source** : `docs/clusters/gmb/sources/analyse-backlinks-gbp-vs-site.md` (déjà rédigé en interne)
- **Note** : à reprendre aussi en post LinkedIn long format pour viralité

## M3.20 — NAP cohérent CH romande — 2026-07-09
- **Slug** : `nap-coherent-fiche-google-site-web-romand`
- **État** : todo | **Type** : Spécialisé CH romande
- **Intent** : "Comment maintenir un NAP cohérent sur GBP + site + annuaires CH (search.ch, local.ch, twixtel)"
- **Note** : premier article géo-spécialisé du cluster

## M3.21 — Gestion fiche Google PME romande — 2026-07-13
- **Slug** : `gestion-fiche-google-business-pme-romande`
- **État** : todo | **Type** : Spécialisé CH romande
- **Intent** : "Spécificités du marché CH romand pour la gestion de fiche"
- **Angles** : annuaires CH, search.ch, local.ch, contraintes linguistiques (FR/DE/IT), saisonnalité

## M3.22 — Audit fiche Google Genève — 2026-07-16
- **Slug** : `audit-fiche-google-business-geneve`
- **État** : todo | **Type** : Genève + funnel-bottom
- **Intent** : "Faire auditer ma fiche par un pro à Genève"
- **CTA** : très fort, lien direct vers service + cal.com

## M3.23 — Gestion fiche Google restaurant — 2026-07-20
- **Slug** : `gestion-fiche-google-restaurant-pme`
- **État** : todo | **Type** : Niche secteur
- **Spécificités** : posts featured (food & drink), événements live (jazz, dégustations), photos plats

## M3.24 — Gestion fiche Google artisan paysagiste — 2026-07-23
- **Slug** : `gestion-fiche-google-artisan-paysagiste`
- **État** : todo | **Type** : Niche secteur
- **Synergies** : croisement avec skill `paysagiste-audit` JLabs (cluster prospection paysagistes)

---

# Métriques de suivi (à compléter post-publication)

| Article | Date pub | Trafic 30j | Trafic 90j | Lead /audit | Notes |
|---|---|---|---|---|---|
| M1.01 | — | — | — | — | — |
| M1.02 | — | — | — | — | — |
| ... | | | | | |

À mettre à jour au fil des données GSC + analytics.

---

# Décisions stratégiques validées

1. **Géo cible** : francophonie globale (FR-FR) ; spécialisations CH romande / Genève en mois 3 (M3.20-M3.22)
2. **CTA service** : `/services/gestion-fiche-google` (page service à créer en parallèle au mois 1) ; fallback `/contact` ou `https://cal.com/jonathan-vouilloz/appel-de-bienvenue`
3. **1 article = 1 intention = 1 KW principal + cocon** (sauf pillar M1.01 qui englobe)
4. **Mois 1 validé pour production immédiate** (Jonathan, 2026-05-01)
5. **Mois 2-3 validés conceptuellement** ; à confirmer au fil de l'eau selon signaux GSC + opportunités émergentes
6. **Articles cocon sémantique (M2.13-15)** : format léger 1,500-2,000 mots, vocation autorité topical
7. **Article M3.19 mythe backlinks** : volume zéro mais conservé pour autorité ; reprise possible en LinkedIn long format
8. **Cadence** : 2 articles/semaine (lundi + jeudi) sur 12 semaines (S19 → S30)

# Pipeline de production

```
/seo-keywords  ✅ fait (16 topics scannés)
   ↓
/seo-serp      → à lancer par article (gap analysis SERP top 5)
   ↓
/seo-brief     → 1 invocation par article (slug → .briefs/{slug}.md)
   ↓
/seo-write     → rédaction depuis brief
   ↓
/humanizer     → passe anti-IA writing
   ↓
/seo-enrich    → frontmatter, schema, fichier final
   ↓
/seo-review    → validation
   ↓
/generate-cover → cover (preset moodboard)
   ↓
/publish-hub   → hub centralisé jonlabs
   ↓
/gmb-post      → 1-3 posts GMB par article publié
   ↓
/linkedin-weekly-posts → 1-3 posts LinkedIn par article
```

Le pipeline complet (research → publish → diffusion) est orchestrable via `@content-creator` mode CLUSTER (briefs séquentiels avec checkpoint, puis production parallèle via `@article-producer`).

---

**Mainteneur** : ce fichier doit être mis à jour à chaque changement d'état d'un article (todo → keywords → serp → brief → draft → enriched → reviewed → published). Lecture automatisée par `/calendar` au scan blog.
