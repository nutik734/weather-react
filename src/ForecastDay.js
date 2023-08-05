import React from "react";

export default function ForecastDay(props){
    function day(){
        let date= new Date(props.data.time * 1000);
        let day=date.getDay();
        let days = ["Sun","Mon","Tue","Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
return (
    <div className= "forecast-day">
    <div className="weather-forecast-date"> {day()}</div>
          <img
            src= {props.data.condition.icon_url}
            alt={props.data.condition.description}
            width="32"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> {Math.round(props.data.temperature.maximum)}°</span>
            <span className="weather-forecast-temperature-min"> {Math.round(props.data.temperature.minimum)}°</span>
          </div>
          </div>
);
}