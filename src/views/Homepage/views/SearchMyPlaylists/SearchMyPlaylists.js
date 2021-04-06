import { useState } from "react";
//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import styles from "./searchMyPlaylists.module.css";
import Nav from "../../../../components/Nav/Nav";
import { Filters } from "./components/Filters";
import { Search } from "./components/Search";
import { SearchResults } from "./components/SearchResults";

function SearchMyPlaylists(props) {
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
        <h1 className="title-sub">Search My Playlists</h1>
      </header>
      <main className={styles.mainContent} role="search-playlists">
        <section className={styles.searchFieldsContainer}>
          <Search
            query={query}
            onQueryChange={onQueryChange}
            searchBy={searchBy}
            setSearchBy={setSearchBy}
            onSearch={onSearch}
          />
        </section>
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

export default SearchMyPlaylists;
