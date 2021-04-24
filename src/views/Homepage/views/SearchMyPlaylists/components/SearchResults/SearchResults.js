import React from "react";
import styles from "./searchResults.module.css";

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
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
