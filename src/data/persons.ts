import type { Person } from "./verbs.types";

interface Persons {
  firstSingular: Person;
  secondSingularInformal: Person;
  secondSingularFormal: Person;
  thirdSingularAndSecondSingularFormal: Person;
  firstPlural: Person;
  secondPluralInformal: Person;
  secondPluralFormal: Person;
  thirdPluralAndSecondPluralFormal: Person;
}

export const persons: Persons = {
  firstSingular: {
    description: "first person singular",
    pronouns: "yo"
  },
  secondSingularInformal: {
    description: "informal second person singular",
    pronouns: "tú"
  },
  secondSingularFormal: {
    description: "formal second person singular",
    pronouns: "usted"
  },
  thirdSingularAndSecondSingularFormal: {
    description: "third person singular / formal second person singular",
    pronouns: "él / ella / usted"
  },
  firstPlural: {
    description: "first person plural",
    pronouns: "nosotros / nosotras"
  },
  secondPluralInformal: {
    description: "informal second person plural",
    pronouns: "vosotros / vosotras"
  },
  secondPluralFormal: {
    description: "formal second person plural",
    pronouns: "ustedes"
  },
  thirdPluralAndSecondPluralFormal: {
    description: "third person plural / formal second person plural",
    pronouns: "éllos / ellas / ustedes"
  }
};
