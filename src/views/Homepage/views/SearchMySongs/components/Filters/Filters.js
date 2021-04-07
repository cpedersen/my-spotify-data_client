import React from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  const { updateFilterForm, onSearch } = props;
  return (
    <form role="filter" className="search-criteria-form" onSubmit={onSearch}>
      Acousticness
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="acousticness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Danceability
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Danceability"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Duration_min
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Duration_min"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Energy
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Energy"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Explicit
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Explicit"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Instrumentalness
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Instrumentalness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      Liveness
      <input
        type="range"
        value="5"
        min="0"
        max="10"
        id="Liveness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <div className="">
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Filters;
