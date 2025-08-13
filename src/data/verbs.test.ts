import { assert, describe, expect, test } from "vitest";
import { getVerbDetails } from "./verbs";
import { persons } from "./conjugation";
import type { Settings } from "./settings";

describe("getActiveConjugations()", () => {
  test("builds a full list of active indicative conjugations", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const settings: Settings = {
      moodInclusion: [
        {
          moodName: "indicative",
          included: true,
          tenseInclusion: [
            {
              tenseName: "present",
              included: true
            },
            {
              tenseName: "preterite",
              included: true
            },
            {
              tenseName: "imperfect",
              included: true
            },
            {
              tenseName: "future",
              included: true
            },
            {
              tenseName: "conditional",
              included: true
            }
          ]
        }
      ],
      includeVosotros: true
    };
    
    const actual = verb.getActiveConjugations(settings);
    
    expect(actual).toHaveLength(30);
    const preterites = actual.filter(x => x.tense.Name === "preterite");
    expect(preterites).toHaveLength(6);
    const firstPlural = preterites.find(x => x.conjugation.Person === persons.FirstPlural);
    expect(firstPlural?.conjugation.Value).toBe("hablamos")
  });

  test("filters out vosotros", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const settings: Settings = {
      moodInclusion: [
        {
          moodName: "indicative",
          included: true,
          tenseInclusion: [
            {
              tenseName: "present",
              included: true
            },
            {
              tenseName: "preterite",
              included: true
            },
            {
              tenseName: "imperfect",
              included: true
            },
            {
              tenseName: "future",
              included: true
            },
            {
              tenseName: "conditional",
              included: true
            }
          ]
        }
      ],
      includeVosotros: false
    };
    
    const actual = verb.getActiveConjugations(settings);   
    
    expect(actual).toHaveLength(25);
    const secondPluralInformals = actual.filter(x => x.conjugation.Person === persons.SecondPluralInformal);
    expect(secondPluralInformals).toHaveLength(0);
  });

  test("filters out excluded tenses", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const settings: Settings = {
      moodInclusion: [
        {
          moodName: "indicative",
          included: true,
          tenseInclusion: [
            {
              tenseName: "present",
              included: true
            },
            {
              tenseName: "preterite",
              included: false
            },
            {
              tenseName: "imperfect",
              included: true
            },
            {
              tenseName: "future",
              included: false
            },
            {
              tenseName: "conditional",
              included: true
            }
          ]
        }
      ],
      includeVosotros: true
    };
    
    const actual = verb.getActiveConjugations(settings);
    
    expect(actual).toHaveLength(18);
    const uniqueTenseNames = actual.map(x => x.tense.Name).reduce<string[]>((acc, cur) => acc.includes(cur) ? acc : [ ...acc, cur ], [])
    expect(uniqueTenseNames).toEqual([ "present", "imperfect", "conditional" ]);
  });

  test("filters out excluded moods", () => {
    const verb = getVerbDetails("hablar") ?? assert.fail("verb not found");
    const settings: Settings = {
      moodInclusion: [
        {
          moodName: "indicative",
          included: false,
          tenseInclusion: [
            {
              tenseName: "present",
              included: true
            },
            {
              tenseName: "preterite",
              included: false
            },
            {
              tenseName: "imperfect",
              included: true
            },
            {
              tenseName: "future",
              included: false
            },
            {
              tenseName: "conditional",
              included: true
            }
          ]
        }
      ],
      includeVosotros: true
    };
    
    const actual = verb.getActiveConjugations(settings);
    
    expect(actual).toHaveLength(0);
  });
});