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
import songsData from "../../../../fixtures/songs";
import {
  useUserActionsContext,
  useUserContext,
} from "../../../../context/UserContext";
import spotify from "../../../../services/spotify";
function SearchMyPlaylists(props) {
  const [searchBy, setSearchBy] = useState("text");
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [filters, setFilters] = useState({});
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { user } = useUserContext();
  const { refreshToken } = useUserActionsContext();
  const closeHelp = () => {
    history.push("/dashboard/search-playlists");
  };

  const onSearch = (e) => {
    e.preventDefault();
    console.log({
      query,
      searchBy,
    });
    // Perform api request to search
    // const results = searchApi.search()
  };

  const onQueryChange = (value) => {
    setQuery(value);
  };

  const fetchTracksForPlaylists = async (playlists) => {
    const { response, error } = await withAsync(() =>
      Promise.all(
        playlists.map((playlist) =>
          spotify.getPlaylist(playlist.id, {
            limit: 500,
          })
        )
      )
    );
    console.log({ response, error });
    const tracks = response
      .map(({ body }) => {
        const { id: playlistId, name: playlistName, tracks } = body;
        const { items } = tracks;
        return items.map((item) => {
          item.playlistName = playlistName;
          item.playlistId = playlistId;
          return item;
        });
      })
      .flat();

    console.log({ tracks });
    setSongs(tracks);
  };

  const fetchUserPlaylists = async () => {
    const { response, error } = await withAsync(() =>
      spotify.getUserPlaylists(user.id)
    );

    if (error && error.statusCode === 401) {
      const refreshed = await refreshToken();
      if (refreshed) fetchUserPlaylists();
      return;
    }

    console.log({ response, error });

    //BUG: The following line is failing with
    // "Cannot read property 'body' of null"
    // because "Failed to load resource: the server
    // responded with a status of 401"

    const { items } = response.body;
    fetchTracksForPlaylists(items);

    /* if (items.length) {
      setPlaylists(items);
    } */

    /*try {
      console.log({ user });
      const response = await spotify.getUserPlaylists(user.id);
      console.log({ response });
    } catch (error) {
      console.error(error);
    }*/
  };

  useEffect(() => {
    fetchUserPlaylists();
  }, []);

  return (
    <>
      <Nav />
      <header role="banner">
        <h1>Search My Playlists</h1>
        <p>{user.id}</p>
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
            <div>search playlists help</div>
          </Modal>
        </Route>
      </Switch>
    </>
  );
}

export default SearchMyPlaylists;
