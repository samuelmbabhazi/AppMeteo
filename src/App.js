import React, { useState } from "react";
import "./App.css";

function App() {
  const [town, setTown] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=5c6f54f8fe0bf251b4535c78978cebf7`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setTown("");
          console.log(result);
        });
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${town}&units=metric&appid=5c6f54f8fe0bf251b4535c78978cebf7`
      )
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          setTemp(dataJson.list);
        });
    }
  };
  const months = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "decembre",
  ];
  const days = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];
  const dateBuilder = (d) => {
    let day = days[-1 + d.getDay()];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  const nextdateBuilder = (d) => {
    let nextday = days[d.getDay()];
    let nextdate = 1 + d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${nextday} ${nextdate} ${month} ${year}`;
  };

  return (
    <div className="main">
      <main>
        <h1>Meteo ⛅</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Your Town..."
            onChange={(e) => setTown(e.target.value)}
            value={town}
            onKeyPress={search}
          />
          <img
            src="search-location-solid.svg
          "
            alt=""
            width={15}
          />
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="weather-box">
                <div className="temp"> ☁️{Math.round(weather.main.temp)}°c</div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
              <h5>{nextdateBuilder(new Date())}</h5>
              <div className="nextday">
                <p>{Math.round(temp)}°c</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
export default App;
