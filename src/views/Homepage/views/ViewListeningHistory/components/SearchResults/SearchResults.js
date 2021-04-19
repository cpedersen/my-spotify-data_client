import React from "react";

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
      <h2>Songs</h2>
      {results.map((item) => {
        return (
          <div key={`${item.track.id}-${item.played_at}`}>
            Track: {item.track.name} (Played At: {item.played_at})
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
