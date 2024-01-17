import React from "react";
import Box from "./Box";
import WatchedBox from "./WatchedBox";

function Main({ movieData }) {
  return (
    <div className="main">
      <Box movieData={movieData} />
      <WatchedBox />
    </div>
  );
}

export default Main;
