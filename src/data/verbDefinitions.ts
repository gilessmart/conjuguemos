import { chooseRandomElement } from "../utils/chooseRandom";

export interface VerbDefinition {
  Infinitive: string;
  IrregularConjugations?: IrregularConjugations
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

const definitions: VerbDefinition[] = [
  // regular ar verbs
  { Infinitive: "acabar" },
  { Infinitive: "ayudar" },
  { Infinitive: "bailar" },
  { Infinitive: "cambiar" },
  { Infinitive: "caminar" },
  { Infinitive: "cantar" },
  { Infinitive: "comprar" },
  { Infinitive: "dibujar" },
  { Infinitive: "disculpar" },
  { Infinitive: "disfrutar" },
  { Infinitive: "enseñar" },
  { Infinitive: "escuchar" },
  { Infinitive: "esperar" },
  { Infinitive: "estudiar" },
  { Infinitive: "gastar" },
  { Infinitive: "hablar" },
  { Infinitive: "intentar" },
  { Infinitive: "lavar" },
  { Infinitive: "llenar" },
  { Infinitive: "limpiar" },
  { Infinitive: "llamar" },
  { Infinitive: "llevar" },
  { Infinitive: "mandar" },
  { Infinitive: "manejar" },
  { Infinitive: "necesitar" },
  { Infinitive: "mirar" },
  { Infinitive: "odiar" },
  { Infinitive: "olvidar" },
  { Infinitive: "pasar" },
  { Infinitive: "preguntar" },
  { Infinitive: "preparar" },
  { Infinitive: "tomar" },
  { Infinitive: "trabajar" },
  { Infinitive: "usar" },
  // regular er verbs
  { Infinitive: "aprender" },
  { Infinitive: "beber" },
  { Infinitive: "comer" },
  { Infinitive: "comprender" },
  { Infinitive: "correr" },
  { Infinitive: "deber" },
  { Infinitive: "leer" },
  { Infinitive: "responder" },
  { Infinitive: "vender" },
  // regular ir verbs
  { Infinitive: "vivir" },
  { Infinitive: "recibir" },
  { Infinitive: "decidir" },
  { Infinitive: "dividir" },
  { Infinitive: "compartir" },
  { Infinitive: "permitir" },
  { Infinitive: "subir" },
  // common irregular verbs
  {
    Infinitive: "conocer",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "conozco"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingularFormal: "conozca",
          FirstPersonPlural: "conozcamos",
          SecondPersonPluralFormal: "conozcan"
        }
      }
    }
  },
  {
    Infinitive: "creer",
    IrregularConjugations: {
      Indicative: {
        Preterite: {
          SecondPersonSingular: "creíste",
          ThirdPersonSingular: "creyó",
          FirstPersonPlural: "creímos",
          SecondPersonPlural: "creísteis",
          ThirdPersonPlural: "creyeron"
        }
      }
    }
  },
  {
    Infinitive: "dar",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "doy",
          SecondPersonPlural: "dais"
        },
        Preterite: {
          FirstPersonSingular: "di",
          SecondPersonSingular: "diste",
          ThirdPersonSingular: "dio",
          FirstPersonPlural: "dimos",
          SecondPersonPlural: "disteis",
          ThirdPersonPlural: "dieron"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingularFormal: "dé"
        }
      }
    }
  },
  {
    Infinitive: "decir",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "digo",
          SecondPersonSingular: "dices",
          ThirdPersonSingular: "dice",
          ThirdPersonPlural: "dicen"
        },
        Preterite: {
          FirstPersonSingular: "dije",
          SecondPersonSingular: "dijiste",
          ThirdPersonSingular: "dijo",
          FirstPersonPlural: "dijimos",
          SecondPersonPlural: "dijisteis",
          ThirdPersonPlural: "dijeron"
        },
        Future: {
          FirstPersonSingular: "diré",
          SecondPersonSingular: "dirás",
          ThirdPersonSingular: "dirá",
          FirstPersonPlural: "diremos",
          SecondPersonPlural: "diréis",
          ThirdPersonPlural: "dirán"
        },
        Conditional: {
          FirstPersonSingular: "diría",
          SecondPersonSingular: "dirías",
          ThirdPersonSingular: "diría",
          FirstPersonPlural: "diríamos",
          SecondPersonPlural: "diríais",
          ThirdPersonPlural: "dirían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "di",
          SecondPersonSingularFormal: "diga",
          FirstPersonPlural: "digamos",
          SecondPersonPluralFormal: "digan"
        }
      }
    }
  },
  {
    Infinitive: "encender",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "enciendo",
          SecondPersonSingular: "enciendes",
          ThirdPersonSingular: "enciende",
          ThirdPersonPlural: "encienden"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "enciende",
          SecondPersonSingularFormal: "encienda",
          SecondPersonPluralFormal: "enciendan"
        }
      }
    }
  },
  {
    Infinitive: "encontrar",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "encuentro",
          SecondPersonSingular: "encuentras",
          ThirdPersonSingular: "encuentra",
          ThirdPersonPlural: "encuentran"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "encuentra",
          SecondPersonSingularFormal: "encuentre",
          SecondPersonPluralFormal: "encuentren"
        }
      }
    }
  },
  {
    Infinitive: "entender",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "entiendo",
          SecondPersonSingular: "entiendes",
          ThirdPersonSingular: "entiende",
          ThirdPersonPlural: "entienden"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "entiende",
          SecondPersonSingularFormal: "entienda",
          SecondPersonPluralFormal: "entiendan"
        }
      }
    }
  },
  {
    Infinitive: "estar",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "estoy",
          SecondPersonSingular: "estás",
          ThirdPersonSingular: "está",
          FirstPersonPlural: "estamos",
          SecondPersonPlural: "estáis",
          ThirdPersonPlural: "están"
        },
        Preterite: {
          FirstPersonSingular: "estuve",
          SecondPersonSingular: "estuviste",
          ThirdPersonSingular: "estuvo",
          FirstPersonPlural: "estuvimos",
          SecondPersonPlural: "estuvisteis",
          ThirdPersonPlural: "estuvieron"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "está",
          SecondPersonSingularFormal: "esté",
          SecondPersonPluralFormal: "estén"
        }
      }
    }
  },
  {
    Infinitive: "haber",
    IrregularConjugations: {
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
          SecondPersonPluralFormal: "hayan"
        }
      }
    }
  },
  {
    Infinitive: "hacer",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "hago"
        },
        Preterite: {
          FirstPersonSingular: "hice",
          SecondPersonSingular: "hiciste",
          ThirdPersonSingular: "hizo",
          FirstPersonPlural: "hicimos",
          SecondPersonPlural: "hicisteis",
          ThirdPersonPlural: "hicieron"
        },
        Future: {
          FirstPersonSingular: "haré",
          SecondPersonSingular: "harás",
          ThirdPersonSingular: "hará",
          FirstPersonPlural: "haremos",
          SecondPersonPlural: "haréis",
          ThirdPersonPlural: "harán"
        },
        Conditional: {
          FirstPersonSingular: "haría",
          SecondPersonSingular: "harías",
          ThirdPersonSingular: "haría",
          FirstPersonPlural: "haríamos",
          SecondPersonPlural: "haríais",
          ThirdPersonPlural: "harían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "haz",
          SecondPersonSingularFormal: "haga",
          FirstPersonPlural: "hagamos",
          SecondPersonPluralFormal: "hagan"
        }
      }
    }
  },
  {
    Infinitive: "ir",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "voy",
          SecondPersonSingular: "vas",
          ThirdPersonSingular: "va",
          FirstPersonPlural: "vamos",
          SecondPersonPlural: "vais",
          ThirdPersonPlural: "van"
        },
        Preterite: {
          FirstPersonSingular: "fui",
          SecondPersonSingular: "fuiste",
          ThirdPersonSingular: "fue",
          FirstPersonPlural: "fuimos",
          SecondPersonPlural: "fuisteis",
          ThirdPersonPlural: "fueron"
        },
        Imperfect: {
          FirstPersonSingular: "iba",
          SecondPersonSingular: "ibas",
          ThirdPersonSingular: "iba",
          FirstPersonPlural: "íbamos",
          SecondPersonPlural: "ibais",
          ThirdPersonPlural: "iban"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "ve",
          SecondPersonSingularFormal: "vaya",
          FirstPersonPlural: "vamos",
          SecondPersonPluralFormal: "vayan"
        }
      }
    }
  },
  {
    Infinitive: "llegar",
    IrregularConjugations: {
      Indicative: {
        Preterite: {
          FirstPersonSingular: "llegué"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "llega",
          SecondPersonSingularFormal: "llegue",
          FirstPersonPlural: "lleguemos",
          SecondPersonPluralFormal: "lleguen"
        }
      }
    }
  },
  {
    Infinitive: "pensar",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "pienso",
          SecondPersonSingular: "piensas",
          ThirdPersonSingular: "piensa",
          ThirdPersonPlural: "piensan"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "piensa",
          SecondPersonSingularFormal: "piense",
          SecondPersonPluralFormal: "piensen"
        }
      }
    }
  },
  {
    Infinitive: "poder",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "puedo",
          SecondPersonSingular: "puedes",
          ThirdPersonSingular: "puede",
          ThirdPersonPlural: "pueden"
        },
        Preterite: {
          FirstPersonSingular: "pude",
          SecondPersonSingular: "pudiste",
          ThirdPersonSingular: "pudo",
          FirstPersonPlural: "pudimos",
          SecondPersonPlural: "pudisteis",
          ThirdPersonPlural: "pudieron"
        },
        Future: {
          FirstPersonSingular: "podré",
          SecondPersonSingular: "podrás",
          ThirdPersonSingular: "podrá",
          FirstPersonPlural: "podremos",
          SecondPersonPlural: "podréis",
          ThirdPersonPlural: "podrán"
        },
        Conditional: {
          FirstPersonSingular: "podría",
          SecondPersonSingular: "podrías",
          ThirdPersonSingular: "podría",
          FirstPersonPlural: "podríamos",
          SecondPersonPlural: "podríais",
          ThirdPersonPlural: "podrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "puede",
          SecondPersonSingularFormal: "pueda",
          SecondPersonPluralFormal: "puedan"
        }
      }
    }
  },
  {
    Infinitive: "poner",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "pongo"
        },
        Preterite: {
          FirstPersonSingular: "puse",
          SecondPersonSingular: "pusiste",
          ThirdPersonSingular: "puso",
          FirstPersonPlural: "pusimos",
          SecondPersonPlural: "pusisteis",
          ThirdPersonPlural: "pusieron"
        },
        Future: {
          FirstPersonSingular: "pondré",
          SecondPersonSingular: "pondrás",
          ThirdPersonSingular: "pondrá",
          FirstPersonPlural: "pondremos",
          SecondPersonPlural: "pondréis",
          ThirdPersonPlural: "pondrán"
        },
        Conditional: {
          FirstPersonSingular: "pondría",
          SecondPersonSingular: "pondrías",
          ThirdPersonSingular: "pondría",
          FirstPersonPlural: "pondríamos",
          SecondPersonPlural: "pondríais",
          ThirdPersonPlural: "pondrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "pon",
          SecondPersonSingularFormal: "ponga",
          FirstPersonPlural: "pongamos",
          SecondPersonPluralFormal: "pongan"
        }
      }
    }
  },
  {
    Infinitive: "querer",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "quiero",
          SecondPersonSingular: "quieres",
          ThirdPersonSingular: "quiere",
          ThirdPersonPlural: "quieren"
        },
        Preterite: {
          FirstPersonSingular: "quise",
          SecondPersonSingular: "quisiste",
          ThirdPersonSingular: "quiso",
          FirstPersonPlural: "quisimos",
          SecondPersonPlural: "quisisteis",
          ThirdPersonPlural: "quisieron"
        },
        Future: {
          FirstPersonSingular: "querré",
          SecondPersonSingular: "querrás",
          ThirdPersonSingular: "querrá",
          FirstPersonPlural: "querremos",
          SecondPersonPlural: "querréis",
          ThirdPersonPlural: "querrán"
        },
        Conditional: {
          FirstPersonSingular: "querría",
          SecondPersonSingular: "querrías",
          ThirdPersonSingular: "querría",
          FirstPersonPlural: "querríamos",
          SecondPersonPlural: "querríais",
          ThirdPersonPlural: "querrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "quiere",
          SecondPersonSingularFormal: "quiera",
          SecondPersonPluralFormal: "quieran"
        }
      }
    }
  },
  {
    Infinitive: "saber",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "sé"
        },
        Preterite: {
          FirstPersonSingular: "supe",
          SecondPersonSingular: "supiste",
          ThirdPersonSingular: "supo",
          FirstPersonPlural: "supimos",
          SecondPersonPlural: "supisteis",
          ThirdPersonPlural: "supieron"
        },
        Future: {
          FirstPersonSingular: "sabré",
          SecondPersonSingular: "sabrás",
          ThirdPersonSingular: "sabrá",
          FirstPersonPlural: "sabremos",
          SecondPersonPlural: "sabréis",
          ThirdPersonPlural: "sabrán"
        },
        Conditional: {
          FirstPersonSingular: "sabría",
          SecondPersonSingular: "sabrías",
          ThirdPersonSingular: "sabría",
          FirstPersonPlural: "sabríamos",
          SecondPersonPlural: "sabríais",
          ThirdPersonPlural: "sabrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingularFormal: "sepa",
          FirstPersonPlural: "sepamos",
          SecondPersonPluralFormal: "sepan"
        }
      }
    }
  },
  {
    Infinitive: "salir",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "salgo"
        },
        Future: {
          FirstPersonSingular: "saldré",
          SecondPersonSingular: "saldrás",
          ThirdPersonSingular: "saldrá",
          FirstPersonPlural: "saldremos",
          SecondPersonPlural: "saldréis",
          ThirdPersonPlural: "saldrán"
        },
        Conditional: {
          FirstPersonSingular: "saldría",
          SecondPersonSingular: "saldrías",
          ThirdPersonSingular: "saldría",
          FirstPersonPlural: "saldríamos",
          SecondPersonPlural: "saldríais",
          ThirdPersonPlural: "saldrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "sal",
          SecondPersonSingularFormal: "salga",
          FirstPersonPlural: "salgamos",
          SecondPersonPluralFormal: "salgan"
        }
      }
    }
  },
  {
    Infinitive: "ser",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "soy",
          SecondPersonSingular: "eres",
          ThirdPersonSingular: "es",
          FirstPersonPlural: "somos",
          SecondPersonPlural: "sois",
          ThirdPersonPlural: "son"
        },
        Preterite: {
          FirstPersonSingular: "fui",
          SecondPersonSingular: "fuiste",
          ThirdPersonSingular: "fue",
          FirstPersonPlural: "fuimos",
          SecondPersonPlural: "fuisteis",
          ThirdPersonPlural: "fueron"
        },
        Imperfect: {
          FirstPersonSingular: "era",
          SecondPersonSingular: "eras",
          ThirdPersonSingular: "era",
          FirstPersonPlural: "éramos",
          SecondPersonPlural: "erais",
          ThirdPersonPlural: "eran"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "sé",
          SecondPersonSingularFormal: "sea",
          FirstPersonPlural: "seamos",
          SecondPersonPluralFormal: "sean"
        }
      }
    }
  },
  {
    Infinitive: "tener",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "tengo",
          SecondPersonSingular: "tienes",
          ThirdPersonSingular: "tiene",
          ThirdPersonPlural: "tienen"
        },
        Preterite: {
          FirstPersonSingular: "tuve",
          SecondPersonSingular: "tuviste",
          ThirdPersonSingular: "tuvo",
          FirstPersonPlural: "tuvimos",
          SecondPersonPlural: "tuvisteis",
          ThirdPersonPlural: "tuvieron"
        },
        Future: {
          FirstPersonSingular: "tendré",
          SecondPersonSingular: "tendrás",
          ThirdPersonSingular: "tendrá",
          FirstPersonPlural: "tendremos",
          SecondPersonPlural: "tendréis",
          ThirdPersonPlural: "tendrán"
        },
        Conditional: {
          FirstPersonSingular: "tendría",
          SecondPersonSingular: "tendrías",
          ThirdPersonSingular: "tendría",
          FirstPersonPlural: "tendríamos",
          SecondPersonPlural: "tendríais",
          ThirdPersonPlural: "tendrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "ten",
          SecondPersonSingularFormal: "tenga",
          FirstPersonPlural: "tengamos",
          SecondPersonPluralFormal: "tengan"
        }
      }
    }
  },
  {
    Infinitive: "venir",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "vengo",
          SecondPersonSingular: "vienes",
          ThirdPersonSingular: "viene",
          ThirdPersonPlural: "vienen"
        },
        Preterite: {
          FirstPersonSingular: "vine",
          SecondPersonSingular: "viniste",
          ThirdPersonSingular: "vino",
          FirstPersonPlural: "vinimos",
          SecondPersonPlural: "vinisteis",
          ThirdPersonPlural: "vinieron"
        },
        Future: {
          FirstPersonSingular: "vendré",
          SecondPersonSingular: "vendrás",
          ThirdPersonSingular: "vendrá",
          FirstPersonPlural: "vendremos",
          SecondPersonPlural: "vendréis",
          ThirdPersonPlural: "vendrán"
        },
        Conditional: {
          FirstPersonSingular: "vendría",
          SecondPersonSingular: "vendrías",
          ThirdPersonSingular: "vendría",
          FirstPersonPlural: "vendríamos",
          SecondPersonPlural: "vendríais",
          ThirdPersonPlural: "vendrían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "ven",
          SecondPersonSingularFormal: "venga",
          FirstPersonPlural: "vengamos",
          SecondPersonPluralFormal: "vengan"
        }
      }
    }
  },
  {
    Infinitive: "ver",
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "veo",
          SecondPersonPlural: "veis"
        },
        Preterite: {
          FirstPersonSingular: "vi",
          ThirdPersonSingular: "vio"
        },
        Imperfect: {
          FirstPersonSingular: "veía",
          SecondPersonSingular: "veías",
          ThirdPersonSingular: "veía",
          FirstPersonPlural: "veíamos",
          SecondPersonPlural: "veíais",
          ThirdPersonPlural: "veían"
        }
      },
      Imperative: {
        Affirmative: {
          SecondPersonSingular: "ve",
          SecondPersonSingularFormal: "vea",
          FirstPersonPlural: "veamos",
          SecondPersonPluralFormal: "vean"
        }
      }
    }
  }
];

const definitionMap = new Map<string, VerbDefinition>(definitions.map(def => [def.Infinitive, def]));

export function getInfinitives(): string[] {
  return definitions.map(def => def.Infinitive).sort();
};

export function getVerbDefinition(infinitive: string): VerbDefinition | undefined {
  return definitionMap.get(infinitive);
};

export function getRandomVerbDefinition(): VerbDefinition {
  return chooseRandomElement(definitions)
};