import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  const { onSubmit } = props;
  return (
    <form className={styles.filterForm} role="filter" onSubmit={onSubmit}>
      <div className={styles.flex}>
        <input type="checkbox" id="view-spotify" />
        <label htmlFor="view-spotify">View from Spotify (default on)</label>
      </div>
      <div className={styles.flex}>
        <input type="checkbox" id="view-my-spotify" />
        <label htmlFor="view-my-spotify">
          View from My Spotify Data database (default off)
        </label>
      </div>
      <div className={styles.buttonSection}>
        <button className={styles.filterButton} type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Filters;
