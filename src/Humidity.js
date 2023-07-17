import React,{useState} from "react";

export default function Humidity(props) {

  function Search() {
    let [loaded, setLoaded] = useState("false");
    let [weather, setWeather] = useState("null");
    
    function displayTemperature(response) {
    setLoaded(true);
    setWeather(true);
    
  }
  if (loaded){
  return (
    <div className="Humidity">
      <ul>
        <li>
          Humidity: <span id="humidity">{props.data.main.humidity}</span>%
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
}
}
