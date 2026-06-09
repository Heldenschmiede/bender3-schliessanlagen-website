---
created: 2026-06-08T10:51:37.801Z
updated: 2026-06-08T11:23:08.699Z
---

# Ratgeber-Inhalte ins FAQ überführen & neue Preise-Seite

## Summary
Die Seite `/ratgeber` wird entfernt. Ihre 5 Wissensartikel werden in die bestehende FAQ-Seite integriert (mit den ausführlicheren Texten aus dem Ratgeber anstelle der kürzeren FAQ-Antworten, wo es Dopplungen gibt). Anstelle des Ratgebers entsteht eine neue Seite `/preise` mit den transparenten Konditionen von BENDER³. Die Navigation wird entsprechend angepasst.

## Files to Modify

### `pages/faq.tsx`
- **Überschneidende FAQ-Antworten aufwerten:** Die folgenden FAQ-Einträge erhalten die detaillierteren Texte aus dem Ratgeber (mit HTML-Listen, Hervorhebungen etc. statt reinem Fließtext):
  - „Welche Arten von Schließanlagen gibt es?" → Ratgeber-Artikel 1 (GHS/HS/Z mit Details + Empfehlung)
  - „Was kostet eine Schließanlage?" → Ratgeber-Artikel 2 (Auflistung €69/h, €21 Fahrt, Viertelstundentakt, Materialkosten, Hinweis auf Fachplanung). Zusätzlich: Verweis-Link auf die neue `/preise`-Seite
  - „Was ist eine Sicherungskarte?" → Ratgeber-Artikel 3 (mit Aufzählungsliste: kein Unbefugter, Überblick, Werksprofil)
  - „Wie läuft die Planung bei BENDER³ ab?" → Ratgeber-Artikel 4 (nummerierte Liste: Bedarfsermittlung, Planung, Freigabe, Installation + Hinweis auf Erweiterungsplanung)
  - „Was ist ein Wendeschlüssel?" → Ratgeber-Artikel 5 (Vergleich Zackenschlüssel vs. Wendeschlüssel, Vorteile-Liste: komfortabler, stabiler, barrierefreier)
- **Bestehende nicht-überlappende FAQ-Einträge bleiben unverändert** (Notfall-Dienst, Termin, Regionen, normale Schlüssel, Erweiterungen)
- **Styling erweitern:** Die `faq.module.css` muss um Styles für Listen, Aufzählungen und Hervorhebungen innerhalb der Antworten ergänzt werden (analog zu den bestehenden Ratgeber-Styles: `.list`, `.orderedList`, `.listItem`, `.strongText`, `.italicText`)
- **FAQ-Reihenfolge optimieren** – logische Gruppierung:
  1. Was ist eine Schließanlage?
  2. Welche Arten gibt es? (erweitert)
  3. Wie läuft die Planung ab? (erweitert)
  4. Wie wichtig sind spätere Erweiterungen?
  5. Was kostet eine Schließanlage? (erweitert, mit Link zu /preise)
  6. Was ist eine Sicherungskarte? (erweitert)
  7. Was ist ein Wendeschlüssel? (erweitert)
  8. Macht BENDER³ normale Schlüssel?
  9. Ist BENDER³ ein Notfall-Schlüsseldienst?
  10. Wie kann ich einen Termin vereinbaren?
  11. In welchen Regionen ist BENDER³ tätig?

