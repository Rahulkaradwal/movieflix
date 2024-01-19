import React, { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import Watched from "./Watched";
import MovieDetail from "./MovieDetail";

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

function WatchedBox({
  setMovieDetail,
  watchList,
  isWatchedBoxOpen,
  setWatchedBoxOpen,
  movieDetail,
  setWatchList,
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setWatchedBoxOpen(!isWatchedBoxOpen)}
      >
        {isWatchedBoxOpen ? "-" : "+"}
      </button>

      {isWatchedBoxOpen && movieDetail.length !== 0 ? (
        <MovieDetail
          watchList={watchList}
          movieDetail={movieDetail}
          setWatchList={setWatchList}
          setMovieDetail={setMovieDetail}
        />
      ) : (
        <WatchedSummary watchedData={watchList} />
      )}
      {isWatchedBoxOpen && movieDetail.length === 0 && (
        <WatchedMoviesList
          watchedData={watchList}
          setWatchList={setWatchList}
        />
      )}
    </div>
  );
}

export default WatchedBox;
