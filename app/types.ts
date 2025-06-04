export type PersonConjugations = {
  FirstPersonSingular?: string;
  SecondPersonSingular?: string;
  ThirdPersonSingular?: string;
  FirstPersonPlural?: string;
  SecondPersonPlural?: string;
  ThirdPersonPlural?: string;
};

export type VerbConjugations = {
  Indicative?: {
    Present?: PersonConjugations;
    Preterite?: PersonConjugations;
    Imperfect?: PersonConjugations;
    Future?: PersonConjugations;
    Conditional?: PersonConjugations;
  }
};