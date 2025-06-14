import { definitions, VerbDefinition, IrregularConjugations } from "./verbDefinitions";

export function getSimplifiedVerbs(): string[] {
  return Object.keys(definitions);
}

export function getVerbDetails(verb: string): VerbDetails | undefined {
  return new VerbDetails(definitions[verb]);
}

export class VerbDetails {
  Verb: string;
  Conjugations: VerbConjugations;

  constructor(definition: VerbDefinition) {
    this.Verb = definition.Verb;
    this.Conjugations = buildConjugations(definition)
  }

  get TitleCaseVerb(): string {
    return this.Verb.charAt(0).toUpperCase() + this.Verb.slice(1);
  }
}

type PersonConjugations = {
  FirstPersonSingular: string;
  SecondPersonSingular: string;
  ThirdPersonSingular: string;
  FirstPersonPlural: string;
  SecondPersonPlural: string;
  ThirdPersonPlural: string;
};

type VerbConjugations = {
  Indicative: {
    Present: PersonConjugations;
    Preterite: PersonConjugations;
    Imperfect: PersonConjugations;
    Future: PersonConjugations;
    Conditional: PersonConjugations;
  }
};

function buildConjugations(definition: VerbDefinition): VerbConjugations {
  const ending = definition.Verb.slice(-2);
  const stem = definition.Verb.slice(0, -2);
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
}

function buildArConjugations(stem: string, irregularConjugations?: IrregularConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Present?.SecondPersonSingular || `${stem}as`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular || `${stem}a`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Present?.FirstPersonPlural || `${stem}amos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Present?.SecondPersonPlural || `${stem}áis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural || `${stem}an`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular || `${stem}é`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular || `${stem}aste`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ó`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural || `${stem}amos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural || `${stem}asteis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural || `${stem}aron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular || `${stem}aba`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular || `${stem}abas`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}aba`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural || `${stem}ábamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural || `${stem}abais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}aban`
      },
      Future: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Future?.FirstPersonSingular || `${stem}aré`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Future?.SecondPersonSingular || `${stem}arás`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular || `${stem}ará`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Future?.FirstPersonPlural || `${stem}aremos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Future?.SecondPersonPlural || `${stem}aréis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural || `${stem}arán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular || `${stem}aría`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular || `${stem}arías`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular || `${stem}aría`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural || `${stem}aríamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural || `${stem}aríais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural || `${stem}arían`
      }
    }
  };
}

function buildErConjugations(stem: string, irregularConjugations?: IrregularConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Present?.SecondPersonSingular || `${stem}es`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular || `${stem}e`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Present?.FirstPersonPlural || `${stem}emos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Present?.SecondPersonPlural || `${stem}éis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural || `${stem}en`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular || `${stem}í`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular || `${stem}iste`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ió`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural || `${stem}isteis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural || `${stem}ieron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular || `${stem}ía`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular || `${stem}ías`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}ía`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural || `${stem}íamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural || `${stem}íais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}ían`
      },
      Future: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Future?.FirstPersonSingular || `${stem}eré`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Future?.SecondPersonSingular || `${stem}erás`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular || `${stem}erá`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Future?.FirstPersonPlural || `${stem}eremos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Future?.SecondPersonPlural || `${stem}eréis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural || `${stem}erán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular || `${stem}ería`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular || `${stem}erías`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular || `${stem}ería`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural || `${stem}eríamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural || `${stem}eríais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural || `${stem}erían`
      }
    }
  };
}

function buildIrConjugations(stem: string, irregularConjugations?: IrregularConjugations) : VerbConjugations {
  return {
    Indicative: {
      Present: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Present?.FirstPersonSingular || `${stem}o`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Present?.SecondPersonSingular || `${stem}es`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Present?.ThirdPersonSingular || `${stem}e`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Present?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Present?.SecondPersonPlural || `${stem}ís`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Present?.ThirdPersonPlural || `${stem}en`
      },
      Preterite: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Preterite?.FirstPersonSingular || `${stem}í`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Preterite?.SecondPersonSingular || `${stem}iste`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Preterite?.ThirdPersonSingular || `${stem}ió`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Preterite?.FirstPersonPlural || `${stem}imos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Preterite?.SecondPersonPlural || `${stem}isteis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Preterite?.ThirdPersonPlural || `${stem}ieron`
      },
      Imperfect: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Imperfect?.FirstPersonSingular || `${stem}ía`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Imperfect?.SecondPersonSingular || `${stem}ías`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonSingular || `${stem}ía`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Imperfect?.FirstPersonPlural || `${stem}íamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Imperfect?.SecondPersonPlural || `${stem}íais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Imperfect?.ThirdPersonPlural || `${stem}ían`
      },
      Future: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Future?.FirstPersonSingular || `${stem}iré`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Future?.SecondPersonSingular || `${stem}irás`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Future?.ThirdPersonSingular || `${stem}irá`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Future?.FirstPersonPlural || `${stem}iremos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Future?.SecondPersonPlural || `${stem}iréis`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Future?.ThirdPersonPlural || `${stem}irán`
      },
      Conditional: {
        FirstPersonSingular: irregularConjugations?.Indicative?.Conditional?.FirstPersonSingular || `${stem}iría`,
        SecondPersonSingular: irregularConjugations?.Indicative?.Conditional?.SecondPersonSingular || `${stem}irías`,
        ThirdPersonSingular: irregularConjugations?.Indicative?.Conditional?.ThirdPersonSingular || `${stem}iría`,
        FirstPersonPlural: irregularConjugations?.Indicative?.Conditional?.FirstPersonPlural || `${stem}iríamos`,
        SecondPersonPlural: irregularConjugations?.Indicative?.Conditional?.SecondPersonPlural || `${stem}iríais`,
        ThirdPersonPlural: irregularConjugations?.Indicative?.Conditional?.ThirdPersonPlural || `${stem}irían`
      }
    }
  };
}
