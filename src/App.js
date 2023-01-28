import Navigation from "./components/Navigation";
import RoutePaths from "./routes";
import "./App.css";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <RoutePaths />
      </div>
    </UserContextProvider>
  );
}

export default App;
