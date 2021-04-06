import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  return (
    <section role="filter">
      <ul>
        <li className={styles.filterOption}>
          Option 1: Enter track using text (default on)
        </li>
        <li className={styles.filterOption}>
          Option 2: Enter track using Spotify url (default off)
        </li>
      </ul>
    </section>
  );
};

export default Filters;
