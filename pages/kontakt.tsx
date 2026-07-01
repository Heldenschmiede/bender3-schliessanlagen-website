import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, Mail, User, Clock, MapPin, CalendarClock, Info, Star } from "lucide-react";
import { Button } from "../components/Button";
import styles from "./kontakt.module.css";

export default function KontaktPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Kontakt – Termin vereinbaren | Bender³ Schließanlagen</title>
        <meta
          name="description"
          content="Kontaktieren Sie BENDER³: 0178–5405000 oder info@bender-schliessanlagen.de. Schließanlagen-Experte Sascha Bender – Termine nach Vereinbarung in der Region Bergstraße & Rhein-Neckar."
        />
        <meta property="og:title" content="Kontakt – Termin vereinbaren | Bender³ Schließanlagen" />
        <meta property="og:description" content="Kontaktieren Sie BENDER³: 0178–5405000 oder info@bender-schliessanlagen.de. Schließanlagen-Experte Sascha Bender – Termine nach Vereinbarung in der Region Bergstraße & Rhein-Neckar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/kontakt" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/kontakt" />
      </Helmet>

      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Kontakt</h1>
          <p className={styles.intro}>
            Vereinbaren Sie einen Termin für die Planung, den Einbau oder die
            Wartung Ihrer Schließanlage.
          </p>
        </header>

        <div className={styles.ownerSection}>
          <div className={styles.ownerImageWrapper}>
            <img 
              src="/sascha-bender-inhaber.jpg"
              alt="Sascha Bender – Inhaber Bender³ Schließanlagen"
              className={styles.ownerImage}
            />
          </div>
          <div className={styles.ownerInfo}>
            <h2 className={styles.ownerName}>Sascha Bender</h2>
            <p className={styles.ownerRole}>Inhaber Bender³ Schließanlagen</p>
            <p className={styles.ownerText}>
              Ihr persönlicher Ansprechpartner für Planung, Einbau und Wartung von Schließanlagen in der Region Bergstraße & Rhein-Neckar.
            </p>
            <p className={styles.ownerMotto}>„Fair – Seriös – Regional"</p>
          </div>
        </div>

        <div className={styles.warningBox}>
          <h2 className={styles.warningTitle}>
            <Info size={18} style={{ display: "inline", marginRight: "8px", verticalAlign: "text-bottom" }} />
            Kein Sofortschlüsseldienst
          </h2>
          <p className={styles.warningText}>
            Bitte beachten Sie: BENDER³ ist kein Sofortschlüsseldienst. Bitte kontaktieren Sie uns vorab telefonisch oder per E-Mail, um einen Termin zu vereinbaren.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Kontaktdaten</h2>
            <div className={styles.cardContent}>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoText}>
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+491785405000" className={styles.infoLink}>
                    0178 – 540 50 00
                  </a>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoText}>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:info@bender-schliessanlagen.de"
                    className={styles.infoLink}
                  >
                    info@bender-schliessanlagen.de
                  </a>
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <User size={20} />
                </div>
                <div className={styles.infoText}>
                  <strong>Inhaber:</strong> Sascha Bender
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Servicezeiten</h2>
            <div className={styles.cardContent}>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <Clock size={20} />
                </div>
                <div className={styles.infoText}>
                  Montag bis Freitag: 08:00 – 18:00 Uhr
                  <br />
                  Mittwoch und Freitag: 08:00 – 12:00 Uhr
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <CalendarClock size={20} />
                </div>
                <div className={styles.infoText}>
                  Außerhalb: E-Mail oder Nachricht auf Band
                </div>
              </div>
              <div className={styles.infoRow}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoText}>
                  Termine vor Ort: nach Vereinbarung
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.priceHint}>
          <h2 className={styles.priceHintTitle}>Preise & Konditionen</h2>
          <p className={styles.priceHintText}>
            Unsere transparenten Konditionen – Stundensatz, Fahrtkosten und Abrechnung – finden Sie auf unserer Preise-Seite.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/preise">Preise ansehen →</Link>
          </Button>
        </div>

        <div className={styles.reviewBox}>
          <div className={styles.reviewStars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className={styles.reviewStar} />
            ))}
          </div>
          <h2 className={styles.reviewTitle}>Zufrieden mit unserem Service?</h2>
          <p className={styles.reviewText}>
            Wir freuen uns über Ihre Bewertung auf Google – das hilft anderen Kunden, uns zu finden.
          </p>
          <Button asChild variant="primary" size="lg">
            <a href="https://g.page/r/CSygb2ta6h3OEBM/review" target="_blank" rel="noopener noreferrer">
              Bewertung abgeben
            </a>
          </Button>
        </div>

        <section className={styles.mapSection}>
          <h2 className={styles.cardTitle} style={{ borderBottom: "none", marginBottom: "1rem" }}>Anfahrt & Standort</h2>
          <div className={styles.mapContainer}>
            {!mapLoaded ? (
              <div className={styles.mapPlaceholder}>
                <MapPin size={48} className={styles.mapPlaceholderIcon} />
                <p className={styles.mapPlaceholderText}>
                  Klicken Sie, um die Karte zu laden
                </p>
                <Button onClick={() => setMapLoaded(true)} variant="primary">
                  Karte anzeigen
                </Button>
                <p className={styles.mapPlaceholderConsent}>
                  Mit dem Laden der Karte akzeptieren Sie die Datenschutzbestimmungen von Google.
                </p>
              </div>
            ) : (
              <iframe
                title="Google Maps Bender³ Schließanlagen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.3263704284583!2d8.598375076625807!3d49.50821617143431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cf4353d4ebf5%3A0xe5a3c990ad3d7e7e!2sKirschbl%C3%BCtenstra%C3%9Fe%2047%2C%2068542%20Heddesheim!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}