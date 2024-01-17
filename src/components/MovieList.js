import React from "react";
import Movie from "./Movie";

function MovieList({ movieData }) {
  return (
    <ul className="list">
      {movieData?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
