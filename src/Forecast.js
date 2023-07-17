import React from "react";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row" stylename="display: none;">
        <div className="col-2">
          <div className="weather-forecast-date">Thu</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt=""
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