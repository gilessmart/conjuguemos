import { buildConjugations, persons, type ConjugationMood } from "./conjugation";
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
  readonly Conjugations: ConjugationMood[];

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.Conjugations = buildConjugations(definition)
  }

  getActiveConjugations(settings: Settings) {
    const result = [];

    for (const mood of this.Conjugations) {
      const moodSetting = settings.moodInclusion.find(s => s.moodName === mood.Name);
      if (!moodSetting?.included)
        continue;
        
      for (const tense of mood.Tenses) {
        const tenseSetting = moodSetting.tenseInclusion.find(s => s.tenseName === tense.Name);
        if (!tenseSetting?.included)
          continue;

        const candidates = tense.Conjugations
          .filter(c => settings.includeVosotros || c.Person !== persons.SecondPluralInformal)
          .map(conjugation => ({ mood, tense, conjugation }))
        result.push(...candidates);
      }  
    }

    return result;
  }
}