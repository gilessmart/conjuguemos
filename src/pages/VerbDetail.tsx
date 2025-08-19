import { useParams } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbDetail.module.css";
import type { ConjugationMood, Person } from "../data/conjugation";

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
        <h1 className="capitalize">{title}</h1>
      </header>
      <main>
        <h2>Conjugations</h2>
        {conjugations.map(m => <MoodSection key={m.Name} mood={m} />)}
      </main>
    </div>
  );
};

function MoodSection({ mood }: { mood: ConjugationMood }) {
  const uniquePersons = mood.Tenses
    .flatMap(t => t.Conjugations)
    .map(c => c.Person)
    .reduce((acc: Person[], cur) => acc.includes(cur) ? acc : [...acc, cur], []);
  
  return <section key={mood.Name}>
    <h3 className="capitalize">{mood.Name}</h3>

    <table className={styles.verbTable}>
      <thead>
        <tr>
          <th>Pronoun</th>
          {mood.Tenses.map(tense => <th key={tense.Name} className="capitalize">{tense.Name}</th>)}
        </tr>
      </thead>
      <tbody>
        {uniquePersons.map(person => {
          return <tr key={person.Description}>
            <td>{person.Pronouns}</td>
            {mood.Tenses.map(tense => <td key={tense.Name}>
              {tense.Conjugations.find(c => c.Person === person)?.Value}
            </td>)}
          </tr>}
        )}
      </tbody>
    </table>
  </section>
}
