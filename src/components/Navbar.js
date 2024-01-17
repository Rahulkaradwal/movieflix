import React from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

function Navbar({ setSearchInput, movieData }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span>📽️</span>
        <h1>MovieFlix</h1>
      </div>
      <div>
        <Search setSearchInput={setSearchInput} />
      </div>
      <SearchResult movieData={movieData} />
    </div>
  );
}

export default Navbar;
