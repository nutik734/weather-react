import React,{useState} from "react";
import axios from 'axios';
import Humidity from "./Humidity";
import Forecast from "./Forecast";
import image from "./images/image.png";

export default function Weather(props) {
         let [city, setCity] = useState("")
        function handleResponse(event){
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`
         axios.get(apiUrl).then(handleResponse);
        }
    
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
                  <h1 id={city}>Barcelona, Spain</h1>
                  <ul>
                    <li>
                      Last updated: <span id="date"></span>
                    </li>
                    <li id="description">Rainy</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex weather-temperature">
                      <img src={image} alt="some-clouds" id="icon" />
                      <strong id="temperature">22</strong>
                      <span className="units">
                        <a
                          href="#section"
                          onClick={""}
                          id="celsius-link"
                          className="active"
                        >
                          {" "}
                          °C
                        </a>{" "}
                        |
                        <a
                          href="#section"
                          onClick={""}
                          id="fahrenheit-link"
                        >
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <Humidity />
                  </div>
                </div>
                <div className="weather-forecast" id="forecast">
                  <Forecast />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

