import React, { useEffect, useRef, useState } from "react";
import "./Searchfield1.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Searchfield1(props) {
  const [searchText, setSearchText] = useState("");
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      props.setShowCases(false);
    } else {
      props.setShowCases(true);
    }
  }, [data]);

  const onValueChange = (str) => {
    setSearchText(str);
    if (str) {
      axios.get(`http://localhost:8000/template/${str}/search/`).then((res) => {
        setData(res.data);
      });
    } else {
      setData([]);
    }
  };

  const handleSearchText = () => {
    setData([]);
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
            type="text"
            value={searchText}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder={isPlaceholderVisible ? props.placeholder : ""}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
          />
          {searchText == "" ? (
            <span className="search-button">
              <img
                src="../images/search-icon.png"
                className="search-bar-icon"
                alt="search"
              />
            </span>
          ) : (
            <span className="search-button" onClick={handleSearchText}>
              <img
                src="../images/iks.png"
                className="search-bar-icon"
                alt="search"
              />
            </span>
          )}
        </div>
      </div>
      {data.length != 0 && (
        <div className="result-wrapper">
          <div className="dataResult fade-in">
            {data.map((value, key) => {
              return (
                <Link
                  to={`http://localhost:3000/template/${value.case.id}`}
                  className="dataItem"
                  key={key}
                  onClick={handleSearchText}
                >
                  <h5 className="data-title">{`${key+1}. ${value.case.title}`}</h5>
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
