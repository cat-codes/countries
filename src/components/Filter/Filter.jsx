/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import "./Filter.css";
import { GetData } from "../DataProvider";
import { GetFilter } from "./FilterProvider";
import { GetSearch } from "../Search/SearchProvider";
import { GetThemeValue } from "../ThemeButton/ThemeProvider";

const Filter = () => {
  const { data, loading, error } = GetData();
  const { setFilteredRegion } = GetFilter();
  const { setSearchTerm } = GetSearch();
  const { theme } = GetThemeValue();

  if (loading) {
    return (
      <span
        className={theme === "dark" ? "loadingDark" : "loadingLight"}
      ></span>
    );
  }

  // Cereating an array of unique regions
  const uniqueRegions = Array.from(
    new Set(
      data
        ? data.map((country) => country.region)
        : console.log("uniqueRegions", error)
    )
  );

  // Sets a filter region
  const filterRegion = (region) => {
    setSearchTerm("");
    setFilteredRegion(region);
  };

  // Creates a dropdown menu with unique regions
  const dropdownMenu = uniqueRegions
    ? uniqueRegions.map((region, index) => (
        <li
          key={index}
          className={theme === "dark" ? "bg2Dark pDark" : "bg2Light pLight"}
          onClick={() => filterRegion(region)}
        >
          {region}
        </li>
      ))
    : console.log("dropdownMenu", error);

  // Toggles filter dropdown menu
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  // Closes filter menu after outside click
  const filterRef = useRef(null);
  const handleOutsideClick = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOpenDropdown(false);
    }
  };

  // Adds event listener to dow to detect clicks outside filter menu
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        className={theme === "dark" ? "svgThemeDark" : "svgThemeLight"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
        fill="#ffffff"
      />
    </svg>
  );

  return (
    <div id="filter" ref={filterRef}>
      <button
        className={
          theme === "dark"
            ? "buttonDark buttonDarkHover buttonDarkFocus"
            : "buttonLight buttonLightHover buttonLightFocus"
        }
        id="buttonFilter"
        type="button"
        onClick={toggleDropdown}
      >
        Filter by Region
        <div
          id={openDropdown ? "arrowOpen" : "arrowClosed"}
          className="svgTheme"
        >
          {arrow}
        </div>
      </button>
      <ul
        className={theme === "dark" ? "bg2Dark" : "bg2Light"}
        id={openDropdown ? "dropdownOpen" : "dropdownClosed"}
      >
        <li
          className={theme === "dark" ? "bg2Dark pDark" : "bg2Light pLight"}
          onClick={() => filterRegion(null)}
        >
          {" "}
          All{" "}
        </li>
        {dropdownMenu}
      </ul>
    </div>
  );
};

export default Filter;
