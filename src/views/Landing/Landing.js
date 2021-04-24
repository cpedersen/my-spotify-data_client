import Nav from "../../components/Nav/Nav";
import styles from "./landing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
const SpotifyIcon = <FontAwesomeIcon icon={faSpotify} />;

function Landing(props) {
  return (
    <>
      <Nav hideLogo={true} />
      <main role="textbox">
        <header role="banner">
          <h1 className={styles.titleMain}>My Spotify Data</h1>
        </header>
        <section className="container">
          <ul>
            <li className={styles.color1}>
              Ever wonder if a particular song is in any of your playlists?
              {/*<p>Click 'Search My Playlists'</p>*/}
            </li>
            {/*
            <li>
              Curious to explore interesting characteristics about your songs
              (e.g., danceability, energy, loudness)?
              <p>Click 'Search My Songs'</p>
            </li>
            */}
            <li className={styles.color2}>
              Want a way to view your song listening history?{" "}
              {/*<p>Click 'View Listening History'</p>*/}
            </li>

            <li className={styles.color3}>
              Afraid of losing song lists you spent hours compiling?
              {/*<p>Click 'Manage Data'</p>*/}
            </li>
          </ul>
          <section className="login-block">
            <p>
              Try it out! Use 't9dgdc5lr7uxj9eja1yze5i1m' for the Spotify login
              and 'Thinkful2021!' for the password.
            </p>
            {/*<p>Log into Spotify now to get started...</p>*/}
            <p>Click the button below to get started...</p>
            <a
              className={styles.spotifyButton}
              role="navigation"
              href={`${process.env.REACT_APP_BASE_URL}/login`}
              aria-label="Login with Spotify credentials"
            >
              {SpotifyIcon} Go for it
            </a>
          </section>
        </section>
      </main>
      <footer></footer> 
    </>
  );
}

export default Landing;
