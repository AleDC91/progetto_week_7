import NavbarComponent from "./components/NavbarComponent";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import SettingsPageComponent from "./components/SettingsPageComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from "./components/PageNotFound";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavbarComponent />
      </header>
    <Routes>
    <Route index element={<HomeComponent/>} />
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/settings" element={<SettingsPageComponent/>} />
        <Route path="/settings" element={<SettingsPageComponent/>} />
        <Route path="/profile" element={<ProfileComponent/>} />
        <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>

      <footer>
      <FooterComponent />
      </footer>
    </div>
    </Router>
  );
}

export default App;
