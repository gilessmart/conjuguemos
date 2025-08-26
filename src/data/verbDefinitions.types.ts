
export interface VerbDefinition {
  Infinitive: string;
  IrregularConjugations?: IrregularConjugations;
};

export interface IrregularConjugations {
  Indicative?: {
    Present?: {
      FirstPersonSingular?: string;
      SecondPersonSingular?: string;
      ThirdPersonSingular?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      ThirdPersonPlural?: string;
    };
    Preterite?: {
      FirstPersonSingular?: string;
      SecondPersonSingular?: string;
      ThirdPersonSingular?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      ThirdPersonPlural?: string;
    };
    Imperfect?: {
      FirstPersonSingular?: string;
      SecondPersonSingular?: string;
      ThirdPersonSingular?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      ThirdPersonPlural?: string;
    };
    Future?: {
      FirstPersonSingular?: string;
      SecondPersonSingular?: string;
      ThirdPersonSingular?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      ThirdPersonPlural?: string;
    };
    Conditional?: {
      FirstPersonSingular?: string;
      SecondPersonSingular?: string;
      ThirdPersonSingular?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      ThirdPersonPlural?: string;
    };
  };
  Imperative?: {
    Affirmative?: {
      SecondPersonSingular?: string;
      SecondPersonSingularFormal?: string;
      FirstPersonPlural?: string;
      SecondPersonPlural?: string;
      SecondPersonPluralFormal?: string;
    };
  };
};
