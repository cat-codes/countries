/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import './HomePage.css'
import Header from '../components/Header/Header.jsx'
import Search from '../components/Search/Search.jsx'
import Filter from '../components/Filter/Filter.jsx'
import { GetData } from '../components/DataProvider';
import { GetFilter } from '../components/Filter/FilterProvider';
import { GetSearch } from '../components/Search/SearchProvider';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { data } = GetData();
  const { filteredRegion } = GetFilter();
  const { searchTerm, searchError, setSearchError } = GetSearch();

  let gridItems;

  useEffect(() => {
    setSearchError(false);
  }, [searchTerm, filteredRegion]);

  if (!data) return <div className='loading'>Loading...</div>;

  let filteredData = [];

  if (searchTerm) {
    filteredData = data.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); 
    if (filteredData.length === 0) {
      setSearchError(true);
    }
  } else if (filteredRegion) {
    filteredData = data.filter(country => country.region === filteredRegion);
  } else {
    filteredData = data;
  }

  gridItems = filteredData.map((country, index) => (
    <div key={index}>
      <Link 
        to={{
          pathname: `/${country.name}`,
          state: {country: country}
        }}
      >
        <div className='gridItem bg2'>
          <img src={country.flag} alt={`${country.name} Flag`} />
          <div className='countryInfo'>
            <div className='titleHome'>
              {country.name}
            </div>
            <div className='pRegHome'>
              <span className='pBoldHome'>Population: </span> 
              {country.population}
            </div>
            <div className='pRegHome'>
              <span className='pBoldHome'>Region: </span>
              {country.region}
            </div>
            <div className='pRegHome'>
              <span className='pBoldHome'>Capital: </span>
              {country.capital}
            </div>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div id='containerHome'>
      <Header />
      <Search id='search'/>
      <Filter id='filter'/>
      <div id='grid'>
        {searchError ? <span id='errorMessage'> No Results. </span> : gridItems}
      </div>
    </div>
  )
}

export default HomePage;
