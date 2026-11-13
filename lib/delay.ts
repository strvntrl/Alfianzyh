import type { CSSProperties } from "react";

/** Stagger step for scroll-reveal animations (read by `.reveal` in globals.css). */
export function delay(step: number): CSSProperties {
  return { "--d": step } as CSSProperties;
}
