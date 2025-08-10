import { buildConjugations, type Mood } from "./conjugation";
import { getVerbDefinition, getRandomVerbDefinition, type VerbDefinition } from "./verbDefinitions";

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
  readonly Conjugations: Mood[];

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.Conjugations = buildConjugations(definition)
  }
}
