import { useParams } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbDetail.module.css";
import type { Conjugation, Mood } from "../data/conjugation";

export default function VerbDetail() {
  const params = useParams<{ verb: string }>();
  const verbParam = params.verb!;
  const verbDetails = getVerbDetails(verbParam);
  const title = verbDetails?.Infinitive ?? "Verb Not Found";
  usePageTitle(title);
  
  if (!verbDetails) {    
    return (
      <div>
        <header>
          <Menu />
          <h1>{title}</h1>
        </header>
        <main>
          <p>Verb <em>{verbParam}</em> was not found.</p>
        </main>
      </div>
    );
  }
  
  const conjugations = verbDetails.Conjugations;

  return (
    <div>
      <header>
        <Menu />
        <h1>{title}</h1>
      </header>
      <main>
        <h2>Conjugations</h2>
        {conjugations.map(renderMood)}
      </main>
    </div>
  );
};

function renderMood(mood: Mood) {
  const uniquePronounGroups = mood.Tenses
    .flatMap(t => t.Conjugations)
    .map(c => c.Pronouns)
    .reduce((acc: string[][], cur) => setIncludesGroup(acc, cur) ? acc : [...acc, cur], []);
  
  return <section key={mood.Name}>
    <h3>{mood.Name}</h3>

    <table className={styles.verbTable}>
      <thead>
        <tr>
          <th>Pronoun</th>
          {mood.Tenses.map(tense => <th key={tense.Name}>{tense.Name}</th>)}
        </tr>
      </thead>
      <tbody>
        {uniquePronounGroups.map(pronouns => {
          const label = pronouns.join(" / ");
          return <tr key={label}>
            <td>{label}</td>
            {mood.Tenses.map(tense => <td key={tense.Name}>
              {getConjugationByPronouns(tense.Conjugations, pronouns)}
            </td>)}
          </tr>}
        )}
      </tbody>
    </table>
  </section>
}

function getConjugationByPronouns(conjugations: Conjugation[], pronouns: string[]) {
  return conjugations.find(c => groupsMatch(c.Pronouns, pronouns))?.Value;
}

function setIncludesGroup(set: string[][], group: string[]) {
  return set.some(candidate => groupsMatch(candidate, group));
}

function groupsMatch(a: string[], b: string[]) {
  if (a.length !== b.length)
    return false;

  // TODO sort but don't sort in place?
  // or key by person, and make person a reference that holds the pronouns..?
  const orderedCandidate = a//.sort();
  const orderedGroup = b//.sort();
  for (let i = 0; i < a.length; i++)
    if (orderedCandidate[i] !== orderedGroup[i])
      return false;

  return true;
}
