import MovieList from "./MovieList";

function Box({ movieData, isBoxOpen, SetBoxOpen, setMovieDetail }) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => SetBoxOpen((s) => !isBoxOpen)}
      >
        {isBoxOpen ? "-" : "+"}
      </button>
      {isBoxOpen && (
        <MovieList movieData={movieData} setMovieDetail={setMovieDetail} />
      )}
    </div>
  );
}

export default Box;
