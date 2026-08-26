# Plan de refonte — Rencontres 6 à 15

**Mise à jour : 2026-08-26**

Ce document est la **référence pédagogique canonique pour la planification des rencontres 6 à 15** pendant la refonte de Z03.

Il fixe le mapping de travail avant l'inventaire détaillé des anciens laboratoires du 905. Tant que cet inventaire n'est pas terminé, les destinations décrites ici sont des cibles de planification : elles peuvent être ajustées si les exercices historiques révèlent une meilleure organisation, mais tout changement doit être décidé explicitement et documenté.

Lorsque ce document entre en conflit avec un ancien mapping R6–R15 dans `SUIVI_CONTENU.md`, `SOMMAIRE_COUVERTURE_RENCONTRES.md` ou une version antérieure de `MIGRATION_LABORATOIRES_CODEX.md`, **le présent document prévaut pour la séquence R6–R15**.

## Contraintes structurantes

- HTML/CSS occupe les rencontres 1 à 5.
- JavaScript commence à la rencontre 6.
- Le mini-quiz supervisé de la rencontre 8 vaut **10 %** et porte uniquement sur de la matière enseignée avant le quiz, donc principalement R6 et R7.
- Toute nouvelle matière essentielle doit maintenant être terminée **au plus tard à la rencontre 12**.
- La rencontre 13 doit être libérée, si possible, pour un **TP, une activité d'intégration ou du travail supervisé**.
- La rencontre 14 demeure un **buffer** : TP, rattrapage, reprises, pratique ou révision; aucune nouvelle notion essentielle ne doit en dépendre.
- La rencontre 15 demeure réservée à l'**évaluation sommative finale de 30 %**.
- Les notions marquées facultatives ou « Pour aller plus loin » ne doivent pas être nécessaires à la réussite d'un TP ou de l'examen final.

## Principe de migration minimale

La refonte doit **bouger et scinder le moins de matériel possible**.

Règle par défaut :

> Un ancien cours ou laboratoire reçoit une destination principale unique. On ne le scinde que si son contenu forme réellement deux blocs indépendants et que la scission apporte un gain pédagogique clair.

Conséquences :

- privilégier les fusions naturelles de blocs voisins, par exemple anciens cours/labos 5 + 6;
- conserver un ancien laboratoire comme unité lorsqu'il correspond suffisamment bien à une nouvelle rencontre;
- éviter de redistribuer exercice par exercice uniquement pour faire correspondre un ancien découpage à une nouvelle numérotation;
- ne décider d'une scission qu'après avoir ouvert et inventorié les sources réelles.

## Matrice de planification R6–R15

