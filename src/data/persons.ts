import type { Person } from "./verbs.types";

interface Persons {
  firstSingular: Person;
  secondSingularInformal: Person;
  secondSingularFormal: Person;
  thirdSingular: Person;
  firstPlural: Person;
  secondPluralInformal: Person;
  secondPluralFormal: Person;
  thirdPlural: Person;
}

export const persons: Persons = {
  firstSingular: {
    description: "first person singular",
    pronouns: [ "yo" ]
  },
  secondSingularInformal: {
    description: "informal second person singular",
    pronouns: [ "tú" ]
  },
  secondSingularFormal: {
    description: "formal second person singular",
    pronouns: [ "usted" ]
  },
  thirdSingular: {
    description: "third person singular",
    pronouns: [ "él", "ella" ]
  },
  firstPlural: {
    description: "first person plural",
    pronouns: [ "nosotros", "nosotras" ]
  },
  secondPluralInformal: {
    description: "informal second person plural",
    pronouns: [ "vosotros", "vosotras" ]
  },
  secondPluralFormal: {
    description: "formal second person plural",
    pronouns: [ "ustedes" ]
  },
  thirdPlural: {
    description: "third person plural",
    pronouns: [ "ellos", "ellas" ]
  }
};
