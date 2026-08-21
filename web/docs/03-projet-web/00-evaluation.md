---
title: Projet Web - Évaluation
description: Comprendre les huit compétences HTML/CSS, les exigences minimales du projet et le calendrier de validation.
sidebar_position: 1.5
---

# Projet Web — Évaluation

Pendant les cinq premières rencontres, votre Projet Web sert à démontrer progressivement votre maîtrise de **huit compétences en HTML et CSS**.

L'ensemble de ces validations représente **30 % de la note finale du cours**.

## Votre collection de badges

| Badge | Compétence |
| --- | --- |
| 🗂️ | **WEB-01 — Organiser un projet Web et utiliser les chemins** |
| 🧱 | **WEB-02 — Construire une page HTML correctement structurée** |
| ✍️ | **WEB-03 — Structurer et enrichir le contenu HTML** |
| 🔗 | **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle** |
| 🔌 | **WEB-05 — Associer correctement une feuille CSS externe** |
| 🎯 | **WEB-06 — Cibler les éléments avec des sélecteurs appropriés** |
| 🎨 | **WEB-07 — Mettre en forme une interface avec CSS** |
| 📐 | **WEB-08 — Organiser l'espace et la disposition des éléments** |

## États possibles

- **À faire** : la compétence n'a pas encore été présentée;
- **À revoir** : certains éléments doivent être retravaillés;
- **Validée** : la maîtrise observée est suffisante et le badge est acquis.

Une compétence **À revoir** peut être présentée de nouveau lorsque les corrections sont faites et que la logistique du cours le permet.

## Comment fonctionne une validation?

Lorsque vous pensez être prêt :

1. relisez la checklist de la compétence;
2. vérifiez que votre site fonctionne;
3. demandez une validation;
4. montrez la partie concernée;
5. expliquez votre code;
6. effectuez une petite modification ou correction si elle est demandée.

:::warning Présence du code et maîtrise
Respecter les minimums du projet ne valide pas automatiquement une compétence.

La validation sert à vérifier que vous savez **retrouver, expliquer, modifier et corriger** ce que vous avez construit.
:::

## Calendrier des validations

| Validation | Période cible | Compétences |
| --- | --- | --- |
| **A — Structure HTML** | **Rencontre 2 — priorité** | 🗂️ WEB-01 et 🧱 WEB-02 |
| **B — Contenu et navigation** | **Rencontre 2 et début de la rencontre 3** | ✍️ WEB-03 et 🔗 WEB-04 |
| **C — CSS de base** | **Rencontres 3–4** | 🔌 WEB-05 et 🎯 WEB-06 |
| **D — Mise en forme et disposition** | **Rencontres 4–5** | 🎨 WEB-07 et 📐 WEB-08 |

Ces périodes sont des fenêtres de validation. Le cours continue même si une compétence est encore **À revoir**.

## Minimum du Projet Web

À la fin de la rencontre 5, votre site doit fournir au moins ce support :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── au moins deux images locales
└── pages/
    ├── deux pages secondaires distinctes
