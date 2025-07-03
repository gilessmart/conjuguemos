import { Link } from "react-router-dom";
import { getVerbNames } from "../data/verbs";

function VerbList() {
  const verbs = getVerbNames();
  return (
    <div>
      <h1>Verb Reference</h1>
      <ul>
        {verbs.map(verb => (
          <li key={verb}>
            <Link to={`/verbs/${verb}`}>{verb}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerbList;
