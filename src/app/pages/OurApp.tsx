import { app, appRows, reel, specs, styles } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Heading from "../components/Heading";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function OurApp() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow glow--hero" aria-hidden="true" />
        <div className="container hero__inner">
          <Reveal as="span" className="label">The app</Reveal>
          <Split as="h1" className="h-page" parts={[["A video studio"], ["\n"], ["that fits in your pocket."]]} />
          <Reveal as="p" className="lead hero__sub" delay={150}>
            Text to Video, Image to Video, styles, templates and an AI chat. Everything sits one tap from the home screen.
          </Reveal>
          <Reveal className="hero__cta" delay={220}>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>

      <section className="reel" aria-label="App screens">
        <div className="container reel__row">
          {reel.map((p, i) => (
            <Reveal className="reel__phone" key={p.img} delay={i * 60}>
              <img src={img(p.img)} alt={p.alt} width={880} height={1849} loading={i < 3 ? undefined : "lazy"} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container rows">
          {appRows.map((r, i) => (
            <div className={`row${i % 2 ? " row--flip" : ""}`} key={r.title}>
              <Reveal className="row__phone">
                <div className="glow glow--feat" aria-hidden="true" />
                <img src={img(r.img)} alt={r.alt} width={880} height={1849} loading="lazy" />
              </Reveal>
              <Reveal className="row__text" delay={100}>
                <h2 className="h3">{r.title}</h2>
                <p className="lead">{r.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Heading label="Styles" title="Six looks to start from." lead="Pick one on the Styles screen and it sets the mood of your video." />
          <Reveal as="ul" className="styles">
            {styles.map((s) => <li key={s}>{s}</li>)}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <Heading label="Details" title="At a glance." />
          <Reveal as="dl" className="specs card">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
