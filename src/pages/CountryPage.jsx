/* eslint-disable no-unused-vars */
import React from "react";
import "./CountryPage.css";
import Header from "../components/Header/Header.jsx";
import BackButton from "../components/BackButton/BackButton.jsx";
import { useParams } from "react-router-dom";
import { GetData } from "../components/DataProvider.jsx";
import { GetThemeValue } from "../components/ThemeButton/ThemeProvider";

const CountryPage = () => {
  const { data } = GetData();
  const { clickedCountry } = useParams();
  const { theme } = GetThemeValue();
  const selectedCountry = data.find((item) => item.name === clickedCountry);

  return (
    <div id="containerAll">
      <Header />
      <BackButton />
      <div id="contents">
        <img id="flagInfo" src={selectedCountry.flag} />
        <section id="info">
          <h2 className={theme === "dark" ? "h2Dark h2Info" : "h2Light h2Info"}>
            {selectedCountry.name}
          </h2>
          <p className={theme === "dark" ? "pDark pInfo" : "pLight pInfo"}>
            <span className="bold">Native Name: </span>
            {selectedCountry.nativeName
              ? selectedCountry.nativeName[
                  Object.keys(selectedCountry.nativeName)[0]
                ].official
              : "n/a"}
            <br />
            <span className="bold">Population: </span>
            {selectedCountry.population ? selectedCountry.population : "n/a"}
            <br />
            <span className="bold">Region: </span>
            {selectedCountry.region ? selectedCountry.region : "n/a"}
            <br />
            <span className="bold">Sub Region: </span>
            {selectedCountry.subregion ? selectedCountry.subregion : "n/a"}
            <br />
            <span className="bold">Capital: </span>
            {selectedCountry.capital ? selectedCountry.capital : "n/a"}
            <br />
            <span className="bold">Top Level Domain: </span>
            {selectedCountry.tld ? selectedCountry.tld : "n/a"}
            <br />
            <span className="bold">Currencies: </span>
            {selectedCountry.currencies
              ? Object.values(selectedCountry.currencies).map(
                  (currency) => currency.name
                )
              : "n/a"}
            <br />
            <span className="bold">Languages: </span>
            {selectedCountry.languages
              ? Object.values(selectedCountry.languages)
                  .map((language) => language)
                  .join(", ")
              : "n/a"}
          </p>
          <section id="borders">
            <p
              className={
                theme === "dark"
                  ? "pDark bold boldBorders"
                  : "pLight bold boldBorders"
              }
            >
              Border Countries:{" "}
            </p>
            <section id="borderGrid">
              {selectedCountry.borders ? (
                selectedCountry.borders.map((borderCode) => {
                  const borderCountry = data.find(
                    (country) => country.cca3 === borderCode
                  );
                  const borderName = borderCountry?.name || borderCode;
                  return (
                    <p
                      className={
                        theme === "dark"
                          ? "pDark pBorders border bg2Dark"
                          : "pLight pBorders border bg2Light"
                      }
                      key={borderCode}
                    >
                      {borderName}
                    </p>
                  );
                })
              ) : (
                <p
                  className={
                    theme === "dark" ? "pDark pNotes" : "pLight pNotes"
                  }
                  id="noBorders"
                >
                  none
                </p>
              )}
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default CountryPage;
