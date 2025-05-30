"use client";

import styles from "./page.module.css";
import SearchForm from "./SearchForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SearchForm />
      </main>
    </div>
  );
}
