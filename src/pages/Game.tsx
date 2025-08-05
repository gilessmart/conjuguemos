import { useEffect, useId, useRef, useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb, type IndicativeMoodConjugations, type TenseConjugations, type VerbConjugations } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, type Settings } from "../data/settings";

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

  const conjugations = getActiveConjugations(tense, settings);
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

function getActiveMoods(verbConjugations: VerbConjugations) : [string, IndicativeMoodConjugations][] {
  const moods: [string, IndicativeMoodConjugations][] = [];
  moods.push([ "indicative", verbConjugations.Indicative ]);
  return moods;
}

function getActiveTenses(moodConjugations: IndicativeMoodConjugations, settings: Settings) : [string, TenseConjugations][] {
  const tenses: [string, TenseConjugations][] = [];
  
  if (settings.indicativePresent) tenses.push([ "present", moodConjugations.Present ]);
  if (settings.indicativePreterite) tenses.push([ "preterite", moodConjugations.Preterite ]);
  if (settings.indicativeImperfect) tenses.push([ "imperfect", moodConjugations.Imperfect ]);
  if (settings.indicativeFuture) tenses.push([ "future", moodConjugations.Future ]);
  if (settings.indicativeConditional) tenses.push([ "conditional", moodConjugations.Conditional ]);

  return tenses;
}

function getActiveConjugations(tenseConjugations: TenseConjugations, settings: Settings) : [string, string][] {
  const conjugations: [string, string][] = [];
  
  if (settings.yo) conjugations.push([ "yo", tenseConjugations.FirstPersonSingular ]);
  if (settings.tú) conjugations.push([ "tú", tenseConjugations.SecondPersonSingular ]);
  if (settings.él) conjugations.push([ "él / ella / usted", tenseConjugations.ThirdPersonSingular ]);
  if (settings.nosotros) conjugations.push([ "nosotros / nosotras", tenseConjugations.FirstPersonPlural ]);
  if (settings.vosotros) conjugations.push([ "vosotros / vosotras", tenseConjugations.SecondPersonPlural ]);
  if (settings.ellos) conjugations.push([ "ellos / ellas / ustedes", tenseConjugations.ThirdPersonPlural ]);

  return conjugations;
}