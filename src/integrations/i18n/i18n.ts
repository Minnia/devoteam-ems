import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import * as locales from "./locales";

const translations = {
  en: locales.resources.en,
  sv: locales.resources.sv,
};

const resources = Object.entries(translations).reduce((acc, [key, value]) => {
  return { ...acc, [key]: value };
}, {});

export const availableLocales = Object.keys(resources);
export const fallbackLng = "sv";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  lng: "sv", // default language
  resources,
});

export type TranslationFunction = ReturnType<typeof useTranslation>["t"];

i18n.on("initialized", () => {
  console.log("i18n has been initialized successfully.");
});

export default i18n;
