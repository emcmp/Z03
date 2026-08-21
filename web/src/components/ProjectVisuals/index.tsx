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
    verb: "Planifier",
    title: "Le thème et l’accueil",
    summary: "Un thème principal, deux pages de sujet, une page À propos et un accueil.",
    mission: "Définir la structure de votre futur site et présenter clairement son thème principal.",
    outcome: "un thème personnel, deux sujets et une page À propos planifiés, puis une page d’accueil HTML complète.",
    topics: ["html", "structure", "content"],
    href: "/projet-web/rencontre1",
  },
  {
    step: 2,
    verb: "Développer",
    title: "Le site de quatre pages",
    summary: "Un accueil, deux pages de sujet, une page À propos, des images et une navigation complète.",
    mission: "Transformer la page d’accueil en un vrai petit site dont chaque page possède un rôle distinct.",
    outcome: "quatre pages reliées, au moins deux images locales et des chemins relatifs qui fonctionnent partout.",
    topics: ["html", "paths", "test"],
    href: "/projet-web/rencontre2",
  },
  {
    step: 3,
    verb: "Habiller",
    title: "L’identité visuelle",
    summary: "Une feuille CSS partagée, des styles généraux et des classes adaptées au thème.",
    mission: "Donner une identité visuelle commune aux quatre pages sans recopier les mêmes styles.",
    outcome: "une feuille CSS partagée, des décisions visuelles cohérentes et des classes réutilisables.",
    topics: ["css", "selectors", "test"],
    href: "/projet-web/rencontre3",
  },
  {
    step: 4,
    verb: "Faire respirer",
    title: "Les blocs et les espaces",
    summary: "Un audit des vrais contenus du site avec padding, border et margin.",
    mission: "Améliorer la lisibilité en diagnostiquant l’espace intérieur et extérieur de vos propres blocs.",
    outcome: "des blocs comparables et espacés volontairement avec le modèle en boîte.",
    topics: ["css", "box", "test"],
    href: "/projet-web/rencontre4",
  },
  {
    step: 5,
    verb: "Personnaliser",
    title: "Flexbox et consolidation",
    summary: "Une disposition Flexbox utile et un site personnel, cohérent et prêt pour JavaScript.",
    mission: "Utiliser Flexbox dans un besoin concret, puis corriger, personnaliser et consolider les quatre pages.",
    outcome: "un parent flex compris, un site cohérent et les preuves nécessaires aux validations HTML/CSS.",
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
