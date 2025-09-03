import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./persons";
import { moods } from "./moods";
import { tenses } from "./tenses";

describe("flatConjugations()", () => {
  test("flattens the conjugations to a list", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const expected = [
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.firstSingular ], value: "hablo" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.secondSingularInformal ], value: "hablas" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.thirdSingular, persons.secondSingularFormal ], value: "habla" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.firstPlural ], value: "hablamos" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.secondPluralInformal ], value: "habláis" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { persons: [ persons.thirdPlural, persons.secondPluralFormal ], value: "hablan" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.firstSingular ], value: "hablé" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.secondSingularInformal ], value: "hablaste" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.thirdSingular, persons.secondSingularFormal ], value: "habló" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.firstPlural ], value: "hablamos" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.secondPluralInformal ], value: "hablasteis" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { persons: [ persons.thirdPlural, persons.secondPluralFormal ], value: "hablaron" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.firstSingular ], value: "hablaba" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.secondSingularInformal ], value: "hablabas" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.thirdSingular, persons.secondSingularFormal ], value: "hablaba" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.firstPlural ], value: "hablábamos" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.secondPluralInformal ], value: "hablabais" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { persons: [ persons.thirdPlural, persons.secondPluralFormal ], value: "hablaban" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.firstSingular ], value: "hablaré" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.secondSingularInformal ], value: "hablarás" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.thirdSingular, persons.secondSingularFormal ], value: "hablará" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.firstPlural ], value: "hablaremos" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.secondPluralInformal ], value: "hablaréis" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { persons: [ persons.thirdPlural, persons.secondPluralFormal ], value: "hablarán" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.firstSingular ], value: "hablaría" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.secondSingularInformal ], value: "hablarías" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.thirdSingular, persons.secondSingularFormal ], value: "hablaría" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.firstPlural ], value: "hablaríamos" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.secondPluralInformal ], value: "hablaríais" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { persons: [ persons.thirdPlural, persons.secondPluralFormal ], value: "hablarían" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { persons: [ persons.secondSingularInformal ], value: "habla" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { persons: [ persons.secondSingularFormal ], value: "hable" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { persons: [ persons.firstPlural ], value: "hablemos" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { persons: [ persons.secondPluralInformal ], value: "hablad" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { persons: [ persons.secondPluralFormal ], value: "hablen" } }
    ];
    expect(verb.flatConjugations()).toEqual(expected);
  });
});