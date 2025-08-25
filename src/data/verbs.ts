import { buildConjugations, type Conjugation, type VerbConjugations } from "./conjugation";
import { getVerbDefinition, getRandomVerbDefinition, type VerbDefinition } from "./verbDefinitions";

export function getVerbDetails(infinitive: string): Verb | undefined {
  const definition = getVerbDefinition(infinitive);
  return definition ? new Verb(definition) : undefined;
};

export function getRandomVerb(): Verb {
  const definition = getRandomVerbDefinition();
  return new Verb(definition);
};

class Verb {
  readonly Infinitive: string;
  readonly Conjugations: VerbConjugations;

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.Conjugations = buildConjugations(definition)
  }

  allConjugations(): Conjugation[] {
    const conjugations = [];
    for (const mood of this.Conjugations.allMoods())
      for (const tense of mood.allTenses())
        for (const conjugation of tense.allConjugations())
          conjugations.push(conjugation);
    return conjugations;
  }
}
