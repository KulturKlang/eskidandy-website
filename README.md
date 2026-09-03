# Eskidandy / Dandy Köln — Website

Statische Website, kein Build-Schritt nötig. Einfach den kompletten `site/`-Ordner
zu einem beliebigen Hoster hochladen (Netlify, Vercel, GitHub Pages, klassisches
Webhosting — alles geht).

**Zweck:** Visitenkarte für Miet-Interessenten — kein Veranstaltungskalender.
Herzstück ist das Anfrage-Formular in der Sektion „Location mieten“.

## Struktur

```
index.html    Startseite (Eskidandy — Kultur, gold/warm) mit Anfrage-Formular
dandy.html    Unterseite (Dandy Köln — Club/Nacht, neon-pink)
css/styles.css  Alle Styles (Farben oben als CSS-Variablen)
js/i18n.js      Übersetzungen DE/TR/EN + Sprachumschalter + Formular-Logik
                (auch die „Unsere Geschichte“-Texte liegen hier, Keys story_*)
img/            Web-optimierte Bilder
video/          Dandy-Aftermovie (laeuft stumm in Dauerschleife
                auf der Dandy-Unterseite)
```

## Anfrage-Formular

Das Formular (Name, E-Mail, Telefon, Wunschtermin, Art der Veranstaltung,
Gästezahl, Nachricht) braucht **keinen Server**: Beim Absenden öffnet sich das
E-Mail-Programm der Besucher:in mit einer fertig ausgefüllten Mail an
`kulturklang@outlook.de` (Adresse steht in `js/i18n.js`, Konstante `CONTACT_MAIL`).

Upgrade-Option nach dem Hosting-Setup: Bei Netlify genügt `data-netlify="true"`
am `<form>`, bei anderen Hostern ein Dienst wie Formspree (`action`-URL
eintragen) — dann landen Anfragen direkt im Postfach, ohne dass sich ein
Mail-Programm öffnen muss.

## Hosting

Die Seite laeuft ueber GitHub Pages, ausgeliefert direkt aus dem `main`-Branch.
Die Domain eskidandy.de ist als Custom Domain hinterlegt, dandykoeln.de leitet
darauf weiter. Aenderungen gehen mit dem naechsten Push automatisch live.

Impressum und Datenschutzerklaerung sind angelegt und verlinkt.

Eingetragene Angaben:
- Instagram: https://www.instagram.com/dandy_koeln_/
- Adresse: Maarweg 261–263, 50825 Köln + Google-Maps-Link
  (https://maps.app.goo.gl/21kQ3LCuneS1ywpY6)

## Farben ändern

Alle Farben stehen oben in `css/styles.css` als Variablen (`:root`).
Der Dandy-Neon-Akzent ist `--dandy-accent` (Alternativen laut Design:
`#7c4dff` violett, `#00e5c3` türkis, `#ff5c33` orange — dann auch
`--dandy-glow`, `--dandy-border`, `--dandy-card-fill` mit anpassen).

## Lokal ansehen

Doppelklick auf `index.html` genügt. (Für exaktes Verhalten wie am Server:
`python3 -m http.server` im Ordner ausführen und http://localhost:8000 öffnen.)
