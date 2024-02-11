/* eslint-disable no-unused-vars */
import React from 'react'
import './CountryPage.css'
import Header from '../components/Header/Header.jsx'
import BackButton from '../components/BackButton/BackButton.jsx'
import { useParams } from 'react-router-dom';
import { GetData } from '../components/DataProvider.jsx';

const CountryPage = () => {
  const { data } = GetData();
  const { clickedCountry } = useParams();
  const selectedCountry = data.find(item => item.name === clickedCountry);

  return (
    <div>
      <Header />
      <div id='containerAll'>
        <BackButton/>
        <div id='containerInfo'>
          <img id='flag' src={selectedCountry.flag} />
          <div id='infoPart'>
            <div id='infoMain'>
              <span className='titleInfo' id='title'>{selectedCountry.name}</span>
              <div id='infoBody' className='pRegInfo'>
                <span className='pBoldInfo'>Native Name: </span>
                {selectedCountry.nativeName ? selectedCountry.nativeName[Object.keys(selectedCountry.nativeName)[0]].official : 'n/a'}
                <br />
                <span className='pBoldInfo'>Population: </span>
                {selectedCountry.population ? selectedCountry.population : 'n/a'}
                <br />
                <span className='pBoldInfo'>Region: </span>
                {selectedCountry.region ? selectedCountry.region : 'n/a'}
                <br />
                <span className='pBoldInfo'>Sub Region: </span>
                {selectedCountry.subregion ? selectedCountry.subregion : 'n/a'}
                <br />
                <span className='pBoldInfo'>Capital: </span>
                {selectedCountry.capital ? selectedCountry.capital : 'n/a'}
                <br />
                <span className='pBoldInfo'>Top Level Domain: </span>
                {selectedCountry.tld ? selectedCountry.tld : 'n/a'}
                <br />
                <span className='pBoldInfo'>Currencies: </span>
                {selectedCountry.currencies ? Object.values(selectedCountry.currencies).map(currency => currency.name) : 'n/a'}
                <br />
                <span className='pBoldInfo'>Languages: </span>
                {selectedCountry.languages ? Object.values(selectedCountry.languages).map(language => language) : 'n/a'}
              </div>
            </div>
            <div id='notes'>
              <span className='pBoldInfo'>Border Countries: </span>
              <div id='infoGrid'> 
                {selectedCountry.borders ? selectedCountry.borders.map(borderCode => (
                  <span id='border' className='bg2 pRegNotes' key={borderCode}>
                    {data.find(country => country.cca3 === borderCode)?.name?.common || borderCode}
                  </span>
                )) : <span id='noBorders' className='pRegNotes'> n/a </span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage;
