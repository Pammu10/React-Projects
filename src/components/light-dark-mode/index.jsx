import React from "react";
import useLocalStorage from "./useLocalStorage";
import './styles.css'

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" theme={theme}>
      <div className="container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
