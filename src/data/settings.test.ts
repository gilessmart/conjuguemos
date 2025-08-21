import { assert, describe, expect, test } from "vitest";
import { defaultSettings, isConjugationEnabled, parseSettings, type Settings } from "./settings";
import { getVerbDetails } from "./verbs";

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
  const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
  const allConjugatios = verb.flattenedConjugations.map(conjugation => ({
    conjugation,
    description: `${conjugation.Mood} ${conjugation.Tense} - ${conjugation.Person.Description}`
  }));

  test.for(allConjugatios)("with all settings enabled, returns true for conjugation $description", ({ conjugation }) => {
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
    
    expect(isConjugationEnabled(settings, conjugation)).toBe(true);
  });

  test.for(allConjugatios)("with all tense settings disabled, returns false for conjugation $description", ({ conjugation }) => {
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

    expect(isConjugationEnabled(settings, conjugation)).toBe(false);
  });
});