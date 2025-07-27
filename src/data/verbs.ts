import chooseRandom from "../utils/chooseRandom";
import { buildConjugations } from "./conjugation";
import { definitions, type VerbDefinition } from "./verbDefinitions"

export function getVerbNames(): string[] {
  return Object.keys(definitions).sort();
};

export function getVerbDetails(verb: string): VerbDetails | undefined {
  const definition = definitions[verb];
  return definition ? new VerbDetails(verb, definition) : undefined;
};

export function getRandomVerb(): VerbDetails {
  const definition = chooseRandom(definitions);
  return new VerbDetails(definition.key, definition.value ?? {});
};

class VerbDetails {
  readonly Infinitive: string;
  readonly TitleCaseInfinitive: string;
  readonly Conjugations: VerbConjugations;

  constructor(infinitive: string, definition: VerbDefinition) {
    this.Infinitive = infinitive;
    this.TitleCaseInfinitive = infinitive.charAt(0).toUpperCase() + infinitive.slice(1);
    this.Conjugations = buildConjugations(infinitive, definition)
  }
};

export interface VerbConjugations {
  Indicative: {
    Present: {
      FirstPersonSingular: string;
      SecondPersonSingular: string;
      ThirdPersonSingular: string;
      FirstPersonPlural: string;
      SecondPersonPlural: string;
      ThirdPersonPlural: string;
    };
    Preterite: {
      FirstPersonSingular: string;
      SecondPersonSingular: string;
      ThirdPersonSingular: string;
      FirstPersonPlural: string;
      SecondPersonPlural: string;
      ThirdPersonPlural: string;
    };
    Imperfect: {
      FirstPersonSingular: string;
      SecondPersonSingular: string;
      ThirdPersonSingular: string;
      FirstPersonPlural: string;
      SecondPersonPlural: string;
      ThirdPersonPlural: string;
    };
    Future: {
      FirstPersonSingular: string;
      SecondPersonSingular: string;
      ThirdPersonSingular: string;
      FirstPersonPlural: string;
      SecondPersonPlural: string;
      ThirdPersonPlural: string;
    };
    Conditional: {
      FirstPersonSingular: string;
      SecondPersonSingular: string;
      ThirdPersonSingular: string;
      FirstPersonPlural: string;
      SecondPersonPlural: string;
      ThirdPersonPlural: string;
    };
  };
}