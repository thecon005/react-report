import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="week">
      <div className="monday">
        <div className="row" id="forecast">
          <div className="col-5">
            <span className="left" id="monday">
              Monday
            </span>
          </div>
          <div className="col-3">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
          <div className="col-4">
            <span className="right">
              <strong>
                <a href id="temp-max-monday">
                  {" "}
                  20
                </a>
                °C{" "}
              </strong>
              /
              <a href id="temp-min-monday">
                12
              </a>
              °C
            </span>
          </div>
        </div>
      </div>

      <div className="tuesday">
        <div className="row">
          <div className="col-5">
            <span className="left">Tuesday</span>
          </div>
          <div className="col-3">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
          <div className="col-4">
            <span className="right">
              <strong> 20°C </strong>/12°C
            </span>
          </div>
        </div>
      </div>
      <div className="wednesday">
        <div className="row">
          <div className="col-5">
            <span className="left">Wednesday</span>
          </div>
          <div className="col-3">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
          <div className="col-4">
            <span className="right">
              <strong>20°C</strong>/12°C
            </span>
          </div>
        </div>
      </div>
      <div className="thursday">
        <div className="row">
          <div className="col-5">
            <span className="left">Thursday</span>
          </div>
          <div className="col-3">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
          <div className="col-4">
            <span className="right">
              <strong>17°C</strong>/12°C
            </span>
          </div>
        </div>
      </div>
      <div className="friday">
        <div className="row">
          <div className="col-5">
            <span className="left">Friday</span>
          </div>
          <div className="col-3">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
          <div className="col-4">
            <span className="right">
              <strong>16°C</strong>/10°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
