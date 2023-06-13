import React, { useRef, useState } from "react";
import "./Searchfield1.css";

function App(props) {
  const [searchText, setSearchText] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const inputRef = useRef(null);

  function handleSearchText() {
    console.log(searchText);
    setSearchText("");
  }

  const handleInputFocus = () => {
    setIsPlaceholderVisible(false);
  };

  const handleInputBlur = () => {
    const inputValue = inputRef.current.value;
    setIsPlaceholderVisible(inputValue === "");
  };

  return (
    <>
      <div className="wrapp-search-bar">
        <input
          className="search-bar"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={isPlaceholderVisible ? props.placeholder : ""}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
        />
        <button className="search-button" onClick={handleSearchText}>
          <img
            src="../images/search-icon.png"
            className="search-bar-icon"
            alt="search"
          />
        </button>
      </div>
    </>
  );
}

export default App;
