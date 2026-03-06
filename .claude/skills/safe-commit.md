# Safe Commit

## Description
Scanne les fichiers staged pour detecter des secrets (cles API, tokens, mots de passe) avant de commit et push. Se declenche quand l'utilisateur demande de commit les modifications.

## Trigger
Quand l'utilisateur demande de commit, push, ou valider les changements (ex: "commit", "push", "commit les modifs", "commit et push").

## Instructions

Avant de creer le commit, effectuer un scan de securite :

1. **Lister les fichiers modifies** via `git diff --cached --name-only` (staged) et `git diff --name-only` (unstaged qui seront potentiellement ajoutes).

2. **Scanner le contenu des diffs** pour les patterns suivants :
   - Cles API : `sk-`, `pk_`, `api_key`, `apikey`, `API_KEY`, `APIKEY`
   - Tokens : `token`, `secret`, `password`, `passwd`, `Bearer `
   - AWS : `AKIA`, `aws_secret_access_key`, `aws_access_key_id`
   - Google : `AIza`, `GOOG`, `google_api_key`
   - Stripe : `sk_live_`, `sk_test_`, `pk_live_`, `pk_test_`
   - Supabase/Firebase : `eyJ` (JWT tokens longs), `service_role`
   - Cles privees : `-----BEGIN`, `PRIVATE KEY`
   - URLs avec credentials : `://.*:.*@`
   - Fichiers sensibles : `.env`, `.env.local`, `.env.production`, `credentials.json`, `serviceAccountKey.json`

3. **Exclure les faux positifs** :
   - References dans des commentaires de documentation expliquant quoi NE PAS commit
   - Noms de variables sans valeur (ex: `const API_KEY = process.env.API_KEY`)
   - Placeholders evidents : `your-api-key-here`, `xxx`, `TODO`, `CHANGEME`
   - Fichiers `.example` ou `.template`

4. **Rapport** :
   - Si rien trouve : afficher "Aucun secret detecte" et proceder au commit normalement
   - Si suspect(s) trouve(s) : afficher chaque match (fichier, ligne, pattern detecte) et **demander confirmation** avant de continuer
   - Si fichier `.env` ou credentials detecte : **bloquer** et avertir, ne pas commit sans confirmation explicite

5. Ensuite, proceder au commit en suivant les conventions du projet (`feat(scope): description`).
