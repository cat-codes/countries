import './App.css';
import { GetThemeValue } from './components/ThemeButton/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import NoPage from './pages/NoPage';

function App() {
  const {theme} = GetThemeValue();

  return (
    <>
      <BrowserRouter>
        <div className={theme === 'dark' ? 'darkTheme' : 'lightTheme'}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/:clickedCountry' element={<CountryPage />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
