import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import styles from "./$.module.css";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden | BENDER³</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Seite nicht gefunden | BENDER³" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
      </Helmet>

      <div className={styles.pageContainer}>
        <div className={styles.logo}>
          BENDER<sup>³</sup>
        </div>
        
        <h1 className={styles.title}>Diese Seite gibt es leider nicht.</h1>
        
        <p className={styles.text}>
          Die gewünschte Seite konnte nicht gefunden werden. Vielleicht hilft Ihnen einer dieser Links weiter:
        </p>

        <div className={styles.navLinks}>
          <Button asChild variant="outline">
            <Link to="/">Startseite</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/leistungen">Leistungen</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/faq">FAQ</Link>
          </Button>
          <Button asChild variant="primary">
            <Link to="/kontakt">Kontakt</Link>
          </Button>
        </div>

        <div className={styles.phoneBox}>
          <div className={styles.phoneText}>Oder rufen Sie uns an:</div>
          <a href="tel:+491785405000" className={styles.phoneLink}>
            0178 – 540 50 00
          </a>
        </div>
      </div>
    </>
  );
}