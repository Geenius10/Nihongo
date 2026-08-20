# RETHINK. Nihongo v19 – iPhone rebuild

Die Oberfläche wurde aus dem v18-ZIP vollständig neu aufgebaut; die Lerninhalte und Audits bleiben erhalten.

## Fest umgesetzter Zielzustand
- iPhone/Safari: viewport-fit=cover, Safe Areas, 16px Inputs gegen Fokus-Zoom, user-scalable=no
- Startseite allein: `RETHINK.` klein + `Nihongo` groß/fett
- Karten: `RETHINK. Karten`; Lernen: `RETHINK. Lernen`; Lernpfad: `RETHINK. Lernpfad`; Fortschritt: `RETHINK. Fortschritt`
- keine globale zweite Überschrift auf Unterseiten
- Navigation: Heute · Karten · Lernen · Pfad · Fortschritt
- Tab-Klick springt nach oben
- Scroll-Seiten enden knapp vor der Tabbar; kein großer Leerbereich
- Lernen ist als fester iPhone-Screen zwischen Safe Area und Tabbar eingespannt und nicht scrollbar
- Bewertung sitzt direkt über der Tabbar
- Lernen hat ausschließlich Karteikarten; keine Moduswahl, kein Quiz, kein Schreiben
- Karte ist sofort gefüllt und frei drehbar
- nach dem ersten Umdrehen bleibt die Bewertung für die Karte aktiv
- Vorderseite: Schriftzeichen + Kana + Romaji
- links oben neutrales Audio-Symbol; rechts oben Niveau + Kartentyp
- Rückseite: Übersetzung + Beispiel + Romaji + deutsche Übersetzung
- Lernpool: N4/N3, keine einzelnen Kana/Silben
- Dojo auf Karten-Seite
- Filter: Alle · N5 · N4 · N3 · N2 · N1; Wechsel nach Alle funktioniert
- Grammatik beginnt ohne automatischen Scroll-Sprung
- Grammatikniveau N4/N3 separat umschaltbar
- Zahnrad auf Heute; in Einstellungen bleibt das Zahnrad sichtbar und schließt beim erneuten Klick
- Hell-/Dunkelmodus und japanisch inspiriertes Farbsystem
- PWA: Manifest, Service Worker, Offline-App-Shell, Apple Touch Icon
