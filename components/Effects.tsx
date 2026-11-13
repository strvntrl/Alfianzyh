"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { cx } from "@/lib/cx";

const REVEAL_SELECTOR = ".reveal:not(.in):not([data-self-reveal])";

/**
 * Site-wide visual effects that are not tied to a single component:
 * scroll progress bar, scroll-reveal, cursor glow, card spotlight, 3D tilt,
 * magnetic buttons and the back-to-top button.
 */
export default function Effects() {
  const pathname = usePathname();
  const progress = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  // Scroll-reveal for static `.reveal` elements; re-scanned on every navigation.
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Scroll progress bar and back-to-top visibility.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setShowTop(y > 700);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Pointer effects — desktop pointers only, and never with reduced motion.
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let glowX = 0;
    let glowY = 0;
    let started = false;
    let tilted: HTMLElement | null = null;
    let pulled: HTMLElement | null = null;

    const followCursor = () => {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      if (glow.current) glow.current.style.transform = `translate3d(${glowX}px,${glowY}px,0)`;
      frame = requestAnimationFrame(followCursor);
    };

    const release = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.transition = "";
      el.style.transform = "";
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        started = true;
        glowX = targetX;
        glowY = targetY;
        glow.current?.classList.add("on");
        followCursor();
      }
      const target = event.target instanceof Element ? event.target : null;

      // Spotlight that follows the cursor inside cards.
      const card = target?.closest<HTMLElement>(".card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }

      // 3D tilt.
      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilted !== tilt) release(tilted);
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.transition = "transform .1s linear, border-color .4s, box-shadow .5s";
        tilt.style.transform = `perspective(900px) rotateX(${-py * 7}deg) rotateY(${px * 9}deg) translateY(-6px)`;
      }
      tilted = tilt;

      // Magnetic buttons.
      const magnet = target?.closest<HTMLElement>(".btn, .socials a") ?? null;
      if (pulled !== magnet) release(pulled);
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const dx = (event.clientX - rect.left - rect.width / 2) * 0.22;
        const dy = (event.clientY - rect.top - rect.height / 2) * 0.3;
        magnet.style.transform = `translate(${dx}px,${dy}px)`;
      }
      pulled = magnet;

      // Portrait parallax on the home page.
      const portrait = document.querySelector<HTMLElement>(".portrait.in");
      if (portrait) {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        portrait.style.transform = `translate3d(${x * -18}px,${y * -14}px,0)`;
      }
    };

    const onLeave = () => {
      release(tilted);
      release(pulled);
      tilted = pulled = null;
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" ref={progress} />
      <div className="cursor-glow" aria-hidden="true" ref={glow} />
      <button
        className={cx("icon-btn to-top", showTop && "show")}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="up" />
      </button>
    </>
  );
}
