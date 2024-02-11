import React, { useState, useEffect, useRef } from 'react'
import './Filter.css'
import { GetData } from '../DataProvider';
import { GetFilter } from './FilterProvider';
import { GetSearch } from '../Search/SearchProvider';

const Filter = () => {
  const { data, loading } = GetData();
  const { setFilteredRegion } = GetFilter();
  const { setSearchTerm } = GetSearch();

  if (loading) {
    return <div className='loading'></div>;
  }

  // Cereating an array of unique regions
  const uniqueRegions = Array.from(new Set(data.map(country => country.region)))

  // Sets a filter region
  const filterRegion = (region) => {
    setSearchTerm('');
    setFilteredRegion(region);
  }

  // Creates a dropdown menu with unique regions
  const dropdownMenu = uniqueRegions.map((region, index) => (
    <li key={index} className='bg2' onClick={() => filterRegion(region)}>
      {region}
    </li>
    )
  );

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
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const arrow = 
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill="black"/>
    </svg>

  return (
    <div id='filter' ref={filterRef}>
      <button id='buttonFilter' type='button' onClick={toggleDropdown}>
        Filter by Region
        <div id={openDropdown ? 'arrowOpen' : 'arrowClosed'} className='svgTheme'>
          {arrow}
        </div>
      </button>
      <ul className='bg2' id={openDropdown ? 'dropdownOpen' : 'dropdownClosed'}>
        <li className='bg2' onClick={() => filterRegion(null)}> All </li>
        {dropdownMenu}
    </ul>
    </div>
  )
}

export default Filter;