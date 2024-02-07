import React from 'react'
import './Header.css'
import { GetThemeValue } from './ThemeProvider'
import ThemeButton from './ThemeButton'

const Header = () => {
  const {theme} = GetThemeValue();

  return (
    <div id='containerHeader' className='bg2'>
      <h1 className="title">Where in the world?</h1>
      <ThemeButton/>
    </div>
  )
}

export default Header
