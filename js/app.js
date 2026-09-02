// Application Controller for Tamil Heritage Hub (Tamizhi)

let currentLang = 'en';
let currentView = 'explore';
let currentKuralIndex = 0;
let currentHeroChapterIndex = 0;
let isAudioPlaying = false;
let isHeroMuted = true;
let speechUtterance = null;
let savedBookmarks = JSON.parse(localStorage.getItem('tamizhi_bookmarks') || '[]');
let currentUser = JSON.parse(localStorage.getItem('tamizhi_user') || 'null');
let currentLitTab = 'works';

// Literature Page Tab Switcher
function switchLitTab(tabName) {
  currentLitTab = tabName;

  // Update tab buttons
  document.querySelectorAll('.lit-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const clickedTab = document.querySelector(`.lit-tab[onclick="switchLitTab('${tabName}')"]`);
  if (clickedTab) clickedTab.classList.add('active');

  // Show/hide panels with animation
  document.querySelectorAll('.lit-panel').forEach(panel => {
    panel.classList.add('hidden');
  });
  const activePanel = document.getElementById(`lit-panel-${tabName}`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
    // Re-trigger animation
    activePanel.style.animation = 'none';
    activePanel.offsetHeight; // Force reflow
    activePanel.style.animation = '';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLanguage();
  initHeroVideoEngine();
  initHeroParticles();
  initHeroScrollManager();
  renderLiteratureEras();
  renderPoemReader(0);
  renderPoetsAndBooks();
  renderTamilSpecialities();
  renderDictionary();
  initAIAssistant();
  initSearch();
  initBookmarks();
  initAuth();
  updateUserUI();
  initScrollReveal();
});

/* =========================================================================
   PROFESSIONAL SCROLL-REVEAL ANIMATION ENGINE
   — IntersectionObserver: fires once on entry, never breaks on scroll-up.
   — Staggered delay per child index for group reveals.
   ========================================================================= */

function initScrollReveal() {
  /* Respect prefers-reduced-motion */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Observer options — trigger when 12% of element enters viewport */
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  /* ── Single-element reveal observer ─────────────────────────────────── */
  const singleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.revealDelay;
        if (delay) {
          el.classList.add(`reveal-delay-${delay}`);
        }
        /* Kick the transition on next frame so browser registers initial state */
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.classList.remove(
              'reveal-hidden',
              'reveal-hidden-left',
              'reveal-hidden-right',
              'reveal-hidden-scale',
              'reveal-hidden-fade'
            );
            el.classList.add('reveal-visible');
          });
        });
        singleObserver.unobserve(el);
      }
    });
  }, observerOptions);

  /* ── Group / staggered reveal observer ─────────────────────────────── */
  const groupObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const children = container.querySelectorAll('[data-reveal-child]');
        children.forEach((child, i) => {
          const delayIndex = Math.min(i + 1, 8);
          child.classList.add(`reveal-delay-${delayIndex}`);
          setTimeout(() => {
            requestAnimationFrame(() => {
              child.classList.remove(
                'reveal-hidden',
                'reveal-hidden-left',
                'reveal-hidden-right',
                'reveal-hidden-scale',
                'reveal-hidden-fade'
              );
              child.classList.add('reveal-visible');
            });
          }, i * 70); /* 70ms stagger per item */
        });
        groupObserver.unobserve(container);
      }
    });
  }, observerOptions);

  /* ── Apply to Section Headers ────────────────────────────────────────
     Targets every .archive-badge, h2, p inside a .text-center header div
  ──────────────────────────────────────────────────────────────────────*/
  document.querySelectorAll('#specialities-section .text-center').forEach(header => {
    const badge = header.querySelector('.archive-badge');
    const h2 = header.querySelector('h2');
    const p = header.querySelector('p');

    if (badge) { badge.classList.add('reveal-hidden'); badge.dataset.revealDelay = '1'; singleObserver.observe(badge); }
    if (h2) { h2.classList.add('reveal-hidden'); h2.dataset.revealDelay = '2'; singleObserver.observe(h2); }
    if (p) { p.classList.add('reveal-hidden-fade'); p.dataset.revealDelay = '3'; singleObserver.observe(p); }
  });

  /* ── Apply to Filter Tab Bar ──────────────────────────────────────── */
  const filterBar = document.getElementById('speciality-filter-bar');
  if (filterBar) {
    filterBar.classList.add('reveal-hidden');
    filterBar.dataset.revealDelay = '1';
    singleObserver.observe(filterBar);
  }

  /* ── Apply to Carousel Controls Bar ─────────────────────────────────*/
  const carouselControlBar = filterBar && filterBar.nextElementSibling;
  if (carouselControlBar) {
    carouselControlBar.classList.add('reveal-hidden-fade');
    carouselControlBar.dataset.revealDelay = '2';
    singleObserver.observe(carouselControlBar);
  }

  /* ── Apply to Speciality Cards (re-applied after each render) ──────── */
  applySpecialityCardReveal();

  /* ── Apply to all vintage-card (literature, poets, etc.) ─────────── */
  revealVintageCards();

  /* ── Apply to Footer ──────────────────────────────────────────────── */
  const footer = document.querySelector('footer.site-footer');
  if (footer) {
    const cols = footer.querySelectorAll('.md\\:col-span-6, .md\\:col-span-3');
    cols.forEach((col, i) => {
      col.classList.add('reveal-hidden');
      col.dataset.revealDelay = String(i + 1);
      singleObserver.observe(col);
    });
  }
}

/* ─── Apply animated reveal to speciality cards after each render ─── */
function applySpecialityCardReveal() {
  const track = document.getElementById('tamil-specialities-track');
  if (!track) return;

  const cards = track.querySelectorAll(':scope > div');
  cards.forEach((card) => {
    card.classList.remove('reveal-hidden-scale', 'reveal-hidden');
    card.classList.add('reveal-visible');
  });
}


/* ─── Apply reveal to vintage-card elements site-wide ─────────────── */
function revealVintageCards() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const vcObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        requestAnimationFrame(() => {
          card.classList.remove('reveal-hidden');
          card.classList.add('reveal-visible');
        });
        vcObserver.unobserve(card);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.05
  });

  document.querySelectorAll('.vintage-card, .poet-card, .lit-work-card, .kural-card').forEach((card, i) => {
    if (!card.classList.contains('reveal-visible')) {
      card.classList.add('reveal-hidden');
      const delayIndex = Math.min((i % 4) + 1, 8);
      card.classList.add(`reveal-delay-${delayIndex}`);
      vcObserver.observe(card);
    }
  });
}



// View Navigation Router
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-view-target]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-view-target');
      showView(targetView);
    });
  });
}

function showView(viewId) {
  currentView = viewId;
  const views = document.querySelectorAll('.app-view');
  views.forEach(v => v.classList.add('hidden'));

  const activeView = document.getElementById(`view-${viewId}`);
  if (activeView) {
    activeView.classList.remove('hidden');
  }

  const menuDropdown = document.getElementById('top-menu-dropdown');
  if (menuDropdown) menuDropdown.classList.add('hidden');

  document.querySelectorAll('[data-view-target]').forEach(link => {
    if (link.getAttribute('data-view-target') === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Re-trigger view-specific renders to guarantee grid content is fresh
  if (viewId === 'poets') {
    filterPoetsCategory('all');
  } else if (viewId === 'books') {
    filterBooksCategory('all');
  } else if (viewId === 'literature') {
    renderPoetsAndBooks();
    renderLiteratureEras();
  } else if (viewId === 'dictionary') {
    renderDictionary();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Multi-language Toggle (English / Tamil)
function initLanguage() {
  const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');
  langToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('bg-amber-100', 'text-amber-900', 'font-bold');
    } else {
      btn.classList.remove('bg-amber-100', 'text-amber-900', 'font-bold');
    }
  });

  const texts = APP_TEXTS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (texts[key]) {
      el.placeholder = texts[key];
    }
  });

  renderPoemReader(currentKuralIndex);
  renderLiteratureEras();
  renderTamilSpecialities();
  renderDictionary();
  renderPoetsAndBooks();
}

