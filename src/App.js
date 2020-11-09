import React from "react";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-wrapper">
        <div className="weather">
          <Search />
          <City />
          <Temperature />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
