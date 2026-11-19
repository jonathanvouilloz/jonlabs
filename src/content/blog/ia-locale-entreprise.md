---
title: "IA locale en entreprise : machine, serveur suisse ou API"
h1: "IA locale et LLM local en entreprise : sur sa machine, sur un serveur suisse ou en API"
description: "Un LLM sur ta machine, sur un serveur loué en Suisse ou via une API suisse : modèles, matériel, prix du 19.11.2026, limites. Demande un cadrage."
pubDate: 2026-12-16
author: "Jon"
image:
  url: "/images/blog/ia-locale-entreprise.webp"
  alt: "Illustration éditoriale : statue antique gardant un petit boîtier sur un socle, un fil vert le relie à un nuage lointain"
category: "automatisation"
tags:
  - "ia-locale"
  - "llm-local"
  - "apertus"
  - "mistral"
  - "souverainete"
  - "outils-ia"
featured: false
draft: false
readingTime: 12
slug: "ia-locale-entreprise"
faqs:
  - question: "Une IA locale est-elle gratuite ?"
    answer: "Le modèle et le logiciel peuvent l'être : Apertus, Mistral Small 4 et Ministral 3 sont sous licence Apache 2.0, llama.cpp sous licence MIT, sans licence à payer. Restent la machine ou la location, ton temps et la maintenance : une IA locale gratuite à télécharger coûte quand même à faire tourner."
  - question: "Une IA locale fonctionne-t-elle sans connexion ?"
    answer: "Sur une machine, c'est documenté pour LM Studio : l'application fonctionne hors ligne une fois le modèle téléchargé, la recherche de modèles exige une connexion. Ollama propose aussi des modèles hébergés, optionnels. Un serveur loué ou une API exigent une connexion par définition."
  - question: "Quel LLM local choisir pour le français ?"
    answer: "Les fiches de Mistral Small 4 et de Ministral 3 14B listent le français parmi leurs langues ; celle d'Apertus ne le nomme pas. Je n'ai testé la qualité en français d'aucun d'eux, et aucune source lue ne la classe."
---

Une **IA locale** en entreprise peut désigner trois montages : un modèle qui tourne sur une machine dans tes murs, sur un serveur avec carte graphique loué en Suisse, ou derrière l'API d'un hébergeur suisse qui opère des modèles ouverts. « Local » ne garantit pas la même chose dans les trois cas, et la facture change aussi.

Je n'ai déployé ni testé aucun modèle de langage en local. Cet article analyse des fiches de modèles, des documentations d'outils et des pages de prix lues le 19.11.2026 : aucun chiffre ne vient d'un essai. La seule chose que je fais tourner moi-même sur mon ordinateur est de la reconnaissance vocale, avec ma dictée [Barnaby](/portfolio/barnaby), pas un modèle de langage, et je n'en tire rien pour la suite. Si tu préfères cadrer ton cas avec un [consultant IA à Genève](/consultant-ia), on part de tes données et de l'endroit où elles doivent rester.

> **L'essentiel en bref**
>
> - Trois voies : une machine dans tes murs, un serveur à carte graphique loué, une API de modèles ouverts chez un hébergeur suisse. « Local » n'y veut pas dire la même chose.
> - Apertus 1.5, Mistral Small 4 et Ministral 3 14B sont sous licence Apache 2.0 ; leurs fiches publient la taille des poids, pas la mémoire qu'il faut pour les faire tourner.
> - Au 19.11.2026, Infomaniak loue une carte L40S de 48 Go à partir de 0,7617 € l'heure hors TVA, et facture Ministral 3 14B CHF 0.30 / 0.40 par million de tokens en API.
> - Non publié dans mes sources : la mémoire nécessaire pour Apertus, le débit en tokens par seconde, le prix d'une machine achetée, les prix GPU d'Exoscale.

## IA locale ou LLM local : trois voies, et ce que « local » veut dire pour chacune

