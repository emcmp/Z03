import React from "react";
import Link from "@docusaurus/Link";
import { TopicBadges, type TopicKey } from "@site/src/components/LearningCues";
import styles from "./ProjectVisuals.module.css";

type ProjectStep = {
  step: number;
  verb: string;
  title: string;
  summary: string;
  mission: string;
  outcome: string;
  topics: readonly TopicKey[];
  href: string;
};

const PROJECT_STEPS: readonly ProjectStep[] = [
  {
    step: 1,
    verb: "Construire",
    title: "La première page",
    summary: "Une page HTML complète avec du vrai contenu sur votre sujet.",
    mission: "Donner naissance à votre site avec une première page HTML structurée et compréhensible.",
    outcome: "une page complète, lisible dans le navigateur et organisée avec des éléments HTML pertinents.",
    topics: ["html", "structure", "content"],
    href: "/projet-web/rencontre1",
  },
  {
    step: 2,
    verb: "Relier",
    title: "Le petit site",
    summary: "Plusieurs pages, une image locale et des chemins relatifs qui fonctionnent.",
    mission: "Transformer votre page unique en petit site où les fichiers et les pages sont réellement reliés.",
    outcome: "plusieurs pages, une image locale et une navigation qui fonctionne dans les deux sens.",
    topics: ["html", "paths", "test"],
    href: "/projet-web/rencontre2",
  },
  {
    step: 3,
    verb: "Habiller",
    title: "L’identité visuelle",
    summary: "Une feuille CSS externe partagée et quelques choix visuels cohérents.",
    mission: "Donner une identité visuelle commune à toutes vos pages sans mélanger la structure HTML et la présentation.",
    outcome: "une feuille CSS partagée, des styles généraux cohérents et au moins une classe utilisée volontairement.",
    topics: ["css", "selectors", "test"],
    href: "/projet-web/rencontre3",
  },
  {
    step: 4,
    verb: "Faire respirer",
    title: "Les blocs et les espaces",
    summary: "Des cartes, des espacements et des dimensions utilisées pour une vraie raison.",
    mission: "Améliorer la lisibilité en contrôlant l’espace à l’intérieur et autour de vos blocs.",
    outcome: "des blocs espacés volontairement avec padding, border, margin et, si utile, une limite de largeur.",
    topics: ["css", "box", "test"],
    href: "/projet-web/rencontre4",
  },
  {
    step: 5,
    verb: "Organiser",
    title: "Flexbox et consolidation",
    summary: "Une disposition Flexbox simple et un site HTML/CSS cohérent avant JavaScript.",
    mission: "Utiliser Flexbox dans un besoin concret, puis consolider l’ensemble de votre site.",
    outcome: "une navigation ou un groupe organisé avec Flexbox, plus un site HTML/CSS cohérent et prêt pour la suite.",
    topics: ["css", "flexbox", "validation"],
    href: "/projet-web/rencontre5",
  },
];

export function ProjectStepHero({ step }: { step: number }) {
  const current = PROJECT_STEPS.find((item) => item.step === step);
  if (!current) return null;

  return (
    <section className={styles.stepHero} data-step={step} aria-label={`Projet Web, étape ${step} sur 5`}>
      <div className={styles.heroEyebrow}>Projet Web · Étape {step} sur 5</div>

      <div className={styles.progress} aria-label={`Progression : étape ${step} sur 5`}>
        {PROJECT_STEPS.map((item) => (
          <span
            key={item.step}
            className={item.step === step ? styles.progressCurrent : item.step < step ? styles.progressDone : styles.progressFuture}
            aria-current={item.step === step ? "step" : undefined}
          >
            {item.step}
          </span>
        ))}
      </div>

      <div className={styles.heroHeading}>
        <div className={styles.heroNumber} aria-hidden="true">{step}</div>
        <div>
          <div className={styles.heroVerb}>{current.verb}</div>
          <div className={styles.heroTitle}>{current.title}</div>
          <p className={styles.heroMission}>{current.mission}</p>
        </div>
      </div>

      <TopicBadges topics={current.topics} />

      <div className={styles.outcome}>
        <strong>À la fin de cette étape</strong>
        <span>Votre site possède {current.outcome}</span>
      </div>
    </section>
  );
}

export function ProjectJourney() {
  return (
    <div className={styles.journey}>
      {PROJECT_STEPS.map((item) => (
        <Link className={styles.journeyCard} data-step={item.step} to={item.href} key={item.step}>
          <span className={styles.cardNumber}>{item.step}</span>
          <span className={styles.cardVerb}>{item.verb}</span>
          <strong className={styles.cardTitle}>{item.title}</strong>
          <span className={styles.cardSummary}>{item.summary}</span>
        </Link>
      ))}
    </div>
  );
}
