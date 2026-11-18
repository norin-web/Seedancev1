import { useState } from "react";
import Reveal from "./Reveal";

const Chevron = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/** Accordion; the first answer starts open. */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <Reveal className={`faq__item${on ? " is-open" : ""}`} key={f.q} delay={Math.min(i, 5) * 40}>
            <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(on ? -1 : i)}>
              <span>{f.q}</span>
              <Chevron />
            </button>
            <div className="faq__a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} {...({ inert: on ? undefined : "" } as object)}>
              <div className="faq__inner">
                <p>{f.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
