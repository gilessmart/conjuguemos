import { useId, useState } from "react";
import Menu from "../components/Menu";
import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./Settings.module.css";
import { getSettings, saveSettings, validateSettings } from "../data/settings";
import type { Settings, ValidationResult } from "../data/settings.types";

export default function SettingsComponent() {
  const title = "Settings";
  usePageTitle(title);
  
  const [settings, setSettings] = useState(getSettings());
  const [validationResult, setValidationResult] = useState<ValidationResult>({ isValid: true });

  function updateSettings(mutateSettings: (s: Settings) => void) {
    const newSettings = structuredClone(settings);
    mutateSettings(newSettings);
    setSettings(newSettings);
    const validationResult = validateSettings(newSettings);
    setValidationResult(validationResult);
    if (validationResult.isValid)
      saveSettings(newSettings);
  }

  return (
    <div>
      <header>
        <Menu />
        <h1>{title}</h1>
      </header>
      <main>
          <p>Select the verb forms to include in the game.</p>

          <ValidationMessage validationResult={validationResult} />

          <h2>Tenses</h2>

          <ul className={styles.settingsList}>
            <li>
              <CheckBoxOption label="Indicative present"
                              value={settings.tenses.indicative.present}
                              onChange={ v => { updateSettings(s => { s.tenses.indicative.present = v; }); } } />
            </li>
            <li>
              <CheckBoxOption label="Indicative preterite"
                              value={settings.tenses.indicative.preterite}
                              onChange={ v => { updateSettings(s => { s.tenses.indicative.preterite = v; }); } } />
            </li>
            <li>
              <CheckBoxOption label="Indicative imperfect"
                              value={settings.tenses.indicative.imperfect}
                              onChange={ v => { updateSettings(s => { s.tenses.indicative.imperfect = v; }); } } />
            </li>
            <li>
              <CheckBoxOption label="Indicative future"
                              value={settings.tenses.indicative.future}
                              onChange={ v => { updateSettings(s => { s.tenses.indicative.future = v; }); } } />
            </li>
            <li>
              <CheckBoxOption label="Indicative conditional"
                              value={settings.tenses.indicative.conditional}
                              onChange={ v => { updateSettings(s => { s.tenses.indicative.conditional = v; }); } } />
            </li>
          </ul>

          <ul className={styles.settingsList}>
            <li>
              <CheckBoxOption label="Imperative affirmative"
                              value={settings.tenses.imperative.affirmative}
                              onChange={ v => { updateSettings(s => { s.tenses.imperative.affirmative = v; }); } } />
            </li>
          </ul>

          <h2>Other</h2>

          <ul className={styles.settingsList}>
            <li>
              <CheckBoxOption label="Second person plural (vosotros / vosotras)"
                              value={settings.persons.secondPluralInformal}
                              onChange={ v => { updateSettings(s => { s.persons.secondPluralInformal = v; }); } } />
            </li>
          </ul>
      </main>
    </div>
  );
};

interface ValidationMessageParams {
  validationResult: ValidationResult;
}

function ValidationMessage({ validationResult }: ValidationMessageParams) {
  return validationResult.isValid
    ? null
    : <p className={styles.validationError}>{validationResult.message}</p>
}

interface CheckBoxOptionParams {
  label: string;
  value: boolean
  onChange: (value: boolean) => void
}

function CheckBoxOption({ label, value, onChange }: CheckBoxOptionParams) {
  const inputId = useId();
  return <>
    <input type="checkbox" id={inputId}
           checked={value}
           onChange={ e => { onChange(e.target.checked); } } />
    <label htmlFor={inputId}>{label}</label>
  </>
}
