import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleClick() {
    if (city.trim() !== "") {
      onSearch(city);
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;