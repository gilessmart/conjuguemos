import { describe, expect, test } from "vitest";
import { hydrateSettings } from "./settings.hydration";
import type { Settings } from "./settings";

const getDefaultSettings: () => Settings = () => ({
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
});

describe("hydrateSettings()", () => {
  test.for(["", "abc"])("given invalid JSON (%s), leaves settings as they are", (json) => {
    const settings = getDefaultSettings();
    hydrateSettings(settings, json);
    const expected = getDefaultSettings()
    expect(settings).toEqual(expected);
  });

  test.for(["123", "null", "[]", "true"])("given JSON that isn't an object (%s), leaves settings as they are", (json) => {
    const settings = getDefaultSettings();
    hydrateSettings(settings, json);
    const expected = getDefaultSettings()
    expect(settings).toEqual(expected);
  });

  test("overrides boolean switches with values from the JSON", () => {
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
    const settings = getDefaultSettings();
    hydrateSettings(settings, json);

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
    expect(settings).toEqual(expected);
  });

  test("overrides correct mood", () => {
    const json = '{' + 
      '"moodInclusion":[' +
        '{ "moodName":"imperative", "included":false, "tenseInclusion":[' +
          '{ "tenseName":"affirmative", "included":true}' +
        ']}' +
      ']' +
    '}';
    const settings = getDefaultSettings();
    hydrateSettings(settings, json);

    const expected = {
      "moodName": "imperative",
      "included": false,
      "tenseInclusion": [
        { "tenseName": "affirmative", "included": true }
      ]
    };
    expect(settings.moodInclusion.find(m => m.moodName === "imperative")).toEqual(expected);
  });

  test("overrides correct tense", () => {
    const json = '{' + 
      '"moodInclusion":[' +
        '{ "moodName":"indicative", "included":true, "tenseInclusion":[' +
          '{ "tenseName":"preterite", "included":false }' +
        ']}' +
      ']' +
    '}';
    const settings = getDefaultSettings();
    hydrateSettings(settings, json);

    const expected = {
      "moodName": "indicative",
      "included": true,
      "tenseInclusion": [
        { "tenseName": "present", "included": true},
        { "tenseName": "preterite", "included": false },
        { "tenseName": "imperfect", "included": true }
      ]
    };
    expect(settings.moodInclusion.find(m => m.moodName === "indicative")).toEqual(expected);
  });
});
