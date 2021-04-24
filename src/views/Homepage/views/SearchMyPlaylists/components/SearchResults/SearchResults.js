import React from "react";
import styles from "./searchResults.module.css";

const SearchResults = (props) => {
  const { results } = props;
  /*
    We are rendering results twice, once per mobile view and once per desktop. In this scenario the performance cost is negligible. However, this could be improved by rendering only one of them by using matchMedia method to figure out if the user is on mobile or desktop view.
    See: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
  */
  return (
    <div>
      <div className={styles.mobileResults}>
        {results?.map(({ id, artist, track_name, playlist_name }) => {
          return (
            <div key={id} className={styles.mobileResultItem}>
              <div className={styles.mobileTrackInfo}>
                <span className={styles.mobileTrackName}>{track_name} </span> by{" "}
                {artist}{" "}
              </div>
              <span className={styles.mobilePlaylistName}>
                ({playlist_name})
              </span>
            </div>
          );
        })}
      </div>

      <table className={styles.table} cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Track</th>
            <th>Playlist</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.artist}</td>
                <td>{item.track_name}</td>
                <td>{item.playlist_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
