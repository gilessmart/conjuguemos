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

const tenseSettingsMap = new Map<string, Map<string, (s: Settings) => boolean>>();
tenseSettingsMap.set("indicative", new Map([ 
  ["present", s => s.tenses.indicative.present],
  ["preterite", s => s.tenses.indicative.preterite],
  ["imperfect", s => s.tenses.indicative.imperfect],
  ["future", s => s.tenses.indicative.future],
  ["conditional", s => s.tenses.indicative.conditional]  
]));
tenseSettingsMap.set("imperative", new Map([ 
  ["affirmative", s => s.tenses.imperative.affirmative],
]));

export function isConjugationEnabled(settings: Settings, conjugation: Conjugation): boolean {
  if (conjugation.Person === persons.SecondPluralInformal && !settings.secondPluralInformal)
    return false;

  const tenseSettingFn = tenseSettingsMap.get(conjugation.Mood)?.get(conjugation.Tense);
  if (tenseSettingFn)
    return tenseSettingFn(settings);

  return false;
};
