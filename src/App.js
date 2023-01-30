import "./App.css";
import { Middle } from "./components/Middle";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Middle  />
      <SideBar />
    </div>
  );
}

export default App;
