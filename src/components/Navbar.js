import React from "react";
import Search from "./Search";

function Navbar({ setSearchInput }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span>📽️</span>
        <h1>MovieFlix</h1>
      </div>
      <div>
        <Search setSearchInput={setSearchInput} />
      </div>
      <div className="num-results">Found X top results</div>
    </div>
  );
}

export default Navbar;
