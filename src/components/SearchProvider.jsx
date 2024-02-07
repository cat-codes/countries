import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types';

const SearchContext = createContext();

export const SearchProvider = ( {children} ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState(false);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchError, setSearchError }}>
      {children}
    </SearchContext.Provider>
  )
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const GetSearch = () => useContext(SearchContext);
