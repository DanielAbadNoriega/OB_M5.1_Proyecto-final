import "./App.css";
import TaskList from "./components/list/TaskList";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <div className="App">
      <TaskList />
      <Settings />
    </div>
  );
}

export default App;
