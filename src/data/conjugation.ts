import { type Person, persons } from "./persons";
import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions";

export interface Conjugation {
  Person: Person;
  Value: string;
};

export interface VerbConjugations {
  Indicative: {
    Present: {
      FirstSingular: Conjugation;
      SecondSingularInformal: Conjugation;
      ThirdSingularAndSecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      ThirdPluralAndSecondPluralFormal: Conjugation;
    };
    Preterite: {
      FirstSingular: Conjugation;
      SecondSingularInformal: Conjugation;
      ThirdSingularAndSecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      ThirdPluralAndSecondPluralFormal: Conjugation;
    };
    Imperfect: {
      FirstSingular: Conjugation;
      SecondSingularInformal: Conjugation;
      ThirdSingularAndSecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      ThirdPluralAndSecondPluralFormal: Conjugation;
    };
    Future: {
      FirstSingular: Conjugation;
      SecondSingularInformal: Conjugation;
      ThirdSingularAndSecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      ThirdPluralAndSecondPluralFormal: Conjugation;
    };
    Conditional: {
      FirstSingular: Conjugation;
      SecondSingularInformal: Conjugation;
      ThirdSingularAndSecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      ThirdPluralAndSecondPluralFormal: Conjugation;
    };
  },
  Imperative: {
    Affirmative: {
      SecondSingularInformal: Conjugation;
      SecondSingularFormal: Conjugation;
      FirstPlural: Conjugation;
      SecondPluralInformal: Conjugation;
      SecondPluralFormal: Conjugation;
    };
  }
};

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
  return { 
    Indicative: {
      Present: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}as`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}a`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}áis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}an`
        }
      },
      Preterite: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}é`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}aste`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ó`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}asteis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}aron`
        }
      },
      Imperfect: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}aba`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}abas`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}aba`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}ábamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}abais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}aban`
        }
      },
      Future: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}aré`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}arás`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}ará`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}aremos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}aréis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}arán`
        }
      },
      Conditional: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}aría`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}arías`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}aría`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}aríamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}aríais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}arían`
        }
      }
    },
    Imperative: {
      Affirmative: {
        SecondSingularInformal: { 
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}a`
        },
        SecondSingularFormal: {
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}e`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}emos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ad`
        },
        SecondPluralFormal: { 
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}en`
        }
      }
    }
  };
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return { 
    Indicative: {
      Present: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}emos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}éis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
        }
      },
      Preterite: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
        }
      },
      Imperfect: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
        }
      },
      Future: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}eré`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}erás`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}erá`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}eremos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}eréis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}erán`
        }
      },
      Conditional: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}ería`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}erías`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}ería`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}eríamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}eríais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}erían`
        }
      }
    },
    Imperative: {
      Affirmative: {
        SecondSingularInformal: { 
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
        },
        SecondSingularFormal: {
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ed`
        },
        SecondPluralFormal: { 
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
        }
      }
    }
  };
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations): VerbConjugations {
  return { 
    Indicative: {
      Present: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}ís`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
        }
      },
      Preterite: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
        }
      },
      Imperfect: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
        }
      },
      Future: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}iré`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}irás`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}irá`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}iremos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}iréis`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}irán`
        }
      },
      Conditional: {
        FirstSingular: { 
          Person: persons.FirstSingular,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}iría`
        },
        SecondSingularInformal: {
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}irías`
        },
        ThirdSingularAndSecondSingularFormal: { 
          Person: persons.ThirdSingularAndSecondSingularFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}iría`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}iríamos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}iríais`
        },
        ThirdPluralAndSecondPluralFormal: { 
          Person: persons.ThirdPluralAndSecondPluralFormal,
          Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}irían`
        }
      }
    },
    Imperative: {
      Affirmative: {
        SecondSingularInformal: { 
          Person: persons.SecondSingularInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
        },
        SecondSingularFormal: {
          Person: persons.SecondSingularFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
        },
        FirstPlural: { 
          Person: persons.FirstPlural,
          Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
        },
        SecondPluralInformal: { 
          Person: persons.SecondPluralInformal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}id`
        },
        SecondPluralFormal: { 
          Person: persons.SecondPluralFormal,
          Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
        }
      }
    }
  };
}
