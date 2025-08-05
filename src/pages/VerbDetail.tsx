import { useParams } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbDetail.module.css";

export default function VerbDetail() {
  const params = useParams<{ verb: string }>();
  const verbParam = params.verb!;
  const verbDetails = getVerbDetails(verbParam);
  const title = verbDetails?.TitleCaseInfinitive ?? "Verb Not Found";
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
        
        <h3>Indicative</h3>
        <table className={styles.verbTable}>
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>Present</th>
              <th>Preterite</th>
              <th>Imperfect</th>
              <th>Future</th>
              <th>Conditional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yo</td>
              <td>{conjugations.Indicative.Present.FirstPersonSingular}</td>
              <td>{conjugations.Indicative.Preterite.FirstPersonSingular}</td>
              <td>{conjugations.Indicative.Imperfect.FirstPersonSingular}</td>
              <td>{conjugations.Indicative.Future.FirstPersonSingular}</td>
              <td>{conjugations.Indicative.Conditional.FirstPersonSingular}</td>
            </tr>
            <tr>
              <td>tú</td>
              <td>{conjugations.Indicative.Present.SecondPersonSingular}</td>
              <td>{conjugations.Indicative.Preterite.SecondPersonSingular}</td>
              <td>{conjugations.Indicative.Imperfect.SecondPersonSingular}</td>
              <td>{conjugations.Indicative.Future.SecondPersonSingular}</td>
              <td>{conjugations.Indicative.Conditional.SecondPersonSingular}</td>
            </tr>
            <tr>
              <td>él / ella / usted</td>
              <td>{conjugations.Indicative.Present.ThirdPersonSingular}</td>
              <td>{conjugations.Indicative.Preterite.ThirdPersonSingular}</td>
              <td>{conjugations.Indicative.Imperfect.ThirdPersonSingular}</td>
              <td>{conjugations.Indicative.Future.ThirdPersonSingular}</td>
              <td>{conjugations.Indicative.Conditional.ThirdPersonSingular}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.Indicative.Present.FirstPersonPlural}</td>
              <td>{conjugations.Indicative.Preterite.FirstPersonPlural}</td>
              <td>{conjugations.Indicative.Imperfect.FirstPersonPlural}</td>
              <td>{conjugations.Indicative.Future.FirstPersonPlural}</td>
              <td>{conjugations.Indicative.Conditional.FirstPersonPlural}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.Indicative.Present.SecondPersonPlural}</td>
              <td>{conjugations.Indicative.Preterite.SecondPersonPlural}</td>
              <td>{conjugations.Indicative.Imperfect.SecondPersonPlural}</td>
              <td>{conjugations.Indicative.Future.SecondPersonPlural}</td>
              <td>{conjugations.Indicative.Conditional.SecondPersonPlural}</td>
            </tr>
            <tr>
              <td>ellos / ellas / ustedes</td>
              <td>{conjugations.Indicative.Present.ThirdPersonPlural}</td>
              <td>{conjugations.Indicative.Preterite.ThirdPersonPlural}</td>
              <td>{conjugations.Indicative.Imperfect.ThirdPersonPlural}</td>
              <td>{conjugations.Indicative.Future.ThirdPersonPlural}</td>
              <td>{conjugations.Indicative.Conditional.ThirdPersonPlural}</td>
            </tr>
          </tbody>
        </table>

        <h3>Imperative</h3>
        <table className={styles.verbTable}>
          <thead>
            <tr>
              <th>Pronoun</th>
              <th>Affirmative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tú</td>
              <td>{conjugations.Imperative.Affirmative.SecondPersonSingular}</td>
            </tr>
            <tr>
              <td>usted</td>
              <td>{conjugations.Imperative.Affirmative.SecondPersonSingularFormal}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.Imperative.Affirmative.FirstPersonPlural}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.Imperative.Affirmative.SecondPersonPlural}</td>
            </tr>
            <tr>
              <td>ustedes</td>
              <td>{conjugations.Imperative.Affirmative.SecondPersonPluralFormal}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};