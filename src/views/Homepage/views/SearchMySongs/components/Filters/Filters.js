import React from "react";
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
    <form role="search" className="search-criteria-form" onSubmit={onSearch}>
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
      <label htmlFor="duration_min">Duration (mins)</label>
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
      <label htmlFor="track_key">Key</label>
      <input
        type="range"
        value={filters.track_key}
        min="0"
        max="10"
        name="track_key"
        id="track_key"
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
      <label htmlFor="loudness">Loudness</label>
      <input
        type="range"
        value={filters.loudness}
        min="0"
        max="10"
        name="loudness"
        id="loudness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="mode">Mode</label>
      <input
        type="range"
        value={filters.mode}
        min="0"
        max="10"
        name="mode"
        id="mode"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="popularity">Popularity</label>
      <input
        type="range"
        value={filters.popularity}
        min="0"
        max="10"
        name="popularity"
        id="popularity"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="speechiness">Speechiness</label>
      <input
        type="range"
        value={filters.speechiness}
        min="0"
        max="10"
        name="speechiness"
        id="speechiness"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="tempo">Tempo</label>
      <input
        type="range"
        value={filters.tempo}
        min="0"
        max="10"
        name="tempo"
        id="tempo"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="time_signature">Time Signature</label>
      <input
        type="range"
        value={filters.time_signature}
        min="0"
        max="10"
        name="time_signature"
        id="time_signature"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="valence">Valence</label>
      <input
        type="range"
        value={filters.valence}
        min="0"
        max="10"
        name="valence"
        id="valence"
        onChange={updateFilterForm}
        className={styles.filterOption}
      />
      <label htmlFor="year_released">Year</label>
      <input
        type="range"
        value={filters.year_released}
        min="0"
        max="10"
        name="year_released"
        id="year_released"
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
