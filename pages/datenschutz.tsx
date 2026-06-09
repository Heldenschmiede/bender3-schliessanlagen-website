import React from "react";
import { Helmet } from "react-helmet";
import styles from "./datenschutz.module.css";

export default function DatenschutzPage() {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | BENDER³ Schliesstechnik</title>
        <meta
          name="description"
          content="Datenschutzerklärung der BENDER³ Schliesstechnik gemäß DSGVO."
        />
        <meta property="og:title" content="Datenschutzerklärung | BENDER³ Schliesstechnik" />
        <meta property="og:description" content="Datenschutzerklärung der BENDER³ Schliesstechnik gemäß DSGVO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/datenschutz" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/datenschutz" />
      </Helmet>

      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Datenschutzerklärung</h1>

        <div className={styles.content}>
          <section>
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website:
              <br />
              Sascha Bender
              <br />
              BENDER³ Schliesstechnik
              <br />
              Kirschblütenstr. 47
              <br />
              68542 Heddesheim
              <br />
              Telefon: 0178 – 540 50 00
              <br />
              E-Mail: <a href="mailto:info@bender-schliessanlagen.de">info@bender-schliessanlagen.de</a>
            </p>
          </section>

          <section>
            <h2>2. Hosting und Server-Logfiles</h2>
            <p>
              Unser Hoster erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur GMT, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche, Sprache und Version der Browsersoftware. Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2>3. Cookies</h2>
            <p>Diese Website verwendet keine Cookies.</p>
          </section>

          <section>
            <h2>4. Webanalyse mit Plausible Analytics</h2>
            <p>
              Wir nutzen Plausible Analytics, einen datenschutzfreundlichen Webanalysedienst. Plausible erfasst keine personenbezogenen Daten, setzt keine Cookies und ermöglicht kein Cross-Site- oder Cross-Device-Tracking. Es werden lediglich anonymisierte, aggregierte Nutzungsstatistiken erfasst. Weitere Informationen: <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer">plausible.io/data-policy</a>.
            </p>
          </section>

          <section>
            <h2>5. Google Maps</h2>
            <p>
              Diese Website nutzt Google Maps zur Darstellung einer Karte auf der Kontaktseite. Die Karte wird erst nach ausdrücklicher Einwilligung (Klick auf "Karte anzeigen") geladen. Erst dann werden Daten an Google LLC übermittelt. Es gelten die Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </p>
          </section>

          <section>
            <h2>6. Externe Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites. Beim Anklicken dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf die Einhaltung der Datenschutzbestimmungen durch externe Anbieter.
            </p>
          </section>

          <section>
            <h2>7. Ihre Rechte (Art. 15–21 DSGVO)</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2>8. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist:
              <br />
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg
              <br />
              Lautenschlagerstraße 20
              <br />
              70173 Stuttgart
            </p>
          </section>
        </div>
      </div>
    </>
  );
}