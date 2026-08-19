# Suivi de la refonte du contenu Z03

Ce document sert de registre de migration pendant la refonte du cours. Il doit être mis à jour chaque fois qu'une rencontre est déplacée, fusionnée, supprimée ou réécrite.

## Règle de traçabilité

Une rencontre de cours ne doit jamais être réorganisée sans vérifier aussi ses exercices associés.

Pour chaque fusion ou déplacement :

1. identifier la page de cours source;
2. identifier le ou les laboratoires associés;
3. identifier les fichiers sources dans `web/static/files/` (`.zip`, `.docx`, etc.);
4. extraire et inventorier les exercices avant de supprimer ou remplacer une source;
5. déplacer, fusionner ou adapter les exercices dans la nouvelle rencontre;
6. mettre à jour les pages de laboratoire et leurs liens;
7. conserver dans cette table la trace des anciennes sources jusqu'à ce que la migration soit vérifiée.

L'aide-mémoire `web/docs/01-cours/00-rencontre0.0.md` est une ressource de référence et ne compte pas parmi les 15 rencontres.

Consulter également `EVALUATION.md` lorsqu'un changement de contenu modifie une compétence évaluée, son moment de validation ou la portée de l'examen final.

## Structure actuelle et sources d'exercices

| Cours actuel | Titre / sujet actuel | Notions principales | Exercices / source actuelle | Destination ou décision | Actions de migration |
|---|---|---|---|---|---|
| 1 | Atelier | Environnement technologique | Aucun laboratoire numéroté associé | À réécrire pour Z03 | Intégrer OneDrive, système de fichiers, dossiers, extensions, zipper/dézipper, VS Code et navigateur. |
| 2 | Variables et affectation | Variables, affectation, nombres, opérateurs, chaînes, concaténation | Labo 2 → `420905_lab2.docx` | À déplacer dans la future séquence JavaScript | Conserver et réévaluer les exercices lors du déplacement. |
| 3 | DOM et fonctions | `querySelector`, `textContent`, VS Code, fonctions | Labo 3 → `420905_lab3.zip` | Probablement à éclater entre fonctions et DOM | Extraire le labo 3 et identifier quels exercices relèvent des fonctions et lesquels relèvent du DOM. |
| 4 | Événements et styles | Variables globales/locales, événements, styles DOM | Labo 4 → `420905_lab4.zip` | À réorganiser dans le bloc DOM / événements | Extraire le labo 4 et répartir les exercices selon la nouvelle progression. |
| 5 | Booléens et conditions | Booléens, `if`, `else` | Labo 5 → `420905_lab5.zip` | **Fusion envisagée avec le cours 6** | Extraire le labo 5; inventorier les exercices à conserver. |
| 6 | Opérateurs logiques | Opérateurs logiques, `else if`, débogage | Labo 6 → `420905_lab6.zip` | **Fusion envisagée avec le cours 5** | Extraire le labo 6; fusionner les exercices pertinents avec ceux du labo 5 et éliminer les doublons. |
| 7 | TP1 | Temps consacré au TP1 | Ancien TP supprimé de Z03 | Rencontre à récupérer | Aucun ancien TP à préserver; réaffecter la rencontre. |
| 8 | TP1 | Temps consacré au TP1 | Ancien TP supprimé de Z03 | Rencontre à récupérer | Aucun ancien TP à préserver; réaffecter la rencontre. |
| 9 | Examen formatif 1 | Révision / formatif | Pas de labo associé | Formatif possiblement hors classe | Ne pas réserver nécessairement une rencontre complète; conserver l'idée d'une activité formative autonome. |
| 10 | Examen sommatif 1 | Évaluation sommative | Pas de labo associé | **Déplacer l'évaluation sommative à la rencontre 15** | Adapter plus tard la portée de l'évaluation à la nouvelle séquence. |
| 11 | Boucles | `while`, `do while` | Labo 11 → `420905_lab11.zip` | À conserver, probablement simplifier | Extraire et réévaluer les exercices; privilégier les boucles réellement utiles à Z03. |
| 12 | Tableaux | Tableaux et parcours avec une boucle | Labo 12 → `420905_lab12.zip` | À conserver | Garder la relation boucles → tableaux; vérifier les exercices après réorganisation. |
| 13 | Paramètres et retours | Fonctions avec paramètres et valeurs de retour | Labo 13 → `420905_lab13.zip` | Probablement à fusionner avec l'introduction aux fonctions | Extraire le labo 13 et rattacher les exercices à la future rencontre sur les fonctions. |
| 14 | Classes et attributs | Classes, attributs, élément HTML en variable | Labo 14 → `420905_lab14.zip` | Probablement à intégrer au bloc DOM | Extraire le labo 14 et répartir les exercices avec les notions DOM correspondantes. |
| 15 | Tableaux d'éléments HTML | `querySelectorAll`, collections d'éléments, boucles | Labo 15 → `420905_lab15.zip` | Matière à déplacer plus tôt; rencontre 15 réservée à l'examen | Extraire le labo 15 et rattacher les exercices à la future rencontre DOM + tableaux/boucles. |

