import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import "../css/home.css";
import { Avatar } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="logo"
        />
        <div className="home-input-container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
