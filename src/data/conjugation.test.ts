import { describe, expect, test } from "vitest";
import { buildConjugations } from "./conjugation";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar");
    const actual = buildConjugations(definition!);
    const expected = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hablo"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hablas"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "habla"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habláis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "hablan"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hablé"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hablaste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "habló"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hablasteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "hablaron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hablaba"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hablabas"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "hablaba"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablábamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hablabais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "hablaban"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hablaré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hablarás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "hablará"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablaremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hablaréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "hablarán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hablaría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hablarías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "hablaría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablaríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hablaríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
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
                Person: "informal second person singular",
                Pronouns: [ "tú" ],
                Value: "habla"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Value: "hable"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hablemos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hablad"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
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
    const expected = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "como"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "comes"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "come"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comemos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "coméis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "comen"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "comí"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "comiste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "comió"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "comisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "comieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "comía"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "comías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "comía"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "comíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "comían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "comeré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "comerás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "comerá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comeremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "comeréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "comerán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "comería"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "comerías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "comería"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comeríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "comeríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
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
                Person: "informal second person singular",
                Pronouns: [ "tú" ],
                Value: "come"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Value: "coma"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "comamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "comed"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
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
    const expected = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "vivo"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "vives"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "vive"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "vivimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "vivís"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "viven"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "viví"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "viviste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "vivió"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "vivimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "vivisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "vivieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "vivía"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "vivías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "vivía"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "vivíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "vivíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "vivían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "viviré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "vivirás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "vivirá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "viviremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "viviréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "vivirán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "viviría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "vivirías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "viviría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "viviríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "viviríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
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
                Person: "informal second person singular",
                Pronouns: [ "tú" ],
                Value: "vive"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Value: "viva"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "vivamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "vivid"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
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
    const expected = [
      {
        Name: "indicative",
        Tenses: [
          {
            Name: "present",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "he"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "has"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "ha"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hemos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habéis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "han"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "hube"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "hubiste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "hubo"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hubimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "hubisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "hubieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "había"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "habías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "había"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "habíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "habían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "habré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "habrás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "habrá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "habremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Value: "habrán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Value: "habría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Value: "habrías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Value: "habría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "habríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
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
                Person: "informal second person singular",
                Pronouns: [ "tú" ],
                Value: "he"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Value: "haya"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Value: "hayamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Value: "habed"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
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
