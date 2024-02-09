/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext, useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const DataContext = createContext();

export const DataProvider = ({children}) => {
  const baseUrl = 'https://restcountries.com/v3.1/all'

  const [data, setData] = useState(() => {
    const cachedData = localStorage.getItem('countryData');
    return cachedData ? JSON.parse(cachedData) : null;
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  // Fetching data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseUrl}`);
      const responseData = await response.data;

      // Extracting relevant data into country object
      const country = responseData.map(({ flags: { png }, name: { common, nativeName },population, region, subregion, capital, tld, currencies, languages, borders }) => ({
        flag: png,
        name: common,
        nativeName,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders
      }));

      // Setting country as data
      setData(country);

      localStorage.setItem('countryData', JSON.stringify(country));

    } 
    
    catch(error) {
      setError(error);
      console.log(error);
    }

    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    console.log("Fetching data...")
    return <div>Loading...</div>;
  }

  // console.log(`DataProvider: ${data}`);
  
  return (
    <DataContext.Provider value={{ data, error }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array,
};

export const GetData = () => useContext(DataContext);
