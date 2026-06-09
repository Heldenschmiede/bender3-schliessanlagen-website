import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordion";
import { Button } from "../components/Button";
import { Phone, Mail } from "lucide-react";
import styles from "./faq.module.css";

const FAQS = [
  {
    question: "Was ist eine Schließanlage und wofür brauche ich sie?",
    answer: (
      <p className={styles.answerText}>
        Eine Schließanlage ist ein System, bei dem mehrere Schlösser und Schlüssel so aufeinander abgestimmt sind, dass verschiedene Personen unterschiedliche Zugangsbereiche erhalten – mit nur einem Schlüssel pro Person. Sie bietet ein hohes Maß an Sicherheit und Struktur, besonders für Gebäude mit mehreren Nutzern. Typische Einsatzbereiche: Wohnhäuser, Verwaltungsgebäude, Industriebetriebe, Krankenhäuser und öffentliche Einrichtungen.
      </p>
    ),
  },
  {
    question: "Welche Arten von Schließanlagen gibt es?",
    answer: (
      <div className={styles.articleContent}>
        <p className={styles.paragraph}>
          Es gibt drei gängige Typen:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Generalhauptschlüsselanlage (GHS):</strong> für große Organisationen mit mehreren Hierarchiestufen.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Hauptschlüsselanlage (HS):</strong> bei der ein Hauptschlüssel alle Zylinder öffnet.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Zentralschlossanlage (Z):</strong> ideal für Mehrfamilienhäuser – jeder Mieter öffnet mit seinem Schlüssel Haustür und eigene Wohnung.
          </li>
        </ul>
        <p className={styles.paragraph}>
          <em className={styles.italicText}>Empfehlung:</em> Lassen Sie sich immer von einem Fachbetrieb bei der Wahl des passenden Typs beraten.
        </p>
      </div>
    ),
  },
  {
    question: "Wie läuft die Planung bei BENDER³ ab?",
    answer: (
      <div className={styles.articleContent}>
        <p className={styles.paragraph}>
          In vier Schritten:
        </p>
        <ol className={styles.orderedList}>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Bedarfsermittlung:</strong> Art der Anlage, Anzahl Zylinder, Schließfunktionen.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Planung:</strong> Schließplan inkl. Erweiterungsoptionen und Angebot.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Freigabe:</strong> Produktion nach Auftragserteilung.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Installation:</strong> fachgerechter Einbau durch Sascha Bender persönlich.
          </li>
        </ol>
        <p className={styles.paragraph}>
          <em className={styles.italicText}>Wichtig:</em> Wir berücksichtigen bei jeder Planung explizit mögliche zukünftige Erweiterungswünsche.
        </p>
      </div>
    ),
  },
  {
    question: "Wie wichtig ist es, spätere Erweiterungen einzuplanen?",
    answer: (
      <p className={styles.answerText}>
        Sehr wichtig. Wer heute Erweiterungswünsche berücksichtigt, spart langfristig erhebliche Kosten. Eine nachträgliche Anpassung kann teuer werden, wenn die Anlage nicht dafür ausgelegt ist. BENDER³ berücksichtigt bei jeder Planung explizit mögliche zukünftige Anforderungen.
      </p>
    ),
  },
  {
    question: "Was kostet eine Schließanlage?",
    answer: (
      <div className={styles.articleContent}>
        <p className={styles.paragraph}>
          Die Kosten variieren je nach Objektgröße und Anlagentyp. Unsere grundlegenden Konditionen:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Stundenverrechnungssatz: € 69,– (umsatzsteuerfreie Leistungen gemäß § 19 UStG)</li>
          <li className={styles.listItem}>Fahrtkostenpauschale: € 21,–</li>
          <li className={styles.listItem}>Die 1. Arbeitsstunde wird voll berechnet, danach im Viertelstundentakt</li>
          <li className={styles.listItem}>zzgl. Materialkosten</li>
        </ul>
        <p className={styles.paragraph}>
          Eine professionelle Fachplanung schützt Sie vor teuren Fehlern bei späteren Erweiterungen.
        </p>
        <Link to="/preise" className={styles.preiseLink}>
          Alle Konditionen im Detail →
        </Link>
      </div>
    ),
  },
  {
    question: "Was ist eine Sicherungskarte?",
    answer: (
      <div className={styles.articleContent}>
        <p className={styles.paragraph}>
          Die Sicherungskarte ist die Legitimation zum Bestellen eines Nachschlüssels.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>So wird verhindert, dass Unbefugte Schlüssel nachmachen.</li>
          <li className={styles.listItem}>Außerdem behalten Sie den Überblick über alle im Umlauf befindlichen Schlüssel.</li>
          <li className={styles.listItem}>Moderne Systeme mit Werksprofil bieten einen zusätzlichen Kopierschutz.</li>
        </ul>
        <p className={styles.paragraph}>
          BENDER³ arbeitet ausschließlich mit Sicherheitsschlüsseln, deren Profil durch eine Sicherungskarte geschützt ist.
        </p>
      </div>
    ),
  },
  {
    question: "Was ist ein Wendeschlüssel?",
    answer: (
      <div className={styles.articleContent}>
        <p className={styles.paragraph}>
          Ein Wendeschlüssel (Bohrmuldenschlüssel) hat keine Kerben, sondern Bohrmulden. Er kann in jeder Richtung in den Zylinder eingeführt werden – kein oben/unten, kein links/rechts.
        </p>
        <strong className={styles.strongText}>Vorteile:</strong>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Komfortabler:</strong> Deutlich leichtere Handhabung im Alltag.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Stabiler:</strong> Aufgrund der Bauform robuster als klassische Zackenschlüssel.
          </li>
          <li className={styles.listItem}>
            <strong className={styles.strongText}>Barrierefreier:</strong> Besonders für Personen mit Sehbehinderung geeignet.
          </li>
        </ul>
        <p className={styles.paragraph}>
          Wendeschlüsselsysteme gehören heute zum Standard bei modernen, hochwertigen Schließanlagen.
        </p>
      </div>
    ),
  },
  {
    question: "Macht BENDER³ auch normale Schlüssel nach?",
    answer: (
      <p className={styles.answerText}>
        Nein. BENDER³ arbeitet ausschließlich mit Sicherheitsschlüsseln, deren Profil durch eine Sicherungskarte geschützt ist. Diese müssen beim Hersteller bestellt werden. Standard-Schlüssel werden nicht nachgemacht.
      </p>
    ),
  },
  {
    question: "Ist BENDER³ ein Notfall-Schlüsseldienst?",
    answer: (
      <p className={styles.answerText}>
        Nein. BENDER³ ist kein Sofortschlüsseldienst. Wir arbeiten ausschließlich auf Terminbasis. Bitte kontaktieren Sie uns vorab telefonisch oder per E-Mail, um einen Termin zu vereinbaren. Das spart Ihnen Zeit und Wege.
      </p>
    ),
  },
  {
    question: "Wie kann ich einen Termin vereinbaren?",
    answer: (
      <p className={styles.answerText}>
        Telefonisch unter 0178 – 540 50 00 (Mo–Fr 08–18 Uhr, Mi & Fr 08–12 Uhr) oder per E-Mail an info@bender-schliessanlagen.de. Außerhalb der Servicezeiten sprechen Sie bitte auf Band oder schreiben eine E-Mail.
      </p>
    ),
  },
  {
    question: "In welchen Regionen ist BENDER³ tätig?",
    answer: (
      <p className={styles.answerText}>
        BENDER³ ist in der Region Bergstraße und Rhein-Neckar tätig, u. a. in: Bensheim, Birkenau, Dossenheim, Edingen-Neckarshausen, Frankenthal, Heddesheim, Hemsbach, Heppenheim, Hirschberg an der Bergstraße, Ilvesheim, Ladenburg, Lampertheim, Laudenbach, Lorsch, Ludwigshafen, Mannheim, Mörlenbach, Oppau, Schriesheim, Viernheim und Weinheim.
      </p>
    ),
  },
];

