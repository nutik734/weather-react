import React,{useState,useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
let [loaded,setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);

useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded){
    return (
    <div className="weather-forecast" id="forecast">
      <div className="row" stylename="display: none;">
        {forecast.map(function(dailyForecast,index){
          if (index<6){
          return(
          <div className="col-2" key={index}>
          <ForecastDay data={dailyForecast}/>
        </div>
        );
          }
           return null;
        })}
        
      </div>
    </div>
  );
  }else{
  const apiKey= "0a49584f932f33a5d9ea5beto34a414d";
  let longitude= props.coordinates.longitude;
  let latitude= props.coordinates.latitude;
  let apiUrl= `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;
  }
}