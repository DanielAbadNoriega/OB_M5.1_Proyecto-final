import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const defaultConfig = {
  theme: "dark",
  lang: "es",
};

const Settings = () => {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const handleConfig = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({ ...oldConfig, theme: "light" }));
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>Actual Config: <span style={{"color":"lightcoral"}}>{JSON.stringify(config)}</span></p>
      <button type="button" onClick={handleConfig}>
        SAVE NEW SETTINGS
      </button>
    </div>
  );
};

export default Settings;
