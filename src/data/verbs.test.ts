import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./persons";

describe("allConjugations()", () => {
  test("flattens the conjugations to a list", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const expected = [
      { Mood: "indicative", Tense: "present", Person: persons.FirstSingular, Value: "hablo" },
      { Mood: "indicative", Tense: "present", Person: persons.SecondSingularInformal, Value: "hablas" },
      { Mood: "indicative", Tense: "present", Person: persons.ThirdSingularAndSecondSingularFormal, Value: "habla" },
      { Mood: "indicative", Tense: "present", Person: persons.FirstPlural, Value: "hablamos" },
      { Mood: "indicative", Tense: "present", Person: persons.SecondPluralInformal, Value: "habláis" },
      { Mood: "indicative", Tense: "present", Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablan" },
      { Mood: "indicative", Tense: "preterite", Person: persons.FirstSingular, Value: "hablé" },
      { Mood: "indicative", Tense: "preterite", Person: persons.SecondSingularInformal, Value: "hablaste" },
      { Mood: "indicative", Tense: "preterite", Person: persons.ThirdSingularAndSecondSingularFormal, Value: "habló" },
      { Mood: "indicative", Tense: "preterite", Person: persons.FirstPlural, Value: "hablamos" },
      { Mood: "indicative", Tense: "preterite", Person: persons.SecondPluralInformal, Value: "hablasteis" },
      { Mood: "indicative", Tense: "preterite", Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablaron" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.FirstSingular, Value: "hablaba" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.SecondSingularInformal, Value: "hablabas" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablaba" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.FirstPlural, Value: "hablábamos" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.SecondPluralInformal, Value: "hablabais" },
      { Mood: "indicative", Tense: "imperfect", Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablaban" },
      { Mood: "indicative", Tense: "future", Person: persons.FirstSingular, Value: "hablaré" },
      { Mood: "indicative", Tense: "future", Person: persons.SecondSingularInformal, Value: "hablarás" },
      { Mood: "indicative", Tense: "future", Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablará" },
      { Mood: "indicative", Tense: "future", Person: persons.FirstPlural, Value: "hablaremos" },
      { Mood: "indicative", Tense: "future", Person: persons.SecondPluralInformal, Value: "hablaréis" },
      { Mood: "indicative", Tense: "future", Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablarán" },
      { Mood: "indicative", Tense: "conditional", Person: persons.FirstSingular, Value: "hablaría" },
      { Mood: "indicative", Tense: "conditional", Person: persons.SecondSingularInformal, Value: "hablarías" },
      { Mood: "indicative", Tense: "conditional", Person: persons.ThirdSingularAndSecondSingularFormal, Value: "hablaría" },
      { Mood: "indicative", Tense: "conditional", Person: persons.FirstPlural, Value: "hablaríamos" },
      { Mood: "indicative", Tense: "conditional", Person: persons.SecondPluralInformal, Value: "hablaríais" },
      { Mood: "indicative", Tense: "conditional", Person: persons.ThirdPluralAndSecondPluralFormal, Value: "hablarían" },
      { Mood: "imperative", Tense: "affirmative", Person: persons.SecondSingularInformal, Value: "habla" },
      { Mood: "imperative", Tense: "affirmative", Person: persons.SecondSingularFormal, Value: "hable" },
      { Mood: "imperative", Tense: "affirmative", Person: persons.FirstPlural, Value: "hablemos" },
      { Mood: "imperative", Tense: "affirmative", Person: persons.SecondPluralInformal, Value: "hablad" },
      { Mood: "imperative", Tense: "affirmative", Person: persons.SecondPluralFormal, Value: "hablen" }
    ];
    expect(verb.allConjugations()).toEqual(expected);
  });
});