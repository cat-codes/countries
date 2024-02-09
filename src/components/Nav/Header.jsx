import React from 'react'
import './Header.css'
import ThemeButton from './ThemeButton'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div id='containerHeader' className='bg2'>
      <Link to='/home'><h1 className="title">Where in the world?</h1></Link>
      <ThemeButton/>
    </div>
  )
}

export default Header
