import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
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

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  resources,
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
    },
  detection: {
    order: ['path', 'navigator'],
    lookupFromPathIndex: 0,
    }
})

export default i18n;