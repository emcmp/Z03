import React from "react";
import OriginalCodeBlock from "@theme-original/CodeBlock";
import ExamplePeek from "@site/src/components/ExamplePeek";

type CodeBlockProps = React.ComponentProps<typeof OriginalCodeBlock>;

type PreviewRule = {
  code: string;
  src: string;
  title: string;
  label?: string;
  height?: number;
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
  { code: `<a href="pages/apropos.html">À propos</a>`, src: "examples/peek/r2-link.html", title: "Rendu d'un lien HTML", label: "Voir le lien", height: 90 },

  { code: `<p style="color: darkred;">Un paragraphe important.</p>`, src: "examples/peek/r3-darkred.html", title: "Rendu d'un paragraphe darkred", label: "Voir la couleur", height: 90 },
  { code: `p {\n  color: navy;\n}`, src: "examples/peek/r3-navy.html", title: "Rendu d'une règle CSS sur les paragraphes", label: "Voir la règle", height: 90 },
  { code: `h1 {\n  color: darkblue;\n}\n\np {\n  color: #37474f;\n}`, src: "examples/peek/r3-selectors.html", title: "Rendu de sélecteurs d'élément", label: "Voir les sélecteurs", height: 130 },
  { code: `#message-principal {\n  color: darkgreen;\n}`, src: "examples/peek/r3-id.html", title: "Rendu d'un sélecteur id", label: "Voir le id", height: 90 },
  { code: `p {\n  color: #37474f;\n}\n\n.mise-en-valeur {\n  color: darkred;\n}`, src: "examples/peek/r3-cascade.html", title: "Rendu d'une classe plus précise", label: "Voir la cascade", height: 120 },
  { code: `body {\n  font-family: Arial, sans-serif;\n}\n\nh1 {\n  font-size: 2rem;\n}`, src: "examples/peek/r3-typography.html", title: "Rendu de propriétés typographiques", label: "Voir la typographie", height: 130 },
  { code: `.mise-en-valeur {\n  font-weight: bold;\n}\n\n.citation {\n  font-style: italic;\n}`, src: "examples/peek/r3-font-emphasis.html", title: "Rendu de bold et italic", label: "Voir bold + italic", height: 120 },
  { code: `h1 {\n  text-align: center;\n}`, src: "examples/peek/r3-align.html", title: "Rendu d'un titre centré", label: "Voir l'alignement", height: 100 },
  { code: `.mise-en-valeur {\n  border: 2px solid #b45b5b;\n}`, src: "examples/peek/r3-border.html", title: "Rendu d'une bordure CSS", label: "Voir la bordure", height: 100 },

  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n}`, src: "examples/peek/r4-padding.html", title: "Rendu d'une carte avec padding", label: "Voir le padding", height: 170 },
  { code: `.carte {\n  background-color: #eaf3ff;\n  border: 2px solid #245a86;\n  padding: 20px;\n  margin: 20px;\n}`, src: "examples/peek/r4-margin.html", title: "Rendu d'une carte avec margin", label: "Voir la margin", height: 210 },
  { code: `.carte {\n  padding: 16px 24px;\n}`, src: "examples/peek/r4-padding-two.html", title: "Rendu d'un padding à deux valeurs", label: "Voir les 2 valeurs", height: 130 },
  { code: `.carte {\n  width: 320px;\n}`, src: "examples/peek/r4-width.html", title: "Rendu d'une carte de 320 pixels", label: "Voir la largeur", height: 130 },

  { code: `.navigation {\n  display: flex;\n}`, src: "examples/peek/r5-flex.html", title: "Rendu d'une navigation Flexbox", label: "Voir Flexbox", height: 100 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n}`, src: "examples/peek/r5-gap.html", title: "Rendu de Flexbox avec gap", label: "Voir Flexbox + gap", height: 100 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}`, src: "examples/peek/r5-center.html", title: "Rendu avec justify-content center", label: "Voir le centrage", height: 100 },
  { code: `.navigation {\n  display: flex;\n  justify-content: space-between;\n}`, src: "examples/peek/r5-space-between.html", title: "Rendu avec space-between", label: "Voir space-between", height: 100 },
  { code: `.ligne {\n  display: flex;\n  align-items: center;\n}`, src: "examples/peek/r5-align-items.html", title: "Rendu avec align-items center", label: "Voir align-items", height: 150 },
  { code: `.cartes {\n  display: flex;\n  gap: 20px;\n}`, src: "examples/peek/r5-cards.html", title: "Rendu de deux cartes avec Flexbox", label: "Voir les cartes", height: 180 },
  { code: `.carte {\n  display: flex;\n}`, src: "examples/peek/r5-wrong-parent.html", title: "Rendu lorsque le mauvais élément devient flex", label: "Voir l'erreur", height: 190 },
  { code: `.navigation {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  background-color: #eaf3ff;\n  padding: 16px;\n}`, src: "examples/peek/r5-nav-complete.html", title: "Rendu d'une navigation Flexbox complète", label: "Voir la navigation", height: 120 },
];

function normalize(children: React.ReactNode) {
  return React.Children.toArray(children).join("").replace(/\r\n/g, "\n").trim();
}

export default function CodeBlock(props: CodeBlockProps) {
  const code = normalize(props.children);
  const preview = rules.find((rule) => rule.code === code);

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
    </>
  );
}
