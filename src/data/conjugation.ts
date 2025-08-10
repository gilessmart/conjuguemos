import type { VerbDefinition, IrregularConjugations } from "./verbDefinitions";

export interface Conjugation {
  Person: string;
  Pronouns: string[];
  Text: string;
};

export interface Tense {
  Name: string;
  Conjugations: Conjugation[];
};

export interface Mood {
  Name: string;
  Tenses: Tense[];
};

export function buildConjugations(definition: VerbDefinition): Mood[] {
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

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations) : Mood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}as`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}a`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}áis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}an`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}é`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}aste`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ó`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}asteis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}aron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}aba`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}abas`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}aba`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}ábamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}abais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}aban`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}aré`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}arás`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}ará`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}aremos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}aréis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}arán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}aría`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}arías`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}aría`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}aríamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}aríais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}arían`
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
              Person: "informal second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}a`
            },
            { 
              Person: "formal second person singular",
              Pronouns: [ "usted" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}e`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}emos`
            },
            { 
              Person: "informal second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ad`
            },
            { 
              Person: "formal second person plural",
              Pronouns: [ "ustedes" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}en`
            }
          ]
        }
      ]
    }
  ];
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations) : Mood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}emos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}éis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}eré`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}erás`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}erá`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}eremos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}eréis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}erán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}ería`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}erías`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}ería`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}eríamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}eríais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}erían`
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
              Person: "informal second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
            },
            { 
              Person: "formal second person singular",
              Pronouns: [ "usted" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: "informal second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}ed`
            },
            { 
              Person: "formal second person plural",
              Pronouns: [ "ustedes" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
            }
          ]
        }
      ]
    }
  ];
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations) : Mood[] {
  return [
    { 
      Name: "indicative", 
      Tenses: [
        {
          Name: "present",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonSingular ?? `${stem}o`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonSingular ?? `${stem}es`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular ?? `${stem}e`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Present?.SecondPersonPlural ?? `${stem}ís`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural ?? `${stem}en`
            }
          ]
        },
        {
          Name: "preterite",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular ?? `${stem}í`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular ?? `${stem}iste`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular ?? `${stem}ió`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural ?? `${stem}imos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural ?? `${stem}isteis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural ?? `${stem}ieron`
            }
          ]
        },
        {
          Name: "imperfect",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular ?? `${stem}ía`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular ?? `${stem}ías`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular ?? `${stem}ía`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural ?? `${stem}íamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural ?? `${stem}íais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural ?? `${stem}ían`
            }
          ]
        },
        {
          Name: "future",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonSingular ?? `${stem}iré`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonSingular ?? `${stem}irás`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular ?? `${stem}irá`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.FirstPersonPlural ?? `${stem}iremos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Future?.SecondPersonPlural ?? `${stem}iréis`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural ?? `${stem}irán`
            }
          ]
        },
        {
          Name: "conditional",
          Conjugations: [
            { 
              Person: "first person singular",
              Pronouns: [ "yo" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular ?? `${stem}iría`
            },
            { 
              Person: "second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular ?? `${stem}irías`
            },
            { 
              Person: "third person singular",
              Pronouns: [ "él", "ella", "usted" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular ?? `${stem}iría`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural ?? `${stem}iríamos`
            },
            { 
              Person: "second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural ?? `${stem}iríais`
            },
            { 
              Person: "third person plural",
              Pronouns: [ "ellos", "ellas", "ustedes" ],
              Text: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural ?? `${stem}irían`
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
              Person: "informal second person singular",
              Pronouns: [ "tú" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingular ?? `${stem}e`
            },
            { 
              Person: "formal second person singular",
              Pronouns: [ "usted" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonSingularFormal ?? `${stem}a`
            },
            { 
              Person: "first person plural",
              Pronouns: [ "nosotros", "nosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.FirstPersonPlural ?? `${stem}amos`
            },
            { 
              Person: "informal second person plural",
              Pronouns: [ "vosotros", "vosotras" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPlural ?? `${stem}id`
            },
            { 
              Person: "formal second person plural",
              Pronouns: [ "ustedes" ],
              Text: irregularConjugations?.Imperative?.Affirmative?.SecondPersonPluralFormal ?? `${stem}an`
            }
          ]
        }
      ]
    }
  ];
}
