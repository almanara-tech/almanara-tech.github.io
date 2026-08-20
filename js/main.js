/**
 * AL-MANARA TECH | المنارة تكنولوجي
 * Luxury Interactive Core Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initLanguage();
  initParticles();
  initNavbar();
  initCounters();
  initAudioPlayer();
  initAppFilters();
  initModals();
  initFAQ();
  initContactForm();
  initScrollReveal();
});

/* ==========================================================================
   1. MULTILINGUAL DICTIONARY & TOGGLE (AR / EN)
   ========================================================================== */

const translations = {
  ar: {
    // Navigation
    navHome: "الرئيسية",
    navApps: "تطبيقاتنا",
    navFeatures: "المميزات",
    navStats: "الإحصائيات",
    navReviews: "الآراء",
    navFaq: "الأسئلة الشائعة",
    navContact: "تواصل معنا",
    btnGooglePlay: "متجر Google Play",
    brandSub: "ناشر تطبيقات أندرويد وإسلامية",

    // Hero
    heroBadge: "✦ رواد صناعة التطبيقات الإسلامية والذكية على أندرويد",
    heroTitle: "نبتكر التقنية.. <span class='text-gold-gradient'>لنضيء دروب الحياة</span> والروحانية",
    heroDesc: "مؤسسة <strong>المنارة تكنولوجي (Al-Manara Tech)</strong> تصنع تجارب برمجية استثنائية على منصة Android؛ نجمع بين أحدث معايير التقنية العالمية وأصالة المحتوى الإسلامي الفاخر بتصاميم ملكية فائقة الجودة.",
    btnExplore: "استكشف التطبيقات",
    btnGooglePlayHero: "حسابنا على Google Play",
    chipUsers: "+500K مستخدم نشط",
    chipDesign: "تصاميم Material 3 فاخرة",
    chipPrivacy: "أمان وخصوصية تامة",
    chipAndroid: "متوافق مع Android 14/15",

    // Floating Badges
    badgeRatingTitle: "تقييم استثنائي",
    badgeRatingSub: "4.9 ★ على Google Play",
    badgeAudioTitle: "تلاوات نقية 4K",
    badgeAudioSub: "بث صوتي مباشر مستمر",

    // Stats
    statDownloads: "+500,000",
    statDownloadsLabel: "إجمالي التحميلات النشطة",
    statRating: "4.9 ★",
    statRatingLabel: "متوسط تقييم المستخدمين",
    statApps: "+12",
    statAppsLabel: "تطبيق منشور ومعتمد",
    statStability: "99.9%",
    statStabilityLabel: "معدل استقرار وخلو من الأعطال",

    // Live Audio Demo
    audioTitle: "إذاعة القرآن الكريم - بث مباشر بجودة أثيرية",
    audioSub: "استمع إلى أعذب التلاوات القرآنية بأصوات كبار القراء في العالم الإسلامي",
    audioCurrentSurah: "سورة الرحمن • تلاوة خاشعة",
    audioCurrentReciter: "القارئ: مشاري راشد العفاسي",

    // Section Apps
    appsBadge: "حقيبة المنارة الرقمية",
    appsTitle: "تطبيقاتنا المتميزة على <span class='text-gold-gradient'>متجر أندرويد</span>",
    appsDesc: "مجموعة منتقاة بعناية من التطبيقات الإسلامية والخدمية المطورة وفق أرقى معايير الجودة والأداء.",
    tabAll: "جميع التطبيقات",
    tabIslamic: "تطبيقات إسلامية",
    tabUtility: "أدوات وخدمات أندرويد",
    btnDetails: "تفاصيل التطبيق",
    btnDownloadPlay: "تثبيت من Google Play",

    // Apps Content
    app1Title: "راديو القرآن الكريم المباشر",
    app1Category: "تطبيق إسلامي • صوتيات",
    app1Desc: "تطبيق متكامل يضم أكثر من 200 إذاعة قرآنية مباشرة لكبار القراء مع ميزة الاستماع بالخلفية وتنزيل التلاوات ومؤقت النوم الذكي.",
    app1Feat1: "بث عالي النقاوة بدون تقطيع",
    app1Feat2: "مؤقت إيقاف تلقائي للنوم",
    app1Feat3: "دعم العمل في الخلفية وقفل الشاشة",

    app2Title: "مصحف المنارة المرتل والختمة",
    app2Category: "تطبيق إسلامي • مصحف وتفسير",
    app2Desc: "مصحف إلكتروني فخم برسم المصحف الشريف العثماني، يحتوي على تفاسير معتمدة، إشارات مرجعية ذكية، وتكرار الآيات للحفظ.",
    app2Feat1: "خط عثماني فائق الوضوح",
    app2Feat2: "تفاسير ميسرة وترجمات متعددة",
    app2Feat3: "قراءة ليلية مريحة وتدوين ملاحظات",

    app3Title: "حصن المسلم والمسبحة الذكية",
    app3Category: "تطبيق إسلامي • أذكار ومواقيت",
    app3Desc: "أذكار الصباح والمساء، أذكار النوم والصلاة، مسبحة إلكترونية رقمية مع اهتزاز تفاعلي وتنبيهات صوتية راقية.",
    app3Feat1: "إشعارات أذكار تلقائية ومجدولة",
    app3Feat2: "مسبحة ذكية مع حفظ العداد تلقائياً",
    app3Feat3: "تصميم ملكي مستوحى من الفن الإسلامي",

    app4Title: "مواقيت الصلاة والقبلة الدقيقة",
    app4Category: "تطبيق إسلامي • فلكي",
    app4Desc: "حساب دقيق لمواقيت الصلاة حسب موقعك الجغرافي وبوصلة ثلاثية الأبعاد لتحديد اتجاه القبلة وأصوات أذان متعددة.",
    app4Feat1: "حساب فلكي دقيق لجميع الدول",
    app4Feat2: "بوصلة القبلة بالواقع المعزز 3D",
    app4Feat3: "تنبيهات قبل الأذان والإقامة",

    app5Title: "منظف ومسرّع أندرويد الذكي",
    app5Category: "أداة خدمية • تحسين أداء",
    app5Desc: "أداة احترافية لتنظيف الملفات المؤقتة والمهملات، تسريع الذاكرة RAM، وإطالة عمر البطارية بأمان تام وبدون تعقيد.",
    app5Feat1: "تنظيف الكاش والملفات المكررة",
    app5Feat2: "مدير استهلاك البطارية والحرارة",
    app5Feat3: "حماية الخصوصية ومسح السجلات",

    app6Title: "مدير التنزيلات الصوتية الإسلامي",
    app6Category: "أداة خدمية • مكتبة وسائط",
    app6Desc: "أداة متقدمة لتحميل المحاضرات والخطب والتلاوات الصوتية بسرعة فائقة مع إمكانية تنظيمها في قوائم تشغيل بلا إنترنت.",
    app6Feat1: "تحميل فائق السرعة متعدد المسارات",
    app6Feat2: "مشغل صوتي مدمج بدون إنترنت",
    app6Feat3: "مزامنة واستيراد المقاطع الصوتية",

    // Section Features
    featuresBadge: "لماذا المنارة تكنولوجي؟",
    featuresTitle: "معايير التفوق والريادة في <span class='text-gold-gradient'>صناعة التطبيقات</span>",
    featuresDesc: "نؤمن بأن التطبيقات الإسلامية والتقنية تستحق أعلى درجات الإتقان الهندسي والجمال البصري.",
    feat1Title: "تصاميم ملكية راقية",
    feat1Desc: "واجهات صُممت بشغف تمزج بين جمال الزخارف الهندسية الإسلامية وعصرية واجهات Material You 3 الحديثة.",
    feat2Title: "أداء Native فائق السرعة",
    feat2Desc: "برمجة أصلية احترافية بنظامي Kotlin و Java تضمن أقصى درجات الاستجابة واستهلاكاً شبه معدوم للبطارية والذاكرة.",
    feat3Title: "خصوصية وأمان بلا تنازلات",
    feat3Desc: "التزام صارم بحماية بيانات المستخدمين مع تطبيق أحدث معايير الأمان الدولية وسياسات Google Play و UMP.",
    feat4Title: "تجربة بدون إزعاج",
    feat4Desc: "نحترم روحانية المستخدم ووقته؛ نقدم تجارب مستخدم مريحة مع إعلانات راقية وغير مزعجة مع خيارات استخدام مجانية.",
    feat5Title: "عمل أوفلاين كامل",
    feat5Desc: "معظم تطبيقاتنا تتيح حفظ التلاوات، الأذكار، والمصاحف للعمل بكفاءة تامة بدون الحاجة للاتصال بشبكة الإنترنت.",
    feat6Title: "تطوير ودعم فني متواصل",
    feat6Desc: "فريق هندسي متخصص يواكب كافة إصدارات نظام أندرويد الجديدة ويقدم تحديثات وميزات حصرية بشكل دوري.",

    // Section Gallery
    galleryBadge: "المعرض التفاعلي",
    galleryTitle: "واجهات تجمع بين <span class='text-gold-gradient'>الفخامة والسهولة</span>",
    galleryDesc: "إليك نظرة حصرية على الواجهات الذهبية والزمردية التي نسعد بتقديمها لمستخدمينا حول العالم.",
    gal1Title: "راديو القرآن الكريم المباشر",
    gal1Sub: "واجهة الاستماع والتلاوة التفاعلية",
    gal2Title: "أذكار ومواقيت الصلاة",
    gal2Sub: "بوصلة القبلة والمسبحة الذهبية",
    gal3Title: "الأدوات والخدمات الذكية",
    gal3Sub: "إدارة التنزيلات وتحسين الأداء",

    // Section Testimonials
    reviewsBadge: "ثقة المستخدمين",
    reviewsTitle: "ماذا يقول مستخدمونا على <span class='text-gold-gradient'>Google Play</span>",
    reviewsDesc: "آراء موثقة من آلاف المستخدمين الذين جعلوا تطبيقات المنارة جزءاً أساسياً من يومهم.",
    rev1Text: "تطبيق راديو القرآن الكريم من أجمل التطبيقات التي استخدمتها بحياتي. الصوت نقي جداً والتصميم فخم جداً والألوان مريحة للعين. جزاكم الله خير الجزاء.",
    rev1Author: "م. أحمد عبد الرحمن",
    rev1Role: "مستخدم معتمد • السعودية",
    rev2Text: "أفضل تطبيق أذكار ومواقيت صلاة! البوصلة دقيقة جداً والمسبحة الذكية ساعدتني على المحافظة على وردي اليومي دون انقطاع. بارك الله في جهودكم.",
    rev2Author: "د. إبراهيم المنصوري",
    rev2Role: "مستخدم معتمد • الإمارات",
    rev3Text: "سلاسة التطبيقات وخفتها على الهاتف مذهلة. لا استهلاك للبطارية، والتحديثات مستمرة. المنارة تكنولوجي أثبتت جدارتها واحترافيتها.",
    rev3Author: "خالد بن صالح",
    rev3Role: "مستخدم معتمد • مصر",

    // Section FAQ
    faqBadge: "الأسئلة الشائعة",
    faqTitle: "كل ما تود معرفته عن <span class='text-gold-gradient'>تطبيقاتنا</span>",
    faqDesc: "إجابات واضحة ومباشرة عن كافة استفسارات التثبيت، الأمان، والتوافق.",
    faq1Q: "هل جميع تطبيقات المنارة تكنولوجي مجانية على متجر Google Play؟",
    faq1A: "نعم، كافة تطبيقاتنا متاحة للتحميل المجاني على متجر Google Play، مع توفير كافة الميزات الأساسية مجاناً لخدمة جميع المسلمين والمستخدمين حول العالم.",
    faq2Q: "هل تعمل التطبيقات بدون الحاجة إلى اتصال بالإنترنت؟",
    faq2A: "بالتأكيد، يمكنك تنزيل السور القرآنية، الأذكار، والمصاحف مرة واحدة داخل التطبيق، واستخدامها في أي مكان وفي وضع عدم الاتصال بدون إنترنت.",
    faq3Q: "كيف تضمنون دقة مواقيت الصلاة واتجاه القبلة؟",
    faq3A: "نعتمد على أدق المعادلات الفلكية المعتمدة رسمياً من كبرى الهيئات الإسلامية العالمية (مثل أم القرى، الهيئة المصرية العامة للمساحة، رابطة العالم الإسلامي، وغيرها) مع دعم مستشعرات الجيروسكوب والمغناطيسية لتحديد القبلة بدقة 100%.",
    faq4Q: "هل تتوافق التطبيقات مع أحدث إصدارات نظام أندرويد؟",
    faq4A: "نعم، نحرص على تحديث تطبيقاتنا دورياً للتوافق الكامل مع Android 14 و Android 15، مع دعم ميزات Material You والسمات الديناميكية وAndroid Auto.",

    // Section Contact
    contactBadge: "تواصل مع المطور",
    contactTitle: "نسعد بتواصلكم <span class='text-gold-gradient'>واقتراحاتكم</span>",
    contactDesc: "هل لديك فكرة لتطبيق إسلامي جديد، أو اقتراح لتحسين تجربة مستخدم، أو استفسار تقني؟ نحن هنا للاستماع إليك.",
    contactInfoHead: "معلومات التواصل",
    contactInfoText: "فريق المنارة تكنولوجي مستعد دائماً لتقديم الدعم الفني والإجابة على استفساراتكم.",
    contactEmail: "البريد الإلكتروني للدعم",
    contactEmailVal: "support@almanara-tech.com",
    contactStore: "حساب المطور الرسمي",
    contactStoreVal: "Al-Manara Tech on Google Play",
    contactLocation: "المقر والتطوير",
    contactLocationVal: "الرياض، المملكة العربية السعودية / العالم الرقمي",

    formName: "الاسم الكامل",
    formNamePlh: "أدخل اسمك الكريم",
    formEmail: "البريد الإلكتروني",
    formEmailPlh: "example@domain.com",
    formSubject: "نوع الرسالة / التطبيق المعني",
    formSubjectPlh: "اختر الموضوع أو اسم التطبيق",
    formMessage: "نص الرسالة أو الاقتراح",
    formMessagePlh: "اكتب رسالتك أو استفسارك هنا بكل تفصيل...",
    formSubmit: "إرسال الرسالة الآن",
    toastSuccess: "تم استلام رسالتك بنجاح! سيتواصل معك فريق المنارة تكنولوجي قريباً.",

    // Footer
    footerDesc: "المنارة تكنولوجي (Al-Manara Tech) - رواد تطوير تطبيقات الأندرويد والحلول البرمجية الإسلامية الراقية. نجمع بين أحدث التقنيات وأصالة المحتوى لخدمة الملايين حول العالم.",
    footerCol1: "روابط سريعة",
    footerCol2: "أهم التطبيقات",
    footerCol3: "السياسات والأمان",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الاستخدام",
    footerUmp: "تفضيلات الخصوصية و GDPR",
    footerGoogleRules: "معايير مطوري Google Play",
    footerRights: "جميع الحقوق محفوظة © 2026 المنارة تكنولوجي (Al-Manara Tech)."
  },

  en: {
    // Navigation
    navHome: "Home",
    navApps: "Our Apps",
    navFeatures: "Features",
    navStats: "Statistics",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",
    btnGooglePlay: "Google Play Store",
    brandSub: "Android & Islamic Apps Publisher",

    // Hero
    heroBadge: "✦ Leading Innovator in Islamic & Smart Android Apps",
    heroTitle: "Crafting Technology.. <span class='text-gold-gradient'>Illuminating Life</span> & Spirituality",
    heroDesc: "<strong>Al-Manara Tech</strong> crafts exceptional Android digital experiences; uniting cutting-edge engineering standards with rich, authentic Islamic heritage wrapped in royal luxury design.",
    btnExplore: "Explore Our Apps",
    btnGooglePlayHero: "View on Google Play",
    chipUsers: "+500K Active Users",
    chipDesign: "Royal Material 3 UI",
    chipPrivacy: "Strict User Privacy",
    chipAndroid: "Android 14/15 Ready",

    // Floating Badges
    badgeRatingTitle: "Top Rated Publisher",
    badgeRatingSub: "4.9 ★ on Google Play",
    badgeAudioTitle: "Crystal 4K Audio",
    badgeAudioSub: "24/7 Live Quran Radio",

    // Stats
    statDownloads: "+500,000",
    statDownloadsLabel: "Total Active Downloads",
    statRating: "4.9 ★",
    statRatingLabel: "Average Store Rating",
    statApps: "+12",
    statAppsLabel: "Published Apps",
    statStability: "99.9%",
    statStabilityLabel: "Crash-Free Architecture",

    // Live Audio Demo
    audioTitle: "Holy Quran Radio - Ethereal High Definition Stream",
    audioSub: "Listen to world-renowned reciters in crisp audio quality with instant background streaming.",
    audioCurrentSurah: "Surah Ar-Rahman • Soulful Recitation",
    audioCurrentReciter: "Reciter: Sheikh Mishary Rashid Alafasy",

    // Section Apps
    appsBadge: "Al-Manara Digital Portfolio",
    appsTitle: "Our Premier Apps on <span class='text-gold-gradient'>Google Play</span>",
    appsDesc: "A curated collection of luxury Islamic and Android utility applications built to deliver unmatched performance.",
    tabAll: "All Applications",
    tabIslamic: "Islamic Apps",
    tabUtility: "Android Utilities",
    btnDetails: "App Details",
    btnDownloadPlay: "Get on Google Play",

    // Apps Content
    app1Title: "Live Quran Radio & Audio Hub",
    app1Category: "Islamic App • Audio Player",
    app1Desc: "Comprehensive radio suite streaming over 200 Quranic stations globally with seamless background playback and sleep timer.",
    app1Feat1: "Crystal-clear bufferless streaming",
    app1Feat2: "Smart sleep & auto-stop timer",
    app1Feat3: "Lock-screen & background playback",

    app2Title: "Al-Manara Holy Quran & Recitations",
    app2Category: "Islamic App • Quran & Tafseer",
    app2Desc: "Luxurious digital Quran featuring the verified Uthmani script, authentic tafseer commentaries, smart bookmarks, and memorization aids.",
    app2Feat1: "High-definition Uthmani typography",
    app2Feat2: "Multi-language translations & tafseer",
    app2Feat3: "Comfortable night mode & notes",

    app3Title: "Hisn Al-Muslim & Smart Tasbih",
    app3Category: "Islamic App • Athkar & Counter",
    app3Desc: "Morning & evening supplications, prayer athkar, and a digital haptic tasbih counter with customizable audio reminders.",
    app3Feat1: "Scheduled smart athkar notifications",
    app3Feat2: "Digital tasbih with auto-save counter",
    app3Feat3: "Imperial Islamic aesthetic design",

    app4Title: "Accurate Prayer Times & 3D Qibla",
    app4Category: "Islamic App • Astronomy & Prayer",
    app4Desc: "Pinpoint accurate prayer calculation based on your precise GPS coordinates, featuring an AR 3D Qibla compass and melodic Azan alerts.",
    app4Feat1: "Astronomic calculations for all regions",
    app4Feat2: "Augmented Reality 3D Qibla compass",
    app4Feat3: "Customizable Azan & Iqama alerts",

    app5Title: "Smart Android Optimizer & Booster",
    app5Category: "Utility App • Performance",
    app5Desc: "An advanced Android cleaner and RAM manager designed to free storage, boost performance, and conserve battery life seamlessly.",
    app5Feat1: "Cleans cache & duplicate files",
    app5Feat2: "Intelligent battery saver & monitor",
    app5Feat3: "Strict zero-data-leak privacy protection",

    app6Title: "Islamic Audio & Lecture Downloader",
    app6Category: "Utility App • Media Manager",
    app6Desc: "High-speed audio downloader for lectures, recitations, and Islamic series with built-in offline library manager.",
    app6Feat1: "Multi-threaded ultra fast download",
    app6Feat2: "Integrated offline media player",
    app6Feat3: "Organized categories & smart playlists",

    // Section Features
    featuresBadge: "Why Al-Manara Tech?",
    featuresTitle: "The Gold Standard in <span class='text-gold-gradient'>App Craftsmanship</span>",
    featuresDesc: "We believe Islamic & Android applications deserve nothing less than top-tier engineering and pristine visual luxury.",
    feat1Title: "Imperial Luxury Design",
    feat1Desc: "Crafted with passion, marrying timeless Islamic geometric patterns with modern Android Material 3 design guidelines.",
    feat2Title: "Ultra-Fast Native Performance",
    feat2Desc: "Engineered in native Kotlin & Java to deliver snappy responsiveness while preserving battery and device resources.",
    feat3Title: "Uncompromising Privacy",
    feat3Desc: "Strict adherence to international data privacy laws, European UMP/GDPR compliance, and Google Play developer policies.",
    feat4Title: "Distraction-Free Experience",
    feat4Desc: "We respect your spirituality with elegant, non-intrusive ad placements and rich, completely free core functionality.",
    feat5Title: "Full Offline Readiness",
    feat5Desc: "Save your favorite Quran recitations and athkar to access and listen anytime, anywhere without an internet connection.",
    feat6Title: "Continuous Evolution & Support",
    feat6Desc: "A dedicated development team providing continuous updates, timely feature enhancements, and dedicated support.",

    // Section Gallery
    galleryBadge: "Interactive Showcase",
    galleryTitle: "Where <span class='text-gold-gradient'>Luxury Meets Simplicity</span>",
    galleryDesc: "A first-hand look at the bespoke golden and emerald interfaces crafted for millions worldwide.",
    gal1Title: "Quran Radio & Live Player",
    gal1Sub: "Interactive Audio Waveform Interface",
    gal2Title: "Athkar & Accurate Prayer Times",
    gal2Sub: "3D Qibla Compass & Golden Beads",
    gal3Title: "Smart Android Utilities",
    gal3Sub: "Download Hub & Performance Suite",

    // Section Testimonials
    reviewsBadge: "Verified Trust",
    reviewsTitle: "What Our Community Says on <span class='text-gold-gradient'>Google Play</span>",
    reviewsDesc: "Genuine reviews from thousands of users who made Al-Manara apps an essential part of their daily routine.",
    rev1Text: "The Quran Radio app is genuinely the most beautiful app on my phone. The audio is crystal-clear and the luxury green & gold theme is so soothing. May Allah reward you!",
    rev1Author: "Eng. Ahmed Abdulrahman",
    rev1Role: "Verified User • Saudi Arabia",
    rev2Text: "Best athkar and prayer times application by far! The Qibla compass is super accurate and the digital tasbih helped me stay consistent. Outstanding work.",
    rev2Author: "Dr. Ibrahim Al-Mansoori",
    rev2Role: "Verified User • UAE",
    rev3Text: "Super lightweight, fluid animations, and zero battery drain. Al-Manara Tech sets the benchmark for quality Android software.",
    rev3Author: "Khaled Bin Saleh",
    rev3Role: "Verified User • Egypt",

    // Section FAQ
    faqBadge: "Frequently Asked Questions",
    faqTitle: "Everything You Need to Know About <span class='text-gold-gradient'>Our Apps</span>",
    faqDesc: "Clear and straightforward answers regarding installation, privacy, and device compatibility.",
    faq1Q: "Are all Al-Manara Tech apps free on Google Play?",
    faq1A: "Yes, all our applications are completely free to download from the Google Play Store, providing essential features at zero cost for everyone worldwide.",
    faq2Q: "Do the apps function without an active internet connection?",
    faq2A: "Absolutely. You can download recitations, athkar collections, and complete Quran texts directly to your device for offline reading and listening.",
    faq3Q: "How do you calculate prayer times and Qibla direction accurately?",
    faq3A: "We rely on internationally accredited astronomical calculation methods (Umm Al-Qura, Muslim World League, Egyptian General Authority of Survey) combined with device gyroscope/magnetic sensors for 100% precision.",
    faq4Q: "Are the apps compatible with the newest Android versions?",
    faq4A: "Yes, all applications are continuously updated and fully tested on Android 14 and 15, supporting Material You dynamic theming and Android Auto.",

    // Section Contact
    contactBadge: "Get In Touch",
    contactTitle: "We'd Love to Hear <span class='text-gold-gradient'>From You</span>",
    contactDesc: "Have an idea for a new Islamic app, a feature suggestion, or a developer inquiry? We are always glad to connect.",
    contactInfoHead: "Contact Information",
    contactInfoText: "The Al-Manara Tech team is available to assist and answer any technical questions.",
    contactEmail: "Support Email",
    contactEmailVal: "support@almanara-tech.com",
    contactStore: "Official Developer Page",
    contactStoreVal: "Al-Manara Tech on Google Play",
    contactLocation: "Headquarters & Engineering",
    contactLocationVal: "Riyadh, Saudi Arabia / Global Digital",

    formName: "Full Name",
    formNamePlh: "Enter your full name",
    formEmail: "Email Address",
    formEmailPlh: "example@domain.com",
    formSubject: "Subject / App Name",
    formSubjectPlh: "Select subject or relevant app",
    formMessage: "Message / Suggestion",
    formMessagePlh: "Write your message or inquiry in detail...",
    formSubmit: "Send Message Now",
    toastSuccess: "Your message has been received! The Al-Manara Tech team will get back to you shortly.",

    // Footer
    footerDesc: "Al-Manara Tech - Leaders in high-performance Android development and prestigious Islamic digital solutions. Fusing modern technology with timeless spirituality.",
    footerCol1: "Quick Links",
    footerCol2: "Featured Apps",
    footerCol3: "Legal & Privacy",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerUmp: "GDPR & Privacy Preferences",
    footerGoogleRules: "Google Play Guidelines",
    footerRights: "All Rights Reserved © 2026 Al-Manara Tech."
  }
};

