import { describe, expect, test } from "vitest";
import type { Settings } from "./settings.types";
import { parseSettings } from "./settingsParser";

describe("parseSettings()", () => {
  test.for(["", "abc"])("given invalid JSON (%s), returns undefined", json => {
    const settings = parseSettings(json);    
    expect(settings).toBeUndefined();
  });

  test.for(["123", "null", "[]", "true"])("given JSON that isn't an object (%s), returns undefined", json => {
    const settings = parseSettings(json);
    expect(settings).toBeUndefined();
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
      '"persons":{' +
        '"secondPluralInformal": false' +
      '}' +
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
      persons: {
        secondPluralInformal: false
      }
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
      '"persons":{' +
        '"secondPluralInformal": true' +
      '}' +
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
      persons: {
        secondPluralInformal: true
      }
    };
    expect(settings).toEqual(expected);
  });
});