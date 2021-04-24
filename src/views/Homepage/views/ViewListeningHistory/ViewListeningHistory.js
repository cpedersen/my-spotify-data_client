import { useState, useEffect } from "react";
import React from "react";
import styles from "./viewListeningHistory.module.css";
import Nav from "../../../../components/Nav/Nav";
//import { Filters } from "./components/Filters";
import { SearchResults } from "./components/SearchResults";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";
//import songsData from "../../../../fixtures/songs";
import { useUserContext } from "../../../../context/UserContext";

function ViewListeningHistory(props) {
  //const [form, setForm] = useState({
  /*const [setForm] = useState({
    viewFromSpotify: true,
    viewFromMySpotifyData: false,
  });*/
  const [results, setResults] = useState([]);
  //const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const { user } = useUserContext();
  const history = useHistory();
  const { id: userId, access_token } = user;
  const closeHelp = () => {
    history.push("/dashboard/view-listening-history");
  };

  /*const onSubmit = async (e) => {
    e.preventDefault();
    console.log("on submit", form);
  };*/

  /*const onFieldChange = (e) => {
    const { name, checked } = e.target;
    console.log({ name, checked });
    setForm((formState) => {
      console.log({ ...formState }, { ...formState, [name]: checked });
      return {
        ...formState,
        [name]: checked,
      };
    });
  };*/

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/listening_history/${userId}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer: ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log({ response });
      const data = await response.json();
      //console.log({ data, items: data.response.body.items });
      console.log({ data });
      setResults(data.response.body.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>View Listening History</h1>
      </header>

      <main className={styles.mainContent} role="textbox">
        <section className={styles.searchResultsContainer}>
          <SearchResults role="textbox" results={results} />
        </section>
        {/* TODO: To implement appended listening history in the future
        <aside className={styles.filtersAside}>
          <Filters
            filters={filters}
            setFilters={setFilters}
            onSubmit={onSubmit}
          />
        </aside>
        */}
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
            <div className={styles.helpText}>
              Use View Listening History to display the last 50 songs that you
              played on Spotify.
            </div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default ViewListeningHistory;
