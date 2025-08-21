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
      this.Conjugations.Indicative.Present.FirstSingular,
      this.Conjugations.Indicative.Present.SecondSingularInformal,
      this.Conjugations.Indicative.Present.ThirdSingularAndSecondSingularFormal,
      this.Conjugations.Indicative.Present.FirstPlural,
      this.Conjugations.Indicative.Present.SecondPluralInformal,
      this.Conjugations.Indicative.Present.ThirdPluralAndSecondPluralFormal,

      this.Conjugations.Indicative.Preterite.FirstSingular,
      this.Conjugations.Indicative.Preterite.SecondSingularInformal,
      this.Conjugations.Indicative.Preterite.ThirdSingularAndSecondSingularFormal,
      this.Conjugations.Indicative.Preterite.FirstPlural,
      this.Conjugations.Indicative.Preterite.SecondPluralInformal,
      this.Conjugations.Indicative.Preterite.ThirdPluralAndSecondPluralFormal,

      this.Conjugations.Indicative.Imperfect.FirstSingular,
      this.Conjugations.Indicative.Imperfect.SecondSingularInformal,
      this.Conjugations.Indicative.Imperfect.ThirdSingularAndSecondSingularFormal,
      this.Conjugations.Indicative.Imperfect.FirstPlural,
      this.Conjugations.Indicative.Imperfect.SecondPluralInformal,
      this.Conjugations.Indicative.Imperfect.ThirdPluralAndSecondPluralFormal,

      this.Conjugations.Indicative.Future.FirstSingular,
      this.Conjugations.Indicative.Future.SecondSingularInformal,
      this.Conjugations.Indicative.Future.ThirdSingularAndSecondSingularFormal,
      this.Conjugations.Indicative.Future.FirstPlural,
      this.Conjugations.Indicative.Future.SecondPluralInformal,
      this.Conjugations.Indicative.Future.ThirdPluralAndSecondPluralFormal,

      this.Conjugations.Indicative.Conditional.FirstSingular,
      this.Conjugations.Indicative.Conditional.SecondSingularInformal,
      this.Conjugations.Indicative.Conditional.ThirdSingularAndSecondSingularFormal,
      this.Conjugations.Indicative.Conditional.FirstPlural,
      this.Conjugations.Indicative.Conditional.SecondPluralInformal,
      this.Conjugations.Indicative.Conditional.ThirdPluralAndSecondPluralFormal,

      this.Conjugations.Imperative.Affirmative.SecondSingularInformal,
      this.Conjugations.Imperative.Affirmative.SecondSingularFormal,
      this.Conjugations.Imperative.Affirmative.FirstPlural,
      this.Conjugations.Imperative.Affirmative.SecondPluralInformal,
      this.Conjugations.Imperative.Affirmative.SecondPluralFormal
    ];
  }
}
