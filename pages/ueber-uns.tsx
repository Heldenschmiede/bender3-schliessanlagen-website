import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { CTABanner } from "../components/CTABanner";
import { MapPin, ChevronRight } from "lucide-react";
import styles from "./ueber-uns.module.css";

export default function UeberUnsPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Über uns – Sascha Bender | BENDER³ Schliesstechnik</title>
        <meta
          name="description"
          content="BENDER³ – Ihr Fachbetrieb für Schließanlagen. Inhaber Sascha Bender: Fair, seriös, regional. Planung, Einbau und Wartung in der Region Bergstraße & Rhein-Neckar."
        />
        <meta property="og:title" content="Über uns – Sascha Bender | BENDER³ Schliesstechnik" />
        <meta property="og:description" content="BENDER³ – Ihr Fachbetrieb für Schließanlagen. Inhaber Sascha Bender: Fair, seriös, regional. Planung, Einbau und Wartung in der Region Bergstraße & Rhein-Neckar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/ueber-uns" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://assets.floot.app/c34e9639-bb05-479b-9067-ef5a91d9a1ff/2889701f-58a4-4e29-a375-37502636a9c4.jpeg" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/ueber-uns" />
      </Helmet>

      <section className={styles.profileSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left: Image */}
            <div className={styles.imageColumn}>
              <img
                src="https://assets.floot.app/c34e9639-bb05-479b-9067-ef5a91d9a1ff/2889701f-58a4-4e29-a375-37502636a9c4.jpeg"
                alt="Sascha Bender"
                className={styles.image}
              />
            </div>

            {/* Right: Content */}
            <div className={styles.textColumn}>
              <h1 className={styles.title}>Sascha Bender</h1>
              <p className={styles.subtitle}>Inhaber BENDER³ Schliesstechnik</p>

              <div className={styles.badges}>
                <Badge variant="outline" className={styles.badge}>
                  Fair
                </Badge>
                <Badge variant="outline" className={styles.badge}>
                  Seriös
                </Badge>
                <Badge variant="outline" className={styles.badge}>
                  Regional
                </Badge>
              </div>

              <div className={styles.quoteBlock}>
                <p className={styles.quoteText}>
                  „Weil ich Ihnen faire Angebote unterbreite, seriöse Qualität
                  abliefere, hier aus der Region komme.“
                </p>
                <p className={styles.quoteAuthor}>— Sascha Bender</p>
              </div>

              <div className={styles.bodyText}>
                <p className={styles.paragraph}>
                  BENDER³ ist Ihr Spezialist für die Planung, den Einbau und die
                  Wartung von Schließanlagen. Ich biete meinen professionellen
                  Service für Privathaushalte, Hausverwaltungen, gewerbliche
                  Kunden und öffentliche Einrichtungen an.
                </p>
                <p className={styles.paragraph}>
                  Bei mir erhalten Sie alles aus einer Hand: Von der
                  Bedarfsermittlung über die Erstellung eines maßgeschneiderten
                  Schließplans bis zum fachgerechten Einbau und der langfristigen
                  Wartung Ihrer Anlage.
                </p>
                <p className={styles.paragraph}>
                  Ich bin kein anonymer Notfall-Schlüsseldienst. Bei BENDER³
                  arbeite ich persönlich und auf Terminbasis – damit ich mir die
                  Zeit nehmen kann, die Ihr Projekt verdient. Rufen Sie mich an
                  oder schreiben Sie mir eine E-Mail.
                </p>
              </div>

              <div className={styles.serviceArea}>
                <MapPin className={styles.serviceIcon} />
                <div className={styles.serviceTextGroup}>
                  <p className={styles.serviceLabel}>
                    Einsatzgebiet: Region Bergstraße & Rhein-Neckar
                  </p>
                  <Button asChild variant="link" className={styles.serviceLink}>
                    <Link to="/einsatzgebiete">
                      Alle Einsatzgebiete ansehen <ChevronRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}