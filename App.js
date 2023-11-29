import React, { useState } from "react";
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Locations from "./components/Locations";

function App() {
  const [location, setLocation] = useState("Tokyo");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Locations data={cities} location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((city, index) => (
          <div>
            <WeatherCard key={index} city={city} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
