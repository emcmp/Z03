import React, { useCallback, useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import CodeBlock from "@theme-original/CodeBlock";
import styles from "./ExampleFrame.module.css";

type ExampleFrameProps = {
  src: string;
  title: string;
  html: string;
  css?: string;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
};

const DEFAULT_MIN_HEIGHT = 96;
const DEFAULT_MAX_HEIGHT = 640;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ExampleFrame({
  src,
  title,
  html,
  css,
  height,
  minHeight = DEFAULT_MIN_HEIGHT,
  maxHeight = DEFAULT_MAX_HEIGHT,
}: ExampleFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);
  const resolvedSrc = useBaseUrl(src);
  const [frameHeight, setFrameHeight] = useState(height ?? minHeight);

  const measureHeight = useCallback(() => {
    if (height !== undefined) {
      setFrameHeight(height);
      return;
    }

    const document = iframeRef.current?.contentDocument;
    if (!document) {
      return;
    }

    const contentHeight = Math.max(
      document.documentElement?.scrollHeight ?? 0,
      document.body?.scrollHeight ?? 0
    );

    setFrameHeight(clamp(contentHeight + 2, minHeight, maxHeight));
  }, [height, minHeight, maxHeight]);

  const handleDocumentClick = useCallback((event: Event) => {
    const target = event.target as HTMLElement | null;

    if (!target?.closest?.("a[href]")) {
      return;
    }

    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const handleLoad = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;

    const document = iframeRef.current?.contentDocument;
    if (!document?.documentElement) {
      return;
    }

    document.addEventListener("click", handleDocumentClick, { capture: true });
    measureHeight();

    if (height !== undefined || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => measureHeight());
    observer.observe(document.documentElement);

    if (document.body) {
      observer.observe(document.body);
    }

    observerRef.current = observer;
  }, [handleDocumentClick, height, measureHeight]);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    setFrameHeight(height ?? minHeight);
  }, [height, minHeight, resolvedSrc]);

  return (
    <div className={styles.exampleFrame}>
      <div className={styles.codeStack}>
        <CodeBlock language="html" title="index.html">
          {html.trim()}
        </CodeBlock>
        {css ? (
          <CodeBlock language="css" title="styles.css">
            {css.trim()}
          </CodeBlock>
        ) : null}
      </div>

      <div className={styles.previewBlock}>
        <div className={styles.browserWindow}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots} aria-hidden="true">
              <span className={styles.browserDot} />
              <span className={styles.browserDot} />
              <span className={styles.browserDot} />
            </div>
            <div className={styles.browserTitle}>Aperçu dans le navigateur</div>
          </div>
          <iframe
            ref={iframeRef}
            className={styles.previewFrame}
            src={resolvedSrc}
            title={title}
            sandbox="allow-same-origin"
            loading="lazy"
            onLoad={handleLoad}
            style={{ height: `${frameHeight}px` }}
          />
        </div>
      </div>
    </div>
  );
}
