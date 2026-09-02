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
    filterAllSpecialities: "All Pillars (அனைத்தும்)",
    filterOrigins: "Antiquity & Keeladi",
    filterPhonetics: "Phonetics & 'ழ' Sound",
    filterEthics: "Universal Ethics",
    filterEpigraphy: "Inscriptions",
    filterLiterature: "Thinai Poetics",
    filterModern: "Print & AI Age",
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
    literaryBackgroundTitle: "இலக்கியப் பின்னணி",
    manuscriptRefTitle: "சுவடி ஆதாரங்கள்",
    aiScholarName: "அகத்தியன் AI",
    aiScholarSubtitle: "தமிழ் பேரறிஞர் இணையச் சேவை",
    aiWelcome: "வணக்கம். நான் தமிழ் இலக்கிய மற்றும் வரலாற்றுத் துறையில் தேர்ச்சி பெற்ற அகத்தியன் AI. எட்டுத்தொகை, தொல்காப்பியம், அல்லது திருக்குறள் பற்றி ஏதேனும் வினாக்கள் உள்ளதா? உங்களின் ஆய்வுக்கு எப்படி உதவட்டும்?",
    footerQuote: "© தமிழிபாரம்பரிய மையம். ஒரு மொழி. ஆயிரம் கதைகள்.",
    archiveSources: "ஆவண மூலங்கள்",
    methodology: "ஆய்வு முறைமை",
    eraDiscovery: "காலக் கண்டுபிடிப்பு",
    literatureMap: "இலக்கிய வரைபடம்",
    privacy: "தனியுரிமை",
    specialitiesTitle: "தமிழ் மொழியின் தனிச்சிறப்புகள்",
    specialitiesSubtitle: "உலகின் மிகத் தொன்மையான செம்மொழியான தமிழின் ஒலிநயம், இலக்கணச் செறிவு, உலகப் பொதுமறை மற்றும் கடல்கடந்த வரலாற்றுப் பெருமை.",
    filterAllSpecialities: "அனைத்துப் பெருமைகள்",
    filterOrigins: "தொன்மையும் கீழடியும்",
    filterPhonetics: "ஒலிநயமும் 'ழ'கரமும்",
    filterEthics: "உலகப் பொதுமறை",
    filterEpigraphy: "கல்வெட்டுச் சான்றுகள்",
    filterLiterature: "திணை மரபியல்",
    filterModern: "அச்சு & கணித்தமிழ்",
    dictionaryTitle: "செந்தமிழ் அகராதி & வேர்ச்சொல் ஆய்வு",
    dictionarySubtitle: "பண்டையத் தமிழ் சொற்களின் வேர்ச்சொல், பொருள் மற்றும் சங்க இலக்கிய மேற்கோள்கள்."
  }
};

