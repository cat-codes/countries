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

const HomePage = () => {
  const { data, loading } = GetData();
  const { filteredRegion } = GetFilter();
  const { searchTerm, searchError, setSearchError } = GetSearch();

  let gridItems;

  useEffect(() => {
    setSearchError(false);
  }, [searchTerm, filteredRegion]);

  if (loading) return <div className="loading">Loading...</div>;

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

  gridItems = filteredData.map((country, index) => (
    <section key={index} className="gridItem bg2">
      <Link to={{ pathname: `/${country.name}`, state: { country: country } }}>
        <img id="imgFlag" src={country.flag} alt={`${country.name} Flag`} />
        <section className="summary">
          <h2 className="h2Home">{country.name}</h2>
          <p className="pHome">
            <span className="bold">Population: </span>
            {country.population}
          </p>
          <p className="pHome">
            <span className="bold">Region: </span>
            {country.region}
          </p>
          <p className="pHome">
            <span className="bold">Capital: </span>
            {country.capital}
          </p>
        </section>
      </Link>
    </section>
  ));

  return (
    <div id="containerHome">
      <Header />
      <Search id="search" />
      <Filter id="filter" />
      <section id="grid">
        {searchError ? (
          <p className="pHome" id="errorMessage">
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