Un **LLM local** est un modèle de langage qui tourne sur une infrastructure que tu choisis, au lieu du service d'un éditeur comme OpenAI. Le mot recouvre trois montages.

| Voie | Où tourne le modèle | Ce que « local » veut dire | Ce que ça ne veut pas dire | Exemple publié |
|---|---|---|---|---|
| Machine dans tes murs | Ton ordinateur ou ton serveur, avec LM Studio, Ollama ou llama.cpp | Les requêtes restent sur la machine | Sans connexion, sauvegardé, sécurisé, maintenu | LM Studio, Ollama |
| Serveur loué avec carte graphique | La machine d'un hébergeur, louée à l'heure | Le pays du serveur, déclaré par l'hébergeur | Dans tes murs, ou géré pour toi | Infomaniak GPU, Exoscale |
| API de modèles ouverts | Les serveurs de l'hébergeur, qui opère le modèle | Des centres de données en Suisse, selon l'hébergeur | Ton modèle, dans la version que tu choisis | Infomaniak AI Services |

**Une machine dans tes murs.** Un logiciel charge un modèle téléchargé et répond sur place. La documentation de LM Studio l'écrit : « Nothing you enter into LM Studio when chatting with LLMs leaves your device ». L'application fonctionne hors ligne une fois les fichiers du modèle obtenus, mais la recherche de modèles exige une connexion. Ollama écrit : « We don't see your prompts or data when you run locally », et propose aussi des modèles hébergés, optionnels et désactivables. Faire tourner un LLM en local veut donc dire « sur la machine » ; la sauvegarde et la sécurité restent ton affaire.

**Un serveur loué.** Un hébergeur te loue une machine avec carte graphique, à l'heure. La page GPU d'Infomaniak l'annonce « Hosted in Switzerland ». « Local » désigne ici le pays du serveur ; installer le modèle, le mettre à jour et le surveiller reste à ta charge. L'accès peut aussi prendre du temps : selon sa page de prix, Exoscale soumet ses instances GPU à une validation de compte, accordée en priorité aux entreprises établies après un contrôle manuel.

**Une API d'un hébergeur suisse.** Tu n'installes rien : tu envoies tes requêtes à un service qui fait tourner des modèles ouverts et facture au million de tokens (un token est un fragment de mot). Selon sa page AI Tools, Infomaniak fait tourner ses services d'IA et de GPU dans ses centres de données en Suisse, et les requêtes n'y sont ni enregistrées ni utilisées pour entraîner des modèles. Ce sont des déclarations de l'éditeur, je n'ai lu aucun audit. Le catalogue et les versions restent ceux d'Infomaniak, et sa page de prix indique que l'entraînement sur tes propres données n'est pas proposé.

Avec OpenBot, j'ai montré que [self-hosted ne veut pas dire souverain](/blog/openbot-souverainete-self-hosted). Pour un modèle, la question est la même : où tourne-t-il, et qui peut le changer ou le retirer ?

Si tu cherches plutôt un assistant prêt à l'emploi, comme Euria ou le Swiss AI Assistant de Swisscom, vois mon [comparatif des IA suisses](/blog/assistant-ia-suisse-comparatif).

## Modèles pour un LLM local en entreprise : Apertus, Mistral et ce que leurs fiches publient

Pour un **LLM local open source** utilisable en entreprise, j'ai retenu trois exemples sous licence Apache 2.0, qui permet l'usage commercial : Apertus, le modèle suisse, et deux modèles de Mistral. Ce que publient leurs fiches Hugging Face, relevé le 19.11.2026 :

