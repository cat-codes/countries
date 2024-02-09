import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredRegion, setFilteredRegion] = useState(null);

  return (
    <FilterContext.Provider value={{ filteredRegion, setFilteredRegion }}>
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const GetFilter = () => useContext(FilterContext);