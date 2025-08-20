import { buildConjugations, type Conjugation, type ConjugationMood } from "./conjugation";
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
  readonly Conjugations: ConjugationMood[];

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.Conjugations = buildConjugations(definition)
  }

  get flattenedConjugations(): { mood: string, tense: string, conjugation: Conjugation }[] {
    const result = [];

    for (const mood of this.Conjugations)
      for (const tense of mood.Tenses)
        for (const conjugation of tense.Conjugations)
          result.push({ mood: mood.Name, tense: tense.Name, conjugation });

    return result;
  }
}