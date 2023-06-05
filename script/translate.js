import i18next from "i18next";
import csTranslation from "/locales/cs.json";
import enTranslation from "/locales/en.json";

i18next.init({
    lng: "cs",
    resources: {
        cs: {
            translation: csTranslation
        },
        en: {
            translation: enTranslation
        }
    }
});

function changeLanguage(language) {
    i18next.changeLanguage(language);
    translateTexts();
}

document.getElementById("language-select").addEventListener("change", function (event) {
    var selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
});

function translateTexts() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = i18next.t(key);
    });
}

document.addEventListener("DOMContentLoaded", translateTexts);
i18next.on("languageChanged", translateTexts);
