import { useState, useEffect } from "react";
import styles from "./searchMyPlaylists.module.css";
import Nav from "../../../../components/Nav/Nav";
import { Filters } from "./components/Filters";
import { Search } from "./components/Search";
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

function SearchMyPlaylists(props) {
  const [searchBy, setSearchBy] = useState("text");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const closeHelp = () => {
    history.push("/dashboard/search-playlists");
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log({
      query,
      searchBy,
    });
    // Perform api request to search
    // const results = searchApi.search()
  };

  const onQueryChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    setResults(songsData.data);
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>Search My Playlists</h1>
      </header>

      <main>
        <form className={styles.mainContent} role="search-playlists">
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
        </form>
      </main>

      <Link to={`${url}/help`}>Search my playlists help</Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div>search playlists help</div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default SearchMyPlaylists;
