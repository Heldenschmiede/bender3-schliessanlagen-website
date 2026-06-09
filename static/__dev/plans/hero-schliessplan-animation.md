---
created: 2026-06-08T10:26:25.848Z
updated: 2026-06-08T10:26:25.848Z
---

# Hero-Grafik: Animierter Schließplan

## Summary
Die abstrakte Gebäudefassade im Hero-Bereich der Startseite wird durch einen **animierten Schließplan** ersetzt. Ein Schließplan ist das Herzstück der Arbeit von BENDER³ – eine Matrix, die zeigt, welcher Schlüssel welche Tür öffnet. Diese Darstellung macht die Kernkompetenz *Planung* sofort visuell greifbar und hebt sich von generischen Schlüsseldienst-Websites ab.

## Konzept

### Die Animation
Eine stilisierte Schließplan-Matrix (Tabelle), die sich nach kurzem Delay schrittweise aufbaut:

1. **Phase 1** (0s–0.5s): Die Tabellenstruktur erscheint – Spaltenköpfe (Türen: Haustür, Keller, Büro 1, Büro 2, Büro 3, Dachboden) und Zeilenköpfe (Schlüssel: General, Gruppe A, Gruppe B, Einzel 1, Einzel 2, Einzel 3)
2. **Phase 2** (0.5s–2s): Die Zellen füllen sich nacheinander mit Häkchen (✓) oder bleiben leer (–), je nach Zugriffslogik. Animation läuft von oben links nach unten rechts mit leichtem Stagger-Delay.
3. **Phase 3** (2s+): Subtle idle-Glow auf den ✓-Zellen, um das Schema lebendig zu halten.

### Schließlogik der Matrix
- **General (GHS):** Öffnet ALLE Türen → alle ✓
- **Gruppe A:** Öffnet Haustür, Keller, Büro 1, Büro 2 → ✓ bei diesen
- **Gruppe B:** Öffnet Haustür, Keller, Büro 3, Dachboden → ✓ bei diesen
- **Einzel 1:** Öffnet Haustür, Büro 1 → nur diese ✓
- **Einzel 2:** Öffnet Haustür, Büro 2 → nur diese ✓
- **Einzel 3:** Öffnet Haustür, Büro 3 → nur diese ✓

### Visuelles Design
- Dunkler Hintergrund (passt zur dark-Section des Heros)
- Tabellenraster mit feinen Borders in border-Farbe
- Spaltenköpfe mit kleinen Lucide-Icons (Door, Key)
- ✓-Zellen in Primary/Teal-Farbe mit leichtem Glow
- –-Zellen grau/gedimmt
- „12 Türen · 1 Schlüssel"-Badge bleibt als Floating-Element
- Responsiv: Auf Mobile wird die Grafik unter dem Text angezeigt (etwas kleiner, scrollbar oder vereinfacht)

## Files to Modify

### `pages/_index.tsx`
- Die gesamte `heroRight`-Section (buildingFacade, window, mainDoor, overlayIcons) durch eine neue Schließplan-Matrix-Komponente ersetzen
- Die Matrix-Daten (Schlüssel × Türen) als konstantes Array definieren
- CSS-basierte staggered Animation mit `animationDelay` per Zelle
- `useEffect` oder CSS `animation-delay` für den schrittweisen Aufbau
- Floating-Badge „12 Türen · 1 Schlüssel" beibehalten

### `pages/_index.module.css`
- Alle `.buildingFacade`, `.window`, `.mainDoor`, `.pulseDot`, `.overlayIcon`, `.iconLock`, `.iconKey`, `.iconDoor` Styles entfernen
- Neue Styles für die Schließplan-Matrix:
  - `.schliessplanGrid` – CSS Grid für die Tabelle
  - `.schliessplanHeader` – Spalten-/Zeilenköpfe
  - `.schliessplanCell` – Einzelne Zelle mit Einblend-Animation
  - `.cellActive` – ✓-Zellen mit Primary-Farbe und Glow
  - `.cellInactive` – Leere Zellen (–)
  - `@keyframes cellReveal` – Einblend-Animation (scale + opacity)
  - `@keyframes subtleGlow` – Sanftes Pulsieren nach Aufbau

## Files to Create
Keine neuen Dateien nötig – alles in der bestehenden Startseite.

## Approach
1. Matrix-Datenstruktur definieren (Schlüssel × Türen mit Boolean-Werten)
2. CSS-Grid-Tabelle bauen mit Kopfzeile (Türen) und Kopfspalte (Schlüssel)
3. Staggered CSS-Animationen für den schrittweisen Aufbau
4. Responsive Anpassung: auf Mobile kleinere Schrift, horizontal scrollbar falls nötig
5. Floating-Badge beibehalten

## Risks & Considerations
- **Mobile Darstellung:** Eine 7×7-Matrix kann auf kleinen Bildschirmen eng werden. Lösung: Schriftgröße reduzieren und/oder horizontal scrollbar machen, oder auf Mobile eine vereinfachte 4×4-Version zeigen.
- **Performance:** Reine CSS-Animationen sind performant, kein JavaScript-Timer nötig.
- **Barrierefreiheit:** Die Matrix sollte `aria-label` haben, damit Screenreader den Inhalt verstehen.