// Specialities of Tamil State & Interactive Controller
let currentSpecialityFilter = 'all';
let isSpecialityGridView = false;
let currentSpecialityModalIndex = 0;

// Render Specialities of the Tamil Language Carousel & Grid
function renderTamilSpecialities() {
  const track = document.getElementById('tamil-specialities-track');
  if (!track) return;

  const filtered = currentSpecialityFilter === 'all'
    ? TAMIL_SPECIALITIES
    : TAMIL_SPECIALITIES.filter(item => item.category === currentSpecialityFilter);

  // Update count badge
  const countBadge = document.getElementById('speciality-count-badge');
  if (countBadge) {
    countBadge.textContent = currentLang === 'ta'
      ? `${filtered.length} தமிழ்த் தனிச்சிறப்புகள்`
      : `${filtered.length} Heritage Pillars`;
  }

  if (filtered.length === 0) {
    track.innerHTML = `
      <div class="w-full text-center py-12 text-stone-500 font-serif col-span-full">
        ${currentLang === 'ta' ? 'இப்பிரிவில் பதிவுகள் இல்லை.' : 'No specialities found in this category.'}
      </div>
    `;
    return;
  }

  track.className = 'grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch';

  track.innerHTML = filtered.map((item) => {
    const originalIndex = TAMIL_SPECIALITIES.findIndex(s => s.id === item.id);
    const displayImage = item.image || 'assets/ancient_inscriptions.jpg';
    return `
      <div class="flex flex-col group cursor-pointer reveal-hidden-scale" onclick="openSpecialityReader(${originalIndex})">
        <div class="w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-5 border border-[#EBE1D3] bg-stone-100 flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300">
          <img src="${displayImage}" alt="${currentLang === 'ta' ? item.titleTa : item.titleEn}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.src='assets/ancient_inscriptions.jpg'; this.onerror=null;">
        </div>

        <h3 class="text-xl md:text-2xl font-serif font-bold text-[#4A151B] mb-2 group-hover:text-[#7A1F2A] transition-colors leading-snug">
          ${currentLang === 'ta' ? item.titleTa : item.titleEn}
        </h3>

        <p class="text-stone-700 text-sm md:text-base font-serif leading-relaxed mb-4 flex-1 line-clamp-4">
          ${currentLang === 'ta' ? item.descTa : item.descEn}
        </p>

        <button onclick="event.stopPropagation(); openSpecialityReader(${originalIndex})" class="inline-flex items-center gap-1.5 text-sm font-serif font-bold text-[#4A151B] hover:text-[#7A1F2A] transition-colors mt-auto self-start group/link">
          <span>${currentLang === 'ta' ? 'மேலும் படிக்க' : 'Read More'}</span>
          <span class="group-hover/link:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    `;
  }).join('');
}

