# Évaluation progressive des compétences — Z03

**Mise à jour : 2026-08-21**

Ce document décrit le modèle d'évaluation actuellement retenu pour le bloc HTML/CSS des rencontres 1 à 5.

Il doit rester cohérent avec :

- `COMPETENCES_HTML_CSS.md`;
- `MODELE_EDITORIAL_CONTENU.md`;
- `PLAN_EPURATION_REPETITIONS_R1_R5.md`;
- `web/docs/03-projet-web/00-evaluation.md`.

## Intention

Éviter une grosse remise unique corrigée à la fin du bloc. Les compétences sont plutôt observées progressivement pendant les périodes de travail, sur le Projet Web que l'étudiant fait évoluer.

Le modèle vise :

- des preuves courtes et observables;
- une rétroaction rapide;
- la possibilité de représenter une compétence technique;
- une distinction claire entre résultat présent et compréhension réelle;
- quatre passages principaux plutôt que huit entrevues séparées;
- une appréciation distincte de la personnalisation et de l'appropriation du projet.

# Pondération

Le bloc HTML/CSS représente **30 % de la note finale du cours**.

| Partie | Part du bloc HTML/CSS | Part de la note finale |
| --- | ---: | ---: |
| Huit compétences techniques | 80 % | 24 % |
| Personnalisation et appropriation | 20 % | 6 % |
| **Total** | **100 %** | **30 %** |

Les huit compétences techniques sont :

| Code | Compétence |
| --- | --- |
| **WEB-01** | Organiser un projet Web et utiliser les chemins |
| **WEB-02** | Construire une page HTML correctement structurée |
| **WEB-03** | Structurer et enrichir le contenu HTML |
| **WEB-04** | Relier plusieurs pages dans une navigation fonctionnelle |
| **WEB-05** | Associer correctement une feuille CSS externe |
| **WEB-06** | Cibler les éléments avec des sélecteurs appropriés |
| **WEB-07** | Mettre en forme une interface avec CSS |
| **WEB-08** | Organiser l'espace et la disposition des éléments |

La personnalisation ne devient pas WEB-09. Elle est évaluée à l'aide d'une grille distincte et ne crée pas un cinquième passage de validation technique.

## États possibles des compétences techniques

Chaque compétence reçoit indépendamment l'un de ces états :

- **À faire** : aucune preuve suffisante n'a encore été observée;
- **À revoir** : une tentative a eu lieu, mais certains éléments doivent être retravaillés;
- **Validée** : la preuve de maîtrise est suffisante et le badge est acquis.

`À revoir` ne constitue pas une pénalité automatique. L'étudiant peut présenter de nouveau la compétence après correction lorsque la logistique le permet.

## Déroulement d'une validation technique

1. L'étudiant consulte la checklist de la compétence.
2. Il vérifie que la partie concernée fonctionne dans le navigateur.
3. Il demande une validation pendant une période de travail.
4. L'enseignant observe rapidement le projet.
5. L'étudiant explique une partie de son code.
6. L'enseignant peut demander une petite modification ou correction.
7. Chaque compétence observée reçoit son propre état.

Une interaction devrait idéalement durer **1 à 3 minutes**. Si la maîtrise n'est pas encore suffisante, l'enseignant indique brièvement ce qui doit être retravaillé sans transformer la validation en longue séance de tutorat.

## Quatre fenêtres de validation

| Moment | Période cible | Compétences |
| --- | --- | --- |
| **Validation A — Structure HTML** | Rencontre 2 — priorité | WEB-01, WEB-02 |
| **Validation B — Contenu et navigation** | Rencontre 2 et début de R3 | WEB-03, WEB-04 |
| **Validation C — CSS de base** | Rencontres 3–4 | WEB-05, WEB-06 |
| **Validation D — Mise en forme et disposition** | Rencontres 4–5 | WEB-07, WEB-08 |

Ces périodes sont des **fenêtres de disponibilité et de priorité**, pas des échéances rigides.

- La Validation A est prioritaire en R2.
- La Validation B peut commencer avec les étudiants prêts et se poursuivre au début de R3.
- Le groupe peut commencer CSS même si certaines B restent à faire ou à revoir.
- La Validation C commence avec les étudiants prêts pendant R3–R4.
- La Validation D se termine principalement en R5.
- Les reprises peuvent se poursuivre sans retarder le début de JavaScript à R6.

# Rôle du Projet Web

Le Projet Web fournit un contexte commun et suffisamment riche pour observer les compétences.

À la fin de R5, il contient au minimum :

- un thème principal;
- au moins deux pages de sujet;
- une page À propos;
- quatre pages HTML en comptant l'accueil;
- une navigation complète vers les quatre pages;
- au moins deux images locales;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des sélecteurs d'élément et des classes réutilisables;
- au moins un `id` unique ciblé par une règle `#id`;
- une application du modèle en boîte;
- un usage simple de Flexbox avec `gap`.

Les étudiants peuvent ajouter plus de deux pages de sujet.

La page À propos :

