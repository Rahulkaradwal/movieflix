import React from "react";
import Movie from "./Movie";

function MovieList({ movieData, setMovieDetail }) {
  return (
    <ul className="list">
      {movieData?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          setMovieDetail={setMovieDetail}
        />
      ))}
    </ul>
  );
}

export default MovieList;