```

Le site doit aussi contenir :

- trois pages HTML minimum;
- une navigation complète sur chaque page;
- du contenu original sur un thème principal et deux sous-thèmes;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des classes réutilisables;
- une application du modèle en boîte;
- une utilisation simple de Flexbox.

`background-image` est un enrichissement facultatif du Projet Web et n'ajoute pas un critère de validation.

## Preuves minimales par compétence

| Compétence | Support minimal dans le projet |
| --- | --- |
| **WEB-01** | `index.html` à la racine, deux pages sous `pages/`, ressources dans des dossiers logiques et chemins relatifs fonctionnels |
| **WEB-02** | trois documents HTML complets, correctement imbriqués et possédant chacun un titre de page et un contenu visible |
| **WEB-03** | contenu réel et distinct sur les trois pages, titres et paragraphes pertinents, au moins une liste utile, au moins deux images locales avec `alt` |
| **WEB-04** | navigation présente sur chaque page et permettant d'atteindre les trois pages dans les deux directions |
| **WEB-05** | un seul fichier `css/styles.css` chargé correctement par les trois pages |
| **WEB-06** | au moins un sélecteur d'élément et deux classes nommées selon leur rôle; au moins une classe réutilisée |
| **WEB-07** | une typographie générale, des choix de couleurs cohérents et au moins un bloc mis en valeur avec une propriété visuelle comprise |
| **WEB-08** | un bloc utilisant volontairement le modèle en boîte et un parent utilisant `display: flex` avec `gap` |

Ces minimums créent des occasions d'observer les compétences. L'enseignant peut utiliser une autre partie équivalente de votre projet si elle démontre mieux votre maîtrise.

## Les huit compétences

<details>
<summary><strong>🗂️ WEB-01 — Organiser un projet Web et utiliser les chemins</strong></summary>

Vous devez pouvoir :

- retrouver rapidement vos fichiers;
- expliquer l'organisation de vos dossiers;
- lire un chemin relatif à partir du fichier actuel;
- utiliser `../` lorsque nécessaire;
- corriger un chemin simple qui ne fonctionne pas.

</details>

<details>
<summary><strong>🧱 WEB-02 — Construire une page HTML correctement structurée</strong></summary>

Vous devez pouvoir :

- reconnaître `html`, `head` et `body`;
- utiliser une structure complète;
- ouvrir, fermer et imbriquer les éléments correctement;
- repérer une erreur simple de structure;
- garder une indentation suffisamment claire pour lire le document.

</details>

<details>
<summary><strong>✍️ WEB-03 — Structurer et enrichir le contenu HTML</strong></summary>

Vous devez pouvoir :

- choisir des titres, paragraphes et listes selon le rôle du contenu;
- ajouter des images locales;
- fournir un attribut `alt` à chaque `<img>`;
- expliquer pourquoi vous avez choisi certains éléments;
- ajouter ou modifier du contenu sans briser la page.

:::tip Accessibilité
La présence de `alt` est attendue. La description doit transmettre l'information utile de l'image; une image purement décorative peut utiliser `alt=""`.
:::

</details>

<details>
<summary><strong>🔗 WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle</strong></summary>

Vous devez pouvoir :

- créer plusieurs pages;
- utiliser `a` et `href`;
- adapter les chemins de navigation selon l'emplacement de la page;
- tester tous les liens;
- corriger un lien qui pointe au mauvais endroit.

</details>

<details>
<summary><strong>🔌 WEB-05 — Associer correctement une feuille CSS externe</strong></summary>

Vous devez pouvoir :

- créer un fichier CSS externe;
- le relier à toutes les pages avec `link`;
- expliquer pourquoi le chemin diffère entre la racine et `pages/`;
- reconnaître le sélecteur, la propriété et la valeur d'une règle simple;
- diagnostiquer une page qui ne reçoit pas son CSS.

</details>

<details>
<summary><strong>🎯 WEB-06 — Cibler les éléments avec des sélecteurs appropriés</strong></summary>

Vous devez pouvoir :

- choisir entre un sélecteur d'élément et une classe;
- créer une classe utile;
- réutiliser une classe lorsque plusieurs éléments partagent le même rôle;
- relier `class="nom"` dans HTML à `.nom` dans CSS;
- modifier un sélecteur pour cibler les bons éléments.

</details>

<details>
<summary><strong>🎨 WEB-07 — Mettre en forme une interface avec CSS</strong></summary>

Vous devez pouvoir :

- retrouver la règle qui produit un changement visible;
- expliquer vos principales propriétés de couleur, de typographie, d'arrière-plan ou de bordure;
- modifier une propriété et prévoir son effet général;
- garder une apparence cohérente entre les pages.

Il n'est pas nécessaire d'accumuler les décorations.

</details>

<details>
<summary><strong>📐 WEB-08 — Organiser l'espace et la disposition des éléments</strong></summary>

Vous devez pouvoir :

- expliquer contenu → `padding` → `border` → `margin`;
- choisir entre `padding` et `margin` selon le problème;
- identifier un parent flex et ses enfants directs;
- utiliser `display: flex` et `gap` dans un besoin simple;
- ajuster un espacement ou une disposition sans recopier une solution complète.

`justify-content` et `align-items` peuvent être utiles, mais ils ne sont pas exigés comme un catalogue à mémoriser.

</details>

## Avant d'appeler votre enseignant

- [ ] J'ai identifié les badges que je veux présenter.
- [ ] J'ai relu leur checklist.
- [ ] La partie concernée fonctionne dans le navigateur.
- [ ] Je sais où se trouvent les fichiers et les règles que je vais montrer.
- [ ] Je peux expliquer mes choix avec mes mots.
- [ ] Je suis prêt à faire une petite modification.

:::warning La question n'est pas seulement « Est-ce que c'est beau? »
Le but est de vérifier que vous comprenez ce que vous avez construit et que vous savez intervenir dans votre propre code.
:::
