import { buildConjugations } from "./conjugationBuilder";
import type { VerbDefinition } from "./verbDefinitions.types";

export class Verb {
  readonly infinitive: string;
  readonly conjugations: VerbConjugations;

  constructor(definition: VerbDefinition) {
    this.infinitive = definition.infinitive;
    this.conjugations = buildConjugations(definition);
  }

  allConjugations(): Conjugation[] {
    const conjugations = [];
    for (const mood of this.conjugations.allMoods())
      for (const tense of mood.allTenses())
        for (const conjugation of tense.allConjugations())
          conjugations.push(conjugation);
    return conjugations;
  }
};

export class VerbConjugations {
  indicative: IndicativeMoodConjugations;
  imperative: ImperativeMoodConjugations;

  constructor(params: {
    indicative: IndicativeMoodConjugations;
    imperative: ImperativeMoodConjugations;
  }) {
    this.indicative = params.indicative;
    this.imperative = params.imperative;
  }

  allMoods() {
    return [this.indicative, this.imperative];
  }
};

export class IndicativeMoodConjugations {
  present: DefaultTenseConjugations;
  preterite: DefaultTenseConjugations;
  imperfect: DefaultTenseConjugations;
  future: DefaultTenseConjugations;
  conditional: DefaultTenseConjugations;

  constructor(params: {
    present: DefaultTenseConjugations;
    preterite: DefaultTenseConjugations;
    imperfect: DefaultTenseConjugations;
    future: DefaultTenseConjugations;
    conditional: DefaultTenseConjugations;
  }) {
    this.present = params.present;
    this.preterite = params.preterite;
    this.imperfect = params.imperfect;
    this.future = params.future;
    this.conditional = params.conditional;
  }

  allTenses() {
    return [
      this.present,
      this.preterite,
      this.imperfect,
      this.future,
      this.conditional
    ];
  }
};

export class ImperativeMoodConjugations {
  affirmative: ImperativeTenseConjugations;

  constructor(params: {
    affirmative: ImperativeTenseConjugations;
  }) {
    this.affirmative = params.affirmative;
  }

  allTenses() {
    return [this.affirmative];
  }
};

export class DefaultTenseConjugations {
  firstSingular: Conjugation;
  secondSingularInformal: Conjugation;
  thirdSingularAndSecondSingularFormal: Conjugation;
  firstPlural: Conjugation;
  secondPluralInformal: Conjugation;
  thirdPluralAndSecondPluralFormal: Conjugation;

  constructor(params: {
    firstSingular: Conjugation;
    secondSingularInformal: Conjugation;
    thirdSingularAndSecondSingularFormal: Conjugation;
    firstPlural: Conjugation;
    secondPluralInformal: Conjugation;
    thirdPluralAndSecondPluralFormal: Conjugation;
  }) {
    this.firstSingular = params.firstSingular;
    this.secondSingularInformal = params.secondSingularInformal;
    this.thirdSingularAndSecondSingularFormal = params.thirdSingularAndSecondSingularFormal;
    this.firstPlural = params.firstPlural;
    this.secondPluralInformal = params.secondPluralInformal;
    this.thirdPluralAndSecondPluralFormal = params.thirdPluralAndSecondPluralFormal;
  }

  allConjugations() {
    return [
      this.firstSingular,
      this.secondSingularInformal,
      this.thirdSingularAndSecondSingularFormal,
      this.firstPlural,
      this.secondPluralInformal,
      this.thirdPluralAndSecondPluralFormal
    ];
  }
};

export class ImperativeTenseConjugations {
  secondSingularInformal: Conjugation;
  secondSingularFormal: Conjugation;
  firstPlural: Conjugation;
  secondPluralInformal: Conjugation;
  secondPluralFormal: Conjugation;

  constructor(params: {
    secondSingularInformal: Conjugation;
    secondSingularFormal: Conjugation;
    firstPlural: Conjugation;
    secondPluralInformal: Conjugation;
    secondPluralFormal: Conjugation;
  }) {
    this.secondSingularInformal = params.secondSingularInformal;
    this.secondSingularFormal = params.secondSingularFormal;
    this.firstPlural = params.firstPlural;
    this.secondPluralInformal = params.secondPluralInformal;
    this.secondPluralFormal = params.secondPluralFormal;
  }

  allConjugations() {
    return [
      this.secondSingularInformal,
      this.secondSingularFormal,
      this.firstPlural,
      this.secondPluralInformal,
      this.secondPluralFormal
    ];
  }
};

export interface Conjugation {
  mood: string;
  tense: string;
  person: Person;
  value: string;
};

export interface Person {
  description: string;
  pronouns: string;
};
