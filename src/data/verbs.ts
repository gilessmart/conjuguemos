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

  get flattenedConjugations(): { mood: string, tense: string, conjugation: Conjugation }[] {
    return [
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.FirstSingular },
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.SecondSingularInformal },
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.ThirdSingularAndSecondSingularFormal },
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.FirstPlural },
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.SecondPluralInformal },
      { mood: "indicative", tense: "present", conjugation: this.Conjugations.Indicative.Present.ThirdPluralAndSecondPluralFormal },

      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.FirstSingular },
      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.SecondSingularInformal },
      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.ThirdSingularAndSecondSingularFormal },
      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.FirstPlural },
      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.SecondPluralInformal },
      { mood: "indicative", tense: "preterite", conjugation: this.Conjugations.Indicative.Preterite.ThirdPluralAndSecondPluralFormal },

      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.FirstSingular },
      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.SecondSingularInformal },
      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.ThirdSingularAndSecondSingularFormal },
      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.FirstPlural },
      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.SecondPluralInformal },
      { mood: "indicative", tense: "imperfect", conjugation: this.Conjugations.Indicative.Imperfect.ThirdPluralAndSecondPluralFormal },

      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.FirstSingular },
      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.SecondSingularInformal },
      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.ThirdSingularAndSecondSingularFormal },
      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.FirstPlural },
      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.SecondPluralInformal },
      { mood: "indicative", tense: "future", conjugation: this.Conjugations.Indicative.Future.ThirdPluralAndSecondPluralFormal },

      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.FirstSingular },
      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.SecondSingularInformal },
      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.ThirdSingularAndSecondSingularFormal },
      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.FirstPlural },
      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.SecondPluralInformal },
      { mood: "indicative", tense: "conditional", conjugation: this.Conjugations.Indicative.Conditional.ThirdPluralAndSecondPluralFormal },

      { mood: "imperative", tense: "affirmative", conjugation: this.Conjugations.Imperative.Affirmative.SecondSingularInformal },
      { mood: "imperative", tense: "affirmative", conjugation: this.Conjugations.Imperative.Affirmative.SecondSingularFormal },
      { mood: "imperative", tense: "affirmative", conjugation: this.Conjugations.Imperative.Affirmative.FirstPlural },
      { mood: "imperative", tense: "affirmative", conjugation: this.Conjugations.Imperative.Affirmative.SecondPluralInformal },
      { mood: "imperative", tense: "affirmative", conjugation: this.Conjugations.Imperative.Affirmative.SecondPluralFormal }
    ];
  }
}
