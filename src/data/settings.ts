export interface Settings {
  indicativePresent: boolean;
  indicativePreterite: boolean;
  indicativeImperfect: boolean;
  indicativeFuture: boolean;
  indicativeConditional: boolean;

  includeVosotros: boolean;
};

export function getSettings(): Settings {
  const result: Settings = {
    indicativePresent: true,
    indicativePreterite: true,
    indicativeImperfect: true,
    indicativeFuture: true,
    indicativeConditional: true,

    includeVosotros: true,
  };

  const storedJson = localStorage.getItem("settings");
  if (!storedJson) {
    return result; // Return default settings if nothing is stored
  }
  
  const storedObj: unknown = JSON.parse(storedJson);
  if (typeof storedObj === "object" && storedObj !== null) {
    if ("indicativePresent" in storedObj && typeof storedObj.indicativePresent === "boolean") {
      result.indicativePresent = storedObj.indicativePresent;
    }
    if ("indicativePreterite" in storedObj && typeof storedObj.indicativePreterite === "boolean") {
      result.indicativePreterite = storedObj.indicativePreterite;
    }
    if ("indicativeImperfect" in storedObj && typeof storedObj.indicativeImperfect === "boolean") {
      result.indicativeImperfect = storedObj.indicativeImperfect;
    }
    if ("indicativeFuture" in storedObj && typeof storedObj.indicativeFuture === "boolean") {
      result.indicativeFuture = storedObj.indicativeFuture;
    }
    if ("indicativeConditional" in storedObj && typeof storedObj.indicativeConditional === "boolean") {
      result.indicativeConditional = storedObj.indicativeConditional;
    }

    if ("includeVosotros" in storedObj && typeof storedObj.includeVosotros === "boolean") {
      result.includeVosotros = storedObj.includeVosotros;
    }
  }

  return result;
}

export function saveSettings(settings: Settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}