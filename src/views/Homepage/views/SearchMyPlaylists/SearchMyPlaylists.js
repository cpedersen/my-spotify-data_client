import { useState, useEffect } from "react";
import styles from "./searchMyPlaylists.module.css";
import Nav from "../../../../components/Nav/Nav";
import { Filters } from "./components/Filters";
import { Search } from "./components/Search";
import { SearchResults } from "./components/SearchResults";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Modal from "react-modal";
import { withAsync } from "../../../../helpers";
import {
  useUserActionsContext,
  useUserContext,
} from "../../../../context/UserContext";
import spotify from "../../../../services/spotify";
import config from "../../../../config";

function SearchMyPlaylists(props) {
  const [searchBy, setSearchBy] = useState("title");
  const [query, setQuery] = useState("");
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { user } = useUserContext();
  const { refreshToken } = useUserActionsContext();
  const closeHelp = () => {
    history.push("/dashboard/search-playlists");
  };

  const onSearch = async (e) => {
    e?.preventDefault();
    console.log({
      query,
      searchBy,
      user,
    });
    // Perform api request to search
    // const results = searchApi.search()

    // &spotify_user=${user.id}

    const { response, error } = await withAsync(() =>
      fetch(
        `${process.env.REACT_APP_BASE_URL}/api/tracks?query=${query}&searchBy=${searchBy}&spotify_user=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json())
    );

    console.log({ response, error });
    if (error) {
      console.error(error);
      return;
    }
    /*const songs = response.data.map((song) => {
      const playlists = playlistSongs
        .reduce((playlists, { playlist_name, track }) => {
          // This is comparing the track from the tracks table with the
          // tracks from the playlists
          if (track.id === song.track_id) {
            playlists.push(playlist_name);
          }
          return playlists;
        }, [])
        .join(", ");

      song.playlistName = playlists;
      return song;
    });*/
    setSongs(response.data);
  };

  const onQueryChange = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    // fetchUserPlaylists();
    onSearch();
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>Search My Playlists</h1>
        <p>Username: {user.id}</p>
      </header>

      <main>
        <form className={styles.mainContent} role="search-playlists">
          <section className={styles.searchFieldsContainer}>
            <Search
              query={query}
              onQueryChange={onQueryChange}
              searchBy={searchBy}
              setSearchBy={setSearchBy}
              onSearch={onSearch}
            />
          </section>
          <section className={styles.searchResultsContainer}>
            <SearchResults results={songs} />
          </section>
        </form>
      </main>

      <Link to={`${url}/help`}>Search my playlists help</Link>
      <Switch>
        <Route path={`${path}/help`}>
          <Modal
            isOpen={true}
            onRequestClose={closeHelp}
            style={{ overlay: { zIndex: 20 } }}
          >
            <div className={styles.helpText}>
              Use Search My Playlists to locate the playlists where your songs
              are saved. The initial display will show you all of your songs.
              You can search by song name or by the Spotify url.
            </div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default SearchMyPlaylists;
