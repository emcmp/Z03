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
- la possibilité de représenter une compétence;
- une distinction claire entre résultat présent et compréhension réelle;
- quatre passages principaux plutôt que huit entrevues séparées.

## Pondération

Le bloc HTML/CSS représente **30 % de la note finale du cours**.

Il couvre huit compétences :

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

La répartition exacte des points entre les compétences peut être précisée séparément sans modifier ce total ni créer davantage de moments de validation.

## États possibles

Chaque compétence reçoit indépendamment l'un de ces états :

- **À faire** : aucune preuve suffisante n'a encore été observée;
- **À revoir** : une tentative a eu lieu, mais certains éléments doivent être retravaillés;
- **Validée** : la preuve de maîtrise est suffisante et le badge est acquis.

`À revoir` ne constitue pas une pénalité automatique. L'étudiant peut présenter de nouveau la compétence après correction lorsque la logistique le permet.

## Déroulement d'une validation

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

## Rôle du Projet Web

Le Projet Web fournit un contexte commun et suffisamment riche pour observer les compétences.

À la fin de R5, il contient au minimum :

- un thème principal et deux sous-thèmes;
- trois pages HTML;
- une navigation complète;
- au moins deux images locales;
- un attribut `alt` sur chaque élément `<img>`;
- une feuille CSS externe partagée;
- des sélecteurs d'élément et des classes réutilisables;
- une application du modèle en boîte;
- un usage simple de Flexbox avec `gap`.

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
- réparer un lien de navigation.

### WEB-05 et WEB-06

L'enseignant peut demander de :

- expliquer les chemins différents vers `styles.css`;
- corriger un `link`;
- distinguer sélecteur, propriété et valeur;
- ajouter une classe;
- modifier un sélecteur pour cibler les bons éléments.

### WEB-07 et WEB-08

L'enseignant peut demander de :

- retrouver la règle qui produit un effet visible;
- modifier une couleur, une bordure ou une propriété typographique;
- choisir entre `padding` et `margin`;
- identifier un parent flex et ses enfants directs;
- ajouter ou modifier un `gap`.

## Niveaux d'attente

### À maîtriser

La notion peut contribuer directement à une compétence.

### Bonne pratique

La pratique est enseignée et encouragée, mais son absence seule ne bloque pas une validation.

### Pour aller plus loin

La notion est facultative et ne doit pas être nécessaire pour réussir les validations ou l'évaluation finale.

`background-image`, `border-radius`, `box-sizing`, `flex-wrap`, Grid, le positionnement et les transitions ne créent pas de critères indépendants dans le bloc actuel.

## Règles d'équité

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
