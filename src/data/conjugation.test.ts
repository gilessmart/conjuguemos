import { describe, expect, test } from "vitest";
import { buildConjugations } from "./conjugation";
import { getVerbDefinition } from "./verbDefinitions";

describe("buildConjugations()", () => {
  test("conjugates a regular AR verb", () => {
    const definition = getVerbDefinition("hablar");
    const actual = buildConjugations(definition!);
    const expected  = {
      Indicative: {
        Present: {
          FirstPersonSingular: "hablo",
          SecondPersonSingular: "hablas",
          ThirdPersonSingular: "habla",
          FirstPersonPlural: "hablamos",
          SecondPersonPlural: "habláis",
          ThirdPersonPlural: "hablan"
        },
        Preterite: {
          FirstPersonSingular: "hablé",
          SecondPersonSingular: "hablaste",
          ThirdPersonSingular: "habló",
          FirstPersonPlural: "hablamos",
          SecondPersonPlural: "hablasteis",
          ThirdPersonPlural: "hablaron"
        },
        Imperfect: {
          FirstPersonSingular: "hablaba",
          SecondPersonSingular: "hablabas",
          ThirdPersonSingular: "hablaba",
          FirstPersonPlural: "hablábamos",
          SecondPersonPlural: "hablabais",
          ThirdPersonPlural: "hablaban"
        },
        Future: {
          FirstPersonSingular: "hablaré",
          SecondPersonSingular: "hablarás",
          ThirdPersonSingular: "hablará",
          FirstPersonPlural: "hablaremos",
          SecondPersonPlural: "hablaréis",
          ThirdPersonPlural: "hablarán"
        },
        Conditional: {
          FirstPersonSingular: "hablaría",
          SecondPersonSingular: "hablarías",
          ThirdPersonSingular: "hablaría",
          FirstPersonPlural: "hablaríamos",
          SecondPersonPlural: "hablaríais",
          ThirdPersonPlural: "hablarían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "habla",
          SecondPersonSingularFormal: "hable",
          FirstPersonPlural: "hablemos",
          SecondPersonPlural: "hablad",
          SecondPersonPluralFormal: "hablen"
        }
      }
    };
    expect(actual).toEqual(expected);
  });
  
  test("conjugates a regular ER verb", () => {
    const definition = getVerbDefinition("comer");
    const actual = buildConjugations(definition!);
    const expected = {
      Indicative: {
        Present: {
          FirstPersonSingular: "como",
          SecondPersonSingular: "comes",
          ThirdPersonSingular: "come",
          FirstPersonPlural: "comemos",
          SecondPersonPlural: "coméis",
          ThirdPersonPlural: "comen"
        },
        Preterite: {
          FirstPersonSingular: "comí",
          SecondPersonSingular: "comiste",
          ThirdPersonSingular: "comió",
          FirstPersonPlural: "comimos",
          SecondPersonPlural: "comisteis",
          ThirdPersonPlural: "comieron"
        },
        Imperfect: {
          FirstPersonSingular: "comía",
          SecondPersonSingular: "comías",
          ThirdPersonSingular: "comía",
          FirstPersonPlural: "comíamos",
          SecondPersonPlural: "comíais",
          ThirdPersonPlural: "comían"
        },
        Future: {
          FirstPersonSingular: "comeré",
          SecondPersonSingular: "comerás",
          ThirdPersonSingular: "comerá",
          FirstPersonPlural: "comeremos",
          SecondPersonPlural: "comeréis",
          ThirdPersonPlural: "comerán"
        },
        Conditional: {
          FirstPersonSingular: "comería",
          SecondPersonSingular: "comerías",
          ThirdPersonSingular: "comería",
          FirstPersonPlural: "comeríamos",
          SecondPersonPlural: "comeríais",
          ThirdPersonPlural: "comerían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "come",
          SecondPersonSingularFormal: "coma",
          FirstPersonPlural: "comamos",
          SecondPersonPlural: "comed",
          SecondPersonPluralFormal: "coman"
        }
      }
    };
    expect(actual).toEqual(expected);
  });

  test("conjugates a regular IR verb", () => {
    const definition = getVerbDefinition("vivir");
    const actual = buildConjugations(definition!);
    const expected = {
      Indicative: {
        Present: {
          FirstPersonSingular: "vivo",
          SecondPersonSingular: "vives",
          ThirdPersonSingular: "vive",
          FirstPersonPlural: "vivimos",
          SecondPersonPlural: "vivís",
          ThirdPersonPlural: "viven"
        },
        Preterite: {
          FirstPersonSingular: "viví",
          SecondPersonSingular: "viviste",
          ThirdPersonSingular: "vivió",
          FirstPersonPlural: "vivimos",
          SecondPersonPlural: "vivisteis",
          ThirdPersonPlural: "vivieron"
        },
        Imperfect: {
          FirstPersonSingular: "vivía",
          SecondPersonSingular: "vivías",
          ThirdPersonSingular: "vivía",
          FirstPersonPlural: "vivíamos",
          SecondPersonPlural: "vivíais",
          ThirdPersonPlural: "vivían"
        },
        Future: {
          FirstPersonSingular: "viviré",
          SecondPersonSingular: "vivirás",
          ThirdPersonSingular: "vivirá",
          FirstPersonPlural: "viviremos",
          SecondPersonPlural: "viviréis",
          ThirdPersonPlural: "vivirán"
        },
        Conditional: {
          FirstPersonSingular: "viviría",
          SecondPersonSingular: "vivirías",
          ThirdPersonSingular: "viviría",
          FirstPersonPlural: "viviríamos",
          SecondPersonPlural: "viviríais",
          ThirdPersonPlural: "vivirían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "vive",
          SecondPersonSingularFormal: "viva",
          FirstPersonPlural: "vivamos",
          SecondPersonPlural: "vivid",
          SecondPersonPluralFormal: "vivan"
        }
      }
    };
    expect(actual).toEqual(expected);
  });

  test("conjugates an irregular verb", () => {
    const definition = getVerbDefinition("haber");
    const actual = buildConjugations(definition!);
    const expected = {
      Indicative: {
        Present: {
          FirstPersonSingular: "he",
          SecondPersonSingular: "has",
          ThirdPersonSingular: "ha",
          FirstPersonPlural: "hemos",
          SecondPersonPlural: "habéis",
          ThirdPersonPlural: "han"
        },
        Preterite: {
          FirstPersonSingular: "hube",
          SecondPersonSingular: "hubiste",
          ThirdPersonSingular: "hubo",
          FirstPersonPlural: "hubimos",
          SecondPersonPlural: "hubisteis",
          ThirdPersonPlural: "hubieron"
        },
        Imperfect: {
          FirstPersonSingular: "había",
          SecondPersonSingular: "habías",
          ThirdPersonSingular: "había",
          FirstPersonPlural: "habíamos",
          SecondPersonPlural: "habíais",
          ThirdPersonPlural: "habían"
        },
        Future: {
          FirstPersonSingular: "habré",
          SecondPersonSingular: "habrás",
          ThirdPersonSingular: "habrá",
          FirstPersonPlural: "habremos",
          SecondPersonPlural: "habréis",
          ThirdPersonPlural: "habrán"
        },
        Conditional: {
          FirstPersonSingular: "habría",
          SecondPersonSingular: "habrías",
          ThirdPersonSingular: "habría",
          FirstPersonPlural: "habríamos",
          SecondPersonPlural: "habríais",
          ThirdPersonPlural: "habrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "he",
          SecondPersonSingularFormal: "haya",
          FirstPersonPlural: "hayamos",
          SecondPersonPlural: "habed",
          SecondPersonPluralFormal: "hayan"
        }
      }
    };
    expect(actual).toEqual(expected);
  });
});
