"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faq } from "@/data/faq";
import { cx } from "@/lib/cx";

/** Accordion: one answer open at a time. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {faq.map((item, i) => (
        <Reveal key={item.question} step={i} className={cx("card faq-item", open === i && "open")}>
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.question}
            <span className="plus" />
          </button>
          <div className="ans">
            <div>
              <p>{item.answer}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
