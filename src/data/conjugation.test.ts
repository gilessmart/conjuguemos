import { assert, describe, expect, test } from "vitest";
import { buildConjugations, type VerbConjugations } from "./conjugation";
import { persons } from "./persons";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: VerbConjugations = {
      Indicative: {
        Present: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hablo"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hablas"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habla"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habláis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablan"
          }
        },
        Preterite: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hablé"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hablaste"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habló"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hablasteis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablaron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hablaba"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hablabas"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablaba"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablábamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hablabais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablaban"
          }
        },
        Future: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hablaré"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hablarás"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablará"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablaremos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hablaréis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablarán"
          }
        },
        Conditional: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hablaría"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hablarías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablaría"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablaríamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hablaríais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablarían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "habla"
          },
          SecondSingularFormal: { 
            Person: persons.SecondSingularFormal,
            Value: "hable"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hablemos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hablad"
          },
          SecondPluralFormal: { 
            Person: persons.SecondPluralFormal,
            Value: "hablen"
          }
        }
      }
    };
    expect(actual).toEqual(expected);
  });
  
  test("conjugates a regular ER verb", () => {
    const definition = getVerbDefinition("comer") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: VerbConjugations = {
      Indicative: {
        Present: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "como"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "comes"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "come"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comemos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "coméis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comen"
          }
        },
        Preterite: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "comí"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "comiste"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comió"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comimos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "comisteis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "comía"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "comías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comía"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comíamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "comíais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comían"
          }
        },
        Future: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "comeré"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "comerás"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comerá"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comeremos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "comeréis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comerán"
          }
        },
        Conditional: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "comería"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "comerías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comería"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comeríamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "comeríais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comerían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "come"
          },
          SecondSingularFormal: { 
            Person: persons.SecondSingularFormal,
            Value: "coma"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "comamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "comed"
          },
          SecondPluralFormal: { 
            Person: persons.SecondPluralFormal,
            Value: "coman"
          }
        }
      }
    };
    expect(actual).toEqual(expected);
  });

  test("conjugates a regular IR verb", () => {
    const definition = getVerbDefinition("vivir") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: VerbConjugations = {
      Indicative: {
        Present: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "vivo"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "vives"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vive"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "vivimos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "vivís"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "viven"
          }
        },
        Preterite: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "viví"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "viviste"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivió"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "vivimos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "vivisteis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "vivía"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "vivías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivía"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "vivíamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "vivíais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivían"
          }
        },
        Future: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "viviré"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "vivirás"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivirá"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "viviremos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "viviréis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivirán"
          }
        },
        Conditional: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "viviría"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "vivirías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "viviría"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "viviríamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "viviríais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivirían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "vive"
          },
          SecondSingularFormal: { 
            Person: persons.SecondSingularFormal,
            Value: "viva"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "vivamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "vivid"
          },
          SecondPluralFormal: { 
            Person: persons.SecondPluralFormal,
            Value: "vivan"
          }
        }
      }
    };
    expect(actual).toEqual(expected);
  });

  test("conjugates an irregular verb", () => {
    const definition = getVerbDefinition("haber") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected: VerbConjugations = {
      Indicative: {
        Present: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "he"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "has"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "ha"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hemos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habéis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "han"
          }
        },
        Preterite: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "hube"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "hubiste"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hubo"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hubimos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "hubisteis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hubieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "había"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "habías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "había"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "habíamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habíais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habían"
          }
        },
        Future: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "habré"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "habrás"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habrá"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "habremos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habréis"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habrán"
          }
        },
        Conditional: {
          FirstSingular: {
            Person: persons.FirstSingular,
            Value: "habría"
          },
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "habrías"
          },
          ThirdSingularAndSecondSingularFormal: { 
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habría"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "habríamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habríais"
          },
          ThirdPluralAndSecondPluralFormal: { 
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habrían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: { 
            Person: persons.SecondSingularInformal,
            Value: "he"
          },
          SecondSingularFormal: { 
            Person: persons.SecondSingularFormal,
            Value: "haya"
          },
          FirstPlural: { 
            Person: persons.FirstPlural,
            Value: "hayamos"
          },
          SecondPluralInformal: { 
            Person: persons.SecondPluralInformal,
            Value: "habed"
          },
          SecondPluralFormal: { 
            Person: persons.SecondPluralFormal,
            Value: "hayan"
          }
        }
      }
    };
    expect(actual).toEqual(expected);
  });
});
