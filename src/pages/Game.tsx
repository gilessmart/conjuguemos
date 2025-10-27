import { useEffect, useId, useRef, useState } from "react";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, isPersonEnabled, isTenseEnabled } from "../data/settings";
import type { Conjugation, Mood, Tense } from "../data/verbs.types";
import Header from "../components/Header";

export default function Game() {
  usePageTitle("");
  const inputId = useId();
  const [answer, setAnswer] = useState("");
  const [target, setTarget] = useState(generateTarget());
  const [showAnswer, setShowAnswer] = useState(false);
  const [submissionIncorrect, setSubmissionIncorrect] = useState(false);
  const answerTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (answerTimeout.current) {
        clearTimeout(answerTimeout.current);
      }
    };
  }, []);

  function updateAnswer(newAnswer: string) {
    setSubmissionIncorrect(false);
    setAnswer(newAnswer);
    endShowAnswer();
  }

  function submitAnswer() {
    if (answer.trim().length === 0)
      return;

    if (isAnswerCorrect()) {
      setTarget(generateTarget());
      setAnswer("");
    }
    else {
      setSubmissionIncorrect(true);
    }
  }

  function isAnswerCorrect(): boolean {
    return answer.trim().toLowerCase() === target.conjugation.value;
  }

  function startShowAnswer() {
    setShowAnswer(true);
    answerTimeout.current = setTimeout(() => {
      endShowAnswer();
    }, 2500);
  }

  function endShowAnswer() {
    setShowAnswer(false);
    if (answerTimeout.current) {
      clearTimeout(answerTimeout.current);
      answerTimeout.current = null;
    }
  }

  return (
    <>
      <Header title="Conjuguemos" />
      <main>
        <form>
          <div className={styles.targetDetails}>
            <span className={styles.label}>verb</span><span className={styles.value}>{target.verb.infinitive}</span>
            <span className={styles.label}>tense</span><span className={styles.value}>{target.mood.description} {target.tense.description}</span>
          </div>
          
          <div className={styles.verbInputRow}>
            <label htmlFor={inputId}>{target.pronoun}</label>
            <div>
              <input type="text" id={inputId} value={answer}
                     autoCapitalize="off" autoComplete="off"
                     onChange={e => { updateAnswer(e.target.value); }}
                     className={submissionIncorrect ? styles.submissionIncorrect : ''}/>
              <div className={styles.accentChars}>
                <button type="button" onClick={ () => { updateAnswer(answer + "á"); } }>á</button>
                <button type="button" onClick={ () => { updateAnswer(answer + "é"); } }>é</button>
                <button type="button" onClick={ () => { updateAnswer(answer + "í"); } }>í</button>
                <button type="button" onClick={ () => { updateAnswer(answer + "ñ"); } }>ñ</button>
                <button type="button" onClick={ () => { updateAnswer(answer + "ó"); } }>ó</button>
                <button type="button" onClick={ () => { updateAnswer(answer + "ú"); } }>ú</button>
              </div>
            </div>
          </div>

          <div className={styles.buttonRow}>
            <div className={styles.showAnswerWrapper}>
              { !showAnswer && <button className={styles.showAnswerButton} type="button" onClick={() => { startShowAnswer(); }}>Show answer</button> }
              { showAnswer && <span className={styles.answer}>{target.conjugation.value}</span> }
            </div>
            <button type="submit" className={styles.submitButton} onClick={e => { e.preventDefault(); submitAnswer(); }}>Check</button>
          </div>
        </form>
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
