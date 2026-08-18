# Instructions Codex - application Docusaurus

Ces instructions s'appliquent à tout le répertoire `web/`.

## Contexte technique

- Docusaurus 3.x
- Node.js 20 dans GitHub Actions
- contenu principal en Markdown/MDX dans `docs/`
- `routeBasePath: "/"`
- le dépôt personnel sert de prévisualisation et le dépôt du département servira à la publication officielle

La logique de `docusaurus.config.js` permet au même code de fonctionner dans les deux contextes. Ne pas remplacer cette logique par des URLs codées en dur vers le 905.

## Organisation du contenu

- `docs/01-cours/` : rencontres et notes de cours
- `docs/02-labos/` : laboratoires
- `docs/03-tp/` : travaux pratiques
- `docs/accueil.md` : accueil du site
- `sidebars.js` : navigation

Avant de renommer ou déplacer un document, vérifier ses références dans la navigation, les liens Markdown et la configuration Docusaurus.

## Style pédagogique

Le public cible est débutant en programmation Web.

Pour le contenu étudiant :

- écrire en français simple et direct;
- introduire le vocabulaire avant de l'utiliser intensivement;
- éviter les raccourcis qui supposent une connaissance préalable de HTML, CSS ou JavaScript;
- privilégier de petits exemples exécutables;
- présenter une notion, une démonstration, puis une occasion de pratique;
- éviter d'introduire plusieurs syntaxes ou abstractions avancées en même temps;
- conserver seulement les détails techniques qui servent les objectifs d'apprentissage.

Pour les exemples de code :

- privilégier la lisibilité à la concision;
- utiliser des noms de variables explicites;
- ne pas employer une fonctionnalité JavaScript avancée avant qu'elle ait été introduite ou expliquée;
- garder HTML sémantique et CSS simple lorsque le sujet principal est JavaScript;
- montrer les erreurs fréquentes lorsqu'elles ont une valeur pédagogique.

## Docusaurus et assets

- conserver les métadonnées/front matter nécessaires aux documents existants;
- utiliser des liens compatibles avec le `baseUrl` au lieu de coder `/905-IntroProg/` ou `/z03/` dans le contenu lorsque Docusaurus peut résoudre le chemin;
- placer les ressources statiques partagées dans `static/`;
- ne pas modifier `build/` directement : il est généré;
- ne pas modifier `node_modules/`.

## Configuration

Les éléments suivants doivent rester portables entre le dépôt personnel et le dépôt officiel :

- `url`
- `baseUrl`
- `organizationName`
- `projectName`
- les liens GitHub d'édition et de pied de page

Si une tâche touche le déploiement, vérifier les deux cibles conceptuelles :

- prévisualisation personnelle : `emcmp/Z03`
- publication officielle : `departement-info-cem/z03`

## Validation obligatoire

Après toute modification sous `web/`, exécuter depuis la racine du dépôt :

`npm run build`

Pour les changements visuels ou de navigation, vérifier également le résultat avec le serveur de développement ou le serveur de build lorsque pertinent.

Ne pas terminer une tâche avec un build cassé sans expliquer précisément ce qui bloque.