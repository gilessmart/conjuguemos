import { VerbConjugations } from "./types";

// Define VerbDetails type
export interface VerbDetails {
  Verb: string;
  IrregularConjugations: VerbConjugations;
}

const verbList: { [key: string]: VerbDetails } = {
  // regular ar verbs
  acabar: { Verb: "acabar", IrregularConjugations: {} },
  ayudar: { Verb: "ayudar", IrregularConjugations: {} },
  bailar: { Verb: "bailar", IrregularConjugations: {} },
  cambiar: { Verb: "cambiar", IrregularConjugations: {} },
  caminar: { Verb: "caminar", IrregularConjugations: {} },
  cantar: { Verb: "cantar", IrregularConjugations: {} },
  comprar: { Verb: "comprar", IrregularConjugations: {} },
  dibujar: { Verb: "dibujar", IrregularConjugations: {} },
  disculpar: { Verb: "disculpar", IrregularConjugations: {} },
  disfrutar: { Verb: "disfrutar", IrregularConjugations: {} },
  ensenar: { Verb: "enseñar", IrregularConjugations: {} },
  escuchar: { Verb: "escuchar", IrregularConjugations: {} },
  esperar: { Verb: "esperar", IrregularConjugations: {} },
  estudiar: { Verb: "estudiar", IrregularConjugations: {} },
  hablar: { Verb: "hablar", IrregularConjugations: {} },
  intentar: { Verb: "intentar", IrregularConjugations: {} },
  lavar: { Verb: "lavar", IrregularConjugations: {} },
  limpiar: { Verb: "limpiar", IrregularConjugations: {} },
  llamar: { Verb: "llamar", IrregularConjugations: {} },
  llevar: { Verb: "llevar", IrregularConjugations: {} },
  mandar: { Verb: "mandar", IrregularConjugations: {} },
  manejar: { Verb: "manejar", IrregularConjugations: {} },
  necesitar: { Verb: "necesitar", IrregularConjugations: {} },
  mirar: { Verb: "mirar", IrregularConjugations: {} },
  odiar: { Verb: "odiar", IrregularConjugations: {} },
  olvidar: { Verb: "olvidar", IrregularConjugations: {} },
  pasar: { Verb: "pasar", IrregularConjugations: {} },
  preguntar: { Verb: "preguntar", IrregularConjugations: {} },
  preparar: { Verb: "preparar", IrregularConjugations: {} },
  tomar: { Verb: "tomar", IrregularConjugations: {} },
  trabajar: { Verb: "trabajar", IrregularConjugations: {} },
  usar: { Verb: "usar", IrregularConjugations: {} },
  // regular er verbs
  aprender: { Verb: "aprender", IrregularConjugations: {} },
  beber: { Verb: "beber", IrregularConjugations: {} },
  comer: { Verb: "comer", IrregularConjugations: {} },
  comprender: { Verb: "comprender", IrregularConjugations: {} },
  correr: { Verb: "correr", IrregularConjugations: {} },
  deber: { Verb: "deber", IrregularConjugations: {} },
  leer: { Verb: "leer", IrregularConjugations: {} },
  responder: { Verb: "responder", IrregularConjugations: {} },
  vender: { Verb: "vender", IrregularConjugations: {} },
  // regular ir verbs
  vivir: { Verb: "vivir", IrregularConjugations: {} },
  recibir: { Verb: "recibir", IrregularConjugations: {} },
  decidir: { Verb: "decidir", IrregularConjugations: {} },
  dividir: { Verb: "dividir", IrregularConjugations: {} },
  compartir: { Verb: "compartir", IrregularConjugations: {} },
  permitir: { Verb: "permitir", IrregularConjugations: {} },
  subir: { Verb: "subir", IrregularConjugations: {} },
  // common irregular verbs
  conocer: {
    Verb: "conocer", 
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "conozco"
        }
      }
    }
  },
  creer: {
    Verb: "creer", 
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
  dar: {
    Verb: "dar", 
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
      }
    }
  },
  decir: {
    Verb: "decir", 
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
      }
    }
  },
  encontrar: {
    Verb: "encontrar", 
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "encuentro",
          SecondPersonSingular: "encuentras",
          ThirdPersonSingular: "encuentra",
          ThirdPersonPlural: "encuentran"
        }
      }
    }
  },
  estar: {
    Verb: "estar", 
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
      }
    }
  },
  haber: {
    Verb: "haber", 
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
      }
    }
  },
  hacer: {
    Verb: "hacer", 
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
      }
    }
  },
  ir: {
    Verb: "ir", 
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
      }
    }
  },
  llegar: {
    Verb: "llegar", 
    IrregularConjugations: {
      Indicative: {
        Preterite: {
          FirstPersonSingular: "llegué"
        }
      }
    }
  },
  pensar: {
    Verb: "pensar", 
    IrregularConjugations: {
      Indicative: {
        Present: {
          FirstPersonSingular: "pienso",
          SecondPersonSingular: "piensas",
          ThirdPersonSingular: "piensa",
          ThirdPersonPlural: "piensan"
        }
      }
    }
  },
  poder: {
    Verb: "poder", 
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
      }
    }
  },
  poner: {
    Verb: "poner", 
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
      }
    }
  },
  querer: {
    Verb: "querer", 
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
      }
    }
  },
  saber: {
    Verb: "saber", 
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
      }
    }
  },
  salir: {
    Verb: "salir", 
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
      }
    }
  },
  ser: {
    Verb: "ser", 
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
      }
    }
  },
  tener: {
    Verb: "tener", 
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
      }
    }
  },
  venir: {
    Verb: "venir", 
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
      }
    }
  },
  ver: {
    Verb: "ver", 
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
      }
    }
  }
  // more common irregular verbs
  // abrir: {},
  // acordar: {},
  // andar: {},
  // buscar: {},
  // caer: {},
  // cerrar: {},
  // comenzar: {},
  // conducir: {},
  // dormir: {},
  // elegir: {},
  // empezar: {},
  // entender: {},
  // escribir: {},
  // jugar: {},
  // ofrecer: {},
  // oír: {},
  // pagar: {},
  // pedir: {},
  // perder: {},
  // practicar: {},
  // preferir: {},
  // parecer: {},
  // recordar: {},
  // seguir: {},
  // sentir: {},
  // significar: {},
  // soñar: {},
  // tocar: {},
  // traer: {},
  // volver: {},
};

export default verbList;