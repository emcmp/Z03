---
title: Étape 1 - Définir votre thème et votre page d'accueil
description: Choisir un thème principal, planifier deux sous-thèmes et construire une première page d'accueil en HTML.
sidebar_position: 2
---

# Projet Web — Étape 1

<ProjectStepHero step={1} />

## Mission

Choisissez le thème principal de votre site, planifiez au moins **deux sous-thèmes distincts**, puis construisez une première page d'accueil qui présente clairement l'ensemble.

Avant de commencer, faites l'**[exercice guidé sur la première page HTML](../01-cours/01-rencontre1-exercice-guide.md)**.

## 1. Choisir un thème qui peut devenir un site

Votre sujet doit pouvoir être divisé en plusieurs pages.

Exemples :

```text
Équipe sportive
├── Joueur 1
└── Joueur 2
```

```text
Saga de films
├── Film 1
└── Film 2
```

```text
Collection de recettes
├── Recette 1
└── Recette 2
```

Choisissez maintenant :

- le thème principal;
- le nom provisoire de la page d'accueil;
- deux sous-thèmes qui deviendront des pages à la rencontre 2.

:::warning Contenu personnel
Le thème, les textes et les exemples de l'exercice guidé servent seulement à pratiquer. Votre projet doit présenter un autre sujet et un autre contenu.
:::

## 2. Planifier les trois pages

Avant de coder, complétez mentalement ou sur papier ce petit plan :

| Page | Rôle | Contenu prévu |
| --- | --- | --- |
| `index.html` | présenter le thème général | introduction et aperçu des sous-thèmes |
| page secondaire 1 | développer le premier sous-thème | informations propres à ce sujet |
| page secondaire 2 | développer le deuxième sous-thème | informations différentes du premier |

Vous créerez les deux pages secondaires à la rencontre 2. Aujourd'hui, elles doivent déjà avoir un but clair.

## 3. Créer le projet

Créez un dossier pour votre site dans votre dossier Z03, ouvrez **le dossier complet** dans VS Code et créez `index.html`.

Utilisez la structure HTML complète vue dans le **[cours de la rencontre 1](../01-cours/01-rencontre1.md)** et dans l'exercice guidé. Ne recopiez pas ici les textes de l'exercice.

## Minimum attendu dans `index.html`

Votre page d'accueil doit contenir :

- un `<title>` adapté au thème;
- un `<h1>` qui nomme clairement le site;
- une introduction d'au moins deux courts paragraphes;
- une section avec un `<h2>` pour présenter le premier sous-thème;
- une autre section avec un `<h2>` pour présenter le deuxième sous-thème;
- au moins une liste utilisée dans un contexte pertinent;
- du contenu réel, et non du texte de remplissage.

Vous pouvez utiliser `<strong>` ou `<em>` lorsqu'ils apportent un sens au contenu.

## Décisions à prendre

- Quel est le nom du site?
- À qui s'adresse-t-il?
- Que doit comprendre une personne en lisant la page d'accueil?
- Pourquoi vos deux sous-thèmes méritent-ils chacun leur propre page?
- Quels noms de fichiers seraient courts, descriptifs, sans espace et sans accent?

## Tests à effectuer

- [ ] Le bon dossier est ouvert dans VS Code.
- [ ] Le fichier se nomme réellement `index.html`.
- [ ] La page s'ouvre dans le navigateur.
- [ ] Le `<title>` et le `<h1>` correspondent au thème.
- [ ] Les deux sous-thèmes sont annoncés clairement.
- [ ] Les balises sont correctement imbriquées.
- [ ] Le contenu est différent de celui de l'exercice guidé.
- [ ] Le document a été vérifié avec le validateur W3C avec de l'aide au besoin.

## Compétences préparées

Il n'y a aucune validation sommative à la rencontre 1. Cette étape prépare surtout :

- 🗂️ **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- 🧱 **WEB-02 — Construire une page HTML correctement structurée**;
- ✍️ **WEB-03 — Structurer et enrichir le contenu HTML**.

:::note Pour aller plus loin — non évalué
Ajoutez une troisième idée de sous-thème. Vous pourrez éventuellement créer une quatrième page si votre sujet s'y prête.

Ne commencez pas encore CSS ou une mise en page complexe.
:::

## Prochaine étape

À la rencontre 2, vous créerez les deux pages secondaires, ajouterez des images locales et construirez une navigation entre les trois pages.
