/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import ThemeButton from "../ThemeButton/ThemeButton";
import { GetFilter } from "../Filter/FilterProvider";
import { Link } from "react-router-dom";
import { GetThemeValue } from "../ThemeButton/ThemeProvider";

const Header = () => {
  const { setFilteredRegion } = GetFilter();
  const { theme } = GetThemeValue();

  return (
    <div
      id="containerHeader"
      className={theme === "dark" ? "bg2Dark" : "bg2Light"}
    >
      <nav>
        <Link to="/home" onClick={() => setFilteredRegion(null)}>
          <h1 className={theme === "dark" ? "h1Dark" : "h1Light"}>
            Where in the world?
          </h1>
        </Link>
        <ThemeButton />
      </nav>
    </div>
  );
};

export default Header;
