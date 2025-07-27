import { useState } from "react";
import Menu from "../components/Menu";
import { getRandomVerb } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import chooseRandom from "../utils/chooseRandom";

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
  const mood = chooseRandom(moods);
  
  const tenses = {
    present: mood.value.Present,
    preterite: mood.value.Preterite,
    imperfect: mood.value.Imperfect,
    future: mood.value.Future,
    conditional: mood.value.Conditional
  };
  const tense = chooseRandom(tenses);

  const conjugations = {
    "yo": tense.value.FirstPersonSingular,
    "tú": tense.value.SecondPersonSingular,
    "él/ella/usted": tense.value.ThirdPersonSingular,
    "nosotros/nosotras": tense.value.FirstPersonPlural,
    "vosotros/vosotras": tense.value.SecondPersonPlural,
    "ellos/ellas/ustedes": tense.value.ThirdPersonPlural
  };
  const conjugation = chooseRandom(conjugations)
  
  const target = {
    infinitive: verb.Infinitive,
    mood: mood.key,
    tense: tense.key,
    pronoun: conjugation.key,
    conjugation: conjugation.value
  };
  
  return target;
}
