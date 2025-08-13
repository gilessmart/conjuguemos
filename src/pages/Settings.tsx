import { useId, useState } from "react";
import Menu from "../components/Menu";
import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./Settings.module.css";
import { getSettings, saveSettings, type MoodInclusionSetting, type Settings, type TenseInclusionSetting } from "../data/settings";

export default function SettingsComponent() {
  const title = "Settings";
  usePageTitle(title);
  
  const [settings, setSettings] = useState(getSettings());

  const updateSettings = (setting: Partial<Settings>) => {
    const newSettings = { ...settings, ...setting };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const updateMoodInclusion = (moodName: string, included: boolean) => {
    const newMoodInclusionSettings = settings.moodInclusion.map(x => 
      x.moodName === moodName
        ? { ...x, included } 
        : x);
    const newSettings = { ...settings, moodInclusion: newMoodInclusionSettings };
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  function updateTenseInclusion(moodName: string, tenseName: string, included: boolean) {
    const newMoodInclusionSettings = settings.moodInclusion.map(m => 
      m.moodName === moodName
        ? { 
            ...m,
            tenseInclusion: m.tenseInclusion.map(t =>
              t.tenseName === tenseName
                ? { ...t, included }
                : t
            )
          } 
        : m);
    const newSettings = { ...settings, moodInclusion: newMoodInclusionSettings };
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
          <p>Select the verb forms to include in the game.</p>

          <h2>Tenses</h2>

          {settings.moodInclusion.map(moodSetting => 
            <MoodSettingsSection key={moodSetting.moodName}
                                 moodSetting={moodSetting}
                                 updateMoodInclusion={updateMoodInclusion}
                                 updateTenseInclusion={updateTenseInclusion} />)}

          <h2>Other</h2>
          <ul className={styles.settingsList}>
            <li className={styles.settingsListItem}>
              <input type="checkbox" id="vosotros"
                     checked={settings.includeVosotros}
                     onChange={ e => { updateSettings({ includeVosotros: e.target.checked }); } } />
              <label htmlFor="vosotros">Second person plural (vosotros / vosotras)</label>
            </li>
          </ul>
      </main>
    </div>
  );
};

interface MoodSettingSectionParams {
  moodSetting: MoodInclusionSetting;
  updateMoodInclusion: (moodName: string, checked: boolean) => void;
  updateTenseInclusion: (tenseName: string, moodName: string, checked: boolean) => void;
}

function MoodSettingsSection({ moodSetting: setting, updateMoodInclusion, updateTenseInclusion }: MoodSettingSectionParams) {
  const inputId = useId();
  return <section>
    <ul className={styles.settingsList}>
      <li className={styles.settingsListItem}>
        <input type="checkbox" id={inputId}
               checked={setting.included}
               onChange={ e => { updateMoodInclusion(setting.moodName, e.target.checked); } } />
        <label htmlFor={inputId} className="capitalize">{setting.moodName}</label>
      </li>
      <li>
        <ul className={styles.settingsList}>
          {setting.tenseInclusion.map(tenseSetting => 
            <TenseSettingListItem key={tenseSetting.tenseName}
                                  moodSetting={setting}
                                  tenseSetting={tenseSetting}
                                  updateTenseInclusion={updateTenseInclusion} />)}
        </ul>
      </li>
    </ul>
  </section>
}

interface TenseSettingListItemParams {
  moodSetting: MoodInclusionSetting;
  tenseSetting: TenseInclusionSetting;
  updateTenseInclusion: (tenseName: string, moodName: string, checked: boolean) => void;
}

function TenseSettingListItem({ moodSetting, tenseSetting, updateTenseInclusion} : TenseSettingListItemParams) {
  const inputId = useId();
  return <li className={styles.settingsListItem}>
    <input type="checkbox" id={inputId}
           checked={tenseSetting.included}
           disabled={!moodSetting.included}
           onChange={ e => { updateTenseInclusion(moodSetting.moodName, tenseSetting.tenseName, e.target.checked); } } />
    <label htmlFor={inputId} className="capitalize">{tenseSetting.tenseName}</label>
  </li> 
}
