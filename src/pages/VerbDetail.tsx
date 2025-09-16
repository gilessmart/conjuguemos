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
  
  const moods = verbDetails.verbMoods;

  return (
    <div>
      <header>
        <Menu />
        <h1 className="capitalize">{title}</h1>
      </header>
      <main>
        <h2>Conjugations</h2>

        <h3>Indicative</h3>

        <div className={styles.verbTableWrapper}>
          <table className={styles.verbTable}>
            <thead>
              <tr>
                <th>Pronoun(s)</th>
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
                <td>{moods.indicative.present.firstSingular.value}</td>
                <td>{moods.indicative.preterite.firstSingular.value}</td>
                <td>{moods.indicative.imperfect.firstSingular.value}</td>
                <td>{moods.indicative.future.firstSingular.value}</td>
                <td>{moods.indicative.conditional.firstSingular.value}</td>
              </tr>
              <tr>
                <td>tú</td>
                <td>{moods.indicative.present.secondSingularInformal.value}</td>
                <td>{moods.indicative.preterite.secondSingularInformal.value}</td>
                <td>{moods.indicative.imperfect.secondSingularInformal.value}</td>
                <td>{moods.indicative.future.secondSingularInformal.value}</td>
                <td>{moods.indicative.conditional.secondSingularInformal.value}</td>
              </tr>
              <tr>
                <td>él/ella/usted</td>
                <td>{moods.indicative.present.thirdSingularAndSecondSingularFormal.value}</td>
                <td>{moods.indicative.preterite.thirdSingularAndSecondSingularFormal.value}</td>
                <td>{moods.indicative.imperfect.thirdSingularAndSecondSingularFormal.value}</td>
                <td>{moods.indicative.future.thirdSingularAndSecondSingularFormal.value}</td>
                <td>{moods.indicative.conditional.thirdSingularAndSecondSingularFormal.value}</td>
              </tr>
              <tr>
                <td>nosotros/nosotras</td>
                <td>{moods.indicative.present.firstPlural.value}</td>
                <td>{moods.indicative.preterite.firstPlural.value}</td>
                <td>{moods.indicative.imperfect.firstPlural.value}</td>
                <td>{moods.indicative.future.firstPlural.value}</td>
                <td>{moods.indicative.conditional.firstPlural.value}</td>
              </tr>
              <tr>
                <td>vosotros/vosotras</td>
                <td>{moods.indicative.present.secondPluralInformal.value}</td>
                <td>{moods.indicative.preterite.secondPluralInformal.value}</td>
                <td>{moods.indicative.imperfect.secondPluralInformal.value}</td>
                <td>{moods.indicative.future.secondPluralInformal.value}</td>
                <td>{moods.indicative.conditional.secondPluralInformal.value}</td>
              </tr>
              <tr>
                <td>ellos/ellas/ustedes</td>
                <td>{moods.indicative.present.thirdPluralAndSecondPluralFormal.value}</td>
                <td>{moods.indicative.preterite.thirdPluralAndSecondPluralFormal.value}</td>
                <td>{moods.indicative.imperfect.thirdPluralAndSecondPluralFormal.value}</td>
                <td>{moods.indicative.future.thirdPluralAndSecondPluralFormal.value}</td>
                <td>{moods.indicative.conditional.thirdPluralAndSecondPluralFormal.value}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Imperative</h3>

        <div className={styles.verbTableWrapper}>
          <table className={styles.verbTable}>
            <thead>
              <tr>
                <th>Pronoun(s)</th>
                <th>Affirmative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tú</td>
                <td>{moods.imperative.affirmative.secondSingularInformal.value}</td>
              </tr>
              <tr>
                <td>usted</td>
                <td>{moods.imperative.affirmative.secondSingularFormal.value}</td>
              </tr>
              <tr>
                <td>nosotros/nosotras</td>
                <td>{moods.imperative.affirmative.firstPlural.value}</td>
              </tr>
              <tr>
                <td>vosotros/vosotras</td>
                <td>{moods.imperative.affirmative.secondPluralInformal.value}</td>
              </tr>
              <tr>
                <td>ustedes</td>
                <td>{moods.imperative.affirmative.secondPluralFormal.value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
