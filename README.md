# prezzi-mare-2

App PWA per richieste di disponibilità e prenotazione appartamenti **Casa Vista Mare** – Vasto Marina.

Pubblicata su GitHub Pages: https://marcosabatini79.github.io/prezzi-mare-2/

## Come funziona

L'app vera (interfaccia, calcolo prezzi, prenotazioni) vive su **Google Apps Script**.
Questo repository contiene solo il **guscio PWA**: un `index.html` che carica la web app
Apps Script dentro un `<iframe>` e la rende installabile su smartphone.

Vantaggio: per aggiornare l'app si modifica **solo** il codice su Apps Script
(pubblicando una *nuova versione* della stessa distribuzione, così l'URL `/exec` non cambia).
Su GitHub non c'è nulla da ritoccare.

## Installazione su smartphone

**Android (Chrome):** apri il link → menu ⋮ → *Installa app*
**iPhone (Safari):** apri il link → tasto Condividi → *Aggiungi alla schermata Home*

## File

| File | Scopo |
|------|-------|
| `index.html` | Guscio PWA: carica la web app Apps Script in un iframe (con anti-cache) |
| `manifest.json` | Metadati PWA (nome, icone, colori) |
| `sw.js` | Service worker minimale: abilita l'installazione, **non** mette in cache (dati sempre aggiornati) |
| `icon-192.png` | Icona app 192×192 |
| `icon-512.png` | Icona app 512×512 |

## Backend

La logica lato server (lettura prezzi dal foglio Google, invio prenotazioni) è su
Google Apps Script, in un deployment separato. Il codice è in `Prenota_su_Sito_Codice_v5_1.gs`
(non incluso in questo repo).
