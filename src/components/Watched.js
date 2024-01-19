import React from "react";

function Watched({ movie, setWatchList, watchList }) {
  const handleRemove = () => {
    let newWatchList = watchList.filter((val) => val.imdbID !== movie.imdbID);
    setWatchList(newWatchList);
  };

  return (
    <>
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div className="watchedList">
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
          <button className="remove-btn" onClick={handleRemove}>
            ❌
          </button>
        </div>
      </li>
    </>
  );
}

export default Watched;
