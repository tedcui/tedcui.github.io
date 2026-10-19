import { ArrowUpRight } from "lucide-react";
import { siteConfig, sitePath } from "../config/site";

export function SiteFooter() {
  const links = [
    siteConfig.email && { label: "Email", href: `mailto:${siteConfig.email}` },
    siteConfig.linkedin && { label: "LinkedIn", href: siteConfig.linkedin },
    siteConfig.resume && { label: "Résumé", href: siteConfig.resume }
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-callout">
          <p className="eyebrow">Next question</p>
          <h2>Let’s build something measurable.</h2>
        </div>
        {links.length > 0 && (
          <div className="footer-links" aria-label="Contact links">
            {links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
        <div className="footer-bottom">
          <a className="brand" href={sitePath()} aria-label="Ted Cui — home">
            <span className="brand-mark" aria-hidden="true">TC</span>
            <span className="brand-name">Ted Cui</span>
          </a>
          <p>© 2026 Ted Cui</p>
          <p>Built with React + TypeScript · Deployed with GitHub Actions</p>
        </div>
      </div>
    </footer>
  );
}