## Nouvelles sources HTML / CSS

| Source | Contenu principal | Utilisation prévue | État |
|---|---|---|---|
| `R01-Introduction-HTML-Markdown/cours.md` | structure HTML, balises, attributs, titres, paragraphes, listes, images, chemins relatifs, navigation, commentaires, validation W3C | Source principale pour la future rencontre HTML et pour les premières compétences évaluées | Importée; à intégrer dans `web/docs` |
| `R02-Introduction-CSS-Markdown/cours.md` | syntaxe CSS, feuille externe, sélecteurs, classes/id, cascade simple, conteneurs, couleurs, bordures, texte et typographie | Source principale pour le CSS minimal; conserver seulement le noyau évalué et déplacer le surplus en contenu facultatif au besoin | Importée; à intégrer dans `web/docs` |

Les dossiers `R01-Introduction-HTML-Markdown/` et `R02-Introduction-CSS-Markdown/` sont pour l'instant des **sources de migration** à la racine du dépôt. Ils ne font pas encore partie de la navigation Docusaurus tant que leur contenu n'est pas déplacé/adapté sous `web/docs/`.

## Contraintes de calendrier confirmées

- Le cours comporte 15 rencontres.
- Toute matière essentielle doit être terminée au plus tard à la rencontre 13.
- La **rencontre 14 est un buffer** : rattrapage, travail sur un TP, pratique, révision ou absorption d'une interruption. Aucune nouvelle notion essentielle ne doit dépendre de cette rencontre.
- La rencontre 15 est réservée à l'évaluation sommative.
- Le formatif ne nécessite pas forcément une rencontre complète et peut devenir une activité à faire hors classe.

## Contraintes d'évaluation confirmées

- Une seule évaluation sommative formelle est prévue à la rencontre 15.
- L'évaluation doit commencer tôt dans la session sous forme de validations progressives de compétences observables.
- Au moins **15 % de la note doit avoir été évalué au plus tard à la rencontre 6**.
- Les validations doivent pouvoir être réalisées en classe par petites unités plutôt que dépendre d'une seule remise de gros TP.
- Les compétences non maîtrisées lors d'une première tentative devraient pouvoir être représentées lorsque la logistique le permet.
- Les notions déclarées facultatives ou « pour aller plus loin » ne doivent pas faire partie des critères obligatoires ni de l'examen final.
- Le détail de cette stratégie est maintenu dans `EVALUATION.md`.

## Priorisation proposée de la matière héritée

Cette section guide les choix de réduction. Les éléments marqués « couper / optionnel » ne sont pas encore supprimés tant que leur migration et leurs exercices n'ont pas été traités.

| Bloc hérité | À garder comme essentiel | À compresser | À couper ou rendre optionnel |
|---|---|---|---|
| Environnement de travail | dossiers/fichiers, extensions, OneDrive, ZIP, ouvrir un projet dans VS Code et le navigateur | quelques bonnes pratiques d'organisation | outils avancés de gestion de fichiers non requis |
| HTML | structure du document, titres/paragraphes/listes, liens, images, attributs utiles, chemins relatifs, navigation | sémantique supplémentaire si utile | éléments HTML rarement utilisés dans les exercices |
| CSS | liaison de la feuille CSS, sélecteurs/classes, propriétés visuelles de base, `margin`/`padding`, `display` dans des cas simples | dimensions et mise en page légère | détails `inline`/`inline-block`, positionnement, mises en page complexes, Flexbox/Grid avancés, animations |
| Variables / chaînes | variables, affectation, nombres, chaînes, opérateurs simples, template strings | opérateurs d'affectation secondaires | détails de priorité des opérateurs au-delà du nécessaire |
| Conditions | booléens, comparaisons, `if`, `else`, `else if`, `&&`, `||` | exemples complexes d'opérateurs logiques | opérateur `!` et tableau complet de priorité des opérateurs |
| Fonctions | déclaration, appel, paramètres simples | plusieurs paramètres, `return` présenté brièvement | approfondissement des valeurs de retour, exemples sophistiqués si le temps manque |
| Portée des variables | comprendre qu'une variable déclarée dans une fonction est locale | mentionner les globales seulement lorsqu'un état doit être partagé | convention systématique du préfixe `g` et théorie détaillée sur les globales |
| Événements | `click`, `addEventListener`, fonction appelée par un événement | un second événement seulement si utile à un exercice | catalogue `mouseover` / `mouseout` si non requis par un TP |
| Styles via DOM | modifier une propriété simple; surtout utiliser des classes CSS avec `classList` | quelques propriétés `.style` utiles | mémoriser une longue liste de propriétés CSS en JavaScript |
| Classes DOM | `classList.add`, `remove`, `toggle` | `contains` | cas avancés non nécessaires |
| Attributs DOM | lire/modifier un attribut concret lorsque requis (`src`, `alt`, etc.) | présentation courte intégrée au DOM | rencontre complète consacrée aux attributs |
| Boucles | comprendre la répétition et savoir parcourir une séquence | choisir une forme principale de boucle pour le cours | `do...while`, conditions de boucle complexes, débogueur avancé |
| Tableaux | création, index, `length`, parcours; `push` si utile | modification simple d'un élément | `pop`, `splice` et opérations de gestion avancées si non nécessaires |
| Plusieurs éléments DOM | `querySelectorAll` et parcours de plusieurs éléments | intégrer cette notion au bloc tableaux/boucles/DOM | en faire une rencontre complète indépendante |
| Débogage | lire la console, tester souvent, reconnaître les erreurs courantes | pratiquer le débogage dans tous les cours | consacrer une grosse section autonome au débogueur |

