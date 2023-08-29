import React, { useState, useEffect, useRef } from "react";
import { Component, MainHolder } from "./AppStyle";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BwWind,
  BsThunderboltFill,
  BsWind,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";
import { VariantsBox } from "./components/VariantsBox";

const apiKey = `eb603045a8020a60985b69c7d9f5c8f4`;
function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Novi Sad ");
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const date = new Date();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setLocation(inputValue);
    }
    const input = document.querySelector("input");
    input.value = "";
    input.placeholder = "Search by city or country..";
  };
  useEffect(() => {
    setLoader(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setLoader(false);
        }, 1500);
      })
      .catch((err) => {
        setLoader(false);
        setError(err);
        toast.error("City not found");
        console.log(err);
      });
  }, [location]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 7000);
    return () => clearTimeout(timer);
  }, [error]);
  if (!data) {
    return (
      <MainHolder>
        <div>
          <div className="custom-loader"></div>
        </div>
      </MainHolder>
    );
  }

  let icon;
  switch (data.weather[0].main) {
    case "Clear":
      icon = <IoMdSunny className="clear" />;
      break;
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="rain" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="drizzle" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="snow" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }
  return (
    <Component>
      {error && <ToastContainer />}

      <MainHolder className="mainHolder">
        <div className="holderSearch">
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Search by city or country.."
            />
          </div>
          <button onClick={(e) => handleSubmit(e)}>
            <IoMdSearch />
          </button>
        </div>

        <div className="holderCard">
          {loader ? (
            <div className="custom-loader"></div>
          ) : (
            <div className="weatherCard">
              <div className="iconPlace">
                <div className="icon">{icon}</div>
                <div className="holderCityDate">
                  <div className="coutry">
                    {data.name}, {data.sys.country}
                  </div>
                  <div className="date">
                    {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                    {date.getUTCFullYear()}
                  </div>
                </div>
              </div>
              <div className="bodyCard">
                <div className="temp">
                  {parseInt(data.main.temp)} <TbTemperatureCelsius />
                </div>
                <div className="tempCels"></div>
                <div className="weather">{data.weather[0].description}</div>
              </div>
              <div className="bottomCard">
                <div className="infoWeather">
                  <div className="infoCard">
                    <div className="iconBottom">
                      <BsEye />
                    </div>
                    <div>Visibility</div>
                    <span>{data.visibility / 1000} km</span>
                  </div>
                  <div className="infoCard">
                    <div className="iconBottom">
                      <BsThermometer />
                    </div>
                    <div>Feel like</div>
                    <span>
                      {parseInt(data.main.feels_like)} <TbTemperatureCelsius />
                    </span>
                  </div>
                  <div className="infoCard">
                    <div className="iconBottom">
                      <BsWater />
                    </div>
                    <div>Humidity</div>
                    <span>{data.main.humidity} %</span>
                  </div>
                  <div className="infoCard">
                    <div className="iconBottom">
                      <BsWind />
                    </div>
                    <div>
                      Wind <span>{data.wind.speed} m/s</span>d
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </MainHolder>
    </Component>
  );
}

export default App;
