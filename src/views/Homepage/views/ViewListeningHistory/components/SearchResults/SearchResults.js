import React from "react";
import styles from "../../../SearchMyPlaylists/components/SearchResults/searchResults.module.css";
const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
      <table className={styles.table} cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>Track</th>
            <th>Played At</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => {
            return (
              <tr key={`${item.track.id}-${item.played_at}`}>
                <td>{item.track.name}</td>
                <td>{new Date(item.played_at).toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
