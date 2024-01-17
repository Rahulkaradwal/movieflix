import React from "react";

function Search({ setSearchInput }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return <input className="search" onChange={handleChange}></input>;
}

export default Search;
