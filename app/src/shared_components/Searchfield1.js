import React, { useRef, useState } from "react";
import "./Searchfield1.css";
import { Link } from "react-router-dom";

function Searchfield1(props) {
  const [searchText, setSearchText] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const inputRef = useRef(null);

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = props.data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSearchText = () => {
    setFilteredData([]);
    setSearchText("");
  };

  const handleInputFocus = () => {
    setIsPlaceholderVisible(false);
  };

  const handleInputBlur = () => {
    const inputValue = inputRef.current.value;
    setIsPlaceholderVisible(inputValue === "");
  };

  return (
    <>
      <div className="search-column">
        <div className="wrapp-search-bar">
          <input
            className="search-bar"
            type="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              handleFilter(e);
            }}
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
      </div>
      {filteredData.length != 0 && (
        <div className="result-wrapper">
          <div className="dataResult">
            {filteredData.slice(0, 5).map((value, key) => {
              return (
                <Link
                  to="/"
                  className="dataItem"
                  key={key}
                  onClick={handleSearchText}
                >
                  <h5 className="data-title">{value.title}</h5>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Searchfield1;
