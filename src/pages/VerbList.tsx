import { Link } from "react-router-dom";
import { getVerbNames } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";

function VerbList() {
  usePageTitle("Conjuguemos - Verb Reference");
  const verbs = getVerbNames();
  return (
    <div>
      <header>
        <h1>Verb Reference</h1>
      </header>
      <main>
        <ul>
          {verbs.map(verb => (
            <li key={verb}>
              <Link to={`/verbs/${verb}`}>{verb}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default VerbList;
