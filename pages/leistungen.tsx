import React from "react";
import { Helmet } from "react-helmet";
import {
  Network,
  KeyRound,
  Building,
  Key,
  ShieldCheck,
  X,
  CreditCard,
  CheckCircle2,
  DoorOpen,
  Star,
} from "lucide-react";
import { Badge } from "../components/Badge";
import { ProcessSection } from "../components/ProcessSection";
import { CTABanner } from "../components/CTABanner";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./leistungen.module.css";

export default function Leistungen() {
  const revealIntro = useScrollReveal();
  const revealTypes = useScrollReveal({ threshold: 0.1 });
  const revealSK = useScrollReveal();
  const revealWS = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>
          Schließanlagen – Planung, Einbau & Wartung | BENDER³ Schliesstechnik
        </title>
        <meta
          name="description"
          content="Professionelle Schließanlagen komplett aus einer Hand. GHS-, HS- und Zentralschlossanlagen für Unternehmen, Verwaltungen und Wohnhäuser. BENDER³ Bergstraße & Rhein-Neckar."
        />
        <meta property="og:title" content="Schließanlagen – Planung, Einbau & Wartung | BENDER³ Schliesstechnik" />
        <meta property="og:description" content="Professionelle Schließanlagen komplett aus einer Hand. GHS-, HS- und Zentralschlossanlagen für Unternehmen, Verwaltungen und Wohnhäuser. BENDER³ Bergstraße & Rhein-Neckar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/leistungen" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/leistungen" />
      </Helmet>

      {/* Intro Banner */}
      <section className={`dark ${styles.introSection}`}>
        <div className={styles.introContainer} ref={revealIntro}>
          <h1
            className={`${styles.introTitle} ${styles.revealItem}`}
            data-revealed="false"
          >
            Professionelle Schließanlagen –<br /> komplett aus einer Hand
          </h1>
          <p
            className={`${styles.introText} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "150ms" }}
          >
            BENDER³ plant, installiert und wartet professionelle Schließanlagen – Generalhauptschlüssel-, Hauptschlüssel- und Zentralschlossanlagen – für Unternehmen, Verwaltungen und Privathaushalte in der Region Bergstraße & Rhein-Neckar.
            <br />
            <br />
            Von einer gut geplanten Schließanlage darf der Nutzer ein hohes Maß an
            Sicherheit und Struktur erwarten. Zuvor ist jedoch unerlässlich, dass
            bei der Konzeption der Schließanlage alle für das ausgeschriebene
            Objekt bestehenden Wünsche eingebracht werden. Für die Planung sollte
            immer die Unterstützung eines Spezialisten angefordert werden.
            Besonderes Augenmerk muss auf mögliche spätere Erweiterungswünsche
            gelegt werden.
          </p>
          <a
            href="https://www.google.com/maps/place/Bender+Sascha+Schliesstechnik+Rhein+Neckar/@49.5031938,8.6132141,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4797c50d60f3ba85:0xce1dea5a6b6fa02c!8m2!3d49.5031938!4d8.6132141!16s%2Fg%2F1tv232tq?hl=de-de&entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.trustBadge} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "300ms" }}
          >
            <Star size={16} className={styles.starIcon} />
            4,9 bei 93 Bewertungen auf Google
          </a>
        </div>
      </section>

      {/* Schließanlagentypen (Asymmetric list) */}
      <section className={styles.typenSection}>
        <div className={styles.typenHeader}>
          <h2>Welche Schließanlage passt zu Ihrem Objekt?</h2>
        </div>

        <div className={styles.typesList} ref={revealTypes}>
          {/* Typ 1: GHS */}
          <div
            className={`${styles.typeRow} ${styles.revealItem}`}
            data-revealed="false"
          >
            <div className={styles.typeContent}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: "color-mix(in srgb, hsl(210, 40%, 25%) 15%, transparent)",
                  color: "hsl(210, 40%, 25%)",
                }}
              >
                <Network size={32} />
              </div>
              <h3>GHS-Anlage</h3>
              <p className={styles.typeSubtitle}>Generalhauptschlüsselanlage</p>
              <p className={styles.typeDesc}>
                Die Generalhauptschlüsselanlage besteht aus mehreren Gruppen, die
                mit einem zusätzlichen Schlüssel, dem Generalschlüssel, komplett
                geschlossen werden kann. Durch den Einsatz von Einzel-, Gruppen-,
                Obergruppen- und Generalschlüssel kann eine große Anzahl an Räumen,
                Bereichen und Hauptbereichen in die Schließanlage einbezogen
                werden.
              </p>
              <Badge variant="outline" className={styles.idealBadge}>
                Ideal für: Verwaltungen · Industriebetriebe · Krankenhäuser
              </Badge>
            </div>
            <div className={styles.typeVisual}>
              <div className={styles.diagramWrapper}>
                <div className={styles.diagNode}>General</div>
                <div className={styles.diagEdge} />
                <div className={styles.diagNode}>Obergruppe</div>
                <div className={styles.diagEdge} />
                <div className={styles.diagRow}>
                  <div className={styles.diagNodeSm}>Gruppe A</div>
                  <div className={styles.diagNodeSm}>Gruppe B</div>
                </div>
                <div className={styles.diagRow} style={{ marginTop: "16px" }}>
                  <div className={styles.diagNodeSm}>Einzel 1</div>
                  <div className={styles.diagNodeSm}>Einzel 2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Typ 2: HS */}
          <div
            className={`${styles.typeRow} ${styles.typeRowReverse} ${styles.revealItem}`}
            data-revealed="false"
          >
            <div className={styles.typeContent}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: "color-mix(in srgb, hsl(210, 12%, 30%) 15%, transparent)",
                  color: "hsl(210, 12%, 30%)",
                }}
              >
                <KeyRound size={32} />
              </div>
              <h3>HS-Anlage</h3>
              <p className={styles.typeSubtitle}>Hauptschlüsselanlage</p>
              <p className={styles.typeDesc}>
                In einer Hauptschlüsselanlage schließt der Hauptschlüssel alle
                Schließzylinder. Der Hauptschlüsselberechtigte kann mit einem
                Schlüssel alle Räume betreten.
              </p>
              <Badge variant="outline" className={styles.idealBadge}>
                Ideal für: Betriebe · Bürogebäude · kleinere Teams
              </Badge>
            </div>
            <div className={styles.typeVisual}>
              <div className={styles.diagramWrapper}>
                <div className={styles.diagNodePrimary} style={{ color: "hsl(210, 12%, 30%)" }}>
                  <KeyRound size={32} />
                  <span>Hauptschlüssel</span>
                </div>
                <div className={styles.diagBranches}>
                  <div className={styles.diagBranch} />
                  <div className={styles.diagBranch} />
                  <div className={styles.diagBranch} />
                </div>
                <div className={styles.diagRow}>
                  <div className={styles.diagNodeSm}>
                    <DoorOpen size={16} /> Raum 1
                  </div>
                  <div className={styles.diagNodeSm}>
                    <DoorOpen size={16} /> Raum 2
                  </div>
                  <div className={styles.diagNodeSm}>
                    <DoorOpen size={16} /> Raum 3
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Typ 3: Z */}
          <div
            className={`${styles.typeRow} ${styles.revealItem}`}
            data-revealed="false"
          >
            <div className={styles.typeContent}>
              <div
                className={styles.iconContainer}
                style={{
                  backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)",
                  color: "var(--primary)",
                }}
              >
                <Building size={32} />
              </div>
              <h3>Z-Anlage</h3>
              <p className={styles.typeSubtitle}>Zentralschlossanlage</p>
              <p className={styles.typeDesc}>
                In einer Zentralschlossanlage schließen mehrere verschiedene
                Einzelschlüssel einen Zylinder (Zentralschloss). Beispiel: Jeder
                Mieter eines Wohnhauses kann mit seinem Wohnungsschlüssel auch die
                Haustür, Keller und Dachboden öffnen – nicht aber die
                Wohnungstüren seiner Nachbarn.
              </p>
              <Badge variant="primary" className={styles.idealBadge}>
                Jeder Mieter – nur 1 Schlüssel
              </Badge>
            </div>
            <div className={styles.typeVisual}>
              <div className={styles.diagramWrapper}>
                <div className={styles.diagRow}>
                  <div className={styles.diagNodeSm}>
                    <Key size={16} /> Mieter 1
                  </div>
                  <div className={styles.diagNodeSm}>
                    <Key size={16} /> Mieter 2
                  </div>
                  <div className={styles.diagNodeSm}>
                    <Key size={16} /> Mieter 3
                  </div>
                </div>
                <div className={styles.diagBranchesUp}>
                  <div className={styles.diagBranchUp} />
                  <div className={styles.diagBranchUp} />
                  <div className={styles.diagBranchUp} />
                </div>
                <div className={styles.diagNodePrimary}>
                  <Building size={32} />
                  <span>Zentralschloss (Haustür)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Sicherungskarte Section */}
      <section className={styles.sicherungskarteSection}>
        <div className={styles.skHeader}>
          <h2>Was ist eine Sicherungskarte und wozu brauche ich sie?</h2>
          <p>
            Bei Schließzylindern oder Schließanlagen, die mit einer
            Sicherungskarte geschützt sind, kann ein Nachschlüssel nur
            angefertigt werden, wenn die dazugehörige Karte vorgelegt wird. Die
            Sicherungskarte garantiert, dass nur berechtigte Personen einen
            Nachschlüssel bestellen können.
          </p>
        </div>

        <div className={styles.skGrid} ref={revealSK}>
          <div
            className={`${styles.skStep} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "0ms" }}
          >
            <div className={styles.skIconWrapper}>
              <KeyRound size={32} />
              <X size={16} strokeWidth={4} className={styles.skIconAlert} />
            </div>
            <h4>1. Schlüssel verloren</h4>
          </div>
          <div className={styles.skArrow}>&rarr;</div>
          <div
            className={`${styles.skStep} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "150ms" }}
          >
            <div className={styles.skIconWrapper}>
              <CreditCard size={32} />
            </div>
            <h4>2. Karte vorlegen</h4>
          </div>
          <div className={styles.skArrow}>&rarr;</div>
          <div
            className={`${styles.skStep} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "300ms" }}
          >
            <div className={styles.skIconWrapper} style={{ color: "var(--primary)", borderColor: "var(--primary)" }}>
              <ShieldCheck size={32} />
            </div>
            <h4>3. Nachschlüssel erhalten</h4>
          </div>
        </div>
      </section>

      {/* Wendeschlüssel Section */}
      <section className={styles.wendeschluesselSection}>
        <div className={styles.wsHeader}>
          <h2>Was ist ein Wendeschlüssel und welche Vorteile bietet er?</h2>
        </div>

        <div className={styles.wsCompareContainer} ref={revealWS}>
          <div
            className={`${styles.compareCard} ${styles.revealItem}`}
            data-revealed="false"
          >
            <div className={styles.compareVisualMuted}>
              <Key size={64} />
            </div>
            <h3>Zackenschlüssel</h3>
            <p>Nur eine Einführrichtung</p>
          </div>

          <div
            className={`${styles.compareCard} ${styles.revealItem}`}
            data-revealed="false"
            style={{ transitionDelay: "150ms" }}
          >
            <div className={styles.compareVisualPrimary}>
              <KeyRound size={64} />
            </div>
            <h3>Wendeschlüssel</h3>
            <p>Immer richtig – egal wie rum</p>
          </div>
        </div>

        <ul className={styles.wsBenefitsList} ref={revealWS}>
          {[
            "Komfortabler in der Handhabung",
            "Stabiler und langlebiger",
            "Ideal bei Sehbehinderung",
            "Kein oben/unten, kein links/rechts",
          ].map((benefit, i) => (
            <li
              key={i}
              className={`${styles.wsBenefitItem} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <CheckCircle2 size={24} className={styles.wsBenefitIcon} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <CTABanner />
    </>
  );
}