# Lab Project Helper

Aide à créer et publier les projets Lab pour Jon Labs.

## Instructions

### Si l'argument est "generate [fichier.md]" :

Workflow complet pour créer un projet Lab à partir d'un fichier source.

#### Étape 1: Lecture et analyse

1. **Lire** le fichier source (contenu brut ou structuré)
2. **Lire** `docs/lab-project-template.md` pour la structure attendue
3. **Analyser** le contenu pour identifier :
   - Titre du projet
   - Description courte (≤155 caractères)
   - Statut : `live` | `en-cours` | `archive`
   - Catégorie : `app` | `jeux` | `photo` | `experiment`
   - Stack/tags
   - URL du projet (si live)
4. **Générer** le slug depuis le titre (kebab-case, sans accents)

#### Étape 2: Structure des dossiers

1. **Créer** le dossier images : `public/images/lab/[slug]/`
2. **Créer** les sous-dossiers si nécessaire : `gallery/`

#### Étape 3: Formatage du contenu

Appliquer la structure du template :

```yaml
---
title: "[Nom du projet]"
description: "[Description ≤155 caractères]"
date: [date format YYYY-MM-DD]
status: "[live|en-cours|archive]"
category: "[app|jeux|photo|experiment]"
tags: ["tag1", "tag2"]
url: "[URL si live]"
thumbnail: "/images/lab/[slug]/thumbnail.webp"
featured: [true|false]
---
```

Structure du contenu :
- **Tagline** : Citation avec `>`
- **Le contexte** : Histoire personnelle, 2-3 paragraphes
- **Le problème** : Pain points en bullet points
- **La solution** : Ce que le projet fait, features
- **Comment j'ai buildé ça** : Phases de développement
- **Stack & Outils** : Tableau avec outils et usage
- **Ce que j'ai appris** : Learnings numérotés
- **Essayer** : CTA vers le projet

#### Étape 4: Création et rapport

1. **Créer** le fichier `src/content/lab/[slug].md`
2. **Afficher** le rapport :

```
✅ Projet créé : src/content/lab/[slug].md

📁 Dossier images créé :
   - public/images/lab/[slug]/

⚠️ Images à ajouter :
   - thumbnail.webp (800x600 recommandé)
   - hero.webp (1200x800 recommandé, optionnel)

🔗 Preview : npm run dev → localhost:4321/lab/[slug]
```

---

### Si l'argument est "check" :

1. **Lire** tous les projets dans `src/content/lab/*.md`
2. **Vérifier** pour chaque projet :
   - [ ] Frontmatter complet (title, description, date, status, category, thumbnail)
   - [ ] Description ≤ 155 caractères
   - [ ] Thumbnail existe dans `public/images/lab/[slug]/`
   - [ ] URL valide si status = "live"
   - [ ] Sections présentes : contexte, problème, solution, stack, learnings
3. **Rapporter** les problèmes trouvés

---

### Si l'argument est "publish [slug]" :

Checklist de publication :

1. **Lire** le projet `src/content/lab/[slug].md`
2. **Vérifier** :
   - [ ] Frontmatter complet
   - [ ] Description SEO-friendly (≤155 caractères)
   - [ ] Thumbnail existe et est optimisé
   - [ ] URL du projet fonctionne (si live)
   - [ ] Contenu relu et sans fautes
   - [ ] Tags pertinents (3-5)
   - [ ] CTA en fin d'article
3. **Afficher** le statut de publication

```
📋 Checklist publication : [slug]

✅ Frontmatter complet
✅ Description : XX caractères
✅ Thumbnail : public/images/lab/[slug]/thumbnail.webp
✅ URL live : [url]
✅ Sections : contexte, problème, solution, stack, learnings

🚀 Prêt à publier !

Actions :
1. Vérifier visuellement : npm run dev → localhost:4321/lab/[slug]
2. Si OK, retirer draft: true (si présent)
3. Commit et push
```

## Arguments

| Commande | Description |
|----------|-------------|
| `/lab generate [fichier.md]` | Transforme un fichier source en projet Lab |
| `/lab check` | Vérifie tous les projets Lab |
| `/lab publish [slug]` | Checklist avant publication |

## Exemples

```bash
# Créer un projet depuis un fichier source
/lab generate docs/draft-nouveau-projet.md

# Vérifier tous les projets
/lab check

# Checklist avant publication
/lab publish isla-plomo
```

## Images

### Affichage standard (1 colonne, centré)

```markdown
![Description de l'image](/images/lab/[slug]/gallery/image.webp)
```

- Largeur max : 500px
- Centré automatiquement
- Clic → lightbox fullscreen

### Grille 2 colonnes (côte à côte)

```markdown
<div class="img-grid-2">

![Image 1](/images/lab/[slug]/gallery/image1.webp)
![Image 2](/images/lab/[slug]/gallery/image2.webp)

</div>
```

### Grille 3 colonnes

```markdown
<div class="img-grid-3">

![Image 1](/images/lab/[slug]/gallery/image1.webp)
![Image 2](/images/lab/[slug]/gallery/image2.webp)
![Image 3](/images/lab/[slug]/gallery/image3.webp)

</div>
```

### Galerie compacte (screenshots, "En action")

```markdown
<div class="gallery">

![Screen 1](/images/lab/[slug]/gallery/screen1.webp)
![Screen 2](/images/lab/[slug]/gallery/screen2.webp)
![Screen 3](/images/lab/[slug]/gallery/screen3.webp)
![Screen 4](/images/lab/[slug]/gallery/screen4.webp)

</div>
```

- Grille auto-responsive (3-4 colonnes desktop, 2 mobile)
- Images carrées avec crop automatique
- Idéal pour montrer plusieurs screenshots

**Notes :**
- Les grilles sont responsive (stack sur mobile <480px)
- Garder une ligne vide après `<div>` et avant `</div>`
- Les images dans les grilles sont aussi cliquables (lightbox)

### Lightbox

Toutes les images du contenu `.prose-lab` sont cliquables :
- Clic → ouvre en fullscreen
- Navigation : flèches ←/→ ou clavier
- Fermer : Escape, clic backdrop, ou bouton X
- Affiche le alt text en caption

## Références

- Template : `docs/lab-project-template.md`
- Schema : `src/content/config.ts` (labCollection)
- Pages : `src/pages/lab/index.astro`, `src/pages/lab/[slug].astro`
