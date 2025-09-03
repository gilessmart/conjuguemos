import type { Mood, Person, Tense } from "./verbs.types";
import { persons } from "./persons";
import { moods } from "./moods";
import { tenses } from "./tenses";
import { defaultSettings, type PersonSettings, type Settings, type TenseSettings, type ValidationResult } from "./settings.types";
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

const tenseSettingsMap = new Map<Mood, Map<Tense, (s: TenseSettings) => boolean>>([
  [
    moods.indicative, 
    new Map([ 
      [tenses.present, s => s.indicative.present],
      [tenses.preterite, s => s.indicative.preterite],
      [tenses.imperfect, s => s.indicative.imperfect],
      [tenses.future, s => s.indicative.future],
      [tenses.conditional, s => s.indicative.conditional]  
    ])
  ],
  [
    moods.imperative, 
    new Map([ 
      [tenses.affirmative, s => s.imperative.affirmative]
    ])
  ]
]);

export function isTenseEnabled(tenseSettings: TenseSettings, mood: Mood, tense: Tense): boolean {
  const tenseEnabledFn = tenseSettingsMap.get(mood)?.get(tense);
  return tenseEnabledFn === undefined
    ? false
    : tenseEnabledFn(tenseSettings);
};

export function isPersonEnabled(settings: PersonSettings, person: Person) {
  return person !== persons.secondPluralInformal || settings.secondPluralInformal;
};
