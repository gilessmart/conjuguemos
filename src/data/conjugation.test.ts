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
                Text: "hablo"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hablas"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "habla"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habláis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hablan"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "hablé"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hablaste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "habló"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hablasteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hablaron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "hablaba"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hablabas"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "hablaba"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablábamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hablabais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hablaban"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "hablaré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hablarás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "hablará"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablaremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hablaréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hablarán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "hablaría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hablarías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "hablaría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablaríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hablaríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hablarían"
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
                Text: "habla"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Text: "hable"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hablemos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hablad"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
                Text: "hablen"
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
                Text: "como"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "comes"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "come"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comemos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "coméis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "comen"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "comí"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "comiste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "comió"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "comisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "comieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "comía"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "comías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "comía"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "comíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "comían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "comeré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "comerás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "comerá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comeremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "comeréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "comerán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "comería"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "comerías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "comería"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comeríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "comeríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "comerían"
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
                Text: "come"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Text: "coma"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "comamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "comed"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
                Text: "coman"
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
                Text: "vivo"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "vives"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "vive"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "vivimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "vivís"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "viven"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "viví"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "viviste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "vivió"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "vivimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "vivisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "vivieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "vivía"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "vivías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "vivía"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "vivíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "vivíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "vivían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "viviré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "vivirás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "vivirá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "viviremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "viviréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "vivirán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "viviría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "vivirías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "viviría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "viviríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "viviríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "vivirían"
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
                Text: "vive"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Text: "viva"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "vivamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "vivid"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
                Text: "vivan"
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
                Text: "he"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "has"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "ha"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hemos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habéis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "han"
              }
            ]
          },
          {
            Name: "preterite",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "hube"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "hubiste"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "hubo"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hubimos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "hubisteis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "hubieron"
              }
            ]
          },
          {
            Name: "imperfect",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "había"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "habías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "había"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "habíamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habíais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "habían"
              }
            ]
          },
          {
            Name: "future",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "habré"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "habrás"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "habrá"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "habremos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habréis"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "habrán"
              }
            ]
          },
          {
            Name: "conditional",
            Conjugations: [
              {
                Person: "first person singular",
                Pronouns: [ "yo" ],
                Text: "habría"
              },
              { 
                Person: "second person singular",
                Pronouns: [ "tú" ],
                Text: "habrías"
              },
              { 
                Person: "third person singular",
                Pronouns: [ "él", "ella", "usted" ],
                Text: "habría"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "habríamos"
              },
              { 
                Person: "second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habríais"
              },
              { 
                Person: "third person plural",
                Pronouns: [ "ellos", "ellas", "ustedes" ],
                Text: "habrían"
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
                Text: "he"
              },
              { 
                Person: "formal second person singular",
                Pronouns: [ "usted" ],
                Text: "haya"
              },
              { 
                Person: "first person plural",
                Pronouns: [ "nosotros", "nosotras" ],
                Text: "hayamos"
              },
              { 
                Person: "informal second person plural",
                Pronouns: [ "vosotros", "vosotras" ],
                Text: "habed"
              },
              { 
                Person: "formal second person plural",
                Pronouns: [ "ustedes" ],
                Text: "hayan"
              }
            ]
          }
        ]
      }
    ];
    expect(actual).toEqual(expected);
  });
});
