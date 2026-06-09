import React from "react";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./CTABanner.module.css";

export const CTABanner = () => {
  const reveal = useScrollReveal();

  return (
    <section className={`dark ${styles.section}`}>
      <div className={styles.container} ref={reveal}>
        <h2
          className={`${styles.title} ${styles.revealItem}`}
          data-revealed="false"
          style={{ transitionDelay: "0ms" }}
        >
          Jetzt Termin vereinbaren
        </h2>

        <a
          href="tel:+491785405000"
          className={`${styles.phone} ${styles.revealItem}`}
          data-revealed="false"
          style={{ transitionDelay: "150ms" }}
        >
          0178 – 540 50 00
        </a>

        <a
          href="mailto:info@bender-schliessanlagen.de"
          className={`${styles.email} ${styles.revealItem}`}
          data-revealed="false"
          style={{ transitionDelay: "300ms" }}
        >
          info@bender-schliessanlagen.de
        </a>

        <div
          className={`${styles.hours} ${styles.revealItem}`}
          data-revealed="false"
          style={{ transitionDelay: "450ms" }}
        >
          <p>Servicezeiten: Mo–Fr 08:00–18:00 Uhr</p>
          <p className={styles.muted}>(Mi & Fr bis 12:00 Uhr)</p>
        </div>
      </div>
    </section>
  );
};