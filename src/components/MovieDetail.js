import React from "react";
const data = {
  imdbID: "tt1375666",
  Title: "Inception",
  Year: "2010",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  runtime: 148,
  imdbRating: 8.8,
  userRating: 10,
};
function MovieDetail() {
  console.log(data);
  return (
    <div className="movieDetail">
      <img src={data.Poster} />
      <h1>{data.Title}</h1>
      <h3>Released in :{data.Year}</h3>
      <p>IMDB Rating :{data.imdbRating}</p>
      <p>User Rating :{data.userRating}</p>
      <p>Runtime :{data.runtime} mins</p>
      <button>Add to Watchlist</button>
    </div>
  );
}

export default MovieDetail;
