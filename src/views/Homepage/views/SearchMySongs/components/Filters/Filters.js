import React, { useState } from "react";
import styles from "./filters.module.css";

const Filters = (props) => {
  const { updateFilterForm, resetFilterForm, onSearch, filters } = props;
  /*const useSlider = (min, max, defaultState, label, id) => {
    const [state, setSlide] = useState(defaultState);
    const handleChange = (e) => {
      console.log("setting level", e.target.value);
      setSlide(e.target.value);
    };

    const props = {
      type: "range",
      id,
      min,
      max,
      step: 0.5,
      value: state,
      onChange: handleChange,
    };
    return props;
  };*/
  return (
    <form role="filter" className="search-criteria-form" onSubmit={onSearch}>
      <label htmlFor="acousticness">Acousticness</label>
      <input
        type="range"
        defaultValue="5"
        min="0"
        max="10"
        name="acousticness"
        id="acousticness"
        step={0.5}
        value={filters.acousticness}
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="acousticness">Danceability</label>
      <input
        type="range"
        value={filters.danceability}
        min="0"
        max="10"
        name="danceability"
        id="danceability"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="duration_min">Duration_min</label>
      <input
        type="range"
        value={filters.duration_min}
        min="0"
        max="10"
        name="duration_min"
        id="duration_min"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="energy">Energy</label>
      <input
        type="range"
        value={filters.energy}
        min="0"
        max="10"
        name="energy"
        id="energy"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="explicit">Explicit</label>
      <input
        type="range"
        value={filters.explicit}
        min="0"
        max="10"
        name="explicit"
        id="explicit"
        onMousonChangeeonChangeUp={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="instrumentalness">Instrumentalness</label>
      <input
        type="range"
        value={filters.instrumentalness}
        min="0"
        max="10"
        name="instrumentalness"
        id="instrumentalness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="liveness">Liveness</label>
      <input
        type="range"
        value={filters.liveness}
        min="0"
        max="10"
        name="liveness"
        id="liveness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <div className="buttons">
        <button className={styles.filterButton} type="submit">
          Search
        </button>
        <button className={styles.filterButton} onClick={resetFilterForm}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Filters;
