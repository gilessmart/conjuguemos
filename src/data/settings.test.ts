import { assert, describe, expect, test } from "vitest";
import { isConjugationEnabled } from "./settings";
import { getVerbDetails } from "./verbs";
import type { Settings } from "./settings.types";

describe("isConjugationEnabled()", () => {
  const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
  const allConjugatios = verb.flatConjugations().map(({mood, tense, conjugation}) => ({
    mood, tense, conjugation,
    description: `${mood.description} ${tense.description} - ${conjugation.person.description}`
  }));

  test.for(allConjugatios)("with all settings enabled, returns true for conjugation $description", ({ mood, tense, conjugation }) => {
    const settings: Settings = {
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
    
    expect(isConjugationEnabled(settings, mood, tense, conjugation)).toBe(true);
  });

  test.for(allConjugatios)("with all tense settings disabled, returns false for conjugation $description", ({ mood, tense, conjugation }) => {
    const settings: Settings = {
      tenses: {
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
      },
      secondPluralInformal: true
    };

    expect(isConjugationEnabled(settings, mood, tense, conjugation)).toBe(false);
  });
});