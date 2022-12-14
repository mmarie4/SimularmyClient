import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEN from './en.json';
import translationsFR from './fr.json';

const resources = {
  en: {
    translation: translationsEN
  },
  fr: {
    translation: translationsFR
  }
};

const getLocale = () => {
    const cookieLocale = localStorage.getItem("simularmy-locale");
    const browserLocale = navigator.languages === undefined
      ? navigator.language
      : navigator.languages[0]; 
    return cookieLocale || browserLocale || "en";
}

export const getLocaleToDisplay = () => {
    const locale = getLocale().toLowerCase();
    if (locale.includes("en"))
        return "EN";
    if (locale.includes("fr"))
        return "FR";
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLocale(),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;