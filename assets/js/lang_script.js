var language_button = document.getElementById("lang_button");
var resume_button = document.getElementById("resume_file");

var en = document.getElementsByClassName("lang_en");
var pt = document.getElementsByClassName("lang_pt");

var lang_en = true;

function changeLanguage() {
  if (lang_en == false) {
    lang_en = true;
    language_button.innerHTML = "Website language: &#x1F1FA;&#x1F1F8;";
    resume_button.href="https://antonio-vmoura.github.io/assets/docs/antonio_vinicius_resume_en.pdf";

    for (i = 0; i < en.length; i++) {
      en[i].style.display = "block";
      pt[i].style.display = "none";
    }
  } else {
    lang_en = false;
    language_button.innerHTML = "Idioma do site: &#x1F1E7;&#x1F1F7;";
    resume_button.href="https://antonio-vmoura.github.io/assets/docs/antonio_vinicius_resume_pt.pdf";
    

    for (i = 0; i < en.length; i++) {
      en[i].style.display = "none";
      pt[i].style.display = "block";
    }
  }
}
