import { Link } from "react-router-dom";
import { getVerbNames } from "../data/verbs";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import "./VerbList.css";

export default function VerbList() {
  usePageTitle("Conjuguemos - Verb Reference");
  const verbs = getVerbNames();
  return (
    <div>
      <header>
        <Menu />
        <h1>Verb Reference</h1>
      </header>
      <main>
        <ul className="verbList">
          {verbs.map(verb => (
            <li key={verb}>
              <Link to={`/verbs/${verb}`}>{verb}</Link>
            </li>
          ))}          
        </ul>
      </main>
    </div>
  );
};
