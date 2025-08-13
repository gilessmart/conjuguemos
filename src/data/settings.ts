export interface Settings {
  moodInclusion: MoodInclusionSetting[];
  includeVosotros: boolean;
}

export interface MoodInclusionSetting {
  moodName: string;
  included: boolean;
  tenseInclusion: TenseInclusionSetting[];
}

export interface TenseInclusionSetting {
  tenseName: string;
  included: boolean;
}

export function getSettings(): Settings {
  const result = getDefaultSettings();

  const storedJson = localStorage.getItem("settings");
  if (!storedJson)
    return result;
  
  const storedSettings: unknown = JSON.parse(storedJson);
  const storedSettingsObj = typeof storedSettings === "object" && storedSettings !== null ? storedSettings : undefined;
  if (storedSettingsObj === undefined)
    return result;

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
      
      const resultMoodInclusionItem = result.moodInclusion.find(x => x.moodName === storedMoodInclusionsItemObj.moodName);
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
    result.includeVosotros = storedSettingsObj.includeVosotros;

  return result;
}

function getDefaultSettings(): Settings {
  return {
    moodInclusion: [
      {
        moodName: "indicative",
        included: true,
        tenseInclusion: [
          {
            tenseName: "present",
            included: true
          },
          {
            tenseName: "preterite",
            included: true
          },
          {
            tenseName: "imperfect",
            included: true
          },
          {
            tenseName: "future",
            included: true
          },
          {
            tenseName: "conditional",
            included: true
          }
        ]
      },
      {
        moodName: "imperative",
        included: true,
        tenseInclusion: [
          {
            tenseName: "affirmative",
            included: true
          }
        ]
      }
    ],
    includeVosotros: true
  };
}

export function saveSettings(settings: Settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}
