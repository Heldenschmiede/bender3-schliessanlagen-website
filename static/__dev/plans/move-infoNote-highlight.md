---
created: 2026-06-08T14:03:43.258Z
updated: 2026-06-08T14:03:43.258Z
---

# „Ihr Ort ist nicht dabei?" – Verschieben & Hervorheben

## Summary
Den Satz „Ihr Ort ist nicht dabei? Kontaktieren Sie uns – wir sind flexibel." aus der Service & Kontakt-Box herausnehmen und als eigenen, visuell hervorgehobenen Hinweis-Banner zwischen der Städte-Liste (citiesGrid) und der Service & Kontakt-Box (infoBox) platzieren.

## Files to Modify

### pages/einsatzgebiete.tsx
- Den `<p className={styles.infoNote}>` Absatz aus der `infoBox` entfernen.
- Stattdessen ein neues hervorgehobenes Element zwischen `citiesGrid` und `infoBox` einfügen – z. B. ein eigenes `<div>` mit einem Akzent-Hintergrund (Primary/Teal-Ton), zentriertem Text, etwas größerer Schrift und einem kleinen MapPin- oder Info-Icon.

### pages/einsatzgebiete.module.css
- Den bestehenden `.infoNote`-Style anpassen/ersetzen durch einen auffälligeren Stil:
  - Leichter Primary-Hintergrund (z. B. `color-mix(in srgb, var(--primary) 10%, var(--surface))`)
  - Leichter Primary-Rand links oder rundum
  - Etwas größere Schrift, medium font-weight
  - Abgerundete Ecken, Padding
  - Volle Breite (max-width 800px, zentriert)
  - Abstand oben nach dem Grid und unten vor der infoBox

## Files to Create
Keine.

## Approach
1. In `einsatzgebiete.tsx`: `<p className={styles.infoNote}>` aus der infoBox entfernen.
2. Neues hervorgehobenes Element zwischen `citiesGrid`-div und `infoBox`-div einfügen.
3. CSS für den neuen Hinweis-Banner anlegen (Akzent-Hintergrund, Border, größere Schrift).
4. Alten `.infoNote`-Style entfernen oder umwidmen.

## Risks & Considerations
- Minimale Änderung, kein Risiko für andere Seiten.
- Auf mobile Ansicht achten (volle Breite, kein Overflow).
