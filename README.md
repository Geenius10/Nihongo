# VocaPulse Final

Mehrsprachige PWA für Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch und Japanisch.

## Funktionen
- Jede unterstützte Sprache kann als Quelle und jede andere als Ziel gewählt werden.
- Vokabeln mit A1–C2, Wortart, Kategorie und Japanisch-Lesung.
- SRS-ähnliches Wiederholungssystem: neue Karten zuerst, fällige Wiederholungen später.
- Dojo mit Abrufen, Tippen, Multiple Choice und Hören.
- Grammatikbereich.
- Wörterbuchansicht mit allen vorhandenen Sprachäquivalenten und LEO-Link.
- Online-Übersetzungsfallback über MyMemory für unbekannte Texte.
- Aussprache über Web Speech API.
- PWA/offline für den lokalen Katalog.
- Lernstand Export/Import.

## Start
Ein lokaler HTTP-Server ist nötig, damit fetch(), Manifest und Service Worker funktionieren.

```bash
python3 -m http.server 8080
```
Dann http://localhost:8080 öffnen.

## Datenquellen / Ausbau
Die lokale Datenbasis ist ein kuratierter Kernkatalog. Für einen sehr großen Katalog empfiehlt sich eine Build-Pipeline aus Wiktionary/Wiktextract und Tatoeba statt Rohdaten in die PWA zu packen. Siehe die Projektdokumentation der jeweiligen Quellen.
