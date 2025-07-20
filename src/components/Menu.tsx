import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const location = useLocation();
  const path = trimLastSlash(location.pathname);
  return (
    <nav>
      <ul className="mainMenu">
        <li>{path === "" ? "Home" : <Link to="/">Home</Link>}</li>
        <li>{path === "/verbs" ? "Verb Reference" : <Link to="/verbs">Verb Reference</Link>}</li>
      </ul>
    </nav>
  );
};

function trimLastSlash(pathname: string) {
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
