//import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useHistory } from "react-router-dom";
import styles from "./landing.module.css";

function Landing(props) {
  const history = useHistory();

  const onLogIn = () => {
    // history.push("/dashboard/search-playlists");
  };

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
              Ever wonder if a particular song is in any of your playlists?
              <p>Click 'Search My Playlists'</p>
            </li>
            <li>
              Curious to explore interesting characteristics about your songs
              (e.g., danceability, energy, loudness)?
              <p>Click 'Search My Songs'</p>
            </li>
            <li>
              Want a way to view your song listening history?{" "}
              <p>Click 'View Listening History'</p>
            </li>

            <li>
              Afraid of losing song lists and listening history you spent hours
              developing?
              <p>Click 'Back Up Data'</p>
            </li>
          </ul>
          <section className="login-block">
            <p>Log into Spotify to get started...</p>
            <a
              href={`${process.env.REACT_APP_API_BASE_URL}/login`}
              aria-label="Login with Spotify credentials"
              className={styles.buttonStyle}
            >
              Go for it
            </a>
          </section>
        </section>
      </main>
      <footer role="content-info"></footer> 
    </>
  );
}

export default Landing;
