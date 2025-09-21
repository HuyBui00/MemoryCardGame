import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n_en, i18n_vi } from "./Utilities/Constants/i18nText";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: i18n_en,
    },
    vi: {
      translation: i18n_vi,
    },
  },
  lng: "vi", // ngôn ngữ mặc định
  fallbackLng: "vi",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
