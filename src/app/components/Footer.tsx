import { Link, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

// Pages where a big download CTA above the footer would get in the way.
const NO_CTA = ["/contact", "/feedback", "/support", "/privacy", "/terms"];

export default function Footer() {
  const { pathname } = useLocation();
  const cta = !NO_CTA.includes(pathname.replace(/\/$/, ""));
  const owner = site.operator || site.brand;
  return (
    <footer className="footer">
      {cta && (
        <section className="cta">
          <div className="glow glow--cta" aria-hidden="true" />
          <Reveal className="cta__inner">
            <img className="cta__icon" src={img("/images/app-icon.png")} alt="" width={64} height={64} />
            <h2 className="h2">Ready to make it move?</h2>
            <p className="lead">Download {site.brand} and turn your next idea into a video.</p>
            <Btn href={app.url}>Download on the App Store</Btn>
            <p className="note">Free on the App Store{app.minIOS ? `, iOS ${app.minIOS.split(".")[0]} or later` : ", for iPhone"}</p>
          </Reveal>
        </section>
      )}

      <div className="footer__main">
        <div className="glow glow--footer" aria-hidden="true" />
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo">
              <img src={img("/images/app-icon.png")} alt="" width={36} height={36} />
              <span>{site.brand}</span>
            </Link>
            <p className="muted">{site.disclaimer}</p>
            <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <h3 className="footer__h">Pages</h3>
              <ul>
                {nav.slice(0, 3).map((n) => (
                  <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
                ))}
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer__h">Help</h3>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container footer__copy">
            <span>© {site.year} {owner}</span>
            <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
