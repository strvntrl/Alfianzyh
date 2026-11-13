"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/site";
import { cx } from "@/lib/cx";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Add a shadow once scrolled, and hide the bar while scrolling down.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 500);
      lastY.current = y;
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
  }, []);

  return (
    <header
      className={cx("nav", scrolled && "scrolled", hidden && !open && "hide", open && "open")}
    >
      <Link href="/" className="brand" aria-label="Alfianzyh — Home">
        <Image src="/img/LOGO2.png" alt="" width={33} height={30} priority />
        alfianzyh<b>.</b>
      </Link>
      <nav className="nav-links" id="menu" aria-label="Main">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "active" : undefined}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="nav-right">
        <ThemeToggle />
        <Link href="/contact" className="btn btn-primary btn-sm">
          Let&apos;s talk <Icon name="arrow" />
        </Link>
        <button
          className="icon-btn burger"
          type="button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <div>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>
    </header>
  );
}
