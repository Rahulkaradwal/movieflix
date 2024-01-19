import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import MovieDetail from "./MovieDetail";

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
