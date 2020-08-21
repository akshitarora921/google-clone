import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "../css/search.css";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    console.log(input);
    history.push(`/search/query=${input}`);
  };
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon style={{ color: "#9aa0a6" }} />
      </div>
      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            className="search-button-hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Search
          </Button>
          <Button className="search-button-hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
