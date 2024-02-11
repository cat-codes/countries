import React, { useState } from 'react'
import './Search.css'
import { GetSearch } from './SearchProvider';

const Search = () => {
  const { setSearchTerm } = GetSearch();

  const [input, setInput] = useState('')

  // Gets input value and stores it in 'input'
  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  // Search function that uses input value as a search term on submit
  const handleSearch = () => {
    if (input.trim() !== '') {
      setSearchTerm(input);
      setInput('');
    }
  };

  // 'Enter' key equals to submit
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  }

  const searchIcon = 
    <svg id='searchIcon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <g>
        <path id="Shape" className='svgTheme' fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#000000"/>
      </g>
    </svg>

  return (
    <form id="search" className='bg2' onClick={handleSearch}>
      {searchIcon}
      <input
        className='bg2'
        type='text' 
        value={input} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyPress} 
        placeholder='Search for a country...'
      />
    </form>
  )
}

export default Search;