| Modèle | Éditeur | Paramètres | Poids publiés | Contexte | Langues listées | API Infomaniak, CHF par million de tokens HT (entrée / sortie) |
|---|---|---|---|---|---|---|
| Apertus 1.5 8B | EPFL, ETH Zurich, CSCS | 8 milliards | 18,4 Go (bfloat16) | jusqu'à 262 144 tokens | « une grande variété », français non nommé | non relevé |
| Apertus 1.5 70B | EPFL, ETH Zurich, CSCS | 70 milliards | 144,6 Go (bfloat16) | jusqu'à 262 144 tokens | « une grande variété », français non nommé | 0.70 / 2.50 |
| Mistral Small 4 119B | Mistral | 119 milliards, dont 6,5 activés par token | 120,9 Go (FP8) | 256k | 24, dont le français | 0.20 / 0.75 |
| Ministral 3 14B Instruct | Mistral | 14 milliards | 15,7 Go | non relevé | 11, dont le français | 0.30 / 0.40 |

D'après l'EPFL, Apertus 1.5 a été publié le 24.07.2026 par l'EPFL, l'ETH Zurich et le CSCS, comme modèle « fully open ». Il accepte aussi des images et de l'audio en entrée. Télécharger les poids demande d'accepter la licence et une politique d'usage, et de partager ton e-mail et ton nom d'utilisateur avec les auteurs. Sa fiche parle d'une « large variety of languages » sans en donner la liste, et ne nomme pas le français. Je n'en conclus rien sur sa qualité en français, ni dans un sens ni dans l'autre.

L'EPFL cite deux utilisateurs : le canton du Tessin, qui fait tourner la première version pour un service interne de traduction, et un média bâlois qui héberge le modèle localement dans sa rédaction. L'EPFL ne détaille pas leur matériel.

Des versions quantifiées d'Apertus 1.5 (compressées pour peser moins) existent sur Hugging Face, en FP8, NVFP4, MLX 4 bits ou GGUF texte seul. Des comptes tiers les publient, pas l'équipe Apertus, et je n'ai pas évalué leur qualité. La fiche nomme Transformers et vLLM comme logiciels pris en charge, avec des versions modifiées en attendant l'intégration officielle. Le support d'Apertus 1.5 par Ollama, LM Studio ou llama.cpp : non vérifié.

Et **le meilleur LLM local** ? Aucune source que j'ai lue ne classe ces modèles entre eux, ni face aux modèles fermés d'OpenAI ou d'Anthropic. La fiche d'Apertus annonce une « performance comparable to other models of similar size », affirmation de l'éditeur entre modèles de taille proche, et l'EPFL écrit que le projet ne cherche pas à concurrencer les modèles de pointe des entreprises privées. Sans essai sur tes propres documents, je n'ai aucun gagnant à désigner.

## Matériel pour une IA locale : ce que les documentations disent, et comment estimer le reste

Pour choisir **un ordinateur pour faire tourner une IA en local**, voici ce que les documentations publient, relevé le 19.11.2026 :

- **LM Studio sur Mac** : puce Apple silicon, macOS 14, 16 Go de RAM recommandés pour l'application ; un Mac de 8 Go reste possible avec de petits modèles et des contextes modestes.
- **LM Studio sur Windows** : processeur compatible AVX2, 16 Go de RAM et au moins 4 Go de mémoire graphique dédiée (VRAM) recommandés.
- **Ollama** : un contexte de 4096 tokens par défaut ; la mémoire requise augmente avec le nombre de requêtes parallèles multiplié par la longueur du contexte.
- **Ministral 3 14B** : sa fiche écrit qu'il peut être « deployed locally, capable of fitting in 24GB of VRAM in FP8, and less if further quantized ».
- **Apertus 1.5** : la taille des poids (18,4 Go et 144,6 Go), et un exemple de commande qui répartit le 70B sur quatre cartes (`--tensor-parallel-size 4`), donné comme exemple et pas comme minimum, avec la consigne d'adapter les paramètres à ton matériel.

Pas publié dans les pages lues, donc pas écrit ici : la RAM ou la carte graphique qu'il faut pour Apertus 1.5, le débit en tokens par seconde d'un couple modèle et machine, le prix d'un serveur acheté, sa consommation.

