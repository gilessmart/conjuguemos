import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./persons";

describe("allConjugations()", () => {
  test("flattens the conjugations to a list", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const expected = [
      { mood: "indicative", tense: "present", person: persons.firstSingular, value: "hablo" },
      { mood: "indicative", tense: "present", person: persons.secondSingularInformal, value: "hablas" },
      { mood: "indicative", tense: "present", person: persons.thirdSingularAndSecondSingularFormal, value: "habla" },
      { mood: "indicative", tense: "present", person: persons.firstPlural, value: "hablamos" },
      { mood: "indicative", tense: "present", person: persons.secondPluralInformal, value: "habláis" },
      { mood: "indicative", tense: "present", person: persons.thirdPluralAndSecondPluralFormal, value: "hablan" },
      { mood: "indicative", tense: "preterite", person: persons.firstSingular, value: "hablé" },
      { mood: "indicative", tense: "preterite", person: persons.secondSingularInformal, value: "hablaste" },
      { mood: "indicative", tense: "preterite", person: persons.thirdSingularAndSecondSingularFormal, value: "habló" },
      { mood: "indicative", tense: "preterite", person: persons.firstPlural, value: "hablamos" },
      { mood: "indicative", tense: "preterite", person: persons.secondPluralInformal, value: "hablasteis" },
      { mood: "indicative", tense: "preterite", person: persons.thirdPluralAndSecondPluralFormal, value: "hablaron" },
      { mood: "indicative", tense: "imperfect", person: persons.firstSingular, value: "hablaba" },
      { mood: "indicative", tense: "imperfect", person: persons.secondSingularInformal, value: "hablabas" },
      { mood: "indicative", tense: "imperfect", person: persons.thirdSingularAndSecondSingularFormal, value: "hablaba" },
      { mood: "indicative", tense: "imperfect", person: persons.firstPlural, value: "hablábamos" },
      { mood: "indicative", tense: "imperfect", person: persons.secondPluralInformal, value: "hablabais" },
      { mood: "indicative", tense: "imperfect", person: persons.thirdPluralAndSecondPluralFormal, value: "hablaban" },
      { mood: "indicative", tense: "future", person: persons.firstSingular, value: "hablaré" },
      { mood: "indicative", tense: "future", person: persons.secondSingularInformal, value: "hablarás" },
      { mood: "indicative", tense: "future", person: persons.thirdSingularAndSecondSingularFormal, value: "hablará" },
      { mood: "indicative", tense: "future", person: persons.firstPlural, value: "hablaremos" },
      { mood: "indicative", tense: "future", person: persons.secondPluralInformal, value: "hablaréis" },
      { mood: "indicative", tense: "future", person: persons.thirdPluralAndSecondPluralFormal, value: "hablarán" },
      { mood: "indicative", tense: "conditional", person: persons.firstSingular, value: "hablaría" },
      { mood: "indicative", tense: "conditional", person: persons.secondSingularInformal, value: "hablarías" },
      { mood: "indicative", tense: "conditional", person: persons.thirdSingularAndSecondSingularFormal, value: "hablaría" },
      { mood: "indicative", tense: "conditional", person: persons.firstPlural, value: "hablaríamos" },
      { mood: "indicative", tense: "conditional", person: persons.secondPluralInformal, value: "hablaríais" },
      { mood: "indicative", tense: "conditional", person: persons.thirdPluralAndSecondPluralFormal, value: "hablarían" },
      { mood: "imperative", tense: "affirmative", person: persons.secondSingularInformal, value: "habla" },
      { mood: "imperative", tense: "affirmative", person: persons.secondSingularFormal, value: "hable" },
      { mood: "imperative", tense: "affirmative", person: persons.firstPlural, value: "hablemos" },
      { mood: "imperative", tense: "affirmative", person: persons.secondPluralInformal, value: "hablad" },
      { mood: "imperative", tense: "affirmative", person: persons.secondPluralFormal, value: "hablen" }
    ];
    expect(verb.allConjugations()).toEqual(expected);
  });
});