import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
  const location = useLocation();
  const path = trimLastSlash(location.pathname);
  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li>{path === "" ? "Game" : <Link to="/">Game</Link>}</li>
        <li>{path === "/settings" ? "Settings" : <Link to="/settings">Settings</Link>}</li>
        <li>{path === "/verbs" ? "Verb Reference" : <Link to="/verbs">Verb Reference</Link>}</li>
      </ul>
    </nav>
  );
};

function trimLastSlash(pathname: string) {
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
