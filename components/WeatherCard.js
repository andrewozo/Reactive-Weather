import React from "react";
import Sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/Cloudy.svg";
import Rainy from "../assets/Rainy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";

function WeatherCard({ city }) {
  function imgSelector(forecast) {
    const imgArr = ["Sunny", "Cloudy", "Rainy", "Partly cloudy"];
    const srcArr = [Sunny, Cloudy, Rainy, PartlyCloudy];

    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i] === forecast) {
        return srcArr[i];
      }
    }
  }

  let result = imgSelector(city.forecast);

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={result}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;
