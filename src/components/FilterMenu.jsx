import React, { useState } from 'react'
import './FilterMenu.css'
import { GetData } from './DataProvider';
import { GetFilter } from './FilterProvider';
import { GetSearch } from './SearchProvider';

const FilterMenu = ( {id} ) => {
  const { data } = GetData();
  const { setFilteredRegion } = GetFilter();
  const { setSearchTerm } = GetSearch();

  if (data === null) {
    return <div>Loading...</div>;
  }

  // Cereating an array of unique regions
  const uniqueRegions = Array.from(new Set(data.map(country => country.region)))

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

  return (
    <ul className='bg2' id={id}>
      <li className='bg2' onClick={() => filterRegion(null)}>
        All
      </li>
      {dropdownMenu}
    </ul>
  );
};

export default FilterMenu;
