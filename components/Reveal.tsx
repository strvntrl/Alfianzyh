"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cx } from "@/lib/cx";
import { delay } from "@/lib/delay";

type Props<T extends ElementType> = {
  as?: T;
  /** Stagger step, see `delay()`. */
  step?: number;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "style">;

/**
 * Scroll-reveal wrapper for elements whose class names change after render
 * (static elements simply use the `reveal` class, handled by <Effects />).
 */
export default function Reveal<T extends ElementType = "div">({
  as,
  step = 0,
  className,
  ...rest
}: Props<T>) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-self-reveal=""
      className={cx(className, "reveal", visible && "in")}
      style={delay(step)}
      {...rest}
    />
  );
}
