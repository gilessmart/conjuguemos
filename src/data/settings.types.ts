import zod from "zod";

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
  persons: {
    secondPluralInformal: true
  }
};

const tenseSettingsSchema = zod.object({
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
});

export type TenseSettings = zod.infer<typeof tenseSettingsSchema>;

const personSettingsSchema = zod.object({
  secondPluralInformal: zod.boolean().default(defaultSettings.persons.secondPluralInformal)
});

export type PersonSettings = zod.infer<typeof personSettingsSchema>;

export const settingsSchema = zod.object({
  tenses: tenseSettingsSchema.default(defaultSettings.tenses),
  persons: personSettingsSchema.default(defaultSettings.persons)
});

export type Settings = zod.infer<typeof settingsSchema>;

interface FailedValidationResult { isValid: false; message: string; }
interface SuccessfulValidationResult { isValid: true; }
export type ValidationResult = FailedValidationResult | SuccessfulValidationResult;
