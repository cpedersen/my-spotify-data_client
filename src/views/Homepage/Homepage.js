// import React, { Component } from "react";
//import { Link } from "react-router-dom";
import styles from "./homepage.module.css";
import Navigation from "../../components/Nav/Nav";
import { NavLink, Switch, Route } from "react-router-dom";
import { ManageData } from "./views/ManageData";
import { SearchMyPlaylists } from "./views/SearchMyPlaylists";
import { SearchMySongs } from "./views/SearchMySongs";
import { ViewListeningHistory } from "./views/ViewListeningHistory";

function Homepage(props) {
  console.log({ props });
  const { path } = props.match;
  return (
    <>
      <Navigation />
      <main>
        <header role="banner">
          <h1 className={styles.title}>My Spotify Data</h1>
        </header>
        <section>
          <nav className={styles.list}>
            <NavLink
              to={`${path}/search-playlists`}
              className={styles.navLink}
              activeClassName={styles.activeTab}
            >
              Search My Playlists
            </NavLink>

            {/*
            <NavLink
              to={`${path}/search-songs`}
              className={styles.navLink}
              activeClassName={styles.activeTab}
            >
              Search My Songs
            </NavLink>
            */}

            <NavLink
              to={`${path}/view-listening-history`}
              className={styles.navLink}
              activeClassName={styles.activeTab}
            >
              View Listening History
            </NavLink>
            <NavLink
              to={`${path}/manage-data`}
              className={styles.navLink}
              activeClassName={styles.activeTab}
            >
              Manage Data
            </NavLink>
          </nav>
          <Switch>
            <Route path={`${path}/manage-data`}>
              <ManageData />
            </Route>
            <Route path={`${path}/search-playlists`}>
              <SearchMyPlaylists />
            </Route>
            <Route path={`${path}/search-songs`}>
              <SearchMySongs />
            </Route>
            <Route path={`${path}/view-listening-history`}>
              <ViewListeningHistory />
            </Route>
          </Switch>
        </section>
      </main>
      <footer></footer> 
    </>
  );
}

export default Homepage;
