---
project: jonlabs
extends: voice
status: provisional
corpus_status: partiel (3 articles relus sur 49 ; aucun article écrit entièrement à la main n'est identifié)
sources:
  - src/content/blog/agent-ia-repondre-mails-clients.md
  - src/content/blog/meilleurs-vps-hermes-agent-suisse.md
  - src/content/blog/openbot-souverainete-self-hosted.md
  - docs/project/prd.md § 5
  - ../atelier/_brand/patte-ecrite.md (patte sociale, lecture seule)
  - ../brand/principes-ecriture.md (canon)
validated_on: "[?]"
review_due: "2026-12-31"
---

# Patte écrite : articles de jonlabs.ch

> La patte de `atelier/_brand/patte-ecrite.md` a été extraite de posts X et LinkedIn : elle ne s'applique pas telle quelle à un article. Ce document décrit ce qui s'observe dans les articles publiés. Il reste provisoire tant que Jonathan n'a pas désigné les articles qu'il considère comme les plus proches de sa façon d'écrire (BRAND-INPUT-002).

## Règle principale

La substance vient de Jon (un cas réel, une mesure, une décision qu'il a prise). Le texte ne la lisse pas. Un article qui pourrait être publié à l'identique par un concurrent est raté, même s'il est juste.

## Rythme et syntaxe

- De vraies phrases qui s'enchaînent, reliées (« et », « mais », « donc », « parce que »). Pas une ligne par idée.
- Paragraphes de 2 à 4 phrases. Aucun pavé.
- Une phrase courte isolée seulement quand elle porte un constat.
- Premier paragraphe : le sujet en gras, la réponse, puis ce que l'article contient.

## Vocabulaire et images

- Mots courants. Un terme technique est expliqué dans la phrase où il apparaît.
- Les personnes sont nommées par leur rôle ou leur prénom public (« Meaw, qui tient le camp »), jamais « l'utilisateur ».
- Les montants gardent leur devise réelle ($ pour une facture d'API, CHF pour un prix suisse) et leur date.

## Ouvertures

Réponse directe à la requête, sans préambule. Puis le bloc « L'essentiel en bref » (3 à 5 puces qui contiennent chacune un fait). Quand l'article suit une vidéo ou un autre article, une phrase le dit.

## Transitions

Le H2 annonce ce que la section apporte, avec le mot-clé quand il tombe naturellement. La première phrase d'une section donne la conclusion de la section.

## Humour et émotion

Rare dans un article. Une remarque en aparté passe ; la vanne appuyée est réservée aux canaux sociaux.

## Fins et CTA

Pas de conclusion qui récapitule tout. Une section de sources datées, puis un seul CTA. Pas de « dites-moi en commentaire ».

## Niveau de correction

Orthographe et typographie suisses soignées (CHF 1'500, dates en jj.mm.aaaa). On ne polit pas jusqu'au texte lisse : un « je ne l'ai pas testé » vaut mieux qu'une phrase prudente.

## Test avant publication

1. Chaque section contient-elle un fait vérifiable (cas, chiffre, prix daté, source) ?
2. Le texte dit-il ce qui n'a pas été testé ?
3. Une phrase pourrait-elle être signée par une agence quelconque ? Si oui, la réécrire ou la couper.
4. Lu à voix haute, le texte coule-t-il, ou tombe-t-il au métronome ?
5. Passage par `humanizer` puis `seo-review`.

## Corpus à enrichir

- Articles de référence à désigner par Jonathan (BRAND-INPUT-002).
- Transcriptions vidéo dans `atelier/_resources/transcripts/` : source de formulations orales réelles pour les articles qui suivent une vidéo.
