import { describe, expect, test } from "vitest";
import { defaultSettings, isConjugationEnabled, parseSettings, type Settings } from "./settings";
import { persons } from "./conjugation";

describe("parseSettings()", () => {
  test.for(["", "abc"])("given invalid JSON (%s), returns default settings", json => {
    const settings = parseSettings(json);    
    expect(settings).toEqual(defaultSettings);
  });

  test.for(["123", "null", "[]", "true"])("given JSON that isn't an object (%s), returns default settings", json => {
    const settings = parseSettings(json);
    expect(settings).toEqual(defaultSettings);
  });

  test("when all options are false, returns expected object", () => {
    const json = '{' + 
      '"tenses":{' +
        '"indicative": {' +
          '"present": false,' +
          '"preterite": false,' +
          '"imperfect": false,' +
          '"future": false,' +
          '"conditional": false' +
        '},' +
        '"imperative": {' +
          '"affirmative": false' +
        '}' +
      '},' +
      '"secondPluralInformal": false' +
    '}';
    const settings = parseSettings(json);

    const expected: Settings = {
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
      secondPluralInformal: false
    };
    expect(settings).toEqual(expected);
  });

  test("when all options are true, returns expected object", () => {
    const json = '{' + 
      '"tenses":{' +
        '"indicative": {' +
          '"present": true,' +
          '"preterite": true,' +
          '"imperfect": true,' +
          '"future": true,' +
          '"conditional": true' +
        '},' +
        '"imperative": {' +
          '"affirmative": true' +
        '}' +
      '},' +
      '"secondPluralInformal": true' +
    '}';
    const settings = parseSettings(json);

    const expected: Settings = {
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
    expect(settings).toEqual(expected);
  });
});

describe("isConjugationEnabled()", () => {
  test("with all settings enabled, returns true for all tenses", () => {
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
    
    expect(isConjugationEnabled(settings, "indicative", "present", { Person: persons.FirstSingular, Value: "hablo" })).toBe(true);
    expect(isConjugationEnabled(settings, "indicative", "preterite", { Person: persons.FirstSingular, Value: "hablé" })).toBe(true);
    expect(isConjugationEnabled(settings, "indicative", "imperfect", { Person: persons.FirstSingular, Value: "hablaba" })).toBe(true);
    expect(isConjugationEnabled(settings, "indicative", "future", { Person: persons.FirstSingular, Value: "hablaré" })).toBe(true);
    expect(isConjugationEnabled(settings, "indicative", "conditional", { Person: persons.FirstSingular, Value: "hablaría" })).toBe(true);
    expect(isConjugationEnabled(settings, "imperative", "affirmative", { Person: persons.SecondSingularInformal, Value: "hable" })).toBe(true);
  });

  test("with all tense settings disabled, returns false for all tenses", () => {
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
    
    expect(isConjugationEnabled(settings, "indicative", "present", { Person: persons.FirstSingular, Value: "hablo" })).toBe(false);
    expect(isConjugationEnabled(settings, "indicative", "preterite", { Person: persons.FirstSingular, Value: "hablé" })).toBe(false);
    expect(isConjugationEnabled(settings, "indicative", "imperfect", { Person: persons.FirstSingular, Value: "hablaba" })).toBe(false);
    expect(isConjugationEnabled(settings, "indicative", "future", { Person: persons.FirstSingular, Value: "hablaré" })).toBe(false);
    expect(isConjugationEnabled(settings, "indicative", "conditional", { Person: persons.FirstSingular, Value: "hablaría" })).toBe(false);
    expect(isConjugationEnabled(settings, "imperative", "affirmative", { Person: persons.SecondSingularInformal, Value: "hable" })).toBe(false);
  });
});