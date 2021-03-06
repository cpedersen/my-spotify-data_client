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
            </li>
            {/*
            <li>
              Curious to explore interesting characteristics about your songs
              (e.g., danceability, energy, loudness)?
            </li>
            */}
            <li className={styles.color2}>
              Want a way to view your song listening history?{" "}
            </li>

            <li className={styles.color3}>
              Afraid of losing song lists you spent hours compiling?
            </li>
          </ul>
          <section className={styles.loginBlock}>
            <p className={styles.paragraph}>
              Try it out! When you enter your Spotify user credentials, you are
              redirected to Spotify's official login.
            </p>
            <p className={styles.paragraph}>
              Click the button below to get started...
            </p>
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
