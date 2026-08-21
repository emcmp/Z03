import React from "react";
import { useLocation } from "@docusaurus/router";
import OriginalCodeBlock from "@theme-original/CodeBlock";
import ExampleFrame from "@site/src/components/ExampleFrame";
import ExamplePeek from "@site/src/components/ExamplePeek";

type CodeBlockProps = React.ComponentProps<typeof OriginalCodeBlock>;

type PreviewRule = {
  code: string;
  src: string;
  title: string;
  label?: string;
  height?: number;
};

type StagePreviewRule = {
  code: string;
  pathIncludes: string;
  src: string;
  title: string;
  caption: string;
  minHeight?: number;
  maxHeight?: number;
};

const rules: PreviewRule[] = [
  { code: `<br>\n<hr>`, src: "examples/peek/r1-br-hr.html", title: "Rendu de br et hr", label: "Voir br + hr", height: 120 },
  { code: `<p>Ce mot est <strong>important</strong>.</p>`, src: "examples/peek/r1-strong.html", title: "Rendu de strong", label: "Voir strong", height: 90 },
  { code: `<h1>Titre principal de la page</h1>\n<h2>Une grande section</h2>\n<h3>Une sous-section</h3>`, src: "examples/peek/r1-headings.html", title: "Rendu des niveaux de titres", label: "Voir les titres", height: 190 },
  { code: `<p>Voici mon premier paragraphe.</p>\n<p>Voici un deuxième paragraphe.</p>`, src: "examples/peek/r1-paragraphs.html", title: "Rendu de deux paragraphes", label: "Voir les paragraphes", height: 120 },
  { code: `<ul>\n  <li>Jeux de stratégie</li>\n  <li>Jeux coopératifs</li>\n  <li>Jeux de cartes</li>\n</ul>`, src: "examples/peek/r1-list.html", title: "Rendu d'une liste HTML", label: "Voir la liste", height: 130 },
  { code: `<p>\n  Cette consigne est <strong>importante</strong> et ce mot reçoit\n  une <em>emphase</em> particulière.\n</p>`, src: "examples/peek/r1-emphasis.html", title: "Rendu de strong et em", label: "Voir strong + em", height: 100 },

  { code: `<img src="images/chat.jpg" alt="Un chat blanc assis devant une fenêtre">`, src: "examples/peek/r2-image.html", title: "Rendu d'une image locale", label: "Voir l'image", height: 240 },
  { code: `<img src="images/chat.jpg" alt="Un chat blanc">`, src: "examples/peek/r2-image.html", title: "Rendu d'une image locale", label: "Voir l'image", height: 240 },
  { code: `<img src="images/chat.jpg" alt="Un chat">`, src: "examples/peek/r2-image.html", title: "Rendu d'une image locale", label: "Voir l'image", height: 240 },
  { code: `<img src="../images/chat.jpg" alt="Un chat">`, src: "examples/peek/r2-image.html", title: "Même image atteinte depuis un sous-dossier", label: "Voir l'image", height: 240 },
  { code: `<a href="pages/apropos.html">À propos</a>`, src: "examples/peek/r2-links/index.html", title: "Lien vers une page dans un sous-dossier", label: "Voir le lien", height: 110 },
  { code: `<a href="contact.html">Contact</a>`, src: "examples/peek/r2-links/pages/sujet.html", title: "Lien vers une page du même dossier", label: "Voir le lien", height: 130 },
  { code: `<a href="../index.html">Accueil</a>`, src: "examples/peek/r2-links/pages/apropos.html", title: "Lien de retour vers le dossier parent", label: "Voir le lien", height: 140 },
  { code: `<a href="https://www.w3.org/">Site du W3C</a>`, src: "examples/peek/r2-links/external.html", title: "Lien vers un autre site", label: "Voir le lien externe", height: 100 },
  { code: `<a href="#contact">Aller à la section Contact</a>`, src: "examples/peek/r2-links/anchor-contact.html", title: "Lien vers une section de la même page", label: "Tester l'ancre", height: 170 },
  { code: `<a href="#details">Détails</a>`, src: "examples/peek/r2-links/anchor-details.html", title: "Lien vers la section Détails", label: "Tester l'ancre", height: 170 },

  { code: `h1 {\n  color: darkblue;\n}`, src: "examples/peek/r3-heading-blue.html", title: "Rendu d'un titre darkblue", label: "Voir le titre", height: 110 },
  { code: `<p style="color: darkred;">Un paragraphe important.</p>`, src: "examples/peek/r3-darkred.html", title: "Rendu d'un paragraphe darkred", label: "Voir la couleur", height: 90 },
  { code: `p {\n  color: darkred;\n}`, src: "examples/peek/r3-darkred.html", title: "Rendu d'un paragraphe darkred", label: "Voir la couleur", height: 90 },
  { code: `p {\n  color: navy;\n}`, src: "examples/peek/r3-navy.html", title: "Rendu d'une règle CSS sur les paragraphes", label: "Voir la règle", height: 90 },
  { code: `h1 {\n  color: darkblue;\n}\n\np {\n  color: #37474f;\n}`, src: "examples/peek/r3-selectors.html", title: "Rendu de sélecteurs d'élément", label: "Voir les sélecteurs", height: 130 },
  { code: `#message-principal {\n  color: darkgreen;\n}`, src: "examples/peek/r3-id.html", title: "Rendu d'un sélecteur id", label: "Voir le id", height: 90 },
  { code: `p {\n  color: #37474f;\n}\n\n.mise-en-valeur {\n  color: darkred;\n}`, src: "examples/peek/r3-cascade.html", title: "Rendu d'une classe plus précise", label: "Voir la cascade", height: 120 },
  { code: `body {\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  font-size: 2rem;\n}`, src: "examples/peek/r3-typography.html", title: "Rendu de propriétés typographiques", label: "Voir la typographie", height: 130 },
  { code: `.mise-en-valeur {\n  font-weight: bold;\n}\n\n.citation {\n  font-style: italic;\n}`, src: "examples/peek/r3-font-emphasis.html", title: "Rendu de bold et italic", label: "Voir bold + italic", height: 120 },
  { code: `h1 {\n  text-align: center;\n}`, src: "examples/peek/r3-align.html", title: "Rendu d'un titre centré", label: "Voir l'alignement", height: 100 },
  { code: `.mise-en-valeur {\n  border: 2px solid #b45b5b;\n}`, src: "examples/peek/r3-border.html", title: "Rendu d'une bordure CSS", label: "Voir la bordure", height: 100 },
  { code: `body {\n  font-family: Arial, sans-serif;\n  color: #263238;\n}\n\nh1 {\n  color: #245a86;\n  text-align: center;\n}\n\n.mise-en-valeur {\n  color: #7a1f1f;\n  background-color: #f7eaea;\n  font-weight: bold;\n  border: 2px solid #b45b5b;\n}`, src: "examples/peek/r3-complete.html", title: "Rendu de l'exemple complet de la rencontre 3", label: "Voir l'exemple complet", height: 230 },
  { code: `body {\n  font-family: Arial, sans-serif;\n  color: #263238;\n}\n\nh1 {\n  color: #245a86;\n}`, src: "examples/projet-web/evolution/etape3/preview.html", title: "Projet Web après les premiers styles généraux", label: "Voir dans le site", height: 300 },
  { code: `body {\n  font-family: Arial, sans-serif;\n  color: #263238;\n}\n\nh1 {\n  color: #245a86;\n  text-align: center;\n}\n\nh2 {\n  color: #3f6f91;\n}`, src: "examples/projet-web/evolution/etape3/preview.html", title: "Projet Web avec styles généraux cohérents", label: "Voir dans le site", height: 300 },
  { code: `.mise-en-valeur {\n  color: #7a1f1f;\n  background-color: #f7eaea;\n  font-weight: bold;\n  border: 2px solid #b45b5b;\n}`, src: "examples/projet-web/evolution/etape3/preview.html", title: "Projet Web avec une classe de mise en valeur", label: "Voir dans le site", height: 300 },

  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n}`, src: "examples/peek/r4-visible-box.html", title: "Rendu d'une boîte HTML rendue visible", label: "Voir la boîte", height: 150 },
  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n}`, src: "examples/peek/r4-padding.html", title: "Rendu d'une carte avec padding", label: "Voir le padding", height: 170 },
  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n  margin: 20px;\n}`, src: "examples/peek/r4-margin.html", title: "Rendu d'une carte avec margin", label: "Voir la margin", height: 210 },
  { code: `.carte {\n  padding: 20px;\n}`, src: "examples/peek/r4-padding.html", title: "Rendu d'un padding uniforme", label: "Voir le padding", height: 170 },
  { code: `.carte {\n  padding: 16px 24px;\n}`, src: "examples/peek/r4-padding-two.html", title: "Rendu d'un padding à deux valeurs", label: "Voir les 2 valeurs", height: 130 },
  { code: `.carte {\n  margin: 24px 0;\n}`, src: "examples/peek/r4-margin-vertical.html", title: "Rendu d'une margin verticale", label: "Voir la margin", height: 160 },
  { code: `.carte {\n  border: 2px solid #245a86;\n}`, src: "examples/peek/r4-visible-box.html", title: "Rendu d'une bordure autour d'une carte", label: "Voir la bordure", height: 150 },
  { code: `.carte {\n  width: 320px;\n}`, src: "examples/peek/r4-width.html", title: "Rendu d'une carte de 320 pixels", label: "Voir la largeur", height: 130 },
  { code: `body {\n  font-family: Arial, sans-serif;\n  color: #263238;\n}\n\n.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n  margin: 24px 0;\n}`, src: "examples/peek/r4-complete.html", title: "Rendu de l'exemple complet de la rencontre 4", label: "Voir l'exemple complet", height: 300 },
  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n  margin: 20px 0;\n}`, src: "examples/projet-web/evolution/etape4/preview.html", title: "Projet Web avec cartes et espacements", label: "Voir dans le site", height: 330 },
  { code: `main {\n  max-width: 900px;\n}`, src: "examples/projet-web/evolution/etape4/preview.html", title: "Projet Web avec largeur maximale", label: "Voir dans le site", height: 330 },

  { code: `.navigation {\n  display: flex;\n}`, src: "examples/peek/r5-flex.html", title: "Rendu d'une navigation Flexbox", label: "Voir Flexbox", height: 100 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n}`, src: "examples/peek/r5-gap.html", title: "Rendu de Flexbox avec gap", label: "Voir Flexbox + gap", height: 100 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n  justify-content: flex-start;\n}`, src: "examples/peek/r5-gap.html", title: "Rendu avec justify-content flex-start", label: "Voir flex-start", height: 100 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}`, src: "examples/peek/r5-center.html", title: "Rendu avec justify-content center", label: "Voir le centrage", height: 100 },
  { code: `.navigation {\n  display: flex;\n  justify-content: space-between;\n}`, src: "examples/peek/r5-space-between.html", title: "Rendu avec space-between", label: "Voir space-between", height: 100 },
  { code: `.ligne {\n  display: flex;\n  align-items: center;\n}`, src: "examples/peek/r5-align-items.html", title: "Rendu avec align-items center", label: "Voir align-items", height: 150 },
  { code: `align-items: flex-start;`, src: "examples/peek/r5-align-start.html", title: "Comparaison avec align-items flex-start", label: "Voir flex-start", height: 150 },
  { code: `.cartes {\n  display: flex;\n  gap: 20px;\n}`, src: "examples/peek/r5-cards.html", title: "Rendu de deux cartes avec Flexbox", label: "Voir les cartes", height: 180 },
  { code: `.carte {\n  display: flex;\n}`, src: "examples/peek/r5-wrong-parent.html", title: "Rendu lorsque le mauvais élément devient flex", label: "Voir l'erreur", height: 190 },
  { code: `.cartes {\n  display: flex;\n}`, src: "examples/peek/r5-right-parent.html", title: "Rendu lorsque le bon parent devient flex", label: "Voir le bon parent", height: 180 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  background-color: #eaf3ff;\n  padding: 16px;\n}`, src: "examples/peek/r5-nav-complete.html", title: "Rendu d'une navigation Flexbox complète", label: "Voir la navigation", height: 120 },
  { code: `.banniere {\n  background-image: url("../images/sentier.svg");\n  background-size: cover;\n  background-position: center;\n  padding: 48px 20px;\n}`, src: "examples/peek/r5-background-image.html", title: "Rendu d'une bannière avec image de fond", label: "Voir l'image de fond", height: 180 },
  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n}\n\n.cartes {\n  display: flex;\n  gap: 20px;\n}`, src: "examples/projet-web/evolution/etape5/preview.html", title: "Projet Web avec cartes et Flexbox", label: "Voir dans le site", height: 350 },
];

const stagePreviewRules: StagePreviewRule[] = [
  {
    pathIncludes: "/projet-web/rencontre3",
    code: `color\nbackground-color\nfont-family\nfont-size\nfont-weight\nfont-style\ntext-align\nborder`,
    src: "examples/projet-web/evolution/etape3/preview.html",
    title: "Exemple de Projet Web à la fin de l'étape 3",
    caption: "Exemple de progression — Étape 3 : une identité visuelle simple avec la même feuille CSS, sans mise en page avancée.",
    minHeight: 420,
    maxHeight: 560,
  },
  {
    pathIncludes: "/projet-web/rencontre4",
    code: `main {\n  max-width: 900px;\n}`,
    src: "examples/projet-web/evolution/etape4/preview.html",
    title: "Exemple de Projet Web à la fin de l'étape 4",
    caption: "Exemple de progression — Étape 4 : le même site après l'ajout de cartes, de padding, de margin et d'une largeur maximale.",
    minHeight: 480,
    maxHeight: 620,
  },
  {
    pathIncludes: "/projet-web/rencontre5",
    code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n}\n\n.cartes {\n  display: flex;\n  gap: 20px;\n}`,
    src: "examples/projet-web/evolution/etape5/preview.html",
    title: "Exemple de Projet Web à la fin de l'étape 5",
    caption: "Exemple de progression — Étape 5 : le même site avec Flexbox pour la navigation et le groupe de cartes.",
    minHeight: 470,
    maxHeight: 620,
  },
];

function normalize(children: React.ReactNode) {
  return React.Children.toArray(children).join("").replace(/\r\n/g, "\n").trim();
}

export default function CodeBlock(props: CodeBlockProps) {
  const location = useLocation();
  const code = normalize(props.children);
  const preview = rules.find((rule) => rule.code === code);
  const stagePreview = stagePreviewRules.find(
    (rule) => rule.code === code && location.pathname.includes(rule.pathIncludes)
  );

  return (
    <>
      <OriginalCodeBlock {...props} />
      {preview ? (
        <ExamplePeek
          src={preview.src}
          title={preview.title}
          label={preview.label}
          height={preview.height}
        />
      ) : null}
      {stagePreview ? (
        <div>
          <p><strong>{stagePreview.caption}</strong> Votre sujet, vos textes et vos choix visuels seront différents.</p>
          <ExampleFrame
            src={stagePreview.src}
            title={stagePreview.title}
            showCode={false}
            minHeight={stagePreview.minHeight}
            maxHeight={stagePreview.maxHeight}
          />
        </div>
      ) : null}
    </>
  );
}
