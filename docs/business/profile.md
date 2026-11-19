---
project: jonlabs
status: provisional
sources:
  - ../noyau/brand/identity.md (canon, lecture seule)
  - ../noyau/brand/links.md
  - docs/project-context.md
  - src/data/pricing.ts
  - src/pages/index.astro
validated_by: "[?]"
validated_on: "[?]"
review_due: "2026-12-31"
---

# Profil métier — Jon Labs

> Faits opérationnels stables. Les prix ne sont pas recopiés : `src/data/pricing.ts` est la seule source. L'identité vit dans le canon `noyau/brand/`.

## Identité publique

| Fait | Valeur | Source |
|---|---|---|
| Nom public | Jon Labs | canon `identity.md` |
| Personne | Jonathan Vouilloz, signature « Jon » | canon `identity.md` |
| Type d'activité | Freelance : systèmes et agents IA, applications sur mesure, automatisation, pour PME romandes | `docs/project-context.md` (pivot du 09.11.2026), home du 17.11.2026 |
| Base | Genève, service en Suisse romande | home (« Freelance à Genève »), `docs/seo/context.md` |
| Effectif | 1 personne, au 19.11.2026 | home, canon |
| Forme juridique, numéro IDE, TVA | à confirmer | non écrit dans les sources lues |
| Langue | français (fr-CH) | canon |

## Contacts publics

| Canal | Valeur |
|---|---|
| Site | https://www.jonlabs.ch |
| Contact | https://www.jonlabs.ch/contact |
| Appel découverte | https://cal.com/jonathan-vouilloz/appel-de-bienvenue |
| Autres canaux (X, YouTube, Substack, LinkedIn) | canon `noyau/brand/links.md`, ne pas recopier |

## Offres (pointeurs)

| Offre | Page | Prix |
|---|---|---|
| Agent IA pour entreprise (Hermes) | `/hermes` | `pricing.agentIA` |
| Conseil et mise en place IA | `/consultant-ia` (+ villes : Lausanne, Annemasse, Gaillard) | sur devis |
| Formation IA | `/services/formation-ia-equipe` | `pricing.formationIA` |
| Application sur mesure | `/services/application-sur-mesure` | `pricing.appSurMesure` |
| Application mobile | `/services/developpement-application-mobile` | `pricing.appMobile` |
| Site web (maintenu, devenir non tranché) | `/services/creation-site-web` | `pricing.siteWeb`, `pricing.webflow` |

Conditions communes : `terms` dans `src/data/pricing.ts`. Offre de référencement local : fermée le 09.11.2026.

## Faits à ne pas utiliser sans vérification

- Le canon (`identity.md`, état daté du 23.07.2026) mentionne un départ à l'étranger fin 2026. Ce fait touche la formule « freelance à Genève » : à confirmer avec Jonathan avant tout usage éditorial.
- Le site annonce pour l'offre un fonctionnement « hébergé en Suisse » chez Infomaniak. Les installations réelles tournent ailleurs : voir `docs/brand/proofs.md` § Interdits.

## Gouvernance

Mise à jour quand l'offre, l'équipe ou les contacts changent. Propriétaire : `init-brand-system`.