// Category Filter Controller
function filterSpecialities(category) {
  currentSpecialityFilter = category;

  // Update button active state
  const buttons = document.querySelectorAll('#speciality-filter-bar .speciality-filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderTamilSpecialities();

  // Re-apply scroll reveal on newly rendered cards
  requestAnimationFrame(() => applySpecialityCardReveal());
}

// Horizontal Scroll Carousel
function scrollSpecialityCarousel(direction) {
  const track = document.getElementById('tamil-specialities-track');
  if (track) {
    const scrollAmount = track.clientWidth * 0.75;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}

// Toggle between Snapping Carousel & Multi-Column Grid View
function toggleSpecialityLayout() {
  const track = document.getElementById('tamil-specialities-track');
  const toggleText = document.getElementById('layout-toggle-text');
  const toggleIcon = document.getElementById('layout-toggle-icon');
  const arrowsGroup = document.getElementById('carousel-arrows-group');
  if (!track) return;

  isSpecialityGridView = !isSpecialityGridView;

  if (isSpecialityGridView) {
    track.style.display = 'grid';
    track.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    track.style.overflowX = 'visible';
    track.style.scrollSnapType = 'none';
    if (toggleText) toggleText.textContent = currentLang === 'ta' ? 'சுருள் வடிவம்' : 'Carousel View';
    if (toggleIcon) toggleIcon.textContent = '🎠';
    if (arrowsGroup) arrowsGroup.style.display = 'none';
  } else {
    track.style.display = 'flex';
    track.style.gridTemplateColumns = '';
    track.style.overflowX = 'auto';
    track.style.scrollSnapType = 'x mandatory';
    if (toggleText) toggleText.textContent = currentLang === 'ta' ? 'கட்டம் வடிவம்' : 'Grid View';
    if (toggleIcon) toggleIcon.textContent = '⊞';
    if (arrowsGroup) arrowsGroup.style.display = 'flex';
  }
}

// Open Immersive Speciality Full-Page Reader View
function openSpecialityReader(index) {
  currentSpecialityModalIndex = index;
  const item = TAMIL_SPECIALITIES[index];
  if (!item) return;

  // Detail View Elements
  const iconEl = document.getElementById('detail-spec-icon');
  const badgeEl = document.getElementById('detail-spec-badge');
  const indexEl = document.getElementById('detail-spec-index');
  const titleEl = document.getElementById('detail-spec-title');
  const subtitleEl = document.getElementById('detail-spec-subtitle');
  const imageEl = document.getElementById('detail-spec-image');
  const quoteTaEl = document.getElementById('detail-spec-quote-ta');
  const quoteEnEl = document.getElementById('detail-spec-quote-en');
  const articleEl = document.getElementById('detail-spec-article');
  const interactiveContainer = document.getElementById('detail-spec-interactive');
  const keypointsEl = document.getElementById('detail-spec-keypoints');
  const sourcesEl = document.getElementById('detail-spec-sources');

  if (iconEl) iconEl.textContent = item.icon || '🏛️';
  if (badgeEl) badgeEl.textContent = item.badge || 'HERITAGE PILLAR';
  if (indexEl) indexEl.textContent = `Pillar 0${index + 1} of 0${TAMIL_SPECIALITIES.length}`;
  if (titleEl) titleEl.textContent = currentLang === 'ta' ? item.titleTa : item.titleEn;
  if (subtitleEl) subtitleEl.textContent = currentLang === 'ta' ? item.titleEn : item.titleTa;
  if (imageEl) {
    imageEl.src = item.image || 'assets/ancient_inscriptions.jpg';
    imageEl.alt = currentLang === 'ta' ? item.titleTa : item.titleEn;
  }
  if (quoteTaEl) quoteTaEl.textContent = item.quoteTa || '';
  if (quoteEnEl) quoteEnEl.textContent = item.quoteEn || '';
  if (articleEl) articleEl.textContent = currentLang === 'ta' ? item.detailedArticleTa : item.detailedArticleEn;

  // Render Interactive Feature depending on type
  if (interactiveContainer) {
    if (item.interactiveType === 'audio' && item.audioWords) {
      interactiveContainer.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-xs font-sans font-bold uppercase tracking-wider text-[#4A151B] flex items-center gap-1.5">
              <span>🗣️</span>
              <span>Classical Tamil Pronunciation Station (ஒலிப்பகம்)</span>
            </span>
            <span class="text-[11px] font-serif text-stone-500 italic">Tap any word to listen to standard articulation</span>
          </div>
          <div class="flex flex-wrap gap-2.5">
            ${item.audioWords.map(w => `
              <button onclick="playTamilAudioWord('${w.soundText}')" class="audio-play-chip group">
                <span class="text-sm">🔊</span>
                <span class="text-[#4A151B] font-bold text-base">${w.word}</span>
                <span class="text-xs font-sans text-stone-600 font-normal">(${w.trans})</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (item.interactiveType === 'couplet') {
      interactiveContainer.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-sans font-bold uppercase tracking-wider text-[#4A151B] flex items-center gap-1.5">
              <span>📜</span>
              <span>Sample Universal Couplet (மாதிரிக் குறள்)</span>
            </span>
            <span class="text-[10px] font-sans font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">7 Words Metric</span>
          </div>
          <div class="bg-[#FFFDF9] p-4 rounded-lg border border-[#D4AF37]/50 shadow-inner">
            <div class="font-serif font-bold text-base md:text-lg text-[#4A151B] mb-1 leading-relaxed">
              அகர முதல எழுத்தெல்லாம் ஆதி<br>பகவன் முதற்றே உலகு.
            </div>
            <div class="text-xs md:text-sm font-serif italic text-stone-700 mt-2">
              "As the letter 'A' is the first of all letters, so is the primordial Divine the origin of the world."
            </div>
          </div>
        </div>
      `;
    } else {
      interactiveContainer.innerHTML = `
        <div class="flex items-start gap-3.5">
          <span class="text-2xl">🏛️</span>
          <div>
            <div class="text-xs font-sans font-bold uppercase tracking-wider text-[#4A151B] mb-1">
              Historical & Archaeological Verification
            </div>
            <div class="text-xs md:text-sm font-serif text-stone-700 leading-relaxed">
              Verified through epigraphical records, carbon dating by Beta Analytic (USA), and classical literary canons preserved across centuries.
            </div>
          </div>
        </div>
      `;
    }
  }

  // Key Points List
  if (keypointsEl) {
    const points = currentLang === 'ta' ? item.keyPointsTa : item.keyPointsEn;
    keypointsEl.innerHTML = points.map(pt => `
      <div class="flex items-start gap-3 text-sm md:text-base text-stone-800 leading-relaxed">
        <span class="w-6 h-6 rounded-full bg-amber-100 text-[#4A151B] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
        <span>${pt}</span>
      </div>
    `).join('');
  }

  // Sources
  if (sourcesEl && item.historicalSources) {
    sourcesEl.textContent = item.historicalSources.join(' • ');
  }

  // Navigate to full-page detail view & scroll smooth to top
  showView('speciality-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal/Detail Next / Prev Navigation
function navigateSpecialityDetail(direction) {
  const total = TAMIL_SPECIALITIES.length;
  let newIndex = (currentSpecialityModalIndex + direction + total) % total;
  openSpecialityReader(newIndex);
}

function navigateSpecialityModal(direction) {
  navigateSpecialityDetail(direction);
}

// Play Tamil Audio Pronunciation using Web Speech API with fallback
function playTamilAudioWord(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'ta-IN';
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    // Pick Tamil voice if available
    const voices = window.speechSynthesis.getVoices();
    const tamilVoice = voices.find(v => v.lang.startsWith('ta') || v.name.toLowerCase().includes('tamil'));
    if (tamilVoice) {
      utterance.voice = tamilVoice;
    }

    window.speechSynthesis.speak(utterance);
  } else {
    alert(`Audio pronunciation for "${word}"`);
  }
}

// Ask AI Tamil about current speciality
function askAIFocusedSpeciality() {
  const item = TAMIL_SPECIALITIES[currentSpecialityModalIndex];
  if (!item) return;

  closeSpecialityReader();
  showView('ai');

  const prompt = currentLang === 'ta'
    ? `தமிழ் மொழியின் தனிச்சிறப்பான "${item.titleTa}" குறித்து சங்க இலக்கிய மேற்கோள்கள் மற்றும் வரலாற்றுச் சான்றுகளுடன் விரிவாக விளக்குக.`
    : `Please explain in scholarly detail the historical evidence, Sangam literature references, and unique global significance of the Tamil language pillar: "${item.titleEn}" (${item.titleTa}).`;

  const inputEl = document.getElementById('ai-chat-input');
  if (inputEl) {
    inputEl.value = prompt;
    sendAIMessage();
  }
}

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSpecialityReader();
  }
});

// Render Classical Tamil Dictionary View
function renderDictionary() {
  const container = document.getElementById('dictionary-grid');
  if (!container) return;

  container.innerHTML = DICTIONARY_DATA.map(item => `
    <div class="vintage-card">
      <div class="flex justify-between items-start mb-2">
        <span class="bg-amber-100 text-amber-900 text-xs px-2.5 py-1 rounded font-bold font-sans">${item.category}</span>
        <span class="text-xs font-mono text-stone-500">${item.phonetic}</span>
      </div>
      <h3 class="text-2xl font-serif font-bold text-maroon mb-1">${item.wordTa}</h3>
      <div class="text-xs font-semibold text-stone-600 mb-3">Root: <span class="text-amber-800">${item.rootTa}</span></div>
      <p class="text-stone-700 text-sm font-serif mb-4 leading-relaxed">
        ${currentLang === 'ta' ? item.meaningTa : item.meaningEn}
      </p>
      <div class="border-t border-amber-100 pt-3">
        <span class="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest block mb-1">Sangam Citations</span>
        <div class="flex flex-wrap gap-1">
          ${item.citations.map(c => `<span class="bg-stone-100 text-stone-700 text-[11px] px-2 py-0.5 rounded font-serif">${c}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function filterDictionary(query) {
  const q = query.toLowerCase().trim();
  const filtered = DICTIONARY_DATA.filter(d =>
    d.wordTa.toLowerCase().includes(q) ||
    d.phonetic.toLowerCase().includes(q) ||
    d.meaningEn.toLowerCase().includes(q) ||
    d.meaningTa.toLowerCase().includes(q)
  );

  const container = document.getElementById('dictionary-grid');
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-12 text-stone-500 font-serif">No dictionary matches found for "${query}". Try searching "Aram", "Sangam", or "Aham".</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="vintage-card">
      <div class="flex justify-between items-start mb-2">
        <span class="bg-amber-100 text-amber-900 text-xs px-2.5 py-1 rounded font-bold font-sans">${item.category}</span>
        <span class="text-xs font-mono text-stone-500">${item.phonetic}</span>
      </div>
      <h3 class="text-2xl font-serif font-bold text-maroon mb-1">${item.wordTa}</h3>
      <div class="text-xs font-semibold text-stone-600 mb-3">Root: <span class="text-amber-800">${item.rootTa}</span></div>
      <p class="text-stone-700 text-sm font-serif mb-4 leading-relaxed">
        ${currentLang === 'ta' ? item.meaningTa : item.meaningEn}
      </p>
      <div class="border-t border-amber-100 pt-3">
        <span class="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest block mb-1">Sangam Citations</span>
        <div class="flex flex-wrap gap-1">
          ${item.citations.map(c => `<span class="bg-stone-100 text-stone-700 text-[11px] px-2 py-0.5 rounded font-serif">${c}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render Literature Eras
function renderLiteratureEras() {
  const container = document.getElementById('eras-grid-container');
  if (!container) return;

  container.innerHTML = ERAS_DATA.map(era => `
    <div class="vintage-card flex flex-col lg:flex-row gap-6 items-center">
      <div class="flex-1">
        <span class="era-badge mb-3">${era.badge}</span>
        <h3 class="card-title text-2xl font-serif text-maroon">${era.title}</h3>
        <p class="text-stone-600 mb-4 leading-relaxed font-serif text-sm">${era.desc}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${era.tags.map(t => `<span class="bg-amber-50 text-amber-900 text-xs px-2.5 py-1 rounded border border-amber-200">${t}</span>`).join('')}
        </div>
        <div class="flex items-center gap-4">
          <button onclick="showView('reader')" class="btn-primary text-sm py-2 px-4">
            ${currentLang === 'ta' ? 'நூல்களை ஆராய்க' : 'Explore Texts'}
          </button>
          <button onclick="showView('poets')" class="text-sm font-semibold text-maroon hover:underline">
            ${currentLang === 'ta' ? 'புலவர்களைக் காண்க →' : 'View Authors →'}
          </button>
        </div>
      </div>
      <div class="w-full lg:w-48 h-48 rounded-lg overflow-hidden border border-amber-200 shadow-sm relative group">
        <img src="${era.image}" alt="${era.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
          <span class="text-white text-xs font-serif italic">Archive MSS Collection</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Interactive Thirukkural Reader
function renderPoemReader(index) {
  currentKuralIndex = index;
  const kural = THIRUKKURAL_CHAPTER_1.kurals[index] || THIRUKKURAL_CHAPTER_1.kurals[0];

  document.getElementById('reader-chapter-title').textContent = THIRUKKURAL_CHAPTER_1.chapterTitle;
  document.getElementById('reader-chapter-desc').textContent = THIRUKKURAL_CHAPTER_1.chapterDesc;

  document.getElementById('reader-kural-num').textContent = `Kural ${kural.number}`;
  document.getElementById('reader-kural-tamil').textContent = kural.tamil;
  document.getElementById('reader-kural-translit').textContent = `"${kural.transliteration}"`;
  document.getElementById('reader-kural-translation').textContent = `"${currentLang === 'ta' ? kural.translationTa : kural.translationEn}"`;

  const wordContainer = document.getElementById('reader-word-breakdown');
  if (wordContainer) {
    wordContainer.innerHTML = kural.wordBreakdown.map(wb => `
      <div class="word-explanation-item">
        <div class="word-ta">${wb.word}</div>
        <div class="text-xs text-stone-600 font-sans mt-0.5">${currentLang === 'ta' ? wb.meaningTa : wb.meaningEn}</div>
      </div>
    `).join('');
  }

  document.getElementById('reader-literary-bg').textContent = kural.literaryBackground;
  document.getElementById('reader-sources').textContent = kural.sources;

  const bookmarkBtn = document.getElementById('btn-bookmark-kural');
  if (bookmarkBtn) {
    const isBookmarked = savedBookmarks.some(b => b.number === kural.number);
    bookmarkBtn.innerHTML = isBookmarked
      ? `<svg class="w-5 h-5 text-amber-600 fill-current" viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>`
      : `<svg class="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>`;
  }
}

function prevKural() {
  if (currentKuralIndex > 0) renderPoemReader(currentKuralIndex - 1);
}
function nextKural() {
  if (currentKuralIndex < THIRUKKURAL_CHAPTER_1.kurals.length - 1) renderPoemReader(currentKuralIndex + 1);
}

// Audio Recitation Player
function playKuralAudio() {
  const kural = THIRUKKURAL_CHAPTER_1.kurals[currentKuralIndex];
  if (!kural) return;

  const playerWidget = document.getElementById('global-audio-widget');

  if (isAudioPlaying) {
    window.speechSynthesis.cancel();
    isAudioPlaying = false;
    if (playerWidget) playerWidget.classList.add('hidden');
    return;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    speechUtterance = new SpeechSynthesisUtterance(kural.tamil);
    speechUtterance.lang = 'ta-IN';
    speechUtterance.rate = 0.85;

    speechUtterance.onstart = () => {
      isAudioPlaying = true;
      if (playerWidget) playerWidget.classList.remove('hidden');
      document.getElementById('audio-widget-text').textContent = `Reciting Kural ${kural.number} in Classical Tamil...`;
    };

    speechUtterance.onend = () => {
      isAudioPlaying = false;
      if (playerWidget) playerWidget.classList.add('hidden');
    };

    speechUtterance.onerror = () => {
      isAudioPlaying = false;
      if (playerWidget) playerWidget.classList.add('hidden');
    };

    window.speechSynthesis.speak(speechUtterance);
  } else {
    alert("Audio recitation is supported on your browser!");
  }
}

// Agastya AI Assistant Logic
function initAIAssistant() {
  const sendBtn = document.getElementById('ai-send-btn');
  const inputEl = document.getElementById('ai-input');
  if (!inputEl) return;

  const handleSend = () => {
    const query = inputEl.value.trim();
    if (!query) return;

    appendUserMessage(query);
    inputEl.value = '';

    setTimeout(() => {
      processAIResponse(query);
    }, 600);
  };

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });
}

function askAIPrompt(promptText) {
  showView('ai');
  const inputEl = document.getElementById('ai-input');
  if (inputEl) {
    inputEl.value = promptText;
    document.getElementById('ai-send-btn').click();
  }
}

function appendUserMessage(text) {
  const container = document.getElementById('ai-messages-list');
  if (!container) return;

  const userBubble = document.createElement('div');
  userBubble.className = 'message-bubble-user';
  userBubble.textContent = text;
  container.appendChild(userBubble);
  container.scrollTop = container.scrollHeight;
}

function processAIResponse(query) {
  const container = document.getElementById('ai-messages-list');
  if (!container) return;

  let knowledge = AI_KNOWLEDGE_BASE.default;
  const lower = query.toLowerCase();

  if (lower.includes('aham') || lower.includes('puram') || lower.includes('அகம்') || lower.includes('புறம்')) {
    knowledge = AI_KNOWLEDGE_BASE.aham;
  } else if (lower.includes('kural') || lower.includes('thirukkural') || lower.includes('குறள்')) {
    knowledge = AI_KNOWLEDGE_BASE.thirukkural;
  }

  const aiBubble = document.createElement('div');
  aiBubble.className = 'message-bubble-ai flex gap-3';
  aiBubble.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-sm">
      ✦
    </div>
    <div class="flex-1 font-serif text-sm leading-relaxed text-stone-800">
      <h4 class="font-bold text-maroon mb-2 text-base">${knowledge.titleEn}</h4>
      <div class="prose prose-stone text-stone-700 whitespace-pre-line">${currentLang === 'ta' ? knowledge.contentTa : knowledge.contentEn}</div>
    </div>
  `;

  container.appendChild(aiBubble);
  container.scrollTop = container.scrollHeight;
}

// Render 10 Great Poets and 10 Master Literary Books Catalog
function renderPoetsAndBooks() {
  // Render poets into all poet containers
  const poetsGrid = document.getElementById('poets-grid');
  if (poetsGrid) renderPoetsToContainer(poetsGrid, POETS_CATALOG);

  const poetsLitGrid = document.getElementById('poets-in-literature-grid');
  if (poetsLitGrid) renderPoetsToContainer(poetsLitGrid, POETS_CATALOG);

  // Render books into all book containers
  const booksGrid = document.getElementById('books-grid');
  if (booksGrid) renderBooksToContainer(booksGrid, BOOKS_CATALOG);

  const litWorksGrid = document.getElementById('literature-works-grid');
  if (litWorksGrid) renderBooksToContainer(litWorksGrid, BOOKS_CATALOG);
}

function openSilappatikaramModal() {
  const modal = document.getElementById('silappatikaram-modal');
  if (modal) modal.classList.remove('hidden');
}
function closeSilappatikaramModal() {
  const modal = document.getElementById('silappatikaram-modal');
  if (modal) modal.classList.add('hidden');
}

// Search Modal & Live Filter across Literature & Manuscripts
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length > 1) {
      filterLiteratureView(val);
    } else {
      renderLiteratureEras();
      renderPoetsAndBooks();
      // Reset tab state
      switchLitTab(currentLitTab);
    }
  });
}

function filterLiteratureView(query) {
  // Filter literature works
  const litWorksContainer = document.getElementById('literature-works-grid');
  const poetsContainer = document.getElementById('poets-in-literature-grid');

  if (litWorksContainer) {
    const filteredBooks = BOOKS_CATALOG.filter(b =>
      b.titleTa.toLowerCase().includes(query) ||
      b.titleEn.toLowerCase().includes(query) ||
      b.authorTa.toLowerCase().includes(query) ||
      b.authorEn.toLowerCase().includes(query) ||
      b.shortDescTa.toLowerCase().includes(query) ||
      b.shortDescEn.toLowerCase().includes(query)
    );

    if (filteredBooks.length === 0) {
      litWorksContainer.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No literature works matched "${query}".</div>`;
    } else {
      renderBooksToContainer(litWorksContainer, filteredBooks);
    }
  }

  // Filter poets
  if (poetsContainer) {
    const filteredPoets = POETS_CATALOG.filter(p =>
      p.nameTa.toLowerCase().includes(query) ||
      p.nameEn.toLowerCase().includes(query) ||
      p.descEn.toLowerCase().includes(query) ||
      p.descTa.toLowerCase().includes(query) ||
      (p.taglineEn && p.taglineEn.toLowerCase().includes(query)) ||
      (p.taglineTa && p.taglineTa.toLowerCase().includes(query))
    );

    if (filteredPoets.length === 0) {
      poetsContainer.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No poets matched "${query}".</div>`;
    } else {
      renderPoetsToContainer(poetsContainer, filteredPoets);
    }
  }

  // Show all panels so user can see filtered results in each
  document.querySelectorAll('.lit-panel').forEach(p => p.classList.remove('hidden'));
  document.querySelectorAll('.lit-tab').forEach(t => t.classList.add('active'));
}


// Helper: Render books array into a given container
function renderBooksToContainer(container, books) {
  container.innerHTML = books.map((b, idx) => `
    <div class="lit-work-card">
      <div class="lit-work-card-seal">
        <span class="text-3xl">${b.emblem || '📜'}</span>
        <span class="lit-work-num-tag">WORK #${idx + 1 < 10 ? '0' + (idx + 1) : (idx + 1)}</span>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <span class="era-badge">${currentLang === 'ta' ? b.categoryTa : b.categoryEn}</span>
          <span class="text-xs font-sans font-bold text-amber-900 bg-amber-100/80 border border-amber-300/60 px-2.5 py-0.5 rounded-full">
            ${b.meaningEn ? `${currentLang === 'ta' ? b.meaningTa : 'Meaning: ' + b.meaningEn}` : (b.collectionEn ? `${currentLang === 'ta' ? b.collectionTa : 'Collection: ' + b.collectionEn}` : (currentLang === 'ta' ? b.periodTa : b.periodEn))}
          </span>
        </div>

        <h3 class="text-xl md:text-2xl font-serif font-bold text-[#4A151B] mb-1 leading-tight">
          ${b.titleTa} — ${b.titleEn}
        </h3>

        ${b.authorTa ? `
          <div class="text-xs font-serif font-bold text-amber-800 mb-2.5">
            ✍️ Attributed Author: <strong class="text-[#4A151B]">${currentLang === 'ta' ? b.authorTa : b.authorEn}</strong>
          </div>
        ` : ''}

        <div class="bg-[#F4ECE1] border-l-4 border-[#4A151B] p-3 rounded-r-lg mb-3">
          <span class="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-500 block mb-1">
            ${currentLang === 'ta' ? 'விளக்கம் (Website Short Description)' : 'Website Short Description'}
          </span>
          <p class="text-stone-800 text-sm font-serif leading-relaxed italic font-medium">
            "${currentLang === 'ta' ? b.shortDescTa : b.shortDescTa}"
          </p>
        </div>

        ${b.shortDescEn ? `
          <p class="text-stone-700 text-xs font-serif leading-relaxed mb-3">
            ${b.shortDescEn}
          </p>
        ` : ''}

        <div class="space-y-2 border-t border-amber-100 pt-3 mb-3">
          <span class="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 block mb-1">
            ${b.id === 'tolkappiyam' || b.id === 'thirukkural' ? 'Major Sections & Divisions (பிரிவுகள்)' : (b.id === 'ettuthokai' || b.id === 'pattuppattu' ? 'Anthologies / Master Poems (பாடல்கள்)' : 'Core Themes & Literary Focus (கோட்பாடுகள்)')}
          </span>
          <div class="flex flex-wrap gap-1.5">
            ${(currentLang === 'ta' ? b.subdivisionsTa : b.subdivisionsEn).map(s => `<span class="bg-amber-100 text-amber-900 text-[11px] px-2.5 py-1 rounded font-serif font-bold border border-amber-300/60">${s}</span>`).join('')}
          </div>
        </div>

        <div class="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-2">
            ${b.hasKuralExplorer ? `
              <button onclick="showView('reader')" class="bg-[#4A151B] hover:bg-[#5F1C24] text-[#D4AF37] text-xs font-bold py-1.5 px-4 rounded shadow transition-colors flex items-center gap-1.5">
                📖 Open Kural Explorer →
              </button>
            ` : ''}
            ${b.hasSpecialSection ? `
              <button onclick="openSilappatikaramModal()" class="btn-gold-solid text-xs py-1.5 px-4 shadow flex items-center gap-1.5">
                🏛️ Epic Explorer (8 Special Sections) →
              </button>
            ` : ''}
          </div>
          <button onclick="askAIPrompt('Provide a deep literary background on ${b.titleEn} (${b.titleTa})')" class="text-xs font-bold text-[#4A151B] hover:underline flex items-center gap-1 ml-auto">
            ✦ Ask Agastya AI about ${b.titleEn} →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Helper: Render poets array into a given container
function renderPoetsToContainer(container, poets) {
  container.innerHTML = poets.map(p => `
    <div class="poet-card">
      <div class="poet-card-avatar">
        <img src="${p.image}" alt="${p.nameEn}" />
      </div>
      <div class="flex-1">
        <h4 class="text-xl font-bold font-serif text-[#4A151B] mb-0.5">${p.nameTa} — ${p.nameEn}</h4>
        <div class="text-xs font-serif font-bold text-amber-800 mb-2 italic">
          ${currentLang === 'ta' ? p.taglineTa : p.taglineEn}
        </div>
        <div class="bg-amber-50/80 border border-amber-200 rounded px-2.5 py-1 text-xs text-stone-700 font-sans inline-block mb-3 font-semibold">
          📅 ${currentLang === 'ta' ? p.periodTa : p.periodEn}
        </div>
        <p class="text-stone-700 text-sm font-serif leading-relaxed mb-3">
          ${currentLang === 'ta' ? p.descTa : p.descEn}
        </p>
        <div class="space-y-2 border-t border-amber-100 pt-3">
          <div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 block mb-1">Major Works</span>
            <div class="flex flex-wrap gap-1.5">
              ${(currentLang === 'ta' ? p.majorWorksTa : p.majorWorksEn).map(w => `<span class="bg-amber-100 text-amber-900 text-[11px] px-2 py-0.5 rounded font-serif font-bold border border-amber-300/50">${w}</span>`).join('')}
            </div>
          </div>
          <div>
            <span class="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-400 block mb-1">Themes</span>
            <div class="flex flex-wrap gap-1">
              ${p.importanceTags.map(t => `<span class="bg-stone-100 text-stone-700 text-[11px] px-2 py-0.5 rounded font-sans">${t}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="mt-3 pt-2 border-t border-stone-200 flex justify-end">
          <button onclick="askAIPrompt('Provide a detailed literary analysis on ${p.nameEn} (${p.nameTa})')" class="text-xs font-bold text-[#4A151B] hover:underline flex items-center gap-1">
            ✦ Ask Agastya AI about ${p.nameEn} →
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Poets Page by Era / Category
function filterPoetsCategory(category) {
  document.querySelectorAll('.poet-filter-pill').forEach(pill => {
    if (pill.getAttribute('data-poet-filter') === category) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  const poetsGrid = document.getElementById('poets-grid');
  if (!poetsGrid) return;

  if (category === 'all') {
    renderPoetsToContainer(poetsGrid, POETS_CATALOG);
    return;
  }

  const filtered = POETS_CATALOG.filter(p => {
    const period = p.periodEn.toLowerCase();
    if (category === 'sangam') return period.includes('bce') || period.includes('sangam') || period.includes('300');
    if (category === 'bhakti') return period.includes('bhakti') || period.includes('6th') || period.includes('8th') || period.includes('9th') || period.includes('ce 600') || period.includes('ce 800');
    if (category === 'epic') return period.includes('chola') || period.includes('12th') || period.includes('epic') || period.includes('1100');
    if (category === 'modern') return period.includes('20th') || period.includes('1882') || period.includes('modern');
    return true;
  });

  if (filtered.length === 0) {
    poetsGrid.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No poets found in this category.</div>`;
  } else {
    renderPoetsToContainer(poetsGrid, filtered);
  }
}

function filterPoetsPage(query) {
  const poetsGrid = document.getElementById('poets-grid');
  if (!poetsGrid) return;

  const q = query.toLowerCase().trim();
  if (!q) {
    renderPoetsToContainer(poetsGrid, POETS_CATALOG);
    return;
  }

  const filtered = POETS_CATALOG.filter(p =>
    p.nameTa.toLowerCase().includes(q) ||
    p.nameEn.toLowerCase().includes(q) ||
    p.descEn.toLowerCase().includes(q) ||
    p.descTa.toLowerCase().includes(q) ||
    p.periodEn.toLowerCase().includes(q) ||
    p.periodTa.toLowerCase().includes(q) ||
    (p.majorWorksEn && p.majorWorksEn.some(w => w.toLowerCase().includes(q))) ||
    (p.majorWorksTa && p.majorWorksTa.some(w => w.toLowerCase().includes(q)))
  );

  if (filtered.length === 0) {
    poetsGrid.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No poets matched "${query}".</div>`;
  } else {
    renderPoetsToContainer(poetsGrid, filtered);
  }
}

// Filter Books Page by Category
function filterBooksCategory(category) {
  document.querySelectorAll('.book-filter-pill').forEach(pill => {
    if (pill.getAttribute('data-book-filter') === category) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  const booksGrid = document.getElementById('books-grid');
  if (!booksGrid) return;

  if (category === 'all') {
    renderBooksToContainer(booksGrid, BOOKS_CATALOG);
    return;
  }

  const filtered = BOOKS_CATALOG.filter(b => {
    const cat = (b.categoryEn || '').toLowerCase();
    if (category === 'grammar') return cat.includes('grammar') || cat.includes('poetics');
    if (category === 'sangam') return cat.includes('sangam');
    if (category === 'ethics') return cat.includes('ethics') || cat.includes('ethical');
    if (category === 'epics') return cat.includes('epic');
    if (category === 'devotional') return cat.includes('devotional') || cat.includes('medieval');
    return true;
  });

  if (filtered.length === 0) {
    booksGrid.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No master works found in this category.</div>`;
  } else {
    renderBooksToContainer(booksGrid, filtered);
  }
}

function filterBooksPage(query) {
  const booksGrid = document.getElementById('books-grid');
  if (!booksGrid) return;

  const q = query.toLowerCase().trim();
  if (!q) {
    renderBooksToContainer(booksGrid, BOOKS_CATALOG);
    return;
  }

  const filtered = BOOKS_CATALOG.filter(b =>
    b.titleTa.toLowerCase().includes(q) ||
    b.titleEn.toLowerCase().includes(q) ||
    b.authorTa.toLowerCase().includes(q) ||
    b.authorEn.toLowerCase().includes(q) ||
    b.shortDescTa.toLowerCase().includes(q) ||
    b.shortDescEn.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    booksGrid.innerHTML = `<div class="text-center py-12 text-stone-500 font-serif">No master works matched "${query}".</div>`;
  } else {
    renderBooksToContainer(booksGrid, filtered);
  }
}



// Bookmarks System
function initBookmarks() {
  const btnBookmark = document.getElementById('btn-bookmark-kural');
  if (btnBookmark) {
    btnBookmark.addEventListener('click', () => {
      const kural = THIRUKKURAL_CHAPTER_1.kurals[currentKuralIndex];
      const existingIdx = savedBookmarks.findIndex(b => b.number === kural.number);

      if (existingIdx > -1) {
        savedBookmarks.splice(existingIdx, 1);
      } else {
        savedBookmarks.push(kural);
      }

      localStorage.setItem('tamizhi_bookmarks', JSON.stringify(savedBookmarks));
      renderPoemReader(currentKuralIndex);
    });
  }
}

// Authentication & Login Modal Logic
function initAuth() {
  const loginForm = document.getElementById('form-login');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      currentUser = {
        name: email.split('@')[0] || "Tamil Scholar",
        email: email,
        role: "Researcher"
      };
      localStorage.setItem('tamizhi_user', JSON.stringify(currentUser));
      updateUserUI();
      closeLoginModal();
      alert(`Vanakkam, ${currentUser.name}! You are now signed in to Tamizhi Heritage Hub.`);
    });
  }
}

function openLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.add('hidden');
}

function togglePasswordVisibility() {
  const pwdInput = document.getElementById('login-password');
  if (!pwdInput) return;
  pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
}

function loginWithGoogle() {
  currentUser = {
    name: "Tamil Scholar",
    email: "scholar@tamizhi.org",
    role: "Senior Researcher"
  };
  localStorage.setItem('tamizhi_user', JSON.stringify(currentUser));
  updateUserUI();
  closeLoginModal();
  alert(`Vanakkam! Signed in with Google as ${currentUser.name} (${currentUser.email}).`);
}

function updateUserUI() {
  const userBtn = document.getElementById('user-profile-btn');
  if (userBtn) {
    if (currentUser) {
      userBtn.innerHTML = `
        <span class="w-8 h-8 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center font-bold text-xs shadow-sm border border-amber-400">
          ${currentUser.name.charAt(0).toUpperCase()}
        </span>
      `;
      userBtn.title = `Signed in as ${currentUser.name} (${currentUser.role})`;
    } else {
      userBtn.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
      `;
      userBtn.title = "Sign In / Account";
    }
  }
}

// Manuscript Zoom Modal
function openManuscriptModal() {
  const modal = document.getElementById('manuscript-modal');
  if (modal) modal.classList.remove('hidden');
}
function closeManuscriptModal() {
  const modal = document.getElementById('manuscript-modal');
  if (modal) modal.classList.add('hidden');
}


/* =========================================================================
   20–25s CINEMATIC LANDING PAGE VIDEO ENGINE & STORYBOARD SEQUENCER
   ========================================================================= */

let videoPlaybackTime = 0;
const VIDEO_TOTAL_DURATION = 25; // 25 seconds duration
let isVideoPlaying = true;
let videoTimerInterval = null;
let currentSceneIndex = 0;
let ambientAudioCtx = null;
let ambientOscillators = [];

function initHeroVideoEngine() {
  renderStoryboardGrid();
  startVideoPlayback();
  updateVideoSceneUI(0);
}

function startVideoPlayback() {
  if (videoTimerInterval) clearInterval(videoTimerInterval);
  isVideoPlaying = true;
  updatePlayButtonUI();

  videoTimerInterval = setInterval(() => {
    if (!isVideoPlaying) return;

    videoPlaybackTime += 0.1;
    if (videoPlaybackTime >= VIDEO_TOTAL_DURATION) {
      videoPlaybackTime = 0; // Loop or prompt login
    }

    updateTimelineHUD();
    checkSceneTransition();
  }, 100);
}

function toggleVideoPlayback() {
  isVideoPlaying = !isVideoPlaying;
  const videoEl = document.getElementById('hero-bg-video');
  if (videoEl) {
    if (isVideoPlaying) videoEl.play().catch(() => { });
    else videoEl.pause();
  }
  updatePlayButtonUI();
}

function updatePlayButtonUI() {
  const btn = document.getElementById('btn-toggle-video-playback');
  if (btn) {
    btn.innerHTML = isVideoPlaying ? `⏸ Pause Story` : `▶ Play Story (25s)`;
  }
}

function updateTimelineHUD() {
  // Update timecode
  const currentSec = Math.floor(videoPlaybackTime);
  const timeStr = `00:${currentSec < 10 ? '0' + currentSec : currentSec} / 00:25`;
  const timeBadge = document.getElementById('hero-live-timecode');
  if (timeBadge) timeBadge.textContent = timeStr;

  // Update progress bar width
  const percent = Math.min(100, (videoPlaybackTime / VIDEO_TOTAL_DURATION) * 100);
  const fill = document.getElementById('hero-timeline-fill');
  if (fill) fill.style.width = `${percent}%`;
}

function checkSceneTransition() {
  const activeSceneIdx = LANDING_VIDEO_SCENES.findIndex(
    s => videoPlaybackTime >= s.timeStart && videoPlaybackTime < s.timeEnd
  );

  if (activeSceneIdx !== -1 && activeSceneIdx !== currentSceneIndex) {
    currentSceneIndex = activeSceneIdx;
    updateVideoSceneUI(activeSceneIdx);
  }
}

function updateVideoSceneUI(idx) {
  const scene = LANDING_VIDEO_SCENES[idx] || LANDING_VIDEO_SCENES[0];

  // Update caption HUD
  const sceneNum = document.getElementById('hero-scene-number');
  const sceneTitle = document.getElementById('hero-scene-title');
  const sceneSubTa = document.getElementById('hero-scene-subta');
  const sceneDesc = document.getElementById('hero-scene-desc');
  const progressText = document.getElementById('hero-timeline-progress-text');

  if (sceneNum) sceneNum.textContent = `SCENE ${scene.id} • ${scene.timecode}`;
  if (sceneTitle) sceneTitle.textContent = scene.titleEn;
  if (sceneSubTa) sceneSubTa.textContent = scene.titleTa;
  if (sceneDesc) sceneDesc.textContent = currentLang === 'ta' ? scene.descTa : scene.descEn;
  if (progressText) progressText.textContent = `Scene ${scene.id} of 9`;

  // Update Chapter Nodes
  document.querySelectorAll('.chapter-node').forEach((node, nodeIdx) => {
    if (nodeIdx === idx) node.classList.add('active');
    else node.classList.remove('active');
  });

  // Dynamic Background Visual Ken Burns Transition
  const slideLayer = document.getElementById('hero-slide-layer');
  if (slideLayer) {
    slideLayer.classList.remove('active');
    setTimeout(() => {
      slideLayer.style.backgroundImage = `url('${scene.image}')`;
      slideLayer.classList.add('active');
    }, 50);
  }

  // Play subtle crystalline chime on scene change if sound is unmuted
  if (!isHeroMuted) {
    playSceneAudioTransition(idx);
  }
}

function jumpToScene(idx) {
  const scene = LANDING_VIDEO_SCENES[idx];
  if (!scene) return;
  videoPlaybackTime = scene.timeStart;
  currentSceneIndex = idx;
  updateTimelineHUD();
  updateVideoSceneUI(idx);
}

function handleTimelineClick(e) {
  const track = document.getElementById('hero-timeline-track');
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
  videoPlaybackTime = ratio * VIDEO_TOTAL_DURATION;
  updateTimelineHUD();
  checkSceneTransition();
}

// Storyboard Gallery Modal
function openStoryboardModal() {
  const modal = document.getElementById('storyboard-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeStoryboardModal() {
  const modal = document.getElementById('storyboard-modal');
  if (modal) modal.classList.add('hidden');
}

function renderStoryboardGrid() {
  const container = document.getElementById('storyboard-grid');
  if (!container || typeof LANDING_VIDEO_SCENES === 'undefined') return;

  container.innerHTML = LANDING_VIDEO_SCENES.map((s, idx) => `
    <div class="storyboard-card group" onclick="jumpToScene(${idx}); closeStoryboardModal();">
      <div class="storyboard-thumb" style="background-image: url('${s.image}')">
        <div class="storyboard-thumb-overlay">
          <span class="text-[10px] font-mono font-bold text-[#D4AF37] bg-[#1A0A0D]/90 px-2 py-0.5 rounded border border-[#D4AF37]/50">
            ${s.timecode}
          </span>
        </div>
      </div>
      <div class="p-3.5">
        <div class="flex items-center justify-between gap-1 mb-1">
          <span class="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-500">SCENE ${s.id}</span>
          <span class="text-[10px] text-stone-400">Click to Play ↗</span>
        </div>
        <h4 class="text-xs font-serif font-bold text-[#FFFDF9] mb-1 leading-tight group-hover:text-[#D4AF37] transition-colors">
          ${s.titleEn}
        </h4>
        <p class="text-[11px] font-serif text-[#E5C158] italic line-clamp-1">
          ${s.titleTa}
        </p>
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   CRYSTAL-CLEAR HERITAGE AUDIO ENGINE (BACKGROUND MUSIC, BELL CHIMES & RAGA HARMONICS)
   ========================================================================= */

function toggleHeroAudio() {
  const videoEl = document.getElementById('hero-bg-video');
  const audioEl = document.getElementById('hero-bg-audio');
  const btn = document.getElementById('btn-hero-audio');
  const icon = document.getElementById('hero-audio-icon');
  const label = document.getElementById('hero-audio-label');
  const waves = document.getElementById('hero-audio-waves');
  const volWrapper = document.getElementById('hero-audio-volume-wrapper');
  const volSlider = document.getElementById('hero-audio-volume');

  if (!btn) return;

  isHeroMuted = !isHeroMuted;

  if (videoEl) videoEl.muted = isHeroMuted;

  if (!isHeroMuted) {
    // Sound ON
    if (audioEl) {
      const vol = volSlider ? parseInt(volSlider.value, 10) / 100 : 0.5;
      audioEl.volume = vol;
      audioEl.play().catch(err => {
        console.log("Audio play deferred to user gesture:", err);
      });
    }

    startAmbientHeritageDrone();
    playSceneAudioTransition(currentSceneIndex);

    if (icon) icon.textContent = '🔊';
    if (label) label.textContent = 'Sound Off';
    if (waves) waves.classList.remove('hidden');
    if (volWrapper) {
      volWrapper.classList.remove('hidden');
      volWrapper.classList.add('flex');
    }

    btn.classList.add('bg-[#4A151B]', 'border-[#D4AF37]');
  } else {
    // Sound OFF / Mute
    if (audioEl) {
      audioEl.pause();
    }

    stopAmbientHeritageDrone();

    if (icon) icon.textContent = '🔇';
    if (label) label.textContent = 'Sound On';
    if (waves) waves.classList.add('hidden');
    if (volWrapper) {
      volWrapper.classList.add('hidden');
      volWrapper.classList.remove('flex');
    }

    btn.classList.remove('bg-[#4A151B]', 'border-[#D4AF37]');
  }
}

function setHeroAudioVolume(val) {
  const audioEl = document.getElementById('hero-bg-audio');
  const vol = Math.max(0, Math.min(1, parseFloat(val) / 100));
  if (audioEl) {
    audioEl.volume = vol;
  }
}

function startAmbientHeritageDrone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!ambientAudioCtx) ambientAudioCtx = new AudioContext();
    if (ambientAudioCtx.state === 'suspended') ambientAudioCtx.resume();

    stopAmbientHeritageDrone();

    // High clarity master gain limiter to avoid any distortion
    const masterGain = ambientAudioCtx.createGain();
    masterGain.gain.setValueAtTime(0.06, ambientAudioCtx.currentTime);
    masterGain.connect(ambientAudioCtx.destination);

    // Warm resonant bandpass filter (simulates temple hall acoustics)
    const filter = ambientAudioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ambientAudioCtx.currentTime);
    filter.connect(masterGain);

    // Raga Mohanam Harmonic Drones (C3: 130.81Hz, G3: 196Hz, C4: 261.63Hz, E4: 329.63Hz, G4: 392Hz)
    const droneFreqs = [130.81, 196.00, 261.63, 329.63];
    droneFreqs.forEach((freq, idx) => {
      const osc = ambientAudioCtx.createOscillator();
      const oscGain = ambientAudioCtx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ambientAudioCtx.currentTime);

      // Gentle pulsating envelope
      oscGain.gain.setValueAtTime(0.001, ambientAudioCtx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.04 / (idx + 1.2), ambientAudioCtx.currentTime + 1.5);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start();
      ambientOscillators.push({ osc, gain: oscGain });
    });
  } catch (err) {
    console.log("Ambient heritage audio initialized");
  }
}

function stopAmbientHeritageDrone() {
  if (ambientOscillators.length > 0) {
    ambientOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.exponentialRampToValueAtTime(0.0001, ambientAudioCtx.currentTime + 0.3);
        setTimeout(() => osc.stop(), 350);
      } catch (e) { }
    });
    ambientOscillators = [];
  }
}

// Crystalline Temple Chime & Flute Phrasing on Scene Change
function playSceneAudioTransition(sceneIdx) {
  try {
    if (!ambientAudioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      ambientAudioCtx = new AudioContext();
    }
    if (ambientAudioCtx.state === 'suspended') ambientAudioCtx.resume();

    const t = ambientAudioCtx.currentTime;

    // 1. Crystal Brass Bell Chime (Ganta resonance)
    const bellOsc = ambientAudioCtx.createOscillator();
    const bellOsc2 = ambientAudioCtx.createOscillator();
    const bellGain = ambientAudioCtx.createGain();

    const bellPitch = 523.25; // C5 (High Sa)
    bellOsc.type = 'sine';
    bellOsc.frequency.setValueAtTime(bellPitch, t);

    // Overtone harmonic
    bellOsc2.type = 'sine';
    bellOsc2.frequency.setValueAtTime(bellPitch * 2.01, t);

    bellGain.gain.setValueAtTime(0.08, t);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);

    bellOsc.connect(bellGain);
    bellOsc2.connect(bellGain);
    bellGain.connect(ambientAudioCtx.destination);

    bellOsc.start(t);
    bellOsc2.start(t);
    bellOsc.stop(t + 2.3);

    // 2. Soft Bamboo Flute Melodic Ornament in Raga Mohanam
    const mohanamNotes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const targetFreq = mohanamNotes[sceneIdx % mohanamNotes.length];

    const fluteOsc = ambientAudioCtx.createOscillator();
    const fluteGain = ambientAudioCtx.createGain();

    fluteOsc.type = 'sine';
    fluteOsc.frequency.setValueAtTime(targetFreq * 0.98, t + 0.1);
    fluteOsc.frequency.exponentialRampToValueAtTime(targetFreq, t + 0.35); // subtle glissando / meend

    fluteGain.gain.setValueAtTime(0.001, t + 0.1);
    fluteGain.gain.exponentialRampToValueAtTime(0.05, t + 0.35);
    fluteGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);

    fluteOsc.connect(fluteGain);
    fluteGain.connect(ambientAudioCtx.destination);

    fluteOsc.start(t + 0.1);
    fluteOsc.stop(t + 1.9);
  } catch (e) { }
}

/* =========================================================================
   SCROLL FADE-OUT & VIDEO PAUSE MANAGER
   ========================================================================= */

function initHeroScrollManager() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroEl = document.getElementById('hero-cinematic-stage');
    if (!heroEl) return;

    const heroHeight = heroEl.offsetHeight || 600;

    // Calculate fade opacity: 1 at top, fades out smoothly as user scrolls down past 200px
    const fadeThreshold = heroHeight * 0.55;
    const opacity = Math.max(0, Math.min(1, 1 - (scrollY / fadeThreshold)));
    const translateY = Math.min(60, scrollY * 0.2);

    const fadeElements = document.querySelectorAll('.hero-fade-on-scroll');
    fadeElements.forEach(el => {
      el.style.opacity = opacity;
      el.style.transform = `translateY(${translateY}px)`;
      if (opacity <= 0.05) {
        el.style.pointerEvents = 'none';
        el.style.visibility = 'hidden';
      } else {
        el.style.pointerEvents = 'auto';
        el.style.visibility = 'visible';
      }
    });

    // Auto-pause video and audio when user scrolls completely down to read content
    const videoEl = document.getElementById('hero-bg-video');
    const audioEl = document.getElementById('hero-bg-audio');
    if (scrollY >= heroHeight) {
      if (videoEl && !videoEl.paused) videoEl.pause();
      if (audioEl && !audioEl.paused) audioEl.pause();
      if (!isHeroMuted && ambientAudioCtx && ambientAudioCtx.state === 'running') {
        ambientAudioCtx.suspend();
      }
    } else {
      if (isVideoPlaying && videoEl && videoEl.paused) videoEl.play().catch(() => { });
      if (!isHeroMuted && audioEl && audioEl.paused) audioEl.play().catch(() => { });
      if (!isHeroMuted && ambientAudioCtx && ambientAudioCtx.state === 'suspended') {
        ambientAudioCtx.resume();
      }
    }
  }, { passive: true });
}

// Particle Sparks & Ambient Light Leaks Animation
function initHeroParticles() {
  const canvas = document.getElementById('hero-particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  function resize() {
    canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
    canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.75,
    speedX: (Math.random() - 0.5) * 0.35,
    speedY: -Math.random() * 0.4 - 0.1,
    alpha: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.3 ? '#D4AF37' : '#FFFDF9'
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}