## Décisions confirmées

- Les anciens TP du 905 ont été retirés et ne sont pas des sources à préserver.
- Toute fusion de contenu doit inclure explicitement la migration des exercices associés.
- La rencontre 14 doit rester disponible comme buffer et séance de travail/rattrapage.
- La rencontre 15 est l'évaluation sommative.
- Le CSS évalué doit rester minimal; les notions de mise en page plus complexes peuvent être conservées comme contenu facultatif clairement identifié.
- L'évaluation progressive par compétences devient le modèle privilégié pour obtenir des notes avant l'examen final sans accumuler de grosses corrections simultanées.

## Décisions / hypothèses en cours

- Fusionner les anciens cours 5 (Booléens et conditions) et 6 (Opérateurs logiques) en une seule rencontre est considéré réaliste.
- Si cette fusion est retenue, `420905_lab5.zip` et `420905_lab6.zip` devront être extraits, comparés et recomposés en un ensemble cohérent d'exercices.
- Les quatre premières rencontres de la future séquence devraient introduire l'environnement de travail, HTML et CSS avant le JavaScript; la répartition exacte reste à confirmer.
- Les paramètres de fonctions sont considérés plus importants que l'approfondissement des valeurs de retour.
- Pour les boucles, `do...while` est un bon candidat à supprimer.
- Pour les tableaux, `pop()` et `splice()` sont de bons candidats à supprimer si aucun exercice essentiel n'en dépend.
- Le DOM devrait privilégier l'application/retrait de classes CSS plutôt qu'une longue liste de styles écrits directement en JavaScript.
- Une petite application locale de suivi des compétences pour l'enseignant est envisagée afin d'enregistrer rapidement les validations en classe.

## Journal des migrations

| Date | Changement | Sources concernées | Exercices concernés | État |
|---|---|---|---|---|
| 2026-08-18 | Création du registre de suivi | Cours 1 à 15 | Labos 2–6 et 11–15 inventoriés | En cours |
| 2026-08-18 | Sommative fixée à la rencontre 15 | Ancien cours 10 | Aucun labo | Décidé |
| 2026-08-18 | Fusion booléens + opérateurs logiques envisagée | Anciens cours 5 et 6 | `420905_lab5.zip`, `420905_lab6.zip` | À réaliser lors de la réorganisation |
| 2026-08-18 | Rencontre 14 réservée comme buffer / travail / rattrapage | Future rencontre 14 | À déterminer | Décidé |
| 2026-08-18 | Première priorisation des notions à simplifier ou couper | Cours 4, 6, 11 à 15 principalement | Labos correspondants à vérifier avant suppression | Analyse en cours |
| 2026-08-18 | Adoption d'une stratégie d'évaluation progressive par compétences | Future séquence complète | Exercices à rattacher aux compétences lors de la migration | Décidé |
| 2026-08-18 | CSS complexe retiré du noyau évalué | Futures rencontres CSS | Nouveaux exercices HTML/CSS à concevoir | Décidé |
| 2026-08-18 | Import des sources éditoriales HTML et CSS | `R01-Introduction-HTML-Markdown/`, `R02-Introduction-CSS-Markdown/` | Exercices HTML/CSS à concevoir/rattacher | Sources disponibles; intégration Docusaurus à faire |
