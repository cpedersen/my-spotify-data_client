import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const { query, onQueryChange, searchBy, setSearchBy, onSearch } = props;
  return (
    <section role="search-playlist">
      Search
      <div className="field">
        <input
          type="text"
          value={query}
          className={styles.inputField}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      <div className="field">
        <select
          className={styles.selectField}
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          <option value="title">Search by song title</option>
          <option value="spotify-url">Search by Spotify URL</option>
        </select>
      </div>
      <div className="">
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
