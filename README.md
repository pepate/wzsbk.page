# WZ Schädlingsbekämpfung — Karlsruhe

> Ein editorial-orientierter Multi-Page-Prototyp für **WZ Schädlingsbekämpfung**, einen lokalen, IHK-geprüften Familien­betrieb in Karlsruhe. Diskret. Gründlich. Dauerhaft.

**Live:** https://pepate.github.io/wzsbk.page/

---

## Über das Projekt

Dieses Repo ist das Redesign der bestehenden Seite [wz-sbk.de](https://wz-sbk.de/) — entworfen in Claude Design (claude.ai/design), exportiert als HTML/CSS/JS-Bundle und hier als statische Site umgesetzt. Ziel war ein klassisch-seriöser, editorialer Auftritt, der Vertrauen vermittelt und gleichzeitig modern wirkt.

### Design-Richtung

| | |
|---|---|
| **Ton** | Seriös & vertrauenswürdig, klassisch professionell |
| **Palette** | Tiefes Waldgrün `#0F2A1D` · warmes Cremeweiß `#F5F1E8` · Salbei `#C3D9C0` · Editorial-Gold `#C58A2C` |
| **Typografie** | *Newsreader* (Display-Serif) × *Geist* (Sans-Body) × *JetBrains Mono* (Eyebrows / Meta) |
| **Bildsprache** | Fokus auf Menschen & Räume; Tier-Icons bewusst klein und dezent als SVG |

---

## Seitenstruktur

```
wzsbk.page/
├─ index.html              ← Startseite (Hero, Schädlinge, Leistungen, Methode, Zahlen, Stimmen, Standards, CTA)
├─ privat.html             ← Leistungsseite Privat
├─ gewerblich.html         ← Leistungsseite Gewerbe
├─ ueberwachung.html       ← Leistungsseite Monitoring
├─ ueber-uns.html          ← Über uns / Team / Werte
├─ kontakt.html            ← Mehrstufiges Kontaktformular (4 Schritte)
├─ impressum.html
├─ datenschutz.html
├─ schaedlinge/
│  ├─ ratten.html
│  ├─ maeuse.html
│  ├─ ameisen.html
│  ├─ wespen.html
│  └─ schaben.html
└─ assets/
   ├─ site.css             ← Design-System (Variablen, Komponenten, Layout)
   ├─ site.js              ← Header / Footer / Navigation / Reveal-Animationen
   ├─ pest-data.js         ← Daten für Schädlings-Detailseiten
   ├─ service-data.js      ← Daten für Leistungs-Detailseiten
   └─ img/                 ← Generierte SVG-Illustrationen (Hero, Werkstatt, Portraits)
```

---

## Highlights

- **Editorial Hero** mit großer Serif-Headline, Live-Akut-Karte und Reaktionszeit-Meta
- **Sticky Navigation** mit Schädlings- und Leistungs-Dropdowns sowie mobilem Vollbild-Menü
- **Marquee-Ribbon** mit Standards, Einsatzgebiet und Notdienst-Hinweis
- **Schädlings-Strip** — fünf Tiere als dezente SVG-Icons mit Hover-Inversion
- **Service-Cards** im dunklen Forest-Green-Bereich mit nummerierten Eyebrows
- **4-Schritt-Methode** im IPM-Standard (Bestandsaufnahme · Konzept · Behandlung · Nachkontrolle)
- **Stat-Block** mit Goldakzent-Italics für die Zahlen
- **Mehrstufiges Kontaktformular** mit Validierung, Live-Zusammenfassung und Erfolgs-Screen
- **Reveal-Animationen** beim Scrollen via `IntersectionObserver`
- **Voll responsiv** — von 1240 px Desktop bis Mobile

---

## SVG-Illustrationen statt Stock-Fotos

Statt austauschbarer Stock-Fotos wurden Illustrationen in der Markenpalette als SVG generiert. Sie liegen unter [`assets/img/`](assets/img):

| Datei | Verwendung |
|---|---|
| `hero.svg` | Hero-Bild (Techniker im Einsatz) auf [index.html](index.html) |
| `workshop.svg` | Werkstatt-Szene auf [ueber-uns.html](ueber-uns.html) |
| `portrait-florian.svg` | Team-Portrait Florian Z. |
| `portrait-anna.svg` | Team-Portrait Anna K. |
| `portrait-markus.svg` | Team-Portrait Markus B. |

Vorteile: skalieren ohne Qualitätsverlust, on-brand, kein Bild-Hosting nötig, < 5 KB pro Datei. Echte Fotos lassen sich später 1 : 1 ersetzen — Hülle (`.media`) und Aspect-Ratio bleiben gleich.

---

## Lokal starten

```bash
# beliebiger statischer Server reicht
python -m http.server 8080
# oder
npx serve
```

Dann [http://localhost:8080](http://localhost:8080) öffnen.

---

## Deployment

Diese Seite läuft auf **GitHub Pages**, ausgeliefert direkt aus dem `main`-Branch. Jeder Push auf `main` wird in wenigen Sekunden veröffentlicht.

---

## Credits

- **Design** — entworfen in [Claude Design](https://claude.ai/design)
- **Implementierung** — Claude Code
- **Schriften** — [Newsreader](https://fonts.google.com/specimen/Newsreader), [Geist](https://fonts.google.com/specimen/Geist), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- **Inhalte / Branding** — WZ Schädlingsbekämpfung, Karlsruhe

---

## Lizenz

Codebasis: MIT — frei nutzbar als Vorlage. Markenname, Logo und Inhalte sind Eigentum von WZ Schädlingsbekämpfung.
