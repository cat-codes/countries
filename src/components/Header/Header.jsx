/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import ThemeButton from "../ThemeButton/ThemeButton";
import { GetFilter } from "../Filter/FilterProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { setFilteredRegion } = GetFilter();

  return (
    <nav id="containerHeader" className="bg2">
      <Link to="/home" onClick={() => setFilteredRegion(null)}>
        <h1>Where in the world?</h1>
      </Link>
      <ThemeButton />
    </nav>
  );
};

export default Header;
