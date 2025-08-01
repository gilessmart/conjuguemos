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
          <h2>Verb Forms</h2>
          <p>Select the verb forms to include in the game.</p>

          <h3>Tenses</h3>
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

          <h3>Persons</h3>
          <ul className={styles.settingsList}>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="yo"
                     checked={settings.yo}
                     onChange={ (e) => { updateSettings({ yo: e.target.checked }); } } />
              <label htmlFor="yo">First person singular (yo)</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="tú"
                     checked={settings.tú}
                     onChange={ (e) => { updateSettings({ tú: e.target.checked }); } } />
              <label htmlFor="tú">Second person singular (tú)</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="él"
                     checked={settings.él}
                     onChange={ (e) => { updateSettings({ él: e.target.checked }); } } />
              <label htmlFor="él">Third person singular (él / ella / usted)</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="nosotros"
                     checked={settings.nosotros}
                     onChange={ (e) => { updateSettings({ nosotros: e.target.checked }); } } />
              <label htmlFor="nosotros">First person plural (nosotros / nosotras)</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="vosotros"
                     checked={settings.vosotros}
                     onChange={ (e) => { updateSettings({ vosotros: e.target.checked }); } } />
              <label htmlFor="vosotros">Second person plural (vosotros / vosotras)</label>
            </li>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="ellos"
                     checked={settings.ellos}
                     onChange={ (e) => { updateSettings({ ellos: e.target.checked }); } } />
              <label htmlFor="ellos">Third person plural (ellos / ellas / ustedes)</label>
            </li>
          </ul>
      </main>
    </div>
  );
};