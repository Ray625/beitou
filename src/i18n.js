import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './assets/en.json'
import zh_tw from './assets/zh_tw.json';

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh_tw
  }
}

const currentLanguage = window.location.pathname.includes('/en') ? 'en' : 'zh';

i18n
  .use(initReactI18next)
  .init({
  resources,
  lng: currentLanguage,
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  }
})

export default i18n;