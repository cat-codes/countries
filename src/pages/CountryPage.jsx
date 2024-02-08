import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header.jsx'
import Info from '../components/Info.jsx';

const CountryPage = () => {
  const { country } = useParams();

  return (
    <>
      < Header />
      < Info />
    </>
  )
}

export default CountryPage
