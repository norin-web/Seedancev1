import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Split from "./Split";

/** Section heading: small outlined label, big title, one-line lead. */
export default function Heading({ label, title, lead, as = "h2" }: { label: string; title: string; lead?: ReactNode; as?: "h1" | "h2" }) {
  return (
    <div className="heading">
      <Reveal as="span" className="label">{label}</Reveal>
      <Split as={as} className={as === "h1" ? "h-page" : "h2"} parts={[[title]]} />
      {lead && <Reveal as="p" className="lead" delay={120}>{lead}</Reveal>}
    </div>
  );
}
