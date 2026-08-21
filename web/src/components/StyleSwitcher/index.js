import React, { useEffect, useState } from "react";

const STORAGE_KEY = "z03-style";
const CHANGE_EVENT = "z03-style-change";
const DEFAULT_STYLE = "campus";
const AVAILABLE_STYLES = new Set(["campus", "transit", "studio"]);

function applyStyle(style) {
  document.documentElement.dataset.z03Style = style;
}

function readStoredStyle() {
  try {
    const storedStyle = window.localStorage.getItem(STORAGE_KEY);
    return AVAILABLE_STYLES.has(storedStyle) ? storedStyle : DEFAULT_STYLE;
  } catch {
    return DEFAULT_STYLE;
  }
}

function persistStyle(style) {
  try {
    window.localStorage.setItem(STORAGE_KEY, style);
  } catch {
    // Le changement de style reste actif pour la page courante même si
    // le stockage local n'est pas disponible.
  }
}

export default function StyleSwitcher() {
  const [style, setStyle] = useState(DEFAULT_STYLE);

  useEffect(() => {
    const storedStyle = readStoredStyle();
    setStyle(storedStyle);
    applyStyle(storedStyle);

    function handleExternalChange(event) {
      const nextStyle = event.detail;
      if (AVAILABLE_STYLES.has(nextStyle)) {
        setStyle(nextStyle);
        applyStyle(nextStyle);
      }
    }

    window.addEventListener(CHANGE_EVENT, handleExternalChange);
    return () => window.removeEventListener(CHANGE_EVENT, handleExternalChange);
  }, []);

  function handleChange(event) {
    const nextStyle = event.target.value;

    if (!AVAILABLE_STYLES.has(nextStyle)) {
      return;
    }

    setStyle(nextStyle);
    applyStyle(nextStyle);
    persistStyle(nextStyle);
    window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: nextStyle }));
  }

  return (
    <div className="z03-style-switcher">
      <span className="z03-style-switcher__swatch" aria-hidden="true" />
      <select
        className="z03-style-switcher__select"
        value={style}
        onChange={handleChange}
        title="Choisir le style visuel du site"
        aria-label="Choisir le style visuel du site"
      >
        <option value="campus">Campus</option>
        <option value="transit">Transit</option>
        <option value="studio">Studio</option>
      </select>
    </div>
  );
}
