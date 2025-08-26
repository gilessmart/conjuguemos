import { useParams } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbDetail.module.css";

export default function VerbDetail() {
  const params = useParams<{ verb: string }>();
  const verbParam = params.verb!;
  const verbDetails = getVerbDetails(verbParam);
  const title = verbDetails?.infinitive ?? "Verb Not Found";
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
  
  const conjugations = verbDetails.conjugations;

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
              <td>{conjugations.indicative.present.firstSingular.value}</td>
              <td>{conjugations.indicative.preterite.firstSingular.value}</td>
              <td>{conjugations.indicative.imperfect.firstSingular.value}</td>
              <td>{conjugations.indicative.future.firstSingular.value}</td>
              <td>{conjugations.indicative.conditional.firstSingular.value}</td>
            </tr>
            <tr>
              <td>tú</td>
              <td>{conjugations.indicative.present.secondSingularInformal.value}</td>
              <td>{conjugations.indicative.preterite.secondSingularInformal.value}</td>
              <td>{conjugations.indicative.imperfect.secondSingularInformal.value}</td>
              <td>{conjugations.indicative.future.secondSingularInformal.value}</td>
              <td>{conjugations.indicative.conditional.secondSingularInformal.value}</td>
            </tr>
            <tr>
              <td>él / ella / usted</td>
              <td>{conjugations.indicative.present.thirdSingularAndSecondSingularFormal.value}</td>
              <td>{conjugations.indicative.preterite.thirdSingularAndSecondSingularFormal.value}</td>
              <td>{conjugations.indicative.imperfect.thirdSingularAndSecondSingularFormal.value}</td>
              <td>{conjugations.indicative.future.thirdSingularAndSecondSingularFormal.value}</td>
              <td>{conjugations.indicative.conditional.thirdSingularAndSecondSingularFormal.value}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.indicative.present.firstPlural.value}</td>
              <td>{conjugations.indicative.preterite.firstPlural.value}</td>
              <td>{conjugations.indicative.imperfect.firstPlural.value}</td>
              <td>{conjugations.indicative.future.firstPlural.value}</td>
              <td>{conjugations.indicative.conditional.firstPlural.value}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.indicative.present.secondPluralInformal.value}</td>
              <td>{conjugations.indicative.preterite.secondPluralInformal.value}</td>
              <td>{conjugations.indicative.imperfect.secondPluralInformal.value}</td>
              <td>{conjugations.indicative.future.secondPluralInformal.value}</td>
              <td>{conjugations.indicative.conditional.secondPluralInformal.value}</td>
            </tr>
            <tr>
              <td>ellos / ellas / ustedes</td>
              <td>{conjugations.indicative.present.thirdPluralAndSecondPluralFormal.value}</td>
              <td>{conjugations.indicative.preterite.thirdPluralAndSecondPluralFormal.value}</td>
              <td>{conjugations.indicative.imperfect.thirdPluralAndSecondPluralFormal.value}</td>
              <td>{conjugations.indicative.future.thirdPluralAndSecondPluralFormal.value}</td>
              <td>{conjugations.indicative.conditional.thirdPluralAndSecondPluralFormal.value}</td>
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
              <td>{conjugations.imperative.affirmative.secondSingularInformal.value}</td>
            </tr>
            <tr>
              <td>usted</td>
              <td>{conjugations.imperative.affirmative.secondSingularFormal.value}</td>
            </tr>
            <tr>
              <td>nosotros / nosotras</td>
              <td>{conjugations.imperative.affirmative.firstPlural.value}</td>
            </tr>
            <tr>
              <td>vosotros / vosotras</td>
              <td>{conjugations.imperative.affirmative.secondPluralInformal.value}</td>
            </tr>
            <tr>
              <td>ustedes</td>
              <td>{conjugations.imperative.affirmative.secondPluralFormal.value}</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
