import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./weather.css";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
const api = {
  key: "f5e7040631efd5065f4c142f42f7b7f2",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [defaultWeather, setDefaultWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const searchSubmit = (evt) => {
    if (evt.key === "Enter") {
      Axios.get(
        `${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`
      ).then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
      });
    }
  };

  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=takoradi&units=metric&APPID=f5e7040631efd5065f4c142f42f7b7f2";
    Axios.get(url).then((result) => {
      setDefaultWeather(result);
      console.log(result.data);
    });
  }, []);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  return (
    <div className="container">
      <div
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <div className="topSide">
          <div className="search-box">
            <input
              type="text"
              className="search-txt"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={searchSubmit}
            />
            <a href="#" className="search-btn">
              <AiOutlineSearch />
            </a>
          </div>
          <div className="menu">
            <CgMenuRight className="menu-icon" />
          </div>
        </div>
        <div className="main">
          <div className="location">
            <div className="city">
              {defaultWeather && defaultWeather.data.name}
            </div>
            <div className="sub_main">
              <div className="time">{time} - {dateBuilder(new Date())}</div>
            </div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {defaultWeather && Math.round(defaultWeather.data.main.temp)}°C
            </div>
            <div className="weather">
              {defaultWeather && defaultWeather.data.weather[0].main}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
