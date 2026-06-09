import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Key,
  ClipboardList,
  Wrench,
  RefreshCw,
  MapPin,
  Star,
} from "lucide-react";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { ProcessSection } from "../components/ProcessSection";
import { CTABanner } from "../components/CTABanner";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./_index.module.css";

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
];

const TRUST_ITEMS = [
  {
    icon: <ClipboardList size={36} />,
    title: "Präzise Planung",
    desc: "Jede Anlage beginnt mit einem maßgeschneiderten Schließplan.",
  },
  {
    icon: <Wrench size={36} />,
    title: "Sauberer Einbau",
    desc: "Fachgerechte Montage durch den Inhaber persönlich.",
  },
  {
    icon: <RefreshCw size={36} />,
    title: "Langfristige Wartung",
    desc: "Pflege und Erweiterung Ihrer Anlage – langfristig betreut.",
  },
  {
    icon: <MapPin size={36} />,
    title: "Aus der Region",
    desc: "Bergstraße & Rhein-Neckar – persönlich und verlässlich.",
  },
];

export default function Startseite() {
  const revealHeroContent = useScrollReveal();
  const revealTrust = useScrollReveal();
  const revealCities = useScrollReveal();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BENDER³ Schliesstechnik",
    owner: {
      "@type": "Person",
      name: "Sascha Bender",
    },
    url: "https://www.bender-schliessanlagen.de",
    image: "https://assets.floot.app/c34e9639-bb05-479b-9067-ef5a91d9a1ff/2889701f-58a4-4e29-a375-37502636a9c4.jpeg",
    description: "BENDER³ ist Ihr regionaler Fachbetrieb für die Planung, den Einbau und die Wartung von Schließanlagen in der Region Bergstraße und Rhein-Neckar. Inhaber Sascha Bender bietet professionellen Service für GHS-, HS- und Zentralschlossanlagen.",
    telephone: "+491785405000",
    email: "info@bender-schliessanlagen.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirschblütenstr. 47",
      postalCode: "68542",
      addressLocality: "Heddesheim",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.5032,
      longitude: 8.6132
    },
    openingHours: ["Mo-Tu 08:00-18:00", "We 08:00-12:00", "Th 08:00-18:00", "Fr 08:00-12:00"],
    areaServed: CITIES.map(city => ({ "@type": "City", name: city })),
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "93",
      bestRating: "5"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Schließanlagen-Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schließanlagen-Planung" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schließanlagen-Einbau" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schließanlagen-Wartung" } }
      ]
    },
    serviceType: "Schließanlagen",
    sameAs: [
      "https://www.facebook.com/benderschliesstechnik",
      "https://www.instagram.com/bender_reloaded"
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          BENDER³ Schliesstechnik – Professionelle Schließanlagen | Bergstraße &
          Rhein-Neckar
        </title>
        <meta
          name="description"
          content="Schließanlagen vom Fachbetrieb: Planung, Einbau und Wartung. BENDER³ – Ihr regionaler Experte für Schließanlagen in Mannheim, Weinheim, Heidelberg und der Region Bergstraße."
        />
        <meta property="og:title" content="BENDER³ Schliesstechnik – Professionelle Schließanlagen | Bergstraße & Rhein-Neckar" />
        <meta property="og:description" content="Schließanlagen vom Fachbetrieb: Planung, Einbau und Wartung. BENDER³ – Ihr regionaler Experte für Schließanlagen in Mannheim, Weinheim, Heidelberg und der Region Bergstraße." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bender-schliessanlagen.de/" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://assets.floot.app/c34e9639-bb05-479b-9067-ef5a91d9a1ff/2889701f-58a4-4e29-a375-37502636a9c4.jpeg" />
        <link rel="canonical" href="https://www.bender-schliessanlagen.de/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className={`dark ${styles.heroSection}`}>
        <img
          src="/_cdn/static/hero-schluessel.jpg"
          alt="BENDER³ Schließanlagen"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContainer}>
          <div className={styles.heroContent} ref={revealHeroContent}>
            <h1
              className={`${styles.heroTitle} ${styles.revealItem}`}
              data-revealed="false"
            >
              Ihre Schließanlage.
              <br />
              Geplant. Eingebaut. Gewartet.
            </h1>

            <div
              className={`${styles.heroBadges} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: "100ms" }}
            >
              <Badge variant="outline">Fair</Badge>
              <Badge variant="outline">Seriös</Badge>
              <Badge variant="outline">Regional</Badge>
            </div>

            <blockquote
              className={`${styles.heroQuote} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: "200ms" }}
            >
              "Weil ich Ihnen faire Angebote unterbreite, seriöse Qualität
              abliefere, hier aus der Region komme."
              <footer>– Sascha Bender</footer>
            </blockquote>

            <div
              className={`${styles.heroActions} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: "300ms" }}
            >
              <Button asChild size="lg">
                <Link to="/kontakt">Jetzt anfragen</Link>
              </Button>
              <Button asChild variant="link" size="lg">
                <Link to="/leistungen">Leistungen entdecken &rarr;</Link>
              </Button>
            </div>

            <div
              className={`${styles.heroTrust} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="https://www.google.com/maps/place/Bender+Sascha+Schliesstechnik+Rhein+Neckar/@49.5031938,8.6132141,627m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4797c50d60f3ba85:0xce1dea5a6b6fa02c!8m2!3d49.5031938!4d8.6132141!16s%2Fg%2F1tv232tq?hl=de-de&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star size={16} className={styles.starIcon} />
                4,9 bei 93 Bewertungen auf Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className={styles.trustStrip}>
        <div className={styles.trustGrid} ref={revealTrust}>
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`${styles.trustItem} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.trustIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Einsatzgebiete Section */}
      <section className={styles.einsatzgebieteSection}>
        <div className={styles.einsatzHeader}>
          <h2>Unser Einsatzgebiet</h2>
          <p>Bergstraße & Rhein-Neckar</p>
        </div>

        <div className={styles.cityGrid} ref={revealCities}>
          {CITIES.map((city, index) => (
            <Badge
              key={city}
              variant="outline"
              className={`${styles.cityBadge} ${styles.revealItem}`}
              data-revealed="false"
              style={{ transitionDelay: `${(index % 5) * 50}ms` }}
            >
              {city}
            </Badge>
          ))}
        </div>

        <div className={styles.einsatzLink}>
          <Button asChild variant="link">
            <Link to="/einsatzgebiete">Alle Einsatzgebiete ansehen &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}