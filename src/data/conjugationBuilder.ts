import { persons } from "./persons";
import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions.types";
import { VerbConjugations, IndicativeMoodConjugations, DefaultTenseConjugations, ImperativeMoodConjugations, ImperativeTenseConjugations } from "./verbs.types";

export function buildConjugations(definition: VerbDefinition): VerbConjugations {
  const ending = definition.infinitive.slice(-2);
  const stem = definition.infinitive.slice(0, -2);
  switch (ending) {
    case "ar":
      return buildArConjugations(stem, definition.irregularConjugations);
    case "er":
      return buildErConjugations(stem, definition.irregularConjugations);
    case "ir":
      return buildIrConjugations(stem, definition.irregularConjugations);
    default:
      throw new Error(`Unsupported verb ending: ${ending}`);
  }
};

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    indicative: new IndicativeMoodConjugations({
      present: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "present",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}as`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}a`
        },
        firstPlural: {
          mood: "indicative",
          tense: "present",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}áis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}an`
        }
      }),
      preterite: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}é`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}aste`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ó`
        },
        firstPlural: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}asteis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}aron`
        }
      }),
      imperfect: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}aba`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}abas`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}aba`
        },
        firstPlural: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}ábamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}abais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}aban`
        }
      }),
      future: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "future",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}aré`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}arás`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}ará`
        },
        firstPlural: {
          mood: "indicative",
          tense: "future",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}aremos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}aréis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}arán`
        }
      }),
      conditional: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}aría`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}arías`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}aría`
        },
        firstPlural: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}aríamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}aríais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}arían`
        }
      })
    }),
    imperative: new ImperativeMoodConjugations({
      affirmative: new ImperativeTenseConjugations({
        secondSingularInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}a`
        },
        secondSingularFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}e`
        },
        firstPlural: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ad`
        },
        secondPluralFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}en`
        }
      })
    })
  });
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    indicative: new IndicativeMoodConjugations({
      present: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "present",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          mood: "indicative",
          tense: "present",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}éis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "future",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}eré`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}erás`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}erá`
        },
        firstPlural: {
          mood: "indicative",
          tense: "future",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}eremos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}eréis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}erán`
        }
      }),
      conditional: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}ería`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}erías`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}ería`
        },
        firstPlural: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}eríamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}eríais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}erían`
        }
      })
    }),
    imperative: new ImperativeMoodConjugations({
      affirmative: new ImperativeTenseConjugations({
        secondSingularInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ed`
        },
        secondPluralFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    indicative: new IndicativeMoodConjugations({
      present: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "present",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          mood: "indicative",
          tense: "present",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "present",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}ís`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "present",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          mood: "indicative",
          tense: "preterite",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "preterite",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "imperfect",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "future",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}iré`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}irás`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}irá`
        },
        firstPlural: {
          mood: "indicative",
          tense: "future",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}iremos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "future",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}iréis`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "future",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}irán`
        }
      }),
      conditional: new DefaultTenseConjugations({
        firstSingular: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}iría`
        },
        secondSingularInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}irías`
        },
        thirdSingularAndSecondSingularFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}iría`
        },
        firstPlural: {
          mood: "indicative",
          tense: "conditional",
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}iríamos`
        },
        secondPluralInformal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}iríais`
        },
        thirdPluralAndSecondPluralFormal: {
          mood: "indicative",
          tense: "conditional",
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}irían`
        }
      })
    }),
    imperative: new ImperativeMoodConjugations({
      affirmative: new ImperativeTenseConjugations({
        secondSingularInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}id`
        },
        secondPluralFormal: {
          mood: "imperative",
          tense: "affirmative",
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}
