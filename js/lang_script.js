var language_button = document.getElementById("lang_button");
var about_button = document.getElementById("about_button");
var experience_button = document.getElementById("experience_button");
var education_button = document.getElementById("education_button");
var skills_button = document.getElementById("skills_button");
var publications_button = document.getElementById("publications_button");
var resume_button = document.getElementById("resume_file");

var en = document.getElementsByClassName("lang_en");
var pt = document.getElementsByClassName("lang_pt");
var lang_en = true;

function changeLanguage() {
  if (lang_en == false) {
    language_button.innerHTML = "Português";
    about_button.innerHTML = "About";
    experience_button.innerHTML = "Experience";
    education_button.innerHTML = "Education";
    skills_button.innerHTML = "Skills";
    publications_button.innerHTML = "publications";
    resume_button.href="https://ahmoura.github.io/assets/resume_en.pdf";

    for (i = 0; i < en.length; i++) {
      en[i].style.display = "block";
      pt[i].style.display = "none";
    }
    lang_en = true;
  } else {
    language_button.innerHTML = "English";
    about_button.innerHTML = "Sobre";
    experience_button.innerHTML = "Experiência";
    education_button.innerHTML = "Educação";
    skills_button.innerHTML = "Habilidades";
    publications_button.innerHTML = "Interesses";
    resume_button.href="https://ahmoura.github.io/assets/resume_pt.pdf";
    
    for (i = 0; i < en.length; i++) {
      en[i].style.display = "none";
      pt[i].style.display = "block";
    }
    lang_en = false;
  }
}

// window.onload = function() {
//   changeLanguage();
// };