Deux chiffres publiés ne font pas une exigence. Les poids seuls d'Apertus 8B pèsent 18,4 Go, et une carte L4 louée chez Infomaniak affiche 24 Go de VRAM ; la place restante pour le contexte et les requêtes parallèles n'est publiée nulle part. Les poids d'Apertus 70B, 144,6 Go, dépassent la mémoire de chaque carte listée par Infomaniak (80 Go au plus), et je n'ai pas relevé ses instances à plusieurs cartes.

Avant d'**installer un LLM en local**, quatre repères pour estimer sans inventer de chiffre :

1. La taille du fichier des poids est un plancher de mémoire, jamais le total.
2. Le contexte et les requêtes parallèles s'ajoutent, comme l'écrit la documentation d'Ollama.
3. Une version quantifiée pèse moins, la fiche de Ministral le dit ; ce qu'elle perd en qualité se vérifie sur tes documents.
4. Le débit se mesure sur ta machine, avec tes documents.

Pour **une IA locale sur un PC** de bureau, je suivrais cet ordre : choisir le modèle, le mesurer sur la machine, acheter en dernier.

## Prix d'une IA locale sur serveur suisse : GPU loué à l'heure ou API au million de tokens

Pour héberger un LLM dans une PME, mes sources donnent deux prix publics : la carte graphique louée à l'heure, et l'API au million de tokens. Le prix d'une machine achetée n'est publié dans aucune page lue.

Instances GPU d'Infomaniak, relevées le 19.11.2026, prix « à partir de », par heure, hors TVA :

| Carte | VRAM | Prix horaire affiché |
|---|---|---|
| A2 | 16 Go | 0,1626 € |
| T4 | 16 Go | 0,243 € |
| L4 | 24 Go | 0,2924 € |
| L40S | 48 Go | 0,7617 € |
| A100 | 40 Go | 1,5667 € |
| H100 | 80 Go | pas de prix public (« Contact our team ») |

Infomaniak affiche ces tarifs en euros, même sur sa page en français, alors que ses prix d'API sont en francs. Je n'ai pas lu ce que le tarif horaire inclut (processeur, mémoire vive, disque), et ton temps d'administration n'y est pas.

Exoscale liste sur sa page GPU des cartes de 12 à 288 Go de mémoire chacune, et des zones dont deux en Suisse, CH-GVA-2 et CH-DK-2, sans que j'aie pu établir quelle carte est proposée où. Ses prix GPU n'ont pas été relevés : la page de prix s'est affichée sans montants lors de ma lecture.

**Exemple, sur hypothèses.** La carte tourne 24 heures sur 24, soit 720 heures par mois, et le montant est converti au taux de référence de la BCE du 18.11.2026 (EUR/CHF 0,9243). Montants arrondis et indicatifs : ni mesure ni devis. Le calcul ne dit pas quel modèle tient sur quelle carte.

| Carte | Calcul | Par mois, en euros | Par mois, en francs (indicatif) |
|---|---|---|---|
| L4 | 720 × 0,2924 € | environ 211 € | environ CHF 195 |
| L40S | 720 × 0,7617 € | environ 548 € | environ CHF 507 |
| A100 | 720 × 1,5667 € | environ 1 128 € | environ CHF 1'043 |

Allumer la carte moins longtemps réduirait le montant, à condition que l'hébergeur ne facture pas une machine arrêtée, ce que je n'ai pas vérifié.

Côté API, je reprends les volumes imaginés dans mon article sur [un assistant interne sur tes documents](/blog/assistant-ia-interne-entreprise) : 4 millions de tokens en entrée et 0,5 million en sortie par mois. Le calcul complet et le RAG y sont expliqués, je ne les refais pas.

| Modèle par l'API d'Infomaniak | Calcul | Par mois, HT |
|---|---|---|
| Mistral Small 4 119B | 4 × 0.20 + 0,5 × 0.75 | CHF 1.18 |
| Ministral 3 14B | 4 × 0.30 + 0,5 × 0.40 | CHF 1.40 |
| Apertus 1.5 70B | 4 × 0.70 + 0,5 × 2.50 | CHF 4.05 |

