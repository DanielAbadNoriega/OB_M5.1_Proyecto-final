import "./App.css";
import "./styles/css/index.scss";
import TaskList from "./components/list/TaskList";
import Settings from "./components/settings/Settings";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState("dark");

  useEffect(() => {
    const config = JSON.parse(localStorage.getItem("config"));
    setIsDark(config.theme);
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  console.log(`[ App ] Config: ${JSON.stringify(isDark)}`);

  return (
    <div className={`App ${isDark === "dark" ? "dark" : ""}`} data-testid="app-test">
      <TaskList />
      <hr style={{width: "90vw", marginBottom: 20, marginTop: 20}} ></hr>
      <Settings toggleDark={toggleDark} />
    </div>
  );
}

export default App;
