import { useState, useEffect } from "react";
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
import songsData from "../../../../fixtures/songs";

function ViewListeningHistory(props) {
  const [form, setForm] = useState({
    viewFromSpotify: true,
    viewFromMySpotifyData: false,
  });
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const closeHelp = () => {
    history.push("/dashboard/view-listening-history");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("on submit", form);
  };

  const onFieldChange = (e) => {
    const { name, checked } = e.target;
    console.log({ name, checked });
    setForm((formState) => {
      console.log({ ...formState }, { ...formState, [name]: checked });
      return {
        ...formState,
        [name]: checked,
      };
    });
  };

  useEffect(() => {
    setResults(songsData.data);
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>View Listening History</h1>
      </header>

      <main className={styles.mainContent} role="view-listening-history">
        <section className={styles.searchResultsContainer}>
          <SearchResults results={results} />
        </section>
        <aside className={styles.filtersAside}>
          <Filters
            filters={filters}
            setFilters={setFilters}
            onSubmit={onSubmit}
          />
        </aside>
      </main>

      <Link to={`${url}/help`} className={styles.helpLink}>
        View listening history help
      </Link>
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
