// import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "./Homepage.css";
import Navigation from "../../components/Nav/Nav";
import { NavLink, Switch, Route } from "react-router-dom";
import { BackUpData } from "./views/BackUpData";
import { SearchMyPlaylists } from "./views/SearchMyPlaylists";
import { SearchMySongs } from "./views/SearchMySongs";
import { ViewListeningHistory } from "./views/ViewListeningHistory";

function Homepage(props) {
  console.log({ props });
  const { path } = props.match;
  return (
    <>
      <Navigation />
      <main className="home">
        <header role="banner">
          <h1 className="title-main">My Spotify Data</h1>
        </header>
        <section className="container">
          <nav className="list">
            <NavLink to={`${path}/backup-data`}>Back Up Data</NavLink>
            <NavLink to={`${path}/search-playlists`}>
              Search My Playlists
            </NavLink>
            <NavLink to={`${path}/search-songs`}>Search My Songs</NavLink>
            <NavLink to={`${path}/view-listening-history`}>
              View Listening History
            </NavLink>
          </nav>
          <Switch>
            <Route path={`${path}/backup-data`}>
              <BackUpData />
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
