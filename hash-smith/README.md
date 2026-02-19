# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---

ZADATAK

Prikaz se sastoji od 9 grupa, koje su označene PDU brojem 1-9. Grupe su poredane s lijeva na desno, od gore prema dolje. Grupe 1-3 sadrže po 13 minera, dok ostale grupe sadrže po 18 minera. Miner podaci se vraćaju kao JSON struktura koju možete za ovaj zadatak preuzeti s https://drive.google.com/file/d/1SsJiHorVgYm2gQycUnp6SWmkUZucv5ze/view?usp=drive_link.

Pojašenjenje miner podataka:

- TH5s - hashrate u zadnjih 5s
- THAvg - prosječan hashrate kroz zadnjih sat vremena
- tB - temperatura pločice minera
- freq - frekvencija
- w - trenutna snaga minera
- s - stanje minera (10 - OK, 20 - gubitak hashratea, 30 - upozorenje, 40 - manji problemi, 50 - veći problemi, 60 - stanje kritično, boje možete kopirati kao gore ili mapirat proizvoljno)
- pdu - grupa
- port - redni broj unutar grupe

U osnovi gledamo samo prikaz stanja “s” grafički i onda kad kliknemo na miner dodatno pojašnjenje. Za dodatne bodove možete stavit opciju pregleda različitih podataka grafički.

---

Start the project by opening the terminal:

npm run dev

-and in another terminal

json-server --watch miners.json --port 3001

Bundled site is in the folder "solution".
