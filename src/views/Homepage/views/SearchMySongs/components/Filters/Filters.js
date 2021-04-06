import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  return (
    <section role="filter">
      <ul>
        <li className={styles.filterOption}>Acousticness</li>
        <li className={styles.filterOption}>Danceability</li>
        <li className={styles.filterOption}>Duration_min</li>
        <li className={styles.filterOption}>Energy</li>
        <li className={styles.filterOption}>Explicit</li>
        <li className={styles.filterOption}>Instrumentalness</li>
        <li className={styles.filterOption}>Liveness</li>
        <li className={styles.filterOption}>Loudness</li>
      </ul>
    </section>
  );
};

export default Filters;
