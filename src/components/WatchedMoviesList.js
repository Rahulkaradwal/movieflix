import React from "react";
import Watched from "./Watched";

function WatchedMoviesList({ watchedData, setWatchList }) {
  return (
    <ul className="list">
      {watchedData.map((movie) => (
        <Watched
          key={movie.imdbID}
          movie={movie}
          setWatchList={setWatchList}
          watchList={watchedData}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
