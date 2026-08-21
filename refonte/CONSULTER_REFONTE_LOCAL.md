# Consulter les documents de refonte localement

Les documents du dossier `refonte/` ne sont plus inclus dans le site étudiant publié.

Ils peuvent toutefois être consultés avec la même interface Docusaurus sur le poste de l'enseignant.

## Méthode Windows la plus simple

Dans le dossier `web`, double-cliquez sur :

```text
demarrer-refonte.cmd
```

Le script :

1. se place dans le bon dossier;
2. installe les dépendances avec `npm ci` si `node_modules` n'existe pas;
3. démarre Docusaurus en mode interne;
4. ajoute l'entrée **Refonte** dans la navigation locale.

La fenêtre de terminal doit rester ouverte pendant la consultation.

## Méthode par terminal

Dans un terminal ouvert dans `web/` :

```bash
npm ci
npm run start:refonte
```

Après la première installation, seule la deuxième commande est normalement nécessaire.

## Construire une copie locale statique

Pour produire une version locale complète avec la section Refonte :

```bash
npm run build:refonte
```

Le résultat est créé dans `web/build/`. Ce build interne ne doit pas être déployé sur le site étudiant.

## Pourquoi aucun mot de passe n'est nécessaire

Le site public est construit sans la variable `INCLUDE_REFONTE_DOCS`. Le module documentaire interne et l'entrée de navigation **Refonte** ne font donc pas partie de la production.

Le mode interne est activé uniquement par :

```text
INCLUDE_REFONTE_DOCS=true
```

Le script `start:refonte` configure cette variable automatiquement sur le poste local.

## Mode étudiant local

La commande habituelle reste :

```bash
npm start
```

Elle montre exactement la structure destinée aux étudiants, sans les documents internes.
