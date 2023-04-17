import "../css/SearchBarWithButton.css"

import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function SearchBarWithButton() {
    return (
        <div className={"container-fluid d-flex justify-content-center mt-4"}>
            <SearchBar id={"SearchBar"}/>
            <SearchButton id={"SearchButton"}/>
        </div>
    );
}

export default SearchBarWithButton;
