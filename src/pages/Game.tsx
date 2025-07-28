import { useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import { chooseRandomEntry } from "../utils/chooseRandom";

export default function Game() {
  usePageTitle("Play");
  const [answer, setAnswer] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [target, setTarget] = useState(generateTarget());

  function onChangeAnswer(newAnswer: string) {
    setAnswer(newAnswer);
    if (isCorrectAnswer(newAnswer)) {
      setTarget(generateTarget());
      setAnswer("");
      setShowHint(false);
    }
  }

  function isCorrectAnswer(candidate: string): boolean {
    return candidate.trim().toLowerCase() === target.conjugation.trim().toLowerCase();
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
          { !showHint && <button type="button" onClick={() => { setShowHint(true); }}>Reveal</button> }
          { showHint && <span>{target.conjugation}</span> }
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
