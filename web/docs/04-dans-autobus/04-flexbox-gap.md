---
title: "Capsule 04 — Comprendre Flexbox et gap"
description: Comprendre le modèle parent-enfants de Flexbox, utiliser display flex et créer un espacement régulier avec gap.
sidebar_position: 5
sidebar_label: "04 — Flexbox et gap"
---

# Comprendre Flexbox et `gap`

Flexbox permet d'organiser un groupe d'éléments en agissant d'abord sur leur **parent commun**.

Cette capsule présente le modèle mental de base : trouver le parent des éléments à organiser, lui appliquer `display: flex`, puis utiliser `gap` pour créer un espacement régulier entre ses enfants.

## Ce que vous allez voir

En quelques minutes, vous verrez comment :

- reconnaître la relation **parent → enfants directs**;
- appliquer `display: flex` au bon élément;
- utiliser `gap` pour espacer les éléments d'un groupe;
- comprendre simplement le rôle de `justify-content`;
- avoir une première intuition de `align-items`;
- éviter l'erreur fréquente qui consiste à rendre flex le mauvais élément.

L'idée essentielle est simple : **avec Flexbox, on organise un groupe en agissant d'abord sur son parent**.

## Présentation

La présentation est offerte en deux formats. Utilisez le PDF pour la consulter facilement dans un navigateur ou sur un appareil mobile, ou la version PowerPoint si vous préférez le format diaporama.

:::info 📥 Fichier à télécharger

- **[Consulter `Flexbox_Transit_Logic.pdf`](pathname:///files/dans-autobus/Flexbox/Flexbox_Transit_Logic.pdf)** — version PDF, pratique pour la consultation.
- **[Télécharger `Flexbox_Transit_Logic.pptx`](pathname:///files/dans-autobus/Flexbox/Flexbox_Transit_Logic.pptx)** — version PowerPoint.

:::

:::tip À retenir
Trouvez les éléments que vous voulez organiser, trouvez leur parent commun, appliquez `display: flex` à ce parent, puis utilisez `gap` pour contrôler l'espace entre ses enfants.
:::
