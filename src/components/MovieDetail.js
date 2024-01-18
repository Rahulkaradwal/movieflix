import React from "react";

function MovieDetail({ movieDetail, setWatchList, setMovieDetail }) {
  const handleWatchList = () => {
    console.log("add to list button clicked");
  };

  const handleCancel = () => {
    setMovieDetail([]);
  };

  return (
    <div className="movieDetail">
      <img src={movieDetail.Poster} />
      <h1>{movieDetail.Title}</h1>
      <h3>Released in :{movieDetail.Year}</h3>
      <p>IMDB Rating :{movieDetail.imdbRating}</p>
      <p>User Rating :{movieDetail.userRating}</p>
      <p>Runtime :{movieDetail.runtime} mins</p>
      <div className="movieDetail-btns">
        <button onClick={handleWatchList}>Add to Watchlist</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default MovieDetail;
