import { describe, expect, test } from "vitest";
import { isPersonEnabled, isTenseEnabled } from "./settings";
import type { PersonSettings, TenseSettings } from "./settings.types";
import { moods } from "./moods";
import { tenses } from "./tenses";
import { persons } from "./persons";

describe("isTenseEnabled()", () => {
  const moodTenseCombinations = [
    { mood: moods.indicative, tense: tenses.present },
    { mood: moods.indicative, tense: tenses.preterite },
    { mood: moods.indicative, tense: tenses.imperfect },
    { mood: moods.indicative, tense: tenses.future },
    { mood: moods.indicative, tense: tenses.conditional },
    { mood: moods.imperative, tense: tenses.affirmative }
  ];

  test.for(moodTenseCombinations)("with all settings enabled, returns true for conjugation $description", ({ mood, tense }) => {
    const settings: TenseSettings = {
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
    };
    expect(isTenseEnabled(settings, mood, tense)).toBe(true);
  });

  test.for(moodTenseCombinations)("with all settings disabled, returns false for conjugation $description", ({ mood, tense }) => {
    const settings: TenseSettings = {
      indicative: {
        present: false,
        preterite: false,
        imperfect: false,
        future: false,
        conditional: false
      },
      imperative: {
        affirmative: false
      }
    };
    expect(isTenseEnabled(settings, mood, tense)).toBe(false);
  });
});

describe("isPersonEnabled()", () => {
  const allPersons = [
    persons.firstSingular,
    persons.secondSingularInformal,
    persons.secondSingularFormal,
    persons.thirdSingular,
    persons.firstPlural,
    persons.secondPluralInformal,
    persons.secondPluralFormal,
    persons.thirdPlural
  ];

  const allExceptSecondPluralInformal = allPersons.filter(p => p !== persons.secondPluralInformal);
  
  test.for(allPersons)("when secondPersonInformal setting is true, returns true", (person) => {
    const settings: PersonSettings = {
      secondPluralInformal: true
    };
    expect(isPersonEnabled(settings, person)).toBe(true);
  });

  test("when secondPluralInformal setting is false, and secondPluralInformal person is given, returns false", () => {
    const settings: PersonSettings = {
      secondPluralInformal: false
    };
    expect(isPersonEnabled(settings, persons.secondPluralInformal)).toBe(false);
  });
  
  test.for(allExceptSecondPluralInformal)("when secondPluralInformal setting is false, and any person except secondPluralInformal is given, returns true", (person) => {
    const settings: PersonSettings = {
      secondPluralInformal: false
    };
    expect(isPersonEnabled(settings, person)).toBe(true);
  });
});
