import { useState, useEffect } from "react";
import React from "react";
import styles from "./searchMySongs.module.css";
import Nav from "../../../../components/Nav/Nav";
import { Filters } from "./components/Filters";
import { SearchResults } from "./components/SearchResults";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";
import songsData from "../../../../fixtures/songs";

function SearchMySongs(props) {
  const [results, setResults] = useState([]);
  /*const [filters, setFilters] = useState({
    value: 5,
    min: 0,
    max: 10,
  });*/
  const defaultFilters = {
    acousticness: 5,
    danceability: 5,
    duration_min: 5,
    energy: 5,
    explicit: 5,
    instrumentalness: 5,
    liveness: 5,
  };
  const [filters, setFilters] = useState(defaultFilters);
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const closeHelp = () => {
    history.push("/dashboard/search-songs");
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log({});
    // Perform api request to search
    // const results = searchApi.search()
  };

  const updateFilterForm = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log({
      name,
      value,
    });
    setFilters({
      ...filters,
      [name]: value,
    });
    // Perform api request to search
    // const results = searchApi.search()
  };

  const resetFilterForm = (event) => {
    event.preventDefault(); /*
    const { name, value } = e.target;
    setFilters();
    console.log({
      name,
      value,
    });*/
    // Perform api request to search
    // const results = searchApi.search()
    setFilters(defaultFilters);
  };

  useEffect(() => {
    setResults(songsData.data);
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>Search My Songs</h1>
      </header>

      <main>
        <form className={styles.mainContent} role="search-songs">
          <section className={styles.searchResultsContainer}>
            <SearchResults results={results} />
          </section>
          <aside className={styles.filtersAside}>
            <Filters
              filters={filters}
              updateFilterForm={updateFilterForm}
              resetFilterForm={resetFilterForm}
              onSearch={onSearch}
            />
          </aside>
        </form>
      </main>

      <Link to={`${url}/help`} className={styles.helpLink}>
        Search my songs help
      </Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div>Search songs help</div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default SearchMySongs;
