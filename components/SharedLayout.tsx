import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "./Button";
import styles from "./SharedLayout.module.css";

export const SharedLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const NAV_LINKS = [
    { label: "Startseite", path: "/" },
    { label: "Leistungen", path: "/leistungen" },
    { label: "Preise", path: "/preise" },
    { label: "Einsatzgebiete", path: "/einsatzgebiete" },
    { label: "FAQ", path: "/faq" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="de" />
      </Helmet>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            BENDER<sup>³</sup>
          </Link>

          <nav className={styles.desktopNav}>
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerPhoneWrapper}>
            <a href="tel:+491785405000" className={styles.headerPhone}>
              <Phone size={16} />
              0178 – 540 50 00
            </a>
          </div>

          <button
            className={styles.mobileMenuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.mobileMenuOverlay}>
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className={styles.mobileNavLink}>
              {link.label}
            </Link>
          ))}
          <Link to="/ueber-uns" className={styles.mobileNavLink}>
            Über uns
          </Link>
        </div>
      )}

      <main className={styles.mainContent}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerCol}>
            <Link to="/" className={styles.logo}>
              BENDER<sup>³</sup>
            </Link>
            <p className={styles.footerTagline}>Fair – Seriös – Regional</p>
            <p className={styles.footerText}>
              Ihr regionaler Experte für professionelle Schließanlagen in der
              Region Bergstraße & Rhein-Neckar.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/benderschliesstechnik" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/bender_reloaded?igsh=ZWw2d2Q2M3ZhZHE1" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Kontakt</h4>
            <p className={styles.footerText}>
              <strong>Telefon:</strong> <br />
              <a href="tel:+491785405000" className={styles.footerLink}>
                0178 – 540 50 00
              </a>
            </p>
            <p className={styles.footerText}>
              <strong>E-Mail:</strong> <br />
              <a
                href="mailto:info@bender-schliessanlagen.de"
                className={styles.footerLink}
              >
                info@bender-schliessanlagen.de
              </a>
            </p>
            <p className={styles.footerText}>
              <strong>Servicezeiten:</strong> <br />
              Mo–Fr 08:00–18:00 Uhr <br />
              (Mi & Fr bis 12:00 Uhr)
            </p>
          </div>

          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul className={styles.footerLinkList}>
              <li>
                <Link to="/leistungen" className={styles.footerLink}>Leistungen</Link>
              </li>
              <li>
                <Link to="/preise" className={styles.footerLink}>Preise</Link>
              </li>
              <li>
                <Link to="/einsatzgebiete" className={styles.footerLink}>Einsatzgebiete</Link>
              </li>
              <li>
                <Link to="/faq" className={styles.footerLink}>FAQ</Link>
              </li>
              <li>
                <Link to="/kontakt" className={styles.footerLink}>Kontakt</Link>
              </li>
              <li>
                <Link to="/ueber-uns" className={styles.footerLink}>Über uns</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© Inhaber Sascha Bender | BENDER³ Schliesstechnik</p>
          <div className={styles.footerLegalLinks}>
            <Link to="/impressum" className={styles.footerLink}>Impressum</Link>
            <Link to="/datenschutz" className={styles.footerLink}>Datenschutz</Link>
          </div>
        </div>
      </footer>

      <div className={styles.mobileCtaWrapper}>
        <Button asChild size="lg" className={styles.mobileCtaBtn}>
          <a href="tel:+491785405000">
            <Phone size={20} /> Jetzt anrufen
          </a>
        </Button>
      </div>
    </div>
  );
};