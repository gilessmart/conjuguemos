import { persons } from "./persons";
import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions.types";
import { VerbConjugations, IndicativeMoodConjugations, DefaultTenseConjugations, ImperativeMoodConjugations, ImperativeTenseConjugations } from "./verbs.types";

export function buildConjugations(definition: VerbDefinition): VerbConjugations {
  const ending = definition.Infinitive.slice(-2);
  const stem = definition.Infinitive.slice(0, -2);
  switch (ending) {
    case "ar":
      return buildArConjugations(stem, definition.IrregularConjugations);
    case "er":
      return buildErConjugations(stem, definition.IrregularConjugations);
    case "ir":
      return buildIrConjugations(stem, definition.IrregularConjugations);
    default:
      throw new Error(`Unsupported verb ending: ${ending}`);
  }
};

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    Indicative: new IndicativeMoodConjugations({
      Present: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}as`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}a`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}áis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}an`
        }
      }),
      Preterite: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}é`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}aste`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ó`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}asteis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}aron`
        }
      }),
      Imperfect: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}aba`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}abas`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}aba`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}ábamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}abais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}aban`
        }
      }),
      Future: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}aré`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}arás`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}ará`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}aremos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}aréis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}arán`
        }
      }),
      Conditional: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}aría`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}arías`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}aría`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}aríamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}aríais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}arían`
        }
      })
    }),
    Imperative: new ImperativeMoodConjugations({
      Affirmative: new ImperativeTenseConjugations({
        SecondSingularInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}a`
        },
        SecondSingularFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}e`
        },
        FirstPlural: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}emos`
        },
        SecondPluralInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ad`
        },
        SecondPluralFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}en`
        }
      })
    })
  });
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    Indicative: new IndicativeMoodConjugations({
      Present: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}emos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}éis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
        }
      }),
      Preterite: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
        }
      }),
      Imperfect: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
        }
      }),
      Future: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}eré`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}erás`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}erá`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}eremos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}eréis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}erán`
        }
      }),
      Conditional: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}ería`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}erías`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}ería`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}eríamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}eríais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}erían`
        }
      })
    }),
    Imperative: new ImperativeMoodConjugations({
      Affirmative: new ImperativeTenseConjugations({
        SecondSingularInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
        },
        SecondSingularFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
        },
        FirstPlural: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ed`
        },
        SecondPluralFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return new VerbConjugations({
    Indicative: new IndicativeMoodConjugations({
      Present: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}ís`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "present",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
        }
      }),
      Preterite: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "preterite",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
        }
      }),
      Imperfect: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "imperfect",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
        }
      }),
      Future: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}iré`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}irás`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}irá`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}iremos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}iréis`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "future",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}irán`
        }
      }),
      Conditional: new DefaultTenseConjugations({
        FirstSingular: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}iría`
        },
        SecondSingularInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}irías`
        },
        ThirdSingularAndSecondSingularFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}iría`
        },
        FirstPlural: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}iríamos`
        },
        SecondPluralInformal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}iríais`
        },
        ThirdPluralAndSecondPluralFormal: {
          Mood: "indicative",
          Tense: "conditional",
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}irían`
        }
      })
    }),
    Imperative: new ImperativeMoodConjugations({
      Affirmative: new ImperativeTenseConjugations({
        SecondSingularInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
        },
        SecondSingularFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
        },
        FirstPlural: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}id`
        },
        SecondPluralFormal: {
          Mood: "imperative",
          Tense: "affirmative",
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
        }
      })
    })
  });
}
