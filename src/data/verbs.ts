import { buildConjugations } from "./conjugation";
import { getVerbDefinition, getRandomVerbDefinition, type VerbDefinition } from "./verbDefinitions"

export function getVerbDetails(infinitive: string): VerbDetails | undefined {
  const definition = getVerbDefinition(infinitive);
  return definition ? new VerbDetails(definition) : undefined;
};

export function getRandomVerb(): VerbDetails {
  const definition = getRandomVerbDefinition();
  return new VerbDetails(definition);
};

class VerbDetails {
  readonly Infinitive: string;
  readonly TitleCaseInfinitive: string;
  readonly Conjugations: VerbConjugations;

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.TitleCaseInfinitive = definition.Infinitive.charAt(0).toUpperCase() + definition.Infinitive.slice(1);
    this.Conjugations = buildConjugations(definition)
  }
}

export interface TenseConjugations {
  FirstPersonSingular: string;
  SecondPersonSingular: string;
  ThirdPersonSingular: string;
  FirstPersonPlural: string;
  SecondPersonPlural: string;
  ThirdPersonPlural: string;
};

export interface MoodConjugations {
  Present: TenseConjugations;
  Preterite: TenseConjugations;
  Imperfect: TenseConjugations;
  Future: TenseConjugations;
  Conditional: TenseConjugations;
};

export interface VerbConjugations {
  Indicative: MoodConjugations;
};