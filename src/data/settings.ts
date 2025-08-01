export interface Settings {
  indicativePresent: boolean;
  indicativePreterite: boolean;
  indicativeImperfect: boolean;
  indicativeFuture: boolean;
  indicativeConditional: boolean;

  yo: boolean;
  tú: boolean;
  él: boolean;
  nosotros: boolean;
  vosotros: boolean;
  ellos: boolean;
};

export function getSettings(): Settings {
  const result: Settings = {
    indicativePresent: true,
    indicativePreterite: true,
    indicativeImperfect: true,
    indicativeFuture: true,
    indicativeConditional: true,

    yo: true,
    tú: true,
    él: true,
    nosotros: true,
    vosotros: true,
    ellos: true
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

    if ("yo" in storedObj && typeof storedObj.yo === "boolean") {
      result.yo = storedObj.yo;
    }
    if ("tú" in storedObj && typeof storedObj.tú === "boolean") {
      result.tú = storedObj.tú;
    }
    if ("él" in storedObj && typeof storedObj.él === "boolean") {
      result.él = storedObj.él;
    }
    if ("nosotros" in storedObj && typeof storedObj.nosotros === "boolean") {
      result.nosotros = storedObj.nosotros;
    }
    if ("vosotros" in storedObj && typeof storedObj.vosotros === "boolean") {
      result.vosotros = storedObj.vosotros;
    }
    if ("ellos" in storedObj && typeof storedObj.ellos === "boolean") {
      result.ellos = storedObj.ellos;
    }
  }

  return result;
}

export function saveSettings(settings: Settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}