import MovieList from "./MovieList";

function Box({ movieData, isBoxOpen, SetBoxOpen }) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => SetBoxOpen((s) => !isBoxOpen)}
      >
        {isBoxOpen ? "-" : "+"}
      </button>
      {isBoxOpen && <MovieList movieData={movieData} />}
    </div>
  );
}

export default Box;
