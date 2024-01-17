import React from "react";
import MovieList from "./MovieList";

function Box({ movieData }) {
  return (
    <div className="box">
      <button className="btn-toggle">-</button>
      <MovieList movieData={movieData} />
    </div>
  );
}

export default Box;
