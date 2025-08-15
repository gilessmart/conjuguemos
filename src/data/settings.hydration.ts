import type { Settings } from "./settings";

export function hydrateSettings(settings: Settings, json: string): void {
  let storedSettingsObj: unknown;
  try { storedSettingsObj = JSON.parse(json); }
  catch { return; }

  if (typeof storedSettingsObj !== "object" || storedSettingsObj === null || Array.isArray(storedSettingsObj))
    return;
  
  const storedMoodInclusionsArr = "moodInclusion" in storedSettingsObj && typeof storedSettingsObj.moodInclusion === "object" && Array.isArray(storedSettingsObj.moodInclusion) 
    ? storedSettingsObj.moodInclusion as unknown[]
    : undefined;

  if (storedMoodInclusionsArr !== undefined) {
    for (const storedMoodInclusionsItem of storedMoodInclusionsArr) {
      const storedMoodInclusionsItemObj = typeof storedMoodInclusionsItem === "object" && storedMoodInclusionsItem != null ? storedMoodInclusionsItem : undefined;
      if (storedMoodInclusionsItemObj === undefined)
        continue;
      
      if (!("moodName" in storedMoodInclusionsItemObj && typeof storedMoodInclusionsItemObj.moodName === "string"))
        continue;
      
      const resultMoodInclusionItem = settings.moodInclusion.find(x => x.moodName === storedMoodInclusionsItemObj.moodName);
      if (resultMoodInclusionItem === undefined)
        continue;

      if (!("included" in storedMoodInclusionsItemObj && typeof storedMoodInclusionsItemObj.included === "boolean"))
        continue;

      resultMoodInclusionItem.included = storedMoodInclusionsItemObj.included;
      
      if (!("tenseInclusion" in storedMoodInclusionsItemObj && typeof storedMoodInclusionsItemObj.tenseInclusion === "object"))
        continue;

      const tenseInclusionArr = Array.isArray(storedMoodInclusionsItemObj.tenseInclusion) ? storedMoodInclusionsItemObj.tenseInclusion as unknown[] : undefined;
      if (tenseInclusionArr === undefined)
        continue;

      for (const tenseInclusionItem of tenseInclusionArr) {
        const tenseInclusionItemObj = typeof tenseInclusionItem === "object" && tenseInclusionItem !== null ? tenseInclusionItem : undefined;
        if (tenseInclusionItemObj === undefined)
          continue;

        if (!("tenseName" in tenseInclusionItemObj && typeof tenseInclusionItemObj.tenseName === "string"))
          continue;
      
        const resultTenseInclusionItem = resultMoodInclusionItem.tenseInclusion.find(x => x.tenseName === tenseInclusionItemObj.tenseName);
        if (resultTenseInclusionItem === undefined)
          continue;

        if (!("included" in tenseInclusionItemObj && typeof tenseInclusionItemObj.included === "boolean"))
          continue;
      
        resultTenseInclusionItem.included = tenseInclusionItemObj.included;
      }
    }
  }

  if ("includeVosotros" in storedSettingsObj && typeof storedSettingsObj.includeVosotros === "boolean")
    settings.includeVosotros = storedSettingsObj.includeVosotros;

  return;
}
