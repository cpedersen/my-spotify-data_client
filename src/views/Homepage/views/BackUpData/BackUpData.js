import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";
import styles from "./backUpData.module.css";

const BackUpData = (props) => {
  const [form, setForm] = useState({
    requestCompleteDownload: false,
    downloadPlaylistsAndListeningHistory: false,
    exportData: false,
  });
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const closeHelp = () => {
    history.push("/dashboard/back-up-data");
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

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("on submit", form);
  };

  return (
    <main className={styles.container} role="backup">
      <header role="banner">
        <h1>Back Up Data</h1>
      </header>
      <form action="" onSubmit={onSubmit}>
        <div className={styles.flex}>
          <input
            type="checkbox"
            id="request-complete-download-input"
            name="requestCompleteDownload"
            onChange={onFieldChange}
          />
          <label htmlFor="request-complete-download-input">
            Request a complete download of your data from Spotify (e.g.,
            playlists, search queries, followers, streaming history).
          </label>
        </div>
        <br />
        <div className={styles.flex}>
          <input
            type="checkbox"
            id="download-playlists-and-listening-history-input"
            name="downloadPlaylistsAndListeningHistory"
            onChange={onFieldChange}
          />
          <label htmlFor="download-playlists-and-listening-history-input">
            Download your playlists and listening history to the My Spotify Data
            database.
          </label>
        </div>
        <br />
        <div className={styles.flex}>
          <input
            type="checkbox"
            id="export-data-input"
            name="exportData"
            onChange={onFieldChange}
          />
          <label htmlFor="export-data-input">
            Export your data from the My Spotify Data database.
          </label>
        </div>

        <br />
        <div className={styles.flex}>
          <input
            type="checkbox"
            id="remove-data"
            name="removeData"
            onChange={onFieldChange}
          />
          <label htmlFor="remove-data">
            Remove all of your data from the My Spotify Data database.
          </label>
        </div>

        <br />
        <section className={styles.buttonSection}>
          <button className={styles.buttonStyle} type="submit">
            Submit
          </button>
          <br />
          {/*<button className="resetButton">Reset</button>*/}
        </section>
      </form>
      <Link to={`${url}/help`} className={styles.helpLink}>
        Back up data help
      </Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div>back up data help</div>
          </Modal>
        </Route>
      </Switch>
    </main>
  );
};

export default BackUpData;
