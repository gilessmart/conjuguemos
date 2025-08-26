import { getVerbDefinition, getRandomVerbDefinition } from "./verbDefinitions";
import { Verb } from "./verbs.types";

export function getVerbDetails(infinitive: string): Verb | undefined {
  const definition = getVerbDefinition(infinitive);
  return definition ? new Verb(definition) : undefined;
};

export function getRandomVerb(): Verb {
  const definition = getRandomVerbDefinition();
  return new Verb(definition);
};
