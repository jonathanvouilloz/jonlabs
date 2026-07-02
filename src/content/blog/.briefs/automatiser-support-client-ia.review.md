# SEO Review : Automatiser le support client avec un agent IA

## Score : 14/18 criteres PASS

| # | Critere | Status | Detail |
|---|---------|--------|--------|
| 1 | Title | PASS | 46 caractères, keyword "automatiser...support client...agent IA" en tête, unique |
| 2 | Meta desc | PASS | 131 caractères, keyword principal présent. Pas de verbe d'action explicite (cohérent avec la convention déjà en place sur les articles soeurs du cluster, ex. automatiser-facturation-relances-ia) |
| 3 | H1 | PASS | frontmatter `h1` (84 car.) distinct du `title` (46 car.), keyword présent, corps markdown démarre en paragraphe (pas de doublon H1) |
| 4 | Hn hiérarchie | PASS | H2 x4 contenu + H2 FAQ + H2 Conclusion + H2 Sources, H3 x5 (FAQ). Aucun saut de niveau |
| 5 | Bold keywords | PASS | 13 bolds comptés (11 hors label TLDR + CTA). Max 1 bold/paragraphe respecté, aucun mot bold 2x, aucun bold en heading |
| 6 | Liens internes | PASS | 3 liens uniques dans le corps (pillar guide, workflows-vs-agents-ia-pme, consultant-ia) + CTA /contact. Toutes les cibles existent et sont vérifiées (routes confirmées : /guides, /consultant-ia, /contact, /blog/workflows-vs-agents-ia-pme). Ancres descriptives, aucune ancre vide, formulations variées |
| 7 | TLDR | PASS | Blockquote correct, 5 bullets, keyword principal inclus en bullet 1, aucun bold parasite dans les bullets (corrigé pendant la review) |
| 8 | Open Graph | PASS | og:type="article" appliqué automatiquement par le template `src/pages/blog/[slug].astro` |
| 9 | Schema | PASS | BlogPosting + Breadcrumb + FAQPage générés automatiquement depuis le frontmatter (5 faqs présents) |
| 10 | Keyword placement | PASS | Keyword principal dans title, h1, meta description, 100 premiers mots, et H2 #1 |
| 11 | Indexation | PASS (différé) | Pas de noindex/nofollow. `pubDate: 2026-08-24` > date système (2026-07-02) donc l'URL n'apparaît pas encore dans le sitemap/dist tant que la date n'est pas atteinte — comportement normal du site (cron rebuild), vérifié identique sur l'article soeur automatiser-facturation-relances-ia (pubDate 2026-08-17, même absence actuelle) |
| 12 | Patterns IA | PASS | Aucun em dash restant (corrigé), aucune formule IA générique détectée |
| 13 | Orthographe FR | PASS | Accents vérifiés sur corps, frontmatter, alt text |
| 14 | Formulation naturelle | PASS (corrigé) | 2 occurrences de forme brute bolded détectées et reformulées pendant la review : « chatbot vs agent IA support » → « Chatbot ou agent IA, la nuance change tout » ; « Quel outil support client IA » → « Choisir le bon outil de support client IA » |
| 15 | GEO — Réponse directe H2 | PASS | 4/4 H2 de contenu répondent en première phrase (chatbot/agent, canaux, escalade, outil) |
| 16 | GEO — Densité factuelle | FAIL | 1 donnée chiffrée précise (CHF 60-120/h) sur 1745 mots, très en dessous du seuil de 5/1000 mots. Cause : brief explicite « Aucune donnée chiffrée propriétaire pour cet article. » — aucune invention de chiffre effectuée, conformément à la règle anti-fabrication |
| 17 | GEO — LLM.txt | PASS | `public/llm.txt` présent à la racine |
| 18 | GEO — Citation + sources inline | FAIL | 0 citation d'expert attribuée, 0 lien source externe faisant autorité dans le corps (seuls des liens internes). Cause : brief indique explicitement « Aucune source externe fournie. Pas de citation à fabriquer. » — conforme à la règle « mieux vaut zéro citation qu'une citation inventée » |

## Actions correctives

Aucun bloquant critique. Deux FAIL restent en l'état par choix délibéré (anti-fabrication) :

1. **[Medium/High — GEO densité factuelle]** L'article ne peut pas atteindre le seuil GEO faute de données chiffrées fournies par le brief. Action recommandée pour un futur `/seo-refresh` : si des données terrain deviennent disponibles (ex. temps moyen de traitement d'un ticket, % de réduction du volume après automatisation), les intégrer alors. Ne pas fabriquer de chiffre dans l'intervalle.
2. **[Medium/High — GEO citation+sources]** Aucune source externe disponible dans le brief. Action recommandée : lors d'un futur refresh, ajouter une citation d'expert ou un lien source (étude, doc officiel nLPD, etc.) si une source fiable est identifiée.
3. **[Low — maillage]** Le brief d'origine mentionnait un lien latéral vers `/metiers/ia-commerce-retail`, requis par l'orchestrateur de production. Ce slug n'existe pas dans `src/data/metiers-ia.ts` (seuls `ia-fiduciaire` et `ia-agence-immobiliere` y sont définis) — le lien a été omis pour éviter un lien mort. À rétablir dès que la fiche métier "commerce/retail" sera créée.

## Conclusion

Aucun bloquant critique (title, H1, accents, build, indexation, patterns IA, ancres, hiérarchie Hn tous PASS). Les 2 FAIL restants (densité factuelle GEO, citation/sources GEO) sont documentés comme des limitations du brief source, pas des défauts de rédaction — l'article respecte la règle "jamais inventer" plutôt que de tricher sur ces critères. Statut : **publiable**, avec amélioration GEO possible lors d'un futur refresh si de nouvelles données/sources sont disponibles.
