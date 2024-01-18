import React from "react";
import Box from "./Box";
import WatchedBox from "./WatchedBox";

function Main({
  setMovieDetail,
  movieData,
  isBoxOpen,
  SetBoxOpen,
  isWatchedBoxOpen,
  setWatchedBoxOpen,
  movieDetail,
}) {
  return (
    <div className="main">
      <Box
        setMovieDetail={setMovieDetail}
        movieData={movieData}
        isBoxOpen={isBoxOpen}
        SetBoxOpen={SetBoxOpen}
      />
      <WatchedBox
        movieDetail={movieDetail}
        isWatchedBoxOpen={isWatchedBoxOpen}
        setWatchedBoxOpen={setWatchedBoxOpen}
      />
    </div>
  );
}

export default Main;
