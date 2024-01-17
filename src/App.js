import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { useEffect, useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

function App() {
  const [isBoxOpen, SetBoxOpen] = useState(true);
  const [isWatchedBoxOpen, setWatchedBoxOpen] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [movieData, setMovieData] = useState([]);

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
      <Navbar setSearchInput={setSearchInput} movieData={movieData} />
      <Main
        movieData={movieData}
        isBoxOpen={isBoxOpen}
        SetBoxOpen={SetBoxOpen}
        isWatchedBoxOpen={isWatchedBoxOpen}
        setWatchedBoxOpen={setWatchedBoxOpen}
      />
    </div>
  );
}

export default App;
