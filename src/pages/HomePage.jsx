/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./HomePage.css";
import Header from "../components/Header/Header.jsx";
import Search from "../components/Search/Search.jsx";
import Filter from "../components/Filter/Filter.jsx";
import { GetData } from "../components/DataProvider";
import { GetFilter } from "../components/Filter/FilterProvider";
import { GetSearch } from "../components/Search/SearchProvider";
import { Link } from "react-router-dom";
import { GetThemeValue } from "../components/ThemeButton/ThemeProvider";

const HomePage = () => {
  const { data, loading, error } = GetData();
  const { filteredRegion } = GetFilter();
  const { searchTerm, searchError, setSearchError } = GetSearch();
  const { theme } = GetThemeValue();

  let gridItems;

  useEffect(() => {
    setSearchError(false);
  }, [searchTerm, filteredRegion, setSearchError]);

  if (loading)
    return (
      <div className={theme === "dark" ? "loadingDark" : "loadingLight"}>
        Loading...
      </div>
    );

  let filteredData = [];

  if (searchTerm) {
    filteredData = data.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredData.length === 0) {
      setSearchError(true);
    }
  } else if (filteredRegion) {
    filteredData = data.filter((country) => country.region === filteredRegion);
  } else {
    filteredData = data;
  }

  gridItems = filteredData
    ? filteredData.map((country, index) => (
        <section
          key={index}
          className={
            theme === "dark" ? "bg2Dark gridItem" : "bg2Light gridItem"
          }
        >
          <Link
            to={{ pathname: `/${country.name}`, state: { country: country } }}
          >
            <img id="imgFlag" src={country.flag} alt={`${country.name} Flag`} />
            <section className="summary">
              <h2
                className={
                  theme === "dark" ? "h2Dark h2Home" : "h2Light h2Home"
                }
              >
                {country.name ? country.name : "n/a"}
              </h2>
              <p className={theme === "dark" ? "pDark pHome" : "pLight pHome"}>
                <span className="bold">Population: </span>
                {country.population ? country.population : "n/a"}
              </p>
              <p className={theme === "dark" ? "pDark pHome" : "pLight pHome"}>
                <span className="bold">Region: </span>
                {country.region ? country.region : "n/a"}
              </p>
              <p className={theme === "dark" ? "pDark pHome" : "pLight pHome"}>
                <span className="bold">Capital: </span>
                {country.capital ? country.capital : "n/a"}
              </p>
            </section>
          </Link>
        </section>
      ))
    : console.log("gridItems", error);

  return (
    <div id="containerHome">
      <Header />
      <Search />
      <Filter />
      <section id="grid">
        {searchError ? (
          <p
            className={theme === "dark" ? "pDark pHome" : "pLight pHome"}
            id="errorMessage"
          >
            No Results.
          </p>
        ) : (
          gridItems
        )}
      </section>
    </div>
  );
};

export default HomePage;
