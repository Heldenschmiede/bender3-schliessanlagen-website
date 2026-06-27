import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Clock,
  Car,
  Timer,
  Wrench,
  Info,
  ShieldCheck,
  AlertCircle,
  Phone,
  Mail,
  Star
} from "lucide-react";
import { Button } from "../components/Button";
import { GOOGLE_REVIEW_COUNT, GOOGLE_RATING_LABEL } from "../helpers/googleRating";
import styles from "./preise.module.css";

export default function PreisePage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>Preise & Konditionen – Schließanlagen | BENDER³</title>
        <meta
          name="description"
          content="Transparente Preise für Schließanlagen: Stundensatz €69, Fahrtkosten €21, Materialkosten nach Verbrauch. BENDER³ – fair, seriös, regional."
        />
        <meta property="og:title" content="Preise & Konditionen – Schließanlagen | BENDER³" />
        <meta property="og:description" content="Transparente Preise für Schließanlagen: Stundensatz €69, Fahrtkosten €21, Materialkosten nach Verbrauch. BENDER³ – fair, seriös, regional." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/preise" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/preise" />
      </Helmet>

      {/* Hero Section (Dark mode inversion) */}
      <section className={`dark ${styles.hero}`}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Faire Preise – transparent & nachvollziehbar</h1>
          <p className={styles.heroIntro}>BENDER³ steht für faire, nachvollziehbare Konditionen ohne versteckte Kosten.</p>
          <a
            href="https://www.google.com/maps/place/Bender+Sascha+Schliesstechnik+Rhein+Neckar/@49.5031938,8.6132141,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4797c50d60f3ba85:0xce1dea5a6b6fa02c!8m2!3d49.5031938!4d8.6132141!16s%2Fg%2F1tv232tq?hl=de-de&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.trustBadge}
          >
            <Star size={16} className={styles.starIcon} />
            {GOOGLE_RATING_LABEL} bei {GOOGLE_REVIEW_COUNT} Bewertungen auf Google
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          {/* Konditionen Grid */}
          <div className={styles.grid}>
            <div className={styles.card}>
              <Clock className={styles.cardIcon} size={32} />
              <h3 className={styles.cardTitle}>Stundenverrechnungssatz</h3>
              <div className={styles.cardValue}>€ 69,–</div>
              <p className={styles.cardDescription}>
                Umsatzsteuerfreie Leistungen gemäß § 19 UStG – der ausgewiesene Preis ist der Endpreis.
              </p>
            </div>

            <div className={styles.card}>
              <Car className={styles.cardIcon} size={32} />
              <h3 className={styles.cardTitle}>Fahrtkostenpauschale</h3>
              <div className={styles.cardValue}>€ 21,–</div>
              <p className={styles.cardDescription}>
                Pro Einsatz, unabhängig von der Entfernung innerhalb des Einsatzgebiets (Bergstraße & Rhein-Neckar).
              </p>
            </div>

            <div className={styles.card}>
              <Timer className={styles.cardIcon} size={32} />
              <h3 className={styles.cardTitle}>Abrechnung</h3>
              <div className={styles.cardValue}>Viertelstundentakt</div>
              <p className={styles.cardDescription}>
                Die erste Arbeitsstunde wird vollständig berechnet. Darüber hinaus erfolgt die Abrechnung im Viertelstundentakt (15-Minuten-Schritte).
              </p>
            </div>

            <div className={styles.card}>
              <Wrench className={styles.cardIcon} size={32} />
              <h3 className={styles.cardTitle}>Materialkosten</h3>
              <div className={styles.cardValue}>Nach Verbrauch</div>
              <p className={styles.cardDescription}>
                Schließzylinder, Schlüssel und weiteres Material werden separat nach tatsächlichem Verbrauch berechnet.
              </p>
            </div>
          </div>

          {/* Info Boxes */}
          <div className={styles.infoBoxes}>
            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>
                <Info size={20} className={styles.infoBoxIcon} />
                Sind in den Preisen Steuern enthalten?
              </h4>
              <p className={styles.infoBoxText}>
                BENDER³ ist als Kleinunternehmer gemäß § 19 UStG von der Umsatzsteuer befreit. Alle genannten Preise sind Endpreise – es wird keine Umsatzsteuer ausgewiesen oder erhoben.
              </p>
            </div>

            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>
                <ShieldCheck size={20} className={styles.infoBoxIcon} />
                Warum lohnt sich professionelle Fachplanung?
              </h4>
              <p className={styles.infoBoxText}>
                Wer heute Erweiterungswünsche berücksichtigt, spart langfristig erhebliche Kosten. Ein günstiges Angebot ohne Fachwissen kann teuer werden, wenn die Anlage später komplett ersetzt werden muss. Professionelle Planung durch einen Spezialisten rechnet sich.
              </p>
            </div>

            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>
                <AlertCircle size={20} className={styles.infoBoxIcon} />
                Bietet BENDER³ einen Notfall-Schlüsseldienst an?
              </h4>
              <p className={styles.infoBoxText}>
                BENDER³ arbeitet ausschließlich auf Terminbasis. Bitte vereinbaren Sie vorab einen Termin per Telefon oder E-Mail.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Individuelles Angebot anfragen</h2>
            <div className={styles.ctaActions}>
              <Button asChild size="lg" className={styles.ctaButton}>
                <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
              </Button>
            </div>
            
            <div className={styles.ctaContactInfo}>
              <p>
                <Phone size={16} className={styles.inlineIcon} />{" "}
                <a href="tel:+491785405000">0178 – 540 50 00</a>
              </p>
              <p>
                <Mail size={16} className={styles.inlineIcon} />{" "}
                <a href="mailto:info@bender-schliessanlagen.de">info@bender-schliessanlagen.de</a>
              </p>
              <p className={styles.serviceHours}>
                Servicezeiten: Mo–Fr 08:00–18:00 Uhr (Mi & Fr bis 12:00 Uhr)
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}