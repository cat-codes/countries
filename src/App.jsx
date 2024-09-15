import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GetThemeValue } from "./components/ThemeButton/ThemeProvider";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NoPage from "./pages/NoPage";

function App() {
  const { theme } = GetThemeValue();
  return (
    <div className={theme === "dark" ? "bodyDark" : "bodyLight"}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/:clickedCountry" element={<CountryPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
