import { useState } from "react";
import { app, faq, features, proIncludes, site, steps, templates } from "../content/site";
import { img } from "../utils/img";
import { useAutoCycle } from "../utils/motion";
import Btn from "../components/Btn";
import Faq from "../components/Faq";
import Heading from "../components/Heading";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const Play = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
);

const PROMPT =
  "Cinematic handheld shot on a rainy city street at night. A young woman smiles at the camera as neon lights reflect on the wet pavement and cars pass by in soft bokeh.";

export default function Home() {
  const [hold, setHold] = useState(false);
  const [tab, setTab] = useAutoCycle(features.length, 7000, hold);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="glow glow--hero" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal as="span" className="label">AI video generator for iPhone</Reveal>
          <Split as="h1" className="h-hero" parts={[["Describe it."], ["\n"], ["Watch it"], ["move.", true]]} />
          <Reveal as="p" className="lead hero__sub" delay={150}>
            {site.brand} turns a few lines of text or a single photo into a short AI video, all from your iPhone.
          </Reveal>
          <Reveal className="hero__cta" delay={220}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <span className="note">Free on the App Store{app.minIOS ? `, iOS ${app.minIOS.split(".")[0]} or later` : ", for iPhone"}</span>
          </Reveal>
        </div>

        {/* Mockup */}
        <Reveal className="hero__phone" delay={300}>
          <div className="glow glow--phone" aria-hidden="true" />
          <img
            src={img("/images/phone-home.webp")}
            alt="Seedance home screen with Prompt Templates, Image to Video and Text to Video"
            width={880}
            height={1849}
          />
        </Reveal>
      </section>

      {/* Templates strip */}
      <section className="strip" aria-label="Templates in the app">
        <Reveal as="p" className="strip__title">Start from a ready-made template</Reveal>
        <Reveal as="ul" className="strip__row" delay={80}>
          {templates.map((t) => (
            <li key={t.name}>{t.name}</li>
          ))}
        </Reveal>
      </section>

      {/* How it works */}
      <section className="section" id="how-it-works">
        <div className="container">
          <Heading label="How it works" title="Getting started is simple." lead="Three steps from an idea to a video you can share." />
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="step card" key={s.title} delay={i * 80}>
                <span className="step__n">{i + 1}</span>
                <div className="step__art" aria-hidden="true">
                  {i === 0 && <img className="step__icon" src={img("/images/app-icon.png")} alt="" width={112} height={112} loading="lazy" />}
                  {i === 1 && (
                    <div className="mini-prompt">
                      <p>Y2K-inspired handheld camcorder scene outside a convenience store at night…</p>
                      <div className="mini-prompt__chips"><span>5s</span><span>1:1</span><span>1080p</span></div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="mini-result">
                      <img src={img("/images/ex-y2k.webp")} alt="" loading="lazy" />
                      <span className="mini-result__play"><Play /></span>
                    </div>
                  )}
                </div>
                <h3 className="h4">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A real prompt */}
      <section className="section quote">
        <div className="container quote__grid">
          <Reveal className="quote__frame">
            <img src={img("/images/tpl-rainy-night.webp")} alt="A frame from a generated video: a young woman smiling on a rainy street at night" loading="lazy" />
            <span className="mini-result__play"><Play /></span>
          </Reveal>
          <div>
            <Reveal as="p" className="quote__label">Prompt</Reveal>
            <Reveal as="blockquote" className="quote__text" delay={80}>“{PROMPT}”</Reveal>
            <Reveal as="p" className="quote__by" delay={160}>A prompt from {site.brand}</Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" id="features">
        <div className="container">
          <Heading label="Features" title="Everything it takes to make it move." lead="From the first prompt to the saved clip, in one app." />
          <div className="feat" onPointerEnter={() => setHold(true)} onPointerLeave={() => setHold(false)}>
            <div className="feat__tabs" role="tablist" aria-label="Features">
              {features.map((f, i) => (
                <button
                  key={f.key}
                  role="tab"
                  id={`tab-${f.key}`}
                  aria-selected={tab === i}
                  aria-controls="feat-panel"
                  className={`feat__tab${tab === i ? " is-on" : ""}`}
                  onClick={() => setTab(i)}
                >
                  <span className="feat__title">{f.title}</span>
                  <span className="feat__text">{f.text}</span>
                  <span className="feat__bar" aria-hidden="true"><i style={{ animationPlayState: hold ? "paused" : "running" }} key={tab === i ? "on" : "off"} /></span>
                </button>
              ))}
            </div>
            <div className="feat__stage" id="feat-panel" role="tabpanel" aria-labelledby={`tab-${features[tab].key}`}>
              <div className="glow glow--feat" aria-hidden="true" />
              {features.map((f, i) => (
                <img key={f.key} className={`feat__phone${tab === i ? " is-on" : ""}`} src={img(f.img)} alt={tab === i ? f.alt : ""} aria-hidden={tab !== i} loading="lazy" width={880} height={1849} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates gallery */}
      <section className="section" id="templates">
        <div className="container">
          <Heading label="Templates" title="Pick a look. Make it yours." lead="Ready-to-use prompts for faster creation. Open one, tweak it, generate." />
          <div className="gallery">
            {templates.map((t, i) => (
              <Reveal className="tile" key={t.name} delay={(i % 3) * 70}>
                <img src={img(t.img)} alt={`${t.name} template`} loading="lazy" width={720} height={1280} />
                <span className="tile__name">{t.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="section" id="premium">
        <div className="container">
          <Heading label="Premium" title="One plan, no surprises." lead="Premium is an auto-renewable subscription. The price and term are shown in the app before you pay." />
          <div className="pro">
            <Reveal className="pro__card card">
              <div className="glow glow--card" aria-hidden="true" />
              <p className="pro__name">{site.brand} Premium</p>
              <p className="pro__big">Unlimited video creation</p>
              <p className="muted">AI Chat is included with Premium. Billing, renewals and refunds are handled by Apple.</p>
              <Btn href={app.url} block>Download on the App Store</Btn>
              <p className="note center">Purchases can be restored with the same Apple account.</p>
            </Reveal>
            <Reveal className="pro__card card" delay={100}>
              <p className="pro__inc">Good to know:</p>
              <ul className="checks">
                {proIncludes.map((p) => (
                  <li key={p}><Check />{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <Heading label="Frequently asked questions" title="Everything you need to know." lead="Short answers before you get started." />
          <Faq items={faq.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
