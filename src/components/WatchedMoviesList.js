import React from "react";
import Watched from "./Watched";

function WatchedMoviesList({ watchedData }) {
  return (
    <ul className="list">
      {watchedData.map((movie) => (
        <Watched key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
