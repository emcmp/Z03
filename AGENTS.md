# Z03 - Instructions pour Codex

## Mission du dépôt

Ce dépôt est le dépôt de travail personnel pour la refonte du cours Z03, une introduction à la programmation Web offerte en option à des étudiants qui n'ont pas nécessairement de formation préalable en informatique.

Le site actuel provient d'une copie du cours 905. Le 905 suppose déjà des acquis en HTML et CSS; Z03 ne doit pas faire cette hypothèse. La refonte doit donc introduire progressivement HTML, CSS et JavaScript, tout en réduisant la surcharge de contenu.

Lire `REFONTE.md` avant toute tâche qui touche la structure pédagogique, l'ordre des notions, le niveau de difficulté ou le contenu destiné aux étudiants.

Lire et mettre à jour `SUIVI_CONTENU.md` avant toute tâche qui déplace, fusionne, supprime ou renumérote une rencontre. Les laboratoires et fichiers d'exercices associés doivent être migrés avec le contenu de cours.

## Structure du dépôt

- `web/` : application Docusaurus et véritable racine technique du site.
- `web/docs/` : contenu pédagogique visible par les étudiants.
- `web/static/` : ressources statiques.
- `web/src/` : composantes et styles Docusaurus.
- `.github/workflows/` : déploiement GitHub Pages.
- `REFONTE.md` : objectifs et décisions de la refonte.
- `SUIVI_CONTENU.md` : cartographie des rencontres, notions, laboratoires et migrations de contenu.

Les instructions plus spécifiques de `web/AGENTS.md` s'appliquent à tout ce qui se trouve sous `web/`.

## Environnement et commandes

Utiliser Node.js 20 pour rester cohérent avec GitHub Actions.

Depuis la racine du dépôt :

- première installation : `npm run setup`
- serveur de développement : `npm run start`
- build de validation : `npm run build`
- aperçu du build statique : `npm run serve`
- nettoyage Docusaurus : `npm run clear`

Les scripts racine délèguent leurs commandes au projet situé dans `web/`.

## Règles de travail

1. Faire des changements ciblés. Ne pas réécrire en masse le contenu hérité du 905 sans demande explicite.
2. Préserver les changements de l'utilisateur. Toujours inspecter l'état Git et le diff avant de remplacer ou supprimer du contenu existant.
3. Ne pas modifier les dépendances, lancer `npm audit fix`, ni effectuer une mise à niveau majeure de Docusaurus sauf si la tâche porte explicitement sur les dépendances.
4. Ne jamais ajouter `node_modules/` ni `web/build/` au dépôt.
5. Ne pas pousser, déployer ou synchroniser vers `departement-info-cem/z03` sans demande explicite.
6. Ne pas réécrire l'historique Git et ne pas forcer de push.
7. Garder les textes destinés aux étudiants en français clair, concret et accessible.
8. Lorsque plusieurs solutions sont possibles, privilégier la solution la plus simple à expliquer et à maintenir.
9. Une fusion de rencontres implique aussi l'inventaire et la migration de leurs laboratoires, archives et autres fichiers d'exercices. Ne pas supprimer une source d'exercices avant d'avoir vérifié sa migration et consigné le changement dans `SUIVI_CONTENU.md`.

## Validation

Pour toute tâche qui modifie `web/`, exécuter `npm run build` depuis la racine avant de déclarer la tâche terminée, sauf instruction explicite contraire.

Si le build échoue :

- corriger les erreurs causées par le changement;
- signaler clairement les erreurs préexistantes ou hors portée;
- ne pas masquer un échec de validation.

Pour un changement visuel ou de navigation, lancer aussi `npm run start` ou `npm run serve` lorsque c'est utile pour vérifier le rendu.

## Git et livraison

- Travailler normalement sur le dépôt personnel `emcmp/Z03`.
- Le dépôt officiel `departement-info-cem/z03` est une cible de publication ultérieure, pas le dépôt de développement courant.
- Ne créer une branche, un commit, une PR ou un déploiement que lorsque la demande le requiert ou que le flux de travail actif l'impose.
- Utiliser des messages de commit courts et descriptifs.

## Principe pédagogique prioritaire

Le cours doit rester abordable pour un débutant. Avant d'ajouter une notion, se demander si elle est nécessaire pour atteindre les objectifs du cours. Préférer une progression avec une notion à la fois, un exemple concret, puis une pratique guidée.