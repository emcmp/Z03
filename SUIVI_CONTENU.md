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

## Décisions confirmées

- Le cours comporte 15 rencontres.
- La rencontre 15 est réservée à l'évaluation sommative.
- Les anciens TP du 905 ont été retirés et ne sont pas des sources à préserver.
- Le formatif ne nécessite pas forcément une rencontre complète et peut devenir une activité à faire hors classe.
- Toute fusion de contenu doit inclure explicitement la migration des exercices associés.

## Décisions / hypothèses en cours

- Fusionner les anciens cours 5 (Booléens et conditions) et 6 (Opérateurs logiques) en une seule rencontre est considéré réaliste.
- Si cette fusion est retenue, `420905_lab5.zip` et `420905_lab6.zip` devront être extraits, comparés et recomposés en un ensemble cohérent d'exercices.
- Les quatre premières rencontres de la future séquence devraient introduire l'environnement de travail, HTML et CSS avant le JavaScript; la répartition exacte reste à confirmer.

## Journal des migrations

| Date | Changement | Sources concernées | Exercices concernés | État |
|---|---|---|---|---|
| 2026-08-18 | Création du registre de suivi | Cours 1 à 15 | Labos 2–6 et 11–15 inventoriés | En cours |
| 2026-08-18 | Sommative fixée à la rencontre 15 | Ancien cours 10 | Aucun labo | Décidé |
| 2026-08-18 | Fusion booléens + opérateurs logiques envisagée | Anciens cours 5 et 6 | `420905_lab5.zip`, `420905_lab6.zip` | À réaliser lors de la réorganisation |
