/* Four complete, human-readable language dictionaries for Yusuf's portfolio.
   English, Bahasa Melayu, Arabic (RTL), Simplified Chinese. */
(() => {
  'use strict';
  const translations = {
    en: {
      'meta.title': 'Yusuf Muhammad Sani | Data Science Portfolio',
      'meta.description': 'Portfolio of Yusuf Muhammad Sani, a Data Science student seeking internship opportunities. Explore projects, skills, and contact details.',
      'accessibility.skip': 'Skip to main content',
      'nav.label': 'Main navigation',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
      'nav.chooseLanguage': 'Choose website language', 'nav.openMenu': 'Open navigation', 'nav.closeMenu': 'Close navigation',
      'hero.status': 'Open to Data Science internship opportunities',
      'hero.role': 'Data Science Student · Aspiring Data Analyst',
      'hero.description': 'I enjoy turning complex information into clear insights through data analysis, visualization, and practical problem-solving.',
      'hero.viewProjects': 'Explore my projects', 'hero.contactMe': 'Get in touch',
      'hero.photoAlt': 'Portrait of Yusuf Muhammad Sani',
      'hero.cardTitle': 'Data Science Student',
      'hero.cardDetails': 'Data Analytics · Machine Learning · Data Visualization',
      'hero.location': 'Based in Malaysia',
      'social.label': 'Professional profiles', 'social.github': 'GitHub profile', 'social.linkedin': 'LinkedIn profile', 'social.email': 'Email Yusuf',
      'about.label': 'About me',
      'about.title': 'Learning, building, and growing with data',
      'about.p1': 'I am a second-year Bachelor of Data Science (Honours) student at Albukhary International University in Malaysia. My interests include data analysis, machine learning, and finding practical solutions with technology.',
      'about.p2': 'I am building my foundation through university coursework, independent practice, and projects. I value clear communication, collaboration, and the opportunity to keep learning from experienced professionals.',
      'about.educationLabel': 'Education', 'about.educationValue': 'Bachelor of Data Science (Honours) · Year 2',
      'skills.label': 'Skills', 'skills.title': "What I'm learning and using",
      'skills.intro': 'A developing toolkit for working with data and communicating results.',
      'skills.dataTitle': 'Data & analytics', 'skills.data1': 'Data analysis', 'skills.data2': 'Statistical analysis',
      'skills.data3': 'Data visualization', 'skills.data4': 'Machine learning fundamentals',
      'skills.programmingTitle': 'Programming', 'skills.toolsTitle': 'Tools & platforms',
      'projects.label': 'Projects', 'projects.title': 'Selected work',
      'projects.intro': 'Areas I have explored through projects and practical learning.',
      'projects.p1.title': 'Phishing Detection System',
      'projects.p1.description': 'Exploring phishing detection through URL and HTML feature analysis and machine learning concepts.',
      'projects.p2.title': 'Network Traffic Analyzer',
      'projects.p2.description': 'Exploring how traffic patterns can be examined to identify unusual network activity.',
      'projects.p3.title': 'Vulnerability Assessment Lab',
      'projects.p3.description': 'Learning about vulnerability assessment and how to document findings clearly in a lab setting.',
      'projects.tagML': 'Machine Learning', 'projects.tagAnalysis': 'Data Analysis',
      'projects.tagSecurity': 'Security', 'projects.tagResearch': 'Research',
      'contact.label': 'Contact', 'contact.title': "Let's connect",
      'contact.intro': 'I welcome conversations about internships, data projects, and opportunities to learn.',
      'contact.detailsTitle': 'Contact details', 'contact.detailsText': 'The easiest way to reach me is by email or LinkedIn.',
      'contact.formTitle': 'Write an email', 'contact.name': 'Your name', 'contact.email': 'Your email',
      'contact.message': 'Your message', 'contact.compose': 'Open email app',
      'contact.note': 'This opens your email app with a draft. It does not send a message automatically.',
      'contact.mailSubject': 'Portfolio enquiry', 'contact.opening': 'Opening your email app. If nothing happens, use the email link on the left.',
      'footer.rights': 'All rights reserved.', 'footer.backToTop': 'Back to top ↑'
    },
    ms: {
      'meta.title': 'Yusuf Muhammad Sani | Portfolio Sains Data',
      'meta.description': 'Portfolio Yusuf Muhammad Sani, pelajar Sains Data yang sedang mencari peluang latihan industri. Terokai projek, kemahiran dan maklumat perhubungan.',
      'accessibility.skip': 'Langkau ke kandungan utama',
      'nav.label': 'Navigasi utama',
      'nav.home': 'Laman Utama', 'nav.about': 'Tentang Saya', 'nav.skills': 'Kemahiran', 'nav.projects': 'Projek', 'nav.contact': 'Hubungi',
      'nav.chooseLanguage': 'Pilih bahasa laman web', 'nav.openMenu': 'Buka menu navigasi', 'nav.closeMenu': 'Tutup menu navigasi',
      'hero.status': 'Terbuka kepada peluang latihan industri dalam Sains Data',
      'hero.role': 'Pelajar Sains Data · Bakal Penganalisis Data',
      'hero.description': 'Saya gemar menukar maklumat yang kompleks kepada cerapan yang jelas melalui analisis data, visualisasi dan penyelesaian masalah secara praktikal.',
      'hero.viewProjects': 'Terokai projek saya', 'hero.contactMe': 'Hubungi saya',
      'hero.photoAlt': 'Potret Yusuf Muhammad Sani',
      'hero.cardTitle': 'Pelajar Sains Data',
      'hero.cardDetails': 'Analitik Data · Pembelajaran Mesin · Visualisasi Data',
      'hero.location': 'Berpangkalan di Malaysia',
      'social.label': 'Profil profesional', 'social.github': 'Profil GitHub', 'social.linkedin': 'Profil LinkedIn', 'social.email': 'E-mel Yusuf',
      'about.label': 'Tentang saya',
      'about.title': 'Belajar, membina dan berkembang bersama data',
      'about.p1': 'Saya merupakan pelajar tahun kedua Ijazah Sarjana Muda Sains Data (Kepujian) di Albukhary International University, Malaysia. Minat saya merangkumi analisis data, pembelajaran mesin dan penyelesaian masalah menggunakan teknologi.',
      'about.p2': 'Saya sedang membina asas pengetahuan melalui pengajian universiti, latihan kendiri dan projek. Saya menghargai komunikasi yang jelas, kerjasama dan peluang untuk terus belajar daripada golongan profesional berpengalaman.',
      'about.educationLabel': 'Pendidikan', 'about.educationValue': 'Ijazah Sarjana Muda Sains Data (Kepujian) · Tahun 2',
      'skills.label': 'Kemahiran', 'skills.title': 'Kemahiran yang sedang saya pelajari dan gunakan',
      'skills.intro': 'Kemahiran yang sedang dibangunkan untuk mengendalikan data dan menyampaikan hasil analisis.',
      'skills.dataTitle': 'Data dan analitik', 'skills.data1': 'Analisis data', 'skills.data2': 'Analisis statistik',
      'skills.data3': 'Visualisasi data', 'skills.data4': 'Asas pembelajaran mesin',
      'skills.programmingTitle': 'Pengaturcaraan', 'skills.toolsTitle': 'Alat dan platform',
      'projects.label': 'Projek', 'projects.title': 'Hasil kerja pilihan',
      'projects.intro': 'Bidang yang telah saya terokai melalui projek dan pembelajaran praktikal.',
      'projects.p1.title': 'Sistem Pengesanan Pancingan Data',
      'projects.p1.description': 'Meneroka pengesanan pancingan data melalui analisis ciri URL dan HTML serta konsep pembelajaran mesin.',
      'projects.p2.title': 'Penganalisis Trafik Rangkaian',
      'projects.p2.description': 'Meneroka cara corak trafik dianalisis untuk mengenal pasti aktiviti rangkaian yang luar biasa.',
      'projects.p3.title': 'Makmal Penilaian Kerentanan',
      'projects.p3.description': 'Mempelajari penilaian kerentanan serta cara mendokumentasikan dapatan dengan jelas dalam persekitaran makmal.',
      'projects.tagML': 'Pembelajaran Mesin', 'projects.tagAnalysis': 'Analisis Data',
      'projects.tagSecurity': 'Keselamatan', 'projects.tagResearch': 'Penyelidikan',
      'contact.label': 'Hubungi', 'contact.title': 'Mari berhubung',
      'contact.intro': 'Saya mengalu-alukan perbincangan tentang latihan industri, projek data dan peluang pembelajaran.',
      'contact.detailsTitle': 'Maklumat perhubungan', 'contact.detailsText': 'Cara termudah menghubungi saya ialah melalui e-mel atau LinkedIn.',
      'contact.formTitle': 'Tulis e-mel', 'contact.name': 'Nama anda', 'contact.email': 'E-mel anda',
      'contact.message': 'Mesej anda', 'contact.compose': 'Buka aplikasi e-mel',
      'contact.note': 'Ini akan membuka aplikasi e-mel anda dengan draf mesej. Mesej tidak dihantar secara automatik.',
      'contact.mailSubject': 'Pertanyaan portfolio', 'contact.opening': 'Aplikasi e-mel sedang dibuka. Jika tiada apa-apa berlaku, gunakan pautan e-mel di sebelah.',
      'footer.rights': 'Hak cipta terpelihara.', 'footer.backToTop': 'Kembali ke atas ↑'
    },
    ar: {
      'meta.title': 'يوسف محمد ساني | ملف أعمال علم البيانات',
      'meta.description': 'ملف أعمال يوسف محمد ساني، طالب علم البيانات الذي يبحث عن فرص تدريب، ويعرض المشاريع والمهارات ووسائل التواصل.',
      'accessibility.skip': 'تخطي إلى المحتوى الرئيسي',
      'nav.label': 'التنقل الرئيسي',
      'nav.home': 'الرئيسية', 'nav.about': 'نبذة عني', 'nav.skills': 'المهارات', 'nav.projects': 'المشاريع', 'nav.contact': 'التواصل',
      'nav.chooseLanguage': 'اختر لغة الموقع', 'nav.openMenu': 'فتح قائمة التنقل', 'nav.closeMenu': 'إغلاق قائمة التنقل',
      'hero.status': 'متاح لفرص التدريب في علم البيانات',
      'hero.role': 'طالب علم البيانات · أطمح للعمل محللًا للبيانات',
      'hero.description': 'أستمتع بتحويل المعلومات المعقدة إلى رؤى واضحة من خلال تحليل البيانات وتصويرها وحل المشكلات بطريقة عملية.',
      'hero.viewProjects': 'استكشف مشاريعي', 'hero.contactMe': 'تواصل معي',
      'hero.photoAlt': 'صورة شخصية ليوسف محمد ساني',
      'hero.cardTitle': 'طالب علم البيانات',
      'hero.cardDetails': 'تحليلات البيانات · التعلم الآلي · تصور البيانات',
      'hero.location': 'مقيم في ماليزيا',
      'social.label': 'حسابات مهنية', 'social.github': 'ملف GitHub', 'social.linkedin': 'ملف LinkedIn', 'social.email': 'مراسلة يوسف',
      'about.label': 'نبذة عني',
      'about.title': 'أتعلم وأبني مهاراتي وأنمو في مجال البيانات',
      'about.p1': 'أنا طالب في السنة الثانية من برنامج بكالوريوس علوم البيانات (مع مرتبة الشرف) في جامعة البخاري الدولية بماليزيا. تشمل اهتماماتي تحليل البيانات والتعلم الآلي وإيجاد حلول عملية باستخدام التكنولوجيا.',
      'about.p2': 'أعمل على بناء أساس قوي من خلال الدراسة الجامعية والتعلم الذاتي والمشاريع. وأقدّر التواصل الواضح والعمل الجماعي وفرص التعلم المستمر من المهنيين ذوي الخبرة.',
      'about.educationLabel': 'التعليم', 'about.educationValue': 'بكالوريوس علوم البيانات (مع مرتبة الشرف) · السنة الثانية',
      'skills.label': 'المهارات', 'skills.title': 'ما أتعلمه وأستخدمه',
      'skills.intro': 'مجموعة من المهارات التي أطورها للعمل مع البيانات وعرض النتائج بوضوح.',
      'skills.dataTitle': 'البيانات والتحليلات', 'skills.data1': 'تحليل البيانات', 'skills.data2': 'التحليل الإحصائي',
      'skills.data3': 'تصور البيانات', 'skills.data4': 'أساسيات التعلم الآلي',
      'skills.programmingTitle': 'البرمجة', 'skills.toolsTitle': 'الأدوات والمنصات',
      'projects.label': 'المشاريع', 'projects.title': 'أعمال مختارة',
      'projects.intro': 'مجالات استكشفتها من خلال المشاريع والتعلم العملي.',
      'projects.p1.title': 'نظام كشف التصيد الاحتيالي',
      'projects.p1.description': 'استكشاف كشف التصيد الاحتيالي عبر تحليل خصائص عناوين URL وHTML ومفاهيم التعلم الآلي.',
      'projects.p2.title': 'محلل حركة مرور الشبكة',
      'projects.p2.description': 'استكشاف كيفية تحليل أنماط حركة الشبكة لتحديد الأنشطة غير المعتادة.',
      'projects.p3.title': 'مختبر تقييم الثغرات',
      'projects.p3.description': 'تعلم تقييم الثغرات وكيفية توثيق النتائج بوضوح في بيئة مختبرية.',
      'projects.tagML': 'التعلم الآلي', 'projects.tagAnalysis': 'تحليل البيانات',
      'projects.tagSecurity': 'الأمن', 'projects.tagResearch': 'البحث',
      'contact.label': 'التواصل', 'contact.title': 'لنتواصل',
      'contact.intro': 'يسعدني التواصل بشأن فرص التدريب ومشاريع البيانات وفرص التعلم.',
      'contact.detailsTitle': 'معلومات التواصل', 'contact.detailsText': 'أسهل طريقة للتواصل معي هي عبر البريد الإلكتروني أو LinkedIn.',
      'contact.formTitle': 'اكتب رسالة بريد إلكتروني', 'contact.name': 'اسمك', 'contact.email': 'بريدك الإلكتروني',
      'contact.message': 'رسالتك', 'contact.compose': 'افتح تطبيق البريد الإلكتروني',
      'contact.note': 'سيفتح هذا الخيار تطبيق البريد الإلكتروني مع مسودة رسالة، ولن تُرسل الرسالة تلقائيًا.',
      'contact.mailSubject': 'استفسار بشأن ملف الأعمال', 'contact.opening': 'يجري فتح تطبيق البريد الإلكتروني. إن لم يحدث شيء، فاستخدم رابط البريد الإلكتروني المجاور.',
      'footer.rights': 'جميع الحقوق محفوظة.', 'footer.backToTop': 'العودة إلى الأعلى ↑'
    },
    zh: {
      'meta.title': 'Yusuf Muhammad Sani | 数据科学作品集',
      'meta.description': '数据科学专业学生 Yusuf Muhammad Sani 的个人作品集，展示实习意向、项目、技能和联系方式。',
      'accessibility.skip': '跳转到主要内容',
      'nav.label': '主导航',
      'nav.home': '首页', 'nav.about': '关于我', 'nav.skills': '技能', 'nav.projects': '项目', 'nav.contact': '联系我',
      'nav.chooseLanguage': '选择网站语言', 'nav.openMenu': '打开导航菜单', 'nav.closeMenu': '关闭导航菜单',
      'hero.status': '正在寻找数据科学实习机会',
      'hero.role': '数据科学专业学生 · 未来的数据分析师',
      'hero.description': '我喜欢运用数据分析、可视化和实际问题解决能力，将复杂信息转化为清晰、有价值的洞见。',
      'hero.viewProjects': '探索我的项目', 'hero.contactMe': '联系我',
      'hero.photoAlt': 'Yusuf Muhammad Sani 的个人照片',
      'hero.cardTitle': '数据科学专业学生',
      'hero.cardDetails': '数据分析 · 机器学习 · 数据可视化',
      'hero.location': '现居马来西亚',
      'social.label': '职业社交账号', 'social.github': 'GitHub 主页', 'social.linkedin': 'LinkedIn 主页', 'social.email': '给 Yusuf 发邮件',
      'about.label': '关于我',
      'about.title': '在数据领域不断学习、实践与成长',
      'about.p1': '我是马来西亚 Albukhary International University 的数据科学（荣誉）学士二年级学生。我对数据分析、机器学习及运用技术解决实际问题充满兴趣。',
      'about.p2': '我通过大学课程、自主学习和项目实践不断打好基础。我重视清晰的沟通、团队合作，也希望持续向经验丰富的专业人士学习。',
      'about.educationLabel': '教育背景', 'about.educationValue': '数据科学（荣誉）学士 · 二年级',
      'skills.label': '技能', 'skills.title': '我正在学习与使用的技能',
      'skills.intro': '持续积累数据处理、分析和成果表达方面的工具与能力。',
      'skills.dataTitle': '数据与分析', 'skills.data1': '数据分析', 'skills.data2': '统计分析',
      'skills.data3': '数据可视化', 'skills.data4': '机器学习基础',
      'skills.programmingTitle': '编程', 'skills.toolsTitle': '工具与平台',
      'projects.label': '项目', 'projects.title': '精选作品',
      'projects.intro': '通过项目实践和动手学习探索的领域。',
      'projects.p1.title': '网络钓鱼检测系统',
      'projects.p1.description': '探索如何通过网址、HTML 特征分析和机器学习概念进行网络钓鱼检测。',
      'projects.p2.title': '网络流量分析工具',
      'projects.p2.description': '探索如何分析网络流量模式，识别异常网络活动。',
      'projects.p3.title': '漏洞评估实验',
      'projects.p3.description': '在实验环境中学习漏洞评估，并练习清晰地记录分析结果。',
      'projects.tagML': '机器学习', 'projects.tagAnalysis': '数据分析',
      'projects.tagSecurity': '网络安全', 'projects.tagResearch': '研究',
      'contact.label': '联系方式', 'contact.title': '期待与你交流',
      'contact.intro': '欢迎与我交流实习机会、数据项目和学习合作。',
      'contact.detailsTitle': '联系方式', 'contact.detailsText': '你可以通过电子邮件或 LinkedIn 与我联系。',
      'contact.formTitle': '撰写电子邮件', 'contact.name': '你的姓名', 'contact.email': '你的邮箱',
      'contact.message': '你的留言', 'contact.compose': '打开邮件应用',
      'contact.note': '点击后会打开邮件应用并生成草稿，不会自动发送消息。',
      'contact.mailSubject': '作品集咨询', 'contact.opening': '正在打开邮件应用。如果没有反应，请使用左侧的邮箱链接。',
      'footer.rights': '保留所有权利。', 'footer.backToTop': '返回顶部 ↑'
    }
  };

  const picker = document.getElementById('languageSelect');
  const supported = ['en', 'ms', 'ar', 'zh'];
  let language = 'en';
  try {
    const saved = localStorage.getItem('portfolioLanguage');
    if (supported.includes(saved)) language = saved;
  } catch (_) { /* Private mode / restricted storage. */ }

  function translate(key) { return translations[language]?.[key] ?? translations.en[key] ?? key; }
  window.portfolioT = translate;

  function applyLanguage(next) {
    language = supported.includes(next) ? next : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = translate(el.dataset.i18n); });
    const translatedAttributes = {
      'data-i18n-content': 'content',
      'data-i18n-placeholder': 'placeholder',
      'data-i18n-aria-label': 'aria-label',
      'data-i18n-alt': 'alt'
    };
    for (const [attribute, target] of Object.entries(translatedAttributes)) {
      document.querySelectorAll('[' + attribute + ']').forEach(el => el.setAttribute(target, translate(el.getAttribute(attribute))));
    }
    // Native names in the select are intentionally unchanged.
    picker.value = language;
    try { localStorage.setItem('portfolioLanguage', language); } catch (_) { /* Optional. */ }
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language } }));
  }
  picker.addEventListener('change', event => applyLanguage(event.target.value));
  applyLanguage(language);
})();
