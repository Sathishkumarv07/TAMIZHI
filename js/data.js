// Data store for Tamil Heritage Hub (Tamizhi - தமிழ்)

const APP_TEXTS = {
  en: {
    brandName: "தமிழி",
    brandSubtitle: "Tamil Heritage Hub",
    navExplore: "Explore",
    navLiterature: "Literature",
    navPoets: "Poets",
    navBooks: "Books",
    navDictionary: "Dictionary",
    navAITamil: "AI Tamil",
    heroTagline: "காலம் கடந்து வாழும் தமிழ்",
    heroTitleTa: "தமிழ் மரபுக் களஞ்சியம்",
    heroTitleEn: "TAMIL HERITAGE HUB",
    heroSubtitle: "Explore the language, literature, poets, books, manuscripts and stories that shaped Tamil heritage.",
    btnExploreArchive: "EXPLORE THE ARCHIVE",
    btnTravelTime: "TRAVEL THROUGH TIME",
    archiveBadge: "THE ARCHIVE",
    archiveTitle: "A Journey Through Time",
    archiveSubtitle: "Explore the rich tapestry of Tamil literature, spanning millennia. From the ancient poetic landscapes of the Sangam era to the vibrant narratives of modern writers, discover the enduring spirit of a classical language.",
    searchPlaceholder: "Search manuscripts, poets, or eras...",
    exploreTexts: "Explore Texts",
    viewAuthors: "View Authors →",
    readContext: "Read Context",
    askAI: "Ask AI",
    translationLabel: "TRANSLATION",
    wordExplanationTitle: "Word Explanation",
    literaryBackgroundTitle: "LITERARY BACKGROUND",
    manuscriptRefTitle: "MANUSCRIPT & SOURCES",
    aiScholarName: "Agastya AI",
    aiScholarSubtitle: "Virtual Tamil Scholar Online",
    aiWelcome: "வணக்கம் (Vanakkam). I am a digital scholar specializing in ancient Tamil literature and history. We can explore the Ettuthogai, dive into the architectural marvels of the Cholas, or discuss the nuances of Tolkappiyam. How may I assist your research today?",
    footerQuote: "© Tamil Heritage Hub. One Language. A Thousand Stories.",
    archiveSources: "Archive Sources",
    methodology: "Methodology",
    eraDiscovery: "Era Discovery",
    literatureMap: "Literature Map",
    privacy: "Privacy",
    specialitiesTitle: "Specialities of the Tamil Language (தமிழ் மொழியின் தனிச்சிறப்புகள்)",
    specialitiesSubtitle: "Discover why Tamil stands unique among the world's ancient classical languages through its phonetic melody, unbroken antiquity, secular ethics, and global inscriptions.",
    dictionaryTitle: "Classical Tamil Dictionary & Etymology (தமிழ் அகராதி)",
    dictionarySubtitle: "Explore ancient Tamil root words, etymological origins, and classical literary occurrences."
  },
  ta: {
    brandName: "தமிழி",
    brandSubtitle: "தமிழ் பாரம்பரிய மையம்",
    navExplore: "முகப்பு",
    navLiterature: "இலக்கியம்",
    navPoets: "புலவர்கள்",
    navBooks: "நூல்கள்",
    navDictionary: "அகராதி",
    navAITamil: "அகத்தியர் AI",
    heroTagline: "காலம் கடந்து வாழும் தமிழ்",
    heroTitleTa: "தமிழ் மரபுக் களஞ்சியம்",
    heroTitleEn: "TAMIL HERITAGE HUB",
    heroSubtitle: "தமிழ் மொழியின் தொன்மை, இலக்கியங்கள், புலவர்கள், நூல்கள், ஓலைச்சுவடிகள் மற்றும் வரலாற்றுக் கதைகளை ஆராயுங்கள்.",
    btnExploreArchive: "களஞ்சியத்தை ஆராய்க",
    btnTravelTime: "காலப் பயணம் செய்க",
    archiveBadge: "நூல் காப்பகம்",
    archiveTitle: "காலப் பயணம் - தமிழ் இலக்கிய வரலாறு",
    archiveSubtitle: "ஆயிரக்கணக்கான ஆண்டுகளின் தமிழிலக்கிய வரலாற்றை அறிந்திடுங்கள். சங்க காலம் தொட்டு இக்காலப் படைப்புகள் வரை தமிழின் தணியாத தமிழ்ச் செறிவை உணருங்கள்.",
    searchPlaceholder: "ஓலைச்சுவடிகள், புலவர்கள், அல்லது காலங்களைத் தேடுக...",
    exploreTexts: "நூல்களை ஆராய்க",
    viewAuthors: "புலவர்களைக் காண்க →",
    readContext: "வரலாற்றுப் பின்னணி",
    askAI: "AI விளக்கம் கேட்க",
    translationLabel: "மொழிபெயர்ப்பு",
    wordExplanationTitle: "சொற்பொருள் விளக்கம்",
    literaryBackgroundTitle: "இலக்கியப் பின்னணி",
    manuscriptRefTitle: "சுவடி ஆதாரங்கள்",
    aiScholarName: "அகத்தியன் AI",
    aiScholarSubtitle: "தமிழ் பேரறிஞர் இணையச் சேவை",
    aiWelcome: "வணக்கம். நான் தமிழ் இலக்கிய மற்றும் வரலாற்றுத் துறையில் தேர்ச்சி பெற்ற அகத்தியன் AI. எட்டுத்தொகை, தொல்காப்பியம், அல்லது திருக்குறள் பற்றி ஏதேனும் வினாக்கள் உள்ளதா? உங்களின் ஆய்வுக்கு எப்படி உதவட்டும்?",
    footerQuote: "© தமிழி பாரம்பரிய மையம். ஒரு மொழி. ஆயிரம் கதைகள்.",
    archiveSources: "ஆவண மூலங்கள்",
    methodology: "ஆய்வு முறைமை",
    eraDiscovery: "காலக் கண்டுபிடிப்பு",
    literatureMap: "இலக்கிய வரைபடம்",
    privacy: "தனியுரிமை",
    specialitiesTitle: "தமிழ் மொழியின் தனிச்சிறப்புகள்",
    specialitiesSubtitle: "உலகின் மிகத் தொன்மையான செம்மொழியான தமிழின் ஒலிநயம், இலக்கணச் செறிவு, உலகப் பொதுமறை மற்றும் கடல் கடந்த வரலாற்றுப் பெருமை.",
    dictionaryTitle: "செந்தமிழ் அகராதி & வேர்ச்சொல் ஆய்வு",
    dictionarySubtitle: "பண்டையத் தமிழ் சொற்களின் வேர்ச்சொல், பொருள் மற்றும் சங்க இலக்கிய மேற்கோள்கள்."
  }
};

