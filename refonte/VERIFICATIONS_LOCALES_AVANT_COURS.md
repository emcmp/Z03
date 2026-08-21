# Vérifications locales avant le début du cours

Cette liste regroupe les éléments qui ne peuvent pas être confirmés uniquement à partir du dépôt. Ils doivent être testés sur un vrai poste du laboratoire avant la première rencontre concernée.

## Avant la rencontre 1

- [ ] Ouvrir une session avec un compte étudiant de test ou confirmer le comportement attendu avec les services informatiques.
- [ ] Vérifier que l'espace OneDrive scolaire apparaît et que les étudiants peuvent y créer un dossier `Z03`.
- [ ] Vérifier que les extensions de noms de fichiers peuvent être affichées avec les menus actuellement installés.
- [ ] Vérifier la commande d'extraction ZIP disponible sur les postes.
- [ ] Ouvrir un dossier complet dans VS Code depuis Windows et depuis **Fichier → Ouvrir le dossier**.
- [ ] Confirmer que `F5` dans VS Code ouvre bien un fichier HTML dans le navigateur avec la configuration installée au cégep.
- [ ] Noter le nom exact de l'extension ou de la configuration qui rend `F5` fonctionnel.
- [ ] Vérifier la méthode de repli : révéler `index.html` dans l'Explorateur Windows, puis le double-cliquer.
- [ ] Identifier le nom exact de la disposition de clavier installée sur les postes.
- [ ] Vérifier une par une les combinaisons de la page **Caractères utiles au clavier**, notamment `<`, `>`, `/`, `{`, `}`, `:`, `;`, `@`, `\` et `|`.
- [ ] Vérifier que les captures Windows et VS Code restent suffisamment proches de l'interface réelle pour être utilisables.

## Avant la rencontre 2

- [ ] Télécharger `chat.jpg` depuis la page de l'exercice sur un poste du laboratoire.
- [ ] Vérifier que le fichier conserve son nom et son extension après le téléchargement.
- [ ] Tester les chemins `images/chat.jpg` et `../images/chat.jpg` dans le navigateur utilisé en classe.

## Avant la rencontre 3

- [ ] Vérifier que les pages à la racine et sous `pages/` chargent correctement la même feuille CSS.
- [ ] Tester le cycle enregistrer–actualiser avec un fichier HTML et un fichier CSS ouverts simultanément.

## Avant la rencontre 5

- [ ] Télécharger `sentier.svg` depuis la page de l'exercice.
- [ ] Vérifier le chemin `url("../images/sentier.svg")` depuis `css/styles.css`.

## Avant chaque nouvelle session

- [ ] Tester les liens officiels du compte réseau, de la double authentification et de l'aide technologique.
- [ ] Tester les téléchargements nécessaires aux rencontres 1 à 5.
- [ ] Démarrer le site étudiant avec `npm start` et vérifier que **Refonte** n'apparaît pas.
- [ ] Démarrer le site interne avec `npm run start:refonte` et vérifier que **Refonte** apparaît.
- [ ] Exécuter `npm run build` sur le commit prévu pour la diffusion.
