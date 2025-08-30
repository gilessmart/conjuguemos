import zod from "zod";
import { type Conjugation, type Mood, type Tense } from "./verbs.types";
import { persons } from "./persons";
import { moods } from "./moods";
import { tenses } from "./tenses";

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

const tenseSettingsMap = new Map<Mood, Map<Tense, (s: Settings) => boolean>>();
tenseSettingsMap.set(moods.indicative, new Map([ 
  [tenses.present, s => s.tenses.indicative.present],
  [tenses.preterite, s => s.tenses.indicative.preterite],
  [tenses.imperfect, s => s.tenses.indicative.imperfect],
  [tenses.future, s => s.tenses.indicative.future],
  [tenses.conditional, s => s.tenses.indicative.conditional]  
]));
tenseSettingsMap.set(moods.imperative, new Map([ 
  [tenses.affirmative, s => s.tenses.imperative.affirmative],
]));

export function isConjugationEnabled(settings: Settings, mood: Mood, tense: Tense, conjugation: Conjugation): boolean {
  if (conjugation.person === persons.secondPluralInformal && !settings.secondPluralInformal)
    return false;

  const tenseSettingFn = tenseSettingsMap.get(mood)?.get(tense);
  if (tenseSettingFn)
    return tenseSettingFn(settings);

  return false;
};
