import React, { useState, useEffect, useRef } from 'react'
import './Filter.css'
import { GetThemeValue } from './ThemeProvider'
import FilterMenu from './FilterMenu'

const Filter = () => {
  const {theme} = GetThemeValue();
  
  const [openDropdown, setOpenDropdown] = useState(false);
  const filterRef = useRef(null);

  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const handleOutsideClick = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setOpenDropdown(false);
    }
  };

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
      <FilterMenu id={openDropdown ? 'dropdownOpen' : 'dropdownClosed'}/>
    </div>
  )
}

export default Filter;
