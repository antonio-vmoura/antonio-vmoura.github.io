var language_button = document.getElementById("lang_button");
var en = document.getElementsByClassName("lang_en");
var pt = document.getElementsByClassName("lang_pt");

var lang_en = true;

function changeLanguage() {
  if (lang_en == false) {
    language_button.innerHTML = "Language: &#x1F1FA;&#x1F1F8;";
    lang_en = true;

    for (i = 0; i < en.length; i++) {
      en[i].style.display = "block";
      pt[i].style.display = "none";
    }
  } else {
    language_button.innerHTML = "Idioma: &#x1F1E7;&#x1F1F7;";
    lang_en = false;

    for (i = 0; i < en.length; i++) {
      en[i].style.display = "none";
      pt[i].style.display = "block";
    }
  }
}
