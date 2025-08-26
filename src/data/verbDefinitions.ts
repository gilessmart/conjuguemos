import { chooseRandomElement } from "../utils/chooseRandom";
import type { VerbDefinition } from "./verbDefinitions.types";
import { definitions } from "./verbDefinitions.data";

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