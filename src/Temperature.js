import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div>
      <h4>
        <span class="temperature" id="temperature">
          {" "}
          17°C{" "}
        </span>
        <a href id="celsius">
          {" "}
          C |
        </a>
        <a href id="fahrenheit">
          {" "}
          F{" "}
        </a>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt="icon"
          id="icon"
        />
      </h4>
      <p>
        Humidity : <span id="humidity">93</span>% | Wind :{" "}
        <span id="wind">11</span>km/h
      </p>
      <p className="advice">
        <strong>Bring an Umbrella!</strong>
      </p>
    </div>
  );
}