const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist eine Schließanlage und wofür brauche ich sie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Schließanlage ist ein System, bei dem mehrere Schlösser und Schlüssel so aufeinander abgestimmt sind, dass verschiedene Personen unterschiedliche Zugangsbereiche erhalten – mit nur einem Schlüssel pro Person. Sie bietet ein hohes Maß an Sicherheit und Struktur, besonders für Gebäude mit mehreren Nutzern. Typische Einsatzbereiche: Wohnhäuser, Verwaltungsgebäude, Industriebetriebe, Krankenhäuser und öffentliche Einrichtungen."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Arten von Schließanlagen gibt es?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es gibt drei gängige Typen: Generalhauptschlüsselanlage (GHS): für große Organisationen mit mehreren Hierarchiestufen. Hauptschlüsselanlage (HS): bei der ein Hauptschlüssel alle Zylinder öffnet. Zentralschlossanlage (Z): ideal für Mehrfamilienhäuser – jeder Mieter öffnet mit seinem Schlüssel Haustür und eigene Wohnung. Empfehlung: Lassen Sie sich immer von einem Fachbetrieb bei der Wahl des passenden Typs beraten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie läuft die Planung bei BENDER³ ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In vier Schritten: Bedarfsermittlung: Art der Anlage, Anzahl Zylinder, Schließfunktionen. Planung: Schließplan inkl. Erweiterungsoptionen und Angebot. Freigabe: Produktion nach Auftragserteilung. Installation: fachgerechter Einbau durch Sascha Bender persönlich. Wichtig: Wir berücksichtigen bei jeder Planung explizit mögliche zukünftige Erweiterungswünsche."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wichtig ist es, spätere Erweiterungen einzuplanen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sehr wichtig. Wer heute Erweiterungswünsche berücksichtigt, spart langfristig erhebliche Kosten. Eine nachträgliche Anpassung kann teuer werden, wenn die Anlage nicht dafür ausgelegt ist. BENDER³ berücksichtigt bei jeder Planung explizit mögliche zukünftige Anforderungen."
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet eine Schließanlage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kosten variieren je nach Objektgröße und Anlagentyp. Unsere grundlegenden Konditionen: Stundenverrechnungssatz: € 69,– (umsatzsteuerfreie Leistungen gemäß § 19 UStG). Fahrtkostenpauschale: € 21,–. Die 1. Arbeitsstunde wird voll berechnet, danach im Viertelstundentakt. zzgl. Materialkosten. Eine professionelle Fachplanung schützt Sie vor teuren Fehlern bei späteren Erweiterungen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist eine Sicherungskarte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Sicherungskarte ist die Legitimation zum Bestellen eines Nachschlüssels. So wird verhindert, dass Unbefugte Schlüssel nachmachen. Außerdem behalten Sie den Überblick über alle im Umlauf befindlichen Schlüssel. Moderne Systeme mit Werksprofil bieten einen zusätzlichen Kopierschutz. BENDER³ arbeitet ausschließlich mit Sicherheitsschlüsseln, deren Profil durch eine Sicherungskarte geschützt ist."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist ein Wendeschlüssel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Wendeschlüssel (Bohrmuldenschlüssel) hat keine Kerben, sondern Bohrmulden. Er kann in jeder Richtung in den Zylinder eingeführt werden – kein oben/unten, kein links/rechts. Vorteile: Komfortabler: Deutlich leichtere Handhabung im Alltag. Stabiler: Aufgrund der Bauform robuster als klassische Zackenschlüssel. Barrierefreier: Besonders für Personen mit Sehbehinderung geeignet. Wendeschlüsselsysteme gehören heute zum Standard bei modernen, hochwertigen Schließanlagen."
      }
    },
    {
      "@type": "Question",
      "name": "Macht BENDER³ auch normale Schlüssel nach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. BENDER³ arbeitet ausschließlich mit Sicherheitsschlüsseln, deren Profil durch eine Sicherungskarte geschützt ist. Diese müssen beim Hersteller bestellt werden. Standard-Schlüssel werden nicht nachgemacht."
      }
    },
    {
      "@type": "Question",
      "name": "Ist BENDER³ ein Notfall-Schlüsseldienst?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. BENDER³ ist kein Sofortschlüsseldienst. Wir arbeiten ausschließlich auf Terminbasis. Bitte kontaktieren Sie uns vorab telefonisch oder per E-Mail, um einen Termin zu vereinbaren. Das spart Ihnen Zeit und Wege."
      }
    },
    {
      "@type": "Question",
      "name": "Wie kann ich einen Termin vereinbaren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Telefonisch unter 0178 – 540 50 00 (Mo–Fr 08–18 Uhr, Mi & Fr 08–12 Uhr) oder per E-Mail an info@bender-schliessanlagen.de. Außerhalb der Servicezeiten sprechen Sie bitte auf Band oder schreiben eine E-Mail."
      }
    },
    {
      "@type": "Question",
      "name": "In welchen Regionen ist BENDER³ tätig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BENDER³ ist in der Region Bergstraße und Rhein-Neckar tätig, u. a. in: Bensheim, Birkenau, Dossenheim, Edingen-Neckarshausen, Frankenthal, Heddesheim, Hemsbach, Heppenheim, Hirschberg an der Bergstraße, Ilvesheim, Ladenburg, Lampertheim, Laudenbach, Lorsch, Ludwigshafen, Mannheim, Mörlenbach, Oppau, Schriesheim, Viernheim und Weinheim."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>FAQ – Häufige Fragen zu Schließanlagen | BENDER³</title>
        <meta
          name="description"
          content="Antworten auf häufige Fragen: Was ist eine Schließanlage? Welche Arten gibt es? Was kostet sie? BENDER³ – Ihr Experte für Schließanlagen in der Region Bergstraße."
        />
        <meta property="og:title" content="FAQ – Häufige Fragen zu Schließanlagen | BENDER³" />
        <meta property="og:description" content="Antworten auf häufige Fragen: Was ist eine Schließanlage? Welche Arten gibt es? Was kostet sie? BENDER³ – Ihr Experte für Schließanlagen in der Region Bergstraße." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/faq" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/faq" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA_DATA)}</script>
      </Helmet>

      <section className={`dark ${styles.hero}`}>
        <div className={styles.containerNarrow}>
          <h1 className={styles.heroTitle}>Häufig gestellte Fragen</h1>
          <p className={styles.heroIntro}>
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um
            Schließanlagen, unseren Service und die Zusammenarbeit mit BENDER³.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.containerNarrow}>
          <Accordion type="single" collapsible className={styles.accordion}>
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className={styles.faqCta}>
            <h3 className={styles.faqCtaTitle}>Ihre Frage ist nicht dabei?</h3>
            <p className={styles.faqCtaText}>
              Wir helfen Ihnen gerne persönlich weiter.
            </p>
            <div className={styles.faqCtaActions}>
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
                  <Mail size={18} /> info@bender-schliessanlagen.de
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}