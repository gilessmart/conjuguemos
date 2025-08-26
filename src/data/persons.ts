import type { Person } from "./verbs.types";

interface Persons {
  FirstSingular: Person;
  SecondSingularInformal: Person;
  SecondSingularFormal: Person;
  ThirdSingularAndSecondSingularFormal: Person;
  FirstPlural: Person;
  SecondPluralInformal: Person;
  SecondPluralFormal: Person;
  ThirdPluralAndSecondPluralFormal: Person;
}

export const persons: Persons = {
  FirstSingular: {
    Description: "first person singular",
    Pronouns: "yo"
  },
  SecondSingularInformal: {
    Description: "informal second person singular",
    Pronouns: "tú"
  },
  SecondSingularFormal: {
    Description: "formal second person singular",
    Pronouns: "usted"
  },
  ThirdSingularAndSecondSingularFormal: {
    Description: "third person singular / formal second person singular",
    Pronouns: "él / ella / usted"
  },
  FirstPlural: {
    Description: "first person plural",
    Pronouns: "nosotros / nosotras"
  },
  SecondPluralInformal: {
    Description: "informal second person plural",
    Pronouns: "vosotros / vosotras"
  },
  SecondPluralFormal: {
    Description: "formal second person plural",
    Pronouns: "ustedes"
  },
  ThirdPluralAndSecondPluralFormal: {
    Description: "third person plural / formal second person plural",
    Pronouns: "éllos / ellas / ustedes"
  }
};
