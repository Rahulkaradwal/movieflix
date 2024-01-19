import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";
import Box from "./components/Box";
import WatchedBox from "./components/WatchedBox";
import MovieList from "./components/MovieList";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt1375668",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [isBoxOpen, SetBoxOpen] = useState(true);
  const [isWatchedBoxOpen, setWatchedBoxOpen] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);

  const [movieDetail, setMovieDetail] = useState([]);

  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (searchInput === "") {
      setMovieData(tempMovieData);
    } else {
      if (searchInput === "") return;

      let search = tempMovieData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setMovieData(search);
    }
  }, [searchInput]);
  return (
    <div>
      <Navbar>
        <div className="logo">
          <span>📽️</span>
          <h1>MovieFlix</h1>
        </div>
        <div>
          <Search setSearchInput={setSearchInput} />
        </div>
        <SearchResult movieData={movieData} searchInput={searchInput} />
      </Navbar>
      <Main>
        <Box isBoxOpen={isBoxOpen} SetBoxOpen={SetBoxOpen}>
          <MovieList movieData={movieData} setMovieDetail={setMovieDetail} />
        </Box>
        <WatchedBox
          setWatchList={setWatchList}
          watchList={watchList}
          setMovieDetail={setMovieDetail}
          movieDetail={movieDetail}
          isWatchedBoxOpen={isWatchedBoxOpen}
          setWatchedBoxOpen={setWatchedBoxOpen}
        />
      </Main>
    </div>
  );
}

export default App;
