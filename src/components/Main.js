import React from "react";
import Box from "./Box";
import WatchedBox from "./WatchedBox";

function Main({
  movieData,
  isBoxOpen,
  SetBoxOpen,
  isWatchedBoxOpen,
  setWatchedBoxOpen,
}) {
  return (
    <div className="main">
      <Box
        movieData={movieData}
        isBoxOpen={isBoxOpen}
        SetBoxOpen={SetBoxOpen}
      />
      <WatchedBox
        isWatchedBoxOpen={isWatchedBoxOpen}
        setWatchedBoxOpen={setWatchedBoxOpen}
      />
    </div>
  );
}

export default Main;
