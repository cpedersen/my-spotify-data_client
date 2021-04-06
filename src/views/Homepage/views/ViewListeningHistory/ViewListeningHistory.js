import { useState } from "react";
import React from "react";
import styles from "./viewListeningHistory.module.css";
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
function ViewListeningHistory(props) {
  const [searchBy, setSearchBy] = useState("text");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const closeHelp = () => {
    history.push("/dashboard/view-listening-history");
  };
  const onSearch = () => {
    // Perform api request to search
    // const results = searchApi.search()
  };

  const onQueryChange = () => {};

  return (
    <>
      <Nav />
      <header role="banner">
        <h1 className="title-sub">View Listening History</h1>
      </header>
      <main className={styles.mainContent} role="view-listening-history">
        <section className={styles.searchResultsContainer}>
          <SearchResults results={results} />
        </section>
        <aside className={styles.filtersAside}>
          <Filters filters={filters} setFilters={setFilters} />
        </aside>
      </main>
      <Link to={`${url}/help`}>View listening history help</Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div>View listening history help</div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default ViewListeningHistory;
