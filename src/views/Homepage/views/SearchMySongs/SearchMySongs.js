import { useState } from "react";
import React from "react";
import styles from "./searchMySongs.module.css";
import Nav from "../../../../components/Nav/Nav";
import { Filters } from "./components/Filters";
import { SearchResults } from "./components/SearchResults";

function SearchMySongs(props) {
  const [searchBy, setSearchBy] = useState("text");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});

  const onSearch = () => {
    // Perform api request to search
    // const results = searchApi.search()
  };

  const onQueryChange = () => {};

  return (
    <>
      <Nav />
      <header role="banner">
        <h1 className="title-sub">Search My Songs</h1>
      </header>
      <main className={styles.mainContent} role="search-songs">
        <section className={styles.searchResultsContainer}>
          <SearchResults results={results} />
        </section>
        <aside className={styles.filtersAside}>
          <Filters filters={filters} setFilters={setFilters} />
        </aside>
      </main>
    </>
  );
}

export default SearchMySongs;
