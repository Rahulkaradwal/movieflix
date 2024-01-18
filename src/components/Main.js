import React from "react";
import Box from "./Box";
import WatchedBox from "./WatchedBox";

function Main({
  watchList,
  setWatchList,
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
        setWatchList={setWatchList}
        setMovieDetail={setMovieDetail}
        movieData={movieData}
        isBoxOpen={isBoxOpen}
        SetBoxOpen={SetBoxOpen}
      />
      <WatchedBox
        watchList={watchList}
        setMovieDetail={setMovieDetail}
        movieDetail={movieDetail}
        isWatchedBoxOpen={isWatchedBoxOpen}
        setWatchedBoxOpen={setWatchedBoxOpen}
      />
    </div>
  );
}

export default Main;
