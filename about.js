// @ts-nocheck

let currentLang = localStorage.getItem('lang') || 'en';
let translations = {};

function loadLang(lang) {
  fetch(`lang/lang_${lang.toUpperCase()}.json`)
    .then(res => res.json())
    .then(data => {
      translations = data;
      localStorage.setItem('lang', lang);
      applyTranslations();
    })
    .catch(err => console.error('Language load error:', err));
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations && key.includes('.')) {
      el.innerHTML = key.split('.').reduce((o, k) => o && o[k], translations) || '';
    } else if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });
}

document.getElementById('lang_EN').addEventListener('click', () => loadLang('en'));
document.getElementById('lang_HU').addEventListener('click', () => loadLang('hu'));

loadLang(currentLang);

document.addEventListener('click', function (event) {
  const navbar = document.getElementById('navbarNavAltMarkup');

  if (navbar.classList.contains('show') &&
      !event.target.closest('.navbar-toggler')) {
    document.getElementById('openCloseBtn').click();
  }
});
