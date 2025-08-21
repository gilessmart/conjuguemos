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
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstSingular,
            Value: "hablo"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondSingularInformal,
            Value: "hablas"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habla"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstPlural,
            Value: "hablamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondPluralInformal,
            Value: "habláis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablan"
          }
        },
        Preterite: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstSingular,
            Value: "hablé"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondSingularInformal,
            Value: "hablaste"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habló"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstPlural,
            Value: "hablamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondPluralInformal,
            Value: "hablasteis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablaron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstSingular,
            Value: "hablaba"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondSingularInformal,
            Value: "hablabas"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablaba"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstPlural,
            Value: "hablábamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondPluralInformal,
            Value: "hablabais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablaban"
          }
        },
        Future: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstSingular,
            Value: "hablaré"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondSingularInformal,
            Value: "hablarás"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablará"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstPlural,
            Value: "hablaremos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondPluralInformal,
            Value: "hablaréis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablarán"
          }
        },
        Conditional: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstSingular,
            Value: "hablaría"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondSingularInformal,
            Value: "hablarías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hablaría"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstPlural,
            Value: "hablaríamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondPluralInformal,
            Value: "hablaríais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hablarían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularInformal,
            Value: "habla"
          },
          SecondSingularFormal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularFormal,
            Value: "hable"
          },
          FirstPlural: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.FirstPlural,
            Value: "hablemos"
          },
          SecondPluralInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondPluralInformal,
            Value: "hablad"
          },
          SecondPluralFormal: {
            Mood: "imperative",
            Tense: "affirmative",
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
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstSingular,
            Value: "como"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondSingularInformal,
            Value: "comes"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "come"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstPlural,
            Value: "comemos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondPluralInformal,
            Value: "coméis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comen"
          }
        },
        Preterite: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstSingular,
            Value: "comí"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondSingularInformal,
            Value: "comiste"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comió"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstPlural,
            Value: "comimos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondPluralInformal,
            Value: "comisteis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstSingular,
            Value: "comía"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondSingularInformal,
            Value: "comías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comía"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstPlural,
            Value: "comíamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondPluralInformal,
            Value: "comíais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comían"
          }
        },
        Future: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstSingular,
            Value: "comeré"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondSingularInformal,
            Value: "comerás"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comerá"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstPlural,
            Value: "comeremos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondPluralInformal,
            Value: "comeréis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comerán"
          }
        },
        Conditional: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstSingular,
            Value: "comería"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondSingularInformal,
            Value: "comerías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "comería"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstPlural,
            Value: "comeríamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondPluralInformal,
            Value: "comeríais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "comerían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularInformal,
            Value: "come"
          },
          SecondSingularFormal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularFormal,
            Value: "coma"
          },
          FirstPlural: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.FirstPlural,
            Value: "comamos"
          },
          SecondPluralInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondPluralInformal,
            Value: "comed"
          },
          SecondPluralFormal: {
            Mood: "imperative",
            Tense: "affirmative",
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
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstSingular,
            Value: "vivo"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondSingularInformal,
            Value: "vives"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vive"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstPlural,
            Value: "vivimos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondPluralInformal,
            Value: "vivís"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "viven"
          }
        },
        Preterite: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstSingular,
            Value: "viví"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondSingularInformal,
            Value: "viviste"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivió"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstPlural,
            Value: "vivimos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondPluralInformal,
            Value: "vivisteis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstSingular,
            Value: "vivía"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondSingularInformal,
            Value: "vivías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivía"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstPlural,
            Value: "vivíamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondPluralInformal,
            Value: "vivíais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivían"
          }
        },
        Future: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstSingular,
            Value: "viviré"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondSingularInformal,
            Value: "vivirás"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "vivirá"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstPlural,
            Value: "viviremos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondPluralInformal,
            Value: "viviréis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivirán"
          }
        },
        Conditional: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstSingular,
            Value: "viviría"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondSingularInformal,
            Value: "vivirías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "viviría"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstPlural,
            Value: "viviríamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondPluralInformal,
            Value: "viviríais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "vivirían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularInformal,
            Value: "vive"
          },
          SecondSingularFormal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularFormal,
            Value: "viva"
          },
          FirstPlural: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.FirstPlural,
            Value: "vivamos"
          },
          SecondPluralInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondPluralInformal,
            Value: "vivid"
          },
          SecondPluralFormal: {
            Mood: "imperative",
            Tense: "affirmative",
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
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstSingular,
            Value: "he"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondSingularInformal,
            Value: "has"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "ha"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.FirstPlural,
            Value: "hemos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.SecondPluralInformal,
            Value: "habéis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "present",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "han"
          }
        },
        Preterite: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstSingular,
            Value: "hube"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondSingularInformal,
            Value: "hubiste"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "hubo"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.FirstPlural,
            Value: "hubimos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.SecondPluralInformal,
            Value: "hubisteis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "preterite",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "hubieron"
          }
        },
        Imperfect: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstSingular,
            Value: "había"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondSingularInformal,
            Value: "habías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "había"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.FirstPlural,
            Value: "habíamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.SecondPluralInformal,
            Value: "habíais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "imperfect",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habían"
          }
        },
        Future: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstSingular,
            Value: "habré"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondSingularInformal,
            Value: "habrás"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habrá"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.FirstPlural,
            Value: "habremos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.SecondPluralInformal,
            Value: "habréis"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "future",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habrán"
          }
        },
        Conditional: {
          FirstSingular: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstSingular,
            Value: "habría"
          },
          SecondSingularInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondSingularInformal,
            Value: "habrías"
          },
          ThirdSingularAndSecondSingularFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdSingularAndSecondSingularFormal,
            Value: "habría"
          },
          FirstPlural: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.FirstPlural,
            Value: "habríamos"
          },
          SecondPluralInformal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.SecondPluralInformal,
            Value: "habríais"
          },
          ThirdPluralAndSecondPluralFormal: {
            Mood: "indicative",
            Tense: "conditional",
            Person: persons.ThirdPluralAndSecondPluralFormal,
            Value: "habrían"
          }
        }
      },
      Imperative: {
        Affirmative: {
          SecondSingularInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularInformal,
            Value: "he"
          },
          SecondSingularFormal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondSingularFormal,
            Value: "haya"
          },
          FirstPlural: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.FirstPlural,
            Value: "hayamos"
          },
          SecondPluralInformal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondPluralInformal,
            Value: "habed"
          },
          SecondPluralFormal: {
            Mood: "imperative",
            Tense: "affirmative",
            Person: persons.SecondPluralFormal,
            Value: "hayan"
          }
        }
      }
    };
    expect(actual).toEqual(expected);
  });
});
