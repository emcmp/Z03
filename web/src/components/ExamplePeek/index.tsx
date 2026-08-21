import React, { useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./ExamplePeek.module.css";

type ExamplePeekProps = {
  src: string;
  title: string;
  label?: string;
  height?: number;
};

export default function ExamplePeek({
  src,
  title,
  label = "Voir le rendu",
  height = 220,
}: ExamplePeekProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const resolvedSrc = useBaseUrl(src);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!pinned || rootRef.current?.contains(event.target as Node)) {
        return;
      }

      setPinned(false);
      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setPinned(false);
      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [pinned]);

  const closeIfTransient = () => {
    if (!pinned) {
      setOpen(false);
    }
  };

  return (
    <span
      ref={rootRef}
      className={styles.root}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={closeIfTransient}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          closeIfTransient();
        }
      }}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => {
          const nextPinned = !pinned;
          setPinned(nextPinned);
          setOpen(nextPinned || !open);
        }}
      >
        <span className={styles.icon} aria-hidden="true">👁</span>
        <span>{label}</span>
      </button>

      {open ? (
        <span className={styles.popover} role="dialog" aria-label={title}>
          <span className={styles.browserWindow}>
            <span className={styles.browserBar}>
              <span className={styles.browserDots} aria-hidden="true">
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
              </span>
              <span className={styles.browserTitle}>Aperçu dans le navigateur</span>
            </span>
            <iframe
              className={styles.previewFrame}
              src={resolvedSrc}
              title={title}
              sandbox="allow-same-origin"
              loading="lazy"
              style={{ height: `${height}px` }}
            />
          </span>
        </span>
      ) : null}
    </span>
  );
}
