import React from "react";
import Watched from "./Watched";

function WatchedMoviesList({ watchedData }) {
  return (
    <ul className="list">
      {watchedData.map((movie) => (
        <Watched movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
