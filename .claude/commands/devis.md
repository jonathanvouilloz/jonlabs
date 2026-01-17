# Devis Generator

Génère un nouveau devis client structuré à partir de notes brutes ou d'un contexte.

## Workflow

### Étape 1 : Récupérer le contexte

Si `$ARGUMENTS` est fourni :
- Lire le fichier spécifié (ex: `docs/notes-client.md`)

Sinon :
- Demander à l'utilisateur de coller ses notes brutes (appel, messages, brief, etc.)

### Étape 2 : Analyser et extraire

À partir du contexte fourni, identifier et extraire :

| Champ | Obligatoire | Exemple |
|-------|-------------|---------|
| `client` | ✅ | "Constantin Diederichs" |
| `title` | ✅ | "Proposition — Geneva Sunset Sailing" |
| `password` | ✅ | Mot simple lié au projet |
| `hero.priority` | ✅ | La priorité/urgence du client |
| `hero.problem` | ✅ | Le problème identifié |
| `hero.solution` | ✅ | La solution proposée |
| `constat` | ✅ | Analyse détaillée du problème (HTML autorisé) |
| `offers` | ✅ | Au moins 1 offre avec prix, features |
| `advice` | ✅ | Ton conseil personnel |
| `timeline` | ⚪ | Étapes du projet |
| `proof` | ⚪ | Résultats SEO/client existant |
| `roi` | ⚪ | Argument retour sur investissement |
| `portfolio` | ⚪ | Réalisations pertinentes |
| `postponed` | ⚪ | Projet reporté si mentionné |
| `nextSteps` | ✅ | Prochaines étapes concrètes |

### Étape 3 : Sélection du portfolio

1. **Lire** `src/data/portfolio.ts` pour récupérer tous les projets
2. **Identifier** les tags pertinents selon le contexte du devis :
   - Type de projet (site-vitrine, e-commerce, etc.)
   - Secteur d'activité (tourisme, commerce, b2b, etc.)
   - Localisation si pertinent
3. **Suggérer** les 2-3 projets les plus pertinents
4. **Demander** validation à l'utilisateur

### Étape 4 : Générer le draft

Afficher le frontmatter structuré dans un bloc de code :

```yaml
---
title: "[Proposition — Nom du projet]"
client: "[Nom complet]"
date: [date du jour YYYY-MM-DD]
password: "[mot de passe simple]"
status: "draft"

hero:
  priority: "[Priorité identifiée]"
  problem: "[Problème du client]"
  solution: "[Solution proposée]"

constat: "[Analyse détaillée avec <strong> pour les points clés et <br><br> pour les paragraphes]"

offers:
  - name: "Offre 1 — [Nom]"
    price: "[XXX CHF]"
    subtitle: "[Sous-titre court]"
    features:
      - "[Feature 1]"
      - "[Feature 2]"
    excluded:
      - "[Non inclus 1]"
  - name: "Offre 2 — [Nom]"
    price: "[XXX CHF]"
    subtitle: "[Sous-titre]"
    recommended: true
    features:
      - "Tout de l'offre 1"
      - "[Feature supplémentaire]"

timeline:
  - step: "Kick-off"
    description: "[Description]"
  - step: "Livraison"
    description: "[Date estimée]"

advice: "[Ton conseil personnel, direct et honnête]"

proof:
  image: "/devis/[image].png"
  title: "[Titre de la preuve]"
  stats:
    - label: "[Métrique]"
      value: "[Valeur]"
  caption: "[Légende explicative]"

roi:
  context: "[Contexte chiffré du client]"
  calculation: "→ [Calcul simple]"
  result: "[Bénéfice attendu]"

portfolio:
  - name: "[Client]"
    description: "[Description courte]"
    url: "[URL]"

nextSteps:
  - "[Étape 1]"
  - "[Étape 2]"
  - "[Étape 3]"
---
```

### Étape 5 : Vérifier les champs manquants

Identifier les champs obligatoires non remplis et poser des questions :

```
⚠️ Informations manquantes :

1. **Prix des offres** : Quels sont les prix pour chaque offre ?
2. **Timeline** : Quelle est la deadline souhaitée ?
3. **[Autre champ]** : [Question]

Merci de compléter ces informations.
```

### Étape 6 : Validation utilisateur

Demander confirmation :
- "Le draft te convient ? Des modifications ?"
- Ajuster selon les retours

### Étape 7 : Créer le fichier

1. **Générer le slug** depuis le nom du client (kebab-case, sans accents)
   - Ex: "Constantin Diederichs" → `constantin-diederichs`

2. **Créer le fichier** : `src/content/devis/[slug].md`

3. **Confirmer** :
```
✅ Devis créé : src/content/devis/[slug].md

🔗 Preview : npm run dev → localhost:4321/devis-client/[slug]
🔒 Mot de passe : [password]

📋 Checklist avant envoi :
- [ ] Vérifier les prix
- [ ] Ajouter image proof si nécessaire (public/devis/)
- [ ] Relire le constat et l'advice
- [ ] Tester le lien en local
```

## Structure de référence

Voir le template existant : `src/content/devis/constantin-diederichs.md`

### Sections affichées dans l'ordre :

1. Header (logo + client + date)
2. Title + Hero box
3. Tableau comparatif des offres
4. Grille des offres
5. Conseil personnel
6. **Constat** (si présent)
7. **Proof/SEO** (si présent)
8. **ROI** (si présent)
9. **Portfolio** (si présent)
10. **Postponed** (si présent)
11. **Next Steps** (si présent)
12. Contenu markdown libre (si présent)
13. Footer contact

### Portfolio dynamique

**Source** : `src/data/portfolio.ts`

Lors de la génération du devis :

1. **Lire** `src/data/portfolio.ts` pour avoir la liste des projets
2. **Analyser** le contexte du devis (type de projet, secteur, besoins)
3. **Suggérer** les 3 projets les plus pertinents basés sur les tags
4. **Demander** à l'utilisateur de valider ou ajuster la sélection

**Exemple de suggestion** :
```
📁 Portfolio suggéré (basé sur : site-vitrine, local, tourisme)

1. ✅ Barber Concept — Chaîne de barbiers à Genève
   Tags matchés : site-vitrine, local, geneve

2. ✅ Lecureux Conseil — Juriste spécialisé restaurateurs
   Tags matchés : site-vitrine, seo

3. ⚪ Ugo Mighali — Portfolio coutelier professionnel
   Tags matchés : site-vitrine

Garder cette sélection ? (ou indique les numéros à modifier)
```

**Tags disponibles** pour le matching :
- Type : `site-vitrine`, `e-commerce`, `application`, `seo`, `automatisation`
- Secteur : `local`, `tourisme`, `commerce`, `b2b`, `artisan`, `consultant`
- Lieu : `geneve`, `lausanne`, `suisse`

**Pour ajouter un projet** : éditer `src/data/portfolio.ts`

## Exemples d'utilisation

```bash
# Avec un fichier de notes
/devis docs/notes-call-client.md

# Sans argument (mode interactif)
/devis

# Puis coller les notes brutes dans le chat
```

## Notes

- Le champ `status` commence toujours par `"draft"`
- La `date` est automatiquement la date du jour
- Les sections optionnelles ne s'affichent pas si non définies
- Le body markdown est optionnel (pour explications supplémentaires)
