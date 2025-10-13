import { useEffect, useId, useRef, useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, isPersonEnabled, isTenseEnabled } from "../data/settings";
import type { Conjugation, Mood, Tense } from "../data/verbs.types";

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
    return candidate.trim().toLowerCase() === target.conjugation.value.trim().toLowerCase();
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
    <>
      <header>
        <Menu />
        <h1>Conjuguemos</h1>
      </header>
      <main>
        <div className={styles.targetDetails}>
          <span className={styles.label}>verb</span><span className={styles.value}>{target.verb.infinitive}</span>
          <span className={styles.label}>tense</span><span className={styles.value}>{target.mood.description} {target.tense.description}</span>
        </div>
        
        <div className={styles.verbInputRow}>
          <label htmlFor={inputId}>{target.pronoun}</label>
          <div>
            <input type="text" id={inputId} value={answer}
                   autoCapitalize="off" autoComplete="off"
                   onChange={e => { onChangeAnswer(e.target.value); }} />
            <div className={styles.accentChars}>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "á"); } }>á</button>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "é"); } }>é</button>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "í"); } }>í</button>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "ñ"); } }>ñ</button>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "ó"); } }>ó</button>
              <button type="button" onClick={ () => { onChangeAnswer(answer + "ú"); } }>ú</button>
            </div>
          </div>
        </div>

        <div className={styles.showAnswerWrapper}>
          { !showAnswer && <button className={styles.showAnswerButton} type="button" onClick={() => { startShowAnswer(); }}>Show answer</button> }
          { showAnswer && <span className={styles.answer}>{target.conjugation.value}</span> }
        </div>
      </main>
    </>
  );
};

function generateTarget() {
  const verb = getRandomVerb();
  const settings = getSettings();
  
  const validOptions = verb.flatConjugations()
    .filter(({ mood, tense }) => isTenseEnabled(settings.tenses, mood, tense))
    .reduce<{ mood: Mood, tense: Tense, conjugation: Conjugation }[]>((acc, curr) => {
      curr.conjugation.persons = curr.conjugation.persons.filter(person => isPersonEnabled(settings.persons, person));
      return curr.conjugation.persons.length ? [ ...acc, curr ] : acc;
    }, []);
  
  const { mood, tense, conjugation } = chooseRandomElement(validOptions);
  const person = chooseRandomElement(conjugation.persons);
  const pronoun = chooseRandomElement(person.pronouns);
  return { verb, mood, tense, conjugation, person, pronoun };
}
