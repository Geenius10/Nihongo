# VocaPulse 1.0

## Start
Die App braucht beim ersten Start Internet, um die Frequenzkataloge zu laden.

```bash
python3 -m http.server 8080
```
Dann http://localhost:8080 öffnen.

## Katalog
VocaPulse lädt beim ersten Start 50.000 Frequenzeinträge für jede der sieben Sprachen (Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch und Japanisch) und legt sie in IndexedDB ab. Danach stehen bis zu 350.000 lokale Wortdatensätze zur Verfügung.

Quelle der Frequenzlisten:
hermitdave/FrequencyWords, basierend auf OpenSubtitles. Content-Lizenz: CC BY-SA 4.0.
https://github.com/hermitdave/FrequencyWords

## Übersetzungen
Ein kleiner Starterkern ist offline enthalten. Weitere Übersetzungen werden bedarfsgesteuert online über MyMemory abgerufen und anschließend in IndexedDB gecacht.

## Hinweise
Die Frequenzbänder A1–C2 sind Lernprioritäts-Bänder nach Rang, keine offiziell zertifizierten CEFR-Einstufungen einzelner Wörter. Eine echte CEFR-Lexemklassifikation benötigt kuratierte, sprachspezifische Quellen.
