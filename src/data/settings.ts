import { hydrateSettings } from "./settings.hydration";

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
  const settings = getDefaultSettings();

  const storedJson = localStorage.getItem("settings");
  if (!storedJson)
    return settings;
  
  hydrateSettings(settings, storedJson);

  return settings;
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
