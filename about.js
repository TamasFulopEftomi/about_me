let en, hu;

loadLanguages();

function loadLanguages() {
fetch('lang_EN.json')
  .then(response => response.json())
  .then(data => {
    en = data;
    if (document.getElementById('lang_EN').innerHTML) {
      language(en);
    }
  })
  .catch(error => console.error('Error loading JSON:', error));

fetch('lang_HU.json')
  .then(response => response.json())
  .then(data => {
    hu = data;
  })
  .catch(error => console.error('Error loading JSON:', error));
  console.log('Beolvasva.')
}

document.getElementById('lang_EN').addEventListener("click", english);
document.getElementById('lang_HU').addEventListener("click", hungarian);

function english() {
    console.log("ENGLISH");
    language(en);
}

function hungarian() {
  console.log("HUNGARIAN");
  language(hu);
}

function language(lang) {
    document.getElementById('tx_title').innerHTML = lang.title;
    document.getElementById('tx_name').innerHTML = lang.name;
    document.getElementById('tx_profession').innerHTML = lang.profession;

    document.getElementById('btn_about').innerHTML = lang.about;
    document.getElementById('h_about').innerHTML = lang.about;
    document.getElementById('btn_faq').innerHTML = lang.faq;
    document.getElementById('h_faq').innerHTML = lang.faq;
    document.getElementById('btn_techno').innerHTML = lang.techno;
    document.getElementById('h_techno').innerHTML = lang.techno;

    document.getElementById('btn_project_portfolio').innerHTML = lang.project.portfolio;
    document.getElementById('h_project_portfolio').innerHTML = lang.project.portfolio;
    document.getElementById('h2_project_portfolio').innerHTML = lang.project.portfolio_h2;

    document.getElementById('btn_project_swing').innerHTML = lang.project.swing;
    document.getElementById('h_project_swing').innerHTML = lang.project.swing;
    document.getElementById('h2_project_swing').innerHTML = lang.project.swing_h2;
    document.getElementById('btn_project_spring').innerHTML = lang.project.spring;
    document.getElementById('h_project_spring').innerHTML = lang.project.spring;
    document.getElementById('h2_project_spring').innerHTML = lang.project.spring_h2;
    document.getElementById('btn_contact').innerHTML = lang.contact;
    document.getElementById('h_contact').innerHTML = lang.contact;

    document.getElementById('about_me').innerHTML = lang.about_me;

    document.getElementById('tx_q1').innerHTML = lang.q1;
    document.getElementById('tx_a1').innerHTML = lang.a1;
    document.getElementById('tx_q2').innerHTML = lang.q2;
    document.getElementById('tx_a2').innerHTML = lang.a2;
    document.getElementById('tx_q3').innerHTML = lang.q3;
    document.getElementById('tx_a3').innerHTML = lang.a3;
    document.getElementById('tx_q4').innerHTML = lang.q4;
    document.getElementById('tx_a4').innerHTML = lang.a4;
    document.getElementById('tx_q5').innerHTML = lang.q5;
    document.getElementById('tx_a5').innerHTML = lang.a5;

    document.getElementById('techno_development').innerHTML = lang.techno_development;
    document.getElementById('techno_other').innerHTML = lang.techno_other;
    document.getElementById('techno_framework').innerHTML = lang.techno_framework;
    document.getElementById('techno_development_tools').innerHTML = lang.techno_development_tools;

    document.getElementById('project_portfolio_1').innerHTML = lang.project.portfolio_1;
    document.getElementById('project_portfolio_2').innerHTML = lang.project.portfolio_2;

    document.getElementById('project_swing_1').innerHTML = lang.project.swing_1;
    document.getElementById('project_swing_2').innerHTML = lang.project.swing_2;
    document.getElementById('project_swing_button').innerHTML = lang.project.swing_button;
    document.getElementById('project_swing_caption').innerHTML = lang.project.swing_h2;
    document.getElementById('project_swing_3').innerHTML = lang.project.swing_3;

    document.getElementById('project_spring_1').innerHTML = lang.project.spring_1;
    document.getElementById('project_spring_2').innerHTML = lang.project.spring_2;
    document.getElementById('project_spring_button').innerHTML = lang.project.spring_button;
    document.getElementById('project_spring_caption').innerHTML = lang.project.spring_h2;
    document.getElementById('project_spring_3').innerHTML = lang.project.spring_3;

    document.getElementById('p_contact').innerHTML = lang.contact_text;
    document.getElementById('p_footer').innerHTML = lang.footer_text;

    document.getElementById('i_github').innerHTML = lang.github;
    document.getElementById('i_linkedin').innerHTML = lang.linkedin;
    document.getElementById('i_facebook').innerHTML = lang.facebook;
    document.getElementById('i_email').innerHTML = lang.email;
    document.getElementById('i_mobile').innerHTML = lang.mobile;
}

$(document).ready(function () {
  $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $("#navbarNavAltMarkup").hasClass("navbar-collapse collapse show");
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
          $("#openCloseBtn").click();
      }
  });
});