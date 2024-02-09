/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './CountryPage.css'
import { useParams } from 'react-router-dom';
import Header from '../components/Nav/Header.jsx'
import { GetData } from '../components/DataProvider.jsx';
import BackButton from '../components/BackButton/BackButton.jsx'

const CountryPage = () => {
  const { data } = GetData();
  console.log('CountryPage data:', data)

  const { clickedCountry } = useParams();
  console.log('Clicked country:', clickedCountry);

  const selectedCountry = data.find(item => item.name === clickedCountry);
  console.log('Selected Country:', selectedCountry);

  return (
    <div>
      <Header />
      <div id='containerAll'>
        <BackButton/>
        <div id='containerInfo'>
          <img id='flag' src={selectedCountry.flag} />
          <div id='infoPart'>
            <div id='infoMain'>
              <div className='titleInfo' id='title'>{selectedCountry.name}</div>
              <div id='infoBody' className='pRegInfo'>
                <span className='pBoldInfo'>Native Name: </span>
                {selectedCountry.nativeName[Object.keys(selectedCountry.nativeName)[0]].official}
                <br />
                <span className='pBoldInfo'>Population: </span>
                {selectedCountry.population}
                <br />
                <span className='pBoldInfo'>Region: </span>
                {selectedCountry.region}
                <br />
                <span className='pBoldInfo'>Sub Region: </span>
                {selectedCountry.subregion}
                <br />
                <span className='pBoldInfo'>Capital: </span>
                {selectedCountry.capital}
                <br />
                <span className='pBoldInfo'>Top Level Domain: </span>
                {selectedCountry.tld}
                <br />
                <span className='pBoldInfo'>Currencies: </span>
                {Object.values(selectedCountry.currencies).map(currency => currency.name)}
                <br />
                <span className='pBoldInfo'>Languages: </span>
                {Object.values(selectedCountry.languages).map(language => language)}
              </div>
            </div>
            <div id='notes'>
              <span className='pBoldInfo'>Border Countries: </span>
              <div id='infoGrid'> 
                {selectedCountry.borders.map(borderCode => (
                  <div id='border' className='bg2 pRegNotes' key={borderCode}>
                    {data.find(country => country.cca3 === borderCode)?.name?.common || borderCode}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage;
