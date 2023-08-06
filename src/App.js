
import './App.css';
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
        <div className="App">
        <Weather defaultCity= "Barcelona"/>
        <footer>
        <a href="https://github.com/nutik734/weather-react.git"
                          id="github-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open-source code   {" "}
                        </a> by Anna Slinkina
        </footer>
        </div>
    </div>
  );
}

export default App;
