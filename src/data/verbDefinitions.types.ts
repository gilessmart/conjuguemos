
export interface VerbDefinition {
  infinitive: string;
  irregularConjugations?: IrregularConjugations;
};

export interface IrregularConjugations {
  indicative?: {
    present?: {
      firstPersonSingular?: string;
      secondPersonSingular?: string;
      thirdPersonSingular?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      thirdPersonPlural?: string;
    };
    preterite?: {
      firstPersonSingular?: string;
      secondPersonSingular?: string;
      thirdPersonSingular?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      thirdPersonPlural?: string;
    };
    imperfect?: {
      firstPersonSingular?: string;
      secondPersonSingular?: string;
      thirdPersonSingular?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      thirdPersonPlural?: string;
    };
    future?: {
      firstPersonSingular?: string;
      secondPersonSingular?: string;
      thirdPersonSingular?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      thirdPersonPlural?: string;
    };
    conditional?: {
      firstPersonSingular?: string;
      secondPersonSingular?: string;
      thirdPersonSingular?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      thirdPersonPlural?: string;
    };
  };
  imperative?: {
    affirmative?: {
      secondPersonSingular?: string;
      secondPersonSingularFormal?: string;
      firstPersonPlural?: string;
      secondPersonPlural?: string;
      secondPersonPluralFormal?: string;
    };
  };
};
