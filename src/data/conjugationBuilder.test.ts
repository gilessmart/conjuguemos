import { assert, describe, expect, test } from "vitest";
import { buildConjugations } from "./conjugationBuilder";
import { DefaultTenseConjugations, ImperativeMoodConjugations, ImperativeTenseConjugations, IndicativeMoodConjugations, VerbConjugations } from "./verbs.types";
import { persons } from "./persons";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected = new VerbConjugations({
      indicative: new IndicativeMoodConjugations({
        present: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "present",
            person: persons.firstSingular,
            value: "hablo"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondSingularInformal,
            value: "hablas"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habla"
          },
          firstPlural: {
            mood: "indicative",
            tense: "present",
            person: persons.firstPlural,
            value: "hablamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondPluralInformal,
            value: "habláis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablan"
          }
        }),
        preterite: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstSingular,
            value: "hablé"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondSingularInformal,
            value: "hablaste"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habló"
          },
          firstPlural: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstPlural,
            value: "hablamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondPluralInformal,
            value: "hablasteis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablaron"
          }
        }),
        imperfect: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstSingular,
            value: "hablaba"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondSingularInformal,
            value: "hablabas"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablaba"
          },
          firstPlural: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstPlural,
            value: "hablábamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondPluralInformal,
            value: "hablabais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablaban"
          }
        }),
        future: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "future",
            person: persons.firstSingular,
            value: "hablaré"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondSingularInformal,
            value: "hablarás"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablará"
          },
          firstPlural: {
            mood: "indicative",
            tense: "future",
            person: persons.firstPlural,
            value: "hablaremos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondPluralInformal,
            value: "hablaréis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablarán"
          }
        }),
        conditional: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstSingular,
            value: "hablaría"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondSingularInformal,
            value: "hablarías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablaría"
          },
          firstPlural: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstPlural,
            value: "hablaríamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondPluralInformal,
            value: "hablaríais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablarían"
          }
        })
      }),
      imperative: new ImperativeMoodConjugations({
        affirmative: new ImperativeTenseConjugations({
          secondSingularInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularInformal,
            value: "habla"
          },
          secondSingularFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularFormal,
            value: "hable"
          },
          firstPlural: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.firstPlural,
            value: "hablemos"
          },
          secondPluralInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralInformal,
            value: "hablad"
          },
          secondPluralFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralFormal,
            value: "hablen"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });
  
  test("conjugates a regular ER verb", () => {
    const definition = getVerbDefinition("comer") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected = new VerbConjugations({
      indicative: new IndicativeMoodConjugations({
        present: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "present",
            person: persons.firstSingular,
            value: "como"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondSingularInformal,
            value: "comes"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "come"
          },
          firstPlural: {
            mood: "indicative",
            tense: "present",
            person: persons.firstPlural,
            value: "comemos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondPluralInformal,
            value: "coméis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comen"
          }
        }),
        preterite: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstSingular,
            value: "comí"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondSingularInformal,
            value: "comiste"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comió"
          },
          firstPlural: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstPlural,
            value: "comimos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondPluralInformal,
            value: "comisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comieron"
          }
        }),
        imperfect: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstSingular,
            value: "comía"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondSingularInformal,
            value: "comías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comía"
          },
          firstPlural: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstPlural,
            value: "comíamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondPluralInformal,
            value: "comíais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comían"
          }
        }),
        future: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "future",
            person: persons.firstSingular,
            value: "comeré"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondSingularInformal,
            value: "comerás"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comerá"
          },
          firstPlural: {
            mood: "indicative",
            tense: "future",
            person: persons.firstPlural,
            value: "comeremos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondPluralInformal,
            value: "comeréis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comerán"
          }
        }),
        conditional: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstSingular,
            value: "comería"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondSingularInformal,
            value: "comerías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comería"
          },
          firstPlural: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstPlural,
            value: "comeríamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondPluralInformal,
            value: "comeríais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comerían"
          }
        })
      }),
      imperative: new ImperativeMoodConjugations({
        affirmative: new ImperativeTenseConjugations({
          secondSingularInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularInformal,
            value: "come"
          },
          secondSingularFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularFormal,
            value: "coma"
          },
          firstPlural: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.firstPlural,
            value: "comamos"
          },
          secondPluralInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralInformal,
            value: "comed"
          },
          secondPluralFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralFormal,
            value: "coman"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });

  test("conjugates a regular IR verb", () => {
    const definition = getVerbDefinition("vivir") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected = new VerbConjugations({
      indicative: new IndicativeMoodConjugations({
        present: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "present",
            person: persons.firstSingular,
            value: "vivo"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondSingularInformal,
            value: "vives"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vive"
          },
          firstPlural: {
            mood: "indicative",
            tense: "present",
            person: persons.firstPlural,
            value: "vivimos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondPluralInformal,
            value: "vivís"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "viven"
          }
        }),
        preterite: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstSingular,
            value: "viví"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondSingularInformal,
            value: "viviste"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivió"
          },
          firstPlural: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstPlural,
            value: "vivimos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondPluralInformal,
            value: "vivisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivieron"
          }
        }),
        imperfect: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstSingular,
            value: "vivía"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondSingularInformal,
            value: "vivías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivía"
          },
          firstPlural: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstPlural,
            value: "vivíamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondPluralInformal,
            value: "vivíais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivían"
          }
        }),
        future: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "future",
            person: persons.firstSingular,
            value: "viviré"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondSingularInformal,
            value: "vivirás"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivirá"
          },
          firstPlural: {
            mood: "indicative",
            tense: "future",
            person: persons.firstPlural,
            value: "viviremos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondPluralInformal,
            value: "viviréis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivirán"
          }
        }),
        conditional: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstSingular,
            value: "viviría"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondSingularInformal,
            value: "vivirías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "viviría"
          },
          firstPlural: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstPlural,
            value: "viviríamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondPluralInformal,
            value: "viviríais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivirían"
          }
        })
      }),
      imperative: new ImperativeMoodConjugations({
        affirmative: new ImperativeTenseConjugations({
          secondSingularInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularInformal,
            value: "vive"
          },
          secondSingularFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularFormal,
            value: "viva"
          },
          firstPlural: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.firstPlural,
            value: "vivamos"
          },
          secondPluralInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralInformal,
            value: "vivid"
          },
          secondPluralFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralFormal,
            value: "vivan"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });

  test("conjugates an irregular verb", () => {
    const definition = getVerbDefinition("haber") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected = new VerbConjugations({
      indicative: new IndicativeMoodConjugations({
        present: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "present",
            person: persons.firstSingular,
            value: "he"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondSingularInformal,
            value: "has"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "ha"
          },
          firstPlural: {
            mood: "indicative",
            tense: "present",
            person: persons.firstPlural,
            value: "hemos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "present",
            person: persons.secondPluralInformal,
            value: "habéis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "present",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "han"
          }
        }),
        preterite: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstSingular,
            value: "hube"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondSingularInformal,
            value: "hubiste"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hubo"
          },
          firstPlural: {
            mood: "indicative",
            tense: "preterite",
            person: persons.firstPlural,
            value: "hubimos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.secondPluralInformal,
            value: "hubisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "preterite",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hubieron"
          }
        }),
        imperfect: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstSingular,
            value: "había"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondSingularInformal,
            value: "habías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "había"
          },
          firstPlural: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.firstPlural,
            value: "habíamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.secondPluralInformal,
            value: "habíais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "imperfect",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habían"
          }
        }),
        future: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "future",
            person: persons.firstSingular,
            value: "habré"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondSingularInformal,
            value: "habrás"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habrá"
          },
          firstPlural: {
            mood: "indicative",
            tense: "future",
            person: persons.firstPlural,
            value: "habremos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "future",
            person: persons.secondPluralInformal,
            value: "habréis"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "future",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habrán"
          }
        }),
        conditional: new DefaultTenseConjugations({
          firstSingular: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstSingular,
            value: "habría"
          },
          secondSingularInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondSingularInformal,
            value: "habrías"
          },
          thirdSingularAndSecondSingularFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habría"
          },
          firstPlural: {
            mood: "indicative",
            tense: "conditional",
            person: persons.firstPlural,
            value: "habríamos"
          },
          secondPluralInformal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.secondPluralInformal,
            value: "habríais"
          },
          thirdPluralAndSecondPluralFormal: {
            mood: "indicative",
            tense: "conditional",
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habrían"
          }
        })
      }),
      imperative: new ImperativeMoodConjugations({
        affirmative: new ImperativeTenseConjugations({
          secondSingularInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularInformal,
            value: "he"
          },
          secondSingularFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondSingularFormal,
            value: "haya"
          },
          firstPlural: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.firstPlural,
            value: "hayamos"
          },
          secondPluralInformal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralInformal,
            value: "habed"
          },
          secondPluralFormal: {
            mood: "imperative",
            tense: "affirmative",
            person: persons.secondPluralFormal,
            value: "hayan"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });
});
