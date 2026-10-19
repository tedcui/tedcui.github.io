import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig, sitePath } from "../config/site";

type SiteHeaderProps = {
  compact?: boolean;
};

export function SiteHeader({ compact = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: sitePath("#work"), label: "Work" },
    { href: sitePath("#capabilities"), label: "Capabilities" },
    { href: sitePath("#about"), label: "About" }
  ];

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <div className="shell header-inner">
        <a className="brand" href={sitePath()} aria-label="Ted Cui — home">
          <span className="brand-mark" aria-hidden="true">TC</span>
          <span className="brand-name">Ted Cui</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          {siteConfig.resume && (
            <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
