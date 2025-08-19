import zod from "zod";
import { type Conjugation } from "./conjugation";
import { persons } from "./persons";

export const defaultSettings = {
  tenses: {
    indicative: {
      present: true,
      preterite: true,
      imperfect: true,
      future: true,
      conditional: true
    },
    imperative: {
      affirmative: true
    }
  },
  secondPluralInformal: true
};

const StoredSettings = zod.object({
  tenses: zod.object({
    indicative: zod.object({
      present: zod.boolean().default(defaultSettings.tenses.indicative.present),
      preterite: zod.boolean().default(defaultSettings.tenses.indicative.preterite),
      imperfect: zod.boolean().default(defaultSettings.tenses.indicative.imperfect),
      future: zod.boolean().default(defaultSettings.tenses.indicative.future),
      conditional: zod.boolean().default(defaultSettings.tenses.indicative.conditional)
    }).default(defaultSettings.tenses.indicative),
    imperative: zod.object({
      affirmative: zod.boolean().default(defaultSettings.tenses.imperative.affirmative)
    }).default(defaultSettings.tenses.imperative)
  }).default(defaultSettings.tenses),
  secondPluralInformal: zod.boolean().default(defaultSettings.secondPluralInformal)
});

export type Settings = zod.infer<typeof StoredSettings>;

export function getSettings(): Settings {
  const json = localStorage.getItem("settings");
  return json === null
    ? defaultSettings
    : parseSettings(json);
};

export function saveSettings(settings: Settings) {
  const json = JSON.stringify(settings);
  localStorage.setItem("settings", json);
};

export function parseSettings(json: string): Settings {
  let storedObj: unknown;
  try { storedObj = JSON.parse(json); }
  catch { return defaultSettings; }

  const result = StoredSettings.safeParse(storedObj);
  if (!result.success)
    return defaultSettings;

  return result.data;
};

export function isConjugationEnabled(settings: Settings, mood: string, tense: string, conjugation: Conjugation): boolean {
  if (conjugation.Person === persons.SecondPluralInformal && !settings.secondPluralInformal)
    return false;

  switch (mood) {
    case "indicative":
      switch (tense) {
        case "present":
          return settings.tenses.indicative.present;
        case "preterite":
          return settings.tenses.indicative.preterite;
        case "imperfect":
          return settings.tenses.indicative.imperfect;
        case "future":
          return settings.tenses.indicative.future;
        case "conditional":
          return settings.tenses.indicative.conditional;
      }
      break;
    case "imperative":
      switch (tense) {
        case "affirmative":
          return settings.tenses.imperative.affirmative;
      }
      break;
  }

  return true;
};