let currentLang = 'ar';

function initLanguage() {
  const langBtn = document.getElementById('lang-switch-btn');
  const langText = document.getElementById('lang-btn-text');

  function updateTexts(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    if (langText) langText.textContent = lang === 'ar' ? 'English' : 'عربي';

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.setAttribute('placeholder', t[key]);
      }
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      updateTexts(nextLang);
    });
  }

  // Set initial
  updateTexts('ar');
}

/* ==========================================================================
   2. PARTICLES BACKGROUND CANVAS
   ========================================================================== */

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(52, 211, 153, '
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. NAVBAR INTERACTIONS & MOBILE MENU
   ========================================================================== */

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   4. STATS ANIMATED COUNTERS
   ========================================================================== */

function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);

  function animateCounters() {
    statNumbers.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = target * easeProgress;

        if (isDecimal) {
          el.textContent = `${prefix}${current.toFixed(1)}${suffix}`;
        } else {
          el.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${isDecimal ? target.toFixed(1) : target.toLocaleString()}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    });
  }
}

/* ==========================================================================
   5. LIVE AUDIO PLAYER & SYNTHETIC SOUND GENERATOR
   ========================================================================== */

function initAudioPlayer() {
  const playBtn = document.getElementById('audio-play-toggle');
  const playerCard = document.querySelector('.audio-player-card');
  const playIcon = document.getElementById('play-icon');
  let isPlaying = false;
  let audioContext = null;
  let oscillator = null;
  let gainNode = null;

  // Real public Islamic Quran audio stream fallback
  const quranAudio = new Audio();
  quranAudio.src = 'https://server8.mp3quran.net/afs/055.mp3'; // Surah Ar-Rahman by Alafasy
  quranAudio.preload = 'none';

  if (playBtn && playerCard) {
    playBtn.addEventListener('click', () => {
      if (!isPlaying) {
        startAudio();
      } else {
        stopAudio();
      }
    });
  }

  function startAudio() {
    isPlaying = true;
    playerCard?.classList.add('playing');
    if (playIcon) playIcon.innerHTML = '❚❚';

    // Attempt HTML5 stream, fallback to pleasant ambient chime
    quranAudio.play().catch(() => {
      playSyntheticAmbientChime();
    });
  }

  function stopAudio() {
    isPlaying = false;
    playerCard?.classList.remove('playing');
    if (playIcon) playIcon.innerHTML = '▶';
    quranAudio.pause();
    if (oscillator) {
      try { oscillator.stop(); } catch(e){}
    }
  }

  function playSyntheticAmbientChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioContext = new AudioCtx();
      oscillator = audioContext.createOscillator();
      gainNode = audioContext.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(432, audioContext.currentTime); // 432Hz spiritual healing tone
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
    } catch(e) {
      console.log('Audio init notice:', e);
    }
  }
}

