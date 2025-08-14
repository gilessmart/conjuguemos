import { describe, expect, test } from "vitest";
import { parseSettings } from "./settingsParser";
import type { Settings } from "./settings";

const defaultSettings: Settings = {
  moodInclusion: [
    {
      moodName: "indicative",
      included: true,
      tenseInclusion: [
        { tenseName: "present", included: true },
        { tenseName: "preterite", included: true },
        { tenseName: "imperfect", included: true }
      ]
    },
    {
      moodName: "imperative",
      included: true,
      tenseInclusion: [
        { tenseName: "affirmative", included: true }
      ]
    }
  ],
  includeVosotros: true
};

describe("parseSettings()", () => {
  test("returns undefined with invalid JSON", () => {
    expect(parseSettings("", defaultSettings)).toEqual(defaultSettings);
    expect(parseSettings("abc", defaultSettings)).toEqual(defaultSettings);
  });

  test("returns undefined with JSON that isn't an object", () => {
    expect(parseSettings("123", defaultSettings)).toEqual(defaultSettings);
    expect(parseSettings("null", defaultSettings)).toEqual(defaultSettings);
    expect(parseSettings("[]", defaultSettings)).toEqual(defaultSettings);
    expect(parseSettings("true", defaultSettings)).toEqual(defaultSettings);
  });

  test("returns settings if the JSON matches the structure of the settings object", () => {
    const json = '{' + 
      '"moodInclusion":[' +
        '{ "moodName":"indicative", "included":true, "tenseInclusion":[' +
          '{ "tenseName":"present", "included":true},' +
          '{ "tenseName":"preterite", "included":true },' +
          '{ "tenseName":"imperfect", "included":false }' +
        ']},' +
        '{ "moodName":"imperative", "included":false, "tenseInclusion":[' +
          '{ "tenseName":"affirmative", "included":true}' +
        ']}' +
      '],' +
      '"includeVosotros":false' +
    '}';

    const expected = {
      moodInclusion: [
        {
          "moodName": "indicative",
          "included": true,
          "tenseInclusion": [
            { "tenseName": "present", "included": true},
            { "tenseName": "preterite", "included": true },
            { "tenseName": "imperfect", "included": false }
          ]
        },
        {
          "moodName": "imperative",
          "included": false,
          "tenseInclusion": [
            { "tenseName": "affirmative", "included": true }
          ]
        }
      ],
      includeVosotros: false
    };
    
    expect(parseSettings(json, defaultSettings)).toEqual(expected);
  });

  test("correctly identifies mood settings by name", () => {
    const json = '{' + 
      '"moodInclusion":[' +
        '{ "moodName":"imperative", "included":false, "tenseInclusion":[' +
          '{ "tenseName":"affirmative", "included":true}' +
        ']}' +
      ']' +
    '}';

    const expected = {
      moodInclusion: [
        {
          "moodName": "indicative",
          "included": true,
          "tenseInclusion": [
            { "tenseName": "present", "included": true},
            { "tenseName": "preterite", "included": true },
            { "tenseName": "imperfect", "included": true }
          ]
        },
        {
          "moodName": "imperative",
          "included": false,
          "tenseInclusion": [
            { "tenseName": "affirmative", "included": true }
          ]
        }
      ],
      includeVosotros: true
    };
    
    expect(parseSettings(json, defaultSettings)).toEqual(expected);
  });

  test("correctly identifies tense settings by name", () => {
    const json = '{' + 
      '"moodInclusion":[' +
        '{ "moodName":"indicative", "included":true, "tenseInclusion":[' +
          '{ "tenseName":"preterite", "included":false }' +
        ']},' +
        '{ "moodName":"imperative", "included":false, "tenseInclusion":[' +
          '{ "tenseName":"affirmative", "included":true}' +
        ']}' +
      ']' +
    '}';

    const expected = {
      moodInclusion: [
        {
          "moodName": "indicative",
          "included": true,
          "tenseInclusion": [
            { "tenseName": "present", "included": true},
            { "tenseName": "preterite", "included": false },
            { "tenseName": "imperfect", "included": true }
          ]
        },
        {
          "moodName": "imperative",
          "included": false,
          "tenseInclusion": [
            { "tenseName": "affirmative", "included": true }
          ]
        }
      ],
      includeVosotros: true
    };
    
    expect(parseSettings(json, defaultSettings)).toEqual(expected);
  });
});