Côte à côte, sur ces hypothèses : environ CHF 507 par mois pour une L40S louée en continu, CHF 1.40 pour Ministral 3 14B par l'API au volume imaginé. Ce qui fait pencher la décision :

- **Le volume.** L'API se paie au token, la location à l'heure, que la carte serve ou non. Plus le volume monte, plus l'écart se resserre ; aucune source lue ne donne le point d'équilibre, qui dépend de ton usage réel.
- **La confidentialité.** Si tes données ne doivent pas quitter ta machine, ni l'API ni le serveur loué ne conviennent : il reste la machine dans tes murs.
- **La disponibilité et la version.** Avec l'API, tu suis le catalogue de l'hébergeur. Un serveur à toi garde la version que tu as figée, et c'est à toi de le garder joignable.

Je n'affiche aucun prix d'installation d'un modèle local. Sur ma page [tarifs](/tarifs), la ligne la plus proche est l'agent IA : dès CHF 1'500, sur devis, avec un fonctionnement dès CHF 15 par mois payé par le client, 20 % à la commande et 80 % à la livraison, sans contrat de durée. Elle ne vaut pas prix d'un modèle local.

## Ce que l'IA locale ne fait pas : qualité, maintenance, sécurité et outils autour du modèle

Faire tourner le modèle chez toi règle la question du lieu. Quatre sujets restent ouverts.

**La qualité.** Aucune source lue ne compare ces modèles aux modèles fermés sur les tâches d'une PME. La fiche d'Apertus prévient que le modèle peut se tromper : « These models should be used as assistive tools rather than definitive sources of information. » Les limites documentées portent sur le contexte et les langues. Un essai sur 20 de tes vrais documents t'en apprendra plus qu'un classement.

**La maintenance.** Ollama se met à jour tout seul sur macOS et Windows ; sur Linux, il faut relancer un script. La fiche d'Apertus 1.5 demande des versions modifiées de vLLM et de Transformers en attendant l'intégration officielle, et le mode « thinking » n'y prend pas en charge l'appel d'outils. Suivre ces changements revient à qui installe le modèle.

**La sécurité.** Par défaut, Ollama écoute sur 127.0.0.1:11434, c'est-à-dire sur la machine seule ; l'ouvrir au réseau passe par la variable `OLLAMA_HOST`. Une machine qui sert tout le bureau devient un serveur à protéger, sauvegarder et mettre à jour. « Local » ne dit rien non plus de ta conformité : pour le cadre légal, lis [IA et nLPD en Suisse](/blog/ia-nlpd-conformite-suisse), qui ne remplace pas l'avis d'un juriste.

**Les outils autour du modèle.** Un modèle seul n'a ni accès à tes documents, ni droits par utilisateur, ni interface, ni validation humaine avant d'agir. llama.cpp, sous licence MIT, fournit un serveur compatible avec l'API d'OpenAI : une brique, sans plus. Pour un agent IA qui s'appuie sur un modèle local, ces couches s'ajoutent comme pour n'importe quel agent. La validation humaine est détaillée dans les [garde-fous d'un agent IA](/blog/garde-fous-ia-validations-audit), les briques d'un assistant sur documents dans [mon article sur l'assistant interne](/blog/assistant-ia-interne-entreprise).

## FAQ IA locale : gratuité, hors ligne, modèle en français

### Une IA locale est-elle gratuite ?

Le modèle et le logiciel peuvent l'être : Apertus, Mistral Small 4 et Ministral 3 sont sous licence Apache 2.0, llama.cpp sous licence MIT, sans licence à payer. Restent la machine ou la location, ton temps et la maintenance : une IA locale gratuite à télécharger coûte quand même à faire tourner.

