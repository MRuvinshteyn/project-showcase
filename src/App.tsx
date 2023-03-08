import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my Project Showcase!</p>
        <ul>
          <li>
            <a
              href="https://github.com/MRuvinshteyn/bounce-2d"
              className="App-link"
              rel="noreferrer"
              target="_blank"
            >
              Bounce2D - a game to test your geometric prowess
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
