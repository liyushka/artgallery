/* ==========================================
   Art Gallery - Internationalization (EN, RU, UZ)
   ========================================== */

const translations = {
  en: {
    nav_home: "Home",
    nav_collection: "Collection",
    nav_artists: "Artists",
    nav_about: "About",
    nav_saved: "Saved",
    hero_title: "Discover Timeless Masterpieces",
    hero_subtitle: "Explore curated fine art collections from history's most renowned artists in an immersive digital experience.",
    hero_btn: "Explore Collection",
    featured_title: "Featured Artworks",
    featured_subtitle: "Handpicked selections from legendary painters",
    btn_all: "All Styles",
    btn_renaissance: "Renaissance",
    btn_impressionism: "Impressionism",
    btn_modern: "Modern Art",
    btn_abstract: "Abstract",
    search_placeholder: "Search artworks or artists...",
    collection_title: "Art Collection",
    collection_subtitle: "Browse through centuries of creative history",
    artists_title: "Renowned Artists",
    artists_subtitle: "Meet the visionaries behind the canvas",
    about_title: "About Art Gallery",
    about_subtitle: "Bridging classical fine art with modern digital elegance",
    about_h1: "Our Philosophy",
    about_p1: "Art Gallery is designed to provide an unadulterated visual experience. We believe that digital galleries should honor the aesthetic integrity of physical museums: clean spaces, high contrast, and zero distractions.",
    about_h2: "Curated Excellence",
    about_p2: "Each piece in our virtual gallery is carefully documented to preserve its cultural significance, offering art lovers, students, and collectors instant access to historic brilliance.",
    saved_title: "Your Saved Collection",
    saved_subtitle: "Artworks you have favorited during your visit",
    empty_saved_title: "No saved artworks yet",
    empty_saved_desc: "Click the heart icon on any artwork to add it to your personal gallery.",
    empty_btn: "Browse Collection",
    footer_text: "© 2026 Art Gallery. All rights reserved."
  },
  ru: {
    nav_home: "Главная",
    nav_collection: "Коллекция",
    nav_artists: "Художники",
    nav_about: "О галерее",
    nav_saved: "Избранное",
    hero_title: "Откройте шедевры мирового искусства",
    hero_subtitle: "Исследуйте коллекции произведений самых известных художников истории в виртуальном формате.",
    hero_btn: "Смотреть коллекцию",
    featured_title: "Избранные картины",
    featured_subtitle: "Лучшие произведения из мирового наследия",
    btn_all: "Все стили",
    btn_renaissance: "Ренессанс",
    btn_impressionism: "Импрессионизм",
    btn_modern: "Модерн",
    btn_abstract: "Абстракционизм",
    search_placeholder: "Поиск по названию или автору...",
    collection_title: "Коллекция картин",
    collection_subtitle: "Путешествие сквозь века художественной истории",
    artists_title: "Великие художники",
    artists_subtitle: "Познакомьтесь с творцами мировых шедевров",
    about_title: "О нашей галерее",
    about_subtitle: "Объединяем классическое искусство и современные технологии",
    about_h1: "Наша философия",
    about_p1: "Art Gallery создана для чистого эстетического восприятия. Мы верим, что цифровое пространство должно передавать атмосферу настоящих музеев: строгие линии, идеальные отступы и отсутствие лишних деталей.",
    about_h2: "Высокая культура",
    about_p2: "Каждая картина сопровождена важной исторической информацией, открывая художникам и ценителям искусства легкий доступ к культурному достоянию.",
    saved_title: "Сохранённые картины",
    saved_subtitle: "Ваша личная подборка избранных шедевров",
    empty_saved_title: "В избранном пока ничего нет",
    empty_saved_desc: "Нажмите на иконку сердечка на карточке картины, чтобы добавить её сюда.",
    empty_btn: "Перейти в коллекцию",
    footer_text: "© 2026 Art Gallery. Все права защищены."
  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_collection: "Kolleksiya",
    nav_artists: "Rassomlar",
    nav_about: "Galereya haqida",
    nav_saved: "Saqlanganlar",
    hero_title: "San'at durdonalarini kashf eting",
    hero_subtitle: "Tarixning eng mashhur rassomlari ijodini zamonaviy raqamli formatda tomosha qiling.",
    hero_btn: "Kolleksiyani ko'rish",
    featured_title: "Tanlangan asarlar",
    featured_subtitle: "Dunyo san'atining eng saralangan namunalari",
    btn_all: "Barcha uslublar",
    btn_renaissance: "Uyg'onish davri",
    btn_impressionism: "Impressionizm",
    btn_modern: "Modern",
    btn_abstract: "Abstraksionizm",
    search_placeholder: "Nom yoki rassom bo'yicha qidiruv...",
    collection_title: "Rasmlar kolleksiyasi",
    collection_subtitle: "Ko'p asrlik san'at tarixi bo'ylab sayohat",
    artists_title: "Buyuk rassomlar",
    artists_subtitle: "Dunyo durdonalarini yaratgan ijodkorlar",
    about_title: "Galereya haqida",
    about_subtitle: "Klassik san'at va zamonaviy texnologiyalar uyg'unligi",
    about_h1: "Bizning filosofiyamiz",
    about_p1: "Art Gallery sof estetik zavq bag'ishlash uchun yaratilgan. Raqamli galereya haqiqiy muzey muhitini aks ettirishi kerak deb ҳisoblaymiz.",
    about_h2: "Madaniy meros",
    about_p2: "Har bir asar o'zining tarixiy ahamiyati bilan taqdim etilib, san'atsevarlar uchun qimmatli manba bo'lib xizmat qiladi.",
    saved_title: "Saqlangan asarlar",
    saved_subtitle: "Siz saralab olgan shaxsiy to'plam",
    empty_saved_title: "Hali hech narsa saqlanmagan",
    empty_saved_desc: "Rasmni saqlash uchun uning burchagidagi yurakcha tugmasini bosing.",
    empty_btn: "Kolleksiyaga o'tish",
    footer_text: "© 2026 Art Gallery. Barcha huquqlar ҳimoyalangan."
  }
};

function applyLanguage(lang) {
  const currentLang = translations[lang] ? lang : 'en';
  localStorage.setItem('language', currentLang);

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = currentLang;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ru';
  applyLanguage(savedLang);

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }
});