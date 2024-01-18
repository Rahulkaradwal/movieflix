import React from "react";

function WatchedSummary({ watchedData }) {
  const iRatingAvg =
    watchedData.reduce((curr, movie) => curr + movie.imdbRating, 0) /
    watchedData.length;
  const uRatingAvg =
    watchedData.reduce((curr, movie) => curr + movie.userRating, 0) /
    watchedData.length;

  const watchedTimeAvg =
    watchedData.reduce((curr, movie) => curr + movie.runtime, 0) /
    watchedData.length;

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedData.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{iRatingAvg || 0}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{uRatingAvg || 0}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watchedTimeAvg || 0} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
