/**
 * Internationalization (i18n) Engine for Talha Kılıç Portfolio
 */

const translations = {
  tr: {
    // Navigation
    "nav.aboutMe": "Hakkımda",
    "nav.skills": "Yeteneklerim",
    "nav.education": "Eğitim",
    "nav.projects": "Projelerim",
    "nav.socials": "İletişim",

    // Hero Section
    "hero.bio": "Herkese merhaba, ben Talha Kılıç. 11 yaşımdan beri yazılıma ve teknolojiye büyük bir tutku duyuyorum; basit bir merakla başlayan bu serüven, zamanla ciddi bir ilgi ve yetenek alanına dönüştü. İlk zamanlarda Python ile küçük projeler ve temel betikler yazarak kodlamanın mutfağını keşfettim; bu süreç bana güçlü bir problem çözme ve mantık altyapısı kazandırdı. Zamanla uzmanlığımı web geliştirmeye yönlendirerek modern teknolojilerle web siteleri oluşturmayı ve internet mimarisini öğrenmeyi sürdürdüm. Son dönemde ise programlama ufkumu genişletmek ve nesne yönelimli programlama (OOP) kavramlarında derinleşmek adına Java öğrenmeye başladım. Sürekli öğrenme, merak ve pratikle ilerlediğim bu yolda, kendimi geliştirmeye ve yenilikçi projeler üretmeye heyecanla devam ediyorum.",
    "hero.skills": ["Junior Frontend Geliştiriciyim", "Türkiye'de Yaşıyorum", "15 Yaşındayım"],

    // Skills Section
    "skills.title": "Yeteneklerim",
    "skills.subtitle": "4.5 yılı aşkın deneyimim boyunca öğrendiğim programlama dilleri, web teknolojileri ve tasarım araçları.",
    "skills.catFrontend": "Frontend",
    "skills.catProgramming": "Programlama",
    "skills.catTools": "Araçlar & Tasarım",
    "skills.cardFrontendTitle": "Frontend Geliştirme",
    "skills.cardProgrammingTitle": "Programlama",
    "skills.cardToolsTitle": "Tasarım & Geliştirici Araçları",
    "skills.badgeAdvanced": "İleri Düzey",
    "skills.badgeIntermediate": "Orta Düzey",
    "skills.badgeScripting": "Betik & Algoritma",
    "skills.badgeLearningOOP": "OOP (Öğrenim Aşamasında)",
    "skills.badgeUIUX": "UI/UX Tasarımı",
    "skills.badgeVersionControl": "Versiyon Kontrolü",

    // Education Section
    "edu.title": "Eğitim & Akademik",
    "edu.subtitle": "Akademik başarıyı, kodlarla geleceği inşa etme tutkusuyla birleştiriyorum.",
    "edu.statLgsLabel": "LGS Puanı",
    "edu.statNationwideLabel": "Türkiye Derecesi",
    "edu.statYearsLabel": "Yıllık Deneyim",
    "edu.statGradeLabel": "Sınıf",
    "edu.statGradeValue": '10<span class="eduStatSub">. Sınıf</span>',
    "edu.present": "Günümüz",
    "edu.schoolLocation": '<i class="fa-solid fa-location-dot"></i> Ankara, Türkiye &nbsp;·&nbsp; <i class="fa-regular fa-calendar"></i> 2023 – Günümüz',
    "edu.schoolDesc": 'Türkiye\'nin en köklü ve saygın liselerinden biri olan <strong>Ankara Atatürk Anadolu Lisesi\'nde (AAAL)</strong> 10. sınıf öğrencisiyim. LGS merkezi sınavında <strong>500 üzerinden 483 puan</strong> alarak Türkiye genelinde <strong>ilk %0.75\'lik dilime</strong> girdim. Yüksek akademik başarımı, yazılım mühendisliğine olan derin tutkumla eş zamanlı olarak sürdürüyorum.',
    "edu.metricLgsHeader": "LGS Puan Başarısı",
    "edu.metricPercentileHeader": "Yüzdelik Dilim Sıralaması",
    "edu.metricPercentileSub": 'İlk %0.75 <span class="text-xs text-gray-400 font-normal">(133 adayda 1.)</span>',
    "edu.visualizedText": "Görselleştirme: Türkiye geneli her ~133 aday arasından ilk 1'e giren derece",
    "edu.dotTalhaTitle": "Talha KILIÇ - Derece Yapan Aday (1 / 133)",
    "edu.dotOtherTitle": "Diğer Sınav Adayı",
    "edu.journeyTitle": "Bağımsız Geliştirici Yolculuğu",
    "edu.journeyMetaDate": '<i class="fa-regular fa-calendar"></i> 2021 – Günümüz',
    "edu.journeyDesc": "11 yaşında Python betikleri ve algoritma temelleriyle kodlamaya başladım. 4.5 yılı aşkın kesintisiz öğrenim sürecimde HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap ve Java OOP kullanarak modern web uygulamaları geliştirdim ve gerçek müşteriler için freelance projeler teslim ettim.",

    // Projects Section
    "projects.title": "Projelerim",
    "projects.subtitle": "Müşteriler için geliştirdiğim freelance projeleri ve kişisel web geliştirme çalışmalarımı inceleyin.",
    "projects.filterAll": "Tüm Projeler",
    "projects.filterFreelance": "Freelance & Müşteri",
    "projects.filterPersonal": "Kişisel Projeler",
    "projects.p1Desc": "Tunç Bey'in matematik kanalı için hazırladığım web sitesi; sade, modern ve kullanıcı dostu bir eğitim platformu sunmak amacıyla tasarlandı.",
    "projects.p2Desc": "Dostlar Mantı restoranı için dijital menü, öne çıkan lezzetler ve konum bilgilerini içeren modern ve mobil uyumlu bir web sitesi.",
    "projects.p3Desc": "Kişiselleştirilebilir zamanlayıcılar, Pomodoro sayacı, not alma, soru takibi ve detaylı çalışma istatistikleri sunan kapsamlı bir ders çalışma platformu.",
    "projects.p4Desc": "Geçtiğimiz haftanın Twitter'da öne çıkan en popüler ve ilgi çekici olaylarını eğlenceli bir dille derlediğimiz ve özetlediğimiz e-bülten!",
    "projects.liveDemo": "Canlı Önizleme",
    "projects.githubRepo": "GitHub Deposu",

    // Socials Section
    "socials.title": "Sosyal Medya & İletişim",
    "socials.subtitle": "Sosyal medya hesaplarımdan bana ulaşabilir, açık kaynak projelerimi inceleyebilir veya mesaj gönderebilirsiniz.",
    "socials.githubDesc": "GitHub üzerindeki projelerimi ve açık kaynak katkılarımı inceleyin.",
    "socials.emailTitle": "E-Posta",
    "socials.emailDesc": "Sorularınız, iş birliği ve profesyonel iletişim için e-posta göndermekten çekinmeyin.",
    "socials.twitterDesc": "Düşüncelerimi, paylaşımlarımı ve güncel gelişmelerimi takip etmek için Twitter'da takibe alın.",
    "socials.linkedinDesc": "Profesyonel ağınızı genişletmek ve kariyer güncellemelerim için LinkedIn'den bağlantı kurun.",

    // Footer
    "footer.text": "© 2025 Bu Web Sitesi Talha KILIÇ Tarafından Geliştirilmiştir.",

    // Spotify Widget
    "spotify.nowListening": "Talha Şu An Dinliyor",
    "spotify.lastPlayed": "Talha En Son Dinledi",
    "spotify.ago": "önce"
  },
  en: {
    // Navigation
    "nav.aboutMe": "About Me",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.socials": "Socials",

    // Hero Section
    "hero.bio": "Hello everyone, my name is Talha Kılıç. I’ve been passionate about software and technology since I was 11 years old, and what started as a simple curiosity has now grown into a serious interest and skill set. In the early days, I experimented with small Python projects, writing basic scripts and exploring how coding works behind the scenes, which gave me a strong foundation in problem-solving and logic. Over time, I expanded my knowledge into web development, where I began learning how to create websites, work with modern frameworks, and understand the structure of the internet from a developer’s perspective. Recently, I’ve also started learning Java to broaden my programming skills and gain experience with more complex, object-oriented programming concepts. This journey has been a mix of curiosity, self-learning, and constant practice, and I’m excited to continue improving and building more advanced projects as I move forward.",
    "hero.skills": ["a Junior Front End Developer", "Based in Turkey", "15 years old"],

    // Skills Section
    "skills.title": "My Skills",
    "skills.subtitle": "Scripting, markup, programming languages, and design tools I've learned through 4.5 years of experience.",
    "skills.catFrontend": "Frontend",
    "skills.catProgramming": "Programming",
    "skills.catTools": "Tools & Design",
    "skills.cardFrontendTitle": "Frontend Development",
    "skills.cardProgrammingTitle": "Programming & Logic",
    "skills.cardToolsTitle": "Tools & Design",
    "skills.badgeAdvanced": "Advanced",
    "skills.badgeIntermediate": "Intermediate",
    "skills.badgeScripting": "Scripting & Logic",
    "skills.badgeLearningOOP": "Learning OOP",
    "skills.badgeUIUX": "UI/UX Design",
    "skills.badgeVersionControl": "Version Control",

    // Education Section
    "edu.title": "Education & Academics",
    "edu.subtitle": "Academic excellence combined with a passion for building the future through code.",
    "edu.statLgsLabel": "LGS Score",
    "edu.statNationwideLabel": "Nationwide",
    "edu.statYearsLabel": "Years Coding",
    "edu.statGradeLabel": "Grade",
    "edu.statGradeValue": '10<span class="eduStatSub">th</span>',
    "edu.present": "Present",
    "edu.schoolLocation": '<i class="fa-solid fa-location-dot"></i> Ankara, Turkey &nbsp;·&nbsp; <i class="fa-regular fa-calendar"></i> 2023 – Present',
    "edu.schoolDesc": 'Currently a 10th-grade student at <strong>Ankara Atatürk Anadolu Lisesi (AAAL)</strong>, one of Turkey\'s most prestigious high schools. I was admitted by scoring <strong>483 out of 500</strong> on the LGS national exam, placing me in the <strong>top 0.75%</strong> of all students in Turkey. I balance strong academic performance with a deep passion for software engineering.',
    "edu.metricLgsHeader": "LGS Score Performance",
    "edu.metricPercentileHeader": "Nationwide Percentile Standing",
    "edu.metricPercentileSub": 'Top 0.75% <span class="text-xs text-gray-400 font-normal">(1 in 133 candidates)</span>',
    "edu.visualizedText": "Visualized: Selected among top 1 candidate out of ~133 test-takers nationwide",
    "edu.dotTalhaTitle": "Talha KILIÇ - Selected Candidate (Rank 1 / 133)",
    "edu.dotOtherTitle": "Other Exam Candidate",
    "edu.journeyTitle": "Independent Developer Journey",
    "edu.journeyMetaDate": '<i class="fa-regular fa-calendar"></i> 2021 – Present',
    "edu.journeyDesc": "Started coding at age 11 with Python scripting and algorithm fundamentals. Over 4.5+ years of continuous self-learning, I built modern web applications using HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap and Java OOP; delivering multiple freelance projects for real clients.",

    // Projects Section
    "projects.title": "My Projects",
    "projects.subtitle": "Explore a curated showcase of my freelance client work and personal web development projects.",
    "projects.filterAll": "All Projects",
    "projects.filterFreelance": "Freelance & Client",
    "projects.filterPersonal": "Personal Projects",
    "projects.p1Desc": "The website I created for Mr. Tunç for his mathematics channel was designed to provide a clean, modern, and user-friendly educational platform.",
    "projects.p2Desc": "A modern, responsive website created for Dostlar Mantı restaurant featuring a digital menu, brand highlights, and location details.",
    "projects.p3Desc": "A comprehensive study platform with customizable timers, Pomodoro timers, note-taking, question tracking, and detailed study statistics.",
    "projects.p4Desc": "A newsletter where we gather and summarize the most popular and interesting events on Twitter from the past week in an entertaining way!",
    "projects.liveDemo": "Live Demo",
    "projects.githubRepo": "GitHub Repository",

    // Socials Section
    "socials.title": "My Socials",
    "socials.subtitle": "Connect with me across social platforms, view my open-source code, or send me a message.",
    "socials.githubDesc": "Check out my projects and contributions on GitHub.",
    "socials.emailTitle": "E-Mail",
    "socials.emailDesc": "Feel free to contact me via email for any inquiries or professional correspondence.",
    "socials.twitterDesc": "Follow me on Twitter to see my thoughts, reactions, and everyday updates.",
    "socials.linkedinDesc": "Connect with me on LinkedIn for professional networking and career updates.",

    // Footer
    "footer.text": "© 2025 This Website Developed by Talha KILIÇ.",

    // Spotify Widget
    "spotify.nowListening": "Talha's Now Listening",
    "spotify.lastPlayed": "Talha's Last Played",
    "spotify.ago": "ago"
  }
};

