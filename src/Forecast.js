import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {

  function handleResponse(response){
    //console.log(response.data);
  }
  console.log(props);
  const apiKey= "0a49584f932f33a5d9ea5beto34a414d";
  let longitude= props.data.coordinates.longitude;
  let latitude= props.data.coordinates.latitude;
  let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row" stylename="display: none;">
        <div className="col-2">
          <div className="weather-forecast-date">Thu</div>
          <img
            src= {props.data.icon}
            alt={props.data.description}
            width="32"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 18 °</span>
            <span className="weather-forecast-temperature-min"> 12 °</span>
          </div>
        </div>
      </div>
    </div>
  );
}