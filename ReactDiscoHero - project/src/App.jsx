// src/App.jsx
import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={discordLogo} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>

      <div className="hero">
        <div className="hero-content">
          <h1>Imagine a place...</h1>
          <p>...where you can belong...</p>
          <div className="hero-buttons">
            <button className="browser-button">
              Open Discord in your browser
            </button>
            <button className="download-button">Download for Mac</button>
          </div>
        </div>
      </div>

      <img src={discordBackground} alt="Hero Background" className="hero-bg" />

    </div>
  );
}

export default App;