/* ==========================================================================
   6. APP FILTER TABS
   ========================================================================== */

function initAppFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const appCards = document.querySelectorAll('.app-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      appCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. APP DETAILS MODAL
   ========================================================================== */

const appModalData = {
  quranRadio: {
    titleAr: "راديو القرآن الكريم المباشر",
    titleEn: "Live Quran Radio & Islamic Audio Hub",
    categoryAr: "تطبيق إسلامي • صوتيات وتلاوات",
    categoryEn: "Islamic Application • Audio Streaming",
    descAr: "تطبيق متكامل واستثنائي يوفر بثاً مباشراً متواصلاً لأكثر من 200 إذاعة وقارئ من شتى بقاع العالم الإسلامي. يتيح الاستماع بأعلى جودة صوتية، تسجيل المقاطع المفضلة، مؤقت النوم التلقائي، والعمل في الخلفية بكل سلاسة.",
    descEn: "A flagship Android application streaming over 200 Quranic radio stations worldwide with bufferless HD audio, recording capabilities, smart sleep timer, and lock-screen playback.",
    featuresAr: [
      "بث مباشر لأكثر من 200 محطة إذاعية وقارئ",
      "جودة صوت عالية الدقة HD مع موازنة ذكية للبيانات",
      "مؤقت نوم ذكي للإغلاق التلقائي",
      "تنزيل وحفظ التلاوات للاستماع بدون إنترنت",
      "دعم كامل لنظام أندرويد أوتو (Android Auto) وقفل الشاشة"
    ],
    featuresEn: [
      "Live streams of 200+ global Quran stations and reciters",
      "HD crystal audio streaming with smart bandwidth saving",
      "Intelligent sleep timer with auto turn-off",
      "Offline recording & downloading manager",
      "Full Android Auto and lock-screen widget support"
    ],
    version: "v3.4.2",
    size: "18.4 MB",
    compat: "Android 8.0+",
    image: "assets/images/app_quran_radio.jpg"
  },
  quranHoly: {
    titleAr: "مصحف المنارة المرتل والختمة",
    titleEn: "Al-Manara Holy Quran & Recitations",
    categoryAr: "تطبيق إسلامي • مصحف وتفاسير",
    categoryEn: "Islamic Application • Quran & Tafseer",
    descAr: "مصحف المدينة النبوية برسم المصحف العثماني الأصيل فائق الوضوح، مزود بتفاسير موثقة، تلاوات صوتية متزامنة آية بآية، إشارات مرجعية غير محدودة، ومساعد حفظ ومراجعة القرآن الكريم.",
    descEn: "A pristine digital Holy Quran rendered in high-definition Uthmani script, featuring verified tafseer interpretations, verse-by-verse synchronized audio recitations, and memorization helper tools.",
    featuresAr: [
      "رسم المصحف العثماني بدقة متناهية بدون تشويش",
      "تفسير السعدي، الميسر، وابن كثير مدمج بالكامل",
      "تكرار الآيات والفقرات للمساعدة في التحفيظ",
      "وضع القراءة الليلية المذهب والمريح للعين",
      "مزامنة السحاب لحفظ مكان القراءة والإشارات المرجعية"
    ],
    featuresEn: [
      "Pixel-perfect Uthmani calligraphy with high clarity",
      "Comprehensive integrated commentaries (Ibn Kathir, Saadi)",
      "Repeat verse mode for Quran memorization",
      "Golden dark night reading mode",
      "Cloud bookmark synchronization"
    ],
    version: "v2.8.0",
    size: "24.6 MB",
    compat: "Android 7.0+",
    image: "assets/images/logo.jpg"
  },
  athkar: {
    titleAr: "حصن المسلم والمسبحة الذكية",
    titleEn: "Hisn Al-Muslim & Smart Tasbih",
    categoryAr: "تطبيق إسلامي • أذكار وأدعية",
    categoryEn: "Islamic Application • Athkar & Supplications",
    descAr: "دليلك اليومي الشامل للأذكار والأدعية الصحيحة من القرآن والسنة، مع مسبحة رقمية متطورة بمؤثرات اهتزازية تفاعلية وتنبيهات صوتية راقية لأذكار الصباح والمساء.",
    descEn: "Your comprehensive daily spiritual companion featuring verified daily athkar from Quran and Sunnah, paired with a tactile haptic digital tasbih and customizable reminders.",
    featuresAr: [
      "أذكار الصباح والمساء، أذكار النوم والصلاة والاستيقاظ",
      "مسبحة إلكترونية رقمية مع عداد ذكي يحفظ التقدم تلقائياً",
      "محرك إشعارات وتنبيهات مجدول بدون استهلاك للبطارية",
      "أحاديث نبوية موثقة مع ذكر السند والتخريج",
      "تصميم زخرفي فاخر يدعم الوضع الليلي"
    ],
    featuresEn: [
      "Morning, evening, sleeping, and post-prayer athkar",
      "Digital haptic tasbih counter with auto-save",
      "Zero-battery-drain scheduled reminder engine",
      "Authenticated Hadith references and citations",
      "Royal dark Islamic aesthetic UI"
    ],
    version: "v4.1.0",
    size: "14.2 MB",
    compat: "Android 8.0+",
    image: "assets/images/app_athkar.jpg"
  },
  prayerTimes: {
    titleAr: "مواقيت الصلاة والقبلة الدقيقة",
    titleEn: "Accurate Prayer Times & 3D Qibla",
    categoryAr: "تطبيق إسلامي • فلكي ومواقيت",
    categoryEn: "Islamic Application • Astronomy & Times",
    descAr: "حساب فلكي دقيق لأوقات الصلاة في أكثر من 200,000 مدينة حول العالم، مع بوصلة القبلة بالواقع المعزز 3D، وأصوات أذان متعددة لأشهر المؤذنين في الحرمين الشريفين.",
    descEn: "Astronomically precise prayer times for 200,000+ cities worldwide with a 3D Augmented Reality Qibla compass and melodic Azan notifications from the Two Holy Mosques.",
    featuresAr: [
      "حساب فلكي معتمد من كبرى الهيئات والجامعات الإسلامية",
      "بوصلة القبلة الذكية ثلاثية الأبعاد 3D Qibla Compass",
      "أصوات أذان بصوت مؤذني الحرم المكي والحرم النبوي",
      "ودجات (Widgets) فخمة للشاشة الرئيسية لشاشات أندرويد",
      "التقويم الهجري والمناسبات الإسلامية الدينية"
    ],
    featuresEn: [
      "Official astronomical calculations from top Islamic institutions",
      "Smart 3D Augmented Reality Qibla Compass",
      "Makkah & Madinah authentic Azan audio options",
      "Royal luxury home screen widgets for Android",
      "Hijri calendar with Islamic events & dates"
    ],
    version: "v3.1.5",
    size: "16.8 MB",
    compat: "Android 8.0+",
    image: "assets/images/app_athkar.jpg"
  },
  optimizer: {
    titleAr: "منظف ومسرّع أندرويد الذكي",
    titleEn: "Smart Android Optimizer & Booster",
    categoryAr: "أداة خدمية • أندرويد",
    categoryEn: "Utility Tool • Android Performance",
    descAr: "تطبيق خدمي متطور صُمم لتنظيف الملفات المؤقتة المتراكمة، وإدارة الذاكرة العشوائية RAM، وتحسين كفاءة البطارية وحماية خصوصية المستخدم بضغطة زر واحدة.",
    descEn: "A high-performance Android tool engineered to purge junk files, optimize RAM utilization, extend battery life, and protect user privacy with a single tap.",
    featuresAr: [
      "فحص وتنظيف عميق للملفات المتبقية والكاش المؤقت",
      "مسرّع ذاكرة RAM الذكي لتعزيز سلاسة الألعاب والتطبيقات",
      "أداة فحص حرارة المعالج وتبريده الذاتي",
      "مدير التطبيقات وحذف الملفات الضخمة غير المستغلة",
      "حماية كاملة للخصوصية بدون جمع أي بيانات شخصية"
    ],
    featuresEn: [
      "Deep scan and cache cleaner for residual files",
      "Smart RAM booster for fluid multitasking",
      "CPU thermal monitor and cooling optimizer",
      "App manager for identifying oversized unused files",
      "Strict privacy mode with zero data collection"
    ],
    version: "v5.0.1",
    size: "11.5 MB",
    compat: "Android 8.0+",
    image: "assets/images/app_utility.jpg"
  },
  mediaDownloader: {
    titleAr: "مدير التنزيلات الصوتية الإسلامي",
    titleEn: "Islamic Audio & Lecture Downloader",
    categoryAr: "أداة خدمية • وسائط ومكتبة",
    categoryEn: "Utility Tool • Media & Downloads",
    descAr: "أداة احترافية لتنزيل المحاضرات والخطب والسور الصوتية بسرعة قصوى، وتنظيمها في مكتبة وسائط منظمة وقابلة للتشغيل في أي وقت دون اتصال بالإنترنت.",
    descEn: "A professional audio downloader for Islamic lectures, recitations, and series, featuring high-speed multi-threaded downloads and a built-in offline media manager.",
    featuresAr: [
      "تحميل متعدد المسارات لتسريع التنزيل حتى 3 أضعاف",
      "مشغل صوتي فاخر مدمج مع دعم قوائم التشغيل",
      "استئناف التحميل التلقائي في حال انقطاع الشبكة",
      "مشاركة ونقل الملفات الصوتية بسهولة",
      "خالٍ تماماً من الإعلانات المزعجة"
    ],
    featuresEn: [
      "Multi-threaded acceleration for up to 3x faster downloads",
      "Integrated luxury audio player with playlist creator",
      "Auto-resume broken downloads upon reconnection",
      "Easy audio sharing and file exporting",
      "Clean interface with non-intrusive experience"
    ],
    version: "v2.2.0",
    size: "15.0 MB",
    compat: "Android 8.0+",
    image: "assets/images/app_utility.jpg"
  }
};

function initModals() {
  const modalBackdrop = document.getElementById('app-detail-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const detailButtons = document.querySelectorAll('.btn-open-detail');

  if (!modalBackdrop) return;

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const appId = btn.getAttribute('data-app-id');
      const data = appModalData[appId];
      if (!data) return;

      const isAr = currentLang === 'ar';
      
      const modalTitle = document.getElementById('modal-app-title');
      const modalCategory = document.getElementById('modal-app-category');
      const modalDesc = document.getElementById('modal-app-desc');
      const modalFeatures = document.getElementById('modal-app-features');
      const modalVersion = document.getElementById('modal-app-version');
      const modalSize = document.getElementById('modal-app-size');
      const modalCompat = document.getElementById('modal-app-compat');
      const modalImg = document.getElementById('modal-app-img');

      if (modalTitle) modalTitle.textContent = isAr ? data.titleAr : data.titleEn;
      if (modalCategory) modalCategory.textContent = isAr ? data.categoryAr : data.categoryEn;
      if (modalDesc) modalDesc.textContent = isAr ? data.descAr : data.descEn;
      if (modalVersion) modalVersion.textContent = data.version;
      if (modalSize) modalSize.textContent = data.size;
      if (modalCompat) modalCompat.textContent = data.compat;
      if (modalImg) modalImg.src = data.image;

      if (modalFeatures) {
        modalFeatures.innerHTML = '';
        const list = isAr ? data.featuresAr : data.featuresEn;
        list.forEach(feat => {
          const li = document.createElement('li');
          li.className = 'app-feature-item';
          li.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>${feat}</span>
          `;
          modalFeatures.appendChild(li);
        });
      }

      modalBackdrop.classList.add('active');
    });
  });

  closeBtn?.addEventListener('click', () => {
    modalBackdrop.classList.remove('active');
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('active');
    }
  });
}

/* ==========================================================================
   8. FAQ ACCORDION
   ========================================================================== */

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
        }
      });

      if (!isActive) {
        item.classList.add('active');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        if (answer) answer.style.maxHeight = '0px';
      }
    });
  });
}

/* ==========================================================================
   9. CONTACT FORM & LUXURY TOAST
   ========================================================================== */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-box');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
    }

    setTimeout(() => {
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4500);
      }
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
      }
    }, 600);
  });
}

/* ==========================================================================
   10. SCROLL REVEAL ANIMATIONS
   ========================================================================== */

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}
