import React from "react";

function MovieDetail({ movieDetail }) {
  return (
    <div className="movieDetail">
      <img src={movieDetail.Poster} />
      <h1>{movieDetail.Title}</h1>
      <h3>Released in :{movieDetail.Year}</h3>
      <p>IMDB Rating :{movieDetail.imdbRating}</p>
      <p>User Rating :{movieDetail.userRating}</p>
      <p>Runtime :{movieDetail.runtime} mins</p>
      <div className="movieDetail-btns">
        <button>Add to Watchlist</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default MovieDetail;
