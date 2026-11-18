import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="hero hero--page hero--left contact">
      <div className="glow glow--left" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__left">
          <Reveal as="span" className="label">Contact &amp; feedback</Reveal>
          <Split as="h1" className="h-page" parts={[["Get in touch."]]} />
          <Reveal as="p" className="lead" delay={150}>
            Questions, a bug, an idea for a new style? Tell us. Feedback shapes every update.
          </Reveal>
          <Reveal className="contact__mail" delay={200}>
            <span className="note">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
        <Reveal className="card contact__form" delay={200}>
          <MailForm
            subject={`${site.brand} message`}
            submit="Send message"
            fields={[
              { name: "name", label: "Name", required: true, auto: "name" },
              { name: "email", label: "Email", type: "email", required: true, auto: "email" },
              { name: "topic", label: "Topic", options: ["Question", "Bug report", "Idea", "Subscription"] },
              { name: "message", label: "Message", textarea: true, required: true },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}
