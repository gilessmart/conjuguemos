import { settingsSchema, type Settings } from "./settings.types";

export function parseSettings(json: string): Settings | undefined {
  let storedObj: unknown;
  try { storedObj = JSON.parse(json); }
  catch { return undefined; }

  const result = settingsSchema.safeParse(storedObj);
  if (!result.success)
    return undefined;

  return result.data;
};