const I18nManager = {
  currentLang: "en", // Default language English

  init() {
    // Read saved preference or default to English
    try {
      const savedLang = localStorage.getItem("preferred_lang");
      if (savedLang && (savedLang === "tr" || savedLang === "en")) {
        this.currentLang = savedLang;
      } else {
        this.currentLang = "en";
      }
    } catch (e) {
      this.currentLang = "en";
    }

    this.applyLanguage(this.currentLang);
    this.updateToggleButtonsUI();
  },

  setLanguage(lang) {
    if (lang !== "tr" && lang !== "en") return;
    this.currentLang = lang;
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch (e) {}

    this.applyLanguage(lang);
    this.updateToggleButtonsUI();
  },

  toggleLanguage() {
    const nextLang = this.currentLang === "tr" ? "en" : "tr";
    this.setLanguage(nextLang);
  },

  applyLanguage(lang) {
    document.documentElement.lang = lang;

    const dict = translations[lang] || translations.tr;

    // Update text elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update innerHTML elements with data-i18n-html
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update element titles / tooltips with data-i18n-title
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (dict[key] !== undefined) {
        el.setAttribute("title", dict[key]);
      }
    });

    // Update Typed.js strings if typed instance exists
    if (window.typedInstance && dict["hero.skills"]) {
      window.typedInstance.strings = dict["hero.skills"];
      window.typedInstance.reset();
    }

    // Refresh Now Playing widget if available
    if (window.NowPlayingWidget && window.NowPlayingWidget.lastTrackData) {
      window.NowPlayingWidget.updateUI(window.NowPlayingWidget.lastTrackData);
    }
  },

  updateToggleButtonsUI() {
    document.querySelectorAll(".langToggleBtn").forEach((btn) => {
      const trBadge = btn.querySelector(".langOption[data-lang='tr']");
      const enBadge = btn.querySelector(".langOption[data-lang='en']");

      if (trBadge && enBadge) {
        if (this.currentLang === "tr") {
          trBadge.classList.add("activeLang");
          enBadge.classList.remove("activeLang");
        } else {
          enBadge.classList.add("activeLang");
          trBadge.classList.remove("activeLang");
        }
      }
    });
  },

  t(key) {
    const dict = translations[this.currentLang] || translations.tr;
    return dict[key] || key;
  }
};

window.I18nManager = I18nManager;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => I18nManager.init());
} else {
  I18nManager.init();
}
