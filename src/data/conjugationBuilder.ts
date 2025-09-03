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
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}as`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}a`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}áis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}an`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}é`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}aste`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ó`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}asteis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}aron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}aba`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}abas`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}aba`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}ábamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}abais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}aban`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}aré`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}arás`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}ará`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}aremos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}aréis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}arán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}aría`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}arías`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}aría`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}aríamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}aríais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}arían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}a`
        },
        secondSingularFormal: {
          persons: [ persons.secondSingularFormal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}e`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ad`
        },
        secondPluralFormal: {
          persons: [ persons.secondPluralFormal ],
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
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}emos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}éis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}eré`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}erás`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}erá`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}eremos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}eréis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}erán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}ería`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}erías`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}ería`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}eríamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}eríais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}erían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          persons: [ persons.secondSingularFormal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}ed`
        },
        secondPluralFormal: {
          persons: [ persons.secondPluralFormal ],
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
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.present?.firstPersonSingular ?? `${stem}o`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonSingular ?? `${stem}es`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonSingular ?? `${stem}e`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.present?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.present?.secondPersonPlural ?? `${stem}ís`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.present?.thirdPersonPlural ?? `${stem}en`
        }
      }),
      preterite: new DefaultVerbTense(tenses.preterite, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonSingular ?? `${stem}í`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonSingular ?? `${stem}iste`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonSingular ?? `${stem}ió`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.preterite?.firstPersonPlural ?? `${stem}imos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.preterite?.secondPersonPlural ?? `${stem}isteis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.preterite?.thirdPersonPlural ?? `${stem}ieron`
        }
      }),
      imperfect: new DefaultVerbTense(tenses.imperfect, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonSingular ?? `${stem}ía`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonSingular ?? `${stem}ías`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonSingular ?? `${stem}ía`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.imperfect?.firstPersonPlural ?? `${stem}íamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.imperfect?.secondPersonPlural ?? `${stem}íais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.imperfect?.thirdPersonPlural ?? `${stem}ían`
        }
      }),
      future: new DefaultVerbTense(tenses.future, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.future?.firstPersonSingular ?? `${stem}iré`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonSingular ?? `${stem}irás`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonSingular ?? `${stem}irá`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.future?.firstPersonPlural ?? `${stem}iremos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.future?.secondPersonPlural ?? `${stem}iréis`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.future?.thirdPersonPlural ?? `${stem}irán`
        }
      }),
      conditional: new DefaultVerbTense(tenses.conditional, {
        firstSingular: {
          persons: [ persons.firstSingular ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonSingular ?? `${stem}iría`
        },
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonSingular ?? `${stem}irías`
        },
        thirdSingularAndSecondSingularFormal: {
          persons: [ persons.thirdSingular, persons.secondSingularFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonSingular ?? `${stem}iría`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.indicative?.conditional?.firstPersonPlural ?? `${stem}iríamos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.indicative?.conditional?.secondPersonPlural ?? `${stem}iríais`
        },
        thirdPluralAndSecondPluralFormal: {
          persons: [ persons.thirdPlural, persons.secondPluralFormal ],
          value: irregularConjugations?.indicative?.conditional?.thirdPersonPlural ?? `${stem}irían`
        }
      })
    }),
    imperative: new ImperativeVerbMood({
      affirmative: new ImperativeVerbTense(tenses.affirmative, {
        secondSingularInformal: {
          persons: [ persons.secondSingularInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingular ?? `${stem}e`
        },
        secondSingularFormal: {
          persons: [ persons.secondSingularFormal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonSingularFormal ?? `${stem}a`
        },
        firstPlural: {
          persons: [ persons.firstPlural ],
          value: irregularConjugations?.imperative?.affirmative?.firstPersonPlural ?? `${stem}amos`
        },
        secondPluralInformal: {
          persons: [ persons.secondPluralInformal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPlural ?? `${stem}id`
        },
        secondPluralFormal: {
          persons: [ persons.secondPluralFormal ],
          value: irregularConjugations?.imperative?.affirmative?.secondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}
