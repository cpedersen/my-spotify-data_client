import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";
import styles from "./manageData.module.css";
import SyncData from "../../../../components/SyncData/SyncData";
import ExportData from "../../../../components/ExportData/ExportData";

const ManageData = (props) => {
  //const [form, setForm] = useState({
  const [form] = useState({
    requestCompleteDownload: false,
    downloadPlaylistsAndListeningHistory: false,
    exportData: false,
  });
  const { path, url } = useRouteMatch();
  const history = useHistory();

  const closeHelp = () => {
    history.push("/dashboard/manage-data");
  };

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

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log("on submit", form);
  };

  return (
    <main className={styles.container}>
      <header role="banner">
        <h1>Manage Data</h1>
      </header>
      <div className={styles.div}>
        <SyncData /> Back up your latest Spotify data to the My Spotify Data
        database.
      </div>
      <div className={styles.div}>
        <ExportData /> Export your data from the My Spotify Data database.
      </div>
      <form onSubmit={onSubmit}>
        {/*
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
        */}

        {/* 
        <br />
        <section className={styles.buttonSection}>
          <button className={styles.buttonStyle} type="submit">
            Submit
          </button>
          <br />
        </section>
        */}
      </form>
      <Link to={`${url}/help`} className={styles.helpLink}>
        Manage data help
      </Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div className={styles.helpText}>
              Use Manage Data to view the latest Spotify changes to your
              account, or to export your songs and playlists to a CSV file in
              the Downloads directory of your computer.
            </div>
          </Modal>
        </Route>
      </Switch>
    </main>
  );
};

export default ManageData;