### `pages/kontakt.tsx`
- **Konditionen-Bereich ersetzen:** Die gesamte Sektion "Transparente Konditionen" (inklusive `.priceSection`, `<h2>Transparente Konditionen</h2>` und der `<ul>` Preisliste) entfernen.
- **Verweis hinzufügen:** Stattdessen einen kurzen Hinweis/Card einfügen: „Unsere Konditionen finden Sie auf der Preise-Seite" mit einem Button oder Link zu `/preise`.
- **Rest unverändert:** Kontaktinformationen, Servicezeiten, Hinweis-Box („Kein Sofortschlüsseldienst") und Karte bleiben exakt wie zuvor.

### `components/SharedLayout.tsx`
- Navigation: „Ratgeber" → „Preise" ändern, Pfad `/ratgeber` → `/preise`
- Footer: Falls dort ein Ratgeber-Link existiert, ebenfalls zu „Preise" / `/preise` ändern

### System-Prompt (`static/__dev/system-prompt.md`)
- Ratgeber-Abschnitt entfernen
- Neuen Abschnitt für Preise-Seite hinzufügen
- FAQ-Abschnitt aktualisieren (Hinweis auf erweiterte Inhalte aus dem ehemaligen Ratgeber)
- Navigation aktualisieren: Ratgeber → Preise

## Files to Create

### `pages/preise` (TSX + CSS Module + pageLayout)
Neue Seite `/preise` mit den transparenten Konditionen von BENDER³.

**Aufbau der Preise-Seite:**

1. **Hero-Bereich** (dark section, konsistent mit FAQ):
   - H1: „Faire Preise – transparent & nachvollziehbar"
   - Einleitungstext: BENDER³ steht für faire, nachvollziehbare Konditionen ohne versteckte Kosten.

2. **Konditionen-Bereich** – Visuell ansprechende Aufschlüsselung, angelehnt an die Originalseite (bender-hoch3.de). Jeder Posten bekommt eine eigene Card/Zeile mit Icon:
   - **Stundenverrechnungssatz: € 69,–**
     Erklärung: Umsatzsteuerfreie Leistungen gemäß § 19 UStG – der ausgewiesene Preis ist der Endpreis.
   - **Fahrtkostenpauschale: € 21,–**
     Erklärung: Pro Einsatz, unabhängig von der Entfernung innerhalb des Einsatzgebiets (Bergstraße & Rhein-Neckar).
   - **Abrechnung**
     Erklärung: Die erste Arbeitsstunde wird vollständig berechnet. Darüber hinaus erfolgt die Abrechnung im Viertelstundentakt (15-Minuten-Schritte).
   - **Materialkosten**
     Erklärung: Schließzylinder, Schlüssel und weiteres Material werden separat nach tatsächlichem Verbrauch berechnet.

3. **Hinweis-Box „Kleinunternehmerregelung § 19 UStG":**
   - Kurzer Hinweis, dass BENDER³ als Kleinunternehmer keine Umsatzsteuer erhebt. Alle genannten Preise sind Endpreise.

4. **Hinweis-Box „Warum Fachplanung sich lohnt":**
   - Text: Wer heute Erweiterungswünsche berücksichtigt, spart langfristig erhebliche Kosten. Ein günstiges Angebot ohne Fachwissen kann teuer werden, wenn die Anlage später komplett ersetzt werden muss.

5. **Info „Kein Sofortschlüsseldienst":**
   - BENDER³ arbeitet ausschließlich auf Terminbasis. Bitte vereinbaren Sie vorab einen Termin.

6. **CTA-Bereich:**
   - „Individuelles Angebot anfragen" → Link zu /kontakt
   - Telefon: 0178 – 540 50 00
   - E-Mail: info@bender-schliessanlagen.de
   - Servicezeiten: Mo–Fr 08:00–18:00 Uhr (Mi & Fr bis 12:00 Uhr)

**SEO:**
- Title: „Preise & Konditionen – Schließanlagen | BENDER³"
- Meta: Transparente Preise für Schließanlagen: Stundensatz, Fahrtkosten, Materialkosten. BENDER³ – fair, seriös, regional.

## Files to Delete

### `pages/ratgeber` (TSX + CSS Module + pageLayout)
Wird komplett entfernt, da alle Inhalte in FAQ und Preise überführt wurden.

## Approach

1. **FAQ-Seite erweitern:** Detaillierte Ratgeber-Inhalte in die FAQ-Antworten integrieren. Styles für Listen/Hervorhebungen in faq.module.css ergänzen. Reihenfolge optimieren.
2. **Neue Preise-Seite erstellen:** `pages/preise` mit Hero, Konditionen-Karten und CTA. PageLayout mit SharedLayout.
3. **Navigation anpassen:** In SharedLayout „Ratgeber" → „Preise" umbenennen und Pfad ändern.
4. **Ratgeber löschen:** `pages/ratgeber` komplett entfernen.
5. **System-Prompt aktualisieren:** Neue Seitenstruktur dokumentieren.

## Risks & Considerations

- **SEO / Broken Links:** Die URL `/ratgeber` wird ungültig. Wer die alte URL hat, landet auf der 404-Seite. Da die Seite noch nicht live ist, ist das kein Problem. Falls doch: ein Redirect wäre möglich.
- **Inhaltsverlust:** Alle Ratgeber-Inhalte werden in FAQ oder Preise überführt – es geht nichts verloren. Die FAQ-Antworten werden sogar besser (detaillierter).
- **FAQ-Länge:** Mit den erweiterten Antworten wird die FAQ-Seite etwas länger, aber da es ein Accordion ist, bleibt die UX gut – der Nutzer sieht nur die Fragen und klappt bei Bedarf auf.
- **Konsistenz:** Die Preise-Seite und die FAQ-Antwort zu Kosten sollten identische Zahlen enthalten. Bei der FAQ-Kosten-Antwort wird auf /preise verlinkt, um Dopplungen minimal zu halten.
