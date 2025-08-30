import { persons } from "./persons";
import { tenses } from "./tenses";
import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions.types";
import { VerbMoods, IndicativeVerbMood, DefaultVerbTense, ImperativeVerbMood, ImperativeVerbTense } from "./verbs.types";

export function buildConjugations(definition: VerbDefinition): VerbMoods {
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

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbMoods {
  return new VerbMoods({
    indicative: new IndicativeVerbMood({
      present: new DefaultVerbTense(tenses.present, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}as`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}a`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}áis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}an`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}é`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}aste`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ó`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}asteis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}aron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}aba`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}abas`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}aba`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}ábamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}abais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}aban`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}aré`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}arás`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}ará`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}aremos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}aréis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}arán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}aría`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}arías`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}aría`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}aríamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}aríais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}arían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}a`
        },
        secondSingularFormal: {
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}e`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ad`
        },
        secondPluralFormal: {
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}en`
        }
      })
    })
  });
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbMoods {
  return new VerbMoods({
    indicative: new IndicativeVerbMood({
      present: new DefaultVerbTense(tenses.present, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}éis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}eré`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}erás`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}erá`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}eremos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}eréis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}erán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}ería`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}erías`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}ería`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}eríamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}eríais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}erían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ed`
        },
        secondPluralFormal: {
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbMoods {
  return new VerbMoods({
    indicative: new IndicativeVerbMood({
      present: new DefaultVerbTense(tenses.present, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}ís`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}iré`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}irás`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}irá`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}iremos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}iréis`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}irán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          person: persons.firstSingular,
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}iría`
        },
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}irías`
        },
        thirdSingularAndSecondSingularFormal: {
          person: persons.thirdSingularAndSecondSingularFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}iría`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}iríamos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}iríais`
        },
        thirdPluralAndSecondPluralFormal: {
          person: persons.thirdPluralAndSecondPluralFormal,
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}irían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          person: persons.secondSingularInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          person: persons.secondSingularFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          person: persons.firstPlural,
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          person: persons.secondPluralInformal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}id`
        },
        secondPluralFormal: {
          person: persons.secondPluralFormal,
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}
