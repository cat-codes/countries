import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { GetThemeValue } from './components/ThemeProvider'

function App() {
  const {theme} = GetThemeValue();

  if (theme === 'dark') {
    document.documentElement.classList.add('darkTheme');
    document.documentElement.classList.remove('lightTheme');
  } else {
    document.documentElement.classList.add('lightTheme');
    document.documentElement.classList.remove('darkTheme');
  }


  return (
    <>
      <Header/>
      <HomePage/>
    </>
  )
}

export default App
