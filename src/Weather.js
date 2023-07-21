import React,{useState} from "react";
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import Humidity from "./Humidity";
import Forecast from "./Forecast";


export default function Weather(props) {
    
    const [weather,setWeather]= useState({ready:false});
         function handleResponse(response){
            //console.log(response.data);
        
          setWeather({
            ready:true,
            city:response.data.city,
            country: response.data.country,
            date:new Date(response.data.time *1000),
            temperature:response.data.temperature.current,
            description:response.data.condition.description,
            icon:response.data.condition.icon,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
            wind:response.data.wind,
           // humidity:response.data.temperature.humidity,

        });
          
         }
         if (weather.ready){
           return (
             <div className="Weather">
             <div className="App">
            <div className="container">
            <div className="weather-app">
            <div className="card d-flex">

              <div className="card-body">
                <form id="city-form" className="mb-3">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="city"
                        id="city-search"
                        placeholder="Choose your city..."
                        className="form-control"
                        autoFocus="on"
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        value="🔍Search"
                        className="btn btn-info"
                      />
                    </div>
                  </div>
                </form>

                <div className="overview">
                  <h1 id="city">{weather.city},{weather.country}</h1>
                  <ul>
                    <li>
                      Last update: <FormattedDate date={weather.date}/><span id="date"></span>
                    </li>
                    <li id="description">{weather.description}</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex weather-temperature">
                      <img src={weather.iconUrl} alt={weather.description} id="icon" />
                      <strong id="temperature">{Math.round(weather.temperature)}</strong>
                      <span className="units">
                        <a
                          href="#section"
                          onClick={handleResponse}
                          id="celsius-link"
                          className="active"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          °C
                        </a>{" "}
                        |
                        <a
                          href="#section"
                          onClick={handleResponse}
                          id="fahrenheit-link"
                          rel="noopener noreferrer"
                        >
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <Humidity city="Barcelona"/>
                  </div>
                </div>
                <div className="weather-forecast" id="forecast">
                  <Forecast city="Barcelona"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
        <a
                          href="https://github.com/nutik734/weather-react.git"
                          onClick={handleResponse}
                          id="fahrenheit-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open-source code   {" "}
                        </a>
                        by Anna Slinkina
        </footer>
      </div>
    </div>
  );
    }else{
        const key = "0a49584f932f33a5d9ea5beto34a414d";
        
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&units=metric`
         axios.get(apiUrl).then(handleResponse);
     return "Loading.."
    }

}

        
        
    

