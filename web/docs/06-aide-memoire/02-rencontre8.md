---
id: rencontre8
title: Rencontre 8 — Événements, styles, classes et attributs
slug: /aide-memoire/rencontre8
---

Retrouvez les syntaxes essentielles de cette rencontre. Les explications détaillées restent dans les pages du cours.

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre8/aide-memoire-rencontre8.html)**

## 1 · Événements

| Je veux… | Exemple |
| --- | --- |
| Réagir au clic | `document.querySelector(".bouton").addEventListener("click", changerTexte);` |
| Réagir au survol | `document.querySelector(".bouton").addEventListener("mouseover", texteBleu);` |
| Réagir à la sortie de la souris | `document.querySelector(".bouton").addEventListener("mouseout", texteNoir);` |

:::tip À retenir
Dans `addEventListener`, écrire le nom de la fonction **sans ()**. Le navigateur l’appelle quand l’événement arrive.
:::

## 2 · Fonction init

```javascript
function init() {
    document.querySelector(".bouton").addEventListener("click", changerTexte);
}

function changerTexte() {
    document.querySelector(".bouton").textContent = "Tu as cliqué !";
}
```

## 3 · Styles DOM

| Je veux… | Exemple |
| --- | --- |
| Changer la couleur du texte | `document.querySelector(".texte").style.color = "blue";` |
| Utiliser une couleur hexadécimale | `document.querySelector(".texte").style.color = "#DC143C";` |
| Changer le fond | `document.querySelector(".carte").style.backgroundColor = "yellow";` |
| Choisir le style de bordure | `document.querySelector(".carte").style.borderStyle = "solid";` |
| Choisir la couleur de bordure | `document.querySelector(".carte").style.borderColor = "red";` |
| Choisir la largeur de bordure | `document.querySelector(".carte").style.borderWidth = "2px";` |
| Changer la largeur | `document.querySelector(".carte").style.width = "200px";` |
| Changer la hauteur | `document.querySelector(".carte").style.height = "100px";` |
| Changer l’opacité | `document.querySelector(".carte").style.opacity = 0.5;` |
| Masquer l’élément | `document.querySelector(".carte").style.display = "none";` |
| Réafficher l’élément | `document.querySelector(".carte").style.display = "block";` |
| Déplacer depuis la gauche | `document.querySelector(".carte").style.left = "20px";` |
| Déplacer depuis le haut | `document.querySelector(".carte").style.top = "30px";` |

:::tip À retenir
Les dimensions et déplacements ci-dessus ont une unité : `"20px"`. L’opacité va de `0` (transparent) à `1` (opaque). `left` et `top` nécessitent un positionnement CSS adapté, par exemple `position: relative`. `display = "none"` retire aussi la place occupée; `"block"` réaffiche en bloc.
:::

## 4 · Classes

| Je veux… | Exemple |
| --- | --- |
| Ajouter une classe | `document.querySelector(".carte").classList.add("active");` |
| Retirer une classe | `document.querySelector(".carte").classList.remove("active");` |
| Basculer une classe | `document.querySelector(".carte").classList.toggle("active");` |

:::tip À retenir
Dans `classList`, écrire le nom **sans point**. `toggle` ajoute la classe absente ou retire la classe présente. Conserver la classe qui sert à retrouver l’élément. `querySelector` cible seulement le premier élément correspondant.
:::

## 5 · Attributs

| Je veux… | Exemple |
| --- | --- |
| Lire le texte alternatif | `let texteAlternatif = document.querySelector(".image").alt;` |
| Ajouter ou remplacer le texte alternatif | `document.querySelector(".image").alt = "Bébé requin";` |
| Vider le texte alternatif | `document.querySelector(".image").alt = "";` |

:::tip À retenir
Les attributs figurent dans la balise ouvrante HTML. L’affectation remplace la valeur précédente.
:::

## 6 · Récapitulatif

| Je veux… | Exemple |
| --- | --- |
| Modifier le texte | `document.querySelector(".texte").textContent = "Bonjour";` |
| Brancher une interaction | `document.querySelector(".bouton").addEventListener("click", changerTexte);` |
| Modifier l’apparence | `document.querySelector(".texte").style.color = "blue";` |
| Appliquer une classe CSS | `document.querySelector(".texte").classList.toggle("active");` |
| Modifier un attribut | `document.querySelector(".image").alt = "Description";` |

Pour télécharger les autres fiches, consultez la [page Téléchargements](./04-telechargements.md).
