import React from "react";

export default function Humidity() {
  return (
    <div className="Humidity">
      <ul>
        <li>
          Humidity: <span id="humidity"></span>%
        </li>
        <li>
          Pressure: <span id="pressure"></span>
        </li>
        <li>
          Wind: <span id="wind"></span> km/h
        </li>
      </ul>
    </div>
  );
  }


