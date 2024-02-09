import React from 'react'
import './Home.css'
import Search from '../Search/Search.jsx'
import Filter from '../Filter/Filter.jsx'
import Grid from './Grid.jsx'

const Home = () => {
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

export default Home
