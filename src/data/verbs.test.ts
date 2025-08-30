import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./persons";
import { moods } from "./moods";
import { tenses } from "./tenses";

describe("flatConjugations()", () => {
  test("flattens the conjugations to a list", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const expected = [
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.firstSingular, value: "hablo" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.secondSingularInformal, value: "hablas" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.thirdSingularAndSecondSingularFormal, value: "habla" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.firstPlural, value: "hablamos" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.secondPluralInformal, value: "habláis" } },
      { mood: moods.indicative, tense: tenses.present, conjugation: { person: persons.thirdPluralAndSecondPluralFormal, value: "hablan" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.firstSingular, value: "hablé" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.secondSingularInformal, value: "hablaste" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.thirdSingularAndSecondSingularFormal, value: "habló" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.firstPlural, value: "hablamos" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.secondPluralInformal, value: "hablasteis" } },
      { mood: moods.indicative, tense: tenses.preterite, conjugation: { person: persons.thirdPluralAndSecondPluralFormal, value: "hablaron" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.firstSingular, value: "hablaba" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.secondSingularInformal, value: "hablabas" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.thirdSingularAndSecondSingularFormal, value: "hablaba" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.firstPlural, value: "hablábamos" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.secondPluralInformal, value: "hablabais" } },
      { mood: moods.indicative, tense: tenses.imperfect, conjugation: { person: persons.thirdPluralAndSecondPluralFormal, value: "hablaban" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.firstSingular, value: "hablaré" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.secondSingularInformal, value: "hablarás" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.thirdSingularAndSecondSingularFormal, value: "hablará" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.firstPlural, value: "hablaremos" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.secondPluralInformal, value: "hablaréis" } },
      { mood: moods.indicative, tense: tenses.future, conjugation: { person: persons.thirdPluralAndSecondPluralFormal, value: "hablarán" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.firstSingular, value: "hablaría" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.secondSingularInformal, value: "hablarías" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.thirdSingularAndSecondSingularFormal, value: "hablaría" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.firstPlural, value: "hablaríamos" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.secondPluralInformal, value: "hablaríais" } },
      { mood: moods.indicative, tense: tenses.conditional, conjugation: { person: persons.thirdPluralAndSecondPluralFormal, value: "hablarían" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { person: persons.secondSingularInformal, value: "habla" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { person: persons.secondSingularFormal, value: "hable" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { person: persons.firstPlural, value: "hablemos" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { person: persons.secondPluralInformal, value: "hablad" } },
      { mood: moods.imperative, tense: tenses.affirmative, conjugation: { person: persons.secondPluralFormal, value: "hablen" } }
    ];
    expect(verb.flatConjugations()).toEqual(expected);
  });
});