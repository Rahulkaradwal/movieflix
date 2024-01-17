import React from "react";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span>📽️</span>
        <h1>MovieFlix</h1>
      </div>
      <div>
        <input className="search"></input>
      </div>
      <div className="num-results">Found X top results</div>
    </div>
  );
}

export default Navbar;
