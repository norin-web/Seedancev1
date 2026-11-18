import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated } from "../content/legal";
import Split from "./Split";
import Reveal from "./Reveal";
import Btn from "./Btn";

type Doc = {
  title: string;
  current: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part.replace(/[.,;]$/, "")}`}>{part}</a> : part,
  );

// **bold** runs inside a line
const rich = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/).map((p, i) => (p.startsWith("**") ? <b key={i}>{linkify(p.slice(2, -2))}</b> : <Fragment key={i}>{linkify(p)}</Fragment>));

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{rich(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet box so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {rich(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [active, setActive] = useState(sections[0]?.id);

  // highlight the section whose heading last passed the upper third of the viewport
  useEffect(() => {
    if (!sections.length) return;
    const onScroll = () => {
      let cur = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 100, behavior: "smooth" });
  };

  return (
    <>
      <section className="lhero">
        <div className="glow glow--left" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="label">{legalUpdated ? `Effective ${legalUpdated}` : "Legal"}</Reveal>
          <Split as="h1" className="h-page" parts={[[doc.title]]} />
          <Reveal className="lhero__meta" delay={300}>
            {sections.length > 0 && <span>{sections.length} sections</span>}
            <a href={`mailto:${site.email}`} className="lhero__chip">{site.email}</a>
            <Link to={doc.other.to} className="lhero__chip">Read the {doc.other.label}</Link>
          </Reveal>
        </div>
      </section>

      <section className="legal">
        {doc.body ? (
          <div className="container legal__grid">
            <aside className="legal__toc" aria-label="Contents">
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      className={active === s.id ? "is-on" : ""}
                      onClick={() => go(s.id)}
                      aria-current={active === s.id ? "true" : undefined}
                      aria-label={s.title}
                      title={s.title}
                    >
                      <b>{String(i + 1).padStart(2, "0")}</b>
                      <i aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
            </aside>

            <article className="legal__body">
              {doc.glance && (
                <Reveal className="glance">
                  <p className="glance__k">At a glance</p>
                  <div className="glance__grid">
                    {doc.glance.map(([h, t]) => (
                      <div className="glance__card" key={h}>
                        <b>{h}</b>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                  <p className="note">A short summary for convenience. The full text below is what applies.</p>
                </Reveal>
              )}

              {intro.map((t, i) => <Block key={i} text={t} />)}

              {sections.map((s, i) => (
                <section className="lsec" id={s.id} key={s.id}>
                  <div className="lsec__head">
                    <span className="lsec__n">{String(i + 1).padStart(2, "0")}</span>
                    <h2>{s.title}</h2>
                  </div>
                  <div className="lsec__text">
                    {s.blocks.map((b, j) => <Block key={j} text={b} />)}
                  </div>
                </section>
              ))}

              <Ask />
            </article>
          </div>
        ) : (
          <div className="container"><div className="legal__wrap">
            <Reveal className="card legal__soon">
              <h2 className="h4">The full {doc.title} will be published here.</h2>
              <p className="muted">
                Until then, if you have a question about how {site.brand} handles your data or about using the app, write to us and we’ll answer.
              </p>
            </Reveal>
            <Ask />
          </div></div>
        )}
      </section>
    </>
  );
}

function Ask() {
  return (
    <div className="legal__ask card">
      <div>
        <p className="legal__askk">Questions about this document?</p>
        <p className="muted">
          Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we’ll get back to you.
        </p>
      </div>
      <Btn to="/contact" variant="ghost">Contact us</Btn>
    </div>
  );
}
