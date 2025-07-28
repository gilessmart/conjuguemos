import { useEffect, useRef, useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomEntry } from "../utils/chooseRandom";

export default function Game() {
  usePageTitle("Play");
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
        <div className="verb-input">
          <span className="pronoun">{target.pronoun}</span>
          <input type="text"
                 value={answer}
                 onChange={e => { onChangeAnswer(e.target.value); }} />
          { !showAnswer && <button type="button" onClick={() => { startShowAnswer(); }}>Show answer</button> }
          { showAnswer && <span>{target.conjugation}</span> }
        </div>
      </main>
    </div>
  );
};

function generateTarget() {
  const verb = getRandomVerb();
  
  const moods = {
    indicative: verb.Conjugations.Indicative
  };
  const [ moodLabel, mood ] = chooseRandomEntry(moods);
  
  const tenses = {
    present: mood.Present,
    preterite: mood.Preterite,
    imperfect: mood.Imperfect,
    future: mood.Future,
    conditional: mood.Conditional
  };
  const [ tenseLabel, tense ] = chooseRandomEntry(tenses);

  const conjugations = {
    "yo": tense.FirstPersonSingular,
    "tú": tense.SecondPersonSingular,
    "él / ella / usted": tense.ThirdPersonSingular,
    "nosotros / nosotras": tense.FirstPersonPlural,
    "vosotros / vosotras": tense.SecondPersonPlural,
    "ellos / ellas / ustedes": tense.ThirdPersonPlural
  };
  const [ conjugationLabel, conjugation ] = chooseRandomEntry(conjugations)
  
  const target = {
    infinitive: verb.Infinitive,
    mood: moodLabel,
    tense: tenseLabel,
    pronoun: conjugationLabel,
    conjugation: conjugation
  };
  
  return target;
}
