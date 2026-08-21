import React from "react";
import styles from "./LearningCues.module.css";

export type TopicKey =
  | "html"
  | "css"
  | "structure"
  | "content"
  | "paths"
  | "selectors"
  | "box"
  | "flexbox"
  | "test"
  | "validation"
  | "optional";

type TopicMeta = {
  label: string;
  icon: string;
  tone: string;
};

const TOPICS: Record<TopicKey, TopicMeta> = {
  html: { label: "HTML", icon: "<>", tone: "blue" },
  css: { label: "CSS", icon: "#", tone: "violet" },
  structure: { label: "Structure", icon: "▦", tone: "indigo" },
  content: { label: "Contenu", icon: "✎", tone: "rose" },
  paths: { label: "Chemins", icon: "↗", tone: "teal" },
  selectors: { label: "Sélecteurs", icon: ".", tone: "violet" },
  box: { label: "Modèle en boîte", icon: "□", tone: "amber" },
  flexbox: { label: "Flexbox", icon: "⇆", tone: "green" },
  test: { label: "À tester", icon: "✓", tone: "green" },
  validation: { label: "Validation", icon: "★", tone: "amber" },
  optional: { label: "Optionnel", icon: "+", tone: "neutral" },
};

export function TopicBadges({ topics }: { topics: readonly TopicKey[] }) {
  return (
    <div className={styles.topicRow} aria-label="Repères de cette section">
      {topics.map((topic) => {
        const meta = TOPICS[topic];
        return (
          <span className={styles.topicBadge} data-tone={meta.tone} key={topic}>
            <span className={styles.topicIcon} aria-hidden="true">
              {meta.icon}
            </span>
            {meta.label}
          </span>
        );
      })}
    </div>
  );
}

type KeyPointType = "remember" | "method" | "test" | "debug";

const KEY_POINTS: Record<KeyPointType, { label: string; icon: string; tone: string }> = {
  remember: { label: "À retenir", icon: "★", tone: "blue" },
  method: { label: "Méthode", icon: "→", tone: "teal" },
  test: { label: "À tester", icon: "✓", tone: "green" },
  debug: { label: "Réflexe", icon: "?", tone: "amber" },
};

export function KeyPoint({
  type = "remember",
  title,
  children,
}: {
  type?: KeyPointType;
  title?: string;
  children: React.ReactNode;
}) {
  const meta = KEY_POINTS[type];

  return (
    <div className={styles.keyPoint} data-tone={meta.tone}>
      <span className={styles.keyIcon} aria-hidden="true">
        {meta.icon}
      </span>
      <div className={styles.keyContent}>
        <strong>{title ?? meta.label}</strong>
        <div>{children}</div>
      </div>
    </div>
  );
}
