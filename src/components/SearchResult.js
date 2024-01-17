import React from "react";

function SearchResult({ searchInput, movieData }) {
  return (
    <div className="num-results">
      Found {searchInput ? movieData.length : 0} top results
    </div>
  );
}

export default SearchResult;
