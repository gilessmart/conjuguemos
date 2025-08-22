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

  get flattenedConjugations(): Conjugation[] {
    return [
      ...this.Conjugations.Indicative.Present.allConjugations(),
      ...this.Conjugations.Indicative.Preterite.allConjugations(),
      ...this.Conjugations.Indicative.Imperfect.allConjugations(),
      ...this.Conjugations.Indicative.Future.allConjugations(),
      ...this.Conjugations.Indicative.Conditional.allConjugations(),
      ...this.Conjugations.Imperative.Affirmative.allConjugations(),
    ];
  }
}
