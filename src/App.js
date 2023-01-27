import Navigation from "./components/Navigation";
import RoutePaths from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <RoutePaths />
    </div>
  );
}

export default App;
