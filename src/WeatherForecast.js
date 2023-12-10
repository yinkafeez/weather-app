import CurDate from "./CurDate";
import { WiHumidity } from "react-icons/wi";
import { CiTempHigh } from "react-icons/ci";
import { LiaWindSolid } from "react-icons/lia";
import { IoWaterOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

export default function WeatherForecast({ getWeatherData, cityName, isOpen }) {
  return (
    <div>
      {isOpen && (
        <p className="error" style={{ color: "#fff" }}>
          Please Wait a Moment...
        </p>
      )}
      {!isOpen && getWeatherData.name !== undefined && (
        <div className="weather-forecast-container">
          <h2 className="city-name">
            <IoLocationOutline style={{ width: "35px", height: "30px" }} />{" "}
            {getWeatherData.name},
            {getWeatherData.sys && getWeatherData.sys.country}
          </h2>

          <div className="curDate">
            <CurDate />
          </div>
          {getWeatherData.main && (
            <>
              <h1 className="weather-forecast">
                <CiTempHigh />
                {getWeatherData.main.temp.toFixed()}
                °F
              </h1>
            </>
          )}
          {getWeatherData.weather && (
            <h3 className="weather-description">
              {getWeatherData.weather[0].description}
            </h3>
          )}
          <div className="weather-properties-container">
            <div className="feels-like">
              <p>
                <IoWaterOutline style={{ width: "35px", height: "30px" }} />
              </p>
              {getWeatherData.main && (
                <p> {getWeatherData.main.feels_like.toFixed()}°F </p>
              )}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p>
                <WiHumidity style={{ width: "35px", height: "30px" }} />
              </p>
              {getWeatherData.main && (
                <p> {getWeatherData.main.humidity.toFixed()}% </p>
              )}
              <p>Humidity</p>
            </div>
            <div>
              <p>
                <LiaWindSolid style={{ width: "35px", height: "30px" }} />
              </p>
              {getWeatherData.wind && (
                <p> {getWeatherData.wind.speed.toFixed()}MPH </p>
              )}
              <p>Winds</p>
            </div>
          </div>
        </div>
      )}
      {cityName.length < 2 && (
        <div className="error">
          <p> Please provide a valid City Name </p>
        </div>
      )}
    </div>
  );
}
