import zod from "zod";
import type { Settings } from "./settings";

const StoredSettings = zod.object({
  moodInclusion: zod.array(zod.object({
    moodName: zod.string(),
    included: zod.boolean().default(true),
    tenseInclusion: zod.array(zod.object({
      tenseName: zod.string(),
      included: zod.boolean().default(true)
    })).default([])
  })).default([]),
  includeVosotros: zod.boolean().default(true)
});

export function hydrateSettings(settings: Settings, json: string): void {
  let storedSettingsObj: unknown;
  try { storedSettingsObj = JSON.parse(json); }
  catch { return; }

  const storedSettingsParseResult = StoredSettings.safeParse(storedSettingsObj);
  if (!storedSettingsParseResult.success)
    return;

  const storedSettings = storedSettingsParseResult.data;

  for (const moodInclusion of settings.moodInclusion) {
    const storedMoodInclusion = storedSettings.moodInclusion.find(mi => mi.moodName === moodInclusion.moodName);
    if (storedMoodInclusion === undefined)
      continue;
    moodInclusion.included = storedMoodInclusion.included;
    for (const tenseInclusion of moodInclusion.tenseInclusion) {
      const storedTenseInclusion = storedMoodInclusion.tenseInclusion.find(ti => ti.tenseName === tenseInclusion.tenseName);
      if (storedTenseInclusion === undefined)
        continue;
      tenseInclusion.included = storedTenseInclusion.included;
    }
  }
  settings.includeVosotros = storedSettings.includeVosotros;    
}
