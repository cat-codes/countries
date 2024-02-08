import React, { useEffect } from 'react'
import './Grid.css'
import { GetThemeValue } from './ThemeProvider'
import { GetData } from './DataProvider';
import { GetFilter } from './FilterProvider';
import { GetSearch } from './SearchProvider';
import { Link } from 'react-router-dom';

const Grid = () => {
  const {theme} = GetThemeValue()
  const { data } = GetData();
  const { filteredRegion } = GetFilter();
  const { searchTerm, setSearchTerm, searchError, setSearchError } = GetSearch();

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

  const handleClick = () => {

  }

  gridItems = filteredData.map((country, index) => (
    <Link to={`/${country.name}`} key={index} onClick={handleClick}>
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
  ));

  return (
    <div id='grid'>
      {searchError ? <div id='errorMessage'>No Results.</div> : gridItems}
    </div>
  );
};

export default Grid;
