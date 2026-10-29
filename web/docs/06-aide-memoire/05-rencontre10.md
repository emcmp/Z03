---
id: rencontre10
title: Rencontre 10 — Paramètres et retours
slug: /aide-memoire/rencontre10
---

Retrouvez les syntaxes essentielles des fonctions avec paramètres et valeurs de retour. Les explications complètes restent dans la [rencontre 10](../01-cours/10-rencontre10.md).

**[Télécharger cette fiche HTML pour la consulter hors ligne](pathname:///files/rencontre10/aide-memoire-rencontre10.html)**

## 1 · Paramètres et arguments

| Je veux… | Exemple |
| --- | --- |
| Déclarer une fonction avec un paramètre | `function alerteEtConsole(message) { /* instructions */ }` |
| Appeler la fonction avec un argument | `alerteEtConsole("Allo");` |
| Utiliser le paramètre dans la fonction | `alert(message);` |
| Réutiliser le paramètre | `console.log(message);` |

~~~javascript
function alerteEtConsole(message) {
    alert(message);
    console.log(message);
}

alerteEtConsole("Allo");
~~~

:::tip À retenir
À la déclaration, message est un paramètre. À l'appel, « Allo » est un argument. Le paramètre est un contrat : fournir une valeur attendue pour que le code fonctionne.
:::

## 2 · Plusieurs paramètres

~~~javascript
function salutations(nom, heure) {
    alert(`Bonjour ${nom}, il est actuellement ${heure} !`);
}

salutations("Mia", "15 h");
~~~

:::tip À retenir
Les paramètres nom et heure sont séparés par une virgule. À l'appel, les arguments suivent le même ordre.
:::

## 3 · Éviter de répéter des fonctions

| Je veux… | Exemple |
| --- | --- |
| Choisir aussi l’élément HTML | `function texteEtBordure(classe, couleurChoisie) { /* instructions */ }` |
| Cibler une classe reçue en argument | `document.querySelector(classe).style.color = couleurChoisie;` |
| Appeler avec une classe et une couleur | `texteEtBordure(".description", "crimson");` |

~~~javascript
function texteEtBordure(couleurChoisie) {
    document.querySelector(".texte").style.color = couleurChoisie;
    document.querySelector(".texte").style.borderColor = couleurChoisie;
}

texteEtBordure("pink");
texteEtBordure("crimson");
~~~

:::tip À retenir
Un paramètre permet de choisir une valeur à chaque appel sans recopier la même fonction.
:::

## 4 · Envoyer une valeur ou une variable

~~~javascript
function colorierTexte(couleur) {
    document.querySelector(".paragraphe2").style.color = couleur;
}

colorierTexte("blue");

let teinte = "red";
colorierTexte(teinte);
~~~

:::tip À retenir
On peut transmettre directement une valeur (chaîne, nombre, booléen) ou la valeur d'une variable.
:::

## 5 · Retourner une valeur avec return

| Je veux… | Exemple |
| --- | --- |
| Retourner une valeur depuis la fonction | `return pi;` |
| Récupérer la valeur retournée | `let resultat = valeurPi();` |
| Utiliser directement le retour | `alert(saluer("Simone"));` |

~~~javascript
function valeurPi() {
    let pi = 3.14159265359;
    return pi;
}

let resultat = valeurPi();
~~~

:::tip À retenir
return renvoie une valeur à l'endroit de l'appel. Une fonction peut recevoir des paramètres, retourner une valeur, ou faire les deux.
:::

## 6 · Math.random() et hasard

| Je veux… | Exemple |
| --- | --- |
| Obtenir un nombre aléatoire | `Math.random()` |
| Conserver le résultat | `let nombreAleatoire = Math.random();` |
| Tester un cas de 25 % | `if (nombreAleatoire < 0.25) { /* ... */ }` |

~~~javascript
function jouer() {
    let nombreAleatoire = Math.random();

    if (nombreAleatoire < 0.25) {
        gArgent += 100;
    }
    else {
        gArgent -= 50;
    }
}
~~~

:::tip À retenir
Math.random() retourne un nombre entre 0 inclus et 1 exclu. Dans l'exemple du cours : 25 % de chances de gagner 100 $ et 75 % de perdre 50 $. gArgent est la variable globale utilisée dans cet exemple.
:::

## 7 · return arrête la fonction

~~~javascript
function tousEgaux() {
    if (gNombre1 == gNombre2 && gNombre1 == gNombre3) {
        return true;
    }
    return false;
}

function maximum(x, y) {
    if (x > y) {
        return x;
    }
    return y;
}

let nombre = maximum(2, 4); // 4
~~~

:::tip À retenir
Dès qu'un return est exécuté, la fonction se termine : on peut donc placer return false ou return y après le if, sans else.
:::

## 8 · Récapitulatif

| Je veux… | Exemple |
| --- | --- |
| Déclarer les paramètres | `function nomDeFonction(parametre) { /* ... */ }` |
| Fournir un argument à l’appel | `nomDeFonction("valeur");` |
| Retourner une valeur | `return resultat;` |
| Conserver le retour | `let valeur = maFonction();` |
| Produire un nombre aléatoire | `Math.random()` |

:::tip À retenir
Paramètres dans la déclaration → arguments dans l'appel → utilisation des paramètres dans le corps → retour éventuel avec return. return met fin à l'exécution de la fonction.
:::

Pour obtenir les autres fichiers hors ligne, consultez la [page Téléchargements](./04-telechargements.md).
