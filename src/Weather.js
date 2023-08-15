import React,{useState} from "react";
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import Humidity from "./Humidity";
import Forecast from "./Forecast";



export default function Weather(props) {
    const [weather,setWeather]= useState({ready:false});
    const [city,setCity]=useState(props.defaultCity);
         function handleResponse(response){
          setWeather({
            ready:true,
            coordinates: response.data.coordinates,
            city:response.data.city,
            country: response.data.country,
            date:new Date(response.data.time *1000),
            temperature:response.data.temperature.current,
            description:response.data.condition.description,
            icon:response.data.condition.icon_url,
            wind:response.data.wind.speed,
            humidity:response.data.temperature.humidity,
            pressure:response.data.temperature.pressure,
        });
         }

         function search(){
            const key = "0a49584f932f33a5d9ea5beto34a414d";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`
            axios.get(apiUrl).then(handleResponse);
         }
        function handleSubmit(event){
            event.preventDefault();
            search();
        }
        function handleCityChange(event){
        setCity(event.target.value);
        //alert(city);
        }

         if (weather.ready){
           return (
             <div className="Weather">
             <div className="App">
            <div className="container">
            <div className="weather-app">
            <div className="card d-flex ">

              <div className="card-body">
                <form onSubmit={handleSubmit} id="city-form" className="mb-3">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="city"
                        id="city-search"
                        placeholder="Choose your city..."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                      />
                    </div>
                    <div className="col-md-3">
                      <input
                        type="submit"
                        value="🔍 Search"
                        className="btn btn-info "
                      />
                    </div>
                  </div>
                </form>

                <div className="overview">
                  <h1 id="city">{weather.city},{weather.country}</h1>
                  <ul>
                    <li>
                      <FormattedDate date={weather.date}/><span id="date"></span>
                    </li>
                    <li id="description">{weather.description}</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex weather-temperature">
                       <img src={weather.icon} alt={weather.description} id="icon" />
                       <WeatherTemperature celsius={weather.temperature}/>
                    </div>
                  </div>
                  <div className="col-6">
                <Humidity data={weather}/>
                  </div>
                  </div>
                <div className="weather-forecast" id="forecast">
                  <Forecast coordinates={weather.coordinates}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
    }else{
      search();
     return "Loading.."
    }
}

        
        
    

