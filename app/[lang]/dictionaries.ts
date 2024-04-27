import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  fr: () =>
    import("../../dictionaries/fr.json").then((module) => module.default),
};

export type SupportedLocales = keyof typeof dictionaries;

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]();
};
