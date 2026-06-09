import React from "react";
import { Search, PenTool, CheckCircle, Wrench } from "lucide-react";
import { useScrollReveal } from "../helpers/useScrollReveal";
import styles from "./ProcessSection.module.css";

const STEPS = [
  {
    icon: <Search size={24} />,
    title: "Bedarf ermitteln",
    desc: "Welche Art von Schließanlage? Anzahl der Zylinder und Schließfunktionen – gemeinsam erfassen wir alle Details.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Schließplan erstellen",
    desc: "Auf Basis Ihrer Anforderungen erstelle ich einen Schließplan inkl. Erweiterungsoptionen und Angebot.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Freigabe & Produktion",
    desc: "Nach Ihrer Freigabe wird die Schließanlage produziert und schnellstmöglich geliefert.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Professioneller Einbau",
    desc: "Fachgerechter und professioneller Einbau Ihrer neuen Schließanlage.",
  },
];

export const ProcessSection = () => {
  const reveal = useScrollReveal();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Alles aus einer Hand</h2>
          <p className={styles.subtitle}>
            Von der Bedarfsermittlung bis zum professionellen Einbau
          </p>
        </div>

        <div className={styles.stepper} ref={reveal}>
          {STEPS.map((step, index) => (
            <div
              key={index}
              className={styles.step}
              data-revealed="false"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.iconWrapper}>
                {step.icon}
                <div className={styles.stepNumber}>{index + 1}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};