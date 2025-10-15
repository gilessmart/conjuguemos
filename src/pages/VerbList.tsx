import { Link } from "react-router-dom";
import { getInfinitives } from "../data/verbDefinitions";
import { usePageTitle } from "../hooks/usePageTitle";
import styles from "./VerbList.module.css";
import Header from "../components/Header";

export default function VerbList() {
  const title = "Verb Reference";
  usePageTitle(title);  
  const infinitives = getInfinitives();
  
  return (
    <>
      <Header title={title} />
      <main>
        <ul className={styles.verbList}>
          {infinitives.map(infinitive => (
            <li key={infinitive}>
              <Link to={`/verbs/${infinitive}`}>{infinitive}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
