# prezzi-mare-2

App PWA per richieste di disponibilità e prenotazione appartamenti **Casa Mare** – Vasto Marina.

Pubblicata su GitHub Pages: https://marcosabatini79.github.io/Prezzi-Mare-2/

## Installazione su smartphone

**Android (Chrome):** apri il link → menu ⋮ → *Installa app*  
**iPhone (Safari):** apri il link → tasto Condividi → *Aggiungi alla schermata Home*

## File

| File | Scopo |
|------|-------|
| `index.html` | Interfaccia utente (form prenotazione) |
| `manifest.json` | Metadati PWA (nome, icone, colori) |
| `sw.js` | Service worker per cache offline |
| `icon-192.png` | Icona app 192×192 |
| `icon-512.png` | Icona app 512×512 |

## Backend

Il form invia i dati a Google Apps Script (deployment separato su Google).  
Il codice lato server è in `Prenota_su_Sito_Codice_v4.gs` (non incluso in questo repo).
