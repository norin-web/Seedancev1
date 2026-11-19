import { site } from "../content/site";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const principles = [
  ["Idea first", "You bring the scene. The app handles the camera, the light and the motion."],
  ["Simple by default", "Two ways to start, a few clear settings and a big button that says Start Creating."],
  ["History on your iPhone", "Clips, prompts and chats are stored on your device, ready to save, share or try again."],
];

export default function About() {
  return (
    <>
      <section className="hero hero--page hero--left">
        <div className="glow glow--left" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="label">About</Reveal>
          <Split as="h1" className="h-page" parts={[["Made for people"], ["\n"], ["with ideas, not timelines."]]} />
          <Reveal as="p" className="lead about__sub" delay={150}>
            {site.brand} is a small iPhone app for turning a thought into a moving picture, made by {site.operator}, an independent developer in {site.city}. No editing skills, no desktop software, no timeline to learn.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="approach card">
            <p className="approach__k">Our approach</p>
            <div>
              <p className="h3">If you can describe it, you should be able to watch it.</p>
              <p className="muted">So the app starts with words or a photo, keeps the settings to the few that matter and puts the result one tap from your camera roll.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid3">
            {principles.map(([t, d], i) => (
              <Reveal className="card principle" key={t} delay={i * 80}>
                <h3 className="h4">{t}</h3>
                <p className="muted">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
