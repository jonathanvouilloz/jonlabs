---
project: jonlabs
status: needs_review
sources:
  - docs/brand/identity.md
  - docs/brand/message.md
  - docs/brand/proofs.md
  - docs/brand/themes.md
  - docs/seo/topical-map-systemes-agents-ia.md
  - docs/seo/research-2026-11-19/research-icp-douleurs.md
  - docs/seo/research-2026-11-19/inventaire-existant.md
  - docs/seo/research-2026-11-19/serp-ch.md
  - docs/seo-context.md (v2, remplacé par ce fichier)
validated_by: "[?]"
validated_on: "[?]"
review_due: "2026-12-31"
---

# Contexte SEO : jonlabs.ch

> Décisions d'acquisition du site. Aucun volume, aucune position, aucune SERP n'est figé ici : ils sont dans la topical map et dans `research-2026-11-19/`. Remplace `docs/seo-context.md`, dont le persona (site vieilli, SEO) datait d'avant le 09.11.2026.

## Situations de recherche

| Situation | Ce qu'il tape | Cluster |
|---|---|---|
| Il a vu passer un nom d'outil | le nom seul, « avis », « prix », « c'est quoi » | A, B |
| Il compare deux options | « X vs Y », « alternative » | A, B |
| Il veut un budget | « prix », « combien coûte », « tarif » + chatbot, agent, assistant | C |
| Il cherche quelqu'un | « agence IA », « consultant IA », « prestataire IA » + Suisse, Genève, Lausanne | C |
| Il s'inquiète pour ses données | « nLPD », « IA locale », « hébergé en Suisse », « charte IA » | D |
| Il veut le faire lui-même | « installer », « créer un agent IA » | A, C |

## Langage des clients

Il dit « assistant », « chatbot », « ChatGPT privé », « standard téléphonique », « répondre aux mails », « mes données ». Il ne dit pas « agent autonome », « RAG », « orchestration », « LLM ». Les mots de l'éditeur (« agent », « MCP », « skills ») s'expliquent à la première occurrence.

Verbatims d'études disponibles : `research-icp-douleurs.md` § 3. Limite : ce sont des répondants d'étude et des experts, aucun verbatim de dirigeant en phase d'achat n'a pu être lu.

## Questions fréquentes

- Qu'est-ce que c'est, et est-ce utilisable par une PME suisse ?
- Combien ça coûte à installer, puis par mois ?
- Où vont mes données ? Est-ce compatible avec la nLPD, avec le secret professionnel ?
- Faut-il un développeur ? Qui s'en occupe quand ça casse ?
- Chatbot ou agent : quelle différence pour moi ?
- Par quelle tâche commencer ?

## Objections et critères de décision

Objections et réponses autorisées : `docs/brand/message.md` § Objections. Critères observés dans la recherche : prix publié, hébergement des données, preuve chiffrée, interlocuteur local, absence d'engagement.

## Intentions et rôles des pages

| Type de page | Intention servie | Règle |
|---|---|---|
| Page d'offre (`/hermes`, `/consultant-ia`, `/tarifs`, pages service) | Transactionnelle | Vend. Ne définit pas l'outil en longueur |
| Article produit (un outil nommé) | Commerciale | Avis, prix, limites, verdict pour une PME suisse. Lie la page d'offre dans les 300 premiers mots |
| Article prix ou comparatif | Commerciale, transactionnelle | Tableau en CHF daté, verdict par profil |
| Article de procédure | Transactionnelle (« installer ») | La procédure, puis l'option « je vous l'installe » |
| Article de fond (nLPD, charte, garde-fous) | Informationnelle | Porte un bloc d'offre (formation, audit) |
| Pages ville et métier | Transactionnelle locale | Contenu réellement local, sinon pas de page (décision du 25.06.2026) |

Garde-fous de cannibalisation : topical map § Cannibalisation, et `inventaire-existant.md` § 5.

## Zones géographiques ou marchés

Suisse romande, Genève en premier. Pages ville IA : Lausanne, Annemasse, Gaillard. Les volumes de recherche sur les noms de produits sont plus élevés en France : un article produit capte aussi ce trafic, mais le verdict, les prix et le droit restent suisses.

## Expertise et E-E-A-T mobilisables

Auteur unique : Jonathan Vouilloz. Preuves, statuts et formulations autorisées : `docs/brand/proofs.md`. Par cluster : `docs/brand/themes.md`. Règle : pas d'expérience de première main, pas d'affirmation de test.

## CTA map

Source : `docs/brand/message.md` § CTA par intention. Le CTA de chaque article planifié est dans la topical map.

## Format d'article attendu

Réponse directe en tête, bloc « L'essentiel en bref », tableau ou grille de prix en CHF, section « pour une PME suisse », FAQ en H3, sources datées, un CTA. Motif : un aperçu IA est présent sur la grande majorité des SERP mesurées le 19.11.2026 (`serp-ch.md`).

## Cadence et mise en ligne

- Du 22.11 au 31.12.2026 : un article tous les deux jours, créneaux dans la topical map. Tout nouvel article prend le prochain créneau libre, jamais une date passée.
- La mise en ligne dépend de `pubDate` et de `draft` (`src/lib/blog.ts`). Le site est statique : l'article apparaît au rebuild qui suit sa date, déclenché chaque jour à 05:00 UTC par `.github/workflows/scheduled-publish.yml`. Ne pas supprimer ce workflow.
- Un article ne lie un article futur qu'à la publication de celui-ci.

## Indexation

- **IndexNow** (Bing, Yandex, Naver, Seznam) : actif. Clé publique `3a3dcfca6e988b8f78c69950c17b0800`, fichier de vérification dans `public/`. Une seule clé pour le domaine, ne pas en régénérer. Ping après déploiement, réponse attendue HTTP 202 :

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"www.jonlabs.ch","key":"3a3dcfca6e988b8f78c69950c17b0800",
       "keyLocation":"https://www.jonlabs.ch/3a3dcfca6e988b8f78c69950c17b0800.txt",
       "urlList":["https://www.jonlabs.ch/blog/<slug>"]}'
```

- **Google** : pas d'API pour un article. Sitemap, maillage, canonical, puis demande manuelle dans la Search Console si besoin (geste de Jonathan).

## Requêtes et sujets à exclure

SEO local, fiches Google, GEO, site vitrine, WordPress ; nouvel article « prix agent IA » ; « installer openclaw » en article. Liste : `docs/brand/themes.md` § Hors territoire.

## Hypothèses à valider par la recherche SEO

- Le trafic sur les noms de produits se convertit en demandes d'installation. Non mesuré.
- « prestataire ia suisse » : volume non mesuré.
- Mot-clé de la home (« développement IA sur mesure à Genève ») choisi sans volume ni SERP google.ch (décision du 17.11.2026).
- Les requêtes candidates de `research-icp-douleurs.md` § 4 n'ont aucun volume mesuré.
- Cibles chiffrées à 3 et 6 mois : non définies.
