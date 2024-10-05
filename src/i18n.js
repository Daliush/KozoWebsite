import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Translation resources
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector) // To detect language automatically
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback language if detected language is unavailable
    interpolation: {
      escapeValue: false // React already protects from XSS
    }
  });

export default i18n;