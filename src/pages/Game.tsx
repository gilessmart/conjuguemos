import { useEffect, useId, useRef, useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, isConjugationEnabled } from "../data/settings";

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
    <div>
      <header>
        <Menu />
        <h1>Conjuguemos</h1>
      </header>
      <main>
        <p>Conjugate <strong>{target.infinitive}</strong> in the <strong>{target.conjugation.mood} {target.conjugation.tense}</strong> tense:</p>
        <div className={styles.verbInputRow}>
          <label htmlFor={inputId}>{target.conjugation.person.pronouns}</label>
          <input type="text" id={inputId} value={answer}
                 onChange={e => { onChangeAnswer(e.target.value); }} />
          { !showAnswer && <button className={styles.showAnswerButton} type="button" 
                                   onClick={() => { startShowAnswer(); }}>Show answer</button> }
          { showAnswer && <span className={styles.answer}>{target.conjugation.value}</span> }
        </div>
      </main>
    </div>
  );
};

function generateTarget() {
  const verb = getRandomVerb();
  const settings = getSettings();
  const choices = verb.allConjugations()
    .filter(conjugation => isConjugationEnabled(settings, conjugation));
  const conjugation = chooseRandomElement(choices);
  
  return {
    infinitive: verb.infinitive,
    conjugation: conjugation
  };
}
