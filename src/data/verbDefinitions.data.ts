import type { VerbDefinition } from "./verbDefinitions.types";

export const definitions: VerbDefinition[] = [
  // regular ar verbs
  { infinitive: "acabar" },
  { infinitive: "ayudar" },
  { infinitive: "bailar" },
  { infinitive: "cambiar" },
  { infinitive: "caminar" },
  { infinitive: "cantar" },
  { infinitive: "comprar" },
  { infinitive: "dibujar" },
  { infinitive: "disculpar" },
  { infinitive: "disfrutar" },
  { infinitive: "enseñar" },
  { infinitive: "escuchar" },
  { infinitive: "esperar" },
  { infinitive: "estudiar" },
  { infinitive: "gastar" },
  { infinitive: "hablar" },
  { infinitive: "intentar" },
  { infinitive: "lavar" },
  { infinitive: "llenar" },
  { infinitive: "limpiar" },
  { infinitive: "llamar" },
  { infinitive: "llevar" },
  { infinitive: "mandar" },
  { infinitive: "manejar" },
  { infinitive: "necesitar" },
  { infinitive: "mirar" },
  { infinitive: "odiar" },
  { infinitive: "olvidar" },
  { infinitive: "pasar" },
  { infinitive: "preguntar" },
  { infinitive: "preparar" },
  { infinitive: "tomar" },
  { infinitive: "trabajar" },
  { infinitive: "usar" },
  // regular er verbs
  { infinitive: "aprender" },
  { infinitive: "beber" },
  { infinitive: "comer" },
  { infinitive: "comprender" },
  { infinitive: "correr" },
  { infinitive: "deber" },
  { infinitive: "leer" },
  { infinitive: "responder" },
  { infinitive: "vender" },
  // regular ir verbs
  { infinitive: "vivir" },
  { infinitive: "recibir" },
  { infinitive: "decidir" },
  { infinitive: "dividir" },
  { infinitive: "compartir" },
  { infinitive: "permitir" },
  { infinitive: "subir" },
  // common irregular verbs
  {
    infinitive: "conocer",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "conozco"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingularFormal: "conozca",
          firstPersonPlural: "conozcamos",
          secondPersonPluralFormal: "conozcan"
        }
      }
    }
  },
  {
    infinitive: "creer",
    irregularConjugations: {
      indicative: {
        preterite: {
          secondPersonSingular: "creíste",
          thirdPersonSingular: "creyó",
          firstPersonPlural: "creímos",
          secondPersonPlural: "creísteis",
          thirdPersonPlural: "creyeron"
        }
      }
    }
  },
  {
    infinitive: "dar",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "doy",
          secondPersonPlural: "dais"
        },
        preterite: {
          firstPersonSingular: "di",
          secondPersonSingular: "diste",
          thirdPersonSingular: "dio",
          firstPersonPlural: "dimos",
          secondPersonPlural: "disteis",
          thirdPersonPlural: "dieron"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingularFormal: "dé"
        }
      }
    }
  },
  {
    infinitive: "decir",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "digo",
          secondPersonSingular: "dices",
          thirdPersonSingular: "dice",
          thirdPersonPlural: "dicen"
        },
        preterite: {
          firstPersonSingular: "dije",
          secondPersonSingular: "dijiste",
          thirdPersonSingular: "dijo",
          firstPersonPlural: "dijimos",
          secondPersonPlural: "dijisteis",
          thirdPersonPlural: "dijeron"
        },
        future: {
          firstPersonSingular: "diré",
          secondPersonSingular: "dirás",
          thirdPersonSingular: "dirá",
          firstPersonPlural: "diremos",
          secondPersonPlural: "diréis",
          thirdPersonPlural: "dirán"
        },
        conditional: {
          firstPersonSingular: "diría",
          secondPersonSingular: "dirías",
          thirdPersonSingular: "diría",
          firstPersonPlural: "diríamos",
          secondPersonPlural: "diríais",
          thirdPersonPlural: "dirían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "di",
          secondPersonSingularFormal: "diga",
          firstPersonPlural: "digamos",
          secondPersonPluralFormal: "digan"
        }
      }
    }
  },
  {
    infinitive: "encender",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "enciendo",
          secondPersonSingular: "enciendes",
          thirdPersonSingular: "enciende",
          thirdPersonPlural: "encienden"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "enciende",
          secondPersonSingularFormal: "encienda",
          secondPersonPluralFormal: "enciendan"
        }
      }
    }
  },
  {
    infinitive: "encontrar",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "encuentro",
          secondPersonSingular: "encuentras",
          thirdPersonSingular: "encuentra",
          thirdPersonPlural: "encuentran"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "encuentra",
          secondPersonSingularFormal: "encuentre",
          secondPersonPluralFormal: "encuentren"
        }
      }
    }
  },
  {
    infinitive: "entender",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "entiendo",
          secondPersonSingular: "entiendes",
          thirdPersonSingular: "entiende",
          thirdPersonPlural: "entienden"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "entiende",
          secondPersonSingularFormal: "entienda",
          secondPersonPluralFormal: "entiendan"
        }
      }
    }
  },
  {
    infinitive: "estar",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "estoy",
          secondPersonSingular: "estás",
          thirdPersonSingular: "está",
          firstPersonPlural: "estamos",
          secondPersonPlural: "estáis",
          thirdPersonPlural: "están"
        },
        preterite: {
          firstPersonSingular: "estuve",
          secondPersonSingular: "estuviste",
          thirdPersonSingular: "estuvo",
          firstPersonPlural: "estuvimos",
          secondPersonPlural: "estuvisteis",
          thirdPersonPlural: "estuvieron"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "está",
          secondPersonSingularFormal: "esté",
          secondPersonPluralFormal: "estén"
        }
      }
    }
  },
  {
    infinitive: "haber",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "he",
          secondPersonSingular: "has",
          thirdPersonSingular: "ha",
          firstPersonPlural: "hemos",
          secondPersonPlural: "habéis",
          thirdPersonPlural: "han"
        },
        preterite: {
          firstPersonSingular: "hube",
          secondPersonSingular: "hubiste",
          thirdPersonSingular: "hubo",
          firstPersonPlural: "hubimos",
          secondPersonPlural: "hubisteis",
          thirdPersonPlural: "hubieron"
        },
        future: {
          firstPersonSingular: "habré",
          secondPersonSingular: "habrás",
          thirdPersonSingular: "habrá",
          firstPersonPlural: "habremos",
          secondPersonPlural: "habréis",
          thirdPersonPlural: "habrán"
        },
        conditional: {
          firstPersonSingular: "habría",
          secondPersonSingular: "habrías",
          thirdPersonSingular: "habría",
          firstPersonPlural: "habríamos",
          secondPersonPlural: "habríais",
          thirdPersonPlural: "habrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "he",
          secondPersonSingularFormal: "haya",
          firstPersonPlural: "hayamos",
          secondPersonPluralFormal: "hayan"
        }
      }
    }
  },
  {
    infinitive: "hacer",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "hago"
        },
        preterite: {
          firstPersonSingular: "hice",
          secondPersonSingular: "hiciste",
          thirdPersonSingular: "hizo",
          firstPersonPlural: "hicimos",
          secondPersonPlural: "hicisteis",
          thirdPersonPlural: "hicieron"
        },
        future: {
          firstPersonSingular: "haré",
          secondPersonSingular: "harás",
          thirdPersonSingular: "hará",
          firstPersonPlural: "haremos",
          secondPersonPlural: "haréis",
          thirdPersonPlural: "harán"
        },
        conditional: {
          firstPersonSingular: "haría",
          secondPersonSingular: "harías",
          thirdPersonSingular: "haría",
          firstPersonPlural: "haríamos",
          secondPersonPlural: "haríais",
          thirdPersonPlural: "harían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "haz",
          secondPersonSingularFormal: "haga",
          firstPersonPlural: "hagamos",
          secondPersonPluralFormal: "hagan"
        }
      }
    }
  },
  {
    infinitive: "ir",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "voy",
          secondPersonSingular: "vas",
          thirdPersonSingular: "va",
          firstPersonPlural: "vamos",
          secondPersonPlural: "vais",
          thirdPersonPlural: "van"
        },
        preterite: {
          firstPersonSingular: "fui",
          secondPersonSingular: "fuiste",
          thirdPersonSingular: "fue",
          firstPersonPlural: "fuimos",
          secondPersonPlural: "fuisteis",
          thirdPersonPlural: "fueron"
        },
        imperfect: {
          firstPersonSingular: "iba",
          secondPersonSingular: "ibas",
          thirdPersonSingular: "iba",
          firstPersonPlural: "íbamos",
          secondPersonPlural: "ibais",
          thirdPersonPlural: "iban"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "ve",
          secondPersonSingularFormal: "vaya",
          firstPersonPlural: "vamos",
          secondPersonPluralFormal: "vayan"
        }
      }
    }
  },
  {
    infinitive: "llegar",
    irregularConjugations: {
      indicative: {
        preterite: {
          firstPersonSingular: "llegué"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "llega",
          secondPersonSingularFormal: "llegue",
          firstPersonPlural: "lleguemos",
          secondPersonPluralFormal: "lleguen"
        }
      }
    }
  },
  {
    infinitive: "pensar",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "pienso",
          secondPersonSingular: "piensas",
          thirdPersonSingular: "piensa",
          thirdPersonPlural: "piensan"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "piensa",
          secondPersonSingularFormal: "piense",
          secondPersonPluralFormal: "piensen"
        }
      }
    }
  },
  {
    infinitive: "poder",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "puedo",
          secondPersonSingular: "puedes",
          thirdPersonSingular: "puede",
          thirdPersonPlural: "pueden"
        },
        preterite: {
          firstPersonSingular: "pude",
          secondPersonSingular: "pudiste",
          thirdPersonSingular: "pudo",
          firstPersonPlural: "pudimos",
          secondPersonPlural: "pudisteis",
          thirdPersonPlural: "pudieron"
        },
        future: {
          firstPersonSingular: "podré",
          secondPersonSingular: "podrás",
          thirdPersonSingular: "podrá",
          firstPersonPlural: "podremos",
          secondPersonPlural: "podréis",
          thirdPersonPlural: "podrán"
        },
        conditional: {
          firstPersonSingular: "podría",
          secondPersonSingular: "podrías",
          thirdPersonSingular: "podría",
          firstPersonPlural: "podríamos",
          secondPersonPlural: "podríais",
          thirdPersonPlural: "podrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "puede",
          secondPersonSingularFormal: "pueda",
          secondPersonPluralFormal: "puedan"
        }
      }
    }
  },
  {
    infinitive: "poner",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "pongo"
        },
        preterite: {
          firstPersonSingular: "puse",
          secondPersonSingular: "pusiste",
          thirdPersonSingular: "puso",
          firstPersonPlural: "pusimos",
          secondPersonPlural: "pusisteis",
          thirdPersonPlural: "pusieron"
        },
        future: {
          firstPersonSingular: "pondré",
          secondPersonSingular: "pondrás",
          thirdPersonSingular: "pondrá",
          firstPersonPlural: "pondremos",
          secondPersonPlural: "pondréis",
          thirdPersonPlural: "pondrán"
        },
        conditional: {
          firstPersonSingular: "pondría",
          secondPersonSingular: "pondrías",
          thirdPersonSingular: "pondría",
          firstPersonPlural: "pondríamos",
          secondPersonPlural: "pondríais",
          thirdPersonPlural: "pondrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "pon",
          secondPersonSingularFormal: "ponga",
          firstPersonPlural: "pongamos",
          secondPersonPluralFormal: "pongan"
        }
      }
    }
  },
  {
    infinitive: "querer",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "quiero",
          secondPersonSingular: "quieres",
          thirdPersonSingular: "quiere",
          thirdPersonPlural: "quieren"
        },
        preterite: {
          firstPersonSingular: "quise",
          secondPersonSingular: "quisiste",
          thirdPersonSingular: "quiso",
          firstPersonPlural: "quisimos",
          secondPersonPlural: "quisisteis",
          thirdPersonPlural: "quisieron"
        },
        future: {
          firstPersonSingular: "querré",
          secondPersonSingular: "querrás",
          thirdPersonSingular: "querrá",
          firstPersonPlural: "querremos",
          secondPersonPlural: "querréis",
          thirdPersonPlural: "querrán"
        },
        conditional: {
          firstPersonSingular: "querría",
          secondPersonSingular: "querrías",
          thirdPersonSingular: "querría",
          firstPersonPlural: "querríamos",
          secondPersonPlural: "querríais",
          thirdPersonPlural: "querrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "quiere",
          secondPersonSingularFormal: "quiera",
          secondPersonPluralFormal: "quieran"
        }
      }
    }
  },
  {
    infinitive: "saber",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "sé"
        },
        preterite: {
          firstPersonSingular: "supe",
          secondPersonSingular: "supiste",
          thirdPersonSingular: "supo",
          firstPersonPlural: "supimos",
          secondPersonPlural: "supisteis",
          thirdPersonPlural: "supieron"
        },
        future: {
          firstPersonSingular: "sabré",
          secondPersonSingular: "sabrás",
          thirdPersonSingular: "sabrá",
          firstPersonPlural: "sabremos",
          secondPersonPlural: "sabréis",
          thirdPersonPlural: "sabrán"
        },
        conditional: {
          firstPersonSingular: "sabría",
          secondPersonSingular: "sabrías",
          thirdPersonSingular: "sabría",
          firstPersonPlural: "sabríamos",
          secondPersonPlural: "sabríais",
          thirdPersonPlural: "sabrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingularFormal: "sepa",
          firstPersonPlural: "sepamos",
          secondPersonPluralFormal: "sepan"
        }
      }
    }
  },
  {
    infinitive: "salir",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "salgo"
        },
        future: {
          firstPersonSingular: "saldré",
          secondPersonSingular: "saldrás",
          thirdPersonSingular: "saldrá",
          firstPersonPlural: "saldremos",
          secondPersonPlural: "saldréis",
          thirdPersonPlural: "saldrán"
        },
        conditional: {
          firstPersonSingular: "saldría",
          secondPersonSingular: "saldrías",
          thirdPersonSingular: "saldría",
          firstPersonPlural: "saldríamos",
          secondPersonPlural: "saldríais",
          thirdPersonPlural: "saldrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "sal",
          secondPersonSingularFormal: "salga",
          firstPersonPlural: "salgamos",
          secondPersonPluralFormal: "salgan"
        }
      }
    }
  },
  {
    infinitive: "ser",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "soy",
          secondPersonSingular: "eres",
          thirdPersonSingular: "es",
          firstPersonPlural: "somos",
          secondPersonPlural: "sois",
          thirdPersonPlural: "son"
        },
        preterite: {
          firstPersonSingular: "fui",
          secondPersonSingular: "fuiste",
          thirdPersonSingular: "fue",
          firstPersonPlural: "fuimos",
          secondPersonPlural: "fuisteis",
          thirdPersonPlural: "fueron"
        },
        imperfect: {
          firstPersonSingular: "era",
          secondPersonSingular: "eras",
          thirdPersonSingular: "era",
          firstPersonPlural: "éramos",
          secondPersonPlural: "erais",
          thirdPersonPlural: "eran"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "sé",
          secondPersonSingularFormal: "sea",
          firstPersonPlural: "seamos",
          secondPersonPluralFormal: "sean"
        }
      }
    }
  },
  {
    infinitive: "tener",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "tengo",
          secondPersonSingular: "tienes",
          thirdPersonSingular: "tiene",
          thirdPersonPlural: "tienen"
        },
        preterite: {
          firstPersonSingular: "tuve",
          secondPersonSingular: "tuviste",
          thirdPersonSingular: "tuvo",
          firstPersonPlural: "tuvimos",
          secondPersonPlural: "tuvisteis",
          thirdPersonPlural: "tuvieron"
        },
        future: {
          firstPersonSingular: "tendré",
          secondPersonSingular: "tendrás",
          thirdPersonSingular: "tendrá",
          firstPersonPlural: "tendremos",
          secondPersonPlural: "tendréis",
          thirdPersonPlural: "tendrán"
        },
        conditional: {
          firstPersonSingular: "tendría",
          secondPersonSingular: "tendrías",
          thirdPersonSingular: "tendría",
          firstPersonPlural: "tendríamos",
          secondPersonPlural: "tendríais",
          thirdPersonPlural: "tendrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "ten",
          secondPersonSingularFormal: "tenga",
          firstPersonPlural: "tengamos",
          secondPersonPluralFormal: "tengan"
        }
      }
    }
  },
  {
    infinitive: "venir",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "vengo",
          secondPersonSingular: "vienes",
          thirdPersonSingular: "viene",
          thirdPersonPlural: "vienen"
        },
        preterite: {
          firstPersonSingular: "vine",
          secondPersonSingular: "viniste",
          thirdPersonSingular: "vino",
          firstPersonPlural: "vinimos",
          secondPersonPlural: "vinisteis",
          thirdPersonPlural: "vinieron"
        },
        future: {
          firstPersonSingular: "vendré",
          secondPersonSingular: "vendrás",
          thirdPersonSingular: "vendrá",
          firstPersonPlural: "vendremos",
          secondPersonPlural: "vendréis",
          thirdPersonPlural: "vendrán"
        },
        conditional: {
          firstPersonSingular: "vendría",
          secondPersonSingular: "vendrías",
          thirdPersonSingular: "vendría",
          firstPersonPlural: "vendríamos",
          secondPersonPlural: "vendríais",
          thirdPersonPlural: "vendrían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "ven",
          secondPersonSingularFormal: "venga",
          firstPersonPlural: "vengamos",
          secondPersonPluralFormal: "vengan"
        }
      }
    }
  },
  {
    infinitive: "ver",
    irregularConjugations: {
      indicative: {
        present: {
          firstPersonSingular: "veo",
          secondPersonPlural: "veis"
        },
        preterite: {
          firstPersonSingular: "vi",
          thirdPersonSingular: "vio"
        },
        imperfect: {
          firstPersonSingular: "veía",
          secondPersonSingular: "veías",
          thirdPersonSingular: "veía",
          firstPersonPlural: "veíamos",
          secondPersonPlural: "veíais",
          thirdPersonPlural: "veían"
        }
      },
      imperative: {
        affirmative: {
          secondPersonSingular: "ve",
          secondPersonSingularFormal: "vea",
          firstPersonPlural: "veamos",
          secondPersonPluralFormal: "vean"
        }
      }
    }
  }
];
