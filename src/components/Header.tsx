import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";

export default function Header(props: { title: string }) {
  const location = useLocation();
  const path = trimLastSlash(location.pathname);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current && menuWrapperRef.current) {
      const navBottom = headerRef.current.offsetTop + headerRef.current.offsetHeight;
      menuWrapperRef.current.style.top = `${String(navBottom)}px`;
    }
  }, []);

  return (
    <header ref={headerRef} className={styles.mainHeader}>
      <nav>
        <button type="button" className={styles.menuToggleBtn} onClick={ () => { setMenuOpen(!menuOpen); } }>
          <svg xmlns="http://www.w3.org/2000/svg"
               className={styles.menuToggleIcon}
               viewBox="0 0 24 24"
               width="24"
               height="24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2.5"
               strokeLinecap="round"
               strokeLinejoin="round"
               aria-label="Toggle menu">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div ref={menuWrapperRef} className={`${styles.menuWrapper} ${menuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.menuMask} onClick={ () => { setMenuOpen(false); } }></div>
          <div className={styles.menuContent}>
            <ul className={styles.menuItems}>
              <li>{path === "" ? "Game" : <Link to="/">Game</Link>}</li>
              <li>{path === "/settings" ? "Settings" : <Link to="/settings">Settings</Link>}</li>
              <li>{path === "/verbs" ? "Verb Reference" : <Link to="/verbs">Verb Reference</Link>}</li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className={styles.mainHeading}>{props.title}</h1>
    </header>
  );
};

function trimLastSlash(pathname: string) {
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
