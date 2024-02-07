import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import { DataProvider } from './components/DataProvider.jsx'
import { FilterProvider } from './components/FilterProvider.jsx'
import { SearchProvider } from './components/SearchProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <FilterProvider>
    <SearchProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </SearchProvider>
    </FilterProvider>
    </DataProvider>
  </React.StrictMode>,
)
