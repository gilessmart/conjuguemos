import { useParams } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbDetail.module.css";

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
              <td>{conjugations.Indicative.Present.FirstSingular.Value}</td>
              <td>{conjugations.Indicative.Preterite.FirstSingular.Value}</td>
              <td>{conjugations.Indicative.Imperfect.FirstSingular.Value}</td>
              <td>{conjugations.Indicative.Future.FirstSingular.Value}</td>
              <td>{conjugations.Indicative.Conditional.FirstSingular.Value}</td>
            </tr>
            <tr>
              <td>tú</td>
              <td>{conjugations.Indicative.Present.SecondSingularInformal.Value}</td>
              <td>{conjugations.Indicative.Preterite.SecondSingularInformal.Value}</td>
              <td>{conjugations.Indicative.Imperfect.SecondSingularInformal.Value}</td>
              <td>{conjugations.Indicative.Future.SecondSingularInformal.Value}</td>
              <td>{conjugations.Indicative.Conditional.SecondSingularInformal.Value}</td>
            </tr>
            <tr>
              <td>él / ella / usted</td>
              <td>{conjugations.Indicative.Present.ThirdSingularAndSecondSingularFormal.Value}</td>
              <td>{conjugations.Indicative.Preterite.ThirdSingularAndSecondSingularFormal.Value}</td>
              <td>{conjugations.Indicative.Imperfect.ThirdSingularAndSecondSingularFormal.Value}</td>
              <td>{conjugations.Indicative.Future.ThirdSingularAndSecondSingularFormal.Value}</td>
              <td>{conjugations.Indicative.Conditional.ThirdSingularAndSecondSingularFormal.Value}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.Indicative.Present.FirstPlural.Value}</td>
              <td>{conjugations.Indicative.Preterite.FirstPlural.Value}</td>
              <td>{conjugations.Indicative.Imperfect.FirstPlural.Value}</td>
              <td>{conjugations.Indicative.Future.FirstPlural.Value}</td>
              <td>{conjugations.Indicative.Conditional.FirstPlural.Value}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.Indicative.Present.SecondPluralInformal.Value}</td>
              <td>{conjugations.Indicative.Preterite.SecondPluralInformal.Value}</td>
              <td>{conjugations.Indicative.Imperfect.SecondPluralInformal.Value}</td>
              <td>{conjugations.Indicative.Future.SecondPluralInformal.Value}</td>
              <td>{conjugations.Indicative.Conditional.SecondPluralInformal.Value}</td>
            </tr>
            <tr>
              <td>ellos / ellas / ustedes</td>
              <td>{conjugations.Indicative.Present.ThirdPluralAndSecondPluralFormal.Value}</td>
              <td>{conjugations.Indicative.Preterite.ThirdPluralAndSecondPluralFormal.Value}</td>
              <td>{conjugations.Indicative.Imperfect.ThirdPluralAndSecondPluralFormal.Value}</td>
              <td>{conjugations.Indicative.Future.ThirdPluralAndSecondPluralFormal.Value}</td>
              <td>{conjugations.Indicative.Conditional.ThirdPluralAndSecondPluralFormal.Value}</td>
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
              <td>{conjugations.Imperative.Affirmative.SecondSingularInformal.Value}</td>
            </tr>
            <tr>
              <td>usted</td>
              <td>{conjugations.Imperative.Affirmative.SecondSingularFormal.Value}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.Imperative.Affirmative.FirstPlural.Value}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.Imperative.Affirmative.SecondPluralInformal.Value}</td>
            </tr>
            <tr>
              <td>ustedes</td>
              <td>{conjugations.Imperative.Affirmative.SecondPluralFormal.Value}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
