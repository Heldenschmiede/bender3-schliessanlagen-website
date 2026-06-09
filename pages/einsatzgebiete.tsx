import React from "react";
import { Helmet } from "react-helmet";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";
import styles from "./einsatzgebiete.module.css";

const CITIES = [
  "Bensheim",
  "Birkenau",
  "Dossenheim",
  "Edingen-Neckarshausen",
  "Frankenthal",
  "Heddesheim",
  "Hemsbach",
  "Heppenheim",
  "Hirschberg an der Bergstraße",
  "Ilvesheim",
  "Ladenburg",
  "Lampertheim",
  "Laudenbach",
  "Lorsch",
  "Ludwigshafen",
  "Mannheim",
  "Mörlenbach",
  "Oppau",
  "Schriesheim",
  "Viernheim",
  "Weinheim",
].map((name) => ({ name, isHome: name === "Heddesheim" }));

export default function EinsatzgebietePage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>
          Einsatzgebiete – Schließanlagen Service | BENDER³ Bergstraße &
          Rhein-Neckar
        </title>
        <meta
          name="description"
          content="BENDER³ Schließanlagen-Service in Mannheim, Weinheim, Ludwigshafen, Heppenheim und 17 weiteren Orten. Ihr regionaler Fachbetrieb an der Bergstraße und im Rhein-Neckar-Gebiet."
        />
        <meta property="og:title" content="Einsatzgebiete – Schließanlagen Service | BENDER³ Bergstraße & Rhein-Neckar" />
        <meta property="og:description" content="BENDER³ Schließanlagen-Service in Mannheim, Weinheim, Ludwigshafen, Heppenheim und 17 weiteren Orten. Ihr regionaler Fachbetrieb an der Bergstraße und im Rhein-Neckar-Gebiet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/einsatzgebiete" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/einsatzgebiete" />
      </Helmet>

      <section className={`dark ${styles.hero}`}>
        <div className={styles.containerNarrow}>
          <h1 className={styles.heroTitle}>Unsere Einsatzgebiete</h1>
          <p className={styles.heroIntro}>
            BENDER³ bietet professionelle Schließanlagen-Dienstleistungen in 21 Städten der Region Bergstraße und Rhein-Neckar an – darunter Mannheim, Weinheim, Ludwigshafen, Heppenheim und Heddesheim (Firmensitz). Wir planen, installieren und warten Schließanlagen vor Ort – ausschließlich auf Terminbasis.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.citiesGrid}>
            {CITIES.map((city) => (
              <div
                key={city.name}
                className={`${styles.cityCard} ${
                  city.isHome ? styles.cityCardHome : ""
                }`}
              >
                <MapPin className={styles.cityIcon} size={20} />
                <span className={styles.cityName}>{city.name}</span>
                {city.isHome && (
                  <Badge variant="primary" className={styles.cityBadge}>
                    Unser Standort
                  </Badge>
                )}
              </div>
            ))}
          </div>

          <div className={styles.highlightBanner}>
            <MapPin className={styles.highlightIcon} size={24} />
            <span>
              Ihr Ort ist nicht dabei? Kontaktieren Sie uns – wir sind flexibel.
            </span>
          </div>

          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>Service & Kontakt</h2>
            <div className={styles.infoContent}>
              <div className={styles.infoItem}>
                <Clock className={styles.infoIcon} size={24} />
                <div className={styles.infoTextWrapper}>
                  <strong className={styles.infoLabel}>Servicezeiten:</strong>
                  <p className={styles.infoDesc}>
                    Mo–Fr 08:00–18:00 Uhr
                    <br />
                    (Mi & Fr 08:00–12:00 Uhr)
                  </p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <CalendarCheck className={styles.infoIcon} size={24} />
                <div className={styles.infoTextWrapper}>
                  <strong className={styles.infoLabel}>Termine vor Ort:</strong>
                  <p className={styles.infoDesc}>nach Vereinbarung</p>
                </div>
              </div>
            </div>
            <div className={styles.infoActions}>
              <Button asChild size="lg" className={styles.actionButton}>
                <a href="tel:+491785405000">
                  <Phone size={18} /> 0178 – 540 50 00
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={styles.actionButton}
              >
                <a href="mailto:info@bender-schliessanlagen.de">
                  <Mail size={18} /> E-Mail senden
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}