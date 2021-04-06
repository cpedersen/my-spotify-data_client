import { Link } from "react-router-dom";
import "./Landing.css";
import Nav from "../../components/Nav/Nav";

function Landing(props) {
  return (
    <>
      <Nav />
      <main role="login">
        <header role="banner">
          <h1 className="title-main">My Spotify Data</h1>
        </header>
        <section className="container">
          <ul className="list">
            <li>
              Afraid of losing song lists and listening history you spent hours
              developing?
              <p>Click 'Back Up Data'</p>
            </li>
            <li>
              Want a way to view your song listening history?{" "}
              <p>Click 'View Listening History'</p>
            </li>
            <li>
              Ever wonder if a particular song is in any of your playlists?
              <p>Click 'Search My Playlists'</p>
            </li>
            <li>
              Curious to explore interesting characteristics about your songs
              (e.g., danceability, energy, loudness)?
              <p>Click 'Search My Songs'</p>
            </li>
          </ul>
          <section className="login-block">
            <p>Log into Spotify to get started...</p>
            <button aria-label="Login with Spotify credentials">
              Go for it
            </button>
          </section>
        </section>
      </main>
      <footer role="content-info"></footer> 
    </>
  );
}

export default Landing;
