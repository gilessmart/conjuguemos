import { buildConjugations } from "./conjugationBuilder";
import { moods } from "./moods";
import type { VerbDefinition } from "./verbDefinitions.types";

export class Verb {
  readonly infinitive: string;
  readonly verbMoods: VerbMoods;

  constructor(definition: VerbDefinition) {
    this.infinitive = definition.infinitive;
    this.verbMoods = buildConjugations(definition);
  }

  flatConjugations(): { mood: Mood, tense: Tense, conjugation: Conjugation }[] {
    const results = [];
    for (const verbMood of this.verbMoods.allVerbMoods())
      for (const verbTense of verbMood.allVerbTenses())
        for (const conjugation of verbTense.allConjugations())
          results.push({ mood: verbMood.mood, tense: verbTense.tense, conjugation});
    return results;
  }
};

export class VerbMoods {
  readonly indicative: IndicativeVerbMood;
  readonly imperative: ImperativeVerbMood;

  constructor(params: {
    indicative: IndicativeVerbMood;
    imperative: ImperativeVerbMood;
  }) {
    this.indicative = params.indicative;
    this.imperative = params.imperative;
  }

  allVerbMoods(): VerbMood[] {
    return [this.indicative, this.imperative];
  }
};

interface VerbMood {
  mood: Mood;
  allVerbTenses: () => VerbTense[];
}

export class IndicativeVerbMood implements VerbMood {
  readonly mood: Mood = moods.indicative;
  readonly present: DefaultVerbTense;
  readonly preterite: DefaultVerbTense;
  readonly imperfect: DefaultVerbTense;
  readonly future: DefaultVerbTense;
  readonly conditional: DefaultVerbTense;

  constructor(tenses: {
    present: DefaultVerbTense;
    preterite: DefaultVerbTense;
    imperfect: DefaultVerbTense;
    future: DefaultVerbTense;
    conditional: DefaultVerbTense;
  }) {
    this.present = tenses.present;
    this.preterite = tenses.preterite;
    this.imperfect = tenses.imperfect;
    this.future = tenses.future;
    this.conditional = tenses.conditional;
  }

  allVerbTenses() {
    return [
      this.present,
      this.preterite,
      this.imperfect,
      this.future,
      this.conditional
    ];
  }
};

export class ImperativeVerbMood implements VerbMood{
  readonly mood: Mood = moods.imperative;
  readonly affirmative: ImperativeVerbTense;

  constructor(tenses: {
    affirmative: ImperativeVerbTense;
  }) {
    this.affirmative = tenses.affirmative;
  }

  allVerbTenses() {
    return [this.affirmative];
  }
};

interface VerbTense {
  tense: Tense;
  allConjugations: () => Conjugation[];
}

export class DefaultVerbTense implements VerbTense {
  readonly tense: Tense;
  readonly firstSingular: Conjugation;
  readonly secondSingularInformal: Conjugation;
  readonly thirdSingularAndSecondSingularFormal: Conjugation;
  readonly firstPlural: Conjugation;
  readonly secondPluralInformal: Conjugation;
  readonly thirdPluralAndSecondPluralFormal: Conjugation;

  constructor(tense: Tense, conjugations: {
    firstSingular: Conjugation;
    secondSingularInformal: Conjugation;
    thirdSingularAndSecondSingularFormal: Conjugation;
    firstPlural: Conjugation;
    secondPluralInformal: Conjugation;
    thirdPluralAndSecondPluralFormal: Conjugation;
  }) {
    this.tense = tense;
    this.firstSingular = conjugations.firstSingular;
    this.secondSingularInformal = conjugations.secondSingularInformal;
    this.thirdSingularAndSecondSingularFormal = conjugations.thirdSingularAndSecondSingularFormal;
    this.firstPlural = conjugations.firstPlural;
    this.secondPluralInformal = conjugations.secondPluralInformal;
    this.thirdPluralAndSecondPluralFormal = conjugations.thirdPluralAndSecondPluralFormal;
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

export class ImperativeVerbTense implements VerbTense {
  readonly tense: Tense;
  readonly secondSingularInformal: Conjugation;
  readonly secondSingularFormal: Conjugation;
  readonly firstPlural: Conjugation;
  readonly secondPluralInformal: Conjugation;
  readonly secondPluralFormal: Conjugation;

  constructor(tense: Tense, conjugations: {
    secondSingularInformal: Conjugation;
    secondSingularFormal: Conjugation;
    firstPlural: Conjugation;
    secondPluralInformal: Conjugation;
    secondPluralFormal: Conjugation;
  }) {
    this.tense = tense;
    this.secondSingularInformal = conjugations.secondSingularInformal;
    this.secondSingularFormal = conjugations.secondSingularFormal;
    this.firstPlural = conjugations.firstPlural;
    this.secondPluralInformal = conjugations.secondPluralInformal;
    this.secondPluralFormal = conjugations.secondPluralFormal;
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

export interface Mood {
  description: string;
};

export interface Tense {
  description: string;
};

export interface Conjugation {
  person: Person;
  value: string;
};

export interface Person {
  description: string;
  pronouns: string;
};
