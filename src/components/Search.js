import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search as GoogleSearch } from "../store/rootSlice";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import "../css/search.css";

function Search({ hideButtons = false, value = "" }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch(GoogleSearch(input));
    history.push(`/search/query=${input}`);
  };
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input
          type="text"
          value={input.length > 0 ? input : value}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon
          className="search-input-micIcon"
          style={{ color: "#9aa0a6" }}
        />
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