// Specialities of the Tamil Language Database
const TAMIL_SPECIALITIES = [
  {
    icon: "👑",
    titleEn: "Unbroken Classical Antiquity (உலகின் மூத்த செம்மொழி)",
    titleTa: "உலகின் மூத்த செம்மொழி & தொன்மை",
    quoteTa: "“கல் தோன்றி மண் தோன்றாக் காலத்தே வாளோடு முன் தோன்றிய மூத்த குடி”",
    descEn: "One of the longest-surviving classical languages in human history, with an unbroken literary and spoken tradition for over 2,500+ years. Officially designated as India's first Classical Language in 2004.",
    descTa: "2500 ஆண்டுகளுக்கும் மேலாகத் தொடர்ச்சியான எழுத்து மற்றும் பேச்சு மரபைக் கொண்ட உலகின் தலைசிறந்த செம்மொழி.",
    badge: "2,500+ YEARS CONTINUITY"
  },
  {
    icon: "🔤",
    titleEn: "Phonetic Melody & Unique 'Zha' (ழ கரச் சிறப்பு)",
    titleTa: "ழ கரச் சிறப்பு & இனிதான ஒலிநயம்",
    quoteTa: "“தமிழ் என்பதை உச்சரிக்கும் போதே நாவில் அமிழ்தூறும்”",
    descEn: "Celebrated for its unique retroflex approximant letter 'ழ' (Zha) found distinctly in Tamil (as in தமிழ், வாழ்க, அமிழ்து). Its 247 letters are scientifically classified by vocal articulation duration (Maathirai).",
    descTa: "தமிழ் மொழிக்கே உரித்தான சிறப்பு 'ழ' கர ஒலிப்பும், மாத்திரை அளவுடன் அமைந்த அறிவியல் பூர்வமான எழுத்து அமைப்பும்.",
    badge: "UNIQUE ழ (ZHA) LETTER"
  },
  {
    icon: "📜",
    titleEn: "Poetic Anthropology of Thinai (தொல்காப்பிய திணை வளம்)",
    titleTa: "தொல்காப்பிய இலக்கண வளம் & திணை மரபு",
    quoteTa: "“அகம்புறம் என மனித வாழ்வை இரு கூறாகப் பகுத்த அறிவியற் தமிழ்”",
    descEn: "Tolkappiyam systematized human life into Thinai—categorizing romantic inner emotions (Akam across 5 landscapes: Kurinji, Mullai, Marutham, Neithal, Palai) and ethical public duties (Puram).",
    descTa: "இயற்கையோடு இயைந்த ஐந்திணைக் கோட்பாடும், அகப்பொருள் மற்றும் புறப்பொருள் என வாழ்வியலைப் பகுத்த செம்மரபு.",
    badge: "TOLKAPPIYAM THINAI SCIENCE"
  },
  {
    icon: "⚖️",
    titleEn: "Secular Universality of Thirukkural (உலகப் பொதுமறை)",
    titleTa: "உலகப் பொதுமறை - திருக்குறள் நெறி",
    quoteTa: "“யாதும் ஊரே யாவரும் கேளிர்” — கணியன் பூங்குன்றனார்",
    descEn: "Tamil literature pioneered global secular ethics. Masterpieces like Thirukkural offer timeless philosophy on virtue, governance, and love without advocating any specific religion, sect, or dogma.",
    descTa: "எந்த ஒரு மதத்தையும் குறிக்காமல் உலக மனித குலம் முழுமைக்கும் பொதுவான அறநெறியைப் போதிக்கும் திருக்குறள்.",
    badge: "UNIVERSAL SECULAR ETHICS"
  },
  {
    icon: "⚓",
    titleEn: "Global Epigraphy & Inscriptions (கடல்கடந்த தமிழும் கல்வெட்டுகளும்)",
    titleTa: "கடல் கடந்த தமிழும் 1,00,000+ கல்வெட்டுகளும்",
    quoteTa: "“திரைகடலோடியும் திரவியம் தேடு” — ஔவையார்",
    descEn: "More than 60% of all stone and copper-plate inscriptions discovered by the Archaeological Survey of India are in Tamil. Tamil maritime trade inscriptions span Egypt, Sumatra, Thailand, and China.",
    descTa: "இந்தியாவில் கண்டெடுக்கப்பட்ட மொத்த கல்வெட்டுகளில் 60%க்கும் அதிகமானவை தமிழ் மொழியில் அமைந்த வரலாற்றுச் சான்றுகள்.",
    badge: "100,000+ EPIGRAPHIC RECORDS"
  },
  {
    icon: "📜",
    titleEn: "Linguistic Purity & Diglossia (செந்தமிழும் கொடுந்தமிழும்)",
    titleTa: "செந்தமிழும் கொடுந்தமிழும்",
    quoteTa: "“செந்தமிழ் நாடெனும் போதினிலே - இன்பத் தேன்வந்து பாயுது காதினிலே” — பாரதியார்",
    descEn: "Maintains a dual register of high classical written Tamil (Senthamizh) and vibrant regional spoken dialects (Kodunthamizh), adapting dynamically to print, digital fonts, and artificial intelligence.",
    descTa: "இலக்கியச் செறிவான செந்தமிழும், வட்டாரப் பேச்சுத் தமிழும் இணக்கமாகத் திகழும் இருமொழி வழக்கு.",
    badge: "SENTHAMIZH & KODUNTHAMIZH"
  }
];

