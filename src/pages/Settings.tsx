import { useState } from "react";
import Menu from "../components/Menu";
import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./Settings.module.css";
import { getSettings, saveSettings, type Settings } from "../data/settings";

export default function SettingsComponent() {
  const title = "Settings";
  usePageTitle(title);
  
  const [settings, setSettings] = useState(getSettings());

  function updateSettings(setting: Partial<Settings>) {
    const newSettings = { ...settings, ...setting };
    setSettings(newSettings);
    saveSettings(newSettings);
  }

  return (
    <div>
      <header>
        <Menu />
        <h1>{title}</h1>
      </header>
      <main>
          <h2>Tenses</h2>
          <p>Select the verb forms to include in the game.</p>
          <ul className={styles.settingsList}>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="indicativePresent"
                     checked={settings.indicativePresent}
                     onChange={ (e) => { updateSettings({ indicativePresent: e.target.checked }); } } />
              <label htmlFor="indicativePresent">Indicative present</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="indicativePreterite"
                     checked={settings.indicativePreterite}
                     onChange={ (e) => { updateSettings({ indicativePreterite: e.target.checked }); } } />
              <label htmlFor="indicativePreterite">Indicative preterite</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="indicativeImperfect"
                     checked={settings.indicativeImperfect}
                     onChange={ (e) => { updateSettings({ indicativeImperfect: e.target.checked }); } } />
              <label htmlFor="indicativeImperfect">Indicative imperfect</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="indicativeFuture"
                     checked={settings.indicativeFuture}
                     onChange={ (e) => { updateSettings({ indicativeFuture: e.target.checked }); } } />
              <label htmlFor="indicativeFuture">Indicative future</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="indicativeConditional"
                     checked={settings.indicativeConditional}
                     onChange={ (e) => { updateSettings({ indicativeConditional: e.target.checked }); } }/>
              <label htmlFor="indicativeConditional">Indicative conditional</label>
            </li>
          </ul>

          <h2>Other</h2>
          <ul className={styles.settingsList}>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="vosotros"
                     checked={settings.includeVosotros}
                     onChange={ (e) => { updateSettings({ includeVosotros: e.target.checked }); } } />
              <label htmlFor="vosotros">Include second person plural (vosotros / vosotras)</label>
            </li>
          </ul>
      </main>
    </div>
  );
};