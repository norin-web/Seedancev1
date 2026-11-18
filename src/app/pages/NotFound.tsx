import Btn from "../components/Btn";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="hero hero--page nf">
      <div className="glow glow--hero" aria-hidden="true" />
      <div className="container hero__inner">
        <Reveal as="span" className="label">404</Reveal>
        <h1 className="h-page">This page didn’t render.</h1>
        <p className="lead hero__sub">The link may be old or mistyped. Let’s get you back to the start.</p>
        <div className="hero__cta">
          <Btn to="/">Back to home</Btn>
        </div>
      </div>
    </section>
  );
}
