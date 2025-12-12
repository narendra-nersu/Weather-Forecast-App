import { useState } from "react";
import searchIcon from "../images/search.png";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") onSearch(city);
  };

  return (
    <div className="searchBar">
      <form className="searchBarParentDiv" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputfield"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <img
          src={searchIcon}
          alt="search icon"
          className="searchIcon icon"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default SearchBar;
