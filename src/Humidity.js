import React from "react";

export default function Humidity(props) {
    return(  
    <div className="Humidity">
      <ul>
        <li>
          Humidity: <span id="humidity">{props.data.humidity}</span>%
        </li>
        <li>
          Pressure: <span id="pressure">{props.data.pressure}mmHg</span>
        </li>
        <li>
          Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
        </li>
      </ul>
    </div>
    );
}