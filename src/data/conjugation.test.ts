import { assert, describe, expect, test } from "vitest";
import { buildConjugations, persons, type Mood } from "./conjugation";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: Mood[] = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hablo"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hablas"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "habla"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habláis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hablan"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hablé"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hablaste"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "habló"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hablasteis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hablaron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hablaba"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hablabas"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "hablaba"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablábamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hablabais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hablaban"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hablaré"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hablarás"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "hablará"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablaremos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hablaréis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hablarán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hablaría"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hablarías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "hablaría"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablaríamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hablaríais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hablarían"
              }
            ]
          }
        ]
      },
      {
        Name: "imperative",
        Tenses: [
          {
            Name: "affirmative",
            Conjugations: [
              { 
                Person: persons.SecondSingularInformal,
                Value: "habla"
              },
              { 
                Person: persons.SecondSingularFormal,
                Value: "hable"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hablemos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hablad"
              },
              { 
                Person: persons.SecondPluralFormal,
                Value: "hablen"
              }
            ]
          }
        ]
      }
    ];
    expect(actual).toEqual(expected);
  });
  
  test("conjugates a regular ER verb", () => {
    const definition = getVerbDefinition("comer") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: ConjugationMood[] = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "como"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "comes"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "come"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comemos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "coméis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "comen"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "comí"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "comiste"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "comió"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comimos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "comisteis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "comieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "comía"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "comías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "comía"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comíamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "comíais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "comían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "comeré"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "comerás"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "comerá"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comeremos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "comeréis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "comerán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "comería"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "comerías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "comería"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comeríamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "comeríais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "comerían"
              }
            ]
          }
        ]
      },
      {
        Name: "imperative",
        Tenses: [
          {
            Name: "affirmative",
            Conjugations: [
              { 
                Person: persons.SecondSingularInformal,
                Value: "come"
              },
              { 
                Person: persons.SecondSingularFormal,
                Value: "coma"
              },
              { 
                Person: persons.FirstPlural,
                Value: "comamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "comed"
              },
              { 
                Person: persons.SecondPluralFormal,
                Value: "coman"
              }
            ]
          }
        ]
      }
    ];
    expect(actual).toEqual(expected);
  });

  test("conjugates a regular IR verb", () => {
    const definition = getVerbDefinition("vivir") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: ConjugationMood[] = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "vivo"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "vives"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "vive"
              },
              { 
                Person: persons.FirstPlural,
                Value: "vivimos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "vivís"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "viven"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "viví"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "viviste"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "vivió"
              },
              { 
                Person: persons.FirstPlural,
                Value: "vivimos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "vivisteis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "vivieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "vivía"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "vivías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "vivía"
              },
              { 
                Person: persons.FirstPlural,
                Value: "vivíamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "vivíais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "vivían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "viviré"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "vivirás"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "vivirá"
              },
              { 
                Person: persons.FirstPlural,
                Value: "viviremos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "viviréis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "vivirán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "viviría"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "vivirías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "viviría"
              },
              { 
                Person: persons.FirstPlural,
                Value: "viviríamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "viviríais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "vivirían"
              }
            ]
          }
        ]
      },
      {
        Name: "imperative",
        Tenses: [
          {
            Name: "affirmative",
            Conjugations: [
              { 
                Person: persons.SecondSingularInformal,
                Value: "vive"
              },
              { 
                Person: persons.SecondSingularFormal,
                Value: "viva"
              },
              { 
                Person: persons.FirstPlural,
                Value: "vivamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "vivid"
              },
              { 
                Person: persons.SecondPluralFormal,
                Value: "vivan"
              }
            ]
          }
        ]
      }
    ];
    expect(actual).toEqual(expected);
  });

  test("conjugates an irregular verb", () => {
    const definition = getVerbDefinition("haber") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: ConjugationMood[] = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "he"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "has"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "ha"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hemos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habéis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "han"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "hube"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "hubiste"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "hubo"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hubimos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "hubisteis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "hubieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "había"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "habías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "había"
              },
              { 
                Person: persons.FirstPlural,
                Value: "habíamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habíais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "habían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "habré"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "habrás"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "habrá"
              },
              { 
                Person: persons.FirstPlural,
                Value: "habremos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habréis"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "habrán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: persons.FirstSingular,
                Value: "habría"
              },
              { 
                Person: persons.SecondSingularInformal,
                Value: "habrías"
              },
              { 
                Person: persons.ThirdSingularAndSecondSingularFormal,
                Value: "habría"
              },
              { 
                Person: persons.FirstPlural,
                Value: "habríamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habríais"
              },
              { 
                Person: persons.ThirdPluralAndSecondPluralFormal,
                Value: "habrían"
              }
            ]
          }
        ]
      },
      {
        Name: "imperative",
        Tenses: [
          {
            Name: "affirmative",
            Conjugations: [
              { 
                Person: persons.SecondSingularInformal,
                Value: "he"
              },
              { 
                Person: persons.SecondSingularFormal,
                Value: "haya"
              },
              { 
                Person: persons.FirstPlural,
                Value: "hayamos"
              },
              { 
                Person: persons.SecondPluralInformal,
                Value: "habed"
              },
              { 
                Person: persons.SecondPluralFormal,
                Value: "hayan"
              }
            ]
          }
        ]
      }
    ];
    expect(actual).toEqual(expected);
  });
});