### Une IA locale fonctionne-t-elle sans connexion ?

Sur une machine, c'est documenté pour LM Studio : l'application fonctionne hors ligne une fois le modèle téléchargé, la recherche de modèles exige une connexion. Ollama propose aussi des modèles hébergés, optionnels. Un serveur loué ou une API exigent une connexion par définition.

### Quel LLM local choisir pour le français ?

Les fiches de Mistral Small 4 et de Ministral 3 14B listent le français parmi leurs langues ; celle d'Apertus ne le nomme pas. Je n'ai testé la qualité en français d'aucun d'eux, et aucune source lue ne la classe.

Trois questions encore, en bref :

- Apertus est-il un assistant prêt à l'emploi ? Non, un modèle (voir le comparatif).
- Peut-on brancher un LLM local sur ses documents ? Oui, avec des outils autour du modèle.
- Jon Labs installe-t-il un LLM local ? Je n'en ai déployé aucun et n'affiche aucun prix pour ça ; parlons-en en cadrage.

---

## Conclusion : IA locale en PME suisse, quelle voie choisir selon ton besoin

Mon avis, sans mesure derrière :

- Si l'enjeu est de ne pas envoyer tes données à un éditeur étranger, l'API d'un hébergeur suisse ou un assistant d'éditeur suisse suffit souvent, pour quelques francs par mois dans l'exemple.
- La machine dans tes murs se justifie quand les données ne doivent pas quitter le poste, ou quand le modèle doit rester figé.
- Le serveur loué en continu est le plus difficile à justifier à petit volume.

Avant tout achat, fais un essai sur 20 de tes documents. Ma page [consultant IA](/consultant-ia) décrit comment je cadre ce choix, y compris quand une API ou un assistant prêt à l'emploi suffit.

[**Discuter de ton projet IA →**](/contact?utm_source=blog&utm_medium=article&utm_campaign=ia-locale-entreprise)

---

## Sources et Références

Pages lues le 19.11.2026.

- [EPFL, Apertus 1.5](https://ai.epfl.ch/apertus-1-5-building-the-next-generation-of-open-ai-infrastructure/) : publication, licence, usages cités.
- [Hugging Face, Apertus 1.5 70B](https://huggingface.co/swiss-ai/Apertus-v1.5-70B) et [Apertus 1.5 8B](https://huggingface.co/swiss-ai/Apertus-v1.5-8B) : tailles, contexte, langues, déploiement, limites.
- [Hugging Face, quantifications tierces d'Apertus 1.5](https://huggingface.co/api/models?filter=base_model:quantized:swiss-ai/Apertus-v1.5-70B).
- [Hugging Face, Mistral Small 4 119B](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603) et [Ministral 3 14B Instruct](https://huggingface.co/mistralai/Ministral-3-14B-Instruct-2512) : licence, langues, poids.
- [Infomaniak, prix d'AI Services](https://www.infomaniak.com/en/hosting/ai-tools/prices) : prix d'API en CHF hors TVA.
- [Infomaniak, AI Services](https://www.infomaniak.com/en/hosting/ai-tools) : lieu de traitement et requêtes, selon l'éditeur.
- [Infomaniak, instances GPU](https://www.infomaniak.com/en/hosting/gpu) : cartes et prix horaires en euros hors TVA.
- [Exoscale, GPU](https://www.exoscale.com/gpu/) et [prix](https://www.exoscale.com/pricing/) : cartes, zones, validation de compte ; prix non relevés.
- [LM Studio, configuration requise](https://lmstudio.ai/docs/app/system-requirements) et [fonctionnement hors ligne](https://lmstudio.ai/docs/app/offline).
- [Ollama, FAQ](https://docs.ollama.com/faq) : contexte, mémoire, réseau, mises à jour.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) : licence et serveur.
- [BCE, taux de référence](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml) : EUR/CHF 0,9243 au 18.11.2026.
- Mes prix : page [tarifs](/tarifs).
