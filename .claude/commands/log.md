# Log (SilverBullet)

Documente une session de développement dans le Second Cerveau via `sb_save`. Arguments : $ARGUMENTS

## Instructions

### 1. Détection du projet
- Analyser le dossier de travail courant (pwd)
- Extraire le nom du projet (nom du dossier git ou dernier segment du chemin)
- Chemin de base : `Projets/[NomProjet]/Logs/`

### 2. Convention de nommage

| Type | Chemin |
|------|--------|
| Log dev | `Projets/[Projet]/Logs/[YYYY-MM-DD]_[Sujet].md` |
| Snippet | `Library/Snippets/[Langage]/[Nom].md` |
| Note | `Inbox/[YYYY-MM-DD]_[Sujet].md` |

### 3. Template du contenu

```markdown
# [Titre explicite de l'action]
**Date :** [YYYY-MM-DD HH:mm]
**Tags :** #devlog #[nom_projet] #[type]

## Résumé
[Une phrase expliquant le "Pourquoi"]

## Changements effectués
* [Bullet point précis]
* [Bullet point précis]

## Notes techniques
(Optionnel : apprentissages ou code critique à retenir)
```

### 4. Exécution

1. Construire le chemin selon la convention de nommage
2. Formater le contenu avec le template (échapper les newlines avec `\n`)
3. Exécuter : `sb_save "[chemin]" "[contenu]"`
4. Vérifier le retour JSON
5. Si succès ("Note écrite avec succès") → afficher uniquement : 💾

### Si l'argument est "commit" :

1. Lire le dernier commit avec `git log -1 --format="%s%n%n%b"`
2. Lire les fichiers modifiés avec `git show --stat --format="" HEAD`
3. Générer un log basé sur ces informations
4. Sauvegarder avec le sujet extrait du message de commit

### Si l'argument est "snippet [langage] [nom]" :

1. Demander quel code archiver (ou utiliser le contexte de la conversation)
2. Chemin : `Library/Snippets/[Langage]/[Nom].md`
3. Format simplifié : titre + code + description courte

### Si l'argument est un sujet libre :

1. Utiliser le contexte de la session actuelle
2. Résumer les changements discutés/effectués
3. Chemin : `Projets/[Projet]/Logs/[YYYY-MM-DD]_[Sujet].md`

## Arguments

| Commande | Description |
|----------|-------------|
| `/log [sujet]` | Log de session avec sujet libre |
| `/log commit` | Documenter le dernier commit effectué |
| `/log snippet [langage] [nom]` | Archiver un bout de code |

## Déclencheur automatique

Après chaque commit réussi, proposer : "Veux-tu que je génère une note de log dans SilverBullet ?"

## Exemples

```bash
/log Fix_Auth_Google
/log commit
/log snippet python rotating_proxy
```

## Exemple d'exécution

```bash
sb_save "Projets/Scraper/Logs/2025-12-28_Ajout_Proxy.md" "# Ajout support Proxy\n**Date:** 2025-12-28 14:30\n**Tags:** #devlog #scraper #commit\n\n## Résumé\nIntégration d'un système de rotation de proxy pour éviter les blocages.\n\n## Changements effectués\n* Ajout de la lib requests\n* Rotation automatique des IP\n* Gestion des erreurs de connexion"
```
