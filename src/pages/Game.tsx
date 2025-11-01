import { useId, useState, type ReactNode } from "react";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomElement } from "../utils/chooseRandom";
import styles from "./Game.module.css";
import { getSettings, isPersonEnabled, isTenseEnabled } from "../data/settings";
import type { Conjugation, Mood, Tense } from "../data/verbs.types";
import Header from "../components/Header";

type GameState =  "EnteringAnswer" | "AnswerCorrect" | "AnswerIncorrect";

export default function Game() {
  usePageTitle("");
  const inputId = useId();
  const [answer, setAnswer] = useState("");
  const [target, setTarget] = useState(generateTarget());
  const [gamesState, setGameState] = useState<GameState>("EnteringAnswer");

  function answerUpdated(newAnswer: string) {
    setAnswer(newAnswer);
  }

  function submitClicked() {
    switch (gamesState) {
      case "EnteringAnswer":
        if (answerEmpty()) return;
        if (isAnswerCorrect()) setGameState("AnswerCorrect");
        else setGameState("AnswerIncorrect");
        break;

      case "AnswerCorrect":
      case "AnswerIncorrect":
        setTarget(generateTarget());
        setAnswer("");
        setGameState("EnteringAnswer");
        break;
    }
  }

  function answerEmpty() {
    return answer.trim().length === 0;
  }

  function isAnswerCorrect(): boolean {
    return answer.trim().toLowerCase() === target.conjugation.value;
  }

  function renderInstructions(): ReactNode {
    switch (gamesState) {
      case "EnteringAnswer":
        return <div className={styles.instructions}>
          <div>Conjugate the verb!</div>
        </div>;
      case "AnswerCorrect":
        return <div className={`${styles.instructions} ${styles.correct}`}>
          <div>Correct!</div>
        </div>;
      case "AnswerIncorrect":
        return <div className={`${styles.instructions} ${styles.incorrect}`}>
          <div>
            Incorrect<br />
            Expected <span className={styles.expected}>{target.conjugation.value}</span>
          </div>
        </div>;
    }
  }

  function getSubmitButtonLabel(): ReactNode {
    switch (gamesState) {
      case "EnteringAnswer":
        return "Check";
      case "AnswerCorrect":
      case "AnswerIncorrect":
        return "Next";
    }
  }

  return (
    <>
      <Header title="Conjuguemos" />
      <main>
        {renderInstructions()}

        <div className={styles.targetDetails}>
          <span className={styles.label}>verb</span><span className={styles.value}>{target.verb.infinitive}</span>
          <span className={styles.label}>tense</span><span className={styles.value}>{target.mood.description} {target.tense.description}</span>
        </div>

        <form>          
          <div className={styles.verbInputRow}>
            <label htmlFor={inputId}>{target.pronoun}</label>
            <div>
              <input type="text" id={inputId} value={answer}
                     autoCapitalize="off" autoComplete="off"
                     disabled={gamesState !== "EnteringAnswer"}
                     onChange={e => { answerUpdated(e.target.value); }} />
              <div className={styles.accentChars}>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "á"); } }>á</button>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "é"); } }>é</button>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "í"); } }>í</button>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "ñ"); } }>ñ</button>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "ó"); } }>ó</button>
                <button type="button" disabled={gamesState !== "EnteringAnswer"} onClick={ () => { answerUpdated(answer + "ú"); } }>ú</button>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.submitButton} 
                  disabled={answerEmpty()}
                  onClick={e => { e.preventDefault(); submitClicked(); }}>
            {getSubmitButtonLabel()}
          </button>
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
