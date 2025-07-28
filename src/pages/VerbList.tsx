import { Link } from "react-router-dom";
import { getInfinitives } from "../data/verbDefinitions";
import { usePageTitle } from "../hooks/usePageTitle";
import Menu from "../components/Menu";
import styles from "./VerbList.module.css";

export default function VerbList() {
  usePageTitle("Conjuguemos - Verb Reference");
  const infinitives = getInfinitives();
  return (
    <div>
      <header>
        <Menu />
        <h1>Verb Reference</h1>
      </header>
      <main>
        <ul className={styles.verbList}>
          {infinitives.map(infinitive => (
            <li key={infinitive}>
              <Link to={`/verbs/${infinitive}`}>{infinitive}</Link>
            </li>
          ))}          
        </ul>
      </main>
    </div>
  );
};
