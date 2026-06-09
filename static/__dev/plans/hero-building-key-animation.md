---
created: 2026-06-08T10:46:34.704Z
updated: 2026-06-08T10:46:34.704Z
---

# Hero-Section: „Ein Schlüssel sichert das Gebäude"

## Summary
Ersetze die aktuelle Schließplan-Matrix-Animation in der Hero-Section der Startseite durch eine neue, visuell eindrucksvolle SVG-Animation, die Vorschlag 2 (Gebäude wird gesichert) und Vorschlag 4 (Ein Schlüssel – alle Türen / Netzwerk) kombiniert.

**Konzept:** Ein stilisierter Gebäudequerschnitt (SVG) mit sichtbaren Räumen/Türen baut sich auf. Ein zentraler Schlüssel erscheint, von dem animierte Verbindungslinien zu den einzelnen Türen laufen. Jede Tür wird nacheinander „gesichert" (Farbwechsel + Schloss-Icon). Am Ende: Zähler „6 Türen gesichert" und Floating-Badge.

## Files to Modify

### `pages/_index.tsx`
- **Entferne** die gesamte Schließplan-Grid-Logik im `heroRight`-Bereich (DOORS, KEYS_DATA Konstanten, das Grid-JSX mit cornerCell, doorHeader, keyLabel, schliessplanCell etc.)
- **Ersetze** durch die neue `HeroBuildingAnimation`-Komponente
- Der linke Bereich (heroLeft) mit H1, Badges, Quote, CTAs, Google-Bewertungen bleibt **unverändert**
- Floating-Badge „12 Türen · 1 Schlüssel" bleibt erhalten, wird aber in die neue Komponente integriert oder darunter platziert

### `pages/_index.module.css`
- **Entferne** alle Schließplan-spezifischen Klassen: `.schliessplanWrapper`, `.schliessplanLabel`, `.schliessplanGrid`, `.doorHeader`, `.keyLabel`, `.cornerCell`, `.schliessplanCell`, `.cellActive`, `.cellInactive`, `@keyframes cellReveal`
- **Behalte** alle anderen Hero-Styles (heroSection, heroContainer, heroLeft, heroTitle, heroBadges, heroQuote, heroActions, heroTrust, heroRight, floatingBadge etc.)

## Files to Create

### `components/HeroBuildingAnimation` (TSX + CSS Module)
Neue eigenständige Komponente für die animierte Gebäude-Illustration.

**Visueller Aufbau (reines SVG + CSS-Animationen):**

1. **Gebäude-Querschnitt (SVG):** Stilisierter, minimalistischer Gebäudeschnitt von vorne/seitlich. 5–6 Räume sichtbar über 2–3 Etagen:
   - EG: Haustür, Keller
   - OG: Büro 1, Büro 2 
   - DG: Büro 3, Dachboden
   - Jeder Raum hat eine stilisierte Tür (Rechteck mit Schloss-Symbol)
   - Farben: Gebäude in `--surface`/`--border` Tönen, dunkler Hintergrund

2. **Zentraler Schlüssel:** Oben mittig oder seitlich ein stilisiertes Schlüssel-SVG-Icon, das als Ausgangspunkt des Netzwerks dient.

3. **Verbindungslinien (Netzwerk-Pfade):** Animierte SVG-Linien (`stroke-dasharray` + `stroke-dashoffset` Animation) die sich vom Schlüssel zu jeder Tür zeichnen. Gestaffelt, Tür für Tür.

4. **Sicherungs-Animation:** Wenn eine Linie ihre Tür erreicht:
   - Schloss-Icon an der Tür wechselt Farbe (grau → `--primary`)
   - Subtiler Pulse-Effekt / Glow am Schloss
   - Kleine Check-Markierung erscheint

5. **Abschluss:** Nachdem alle Türen gesichert sind, erscheint ein animierter Text/Badge: „6 Türen gesichert ✓"

**Technische Details:**
- Reine SVG-Elemente + CSS-Animationen (kein JavaScript für die Animation, kein Lottie)
- `stroke-dasharray` / `stroke-dashoffset` Technik für Linien-Zeichnung
- CSS `@keyframes` mit gestaffelten `animation-delay` Werten
- `animation-fill-mode: forwards` damit der Endzustand bestehen bleibt
- SVG viewBox für responsive Skalierung
- Animationen starten beim Scroll-Reveal (via CSS-Klasse die per `data-revealed` gesetzt wird)
- Farbpalette: `--primary` (Slate Teal) für gesicherte Elemente, `--border`/`--muted` für ungesicherte, `--surface` für Gebäudestruktur

**Responsive:**
- Desktop: Volle Größe im rechten Hero-Bereich
- Mobil: Etwas kleiner, aber weiterhin sichtbar (nicht ausgeblendet)

## Approach

1. **Erstelle `components/HeroBuildingAnimation`:**
   - SVG-Gebäudequerschnitt mit Räumen und Türen
   - Schlüssel-Icon als Netzwerk-Zentrum
   - Animierte Verbindungslinien (CSS stroke-dasharray Technik)
   - Gestaffelte Sicherungs-Animationen an jeder Tür
   - „X Türen gesichert" Abschluss-Element
   - Responsive Skalierung via SVG viewBox
   - Animation-Trigger über `data-revealed` Attribut (kompatibel mit `useScrollReveal`)

2. **Aktualisiere `pages/_index.tsx`:**
   - Entferne DOORS und KEYS_DATA Konstanten
   - Entferne Schließplan-Grid JSX
   - Importiere und verwende `HeroBuildingAnimation`
   - Floating-Badge bleibt

3. **Bereinige `pages/_index.module.css`:**
   - Entferne alle Schließplan-Grid-Klassen
   - Behalte Hero-Layout und allgemeine Styles

## Risks & Considerations

- **SVG-Komplexität:** Die Animation muss visuell überzeugend sein ohne zu komplex zu werden. Klare, geometrische Formen bevorzugen.
- **Performance:** Reine CSS-Animationen sind performant. Keine JS-gesteuerten Animationen nötig.
- **Responsive:** SVG mit viewBox skaliert natürlich. Auf sehr kleinen Screens (< 400px) eventuell Details reduzieren.
- **Barrierefreiheit:** `prefers-reduced-motion` respektieren – bei aktivierter Einstellung alle Elemente sofort sichtbar ohne Animation.
- **Dark-Section:** Die Hero-Section nutzt die `.dark` Klasse. Alle Farben müssen die Dark-Mode CSS-Variablen verwenden.
- **Animation-Timing:** Die gestaffelte Animation sollte insgesamt max. 3–4 Sekunden dauern, damit der Nutzer nicht zu lange warten muss.
- **Floating-Badge:** Das bestehende „12 Türen · 1 Schlüssel" Badge sollte zum neuen Konzept passen – ggf. Text anpassen zu „1 Schlüssel · Alle Zugänge" o.ä.
