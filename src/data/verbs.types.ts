import { buildConjugations } from "./conjugationBuilder";
import type { VerbDefinition } from "./verbDefinitions.types";

export class Verb {
  readonly Infinitive: string;
  readonly Conjugations: VerbConjugations;

  constructor(definition: VerbDefinition) {
    this.Infinitive = definition.Infinitive;
    this.Conjugations = buildConjugations(definition);
  }

  allConjugations(): Conjugation[] {
    const conjugations = [];
    for (const mood of this.Conjugations.allMoods())
      for (const tense of mood.allTenses())
        for (const conjugation of tense.allConjugations())
          conjugations.push(conjugation);
    return conjugations;
  }
};

export class VerbConjugations {
  Indicative: IndicativeMoodConjugations;
  Imperative: ImperativeMoodConjugations;

  constructor(params: {
    Indicative: IndicativeMoodConjugations;
    Imperative: ImperativeMoodConjugations;
  }) {
    this.Indicative = params.Indicative;
    this.Imperative = params.Imperative;
  }

  allMoods() {
    return [this.Indicative, this.Imperative];
  }
};

export class IndicativeMoodConjugations {
  Present: DefaultTenseConjugations;
  Preterite: DefaultTenseConjugations;
  Imperfect: DefaultTenseConjugations;
  Future: DefaultTenseConjugations;
  Conditional: DefaultTenseConjugations;

  constructor(params: {
    Present: DefaultTenseConjugations;
    Preterite: DefaultTenseConjugations;
    Imperfect: DefaultTenseConjugations;
    Future: DefaultTenseConjugations;
    Conditional: DefaultTenseConjugations;
  }) {
    this.Present = params.Present;
    this.Preterite = params.Preterite;
    this.Imperfect = params.Imperfect;
    this.Future = params.Future;
    this.Conditional = params.Conditional;
  }

  allTenses() {
    return [
      this.Present,
      this.Preterite,
      this.Imperfect,
      this.Future,
      this.Conditional
    ];
  }
};

export class ImperativeMoodConjugations {
  Affirmative: ImperativeTenseConjugations;

  constructor(params: {
    Affirmative: ImperativeTenseConjugations;
  }) {
    this.Affirmative = params.Affirmative;
  }

  allTenses() {
    return [this.Affirmative];
  }
};

export class DefaultTenseConjugations {
  FirstSingular: Conjugation;
  SecondSingularInformal: Conjugation;
  ThirdSingularAndSecondSingularFormal: Conjugation;
  FirstPlural: Conjugation;
  SecondPluralInformal: Conjugation;
  ThirdPluralAndSecondPluralFormal: Conjugation;

  constructor(params: {
    FirstSingular: Conjugation;
    SecondSingularInformal: Conjugation;
    ThirdSingularAndSecondSingularFormal: Conjugation;
    FirstPlural: Conjugation;
    SecondPluralInformal: Conjugation;
    ThirdPluralAndSecondPluralFormal: Conjugation;
  }) {
    this.FirstSingular = params.FirstSingular;
    this.SecondSingularInformal = params.SecondSingularInformal;
    this.ThirdSingularAndSecondSingularFormal = params.ThirdSingularAndSecondSingularFormal;
    this.FirstPlural = params.FirstPlural;
    this.SecondPluralInformal = params.SecondPluralInformal;
    this.ThirdPluralAndSecondPluralFormal = params.ThirdPluralAndSecondPluralFormal;
  }

  allConjugations() {
    return [
      this.FirstSingular,
      this.SecondSingularInformal,
      this.ThirdSingularAndSecondSingularFormal,
      this.FirstPlural,
      this.SecondPluralInformal,
      this.ThirdPluralAndSecondPluralFormal
    ];
  }
};

export class ImperativeTenseConjugations {
  SecondSingularInformal: Conjugation;
  SecondSingularFormal: Conjugation;
  FirstPlural: Conjugation;
  SecondPluralInformal: Conjugation;
  SecondPluralFormal: Conjugation;

  constructor(params: {
    SecondSingularInformal: Conjugation;
    SecondSingularFormal: Conjugation;
    FirstPlural: Conjugation;
    SecondPluralInformal: Conjugation;
    SecondPluralFormal: Conjugation;
  }) {
    this.SecondSingularInformal = params.SecondSingularInformal;
    this.SecondSingularFormal = params.SecondSingularFormal;
    this.FirstPlural = params.FirstPlural;
    this.SecondPluralInformal = params.SecondPluralInformal;
    this.SecondPluralFormal = params.SecondPluralFormal;
  }

  allConjugations() {
    return [
      this.SecondSingularInformal,
      this.SecondSingularFormal,
      this.FirstPlural,
      this.SecondPluralInformal,
      this.SecondPluralFormal
    ];
  }
};

export interface Conjugation {
  Mood: string;
  Tense: string;
  Person: Person;
  Value: string;
};

export interface Person {
  Description: string;
  Pronouns: string;
};
