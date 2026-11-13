"use client";

import Icon from "@/components/Icon";

/** Switches between the light (default) and navy dark theme and remembers the choice. */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme-v2", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      className="icon-btn theme-btn"
      type="button"
      aria-label="Toggle light / dark theme"
      onClick={toggle}
    >
      <Icon name="moon" className="moon" />
      <Icon name="sun" className="sun" />
    </button>
  );
}
