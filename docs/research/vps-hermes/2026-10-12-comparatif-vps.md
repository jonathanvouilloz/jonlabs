---
sujet: Quel VPS choisir pour héberger Hermes Agent (cible Suisse)
date_releve: 2026-10-12
statut: recherche brute — à revérifier juste avant publication (prix volatils)
usage: matière première du brief seo-brief / article « VPS pour Hermes Agent »
---

# Comparatif VPS pour Hermes Agent — relevé du 12.10.2026

> Règle : chaque chiffre ci-dessous vient de la page officielle du fournisseur (relevée le 12.10.2026)
> sauf mention « tiers ». HT = hors TVA (TVA CH 8,1 %). Les prix EUR ne sont pas convertis.

## 1. Ce dont Hermes a besoin

- **Pas de config minimale officielle.** La doc d'installation Nous Research ne donne ni RAM ni disque.
  Install : `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` (Linux/macOS/WSL2) ;
  Windows natif via PowerShell. Python 3.14 pour les installations first-party.
  Source : https://hermes-agent.nousresearch.com/docs/getting-started/installation
- **Consensus tiers** : 2 Go RAM minimum avec un modèle par API, 4 Go confortable, 8 Go+ pour un modèle local (Ollama).
  Sources : https://findstack.com/resources/hermes-agent-vps-cost · https://serverpoint.com/en/how-tos/install-hermes-agent-linux/
- → **Cible de l'article : 2 vCPU / 4 Go RAM / 40 Go+ disque** (modèle via API). Modèle local = autre budget.
- Metanet (CH) écrit sur sa page Hermes qu'« un modèle d'entrée suffit » (1 vCPU / 2 Go) — affirmation commerciale.

## 2. Hébergeurs suisses (données en Suisse)

| Fournisseur | Datacenter | Offre ~4 Go | Prix | Conditions clés | Source |
|---|---|---|---|---|---|
| **Infomaniak VPS Lite** | Suisse | 2 vCPU / 4 Go / 60 Go | CHF 7.20/mois HT | Engagement 12 mois payé d'avance. **Disponibilité garantie : non. Snapshots : non.** 500 Mbit/s, ressources garanties, non géré | infomaniak.com/fr/hebergement/vps-lite |
| | | 4 vCPU / 4 Go / 80 Go | CHF 9.00 | idem | |
| | | 4 vCPU / 8 Go / 160 Go | CHF 18.00 | idem (gamme : 2.70 / 5.40 / 7.20 / 9.00 / 18.00) | |
| **Infomaniak VPS Cloud** | Suisse | 4 vCPU / 12 Go | dès CHF 38.41/mois | SLA, snapshots, 30 j remboursé | infomaniak.com/fr/hebergement/vps-cloud |
| **hosttech vServer** | Suisse (« Serverstandort Schweiz ») | Sunny 2 CPU / 2 Go / 50 Go NVMe | dès CHF 12.90/mois | Backup 24 h, rétention ≥ 7 j inclus ; root ; « mode sommeil » ; promo -50 % frais de mise en service jusqu'au 31.10.2026 | hosttech.ch/vserver |
| | | Foggy 4 CPU / 4 Go / 100 Go | dès CHF 19.90/mois | idem | |
| **AlpineDC** (Lausanne) | Datacenters suisses, ASN propre AS198385 | KVM Medium 1 vCPU / 4 Go / 50 Go SSD | CHF 24.90/mois | Small 0.5 vCPU/2 Go CHF 14.90 ; Large 2 vCPU/8 Go CHF 44.90. Sauvegarde en option | alpinedc.ch/fr/services/vps/ |
| **Metanet** | Datacenters ISO 27001 en Suisse | Cloud Server S 1 vCPU / 2 Go / 50 Go | dès CHF 24.00/mois | **Page dédiée Hermes Agent.** M = 4 vCPU/8 Go CHF 84. 250 Mbit/s. Backups en option. Test 30 j. Mise en service ≤ 48 h | metanet.ch/de/server/hermes-agent |
| **Kreativmedia** | 3 datacenters ISO 27001 à Zurich | Root Cloud 2 vCPU / 4 Go / 100 Go | CHF 47.-/mois (37.60 les 6 premiers mois) | 1 vCPU/2 Go : CHF 29.- (23.20 promo). Backups quotidiens. Support payant | kreativmedia.ch/de/produkte/cloud-server/root/ |
| **Novatrend** | Datacenters propres (CH) | Cloud Server KVM 0.5 vCPU / 2 Go / 60 Go | CHF 15.-/mois | Non géré, backup 7 j inclus | novatrend.ch/de/root-server |
| **up-network** (Gland VD) | Gland, Suisse | Pas d'offre 4 Go publiée (BASIC non détaillé, « dès CHF 2.50/mois annuel ») | PRO S 6 vCPU / 16 Go : CHF 29.00/mois HT | Sans engagement ; backups +CHF 5/mois ; anti-DDoS local inclus ; SLA « best effort » | up-network.ch/services/vps-hosting |
| **Exoscale** | Genève, Zurich (+ UE) | Medium 2 vCPU / 4 Go | CHF 0.04666/h ≈ **CHF 34/mois** + disque (CHF 0.00014/Go/h ≈ CHF 2 pour 20 Go) | Facturation à la seconde. Small 2 Go ≈ CHF 17/mois | API officielle portal.exoscale.com/api/pricing/opencompute |
| **cloudscale.ch** | Suisse | Flex-4-1 1 vCPU / 4 Go | CHF 1.10/jour ≈ CHF 33/mois | Facturé à la seconde, 10 Go root inclus, stockage SSD CHF 0.30/Go/jour… à vérifier (unité) | cloudscale.ch/en/pricing |
| **Flow Swiss** | Suisse (ISO 27001) | grille non relevée | dès CHF 29/mois (CHF 0.04/h) | Chiffrement au repos par défaut | flow.swiss/compute |
| **Hostpoint / nine.ch / cyon** | Suisse | Serveurs **gérés** uniquement | Hostpoint 140 + 190 setup ; nine dès 169 + 160 setup (tiers : webtesten.ch) | Hors cible pour Hermes seul | webtesten.ch/vps-schweiz/ |