// Comprehensive Catalog of 10 Great Tamil Poets
const POETS_CATALOG = [
  {
    id: "thiruvalluvar",
    nameTa: "திருவள்ளுவர்",
    nameEn: "Thiruvalluvar",
    taglineTa: "திருவள்ளுவர் — உலகப் பொதுமறையின் குரல்",
    taglineEn: "The Voice of Universal Secular Ethics",
    periodTa: "பண்டைய தமிழ் இலக்கிய மரபு (துல்லியமான பிறந்த ஆண்டு நிச்சயமற்றது)",
    periodEn: "Ancient Tamil literary tradition (Exact historical date is uncertain)",
    descEn: "Thiruvalluvar is traditionally regarded as one of the most important figures in Tamil ethical literature. His Tirukkural presents concise couplets dealing with human values, ethical conduct, society, governance and love.",
    descTa: "திருவள்ளுவர் தமிழ் அற இலக்கியத்தின் மிக முக்கியமான சான்றோராகக் கருதப்படுகிறார். இவரது திருக்குறள் மனித விழுமியங்கள், அறநெறி, சமூகம், அரசியல் மற்றும் அன்பைக் கூறும் செறிவான குறட்பாக்களைக் கொண்டது.",
    majorWorksTa: ["திருக்குறள் (Tirukkural — 1,330 குறள்கள் / 133 அதிகாரங்கள்)"],
    majorWorksEn: ["Tirukkural (1,330 couplets / 133 chapters across Aram, Porul, Inbam)"],
    importanceTags: ["Ethics & Virtue", "Governance & Statecraft", "Social Life", "Friendship & Education", "Family & Human Conduct"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "ilango_adigal",
    nameTa: "இளங்கோ அடிகள்",
    nameEn: "Ilango Adigal",
    taglineTa: "இளங்கோ அடிகள் — காப்பியத்தின் குரல்",
    taglineEn: "The Epic Voice of Justice & Culture",
    periodTa: "சங்க மருவிய காலம் (காலக்கணிப்பு விவாதத்திற்குரியது)",
    periodEn: "Generally associated with the post-Sangam period (Exact dating is debated)",
    descEn: "Ilango Adigal is traditionally credited with Silappathikaram, a major Tamil epic centered on Kannagi and Kovalan and rich in descriptions of Tamil society, culture, music and ethics.",
    descTa: "இளங்கோ அடிகள் தமிழ் ஐம்பெருங்காப்பியங்களில் ஒன்றான சிலப்பதிகாரத்தை இயற்றியவர். கண்ணகி மற்றும் கோவலன் வரலாற்றினூடே பண்டையத் தமிழ்ச் சமூகம், நீதி, இசை மற்றும் நடனத்தை இணைத்துக் காட்டியவர்.",
    majorWorksTa: ["சிலப்பதிகாரம் (Silappathikaram — ஐம்பெருங்காப்பியம்)"],
    majorWorksEn: ["Silappathikaram (One of the Five Great Epics)"],
    importanceTags: ["Literature & Justice", "Society & Women", "Trade & Urban Life", "Music & Dance", "Cultural Heritage"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "avvaiyar",
    nameTa: "ஔவையார்",
    nameEn: "Avvaiyar",
    taglineTa: "ஔவையார் — எளிய சொற்களில் ஆழமான அறிவு",
    taglineEn: "Profound Wisdom in Simple Expression",
    periodTa: "சங்க காலம் & பிந்தைய மரபுகள் (ஒன்றுக்கும் மேற்பட்ட வரலாற்று ஆளுமைகள்)",
    periodEn: "Associated with multiple historical figures across Sangam & later eras",
    descEn: "The name Avvaiyar represents an important tradition of Tamil women poets. Different periods contain figures known by this name, whose works became influential in Tamil ethical and educational traditions.",
    descTa: "ஔவையார் என்பது தமிழ் பெண் கவிஞர்களின் உன்னத மரபைக் குறிக்கிறது. பல்வேறு காலகட்டங்களில் வாழ்ந்த ஔவையாரின் படைப்புகள் தமிழ் அறநெறி மற்றும் ஆரம்பக் கல்வி மரபில் ஆழமான தாக்கத்தை ஏற்படுத்தின.",
    majorWorksTa: ["சங்க பாடல்கள் (Purananuru, etc.)", "ஆத்திச்சூடி (Aathichudi)", "கொன்றை வேந்தன்", "மூதுரை", "நல்வழி"],
    majorWorksEn: ["Sangam Poems (Purananuru, etc.)", "Aathichudi", "Kondrai Vendhan", "Moodurai", "Nalvazhi"],
    importanceTags: ["Wisdom & Ethics", "Early Education", "Social Values", "Simple Tamil Expression", "Women's Literary Voice"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kapilar",
    nameTa: "கபிலர்",
    nameEn: "Kapilar",
    taglineTa: "கபிலர் — இயற்கையின் கவிஞர்",
    taglineEn: "The Poet of Nature & Kurinji Landscape",
    periodTa: "சங்க காலம் (206 பாடல்கள் பாடிய பெருங்கவிஞர்)",
    periodEn: "Sangam period (Prolific poet credited with 206 classical poems)",
    descEn: "Kapilar was a major Sangam poet whose poetry connects human emotion with the landscapes and natural world of ancient Tamilakam.",
    descTa: "கபிலர் சங்க காலத்தின் மிக முக்கியமான கவிஞர். மனித உணர்வுகளையும் காதலையும் இயற்கை நிலப்பரப்போடு (குறிப்பாக குறிஞ்சித் திணை) இணைத்துப் பாடியவர்.",
    majorWorksTa: ["குறிஞ்சிப்பாட்டு (Kurinjippattu)", "புறநானூறு பாடல்கள்", "இன்னா நாற்பது"],
    majorWorksEn: ["Kurinjippattu", "Purananuru Verses", "Inna Narpathu"],
    importanceTags: ["Kurinji Landscape", "Nature & Ecology", "Love Poetry", "Royal Friendship (Pari)", "Human Relationships"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nakkirar",
    nameTa: "நக்கீரர்",
    nameEn: "Nakkirar",
    taglineTa: "நக்கீரர் — சங்கத் தமிழின் முக்கியக் குரல்",
    taglineEn: "Master Voice of Sangam Classical Expression",
    periodTa: "சங்க இலக்கிய மரபு (பிந்தைய மரபுகளிலும் குறிக்கப்படுபவர்)",
    periodEn: "Associated with Sangam & later literary traditions",
    descEn: "Nakkirar is an important name in Tamil literary tradition, particularly associated with classical poetry and the literary tradition surrounding Murugan.",
    descTa: "நக்கீரர் தமிழ் இலக்கிய மரபின் தலைசிறந்த பெயர். சங்க இலக்கியப் பாடல்கள் மற்றும் முருகப் பெருமான் மீதான பக்தி நெறி மரபோடு தொடர்புடையவர்.",
    majorWorksTa: ["திருமுருகாற்றுப்படை (Tirumurukatrupadai — பத்துப்பாட்டு)"],
    majorWorksEn: ["Tirumurukatrupadai (Pattuppattu Collection)"],
    importanceTags: ["Murugan Devotion", "Classical Tamil Expression", "Landscape & Pilgrimage", "Sangam Poetics"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "manikkavacakar",
    nameTa: "மாணிக்கவாசகர்",
    nameEn: "Manikkavacakar",
    taglineTa: "மாணிக்கவாசகர் — பக்தியின் உருகும் குரல்",
    taglineEn: "The Melting Voice of Devotional Ecstasy",
    periodTa: "பக்தி காலம் (சைவ சமயக் குரவர்)",
    periodEn: "Bhakti Period (Prominent Shaiva Devotional Master)",
    descEn: "Manikkavacakar's poetry is renowned for its intense devotional expression and emotional depth. Thiruvasagam became one of the important works of Tamil Shaiva devotional literature.",
    descTa: "மாணிக்கவாசகரின் கவிதைகள் ஆழமான பக்தி மற்றும் உருக்கமான உணர்ச்சிக்குக் பெயர் பெற்றவை. இவரது திருவாசகம் சைவப் பக்தி இலக்கியத்தின் தலையாய நூலாகும்.",
    majorWorksTa: ["திருவாசகம் (Thiruvasagam)", "திருக்கோவையார் (Thirukovaiyar)"],
    majorWorksEn: ["Thiruvasagam", "Thirukovaiyar"],
    importanceTags: ["Devotion & Surrender", "Spiritual Ecstasy", "Love for Shiva", "Emotional Expression"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "nammalvar",
    nameTa: "நம்மாழ்வார்",
    nameEn: "Nammalvar",
    taglineTa: "நம்மாழ்வார் — பக்தித் தமிழின் ஆழமான குரல்",
    taglineEn: "The Deep Voice of Vaishnava Devotion",
    periodTa: "பக்தி காலம் (12 ஆழ்வார்களில் முதன்மையானவர்)",
    periodEn: "Bhakti Period (Regarded as chief among the 12 Alvars)",
    descEn: "Nammalvar is one of the most influential Alvar poets, and Tiruvaymoli is a major work of Tamil Vaishnava devotional literature.",
    descTa: "நம்மாழ்வார் ஆழ்வார்களில் மிகவும் செல்வாக்கு மிக்கவர். இவரது திருவாய்மொழி தமிழ் வைணவ பக்தி இலக்கியத்தின் வேதம் எனப் போற்றப்படுகிறது.",
    majorWorksTa: ["திருவாய்மொழி (Tiruvaymoli — 4000 திவ்யப்பிரபந்தம்)"],
    majorWorksEn: ["Tiruvaymoli (Naalayira Divya Prabandham)"],
    importanceTags: ["Vaishnava Devotion", "Spiritual Longing", "Divine Love for Vishnu", "Religious Philosophy"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "andal",
    nameTa: "ஆண்டாள்",
    nameEn: "Andal",
    taglineTa: "ஆண்டாள் — பக்தியும் கவிதையும் இணைந்த குரல்",
    taglineEn: "The Divine Synthesis of Poetry & Mystic Love",
    periodTa: "பக்தி காலம் (ஆழ்வார்களில் ஒரே பெண் கவிஞர்)",
    periodEn: "Bhakti Period (The unique woman poet among the 12 Alvars)",
    descEn: "Andal occupies a distinctive place in Tamil devotional literature. Her Tiruppavai remains one of the best-known works of the Tamil Vaishnava tradition.",
    descTa: "தமிழ் பக்தி இலக்கியத்தில் ஆண்டாள் தனித்துவமான இடம் வகிக்கிறார். இவரது திருப்பாவை வைணவ மரபின் மிகவும் புகழ்பெற்ற மார்கழிப் பாடலாகும்.",
    majorWorksTa: ["திருப்பாவை (Tiruppavai)", "நாச்சியார் திருமொழி (Nachiyar Tirumoli)"],
    majorWorksEn: ["Tiruppavai", "Nachiyar Tirumoli"],
    importanceTags: ["Mystic Devotion", "Women's Literary Voice", "Spiritual Bridehood", "Margazhi Tradition"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "kambar",
    nameTa: "கம்பர்",
    nameEn: "Kambar",
    taglineTa: "கம்பர் — காப்பியத் தமிழின் பேராற்றல்",
    taglineEn: "Kavichakravarthi — The Master of Epic Grandeur",
    periodTa: "12 ஆம் நூற்றாண்டு (சோழர் காலம்)",
    periodEn: "12th Century CE (Imperial Chola Era)",
    descEn: "Kambar transformed the Ramayana tradition into a major Tamil literary work through the poetic richness and expressive possibilities of Tamil.",
    descTa: "கம்பர் இராமாயணக் கதையைத் தமிழின் இணையற்ற கவித்துவ வளத்தோடு கம்பராமாயணமாகப் படைத்துத் தமிழ் காப்பிய உலகிற்குப் பேராற்றல் சேர்த்தவர்.",
    majorWorksTa: ["இராமாவதாரம் / கம்பராமாயணம்", "சிலை எழுபது", "சடகோபர் அந்தாதி", "சரஸ்வதி அந்தாதி", "கங்கை புராணம்"],
    majorWorksEn: ["Kamba Ramayanam (Ramavataram)", "Silai Ezhupathu", "Sadagopar Andhadhi", "Saraswathi Andhadhi", "Gangai Puranam"],
    importanceTags: ["Epic Poetry", "Virutham Poetic Rhythm", "Imagery & Adaptation", "Classical Vocabulary"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "bharatiyar",
    nameTa: "சுப்பிரமணிய பாரதியார்",
    nameEn: "Subramania Bharati",
    taglineTa: "பாரதியார் — புதுமையின் கவிஞர்",
    taglineEn: "Mahakavi — The Revolutionary Poet of Modernity",
    periodTa: "இக்காலத் தமிழ் காலம் (1882–1921)",
    periodEn: "Modern Tamil Era (1882–1921)",
    descEn: "Subramania Bharati brought a powerful modern voice to Tamil poetry, combining literary innovation with ideas of freedom, equality, education and social change.",
    descTa: "சுப்பிரமணிய பாரதியார் தமிழ் கவிதையில் சக்திவாய்ந்த நவீனக் குரலைக் கொண்டுவந்தார். விடுதலை, சமத்துவம், பெண் விடுதலை மற்றும் சமூக மாற்றத்தை இணைத்துப் பாடியவர்.",
    majorWorksTa: ["குயில்பாட்டு (Kuyil Pattu)", "கண்ணன் பாட்டு", "பாஞ்சாலி சபதம்", "தேசிய & விடுதலைப் பாடல்கள்"],
    majorWorksEn: ["Kuyil Pattu", "Kannan Pattu", "Panchali Sabatham", "Nationalist & Freedom Songs"],
    importanceTags: ["Freedom & Nationalism", "Women's Empowerment", "Social Reform & Equality", "Modern Tamil Poetry"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"
  }
];

// Comprehensive Catalog of 10 Master Tamil Literary Works
const BOOKS_CATALOG = [
  {
    id: "tolkappiyam",
    num: 1,
    emblem: "📜",
    titleTa: "தொல்காப்பியம்",
    titleEn: "Tolkāppiyam",
    authorTa: "தொல்காப்பியர் (Tolkappiyar)",
    authorEn: "Tolkappiyar",
    periodTa: "பண்டைய தமிழ் இலக்கிய மரபு",
    periodEn: "Ancient Tamil Literary Tradition",
    categoryTa: "இலக்கணம் & சொல்லியல்",
    categoryEn: "Grammar & Poetics",
    shortDescTa: "தமிழ் மொழியின் இலக்கணம், சொல்லியல் மற்றும் இலக்கியக் கோட்பாடுகளைப் புரிந்துகொள்ள உதவும் மிக முக்கியமான தொன்மையான நூல்.",
    shortDescEn: "Tolkāppiyam is an ancient Tamil grammatical and literary treatise organized into three major sections: Eḻuttatikāram, Collatikāram, and Poruḷatikāram. It provides foundational material for understanding Tamil poetics of Akam and Puram.",
    subdivisionsTa: ["எழுத்ததிகாரம் — Eḻuttatikāram", "சொல்லதிகாரம் — Collatikāram", "பொருளதிகாரம் — Poruḷatikāram (அகம் & புறம்)"],
    subdivisionsEn: ["Eḻuttatikāram (Phonology)", "Collatikāram (Syntax & Morphology)", "Poruḷatikāram (Poetics of Akam & Puram)"]
  },
  {
    id: "ettuthokai",
    num: 2,
    emblem: "🪶",
    titleTa: "எட்டுத்தொகை",
    titleEn: "Ettuthokai",
    meaningTa: "எட்டு பெரும் தொகுப்புகள்",
    meaningEn: "Eight Anthologies",
    authorTa: "சங்கப் புலவர்கள் பலர்",
    authorEn: "Various Sangam Poets",
    periodTa: "சங்க காலம் (300 BCE – 300 CE)",
    periodEn: "Sangam Era (300 BCE – 300 CE)",
    categoryTa: "சங்க இலக்கியம்",
    categoryEn: "Sangam Literature",
    shortDescTa: "சங்ககாலத் தமிழின் பல்வேறு குரல்களையும் வாழ்க்கை அனுபவங்களையும் பாதுகாத்த எட்டு முக்கியத் தொகுப்புகளின் பெரும் களஞ்சியம்.",
    shortDescEn: "Ettuthokai is a collection of eight major anthologies containing poetry dealing with themes of Akam and Puram: love, nature, kingship, war, generosity, and social life.",
    subdivisionsTa: ["நற்றிணை", "குறுந்தொகை", "ஐங்குறுநூறு", "பதிற்றுப்பத்து", "பரிபாடல்", "கலித்தொகை", "அகநானூறு", "புறநானூறு"],
    subdivisionsEn: ["Narrinai", "Kuruntokai", "Ainkurunuru", "Pathitrupathu", "Paripadal", "Kalittokai", "Akananuru", "Purananuru"]
  },
  {
    id: "pattuppattu",
    num: 3,
    emblem: "🏞️",
    titleTa: "பத்துப்பாட்டு",
    titleEn: "Pattuppāṭṭu",
    meaningTa: "பத்து நீண்ட பாடல்கள்",
    meaningEn: "Ten Idylls",
    authorTa: "சங்கப் பெரும் புலவர்கள்",
    authorEn: "Sangam Master Poets",
    periodTa: "சங்க காலம் (300 BCE – 300 CE)",
    periodEn: "Sangam Literature",
    categoryTa: "சங்க இலக்கியம்",
    categoryEn: "Sangam Literature",
    shortDescTa: "பழந்தமிழ் நாட்டின் இயற்கை, நகரங்கள், மக்கள் வாழ்க்கை மற்றும் அரச மரபுகளைப் பாடல்களின் வழியாகக் காட்டும் பத்து நீண்ட பாடல்களின் தொகுப்பு.",
    shortDescEn: "Pattuppattu consists of ten long idylls providing rich literary descriptions of ancient Tamil landscapes, people, rulers, cities, travel, and cultural life.",
    subdivisionsTa: ["திருமுருகாற்றுப்படை", "பொருநராற்றுப்படை", "சிறுபாணாற்றுப்படை", "பெரும்பாணாற்றுப்படை", "முல்லைப்பாட்டு", "நெடுநல்வாடை", "மதுரைக்காஞ்சி", "குறிஞ்சிப்பாட்டு", "பட்டினப்பாலை", "மலைபடுகடாம்"],
    subdivisionsEn: ["Tirumurukatrupadai", "Porunararrupadai", "Sirupanarrupadai", "Perumpanarrupadai", "Mullaippattu", "Nedunalvadai", "Maduraikkanci", "Kurinjippattu", "Pattinappalai", "Malaipatukatam"]
  },
  {
    id: "thirukkural",
    num: 4,
    emblem: "⚖️",
    titleTa: "திருக்குறள்",
    titleEn: "Tirukkural",
    authorTa: "திருவள்ளுவர் (Thiruvalluvar)",
    authorEn: "Thiruvalluvar",
    periodTa: "பண்டைய அற இலக்கியக் காலம்",
    periodEn: "Ancient Tamil Ethical Tradition",
    categoryTa: "அறநெறி / தத்துவம் / இலக்கியம்",
    categoryEn: "Ethics / Philosophy / Literature",
    shortDescTa: "இரண்டு வரிகளில் ஆழமான வாழ்க்கைச் சிந்தனைகளை வழங்கும் உலகப் புகழ்பெற்ற தமிழின் அறநூல்.",
    shortDescEn: "The Tirukkural contains 1,330 couplets in 133 chapters organized around three major divisions: Aram (Virtue & Ethical Living), Porul (Society & Governance), and Inbam (Love).",
    subdivisionsTa: ["அறம் — Aram (Virtue & Ethical Living)", "பொருள் — Porul (Society, Governance & Practical Life)", "இன்பம் — Inbam (Love & Relationships)"],
    subdivisionsEn: ["Aram (Virtue & Ethics)", "Porul (Society & Statecraft)", "Inbam (Love & Relationships)"],
    hasKuralExplorer: true
  },
  {
    id: "naladiyar",
    num: 5,
    emblem: "🪷",
    titleTa: "நாலடியார்",
    titleEn: "Nālaḍiyār",
    authorTa: "சமண முனிவர்கள் (Jain Ascetics)",
    authorEn: "Jain Ascetic Scholars",
    collectionTa: "பதினெண்கீழ்க்கணக்கு",
    collectionEn: "Pathinenkilkanakku",
    categoryTa: "அற இலக்கியம்",
    categoryEn: "Ethical Literature",
    shortDescTa: "வாழ்க்கையின் நிலையாமை, அறம் மற்றும் மனித நடத்தையைப் பற்றி சிந்திக்க வைக்கும் நான்கு வரிப் பாடல்களின் சிறப்புத் தொகுப்பு.",
    shortDescEn: "Naladiyar consists of 400 quatrains and is an important work of ethical and didactic Tamil literature exploring virtue, impermanence, human behaviour, and moral conduct.",
    subdivisionsTa: ["Virtue (அறம்)", "Impermanence (நிலையாமை)", "Human Behaviour (மனித நடத்தை)", "Simplicity (எளிமை)", "Moral Conduct (ஒழுக்க நெறி)"],
    subdivisionsEn: ["Virtue (Aram)", "Impermanence (Nilaiyāmai)", "Human Behaviour", "Simplicity", "Moral Conduct"]
  },
  {
    id: "silappatikaram",
    num: 6,
    emblem: "🏛️",
    titleTa: "சிலப்பதிகாரம்",
    titleEn: "Silappatikāram",
    authorTa: "இளங்கோ அடிகள் (Ilango Adigal)",
    authorEn: "Ilango Adigal",
    periodTa: "சங்க மருவிய காப்பியக் காலம்",
    periodEn: "Epic Literature (Five Great Epics)",
    categoryTa: "பெருங்காப்பியம்",
    categoryEn: "Epic Literature",
    shortDescTa: "கண்ணகியின் கதை வழியாக நீதி, சமூக வாழ்க்கை, பெண்ணின் வலிமை மற்றும் தமிழர் பண்பாட்டை வெளிப்படுத்தும் பெருங்காப்பியம்.",
    shortDescEn: "Silappatikaram is one of the Five Great Tamil Epics. Its central story involves Kannagi, Kovalan, and Madhavi, portraying ancient Tamil society, culture, cities, music, and justice.",
    hasSpecialSection: true,
    subdivisionsTa: ["Story (கதை)", "Characters (மாந்தர்கள்)", "Literary Themes (கோட்பாடுகள்)", "Tamil Culture (பண்பாடு)", "Three Cities (நகரங்கள்)", "Music & Dance (இசையும் கூத்தும்)", "Historical Context (வரலாறு)", "Sources (சுவடிகள்)"],
    subdivisionsEn: ["Story", "Characters", "Literary Themes", "Tamil Culture", "Cities", "Music & Dance", "Historical Context", "Sources"]
  },
  {
    id: "manimekalai",
    num: 7,
    emblem: "🪷",
    titleTa: "மணிமேகலை",
    titleEn: "Maṇimēkalai",
    authorTa: "சீத்தலைச் சாத்தனார் (Seethalai Sathanar)",
    authorEn: "Seethalai Sathanar",
    periodTa: "கி.பி. 5 ஆம் நூற்றாண்டு",
    periodEn: "5th Century CE",
    categoryTa: "பௌத்தக் காப்பியம்",
    categoryEn: "Buddhist Epic",
    shortDescTa: "அறம், துறவு, கருணை மற்றும் புத்த சிந்தனைகளை மையமாகக் கொண்ட முக்கியமான தமிழ்க் காப்பியம்.",
    shortDescEn: "Manimekalai is one of the major Tamil epics traditionally associated with Buddhist thought, following Manimekalai, daughter of Kovalan and Madhavi, on her path of compassion and renunciation.",
    subdivisionsTa: ["அறம் (Virtue)", "துறவு (Renunciation)", "கருணை (Compassion)", "புத்த சிந்தனைகள் (Buddhist Philosophy)", "அமுதசுரபி (Sacred Alms Bowl)"],
    subdivisionsEn: ["Virtue & Dharma", "Renunciation & Asceticism", "Compassion (Karuna)", "Buddhist Epistemology", "Amudhasurabi Alms Bowl"]
  },
  {
    id: "tiruvasagam",
    num: 8,
    emblem: "🛕",
    titleTa: "திருவாசகம்",
    titleEn: "Tiruvasagam",
    authorTa: "மாணிக்கவாசகர் (Manikkavacakar)",
    authorEn: "Manikkavacakar",
    periodTa: "பக்தி காலம் (9 ஆம் நூற்றாண்டு)",
    periodEn: "Bhakti Period (Shaivism)",
    categoryTa: "பக்தி இலக்கியம்",
    categoryEn: "Bhakti Literature",
    shortDescTa: "இறை பக்தியின் ஆழமான உணர்வையும் ஆன்மிக அனுபவத்தையும் கவிதையாக வெளிப்படுத்தும் தமிழின் முக்கிய பக்தி இலக்கியப் படைப்பு.",
    shortDescEn: "Tiruvasagam is an essential work of Tamil Shaiva devotional literature, acclaimed for its intense emotional expression, divine surrender, and spiritual ecstasy.",
    subdivisionsTa: ["பக்தி (Devotion)", "இறை அனுபவம் (Divine Experience)", "சரணாகதி (Surrender)", "ஆன்மிக உணர்வு (Spiritual Ecstasy)", "சிவபக்தி (Shaiva Mysticism)"],
    subdivisionsEn: ["Devotion (Bhakti)", "Divine Experience", "Surrender (Saranagati)", "Spiritual Ecstasy", "Shaiva Mysticism"]
  },
  {
    id: "tiruvaymoli",
    num: 9,
    emblem: "✨",
    titleTa: "திருவாய்மொழி",
    titleEn: "Tiruvāymoḻi",
    authorTa: "நம்மாழ்வார் (Nammalvar)",
    authorEn: "Nammalvar",
    periodTa: "பக்தி காலம் (9 ஆம் நூற்றாண்டு)",
    periodEn: "Bhakti Period (Vaishnavism)",
    categoryTa: "வைணவ பக்தி இலக்கியம்",
    categoryEn: "Vaishnava Bhakti Literature",
    shortDescTa: "இறை அன்பையும் ஆன்மிக ஏக்கத்தையும் தமிழ்ப் பக்திக் கவிதையின் வழியாக வெளிப்படுத்தும் முக்கியமான படைப்பு.",
    shortDescEn: "Tiruvaymoli is the crowning masterpiece of Nammalvar and the Tamil Vaishnava devotional tradition, revered as the Tamil Veda of divine love and mystical longing for Vishnu.",
    subdivisionsTa: ["பக்தி (Devotion)", "இறை அன்பு (Divine Love)", "ஆன்மிகத் தேடல் (Spiritual Quest)", "சரணாகதி (Surrender)", "இறைவனுடனான உறவு (Divine Communion)"],
    subdivisionsEn: ["Devotion (Bhakti)", "Divine Love", "Spiritual Quest", "Surrender (Saranagati)", "Divine Communion"]
  },
  {
    id: "kambaramayanam",
    num: 10,
    emblem: "👑",
    titleTa: "கம்பராமாயணம்",
    titleEn: "Kambaramayanam",
    authorTa: "கம்பர் (Kambar)",
    authorEn: "Kambar",
    periodTa: "இடைக்காலம் (12 ஆம் நூற்றாண்டு)",
    periodEn: "Medieval Tamil (12th Century CE)",
    categoryTa: "காப்பியப் பெருங்கவிதை",
    categoryEn: "Epic Poetry",
    shortDescTa: "இராமாயணக் கதையைத் தமிழின் செறிவான கவிதை மரபில் மறுவடிவமைத்த பெரும் காப்பியப் படைப்பு.",
    shortDescEn: "Kambar's Ramavataram, commonly known as Kambaramayanam, is a monumental work of medieval Tamil literature notable for epic storytelling, rich poetry, imagery, and characterization.",
    subdivisionsTa: ["காப்பியக் கதைக்கூறு (Epic Storytelling)", "கவிதைச் செறிவு (Poetry)", "உவமை நயம் (Imagery)", "பாத்திரப் படைப்பு (Characterization)", "தமிழ்ச் செறிவு (Tamil Literary Expression)"],
    subdivisionsEn: ["Epic Storytelling", "Poetic Virtuosity", "Metaphor & Imagery", "Characterization", "Tamil Literary Expression"]
  }
];

const AI_KNOWLEDGE_BASE = {
  aham: {
    titleEn: "अகம் (Aham) vs. புறம் (Puram) in Sangam Poetry",
    contentEn: `The classical Sangam literature (c. 300 BCE – 300 CE) broadly categorizes poetry into two primary themes:

1. **अகம் (Aham) - The Inner World**:
   Deals with personal, subjective experiences, primarily love, romance, devotion, and family emotions. In Aham poems, characters are anonymous and represented as archetypes across five landscapes (Thinai):
   - *Kurinji* (Mountain): Union of lovers
   - *Mullai* (Forest): Patient waiting
   - *Marutham* (Agricultural plain): Infidelity / lover's quarrel
   - *Neithal* (Seashore): Lorn longing / grief
   - *Palai* (Arid wasteland): Separation / journey through desert.

2. **புறம் (Puram) - The Outer World**:
   Deals with public life, warfare, kingship, bravery, generosity, ethics, and social virtue. Names of real kings, poets, and battlefields are explicitly recorded in Puram poetry!`,
    contentTa: `சங்க இலக்கியப் பாடல்கள் அகப்பொருள், புறப்பொருள் என இரு பெரும் பிரிவுகளாகப் பிரிக்கப்பட்டுள்ளன:

1. **அகம் (உள்ளுணர்ச்சிகள் & அன்பு)**:
   தலைவன் தலைவியரின் காதலையும் உணர்வுகளையும் குறிக்கும். இது குறிஞ்சி, முல்லை, மருதம், நெய்தல், பாலை எனும் ஐந்து திணைகளாகப் பகுக்கப்பட்டுள்ளது.

2. **புறம் (வீரம் & கொடை)**:
   மன்னர்களின் வீரம், கொடை, அறப்போர், ஆட்சி முறை மற்றும் சமூக வாழ்வியலைப் பாடும்.`
  },
  thirukkural: {
    titleEn: "Structure of Thirukkural (திருக்குறள் அமைப்பு)",
    contentEn: `Thirukkural is composed of 1,330 couplets (Kurals) arranged into 133 chapters (Adhigaram), each containing 10 couplets.

It is structured into three main books (Muphaal):
1. **அறத்துப்பால் (Aram / Virtue)** - 38 Chapters (Virtue, Asceticism, Ethics)
2. **பொருட்பால் (Porul / Wealth & Statecraft)** - 70 Chapters (Governance, Economy, Citizenship)
3. **இன்பத்துப்பால் (Inbam / Love & Romance)** - 25 Chapters (Love, Affection, Emotional Nuance)

It is universally acclaimed for its non-denominational secular character and eternal wisdom.`,
    contentTa: `திருக்குறள் 133 அதிகாரங்களையும், அதிகாரத்திற்கு 10 குறள்கள் வீதம் 1,330 குறட்பாக்களையும் கொண்டது.

1. அறத்துப்பால் - 38 அதிகாரங்கள்
2. பொருட்பால் - 70 அதிகாரங்கள்
3. இன்பத்துப்பால் - 25 அதிகாரங்கள்`
  },
  default: {
    titleEn: "Scholarly Insights from Agastya AI",
    contentEn: `Tamil is one of the world's longest-surviving classical languages, with an unbroken literary tradition spanning over 2,500 years.

Key facets of Tamil heritage:
- **Tolkappiyam**: Ancient grammar detailing linguistic science and poetic landscape anthropology (Thinai).
- **Sangam Anthologies**: 8 Anthologies (Ettuthogai) and 10 Idylls (Pattupattu).
- **Bhakti Hymns**: 12 Thirumurai (Saivism) and 4000 Divya Prabandham (Vaishnava).
- **Inscriptions**: Over 100,000 stone & copper plate inscriptions across South and Southeast Asia.`,
    contentTa: `தமிழ் மொழி 2500 ஆண்டுகளுக்கு மேற்பட்ட தொடர்ச்சியான இலக்கியப் பாரம்பரியத்தைக் கொண்ட உலகின் உன்னதமான செம்மொழியாகும்.`
  }
};

// 20-25s Cinematic Landing & Login Page Video Storyboard Scenes
const LANDING_VIDEO_SCENES = [
  {
    id: 1,
    timeStart: 0,
    timeEnd: 3,
    timecode: "00:00 – 00:03",
    titleEn: "Dawn over ancient Tamil land. The journey begins.",
    titleTa: "பண்டைய தமிழ் நிலத்தின் விடியல் — பெருமைமிகு வரலாற்றுப் பயணம் துவங்குகிறது.",
    descEn: "Golden sunrise illuminates the eternal stone gopurams of ancient Tamilakam.",
    descTa: "சோழ, பாண்டிய, சேர மன்னர்களின் விண்ணுயர்ந்த கோபுரங்கள் மீது உதிக்கிறது ஞானப் பொன் விடியல்.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1920&q=85",
    videoBg: "https://assets.mixkit.co/videos/preview/mixkit-sun-setting-over-an-ancient-temple-42777-large.mp4",
    theme: "dawn"
  },
  {
    id: 2,
    timeStart: 3,
    timeEnd: 6,
    timecode: "00:03 – 00:06",
    titleEn: "Ancient Tamil inscriptions – our timeless roots.",
    titleTa: "கல்வெட்டு எழுத்துக்கள் — தமிழின் காலத்தால் அழியாத வேர்கள்.",
    descEn: "Brahmi rock edicts and cave glyphs cut deep into granite bedrock 2,500 years ago.",
    descTa: "குகைகளிலும் கருங்கல் சுவர்களிலும் அழியாச் சுவடுகளாய் நிலைத்து நிற்கும் தமிழ்ப் பிராமி எழுத்துக்கள்.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    theme: "inscriptions"
  },
  {
    id: 3,
    timeStart: 6,
    timeEnd: 9,
    timecode: "00:06 – 00:09",
    titleEn: "Palm-leaf manuscripts – wisdom preserved.",
    titleTa: "ஓலைச்சுவடிகள் — தலைமுறைகள் கடந்த ஞானக் கருவூலம்.",
    descEn: "Delicate palmyra leaves incised with iron styluses safeguarding grammatical treatises.",
    descTa: "எழுத்தாணியால் செதுக்கப்பட்ட தொல்காப்பியமும் சங்க இலக்கியமும் போற்றிப் பாதுகாக்கப்பட்ட ஓலைச்சுவடிகள்.",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1920&q=85",
    theme: "manuscripts"
  },
  {
    id: 4,
    timeStart: 9,
    timeEnd: 12,
    timecode: "00:09 – 00:12",
    titleEn: "Classical literature – words that shaped generations.",
    titleTa: "செவ்விலக்கியங்கள் — தலைமுறைகளை வார்த்தெடுத்த சொற்களஞ்சியம்.",
    descEn: "1,330 couplets of Thirukkural and the poignant anthologies of Sangam poetry.",
    descTa: "உலகப் பொதுமறையாம் திருக்குறளும் எட்டுத்தொகை பத்துப்பாட்டின் சங்க இலக்கிய வரிகளும்.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1920&q=85",
    theme: "literature"
  },
  {
    id: 5,
    timeStart: 12,
    timeEnd: 15,
    timecode: "00:12 – 00:15",
    titleEn: "Temples, art and culture – the soul of Tamil heritage.",
    titleTa: "கோயில்கள், கலை மற்றும் பண்பாடு — தமிழ் மரபின் ஆன்மா.",
    descEn: "Thousand-pillar granite halls echoing with Yazh musical scales and Natya dance.",
    descTa: "ஆயிரங்கால் மண்டபங்களின் சிற்ப வனப்பும், சிலப்பதிகாரத்தின் இசையும் கூத்தும் பண்பாட்டு உயிர்ப்பும்.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    theme: "temples"
  },
  {
    id: 6,
    timeStart: 15,
    timeEnd: 18,
    timecode: "00:15 – 00:18",
    titleEn: "From palm leaves to printed books – the journey continues.",
    titleTa: "சுவடிகளில் இருந்து அச்சு நூல்களுக்கு — அறிவுப் பயணம் தொடர்கிறது.",
    descEn: "Scholarly renaissance led by U.V. Swaminatha Iyer printing rare literary manuscripts.",
    descTa: "தமிழ் தாத்தா உ.வே.சா அவர்களின் சுவடித் தேடலும், நவீன அச்சு நூல்களாய் வெளிவந்த வரலாற்றுப் புரட்சியும்.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    theme: "printing"
  },
  {
    id: 7,
    timeStart: 18,
    timeEnd: 21,
    timecode: "00:18 – 00:21",
    titleEn: "Entering the digital age – heritage in your hands.",
    titleTa: "டிஜிட்டல் யுகத்தில் தமிழ் — உங்கள் விரல் நுனியில் வரலாறு.",
    descEn: "Interactive digital archives, AI literary exploration, and timeless knowledge on screens.",
    descTa: "தமிழி டிஜிட்டல் தளம் வழியாக இலக்கிய ஆய்வும், ஏஐ நுண்ணறிவும், குரல் வழி வாசிப்பும் யாவருக்கும்.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1920&q=85",
    theme: "digital"
  },
  {
    id: 8,
    timeStart: 21,
    timeEnd: 24,
    timecode: "00:21 – 00:24",
    titleEn: "Our legacy. Our language. Our pride.",
    titleTa: "நமது மரபு. நமது மொழி. நமது பெருமை.",
    descEn: "Tamil Heritage Hub: An unbroken civilizational treasure spanning millennia.",
    descTa: "எழில்மிகு 'ழ' கரத்தின் பொற்கம்பீரம் — காலம் கடந்து வாழும் உயர்தனிச் செம்மொழி.",
    image: "assets/logo.png",
    theme: "pride"
  },
  {
    id: 9,
    timeStart: 24,
    timeEnd: 25,
    timecode: "00:24 – 00:25",
    titleEn: "தமிழ் மரபுக் களஞ்சியம் • TAMIL HERITAGE HUB",
    titleTa: "காலம் கடந்து வாழும் தமிழ் — மீண்டும் வரவேற்கிறோம்!",
    descEn: "Welcome back to the portal of eternal Tamil wisdom.",
    descTa: "அறிவும் பண்பாடும் நிறைந்த தமிழ்க் களஞ்சியத்திற்கு அன்புடன் வரவேற்கிறோம்.",
    image: "assets/logo.png",
    theme: "login"
  }
];

