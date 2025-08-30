import type { Mood } from "./verbs.types";

interface Moods {
  indicative: Mood;
  imperative: Mood;
}

export const moods: Moods = {
  indicative: { description: "indicative" },
  imperative: { description: "imperative" }
};
