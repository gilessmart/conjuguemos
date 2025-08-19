import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./persons";

describe("flattenedConjugations", () => {
  test("flattens the conjugations to a list", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const expected = [
      { mood: "indicative", tense: "present", conjugation: { Person: persons.FirstSingular, Value: "hablo" } },
      { mood: "indicative", tense: "present", conjugation: { Person: persons.SecondSingularInformal, Value: "hablas" } },
      { mood: "indicative", tense: "present", conjugation: { Person: persons.ThirdSingularAndSecondSingularFormal, Value: "habla" } },
      { mood: "indicative", tense: "present", conjugation: { Person: persons.FirstPlural, Value: "hablamos" } },
      { mood: "indicative", tense: "present", conjugation: { Person: persons.SecondPluralInformal, Value: "habláis" } },
      { mood: "indicative", tense: "present", conjugation: { Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablan" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.FirstSingular, Value: "hablé" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.SecondSingularInformal, Value: "hablaste" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.ThirdSingularAndSecondSingularFormal, Value: "habló" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.FirstPlural, Value: "hablamos" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.SecondPluralInformal, Value: "hablasteis" } },
      { mood: "indicative", tense: "preterite", conjugation: { Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablaron" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.FirstSingular, Value: "hablaba" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.SecondSingularInformal, Value: "hablabas" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablaba" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.FirstPlural, Value: "hablábamos" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.SecondPluralInformal, Value: "hablabais" } },
      { mood: "indicative", tense: "imperfect", conjugation: { Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablaban" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.FirstSingular, Value: "hablaré" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.SecondSingularInformal, Value: "hablarás" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablará" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.FirstPlural, Value: "hablaremos" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.SecondPluralInformal, Value: "hablaréis" } },
      { mood: "indicative", tense: "future", conjugation: { Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablarán" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.FirstSingular, Value: "hablaría" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.SecondSingularInformal, Value: "hablarías" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablaría" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.FirstPlural, Value: "hablaríamos" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.SecondPluralInformal, Value: "hablaríais" } },
      { mood: "indicative", tense: "conditional", conjugation: { Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablarían" } },
      { mood: "imperative", tense: "affirmative", conjugation: { Person: persons.SecondSingularInformal, Value: "habla" } },
      { mood: "imperative", tense: "affirmative", conjugation: { Person: persons.SecondSingularFormal, Value: "hable" } },
      { mood: "imperative", tense: "affirmative", conjugation: { Person: persons.FirstPlural, Value: "hablemos" } },
      { mood: "imperative", tense: "affirmative", conjugation: { Person: persons.SecondPluralInformal, Value: "hablad" } },
      { mood: "imperative", tense: "affirmative", conjugation: { Person: persons.SecondPluralFormal, Value: "hablen" } }
    ];
    expect(verb.flattenedConjugations).toEqual(expected);
  });
});