import React from "react";
import Box from "./Box";

function Main({ movieData }) {
  return (
    <div className="main">
      <Box movieData={movieData} />
      <Box />
    </div>
  );
}

export default Main;
