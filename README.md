# 🏛️ தமிழி (Tamizhi) — Tamil Heritage Hub

[![Language: Tamil & English](https://img.shields.io/badge/Language-Tamil%20%7C%20English-gold.svg)](#bilingual-support)
[![Tech Stack: HTML5 / TailwindCSS / ES6 JavaScript](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20JS-maroon.svg)](#technology-stack)
[![Audio: Web Audio API](https://img.shields.io/badge/Audio-Web%20Audio%20API-amber.svg)](#cinematic-hero--audio-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

> **“கல் தோன்றி மண் தோன்றாக் காலத்தே, வாளொடு முன் தோன்றிய மூத்த குடி”**  
> *“The ancient Tamils who emerged with valor even before stone and soil were formed.”* — புறநானூறு (Purananuru, Song 192)

**Tamizhi (தமிழி)** is a digital Tamil language, literature, and cultural heritage archive dedicated to preserving millennia of Tamil wisdom, epic poetry, palm-leaf manuscripts, archaeological findings (Keeladi), ancient epigraphy, traditional farming, culinary heritage, and historical context through a modern interactive platform.

---

## 🌟 Key Features

### 🎬 Cinematic Landing Video & Heritage Sound Engine
- **Multi-Scene Video Background**: Dynamic 25-second cinematic video background depicting ancient Tamil temple halls, sunsets, and historical landscapes.
- **Atmospheric Background Music & Web Audio API**: Features integrated background audio ([`mixkit-meditation-flute-and-bells`](https://assets.mixkit.co/music/preview/mixkit-meditation-flute-and-bells-688.mp3)) combined with a synthesized Web Audio API sound generator producing Raga Mohanam harmonic drones and crystal temple bell chimes.
- **Interactive Sound Control Bar**: Mute/Unmute sound button with animated equalizer wave indicators and real-time volume slider control.
- **Scroll Manager**: Automatically pauses media when scrolling away from the hero section and resumes when returning.

### 🏛️ Heritage Pillars (Specialities of Tamil)
A responsive 3-column card grid layout presenting the unique pillars that make Tamil one of the world's greatest classical languages:
1. **Ancient Inscriptions** (`assets/ancient_inscriptions.jpg`): Over 55% of all epigraphical inscriptions discovered across India by the ASI are written in Tamil (Tamil-Brahmi & Vatteluttu).
2. **Classical Manuscripts** (`assets/classical_manuscripts.jpg`): Olaichuvadi palm-leaf manuscripts preserved with metal styluses (*Ezhuthani*) across centuries.
3. **Cultural Personification** (`assets/cultural_personification.jpg`): The deification of the language itself as *Tamil Thai* (தமிழ்த்தாய்).
4. **Keeladi Archaeology**: Carbon-dated 600 BCE Vaigai river valley urban Sangam civilization proving mass secular literacy.
5. **Secular Ethics (Thirukkural)**: 1,330 universal non-sectarian couplets by Thiruvalluvar translated into 40+ world languages.
6. **Unique Phoneme 'ழ' (Zha)**: The voiced retroflex approximant sound unique to Tamil, classified under Tolkappiyam *Maathirai* micro-duration metrics.
7. **Thinai Eco-Poetic Landscapes**: 5-fold ecological biome classification (*Kurinji, Mullai, Marutham, Neithal, Palai*) mapping human emotion to nature.
8. **Print Pioneer (1578 CE)**: Tamil was the first non-European language to be set in movable metal type with *Thambiraan Vanakkam* (1578 CE).

### 📚 Literature & Historical Era Explorer
- **Interactive Chronology**: Explore Tamil literary history from the **Sangam Age** (600 BCE – 300 CE), **Post-Sangam Epics** (*Silappatikaram*, *Manimekalai*), **Bhakti Movement** (*Tevaram*, *Divya Prabandham*), **Imperial Chola & Pandya Eras**, to the **Modern Renaissance** (*Subramania Bharati*, *Bharathidasan*).
- **Interactive Reader Modal**: Deep-dive modals with calligraphic Tamil quotes, historical context, commentary, and UNESCO/ASI source references.

### 📜 Catalog of Tamil Poets & Classical Books
- **Poet Biographies**: Comprehensive profiles for legendary poets including Thiruvalluvar, Avvaiyar, Ilango Adigal, Kambar, Kaniyan Pungundranar, Thirumoolar, Villiputturar, U.V. Swaminatha Iyer, Subramania Bharati, and Bharathidasan.
- **Literary Works**: Detailed summaries and chapter breakdowns of *Tolkappiyam*, *Ettuthokai*, *Pattupattu*, *Thirukkural*, *Silappatikaram*, *Manimekalai*, *Kamba Ramayanam*, and *Tirumandiram*.

### 📖 Classical Etymological Dictionary
- Searchable database of ancient Tamil root words, etymological origins (*Vercholl*), grammatical classifications, and classical literary citations.

### 🤖 Agastyar (அகத்தியன் AI) Assistant
- Embedded interactive Tamil AI scholar offering real-time explanations of Thirukkural couplets, Sangam grammar, and historical context.

### 🌐 Bilingual Support (English / தமிழ்)
- Seamless 1-click toggle between English and Tamil across all text elements, placeholders, UI buttons, and data cards.

---

## 🛠️ Project Structure

```
TAMIZHI/
├── index.html              # Main single-page application & semantic HTML structure
├── css/
│   └── style.css           # Design system tokens, parchment themes, typography & animations
├── js/
│   ├── app.js              # Application logic controller, view router, audio engine & scroll manager
│   └── data.js             # Comprehensive dataset (Specialities, Eras, Poets, Books, Dictionary, AI)
├── assets/
│   ├── logo.png            # Brand emblem
│   ├── logo.svg            # Vector branding
│   ├── ancient_inscriptions.jpg  # High-res photography of ancient Tamil epigraphy
│   ├── classical_manuscripts.jpg # High-res museum photography of Olaichuvadi manuscripts
│   └── cultural_personification.jpg # High-res artistic photography of Tamil Thai
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
To run this application locally, you only need any standard web server or browser.

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sathishkumarv07/TAMIZHI.git
   cd TAMIZHI
   ```

2. **Start a local HTTP web server**:
   - Using Python:
     ```bash
     python -m http.server 8080
     ```
   - Using Node.js / http-server:
     ```bash
     npx http-server . -p 8080
     ```

3. **Open in browser**:
   Navigate to `http://localhost:8080` in your web browser.

---

## 🎨 Technology Stack

- **Frontend Core**: Semantic HTML5, Vanilla JavaScript (ES6+).
- **Styling & Design System**: TailwindCSS CDN, Custom CSS variables, Playfair Display, Cinzel, Noto Serif Tamil, Outfit fonts, and Glassmorphism dark modes.
- **Audio Synthesis**: Web Audio API (AudioContext, BiquadFilter, Harmonic Oscillators, Gain Nodes) & HTML5 `<audio>`.
- **Animations**: CSS IntersectionObserver scroll-reveal engine, canvas particle animations.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<p center>
  Made with ❤️ for Tamil Heritage • <strong>வாழ்க தமிழ்!</strong>
</p>
