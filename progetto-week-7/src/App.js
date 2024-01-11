import NavbarComponent from "./components/NavbarComponent";
import "./App.css";
import OptionsComponent from "./components/OptionsComponent";
import CentralComponent from "./components/CentralComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
      <main>
        <OptionsComponent />
        <CentralComponent />
      </main>
      <footer>
      <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
