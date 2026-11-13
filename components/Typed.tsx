"use client";

import { useEffect, useState } from "react";

/** Types and deletes each phrase in turn. Shows the first phrase when motion is reduced. */
export default function Typed({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let word = 0;
    let length = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[word];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));
      let wait = deleting ? 38 : 75;
      if (!deleting && length === current.length) {
        deleting = true;
        wait = 1700;
      } else if (deleting && length === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        wait = 350;
      }
      timer = setTimeout(tick, wait);
    };

    timer = setTimeout(tick, 1700);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className="typed">{text}</span>
      <span className="caret" />
    </>
  );
}
