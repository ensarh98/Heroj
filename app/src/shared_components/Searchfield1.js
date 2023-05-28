import React, { useState } from "react";
import "./Searchfield1.css";
import { BiSearch } from "react-icons/bi";

function App() {
  const [searchText, setSearchText] = useState("");

  function handleSearchText() {
    console.log(searchText);
    setSearchText("");
  }

  return (
    <>
      <div className="wrapp-search-bar">
        <input
          className="search-bar"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Unesite simptom"
        />
        <button className="search-button" onClick={handleSearchText}>
          <BiSearch className="search-bar-icon" />
        </button>
      </div>
    </>
  );
}

export default App;