| Rencontre | Objectif principal | Sources 905 à privilégier | Notions indispensables | Compression / pruning possible | Rôle dans l'évaluation et les TP |
|---|---|---|---|---|---|
| **R6** | Entrer en programmation avec des valeurs et des instructions simples | ancien cours/labo 2 | JavaScript; variables; affectation; nombres; chaînes; opérateurs simples; concaténation/interpolation; console et tests fréquents | priorité détaillée des opérateurs; opérateurs secondaires sans utilité concrète | Fondation du mini-quiz R8 et de toute la suite JavaScript |
| **R7** | Produire un premier effet JavaScript visible dans une page Web | ancien cours/labo 3, à garder ensemble autant que possible | DOM de base; `querySelector`; `textContent`; fonctions simples; déclaration et appel; console; `alert()` si utile | fonctions sophistiquées; approfondissement prématuré de `return` | Deuxième bloc du mini-quiz R8; première programmation Web directement observable |
| **R8** | Passer d'un script exécuté une fois à une page interactive | ancien cours/labo 4 comme source principale; ancien 14 comme complément cohérent | **mini-quiz 10 % au début**; portée locale; notion de globale au besoin; événements; `click`; `addEventListener`; fonction appelée par un événement; DOM; `classList`; attributs concrets lorsque pertinents | théorie détaillée des globales; convention de préfixe global; catalogue d'événements; longue liste de propriétés `.style`; cas DOM avancés | Donne les mécanismes essentiels pour construire un TP Web interactif |
| **R9** | Faire prendre des décisions au programme | anciens cours/labos 5 + 6 fusionnés | booléens; comparaisons; `if`; `else`; `else if`; `&&`; `||` | opérateur `!` si peu utile; tableaux complets de priorité; exemples logiques artificiellement complexes | Noyau très probable des TP et de l'examen final |
| **R10** | Répéter un traitement et comprendre le parcours | ancien cours/labo 11 | besoin de répétition; lecture et écriture d'une boucle simple; parcours; erreurs courantes de condition de boucle | conserver **une forme principale de boucle**; `do...while` et les formes redondantes sont candidates au retrait; débogueur avancé hors noyau | Prépare surtout le parcours des tableaux et collections DOM |
| **R11** | Stocker plusieurs valeurs et les parcourir; appliquer ce parcours au Web | ancien cours/labo 12; ancien 15 si l'intégration est raisonnable | tableaux; index; `length`; parcours avec la boucle retenue; `push`; `pop`; `splice`; introduction possible de `querySelectorAll` et parcours d'une collection DOM | opérations de tableaux seulement si l'inventaire montre une surcharge réelle; ne pas couper `push`/`pop`/`splice` par principe | Rencontre charnière pour les TP : données multiples et plusieurs éléments de la page |
| **R12** | Structurer et intégrer un programme plus complet | ancien cours/labo 13; ancien 15 en solution de repli si R11 devient trop chargée | paramètres; arguments; fonctions réutilisables; `return` lorsque cela apporte une valeur claire; intégration variables + DOM + événements + conditions + tableaux/boucles; `querySelectorAll` ici au plus tard si non traité en R11 | approfondissement des valeurs de retour; fonctions abstraites ou sophistiquées; répétitions inutiles des notions précédentes | **Dernière rencontre de nouvelle matière essentielle**; préparation directe du TP et de l'examen |
| **R13** | **TP / intégration / travail supervisé** | exercices retenus des blocs précédents | aucune nouvelle notion essentielle | — | Rencontre volontairement libérée pour réaliser un TP substantiel ou une activité d'intégration |
| **R14** | **TP / rattrapage / reprises / révision** | activités et exercices précédents | aucune nouvelle notion essentielle | — | Buffer conservé; peut devenir une deuxième séance de TP lorsque le calendrier le permet |
| **R15** | Évaluation sommative finale | — | uniquement le noyau réellement enseigné et pratiqué | tout contenu facultatif est exclu | **Examen final 30 %** |

## Mapping de travail des blocs hérités

| Bloc hérité du 905 | Destination de travail | Intention |
|---|---|---|
| **2 — Variables et affectation** | **R6** | déplacement direct |
| **3 — DOM et fonctions** | **R7** | garder le bloc ensemble autant que possible plutôt que le scinder |
| **4 — Portée, événements et styles DOM** | **R8** | source principale de l'interactivité |
| **14 — Classes et attributs DOM** | **R8** | fusionner comme complément de l'ancien 4 si l'inventaire confirme la cohérence |
| **5 + 6 — Conditions et opérateurs logiques** | **R9** | fusion naturelle; éliminer les doublons |
| **11 — Boucles** | **R10** | simplifier vers une forme principale de boucle |
| **12 — Tableaux** | **R11** | conserver le bloc; mettre l'accent sur le parcours |
| **15 — Plusieurs éléments DOM / `querySelectorAll`** | **R11**, ou **R12** si R11 devient trop chargée | déplacer le bloc comme unité autant que possible; ne plus réserver R13 à cette notion |
| **13 — Paramètres et retours** | **R12** | conserver paramètres/arguments; `return` selon son utilité réelle |
| **7–10 — anciens TP / examens intermédiaires** | aucune destination directe | ces plages historiques sont réaffectées dans la nouvelle structure |

## Décisions de pruning actuelles

Ces décisions sont des orientations à confirmer contre les exercices réels.

### À conserver par défaut