### Pièges repérés côté « suisse »
- **Swizzonic** (siège Zurich, groupe team.blue) : VPS X4 4 vCPU / 4 Go à CHF 17.77 TTC (promo -20 %, prix normal 22.20),
  backups toutes les 4 h inclus. **Mais serveurs « hébergés en Europe », mention « Site VPS Pays-Bas »** → pas de données en Suisse.
  Source : swizzonic.ch/vps/?lang=fr
- Les comparatifs tiers (hebergeurs-suisse.ch, hostadvice) sont non datés et/ou sponsorisés ; plusieurs prix y sont périmés
  (ex. Kreativmedia affiché à 21 CHF, réel 29.-). Ne servent qu'à la découverte de fournisseurs.
- Autres noms trouvés sans vérification (offres anciennes/chères) : green.ch VS1 (59 CHF), Host4all, Computerline, Q-X.

## 3. Leaders internationaux (données hors Suisse sauf OVH Local Zone)

| Fournisseur | Datacenter | Offre ~4 Go | Prix | Conditions clés | Source |
|---|---|---|---|---|---|
| **Hostinger** (affilié Jon) | VPS : France, Allemagne, Lituanie, UK (UE) ; pas de Suisse | KVM 1 1 vCPU / 4 Go / 50 Go | €5.49/mois promo → **€11.99 au renouvellement** | Promo = paiement d'avance ; renouvellement « pour 2 ans ». Backups hebdo gratuits, 1 Gb/s. Hermes dans le catalogue d'apps | hostinger.com/fr/vps-hosting · support.hostinger.com/en/articles/1583267 |
| | | KVM 2 2 vCPU / 8 Go / 100 Go | €7.99 promo → €14.99 | idem | |
| **Hetzner** | Allemagne, Finlande (+US, SG) | CX23 2 vCPU / 4 Go | €5.49 HT (+€0.50 IPv4) | **Indisponible le 12.10.2026** : Cost-Optimized (CX/CAX) et Regular Performance (CPX) affichent « currently unavailable ». Hausses du 01.04 et 15.06.2026 (CPX22 €7.99 → €19.49) | hetzner.com/cloud/* · hostmath.dev/guides/hetzner-price-increase-2026 |
| **OVHcloud** | Gamme standard : UE ; **Local Zones Zurich et Genève** | VPS-1 2 vCores / 4 Go / 40 Go NVMe | €3.81 HT (€4.57 TTC FR) | Backup quotidien 24 h, trafic illimité. Local Zone CH : VPS-2 (4 vCores/8 Go) dès ~$8.50 ; certaines options « sauf Local Zones » | ovhcloud.com/fr/vps/ · ovhcloud.com/en/vps/vps-switzerland/ |
| **Contabo** | UE, UK, US, Asie… pas de Suisse | Cloud VPS 4 4 vCPU / 8 Go / 100 Go SSD | €5.50/mois (tarif 24 mois, TTC) | 200 Mbit/s ; terme minimum 1 mois | contabo.com/en/vps/ |
| **DigitalOcean** | US, UE (FRA, AMS, LON)… | Basic 2 vCPU / 4 Go / 80 Go | $24/mois | À la seconde depuis 01.2026 | digitalocean.com/pricing/droplets |
| **Scaleway** | France (PAR), NL, PL | DEV1-M 3 vCPU / 4 Go | ~€14.74/mois | PLAY2-NANO 2 vCPU/4 Go ~€20.10 | scaleway.com/fr/tarifs/virtual-instances/ |
| **IONOS** | UE | VPS M+ 2 vCores / 4 Go / 120 Go NVMe | promo €4 HT 3 mois + €10 mise en service | Prix normal illisible au relevé → **à vérifier** | ionos.fr/serveurs/vps |

## 4. L'angle « souveraineté » (différenciant)

- Un VPS en Suisse ne rend pas l'agent « suisse » : Hermes appelle un LLM par API (OpenRouter, Anthropic, OpenAI…)
  → le contenu traité (mails clients) part chez le fournisseur du modèle, souvent aux US.
- Option 100 % CH : Infomaniak AI Services (« IA souveraine », traitement en Suisse, requêtes non stockées ni utilisées
  pour l'entraînement, modèles open source, 1M crédits offerts puis pay-as-you-go). Compatibilité OpenAI : **non vérifiée**.
  Sources : infomaniak.com/fr/hebergement/ai-tools · infomaniak.com/fr/support/faq/2845
- → Sujet de l'article dédié « Quel modèle brancher sur Hermes » ; ici, juste la mise en garde + lien.

## 5. Profils lecteur → recommandation (proposition)

| Profil | Reco | Pourquoi |
|---|---|---|
| Je teste Hermes, petit budget | Hostinger KVM 1/2 (affilié, mention) ou OVH VPS-1 | Prix promo bas, installation facile ; attention renouvellement Hostinger |
| Données clients / nLPD, budget serré | Infomaniak VPS Lite 2 vCPU / 4 Go (CHF 7.20 HT) | Suisse, prix imbattable ; pas de SLA ni snapshots → sauvegardes à prévoir |
| Suisse + sauvegardes incluses, sans engagement | hosttech Foggy (CHF 19.90) | Backups quotidiens inclus, sans engagement long |
| Suisse, facturation à l'usage / infra pro | Exoscale ou cloudscale (~CHF 33-36) | À la seconde, API, sérieux ; plus cher |
| « Je veux qu'on me tienne la main » | Metanet (page Hermes) ou un intégrateur | Accompagnement ; nettement plus cher |

## 6. Points ouverts avant rédaction
- Retour terrain Jon sur Hostinger (plan, prix payé, installation Hermes).
- URL du lien affilié Hostinger + mention de transparence.
- Prix OVH Local Zone en CHF pour un client suisse (page fr-ch en 404).
- Grille Flow Swiss et prix normal IONOS.
- Corriger ensuite les 4 articles qui disent « Hetzner/DigitalOcean CHF 5-15 » : hermes-agent-ia-pme, openclaw-pme-suisse,
  prix-agent-ia-automatisation-suisse, workflows-vs-agents-ia-pme.