- présente l'étudiant, ses intérêts et son choix de thème dans un site personnel ou informatif;
- ou présente la description, la mission, les services et les coordonnées fictives d'une entreprise ou organisation;
- ne doit pas demander de renseignements personnels sensibles.

Ces minimums ne donnent pas automatiquement les badges.

```text
Résultat présent seulement
≠
compétence démontrée
```

La validation doit montrer que l'étudiant peut :

- retrouver son code;
- expliquer son fonctionnement;
- justifier un choix;
- modifier une valeur ou une structure;
- corriger une erreur comparable.

## Preuves possibles

### WEB-01 et WEB-02

L'enseignant peut demander de :

- montrer l'organisation du projet;
- expliquer un chemin relatif;
- corriger un chemin;
- identifier `head` et `body`;
- corriger une erreur d'imbrication.

### WEB-03 et WEB-04

L'enseignant peut demander de :

- expliquer le choix d'un titre, d'une liste ou d'une image;
- vérifier l'attribut `alt` d'une image;
- ajouter ou modifier un élément de contenu;
- expliquer un `href`;
- réparer un lien de navigation;
- expliquer le rôle distinct d'une page de sujet et de la page À propos.

### WEB-05 et WEB-06

L'enseignant peut demander de :

- expliquer les chemins différents vers `styles.css`;
- corriger un `link`;
- distinguer sélecteur, propriété et valeur;
- choisir entre un sélecteur d'élément, une classe et un identifiant;
- ajouter ou réutiliser une classe;
- créer un `id` unique et sa règle `#id`;
- vérifier qu'un identifiant n'est pas répété;
- modifier un sélecteur pour cibler les bons éléments.

L'identifiant fait partie de WEB-06 parce qu'il prépare le travail ultérieur avec JavaScript et le DOM. Il ne constitue pas une neuvième compétence et il n'est pas nécessaire d'en multiplier les occurrences.

### WEB-07 et WEB-08

L'enseignant peut demander de :

- retrouver la règle qui produit un effet visible;
- modifier une couleur, une bordure ou une propriété typographique;
- choisir entre `padding` et `margin`;
- identifier un parent flex et ses enfants directs;
- ajouter ou modifier un `gap`.

# Personnalisation et appropriation — 20 points

Cette appréciation est réalisée à la fin du bloc HTML/CSS. Elle ne reçoit pas les états d'une compétence technique et ne dépend pas d'une nouvelle entrevue formelle.

| Critère | Points | Ce qui est observé |
| --- | ---: | --- |
| Contenu original | 5 | textes personnels, informations pertinentes, images choisies pour le thème |
| Cohérence du thème | 5 | accueil, pages de sujet et page À propos complémentaires |
| Décisions personnelles | 5 | noms, organisation, classes, couleurs et présentation adaptés plutôt que copiés |
| Finition et initiative | 5 | relecture, cohérence, soin des détails et enrichissements pertinents |

## Interprétation

```text
17 à 20 → appropriation très forte
13 à 16 → personnalisation claire
 9 à 12 → personnalisation limitée
 0 à  8 → projet surtout générique, copié ou inachevé
```

## Règles d'équité pour cette appréciation

- Réutiliser la structure HTML de base et les syntaxes enseignées est normal.
- La note ne porte pas sur le nombre d'heures supposé.
- Le talent graphique, l'accès à des logiciels coûteux ou la complexité visuelle ne doivent pas être récompensés en eux-mêmes.
- Un site simple, cohérent, original et soigneusement terminé peut obtenir la note maximale.
- Les enrichissements facultatifs peuvent contribuer à l'initiative, mais leur absence n'empêche pas une excellente note si le minimum est fortement personnalisé et bien fini.
- La comparaison doit porter sur les critères annoncés, pas sur une impression vague du site le plus spectaculaire.

# Niveaux d'attente

### À maîtriser

La notion peut contribuer directement à une compétence technique.

### Bonne pratique

La pratique est enseignée et encouragée, mais son absence seule ne bloque pas une validation.

### Pour aller plus loin

La notion est facultative et ne doit pas être nécessaire pour réussir les validations ou l'évaluation finale.

`background-image`, `border-radius`, `box-sizing`, `flex-wrap`, Grid, le positionnement et les transitions ne créent pas de critères techniques indépendants dans le bloc actuel.

## Règles d'équité des compétences

Une compétence évaluée doit :

1. être observable;
2. correspondre à de la matière enseignée;
3. pouvoir être vérifiée rapidement;
4. ne pas dépendre d'une notion facultative;
5. porter sur la maîtrise plutôt que sur un simple nombre d'occurrences;
6. pouvoir être représentée après une première tentative;
7. être appliquée de façon comparable entre les groupes.

## Après le bloc HTML/CSS

JavaScript commence à la rencontre 6. Les reprises HTML/CSS demeurent possibles lorsque la logistique le permet, mais aucune nouvelle matière HTML/CSS essentielle ne doit retarder la progression du groupe.

Une seule évaluation sommative formelle reste prévue à la rencontre 15, conformément à la stratégie générale du cours.