- variables, nombres, chaînes et opérateurs simples;
- DOM de base : `querySelector`, `textContent`;
- fonctions simples et appels;
- événements `click` et `addEventListener`;
- `classList` pour appliquer ou retirer des classes CSS;
- conditions : comparaisons, `if`, `else`, `else if`, `&&`, `||`;
- une forme principale de boucle;
- tableaux, index, `length` et parcours;
- **`push`, `pop` et `splice`** : ils ne sont plus considérés comme des candidats naturels au retrait, puisqu'ils sont généralement faciles à comprendre et à utiliser; leur poids dans l'évaluation peut cependant rester léger;
- paramètres et arguments;
- `querySelectorAll` et le parcours de plusieurs éléments, mais **sans consacrer une rencontre entière à cette seule notion**.

### À compresser ou retirer si aucun exercice essentiel n'en dépend

- détails fins de priorité des opérateurs;
- opérateur logique `!` si son utilité réelle est faible;
- théorie détaillée sur les variables globales et conventions de nommage spécifiques;
- catalogue d'événements (`mouseover`, `mouseout`, etc.);
- longue liste de modifications par `.style`;
- formes de boucles redondantes, notamment `do...while`;
- débogueur avancé comme bloc autonome;
- approfondissement des valeurs de retour et exemples de fonctions trop abstraits.

## Point particulier — choix de la boucle

Le cours doit privilégier **une forme principale de boucle** pour réduire la surcharge.

Le choix exact n'est pas fixé avant l'inventaire. Il doit être fait en comparant les anciens laboratoires 11, 12 et 15 selon deux critères :

1. quelle forme permet de conserver le plus de bons exercices sans réécriture artificielle;
2. quelle forme soutient le mieux le parcours des tableaux et des collections retournées par `querySelectorAll`.

## Point particulier — `querySelectorAll`

La rencontre 13 ne doit plus être nécessaire pour introduire `querySelectorAll`.

Cible préférée : **R11**, immédiatement après les tableaux et le parcours, pour créer la progression :

```text
tableau → plusieurs valeurs → boucle → plusieurs éléments HTML → querySelectorAll → parcours
```

Si l'inventaire montre que cette rencontre devient trop chargée, déplacer **le bloc ancien 15 en entier à R12** plutôt que de le scinder entre plusieurs rencontres.

## Questions à vérifier avec l'inventaire des laboratoires

L'inventaire doit nous permettre de répondre avant toute migration :

- quels exercices sont encore pédagogiquement bons tels quels;
- quelles notions chaque exercice utilise réellement;
- quels exercices dépendent de notions candidates au pruning;
- quelles archives contiennent plusieurs blocs réellement indépendants;
- si l'ancien labo 3 peut rester presque entièrement en R7;
- si les anciens labos 4 et 14 se combinent proprement en R8;
- si les labos 5 et 6 forment un parcours cohérent unique pour R9;
- quelle forme de boucle est la plus naturelle en observant les labos 11, 12 et 15;
- si le labo 15 peut être intégré en R11 sans surcharge, sinon en R12;
- quelles notions sont nécessaires pour construire un TP final intéressant;
- quelles notions peuvent être retirées sans appauvrir inutilement le TP ou l'examen final.

## Prochaine étape — inventaire Codex

La prochaine intervention de Codex doit être **un inventaire factuel seulement**.

Codex devra :

1. ouvrir les `.docx` et extraire les `.zip` hérités pertinents;
2. inventorier les fichiers et exercices présents dans chaque source;
3. pour chaque exercice, relever les notions et prérequis réellement utilisés;
4. identifier les dépendances entre exercices ou fichiers de départ;
5. signaler les doublons entre laboratoires voisins;
6. indiquer si l'exercice peut être conservé tel quel, allégé, fusionné ou retiré;
7. signaler les conséquences d'un retrait de notion sur les exercices concernés;
8. comparer le résultat au mapping de travail du présent document.

À cette étape, Codex ne doit **pas** :

- réécrire les exercices;
- renommer ou déplacer les archives historiques;
- modifier les pages de cours;
- modifier la navigation Docusaurus;
- décider seul d'un nouveau mapping pédagogique;
- supprimer du matériel.

Les décisions pédagogiques seront prises après lecture de l'inventaire.