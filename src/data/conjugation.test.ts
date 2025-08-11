import { describe, expect, test } from "vitest";
import { buildConjugations, persons, type Mood } from "./conjugation";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar");
    const actual = buildConjugations(definition!);
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
    const definition = getVerbDefinition("comer");
    const actual = buildConjugations(definition!);
    const expected: Mood[] = [
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
    const definition = getVerbDefinition("vivir");
    const actual = buildConjugations(definition!);
    const expected: Mood[] = [
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
    const definition = getVerbDefinition("haber");
    const actual = buildConjugations(definition!);
    const expected: Mood[] = [
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
                Person: persons.ThirdSingular,
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
                Person: persons.ThirdPlural,
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
