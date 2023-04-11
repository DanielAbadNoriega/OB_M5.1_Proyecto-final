import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const defaultConfig = {
  theme: "dark",
  lang: "es",
};

const Settings = ({toggleDark}) => {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const toggleMode = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: oldConfig.theme === "light" ? "dark" : "light",
    }));
    toggleDark();
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>
        Actual Config:{" "}
        <span style={{ color: "lightcoral" }}>{JSON.stringify(config)}</span>
      </p>
      <button type="button" onClick={toggleMode}>
        Toggle DarkMode
      </button>
    </div>
  );
};

export default Settings;
