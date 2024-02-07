import React from 'react'
import './HomePage.css'
import Search from './Search.jsx'
import Filter from './Filter.jsx'
import Grid from './Grid.jsx'

const HomePage = () => {
  return (
    <div id='containerHome'>
      <Search id='search'/>
      <Filter id='filter'/>
    <div>
        <Grid />
      </div>
    </div>
  )
}

export default HomePage
