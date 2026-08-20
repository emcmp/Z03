---
title: "Capsule 03 — Comment CSS sait quoi modifier?"
description: Comprendre comment les sélecteurs CSS ciblent des éléments HTML avec une balise, une classe ou un identifiant.
sidebar_position: 4
sidebar_label: "03 — Sélecteurs CSS : quoi cibler?"
---

# Comment CSS sait quoi modifier?

Une règle CSS ne modifie pas toute la page au hasard : elle commence par un **sélecteur**, qui indique au navigateur quels éléments HTML doivent recevoir le style.

Cette capsule compare trois façons simples de cibler des éléments : le nom d'une **balise**, une **classe** et un **identifiant (`id`)**.

## Ce que vous allez voir

En quelques minutes, vous verrez comment :

- cibler toutes les balises d'un même type, par exemple avec `p`;
- cibler un groupe d'éléments avec une classe comme `.important`;
- cibler un élément identifié de façon unique avec `#titre-principal`;
- reconnaître les symboles `.` et `#` dans un sélecteur CSS;
- choisir un sélecteur adapté à ce que vous voulez modifier.

L'idée essentielle est simple : **le sélecteur répond à la question « quels éléments est-ce que je veux modifier? »**

## Présentation

La présentation est offerte en deux formats. Utilisez le PDF pour la consulter facilement dans un navigateur ou sur un appareil mobile, ou la version PowerPoint si vous préférez le format diaporama.

:::info 📥 Fichier à télécharger

- **[Consulter `CSS_Targeting_Systems.pdf`](pathname:///files/dans-autobus/CSS_Targeting_Systems/CSS_Targeting_Systems.pdf)** — version PDF, pratique pour la consultation.
- **[Télécharger `CSS_Targeting_Systems.pptx`](pathname:///files/dans-autobus/CSS_Targeting_Systems/CSS_Targeting_Systems.pptx)** — version PowerPoint.

:::

:::tip À retenir
`p` cible les balises `<p>`, `.important` cible les éléments portant `class="important"`, et `#titre-principal` cible l'élément portant `id="titre-principal"`.
:::
