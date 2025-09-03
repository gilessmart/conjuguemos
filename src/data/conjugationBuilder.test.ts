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
            persons: [ persons.firstSingular ],
            value: "hablo"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hablas"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "habla"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habláis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hablan"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "hablé"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hablaste"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "habló"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hablasteis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hablaron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "hablaba"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hablabas"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "hablaba"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablábamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hablabais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hablaban"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "hablaré"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hablarás"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "hablará"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablaremos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hablaréis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hablarán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "hablaría"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hablarías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "hablaría"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablaríamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hablaríais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hablarían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "habla"
          },
          secondSingularFormal: {
            persons: [ persons.secondSingularFormal ],
            value: "hable"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hablemos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hablad"
          },
          secondPluralFormal: {
            persons: [ persons.secondPluralFormal ],
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
            persons: [ persons.firstSingular ],
            value: "como"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "comes"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "come"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comemos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "coméis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "comen"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "comí"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "comiste"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "comió"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comimos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "comisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "comieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "comía"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "comías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "comía"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comíamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "comíais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "comían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "comeré"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "comerás"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "comerá"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comeremos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "comeréis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "comerán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "comería"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "comerías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "comería"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comeríamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "comeríais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "comerían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "come"
          },
          secondSingularFormal: {
            persons: [ persons.secondSingularFormal ],
            value: "coma"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "comamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "comed"
          },
          secondPluralFormal: {
            persons: [ persons.secondPluralFormal ],
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
            persons: [ persons.firstSingular ],
            value: "vivo"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "vives"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "vive"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "vivimos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "vivís"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "viven"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "viví"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "viviste"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "vivió"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "vivimos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "vivisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "vivieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "vivía"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "vivías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "vivía"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "vivíamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "vivíais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "vivían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "viviré"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "vivirás"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "vivirá"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "viviremos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "viviréis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "vivirán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "viviría"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "vivirías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "viviría"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "viviríamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "viviríais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "vivirían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "vive"
          },
          secondSingularFormal: {
            persons: [ persons.secondSingularFormal ],
            value: "viva"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "vivamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "vivid"
          },
          secondPluralFormal: {
            persons: [ persons.secondPluralFormal ],
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
            persons: [ persons.firstSingular ],
            value: "he"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "has"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "ha"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hemos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habéis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "han"
          }
        }),
        preterite: new DefaultVerbTense(tenses.preterite, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "hube"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "hubiste"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "hubo"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hubimos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "hubisteis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "hubieron"
          }
        }),
        imperfect: new DefaultVerbTense(tenses.imperfect, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "había"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "habías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "había"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "habíamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habíais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "habían"
          }
        }),
        future: new DefaultVerbTense(tenses.future, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "habré"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "habrás"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "habrá"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "habremos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habréis"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "habrán"
          }
        }),
        conditional: new DefaultVerbTense(tenses.conditional, {
          firstSingular: {
            persons: [ persons.firstSingular ],
            value: "habría"
          },
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "habrías"
          },
          thirdSingularAndSecondSingularFormal: {
            persons: [ persons.thirdSingular, persons.secondSingularFormal ],
            value: "habría"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "habríamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habríais"
          },
          thirdPluralAndSecondPluralFormal: {
            persons: [ persons.thirdPlural, persons.secondPluralFormal ],
            value: "habrían"
          }
        })
      }),
      imperative: new ImperativeVerbMood({
        affirmative: new ImperativeVerbTense(tenses.affirmative, {
          secondSingularInformal: {
            persons: [ persons.secondSingularInformal ],
            value: "he"
          },
          secondSingularFormal: {
            persons: [ persons.secondSingularFormal ],
            value: "haya"
          },
          firstPlural: {
            persons: [ persons.firstPlural ],
            value: "hayamos"
          },
          secondPluralInformal: {
            persons: [ persons.secondPluralInformal ],
            value: "habed"
          },
          secondPluralFormal: {
            persons: [ persons.secondPluralFormal ],
            value: "hayan"
          }
        })
      })
    });
    expect(actual).toEqual(expected);
  });
});
