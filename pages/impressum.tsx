import React from "react";
import { Helmet } from "react-helmet";
import styles from "./impressum.module.css";

export default function ImpressumPage() {
  return (
    <>
      <Helmet>
        <title>Impressum | BENDER³ Schliesstechnik</title>
        <meta
          name="description"
          content="Impressum der BENDER³ Schliesstechnik – Sascha Bender, Heddesheim. Angaben gemäß § 5 TMG."
        />
        <meta property="og:title" content="Impressum | BENDER³ Schliesstechnik" />
        <meta property="og:description" content="Impressum der BENDER³ Schliesstechnik – Sascha Bender, Heddesheim. Angaben gemäß § 5 TMG." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/impressum" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/impressum" />
      </Helmet>

      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Impressum</h1>

        <div className={styles.content}>
          <section>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>
              Sascha Bender
              <br />
              BENDER³ Schliesstechnik
              <br />
              Kirschblütenstr. 47
              <br />
              68542 Heddesheim
            </p>
          </section>

          <section>
            <h2>Kontakt:</h2>
            <p>
              Telefon: 0178 – 540 50 00
              <br />
              E-Mail: <a href="mailto:info@bender-schliessanlagen.de">info@bender-schliessanlagen.de</a>
            </p>
          </section>

          <section>
            <h2>Umsatzsteuer-ID:</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE289843341
            </p>
          </section>

          <section>
            <h2>Steuernummer:</h2>
            <p>47105/30218</p>
          </section>

          <section>
            <h2>Kleinunternehmerregelung:</h2>
            <p>
              Im Sinne der Kleinunternehmerregelung nach § 19 UStG wird keine
              Umsatzsteuer berechnet.
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte:</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2>Haftung für Links:</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2>Urheberrecht:</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}