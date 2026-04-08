# wildlife-near-me
🦘 Aussie Wildlife Finder

A minimalist, emoji-friendly web app that tells you which Australian animals you might encounter at any address — and how likely you are to spot them.

Built as a static site, deployed on GitHub Pages. No backend, no API keys, no build step.
https://lucieranglova.github.io/wildlife-near-me/

![Aussie Wildlife Finder](https://img.shields.io/badge/GitHub%20Pages-live-4A7C59?style=flat-square) ![Vanilla JS](https://img.shields.io/badge/vanilla%20JS-no%20framework-C8832A?style=flat-square) ![Animals](https://img.shields.io/badge/animals-17-B85A2A?style=flat-square)

---

## ✨ Features

- **Address search** — type any Australian address or city and get localised results
- **17 animals** — from kangaroos and koalas to box jellyfish and funnel-web spiders
- **Sighting probability** — calculated from state, urban/rural setting, and current season
- **Season toggle** — switch between Summer, Autumn, Winter and Spring (southern hemisphere)
- **Danger levels** — colour-coded dots from *safe* to *deadly* (with a pulsing red dot for the truly terrifying ones)
- **Info cards** — click any animal to reveal active season, mating period, safety warnings, and a fun fact
- **Peek mode** — when you expand a card, its row neighbours get shy 👀

---

## 🐾 Animals included

| Animal | Danger | Found in |
|---|---|---|
| Huntsman Spider | 🟡 mild | Nationwide |
| Funnel-web Spider | 🔴 deadly | NSW, ACT, QLD |
| Saltwater Crocodile | 🔴 deadly | NT, QLD, WA |
| Freshwater Crocodile | 🟢 low | NT, QLD, WA |
| Kangaroo | 🔵 safe | Nationwide |
| Wallaby | 🔵 safe | Nationwide |
| Koala | 🔵 safe | QLD, NSW, VIC, SA |
| Wombat | 🔵 safe | NSW, VIC, TAS |
| Feral Camel | 🔵 safe | NT, WA, SA |
| Dingo | 🟢 low | Nationwide (except TAS) |
| Emu | 🟢 low | Nationwide (except TAS) |
| Tasmanian Devil | 🟢 low | TAS only |
| Sulphur-crested Cockatoo | 🔵 safe | Nationwide |
| Australian Magpie | 🟢 low (spring!) | Nationwide |
| Eastern Brown Snake | 🔴 deadly | QLD, NSW, VIC, SA |
| Great White Shark | 🟠 dangerous | Coastal waters |
| Box Jellyfish | 🔴 deadly | NT, QLD, WA (summer) |

---

## 🛠️ Tech stack

- **HTML + CSS + vanilla JavaScript** — no framework, no dependencies
- **[Photon API](https://photon.komoot.io/)** (Komoot) — free geocoding, no API key needed, no CORS issues
- **Nominatim** (OpenStreetMap) — fallback geocoding
- **Google Fonts** — Fraunces (serif display) + DM Mono
- **GitHub Pages** — static hosting

---

## 📁 File structure

```
aussie-wildlife/
├── index.html      # Everything – layout, styles, logic
├── animals.js      # Animal data – regions, seasons, warnings, fun facts
└── README.md
```

---

## 🚀 Deploy to GitHub Pages

1. Fork or create a new repository
2. Upload `index.html` and `animals.js` to the root
3. Go to **Settings → Pages → Source** → select `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/your-repo-name`

No build step, no npm install, no configuration needed.

---

## 🧮 How sighting probability works

Each animal has probability data across three dimensions:

- **State** (QLD, NSW, VIC, SA, WA, NT, TAS, ACT) — 0–99%
- **Urban vs rural** — separate scores based on geocoded place type
- **Season** — summer, autumn, winter, spring scores

Final probability = `state × 0.40 + urban/rural × 0.35 + season × 0.25`, capped at 99%.

---

## ➕ Adding a new animal

Open `animals.js` and add a new entry to the `ANIMALS` array:

```js
{
  id: "quokka",
  name: "Quokka",
  emoji: "🦘",
  danger: 1,
  dangerLabel: "generally safe",
  description: "The happiest animal in the world. Native to Rottnest Island.",
  regions: { QLD: 0, NSW: 0, VIC: 0, SA: 0, WA: 95, NT: 0, TAS: 0, ACT: 0 },
  urban: 60, rural: 80,
  seasons: { summer: 70, autumn: 80, winter: 85, spring: 75 },
  mating: "January – March",
  active: "Dawn and dusk",
  warning: "Don't feed quokkas – it's illegal and harmful to them.",
  funFact: "Quokkas are famous for photobombing tourists with a smile. The 'quokka selfie' is a Rottnest Island tradition.",
}
```

**Danger levels:** `1` = safe · `2` = low risk · `3` = mild · `4` = dangerous · `5` = deadly

---

## 📝 License

MIT — do whatever you like with it.

---

*Built with ❤️ 
