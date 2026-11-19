# visual-refs — les références de génération d'images (canon)

> **Source de vérité unique de la direction artistique générative de Jon Labs.**
> Ce que `identity.md` fait pour les mots, ce dossier le fait pour les images générées.
> Édite ici, puis lance `python brand/sync.py`. Doctrine : loi n°4 (pointeurs, jamais de copies).

## Ce qu'il y a ici

| Fichier | Rôle |
|---|---|
| `direction.md` | Les **blocs verrouillés** de prompt : le standard (visuels avec texte) et la variante ILLUSTRATION (sans texte). À préfixer à chaque prompt. |
| `typologies.md` | La **table de routage** : typologie de contenu → ancrage, traitement, format, finition, logo, moteur. |
| `refs.md` | Les **15 références annotées** : pour chacune, ce qu'on prend et ce qu'on laisse. |
| `ref1-ultime.jpg` … `ref5-shapes-form.png` | Ancrages des typologies **avec texte** (punchline, citation, tips, abstrait, mythe, problem/solution). |
| `illustration/illu1…illu10.png` | Ancrages de la typologie **illustration** (sans texte) — covers d'articles, têtes de chapitre. |

Le logo n'est pas ici : il vit dans `../logo/` et n'est **jamais généré**, toujours composé par-dessus.

## Le modèle : canon → projections (à sens unique)

```
        noyau/brand/visual-refs/   ← TU ÉDITES ICI (🔒 CANON)
                  │  python brand/sync.py
       ┌──────────┴───────────┐
       ▼                      ▼
atelier/_brand/visual-refs/   jonlabs/visual/refs/
(⚙️ GENERE)                   (⚙️ GENERE — dès que jonlabs est en v3)
```

La projection jonlabs ne s'active que si `jonlabs/visual/` existe, c'est-à-dire une fois le projet
passé à la structure v3 (`docs/design/moodboard.md` + `visual/presets.yaml` + `visual/refs/`).
Tant qu'il est en v2, le sync l'ignore silencieusement — rien d'inerte n'est créé.

## Qui consomme, et comment

Le runtime standard est `generate-images` (et son wrapper `generate-cover`). Il ne lit **pas**
ce dossier directement : il lit les projections, via les presets du projet. Un preset pointe une
référence par son chemin projet :

```yaml
presets:
  illustration-semi-concret:
    source: openai            # gpt-image-2
    text_mode: none
    reference_image: visual/refs/illustration/illu2-statue-laptop.png
    finish: crop              # 3:2 natif → 16:9 exact
    logo: none
```

Le skill `visual` (jonlabs-only, gelé) embarque encore sa propre copie figée de ces assets
(`~/.claude/skills/visual/assets/`). C'est un doublon connu, à résorber quand jonlabs passera en v3.
En attendant : **ce dossier fait foi**, le skill est en sursis.

## Règles dures (rappel — le détail est dans `direction.md`)

- **Une seule teinte colorée** : le teal `#00D9A3`. Tout accent rouge/orange/bleu/violet d'une
  référence est remappé teal. Pour la direction illustration, les nuances de teal sont autorisées.
- **Le logo n'est jamais généré.** Marge basse laissée vide, vrai logo composé ensuite.
- **La data chiffrée ne passe pas par le génératif** : le modèle écrit les bons chiffres mais ment
  sur les proportions. Chiffre exact = rendu par code.
- **Une référence absente n'est jamais une instruction implicite** : si le fichier manque, on ne
  devine pas, on échoue.

## Historique

- 2026-07-22 — Canon créé par promotion de `~/.claude/skills/visual/assets/` (refs, blocs de prompt,
  table de typologies). Deux contradictions de la source tranchées ici : la finition des covers
  (crop, cf. `typologies.md`) et le statut du logo en direction illustration (jamais).
