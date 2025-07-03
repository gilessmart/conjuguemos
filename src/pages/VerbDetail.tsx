import { useParams, Link } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";

function VerbDetail() {
  const { verb } = useParams<{ verb: string }>();
  const verbDetails = verb ? getVerbDetails(verb) : undefined;

  if (!verb || !verbDetails) {
    return (
      <div>
        <h2>Verb "{verb}" not found.</h2>
        <Link to="/verbs">← Back to list</Link>
      </div>
    );
  }

  const conjugations = verbDetails.Conjugations;
  return (
    <div>
      <h1>{verbDetails.TitleCaseVerb}</h1>
      <Link to="/verbs">← Back to list</Link>
      <h2>Conjugations</h2>
      <h3>Indicative</h3>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Present</th>
            <th>Preterite</th>
            <th>Imperfect</th>
            <th>Future</th>
            <th>Conditional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yo</td>
            <td>{conjugations.Indicative.Present.FirstPersonSingular}</td>
            <td>{conjugations.Indicative.Preterite.FirstPersonSingular}</td>
            <td>{conjugations.Indicative.Imperfect.FirstPersonSingular}</td>
            <td>{conjugations.Indicative.Future.FirstPersonSingular}</td>
            <td>{conjugations.Indicative.Conditional.FirstPersonSingular}</td>
          </tr>
          <tr>
            <td>Tú</td>
            <td>{conjugations.Indicative.Present.SecondPersonSingular}</td>
            <td>{conjugations.Indicative.Preterite.SecondPersonSingular}</td>
            <td>{conjugations.Indicative.Imperfect.SecondPersonSingular}</td>
            <td>{conjugations.Indicative.Future.SecondPersonSingular}</td>
            <td>{conjugations.Indicative.Conditional.SecondPersonSingular}</td>
          </tr>
          <tr>
            <td>Él / Ella / Usted</td>
            <td>{conjugations.Indicative.Present.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative.Preterite.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative.Imperfect.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative.Future.ThirdPersonSingular}</td>
            <td>{conjugations.Indicative.Conditional.ThirdPersonSingular}</td>
          </tr>
          <tr>
            <td>Nosotros / Nosotras</td>
            <td>{conjugations.Indicative.Present.FirstPersonPlural}</td>
            <td>{conjugations.Indicative.Preterite.FirstPersonPlural}</td>
            <td>{conjugations.Indicative.Imperfect.FirstPersonPlural}</td>
            <td>{conjugations.Indicative.Future.FirstPersonPlural}</td>
            <td>{conjugations.Indicative.Conditional.FirstPersonPlural}</td>
          </tr>
          <tr>
            <td>Vosotros / Vosotras</td>
            <td>{conjugations.Indicative.Present.SecondPersonPlural}</td>
            <td>{conjugations.Indicative.Preterite.SecondPersonPlural}</td>
            <td>{conjugations.Indicative.Imperfect.SecondPersonPlural}</td>
            <td>{conjugations.Indicative.Future.SecondPersonPlural}</td>
            <td>{conjugations.Indicative.Conditional.SecondPersonPlural}</td>
          </tr>
          <tr>
            <td>Ellos / Ellas / Ustedes</td>
            <td>{conjugations.Indicative.Present.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative.Preterite.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative.Imperfect.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative.Future.ThirdPersonPlural}</td>
            <td>{conjugations.Indicative.Conditional.ThirdPersonPlural}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VerbDetail;
