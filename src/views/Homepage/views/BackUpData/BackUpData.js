import React from "react";
import styles from "./backUpData.module.css";

const BackUpData = (props) => {
  return (
    <main className={styles.container} role="backup">
      <header role="banner">
        <h1>Back Up Data</h1>
      </header>
      <form action="">
        <input type="checkbox" />
        <label htmlFor="male">
          Request a complete download of your data from Spotify (e.g.,
          playlists, search queries, followers, streaming history).
        </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="male">
          Download your playlists and listening history to the My Spotify Data
          database.
        </label>
        <br />
        <input type="checkbox" />
        <label htmlFor="male">
          Export your data from the My Spotify Data database.
        </label>
        <br />
        <section className="button-section">
          <button className="submitButton" type="submit">
            Submit
          </button>
          <br />
          {/*<button className="resetButton">Reset</button>*/}
        </section>
      </form>
    </main>
  );
};

export default BackUpData;
