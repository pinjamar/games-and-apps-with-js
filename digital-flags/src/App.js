import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import useLocalStorage from "use-local-storage";
import { ReactComponent as Moon } from "./images/moon-outline.svg";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: Dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "Dark" : "Light"
  );

  const switchTheme = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="title">
        <h1>Where in the world?</h1>
        <button onClick={switchTheme} className="setting-theme">
          <Moon style={{ width: "20%", height: "100%" }} />{" "}
          {theme === "Light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
