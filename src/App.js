import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import WeatherForecast from "./WeatherForecast";
import { useEffect, useState } from "react";
import GetUserLocation from "./GetUserLocation";
export default function App() {
  // get user location name
  const [userLocation, setUserLocation] = useState("");

  // city name search
  const [cityName, setCityName] = useState("");

  // storing the data getting from weather forecast api
  const [getWeatherData, setGetWeatherData] = useState([]);

  // if there is network isssue, display loader state controller
  const [isOpen, setIsOpen] = useState(false);

  // store the user location on the city name state on component mount
  useEffect(
    function () {
      setCityName(userLocation);
    },
    [userLocation]
  );

  //searching for weather forecast of the city the user typed in
  useEffect(
    function (e) {
      setIsOpen(true);
      async function getWeatherForecast() {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=70bc25d3e4890dca2504be5f7be8fa8c`
        );
        const data = await res.json();
        // console.log(data);
        setGetWeatherData(data);
      }
      getWeatherForecast();
      setIsOpen(false);
    },
    [cityName]
  );

  return (
    <div className="App">
      <div className="top-section">
        <Navbar />
        <div className="search-weather-forecast-container">
          <SearchBox cityName={cityName} setCityName={setCityName} />

          <WeatherForecast
            cityName={cityName}
            getWeatherData={getWeatherData}
            isOpen={isOpen}
          />
        </div>
      </div>
      <GetUserLocation setUserLocation={setUserLocation} />
    </div>
  );
}
