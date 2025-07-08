import { useParams, Link } from "react-router-dom";
import { getVerbDetails } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";

function VerbDetail() {
  const params = useParams<{ verb: string }>();
  const verbParam = params.verb!;
  const verbDetails = getVerbDetails(verbParam);
  
  if (!verbDetails) {
    usePageTitle("Conjuguemos - Verb Not Found");
    
    return (
      <div>
        <header>
          <Link to="/verbs">← Back to verb reference</Link>
          <h1>Not found</h1>
        </header>
        <main>
          <p>Verb <em>{verbParam}</em> not recognised</p>
        </main>
      </div>
    );
  }

  usePageTitle(`Conjuguemos - ${verbDetails.TitleCaseVerb}`);  
  
  const conjugations = verbDetails.Conjugations;

  return (
    <div>
      <header>
        <Link to="/verbs">← Back to list</Link>
        <h1>{verbDetails.TitleCaseVerb}</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default VerbDetail;
