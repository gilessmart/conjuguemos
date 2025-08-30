import { assert, describe, expect, test } from "vitest";
import { buildConjugations } from "./conjugationBuilder";
import { DefaultVerbTense, ImperativeVerbMood, ImperativeVerbTense, IndicativeVerbMood, VerbMoods } from "./verbs.types";
import { persons } from "./persons";
import { getVerbDefinition } from "./verbDefinitions";
import { tenses } from "./tenses";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar") ?? assert.fail("verb definition not found");
    const actual = buildConjugations(definition);
    const expected = new VerbMoods({
      indicative: new IndicativeVerbMood({
        present: new DefaultVerbTense(tenses.present, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hablo"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hablas"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habla"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habláis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablan"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hablé"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hablaste"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habló"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hablasteis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablaron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hablaba"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hablabas"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablaba"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablábamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hablabais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablaban"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hablaré"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hablarás"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablará"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablaremos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hablaréis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablarán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hablaría"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hablarías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hablaría"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablaríamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hablaríais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hablarían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "habla"
          },
          secondSingularFormal: {
            person: persons.secondSingularFormal,
            value: "hable"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hablemos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hablad"
          },
          secondPluralFormal: {
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
    const expected = new VerbMoods({
      indicative: new IndicativeVerbMood({
        present: new DefaultVerbTense(tenses.present, {
          firstSingular: {
            person: persons.firstSingular,
            value: "como"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "comes"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "come"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comemos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "coméis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comen"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            person: persons.firstSingular,
            value: "comí"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "comiste"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comió"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comimos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "comisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            person: persons.firstSingular,
            value: "comía"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "comías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comía"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comíamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "comíais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            person: persons.firstSingular,
            value: "comeré"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "comerás"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comerá"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comeremos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "comeréis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comerán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            person: persons.firstSingular,
            value: "comería"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "comerías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "comería"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comeríamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "comeríais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "comerían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "come"
          },
          secondSingularFormal: {
            person: persons.secondSingularFormal,
            value: "coma"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "comamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "comed"
          },
          secondPluralFormal: {
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
    const expected = new VerbMoods({
      indicative: new IndicativeVerbMood({
        present: new DefaultVerbTense(tenses.present, {
          firstSingular: {
            person: persons.firstSingular,
            value: "vivo"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "vives"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vive"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "vivimos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "vivís"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "viven"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            person: persons.firstSingular,
            value: "viví"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "viviste"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivió"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "vivimos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "vivisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            person: persons.firstSingular,
            value: "vivía"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "vivías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivía"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "vivíamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "vivíais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            person: persons.firstSingular,
            value: "viviré"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "vivirás"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "vivirá"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "viviremos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "viviréis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivirán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            person: persons.firstSingular,
            value: "viviría"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "vivirías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "viviría"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "viviríamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "viviríais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "vivirían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "vive"
          },
          secondSingularFormal: {
            person: persons.secondSingularFormal,
            value: "viva"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "vivamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "vivid"
          },
          secondPluralFormal: {
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
    const expected = new VerbMoods({
      indicative: new IndicativeVerbMood({
        present: new DefaultVerbTense(tenses.present, {
          firstSingular: {
            person: persons.firstSingular,
            value: "he"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "has"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "ha"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hemos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habéis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "han"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            person: persons.firstSingular,
            value: "hube"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "hubiste"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "hubo"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hubimos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "hubisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "hubieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            person: persons.firstSingular,
            value: "había"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "habías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "había"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "habíamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habíais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            person: persons.firstSingular,
            value: "habré"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "habrás"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habrá"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "habremos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habréis"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habrán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            person: persons.firstSingular,
            value: "habría"
          },
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "habrías"
          },
          thirdSingularAndSecondSingularFormal: {
            person: persons.thirdSingularAndSecondSingularFormal,
            value: "habría"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "habríamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habríais"
          },
          thirdPluralAndSecondPluralFormal: {
            person: persons.thirdPluralAndSecondPluralFormal,
            value: "habrían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            person: persons.secondSingularInformal,
            value: "he"
          },
          secondSingularFormal: {
            person: persons.secondSingularFormal,
            value: "haya"
          },
          firstPlural: {
            person: persons.firstPlural,
            value: "hayamos"
          },
          secondPluralInformal: {
            person: persons.secondPluralInformal,
            value: "habed"
          },
          secondPluralFormal: {
            person: persons.secondPluralFormal,
            value: "hayan"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });
});
