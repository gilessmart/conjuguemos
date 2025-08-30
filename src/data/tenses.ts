import type { Tense } from "./verbs.types";

interface Tenses {
  present: Tense;
  preterite: Tense;
  imperfect: Tense;
  future: Tense;
  conditional: Tense;
  affirmative: Tense;
}

export const tenses: Tenses = {
  present: { description: "present" },
  preterite: { description: "preterite" },
  imperfect: { description: "imperfect" },
  future: { description: "future" },
  conditional: { description: "conditional" },
  affirmative: { description: "affirmative" }
};