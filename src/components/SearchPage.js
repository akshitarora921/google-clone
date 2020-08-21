import React from "react";
import { useParams, Link } from "react-router-dom";
// import useGoogleSearch from "../useGoogleSearch";
import Search from "./Search";
import Response from "../response";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../css/searchpage.css";

function SearchPage() {
  const { query } = useParams();

  //   Live API call
  //   const { data } = useGoogleSearch(q.slice(2));

  const data = Response;
  console.log(query, data);
  return (
    <div clasName="searchpage">
      <div className="searchpage-header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="logo"
            className="searchpage-logo"
          />
        </Link>
        <div className="searchpage-headerbody">
          <Search hideButtons />
          <div className="searchpage-options">
            <div className="searchpage-options-left">
              <div className="searchpage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage-option">
                <ImageIcon />
                <Link to="/image">Image</Link>
              </div>
              <div className="searchpage-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage-option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage-option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchpage-options-right">
              <div className="searchpage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchpage-results">
        <p className="searchpage-resultCount">
          About {data?.searchInformation.formattedTotalResults} results{" "}
          {data?.searchInformation.formattedSearchTime} for {query.slice(6)}
        </p>
        {data?.items.map((item) => (
          <div className="searchpage-result">
            <a href={item.link}>{item.displayLink}</a>
            <a className="searchpage-result-title" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className="searchpage-result-snippet">{item.snippet}</p>
          </div>
        ))}
      </div>
      {/* <h3>searching for {q.slice(2)}</h3> */}
    </div>
  );
}

export default SearchPage;
