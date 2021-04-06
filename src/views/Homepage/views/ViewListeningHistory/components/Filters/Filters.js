import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  return (
    <section role="filter">
      <ul>
        <li className={styles.filterOption}>
          Option 1: View from Spotify (default on)
        </li>
        <li className={styles.filterOption}>
          Option 2: View from My Spotify Data database (default off)
        </li>
      </ul>
    </section>
  );
};

export default Filters;