// Specialities of the Tamil Language Database (8 Pillars of Tamil Heritage)
const TAMIL_SPECIALITIES = [
  {
    id: "epigraphy-inscriptions",
    category: "epigraphy",
    icon: "🏛️",
    badge: "55%+ ASI INSCRIPTIONS",
    image: "assets/ancient_inscriptions.jpg",
    titleEn: "Ancient Inscriptions",
    titleTa: "பண்டைக் கல்வெட்டுகள் & சாசனங்கள்",
    quoteTa: "“இந்தியாவில் கண்டெடுக்கப்பட்ட கல்வெட்டுகளில் 55% மேலானவை தமிழ்க் கல்வெட்டுகளே!”",
    quoteEn: "“Over 55% of all epigraphical inscriptions discovered across India are in Tamil.”",
    descEn: "Explore the epigraphic evidence carved in stone across millennia, revealing the foundational roots and evolving script of the Tamil language in historical contexts.",
    descTa: "ஆயிரக்கணக்கான ஆண்டுகளாகக் கற்பாறைகளிலும் செப்பேடுகளிலும் செதுக்கப்பட்ட தமிழ்க் கல்வெட்டுகள், எழுத்து வளர்ச்சி மற்றும் வரலாற்றுச் சான்றுகளை வெளிப்படுத்துகின்றன.",
    detailedArticleEn: "Tamil possesses the richest epigraphical record of any South Asian language. Out of approximately 100,000 stone and copper inscriptions recorded by the Archaeological Survey of India (ASI), over 55,000 to 60,000 are in Tamil. These record detailed democratic village elections (such as the Uttaramerur Inscription of 920 CE describing the Kudavolai ballot system), temple architecture, land deeds, and taxation.",
    detailedArticleTa: "இந்தியத் தொல்லியல் துறையினால் ஆவணப்படுத்தப்பட்ட கல்வெட்டுகளில் 55 ஆயிரத்திற்கும் மேற்பட்டவை தமிழ்க் கல்வெட்டுகளாகும். கி.பி. 920-ஆம் ஆண்டின் உத்திரமேரூர் கல்வெட்டு 'குடவோலை முறை' என்னும் மக்களாட்சித் தேர்தல் முறையை உலகிற்குப் பறைசாற்றுகிறது.",
    keyPointsEn: [
      "Over 55% of all ASI-documented inscriptions across India are in Tamil.",
      "The Uttaramerur Inscription (920 CE) outlines democratic local body voting & recall mechanisms.",
      "Maritime trade records discovered at the Red Sea port of Berenike, Egypt.",
      "Tamil merchant guild inscriptions (*Nanadesi*, *Ayyavole 500*) found across Southeast Asia."
    ],
    keyPointsTa: [
      "இந்தியக் கல்வெட்டுகளில் 55%-க்கும் மேல் தமிழிலேயே உள்ளன.",
      "உத்திரமேரூர் கல்வெட்டு மூலம் வெளிப்படும் குடவோலை மக்களாட்சித் தேர்தல் முறை.",
      "செங்கடல் எகிப்து துறைமுகம் வரை கண்டறியப்பட்ட சங்ககாலத் தமிழ் எழுத்துப் பானைகள்."
    ],
    interactiveType: "timeline",
    historicalSources: ["Epigraphia Indica", "ASI Epigraphy Branch"]
  },
  {
    id: "classical-manuscripts",
    category: "origins",
    icon: "📜",
    badge: "OLAICHUVADI HERITAGE",
    image: "assets/classical_manuscripts.jpg",
    titleEn: "Classical Manuscripts",
    titleTa: "செவ்வியல் ஓலைச்சுவடிகள்",
    quoteTa: "“எழுத்தாணியால் பனைஓலையில் பொறிக்கப்பட்ட தமிழ்ச் செவ்வியல் பொக்கிஷங்கள்”",
    quoteEn: "“Classical Tamil treasures incised with metal styluses on palm leaves.”",
    descEn: "Delve into the fragile beauty of Olaichuvadi (palm-leaf manuscripts), the traditional medium that preserved profound literary works, medicine, and scientific wisdom.",
    descTa: "தமிழ் இலக்கியங்கள், மருத்துவம் மற்றும் அறிவியல் அறிவை தலைமுறைகள் கடந்து பாதுகாத்துத் தந்த பாரம்பரிய ஓலைச்சுவடி மரபு.",
    detailedArticleEn: "Olaichuvadi (dried palmyra palm leaves) served as the primary canvas for Tamil knowledge preservation for over two millennia. Scribes used metal styluses (Ezhuthani) to incise characters, rub lampblack and leaf oils to highlight text, and bind the bundled leaves with wooden covers and cords. Scholars like U. V. Swaminatha Iyer spent lifetimes recovering thousands of lost Sangam palm-leaf manuscripts from rural homes across Tamil Nadu.",
    detailedArticleTa: "பனையோலைகளைப் பதப்படுத்தி, எழுத்தாணியால் எழுத்துகளைப் பொறித்து விளக்கெண்ணெய் மற்றும் மூலிகைச் சாறுகளால் மைக்குத்திப் பாதுகாக்கப்பட்ட ஓலைச்சுவடிகள் தமிழரின் அறிவுப் பெட்டகமாகும். உ.வே. சாமிநாதையர் போன்ற தமிழறிஞர்கள் ஊர் ஊராகச் சென்று பழந்தமிழ்ச் சுவடிகளை மீட்டெடுத்து அச்சு வடிவில் வழங்கினர்.",
    keyPointsEn: [
      "Preserved Sangam canons, Tolkappiyam, Siddha medicine, and astronomy for centuries.",
      "Written with precision using iron Ezhuthani styluses on dried Palmyra leaves.",
      "Historic recovery of thousands of lost manuscripts by U.V. Swaminatha Iyer.",
      "Preserved today at the Government Oriental Manuscripts Library & Tanjore Saraswathi Mahal."
    ],
    keyPointsTa: [
      "சங்க இலக்கியங்கள், சித்த மருத்துவம் மற்றும் வானியல் அறிவைப் பாதுகாத்த ஊடகம்.",
      "இரும்பெழுத்தாணியால் பனையோலையில் பொறிக்கப்பட்ட நுட்பமான எழுத்து மரபு.",
      "உ.வே.சா அவர்களின் ஓலைச்சுவடி மீட்புப் பணி மூலம் அச்சிடப்பட்ட பழந்தமிழ் நூல்கள்."
    ],
    interactiveType: "timeline",
    historicalSources: ["Government Oriental Manuscripts Library (GOML)", "U.V. Swaminatha Iyer Library"]
  },
  {
    id: "cultural-personification",
    category: "modern",
    icon: "👑",
    badge: "TAMIL THAI REVERENCE",
    image: "assets/cultural_personification.jpg",
    titleEn: "Cultural Personification",
    titleTa: "தமிழ்த்தாய் பண்பாட்டு வடிவம்",
    quoteTa: "“நீராரும் கடலுடுத்த நிலமடந்தைக் கெழிலொழுகும்... தமிழணங்கே!” — மனோன்மணீயம் சுந்தரனார்",
    quoteEn: "“Praise be to Tamil Thai, the divine mother who embodies the language itself.”",
    descEn: "Discover the reverence of Tamil Thai, the deified mother figure representing the language itself, symbolizing its eternal grace, classical purity, and enduring spirit.",
    descTa: "தமிழ் மொழியையே தெய்வத் தாயாக உருவகித்துப் போற்றும் தமிழ்த்தாய் மரபு, மொழியின் தூய்மையையும் காலத்தைக் கடந்த பண்பாட்டு ஆற்றலையும் குறிக்கிறது.",
    detailedArticleEn: "Tamil is one of the very few languages in the world that is personified and revered as a mother goddess—Tamil Thai. Celebrated in the official state anthem 'Tamil Thai Vazhthu' composed by Manonmaniam Sundaram Pillai, she represents the eternal youthfulness (Kanni Tamizh), euphonic sweetness (Senthamizh), and sovereign dignity of the Tamil people across continents.",
    detailedArticleTa: "உலகில் தமிழ் மொழி மட்டுமே அன்னை வடிவமாக உருவகிக்கப்பட்டு 'தமிழ்த்தாய்' எனப் போற்றப்படுகிறது. மனோன்மணீயம் சுந்தரனார் இயற்றிய 'தமிழ்த்தாய் வாழ்த்து' மூலம் மாநில வாழ்த்துப் பாடலாக ஒலிக்கும் தமிழ்த்தாய், தமிழ் மொழியின் என்றும் இளமை மாறாத் தன்மையையும் கன்னித் தமிழின் செழுமையையும் குறிக்கிறது.",
    keyPointsEn: [
      "Unique global tradition of deifying the language as a mother figure (Tamil Thai).",
      "Immortalized in the official state anthem 'Tamil Thai Vazhthu'.",
      "Symbolizes classical purity (Senthamizh), literary grace, and unbroken heritage.",
      "Celebrated across international Tamil diaspora from Singapore to Canada."
    ],
    keyPointsTa: [
      "மொழியையே தாயாக உருவகித்துப் போற்றும் உலகின் அரிய பண்பாட்டு மரபு.",
      "மாநில அரசு வாழ்த்துப் பாடலான 'தமிழ்த்தாய் வாழ்த்து' பாடல்.",
      "கன்னித் தமிழின் செழுமையையும் செம்மொழித் தூய்மையையும் பறைசாற்றும் வடிவம்."
    ],
    interactiveType: "facts",
    historicalSources: ["Manonmaniam Sundaram Pillai", "Tamil Nadu State Heritage Archives"]
  },
  {
    id: "antiquity",
    category: "origins",
    icon: "👑",
    badge: "5,000+ YEARS CONTINUITY",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Keeladi_museum_item.jpg/640px-Keeladi_museum_item.jpg",
    titleEn: "Unbroken Classical Antiquity",
    titleTa: "உலகின் மூத்த செம்மொழி & தொன்மை",
    quoteTa: "“கல் தோன்றி மண் தோன்றாக் காலத்தே வாளோடு முன் தோன்றிய மூத்த குடி”",
    quoteEn: "“The ancient people who emerged with valor even before stone and earth were formed.”",
    descEn: "One of the longest-surviving classical languages in human history, with an unbroken literary and spoken tradition for millennia. Designated as India's first Classical Language in 2004.",
    descTa: "ஆயிரக்கணக்கான ஆண்டுகளாகத் தொடர்ச்சியான எழுத்து மற்றும் பேச்சு மரபைக் கொண்டு இன்றும் இயங்கும் உலகின் முதன்மைச் செம்மொழி.",
    detailedArticleEn: "Unlike ancient Greek, Latin, or Classical Hebrew—which evolved into modern derivatives or became confined to liturgical use—Tamil has maintained an unbroken chain of living speech and literature from the Sangam era (c. 6th century BCE) right to the digital age.",
    detailedArticleTa: "இலத்தீன், பண்டைக் கிரேக்கம் போன்ற மொழிகள் வழக்கொழிந்து போன நிலையிலும், தமிழ் மொழி 2,500-க்கும் மேற்பட்ட ஆண்டுகளாகத் தனது தனித்தன்மையையும் செழுமையையும் இழக்காமல் இன்றும் உலகெங்கும் கோடிக்கணக்கான மக்களின் நாவில் தவழும் உயிருள்ள செம்மொழியாகத் திகழ்கிறது.",
    keyPointsEn: [
      "Officially declared India's 1st Classical Language (2004) meeting strict antiquity criteria.",
      "Documented unbroken literary lineage from 6th century BCE to modern times.",
      "Spoken natively by over 85+ million people worldwide across 60+ countries."
    ],
    keyPointsTa: [
      "2004-இல் இந்தியாவின் முதல் செம்மொழியாக அதிகாரப்பூர்வ அங்கீகாரம் பெற்றது.",
      "கி.மு. 6-ஆம் நூற்றாண்டு முதல் தற்காலம் வரை தொடர்ச்சியான இலக்கியப் பாரம்பரியம்."
    ],
    interactiveType: "timeline",
    historicalSources: ["UNESCO Courier", "Archaeological Survey of India"]
  },
  {
    id: "zha-phonetics",
    category: "phonetics",
    icon: "🔤",
    badge: "UNIQUE ழ (ZHA) LETTER",
    image: "assets/zha_phonetics.jpg",
    titleEn: "Phonetic Melody & The Unique 'ழ' (Zha)",
    titleTa: "ழகரச் சிறப்பு & அறிவியல் ஒலிநயம்",
    quoteTa: "“தமிழ் என்பதை உச்சரிக்கும் போதே நாவில் அமிழ்தூறும்”",
    quoteEn: "“The very pronunciation of the word 'Tamizh' drips sweet nectar on the tongue.”",
    descEn: "Celebrated for the unique voiced retroflex approximant letter 'ழ' (Zha). Tamil's 247 letters are scientifically classified by vocal articulation duration (Maathirai) and harmonic points.",
    descTa: "தமிழ் மொழிக்கே உரித்தான தனித்துவமான 'ழ' கர ஒலிப்பும், மாத்திரை அளவுடன் அமைந்த அறிவியல் பூர்வமான எழுத்தொலி அமைப்பும்.",
    detailedArticleEn: "The letter 'ழ' (transliterated as 'zh') is a voiced retroflex approximant produced by curling the tip of the tongue back towards the hard palate without touching it. It is the signature sound of the Tamil tongue.",
    detailedArticleTa: "நாக்கின் நுனியை மேல்நோக்கி வளைத்து, அண்ணத்தைத் தொடாமல் காற்றுடன் எழுப்பப்படும் 'ழ' கர ஒலி உலக மொழிகள் பலவற்றில் காணக்கிடைக்காத தனிப்பெரும் ஒலிவடிவம் ஆகும்.",
    keyPointsEn: [
      "Unique voiced retroflex approximant sound found almost exclusively in Tamil.",
      "Scientific 'Maathirai' time-metric system governing precise metric duration of every syllable."
    ],
    keyPointsTa: [
      "நாக்கின் தனித்த வளைவால் பிறக்கும் உலகளாவிய அரிய ஒலிநயம்.",
      "ஒவ்வொரு ஒலிக்கும் கால அளவை வரையறுக்கும் 'மாத்திரை' அறிவியல் நெறி."
    ],
    interactiveType: "audio",
    historicalSources: ["Tolkappiyam - Pirappiyal"]
  },
  {
    id: "keeladi-civilization",
    category: "origins",
    icon: "🏺",
    badge: "6TH CENTURY BCE ROOTS",
    image: "assets/keeladi_civilization.jpg",
    titleEn: "Keeladi & Sangam Urban Civilization",
    titleTa: "கீழடி அகழாய்வும் சங்ககால நகர நாகரிகமும்",
    quoteTa: "“வைகை நதிக்கரையில் மலர்ந்த மாபெரும் எழுத்தறிவு நாகரிகம்”",
    quoteEn: "“A grand literate urban civilization that blossomed along the Vaigai river.”",
    descEn: "Groundbreaking excavations at Keeladi on the Vaigai river basin scientifically prove widespread secular literacy, advanced metallurgy, and sophisticated urban planning among ancient Tamils in 580 BCE.",
    descTa: "வைகை நதிக்கரைக் கீழடி அகழாய்வு மூலம் கி.மு. 6-ஆம் நூற்றாண்டிலேயே தமிழர்கள் எழுத்தறிவும் நகர நாகரிகமும் பெற்றிருந்தமை அறிவியல் சான்றுகளுடன் நிரூபிக்கப்பட்டுள்ளது.",
    detailedArticleEn: "Archaeological excavations at Keeladi in Sivaganga district have revolutionized Indian historiography. Carbon dating of carbonized charcoal and pottery with Tamil-Brahmi scripts by Beta Analytic Lab (USA) dates the civilization back to the 6th century BCE (580 BCE). The findings reveal a highly literate society where ordinary potters and weavers wrote their names on potsherds, with evidence of advanced brick structures, drainage networks, ring wells, weaving tools, and maritime trade beads.",
    detailedArticleTa: "சிவகங்கை மாவட்டம் கீழடியில் மேற்கொள்ளப்பட்ட தொல்லியல் ஆய்வுகள், கி.மு. 580-லேயே வைகைக் கரையில் ஒரு செழுமையான நகர நாகரிகம் தழைத்திருந்ததை அமெரிக்காவின் பீட்டா அனாலிட்டிக் ஆய்வகக் கரிமப் பகுப்பாய்வு மூலம் உறுதிப்படுத்தியுள்ளன. மண்பாண்டங்களில் தமிழ்-பிராமி (தமிழி) எழுத்துப் பொறிப்புகள், செங்கல் கட்டுமானங்கள், கழிவுநீர் வாய்க்கால்கள் மற்றும் ரோமானிய வர்த்தகப் பொருட்கள் ஆகியவை பொதுமக்களின் எழுத்தறிவையும் உலகளாவிய வாணிபத்தையும் பறைசாற்றுகின்றன.",
    keyPointsEn: [
      "Carbon-dated to 580 BCE, pushing the Sangam era back to the 6th century BCE.",
      "Over 1,000+ Tamil-Brahmi inscribed potsherds proving mass secular literacy.",
      "Advanced urban engineering: covered brick drainage, ring wells, and textile dyeing vats.",
      "Maritime trading links with ancient Rome, Greece, and Southeast Asia."
    ],
    keyPointsTa: [
      "கி.மு. 580 என அறிவியல் கரிமப் பகுப்பாய்வு மூலம் உறுதி செய்யப்பட்ட பழமை.",
      "சாதாரண குடிமக்களும் எழுத்தறிவு பெற்றிருந்ததை விளக்கும் 1,000-க்கும் மேற்பட்ட தமிழிப் பானை ஓடுகள்.",
      "சுடுமண் உறைகணறுகள், செங்கல் வடிகால்கள் மற்றும் சாயப் பட்டறைகள் கொண்ட நகர அமைப்பு.",
      "பண்டைய ரோம் மற்றும் கிரேக்கம் வரை பரவியிருந்த கடல் வாணிபச் சான்றுகள்."
    ],
    interactiveType: "facts",
    historicalSources: ["Tamil Nadu State Department of Archaeology (TNSDA)", "Beta Analytic Carbon Dating Lab, Florida"]
  },
  {
    id: "thirukkural-ethics",
    category: "ethics",
    icon: "⚖️",
    badge: "1,330 UNIVERSAL COUPLETS",
    image: "assets/thirukkural_ethics.jpg",
    titleEn: "Secular Universality of Thirukkural",
    titleTa: "உலகப் பொதுமறை - திருக்குறள் வாழ்வியல் நெறி",
    quoteTa: "“யாதும் ஊரே யாவரும் கேளிர்; தீதும் நன்றும் பிறர்தர வாரா” — கணியன் பூங்குன்றனார்",
    quoteEn: "“To us, all towns are one, all people are our kin; good and evil do not come from others.”",
    descEn: "Pioneered global secular human ethics. 1,330 short couplets authored by Thiruvalluvar offering timeless philosophy on virtue, governance, leadership, and love without religious dogma.",
    descTa: "எந்த ஒரு மதத்தையும் சாதியையும் குறிப்பிடாமல் மனிதகுலம் முழுமைக்கும் தேவையான அறம், பொருள், இன்பத்தை 1330 குறட்பாக்களில் புகட்டிய உலகப் பொதுமறை.",
    detailedArticleEn: "Authored over two thousand years ago by poet-philosopher Thiruvalluvar, the Thirukkural stands among the world's greatest moral masterpieces alongside Socrates, Aristotle, and Confucius. Structured into 133 chapters of 7 words each across three sections (Aram / Virtue, Porul / Wealth & Statecraft, Inbam / Love), it remains completely non-sectarian and universal. It has been translated into more than 40+ world languages including Latin, English, French, German, Russian, and Chinese.",
    detailedArticleTa: "திருவள்ளுவர் அருளிய திருக்குறள், உலகின் மிக உன்னதமான வாழ்வியல் அறநூலாகும். அறத்துப்பால் (380 குறள்கள்), பொருட்பால் (700 குறள்கள்), காமத்துப்பால் (250 குறள்கள்) என 133 அதிகாரங்களில் மனித வாழ்வின் அனைத்து பரிமாணங்களையும் ஏழு சீர்களில் விவரிக்கிறது. எந்தவொரு மதக் கோட்பாட்டையும் திணிக்காமல் மனித நேயத்தையும் உலகளாவிய நல்லொழுக்கத்தையும் போதிப்பதால் இது 'உலகப் பொதுமறை' எனப் போற்றப்படுகிறது.",
    keyPointsEn: [
      "1,330 couplets constructed with strict mathematical metrics (4 words + 3 words).",
      "Completely secular philosophy without religious dogma or ritual demands.",
      "Translated into 40+ world languages, celebrated by Leo Tolstoy, Albert Schweitzer, and Mahatma Gandhi.",
      "Comprehensive guidance on statecraft, integrity, friendship, mental grit, and egalitarian love."
    ],
    keyPointsTa: [
      "ஏழு சொற்களில் (முதல் வரி 4 சீர், இரண்டாம் வரி 3 சீர்) அடக்கப்பட்ட கணித நேர்த்தி.",
      "மதச்சார்பற்ற தூய மானுடவியல் அறநெறி மற்றும் சமத்துவக் கோட்பாடுகள்.",
      "40-க்கும் மேற்பட்ட உலக மொழிகளில் மொழிபெயர்க்கப்பட்ட உலக இலக்கியம்.",
      "அரசியல், நிர்வாகம், நட்பு, ஊக்கம் மற்றும் இல்லற வாழ்விற்கான முழுமையான வழிகாட்டி."
    ],
    interactiveType: "couplet",
    historicalSources: ["Albert Schweitzer - Indian Thought and its Development", "G.U. Pope - The Tirukkural Translation"]
  },
  {
    id: "epigraphy-inscriptions",
    category: "epigraphy",
    icon: "🏛️",
    badge: "60,000+ INSCRIPTIONS (55% OF INDIA)",
    image: "assets/ancient_inscriptions.jpg",
    titleEn: "Global Epigraphy & Stone Inscriptions",
    titleTa: "கடல் கடந்த தமிழும் 60,000+ கல்வெட்டுகளும்",
    quoteTa: "“திரைகடலோடியும் திரவியம் தேடு” — ஔவையார்",
    quoteEn: "“Cross the surging ocean in quest of treasure and knowledge.”",
    descEn: "Over 55% of all epigraphical inscriptions discovered across the Indian subcontinent by the Archaeological Survey of India are in Tamil. Inscriptions span Egypt, Sumatra, Thailand, and China.",
    descTa: "இந்தியத் தொல்லியல் துறை கண்டறிந்த மொத்தக் கல்வெட்டுகளில் 55%-க்கும் அதிகமானவை தமிழ் மொழியில் செதுக்கப்பட்ட கல்வெட்டுகளாகும்.",
    detailedArticleEn: "Tamil possesses the richest epigraphical record of any South Asian language. Out of approximately 100,000 stone and copper inscriptions recorded by the ASI, over 55,000 to 60,000 are in Tamil. These record detailed democratic village elections (such as the Uttaramerur Inscription of 920 CE describing the Kudavolai ballot system), temple architecture, land deeds, and taxation. Furthermore, Tamil maritime trade inscriptions have been discovered at Berenike (Egypt), Quanzhou (China), Takua Pa (Thailand), and Sumatra (Indonesia).",
    detailedArticleTa: "இந்தியத் தொல்லியல் துறையினால் ஆவணப்படுத்தப்பட்ட கல்வெட்டுகளில் 55 ஆயிரத்திற்கும் மேற்பட்டவை தமிழ்க் கல்வெட்டுகளாகும். கி.பி. 920-ஆம் ஆண்டின் உத்திரமேரூர் கல்வெட்டு 'குடவோலை முறை' என்னும் மக்களாட்சித் தேர்தல் முறையை உலகிற்குப் பறைசாற்றுகிறது. மேலும் எகிப்தின் பெரெனிகே துறைமுகம், சீனாவின் குவான்சூ, தாய்லாந்தின் தக்குவா பா, இந்தோனேசியாவின் சுமத்ரா ஆகிய இடங்களில் கண்டறியப்பட்ட தமிழ்க் கல்வெட்டுகள் பழந்தமிழரின் கடல் ஆதிக்கத்தை நிரூபிக்கின்றன.",
    keyPointsEn: [
      "Over 55% of all ASI-documented inscriptions across India are in Tamil.",
      "The Uttaramerur Inscription (920 CE) outlines democratic local body voting & recall mechanisms.",
      "Maritime trade records discovered at the Red Sea port of Berenike, Egypt.",
      "Tamil merchant guild inscriptions (*Nanadesi*, *Ayyavole 500*) found across Southeast Asia."
    ],
    keyPointsTa: [
      "இந்தியக் கல்வெட்டுகளில் 55%-க்கும் மேல் தமிழிலேயே உள்ளன.",
      "உத்திரமேரூர் கல்வெட்டு மூலம் வெளிப்படும் குடவோலை மக்களாட்சித் தேர்தல் முறை.",
      "செங்கடல் எகிப்து துறைமுகம் வரை கண்டறியப்பட்ட சங்ககாலத் தமிழ் எழுத்துப் பானைகள்.",
      "தென்கிழக்காசிய நாடுகள் முழுதும் பரவியிருந்த 'திசை ஆயிரத்து ஐந்நூற்றுவர்' வணிகக் கல்வெட்டுகள்."
    ],
    interactiveType: "timeline",
    historicalSources: ["Epigraphia Indica", "Dr. Noboru Karashima - South Indian Inscriptions", "ASI Epigraphy Branch"]
  },
  {
    id: "tolkappiyam-thinai",
    category: "literature",
    icon: "📜",
    badge: "TOLKAPPIYAM THINAI SCIENCE",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sangam_era_Tamil_manuscript.jpg/640px-Sangam_era_Tamil_manuscript.jpg",
    titleEn: "Thinai Ecology & Poetic Anthropology",
    titleTa: "திணை மரபும் தொல்காப்பிய இலக்கண அறிவியலும்",
    quoteTa: "“அகம்புறம் என மனித வாழ்வை இயற்கையோடு பகுத்த சங்கச் செவ்வியல்”",
    quoteEn: "“Classifying inner emotion and outer duty in harmony with planetary geography.”",
    descEn: "Tolkappiyam systematized human life into Thinai—categorizing romantic inner emotions (Akam across 5 biomes: Kurinji, Mullai, Marutham, Neithal, Palai) and heroic public duties (Puram).",
    descTa: "இயற்கையின் ஐந்து நிலப்பரப்புகளோடு (குறிஞ்சி, முல்லை, மருதம், நெய்தல், பாலை) மனித உணர்வுகளையும் வாழ்வியலையும் இணைத்த ஒப்பற்ற திணைக் கோட்பாடு.",
    detailedArticleEn: "Tolkappiyam is not merely a linguistic grammar; it is an encyclopedia of poetic anthropology. It classifies all human experience into Akam (internal romantic landscape) and Puram (external civic, political, and heroic life). Akam is mapped to five distinct ecological biomes: Kurinji (Mountains / Union), Mullai (Forests / Patient Waiting), Marutham (Agricultural Plains / Lovers' Tiff), Neithal (Seacoast / Longing), and Palai (Arid Desert / Separation). Each biome encompasses its own unique flora, fauna, musical tunes (Yazh), and emotional states.",
    detailedArticleTa: "தொல்காப்பியம் வெறும் மொழி இலக்கண நூல் மட்டுமல்லாது, மனித வாழ்வியலின் பண்பாட்டுக் களஞ்சியமாகும். வாழ்வை 'அகம்' (உள்ளத்து உணர்வுகள்) மற்றும் 'புறம்' (வீரம், அறம், கொடை) என இரு கூறுகளாகப் பகுத்தது. மேலும் நிலத்தை குறிஞ்சி (மலை), முல்லை (காடு), மருதம் (வயல்), நெய்தல் (கடல்), பாலை (மணல்) என ஐந்திணைகளாகப் பிரித்து, ஒவ்வொரு நிலத்திற்கும் உரிய மரம், மலர், விலங்கு, பறவை, பண் மற்றும் மக்களின் மனநிலையை அறிவியல் பூர்வமாக இணைத்தது.",
    keyPointsEn: [
      "Ecological mapping of human psychology to geographic landscapes (Thinai).",
      "Exhaustive 3-part treatise: Ezhuthu (Orthography), Sol (Morphology), and Porul (Poetics & Life).",
      "Earliest structured poetics in South Asia, pre-dating modern ecological criticism by millennia.",
      "Intertwines botany, ornithology, musical scales (Pann), and seasonal cycles with human emotions."
    ],
    keyPointsTa: [
      "மனித மன உணர்வுகளையும் நிலப்பரப்பின் சூழலியலையும் இணைத்த திணைக் கோட்பாடு.",
      "எழுத்து, சொல், பொருள் என முப்பெரும் அதிகாரங்களைக் கொண்ட முழுமையான இலக்கணப் பொக்கிஷம்.",
      "தற்காலச் சூழலியல் திறனாய்விற்கு முன்னோடியாக விளங்கும் சங்க மரபு.",
      "தாவரவியல், பறவையியல் மற்றும் பண்ணிசை மரபுகளை உள்ளடக்கிய வாழ்வியல் பார்வை."
    ],
    interactiveType: "facts",
    historicalSources: ["Tolkappiyam - Porulathikaram", "Prof. A.K. Ramanujan - The Interior Landscape"]
  },
  {
    id: "first-printed-language",
    category: "modern",
    icon: "🖨️",
    badge: "1ST PRINTED INDIAN SCRIPT (1578)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Thambiraan_Vanakkam_1578.jpg/640px-Thambiraan_Vanakkam_1578.jpg",
    titleEn: "Pioneer in Printing & Typography",
    titleTa: "இந்தியாவில் முதல் அச்சு மொழியும் பதிப்பு வரலாறும்",
    quoteTa: "“இந்திய மொழிகளிலேயே முதன்முதலில் அச்செறிய பெருமை தமிழுக்கே”",
    quoteEn: "“The proud distinction of being the very first Indian language to be set in movable metal type.”",
    descEn: "Tamil was the first Indian language to be printed in movable type. The prayer book 'Thambiran Vanakkam' was printed at Kollam, Kerala on October 20, 1578, using cast Tamil metallic fonts.",
    descTa: "1578-ஆம் ஆண்டு அக்டோபர் 20-இல் 'தம்பிரான் வணக்கம்' நூல் மூலம் இந்திய மொழிகளிலேயே முதன்முதலில் அச்சு வடிவம் பெற்ற பெருமை தமிழையே சாரும்.",
    detailedArticleEn: "Long before Hindi, Bengali, or Marathi entered the era of movable type printing, Tamil made global history on October 20, 1578, when Henrique Henriques printed 'Thambiran Vanakkam' (a Tamil translation of Doctrina Christiana) in Kollam using custom-cast Tamil metal types. Later in 1714, Bartholomäus Ziegenbalg established the famous Tranquebar (Tharangambadi) press, translating literature and casting modern Tamil fonts, propelling Tamil into a global publishing pioneer.",
    detailedArticleTa: "1578-ஆம் ஆண்டு அக்டோபர் 20-ஆம் நாள், அண்டிரிக்கே அடிகளாரால் கொல்லத்தில் அச்சிடப்பட்ட 'தம்பிரான் வணக்கம்' நூலின் மூலம், இந்திய மொழிகளிலேயே முதன்முதலில் அச்செறிய மொழி என்ற வரலாற்றுச் சாதனை தமிழுக்குக் கிடைத்தது. அதனைத் தொடர்ந்து 1714-இல் தரங்கம்பாடியில் சீகன்பால்கு அமைத்த அச்சகம் மூலம் தமிழ் நூல்கள் பெருமளவில் பதிப்பிக்கப்பட்டு, உலக அரங்கில் தமிழ் அச்சுப் புரட்சியை ஏற்படுத்தியது.",
    keyPointsEn: [
      "First Indian language to be printed with movable metal type in 1578 CE.",
      "Historic publication of 'Thambiran Vanakkam' containing 16 pages of Tamil typography.",
      "Pioneering Tranquebar printing press established in 1714 producing high-volume Tamil editions.",
      "Paved the way for modern palm-leaf manuscript preservation by U.Ve. Swaminatha Iyer."
    ],
    keyPointsTa: [
      "1578-இல் அச்சு இயந்திரத்தில் ஏறிய முதல் இந்திய மொழி என்ற உலக சாதனை.",
      "16 பக்கங்களில் வார்ப்பட எழுத்துக்களால் அச்சிடப்பட்ட 'தம்பிரான் வணக்கம்'.",
      "1714-இல் தரங்கம்பாடியில் உருவான முன்னோடித் தமிழ் அச்சுக்கூடம்.",
      "உ.வே. சாமிநாதையர் உள்ளிட்ட தமிழறிஞர்கள் ஓலைச்சுவடிகளை அச்சு நூல்களாக மீட்டெடுக்க வித்திட்ட வரலாறு."
    ],
    interactiveType: "timeline",
    historicalSources: ["Harvard University Library Tamil Collection", "Tharangambadi Printing Museum Records"]
  },
  {
    id: "global-digital-tamil",
    category: "modern",
    icon: "🌐",
    badge: "GLOBAL STATUS & COMPUTING",
    image: "assets/cultural_personification.jpg",
    titleEn: "Global Sovereign Status & Cultural Heritage",
    titleTa: "உலகளாவிய அரச அங்கீகாரமும் தமிழ்த்தாய் மரபும்",
    quoteTa: "“சிங்கப்பூர், இலங்கையில் ஆட்சி மொழி; உலகெங்கும் ஒளிரும் தமிழ்த்தாய் பெருமை”",
    quoteEn: "“An official language across sovereign nations; embodying eternal classical grace.”",
    descEn: "Official language status in Singapore, Sri Lanka, and India. Featured on currencies of Singapore and Mauritius, symbolizing eternal classical grace and enduring cultural heritage.",
    descTa: "சிங்கப்பூர், இலங்கை நாடுகளில் ஆட்சி மொழி அந்தஸ்தும், மொரிசியஸ் ரூபாய் நோட்டுகளில் தமிழும், உலகெங்கும் ஒளிரும் தமிழ்த்தாய் பண்பாட்டுப் பெருமை.",
    detailedArticleEn: "Tamil is one of the rare regional languages of Asia to achieve sovereign official language status in multiple independent nations: India, Sri Lanka, and Singapore. It is recognized as a minority language in Malaysia, Mauritius, and South Africa, and appears on currency notes of Mauritius and Singapore.",
    detailedArticleTa: "இந்தியா மட்டுமன்றி, இலங்கை, சிங்கப்பூர் ஆகிய இரு சுதந்திர நாடுகளிலும் தமிழ் ஆட்சி மொழியாக அங்கீகரிக்கப்பட்டுள்ளது. மலேசியா, மொரிசியஸ், தென்னாப்பிரிக்கா போன்ற நாடுகளில் முக்கிய மொழியாக விளங்குவதோடு, மொரிசியஸ் நாட்டின் பணத்தாளிலும் தமிழ் எழுத்துக்கள் பொறிக்கப்பட்டுள்ளன.",
    keyPointsEn: [
      "Sovereign Official Language in 3 countries: India, Sri Lanka, and Singapore.",
      "Printed on currency banknotes of Singapore and Mauritius.",
      "Robust Unicode infrastructure with extensive natural language processing support.",
      "Vibrant global diaspora of over 85 million people celebrating World Tamil Heritage."
    ],
    keyPointsTa: [
      "இந்தியா, இலங்கை, சிங்கப்பூர் ஆகிய 3 நாடுகளில் இறையாண்மை மிக்க ஆட்சி மொழி அந்தஸ்து.",
      "மொரிசியஸ் மற்றும் சிங்கப்பூர் நாட்டின் ரூபாய் நோட்டுகளில் இடம்பெற்றுள்ள தமிழ்.",
      "முழுமையான தமிழ் ஒருங்குறி (Unicode) மற்றும் கணித்தமிழ்க் கட்டமைப்பு.",
      "உலகெங்கும் வாழும் 8.5 கோடி தமிழ் மக்களால் போற்றப்படும் பண்பாட்டுப் பாரம்பரியம்."
    ],
    interactiveType: "facts",
    historicalSources: ["Constitution of Singapore", "Constitution of Sri Lanka", "Unicode Consortium Standard"]
  },
  {
    id: "tolkappiyam-thinai",
    category: "literature",
    icon: "📜",
    badge: "TOLKAPPIYAM THINAI SCIENCE",
    titleEn: "Thinai Ecology & Poetic Anthropology",
    titleTa: "திணை மரபும் தொல்காப்பிய இலக்கண அறிவியலும்",
    quoteTa: "“அகம்புறம் என மனித வாழ்வை இயற்கையோடு பகுத்த சங்கச் செவ்வியல்”",
    quoteEn: "“Classifying inner emotion and outer duty in harmony with planetary geography.”",
    descEn: "Tolkappiyam systematized human life into Thinai—categorizing romantic inner emotions (Akam across 5 biomes: Kurinji, Mullai, Marutham, Neithal, Palai) and heroic public duties (Puram).",
    descTa: "இயற்கையின் ஐந்து நிலப்பரப்புகளோடு (குறிஞ்சி, முல்லை, மருதம், நெய்தல், பாலை) மனித உணர்வுகளையும் வாழ்வியலையும் இணைத்த ஒப்பற்ற திணைக் கோட்பாடு.",
    detailedArticleEn: "Tolkappiyam is not merely a linguistic grammar; it is an encyclopedia of poetic anthropology. It classifies all human experience into Akam (internal romantic landscape) and Puram (external civic, political, and heroic life). Akam is mapped to five distinct ecological biomes: Kurinji (Mountains / Union), Mullai (Forests / Patient Waiting), Marutham (Agricultural Plains / Lovers' Tiff), Neithal (Seacoast / Longing), and Palai (Arid Desert / Separation). Each biome encompasses its own unique flora, fauna, musical tunes (Yazh), and emotional states.",
    detailedArticleTa: "தொல்காப்பியம் வெறும் மொழி இலக்கண நூல் மட்டுமல்லாது, மனித வாழ்வியலின் பண்பாட்டுக் களஞ்சியமாகும். வாழ்வை 'அகம்' (உள்ளத்து உணர்வுகள்) மற்றும் 'புறம்' (வீரம், அறம், கொடை) என இரு கூறுகளாகப் பகுத்தது. மேலும் நிலத்தை குறிஞ்சி (மலை), முல்லை (காடு), மருதம் (வயல்), நெய்தல் (கடல்), பாலை (மணல்) என ஐந்திணைகளாகப் பிரித்து, ஒவ்வொரு நிலத்திற்கும் உரிய மரம், மலர், விலங்கு, பறவை, பண் மற்றும் மக்களின் மனநிலையை அறிவியல் பூர்வமாக இணைத்தது.",
    keyPointsEn: [
      "Ecological mapping of human psychology to geographic landscapes (Thinai).",
      "Exhaustive 3-part treatise: Ezhuthu (Orthography), Sol (Morphology), and Porul (Poetics & Life).",
      "Earliest structured poetics in South Asia, pre-dating modern ecological criticism by millennia.",
      "Intertwines botany, ornithology, musical scales (Pann), and seasonal cycles with human emotions."
    ],
    keyPointsTa: [
      "மனித மன உணர்வுகளையும் நிலப்பரப்பின் சூழலியலையும் இணைத்த திணைக் கோட்பாடு.",
      "எழுத்து, சொல், பொருள் என முப்பெரும் அதிகாரங்களைக் கொண்ட முழுமையான இலக்கணப் பொக்கிஷம்.",
      "தற்காலச் சூழலியல் திறனாய்விற்கு முன்னோடியாக விளங்கும் சங்க மரபு.",
      "தாவரவியல், பறவையியல் மற்றும் பண்ணிசை மரபுகளை உள்ளடக்கிய வாழ்வியல் பார்வை."
    ],
    interactiveType: "facts",
    historicalSources: ["Tolkappiyam - Porulathikaram", "Prof. A.K. Ramanujan - The Interior Landscape"]
  },
  {
    id: "first-printed-language",
    category: "modern",
    icon: "🖨️",
    badge: "1ST PRINTED INDIAN SCRIPT (1578)",
    titleEn: "Pioneer in Printing & Typography",
    titleTa: "இந்தியாவில் முதல் அச்சு மொழியும் பதிப்பு வரலாறும்",
    quoteTa: "“இந்திய மொழிகளிலேயே முதன்முதலில் அச்செறிய பெருமை தமிழுக்கே”",
    quoteEn: "“The proud distinction of being the very first Indian language to be set in movable metal type.”",
    descEn: "Tamil was the first Indian language to be printed in movable type. The prayer book 'Thambiran Vanakkam' was printed at Kollam, Kerala on October 20, 1578, using cast Tamil metallic fonts.",
    descTa: "1578-ஆம் ஆண்டு அக்டோபர் 20-இல் 'தம்பிரான் வணக்கம்' நூல் மூலம் இந்திய மொழிகளிலேயே முதன்முதலில் அச்சு வடிவம் பெற்ற பெருமை தமிழையே சாரும்.",
    detailedArticleEn: "Long before Hindi, Bengali, or Marathi entered the era of movable type printing, Tamil made global history on October 20, 1578, when Henrique Henriques printed 'Thambiran Vanakkam' (a Tamil translation of Doctrina Christiana) in Kollam using custom-cast Tamil metal types. Later in 1714, Bartholomäus Ziegenbalg established the famous Tranquebar (Tharangambadi) press, translating literature and casting modern Tamil fonts, propelling Tamil into a global publishing pioneer.",
    detailedArticleTa: "1578-ஆம் ஆண்டு அக்டோபர் 20-ஆம் நாள், அண்டிரிக்கே அடிகளாரால் கொல்லத்தில் அச்சிடப்பட்ட 'தம்பிரான் வணக்கம்' நூலின் மூலம், இந்திய மொழிகளிலேயே முதன்முதலில் அச்செறிய மொழி என்ற வரலாற்றுச் சாதனை தமிழுக்குக் கிடைத்தது. அதனைத் தொடர்ந்து 1714-இல் தரங்கம்பாடியில் சீகன்பால்கு அமைத்த அச்சகம் மூலம் தமிழ் நூல்கள் பெருமளவில் பதிப்பிக்கப்பட்டு, உலக அரங்கில் தமிழ் அச்சுப் புரட்சியை ஏற்படுத்தியது.",
    keyPointsEn: [
      "First Indian language to be printed with movable metal type in 1578 CE.",
      "Historic publication of 'Thambiran Vanakkam' containing 16 pages of Tamil typography.",
      "Pioneering Tranquebar printing press established in 1714 producing high-volume Tamil editions.",
      "Paved the way for modern palm-leaf manuscript preservation by U.Ve. Swaminatha Iyer."
    ],
    keyPointsTa: [
      "1578-இல் அச்சு இயந்திரத்தில் ஏறிய முதல் இந்திய மொழி என்ற உலக சாதனை.",
      "16 பக்கங்களில் வார்ப்பட எழுத்துக்களால் அச்சிடப்பட்ட 'தம்பிரான் வணக்கம்'.",
      "1714-இல் தரங்கம்பாடியில் உருவான முன்னோடித் தமிழ் அச்சுக்கூடம்.",
      "உ.வே. சாமிநாதையர் உள்ளிட்ட தமிழறிஞர்கள் ஓலைச்சுவடிகளை அச்சு நூல்களாக மீட்டெடுக்க வித்திட்ட வரலாறு."
    ],
    interactiveType: "timeline",
    historicalSources: ["Harvard University Library Tamil Collection", "Tharangambadi Printing Museum Records"]
  },
  {
    id: "global-digital-tamil",
    category: "modern",
    icon: "🌐",
    badge: "GLOBAL STATUS & COMPUTING",
    titleEn: "Global Sovereign Status & Digital AI Age",
    titleTa: "உலகளாவிய அரச அங்கீகாரமும் நவீனக் கணித்தமிழும்",
    quoteTa: "“சிங்கப்பூர், இலங்கையில் ஆட்சி மொழி; கணினி மற்றும் செயற்கை நுண்ணறிவிலும் ஒளிரும் தமிழ்”",
    quoteEn: "“An official language across nations; thriving continuously into modern computational AI.”",
    descEn: "Official language status in Singapore, Sri Lanka, and India. Featured on currencies of Singapore and Mauritius, with full UTF-8 Unicode digital infrastructure powering NLP and modern AI.",
    descTa: "சிங்கப்பூர், இலங்கை நாடுகளில் ஆட்சி மொழி அந்தஸ்தும், மொரிசியஸ் ரூபாய் நோட்டுகளில் தமிழும், நவீன செயற்கை நுண்ணறிவு மற்றும் கணினி மொழியியலில் முன்னணி வகிக்கும் செம்மொழி.",
    detailedArticleEn: "Tamil is one of the rare regional languages of Asia to achieve sovereign official language status in multiple independent nations: India, Sri Lanka, and Singapore. It is recognized as a minority language in Malaysia, Mauritius, and South Africa, and appears on currency notes of Mauritius and Singapore. In the 21st century, Tamil has seamlessly adapted to computing with early Unicode standardization, vast open-source corpora, speech-to-text engines, and large language model fine-tuning (AI Tamil).",
    detailedArticleTa: "இந்தியா மட்டுமன்றி, இலங்கை, சிங்கப்பூர் ஆகிய இரு சுதந்திர நாடுகளிலும் தமிழ் ஆட்சி மொழியாக அங்கீகரிக்கப்பட்டுள்ளது. மலேசியா, மொரிசியஸ், தென்னாப்பிரிக்கா போன்ற நாடுகளில் முக்கிய மொழியாக விளங்குவதோடு, மொரிசியஸ் நாட்டின் பணத்தாளிலும் தமிழ் எழுத்துக்கள் பொறிக்கப்பட்டுள்ளன. இன்றைய டிஜிட்டல் யுகத்தில் முழுமையான ஒருங்குறி (Unicode) ஆதரவு, இயற்கை மொழி செயலாக்கம் (NLP) மற்றும் நவீன AI தளங்களில் தமிழ் சீரிய நடைபோடுகிறது.",
    keyPointsEn: [
      "Sovereign Official Language in 3 countries: India, Sri Lanka, and Singapore.",
      "Printed on currency banknotes of Singapore and Mauritius.",
      "Robust Unicode infrastructure with extensive natural language processing and voice AI support.",
      "Vibrant global diaspora of over 85 million people celebrating World Tamil Conferences."
    ],
    keyPointsTa: [
      "இந்தியா, இலங்கை, சிங்கப்பூர் ஆகிய 3 நாடுகளில் இறையாண்மை மிக்க ஆட்சி மொழி அந்தஸ்து.",
      "மொரிசியஸ் மற்றும் சிங்கப்பூர் நாட்டின் ரூபாய் நோட்டுகளில் இடம்பெற்றுள்ள தமிழ்.",
      "முழுமையான தமிழ் ஒருங்குறி (Unicode) மற்றும் குரல்வழி AI தொழில்நுட்பக் கட்டமைப்பு.",
      "உலகெங்கும் வாழும் 8.5 கோடி தமிழ் மக்களால் உலகத் தமிழ்ச் சங்கங்கள் வழியே கொண்டாடப்படும் பெருமை."
    ],
    interactiveType: "facts",
    historicalSources: ["Constitution of Singapore", "Constitution of Sri Lanka", "Unicode Consortium Standard"]
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

// CLASSICAL TAMIL DICTIONARY DATA
const DICTIONARY_DATA = [
  {
    id: "aram",
    wordTa: "அறம்",
    phonetic: "/aɾam/",
    rootTa: "அறு (To establish a standard)",
    category: "Ethics / அறவியல்",
    meaningTa: "நன்னெறி, அறநெறி, ஒழுக்கம் மற்றும் சமத்துவ நீதி நெறிகளைக் குறிக்கும் செவ்வியல் சொல்.",
    meaningEn: "Virtue, moral righteousness, ethical order, and universal duty in Sangam philosophy.",
    citations: ["Thirukkural #1", "Tolkappiyam Porulathikaram", "Purananuru #192"]
  },
  {
    id: "aham",
    wordTa: "அகம்",
    phonetic: "/aχam/",
    rootTa: "அகம் (Interior / Heart)",
    category: "Poetics / அகத்திணை",
    meaningTa: "உள்மன உணர்வுகள், காதல் மற்றும் குடும்ப வாழ்க்கை சார்ந்த சங்க கவிதை மரபு.",
    meaningEn: "The inner landscape of love, personal emotions, and domestic life in Sangam poetics.",
    citations: ["Akananuru", "Kuruntokai", "Tolkappiyam"]
  },
  {
    id: "puram",
    wordTa: "புறம்",
    phonetic: "/puɾam/",
    rootTa: "புறம் (Exterior / Public)",
    category: "Heroic / புறத்திணை",
    meaningTa: "வீரம், கொடை, ஆட்சி மற்றும் சமூக வாழ்க்கை பற்றிய சங்கக் கவிதை மரபு.",
    meaningEn: "The outer world of valor, patronage, statecraft, heroism, and civic virtue.",
    citations: ["Purananuru", "Pattupattu", "Padirruppattu"]
  },
  {
    id: "sangam",
    wordTa: "சங்கம்",
    phonetic: "/saŋɡam/",
    rootTa: "சங்கு (Confluence / Assembly)",
    category: "Academy / சங்கம்",
    meaningTa: "மதுரையில் சங்கம் அமைத்து சங்கம் வளர்த்த புலவர்களின் தமிழ்ச் சபை.",
    meaningEn: "The ancient Tamil literary academies hosted by Pandyan kings in Madurai.",
    citations: ["Iraiyanar Akapporul", "Silappatikaram", "Maduraikanci"]
  },
  {
    id: "thinai",
    wordTa: "திணை",
    phonetic: "/t̪iɳai/",
    rootTa: "திண் (Firmness / Soil genre)",
    category: "Eco-Poetics / நிலப்பகுப்பு",
    meaningTa: "இயற்கை நிலப்பரப்பு மற்றும் மனித உணர்ச்சிகளை இணைக்கும் 5 வகை நிலவியல் பகுப்பு.",
    meaningEn: "The 5-fold eco-poetic landscape system mapping human emotions to natural habitats.",
    citations: ["Tolkappiyam", "Ainthanai Aimpathu", "Kuruntokai"]
  },
  {
    id: "semmozhi",
    wordTa: "செம்மொழி",
    phonetic: "/semmoɻi/",
    rootTa: "செம் (Refined) + மொழி (Language)",
    category: "Linguistics / மொழியியல்",
    meaningTa: "தொன்மை, சுதந்திரமான இயங்குதன்மை மற்றும் இலக்கணச் செழுமை கொண்ட உயர் செவ்வியல் மொழி.",
    meaningEn: "Classical language possessing antiquity, autonomous origin, and linguistic perfection.",
    citations: ["Tolkappiyam", "Central Institute of Classical Tamil", "UNESCO"]
  },
  {
    id: "zhagaram",
    wordTa: "ழகரம்",
    phonetic: "/ɻaɡaɾam/",
    rootTa: "ழ (Retroflex Approximant)",
    category: "Phonetics / ஒலிப்பியல்",
    meaningTa: "தமிழ் மொழிக்கே உரிய சிறப்பு மெய்யெழுத்து ஒலிப்பு.",
    meaningEn: "The unique Tamil retroflex approximant consonant 'ழ' (zh).",
    citations: ["Tolkappiyam Eluttathikaram", "Nannool", "Yapparungalam"]
  },
  {
    id: "kodai",
    wordTa: "கொடை",
    phonetic: "/koɖai/",
    rootTa: "கொடு (To give generously)",
    category: "Virtue / ஈகை",
    meaningTa: "ஏழை எளியோர்க்கும் புலவர்களுக்கும் எதிர்பார்ப்பின்றி வாரி வழங்கும் பெருங்குணம்.",
    meaningEn: "Philanthropy, magnanimous giving, and patronage of arts by Sangam chieftains.",
    citations: ["Purananuru (Kadaiezhu Vallalgal)", "Sirupanarruppadai", "Perupanarruppadai"]
  },
  {
    id: "suvadi",
    wordTa: "சுவடி",
    phonetic: "/suvaɖi/",
    rootTa: "சுவடு (Mark / Stylus incision)",
    category: "Manuscripts / ஏடெழுத்து",
    meaningTa: "பனை ஓலையில் எழுத்தாணி கொண்டு செதுக்கப்பெற்ற பழங்காலத் தமிழ் ஏடுகள்.",
    meaningEn: "Traditional palm-leaf manuscripts incised with metal stylus preserving ancient texts.",
    citations: ["GOML MSS Records", "U.V. Swaminatha Iyer Archives", "Thirumurai"]
  }
];


