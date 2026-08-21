---
title: Projet Web - Évaluation
description: Comprendre les huit compétences HTML/CSS, la personnalisation, les exigences minimales du projet et le calendrier de validation.
sidebar_position: 1.5
---

# Projet Web — Évaluation

Pendant les cinq premières rencontres, votre Projet Web sert à démontrer progressivement votre maîtrise de **huit compétences techniques en HTML et CSS** et votre capacité à vous approprier le projet.

Le bloc HTML/CSS représente **30 % de la note finale du cours**.

| Partie évaluée | Part du bloc HTML/CSS | Part de la note finale |
| --- | ---: | ---: |
| Huit compétences techniques | 80 % | 24 % |
| Personnalisation et appropriation du projet | 20 % | 6 % |
| **Total** | **100 %** | **30 %** |

## Votre collection de badges techniques

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

## États possibles des compétences

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

## Calendrier des validations techniques

| Validation | Période cible | Compétences |
| --- | --- | --- |
| **A — Structure HTML** | **Rencontre 2 — priorité** | 🗂️ WEB-01 et 🧱 WEB-02 |
| **B — Contenu et navigation** | **Rencontre 2 et début de la rencontre 3** | ✍️ WEB-03 et 🔗 WEB-04 |
| **C — CSS de base** | **Rencontres 3–4** | 🔌 WEB-05 et 🎯 WEB-06 |
| **D — Mise en forme et disposition** | **Rencontres 4–5** | 🎨 WEB-07 et 📐 WEB-08 |

Ces périodes sont des fenêtres de validation. Le cours continue même si une compétence est encore **À revoir**.

# Personnalisation et appropriation du projet — 20 % du bloc

Cette dimension est évaluée séparément à la fin du bloc HTML/CSS. Elle ne devient pas un neuvième badge et ne reçoit pas les états `À faire`, `À revoir` ou `Validée`.

Elle sert à reconnaître l'investissement **visible dans le résultat** : contenu original, décisions adaptées au thème, cohérence et attention portée à la finition.

:::info Réutiliser une syntaxe du cours est normal
Vous pouvez reprendre la structure HTML de base, une syntaxe CSS ou une méthode expliquée dans le cours.

La personnalisation porte sur la façon dont vous transformez ces outils pour créer **votre propre site**. Remplacer seulement deux mots tout en conservant les textes, les images, les couleurs et les choix de l'exemple ne constitue pas une appropriation suffisante.
:::

## Grille d'appréciation — 20 points

| Critère | 5 points | 3 points | 1 point ou 0 |
| --- | --- | --- | --- |
| **Contenu original** | textes personnels, précis et clairement adaptés au thème; images choisies pour leur pertinence | contenu généralement personnel, mais certaines parties restent brèves ou génériques | contenu largement copié, très générique, vide ou composé de texte de remplissage |
| **Cohérence du thème** | accueil, deux pages de sujet et page À propos forment un ensemble clair et complémentaire | les pages appartiennent au même thème, mais certains liens entre elles sont peu développés | pages peu reliées, répétitives ou ajoutées seulement pour atteindre le minimum |
| **Décisions personnelles** | noms, organisation, classes, couleurs et présentation montrent des choix réfléchis | plusieurs choix personnels sont présents, mais certaines décisions reprennent directement les exemples | très peu d'adaptation; le site ressemble presque entièrement à l'exercice guidé |
| **Finition et initiative** | site relu, cohérent et soigné; enrichissements pertinents ou amélioration attentive du minimum | minimum fonctionnel et généralement propre, avec quelques détails à corriger | nombreux éléments négligés, incohérents ou laissés au stade de brouillon |

### Interprétation globale

```text
17 à 20 → appropriation très forte
13 à 16 → personnalisation claire
 9 à 12 → personnalisation limitée
 0 à  8 → projet surtout générique, copié ou inachevé
```

Un site simple peut obtenir une excellente appréciation s'il est personnel, cohérent et soigné. Les effets CSS avancés, le talent graphique ou le nombre d'heures supposé ne sont pas évalués.

# Minimum du Projet Web

À la fin de la rencontre 5, votre site doit fournir au moins ce support :

```text
mon-site/
├── index.html
├── css/
│   └── styles.css
├── images/
│   └── au moins deux images locales
└── pages/
    ├── deux pages de sujet distinctes
    └── apropos.html
```

Le site doit aussi contenir :

- **quatre pages HTML minimum**;
- au moins deux pages consacrées au thème principal;
- une page À propos adaptée au type de site;
- une navigation complète sur chaque page;
- du contenu original et différent dans chaque page;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des classes réutilisables;
- une application du modèle en boîte;
- une utilisation simple de Flexbox.

Vous pouvez ajouter plus de deux pages de sujet. `background-image` demeure un enrichissement facultatif du Projet Web et n'ajoute pas un critère de validation.

## Contenu attendu dans la page À propos

Pour un site personnel ou informatif, la page peut présenter votre prénom ou un pseudonyme, votre domaine d'études, vos intérêts, vos passe-temps et la raison du choix du thème.

Pour une entreprise ou une organisation fictive, elle peut présenter sa description, sa mission, ses services, son équipe et des coordonnées fictives.

Ne publiez pas de renseignements personnels sensibles.

## Preuves minimales par compétence

| Compétence | Support minimal dans le projet |
| --- | --- |
| **WEB-01** | `index.html` à la racine, trois pages sous `pages/`, ressources dans des dossiers logiques et chemins relatifs fonctionnels |
| **WEB-02** | quatre documents HTML complets, correctement imbriqués et possédant chacun un titre de page et un contenu visible |
| **WEB-03** | contenu réel et distinct sur les quatre pages, titres et paragraphes pertinents, au moins une liste utile, au moins deux images locales avec `alt` |
| **WEB-04** | navigation présente sur chaque page et permettant d'atteindre les quatre pages |
| **WEB-05** | un seul fichier `css/styles.css` chargé correctement par les quatre pages |
| **WEB-06** | au moins un sélecteur d'élément et deux classes nommées selon leur rôle; au moins une classe réutilisée |
| **WEB-07** | une typographie générale, des choix de couleurs cohérents et au moins un bloc mis en valeur avec une propriété visuelle comprise |
| **WEB-08** | un bloc utilisant volontairement le modèle en boîte et un parent utilisant `display: flex` avec `gap` |

Ces minimums créent des occasions d'observer les compétences. L'enseignant peut utiliser une autre partie équivalente de votre projet si elle démontre mieux votre maîtrise.

# Les huit compétences

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

## Avant l'appréciation de la personnalisation

- [ ] Mes textes sont personnels et adaptés à mon thème.
- [ ] Mes deux pages de sujet apportent des informations différentes.
- [ ] Ma page À propos correspond réellement au type de site choisi.
- [ ] Mes images, mes noms de fichiers et mes choix visuels ont été sélectionnés pour mon projet.
- [ ] J'ai relu et corrigé les détails visibles.
- [ ] Mon site montre une appropriation réelle, même s'il demeure simple.

:::warning La question n'est pas seulement « Est-ce que c'est beau? »
Le but technique est de vérifier que vous comprenez ce que vous avez construit. La personnalisation reconnaît ensuite la façon dont vous vous êtes approprié le mandat et avez soigné le résultat.
:::
