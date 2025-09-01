import { type Conjugation, type Mood, type Tense } from "./verbs.types";
import { persons } from "./persons";
import { moods } from "./moods";
import { tenses } from "./tenses";
import { defaultSettings, type Settings, type TenseSettings, type ValidationResult } from "./settings.types";
import { parseSettings } from "./settingsParser";

export function getSettings(): Settings {
  const json = localStorage.getItem("settings");
  if (json === null)
    return defaultSettings;

  const settings = parseSettings(json);
  if (settings === undefined)
    return defaultSettings;
  
  const validationResult = validateSettings(settings);
  if (!validationResult.isValid)
    return defaultSettings;
  
  return settings;
};

export function validateSettings(settings: Settings): ValidationResult {
  if (!atLeastOneTenseSelected(settings.tenses))
    return { isValid: false, message: "At least one tense must be selected" };

  return { isValid: true };
};

function atLeastOneTenseSelected(tenses: TenseSettings): boolean {
  return tenses.indicative.present
    || tenses.indicative.preterite
    || tenses.indicative.imperfect
    || tenses.indicative.future
    || tenses.indicative.conditional
    || tenses.imperative.affirmative;
}

export function saveSettings(settings: Settings) {
  const json = JSON.stringify(settings);
  localStorage.setItem("settings", json);
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
