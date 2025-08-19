import { type Person, persons } from "./persons";
import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions";

export interface Conjugation {
  Person: Person;
  Value: string;
};

export interface ConjugationTense {
  Name: string;
  Conjugations: Conjugation[];
};

export interface ConjugationMood {
  Name: string;
  Tenses: ConjugationTense[];
};

export function buildConjugations(definition: VerbDefinition): ConjugationMood[] {
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

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations) : ConjugationMood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}as`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}a`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}áis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}an`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}é`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}aste`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ó`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}asteis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}aron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}aba`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}abas`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}aba`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}ábamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}abais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}aban`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}aré`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}arás`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}ará`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}aremos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}aréis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}arán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}aría`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}arías`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}aría`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}aríamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}aríais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}arían`
            }
          ]
        }
      ]
    },
    {
      Name: "imperative",
      Tenses: [
        {
          Name: "affirmative",
          Conjugations: [
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}a`
            },
            { 
              Person: persons.SecondSingularFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}e`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}emos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ad`
            },
            { 
              Person: persons.SecondPluralFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}en`
            }
          ]
        }
      ]
    }
  ];
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations) : ConjugationMood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}emos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}éis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}eré`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}erás`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}erá`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}eremos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}eréis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}erán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}ería`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}erías`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}ería`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}eríamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}eríais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}erían`
            }
          ]
        }
      ]
    },
    {
      Name: "imperative",
      Tenses: [
        {
          Name: "affirmative",
          Conjugations: [
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
            },
            { 
              Person: persons.SecondSingularFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ed`
            },
            { 
              Person: persons.SecondPluralFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
            }
          ]
        }
      ]
    }
  ];
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations) : ConjugationMood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}ís`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}iré`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}irás`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}irá`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}iremos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}iréis`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}irán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: persons.FirstSingular,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}iría`
            },
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}irías`
            },
            { 
              Person: persons.ThirdSingularAndSecondSingularFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}iría`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}iríamos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}iríais`
            },
            { 
              Person: persons.ThirdPluralAndSecondPluralFormal,
              Value: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}irían`
            }
          ]
        }
      ]
    },
    {
      Name: "imperative",
      Tenses: [
        {
          Name: "affirmative",
          Conjugations: [
            { 
              Person: persons.SecondSingularInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
            },
            { 
              Person: persons.SecondSingularFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
            },
            { 
              Person: persons.FirstPlural,
              Value: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: persons.SecondPluralInformal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}id`
            },
            { 
              Person: persons.SecondPluralFormal,
              Value: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
            }
          ]
        }
      ]
    }
  ];
}
