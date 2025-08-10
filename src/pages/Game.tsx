import { useEffect, useId, useRef, useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, type Settings } from "../data/settings";
import type { Mood, Tense } from "../data/conjugation";

export default function Game() {
  usePageTitle("");
  const inputId = useId();
  const [answer, setAnswer] = useState("");
  const [target, setTarget] = useState(generateTarget());
  const [showAnswer, setShowAnswer] = useState(false);
  const answerTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (answerTimeout.current) {
        clearTimeout(answerTimeout.current);
      }
    };
  }, []);

  function onChangeAnswer(newAnswer: string) {
    setAnswer(newAnswer);    
    stopShowAnswer();
    if (isCorrectAnswer(newAnswer)) {
      nextVerb();
    }
  }

  function isCorrectAnswer(candidate: string): boolean {
    return candidate.trim().toLowerCase() === target.conjugation.trim().toLowerCase();
  }

  function nextVerb() {
    setTarget(generateTarget());
    setAnswer("");
  }

  function startShowAnswer() {
    setShowAnswer(true);
    answerTimeout.current = setTimeout(() => {
      stopShowAnswer();
    }, 2500);
  }

  function stopShowAnswer() {
    setShowAnswer(false);
    if (answerTimeout.current) {
      clearTimeout(answerTimeout.current);
      answerTimeout.current = null;
    }
  }

  return (
    <div>
      <header>
        <Menu />
        <h1>Conjuguemos</h1>
      </header>
      <main>
        <p>Conjugate <strong>{target.infinitive}</strong> in the <strong>{target.mood} {target.tense}</strong> tense:</p>
        <div className={styles.verbInputRow}>
          <label htmlFor={inputId}>{target.pronoun}</label>
          <input type="text" id={inputId} value={answer}
                 onChange={e => { onChangeAnswer(e.target.value); }} />
          { !showAnswer && <button className={styles.showAnswerButton} type="button" 
                                   onClick={() => { startShowAnswer(); }}>Show answer</button> }
          { showAnswer && <span className={styles.answer}>{target.conjugation}</span> }
        </div>
      </main>
    </div>
  );
};

function generateTarget() {
  const verb = getRandomVerb();
  const settings = getSettings();
  
  const moods = getActiveMoods(verb.Conjugations);
  const [ moodLabel, mood ] = chooseRandomElement(moods);
  
  const tenses = getActiveTenses(mood, settings);
  const [ tenseLabel, tense ] = chooseRandomElement(tenses);

  const conjugations = getActiveConjugations(moodLabel, tense, settings);
  const [ conjugationLabel, conjugation ] = chooseRandomElement(conjugations)
  
  const target = {
    infinitive: verb.Infinitive,
    mood: moodLabel,
    tense: tenseLabel,
    pronoun: conjugationLabel,
    conjugation: conjugation
  };
  
  return target;
}

function getActiveMoods(moods: Mood[]) : [string, Mood][] {
  return moods.map(m => [ m.Name, m ]);
}

function getActiveTenses(mood: Mood, settings: Settings) : [string, Tense][] {
  const tenses: [string, Tense][] = [];
  
  if (mood.Name === "indicative")
  {
    const presentTense = mood.Tenses.find(t => t.Name === "present");
    if (presentTense && settings.indicativePresent) tenses.push(["present", presentTense]);

    const preteriteTense = mood.Tenses.find(t => t.Name === "preterite");
    if (preteriteTense && settings.indicativePreterite) tenses.push(["preterite", preteriteTense]);
    
    const imperfectTense = mood.Tenses.find(t => t.Name === "imperfect");
    if (imperfectTense && settings.indicativeImperfect) tenses.push(["imperfect", imperfectTense]);

    const futureTense = mood.Tenses.find(t => t.Name === "future");
    if (futureTense && settings.indicativeFuture) tenses.push(["future", futureTense]);

    const conditionalTense = mood.Tenses.find(t => t.Name === "conditional");
    if (conditionalTense && settings.indicativeConditional) tenses.push(["conditional", conditionalTense]);
  }
  else {
    const otherTenses = mood.Tenses.map(t => [t.Name, t] as [string, Tense]);
    tenses.push(...otherTenses);
  }

  return tenses;
}

function getActiveConjugations(moodName: string, tense: Tense, settings: Settings) : [string, string][] {
  const conjugations: [string, string][] = [];

  if (moodName === "indicative") {
    const firstPersonSingular = tense.Conjugations.find(c => c.Person === "first person singular");
    if (firstPersonSingular && settings.yo) conjugations.push([ "yo", firstPersonSingular.Text ]);

    const secondPersonSingular = tense.Conjugations.find(c => c.Person === "second person singular");
    if (secondPersonSingular && settings.tú) conjugations.push([ "tú", secondPersonSingular.Text ]);

    const thirdPersonSingular = tense.Conjugations.find(c => c.Person === "third person singular");
    if (thirdPersonSingular && settings.él) conjugations.push([ "él / ella / usted", thirdPersonSingular.Text ]);

    const firstPersonPlural = tense.Conjugations.find(c => c.Person === "first person plural");
    if (firstPersonPlural && settings.nosotros) conjugations.push([ "nosotros / nosotras", firstPersonPlural.Text ]);

    const secondPersonPlural = tense.Conjugations.find(c => c.Person === "second person plural");
    if (secondPersonPlural && settings.vosotros) conjugations.push([ "vosotros / vosotras", secondPersonPlural.Text ]);

    const thirdPersonPlural = tense.Conjugations.find(c => c.Person === "third person plural");
    if (thirdPersonPlural && settings.ellos) conjugations.push([ "ellos / ellas / ustedes", thirdPersonPlural.Text ]);
  }
  else {
    const otherConjugations = tense.Conjugations.map(c => [ c.Pronouns.join(" / "), c.Text ] as [ string, string ]);
    conjugations.push(...otherConjugations);
  }

  return conjugations;
}