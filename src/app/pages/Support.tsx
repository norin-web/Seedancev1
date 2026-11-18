import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import Faq from "../components/Faq";
import Heading from "../components/Heading";
import Reveal from "../components/Reveal";

export default function Support() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow glow--hero" aria-hidden="true" />
        <div className="container hero__inner">
          <Heading as="h1" label="Support" title="How can we help?" lead="Answers to the most common questions. Still stuck? Write to us." />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <Faq items={faq} />
          <Reveal className="card mailbox">
            <div>
              <p className="muted">Didn’t find your answer?</p>
              <a className="mailbox__mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <Btn to="/contact" variant="ghost">Contact us</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
