import { useState } from "react";

// Components
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import MetricCard from "./components/MetricCard";
import Forecast from "./components/Forecast";
import AQI from "./components/AQI";
import SunriseSunset from "./components/SunriseSunset";
import TodayTemps from "./components/TodayTemps";

// Service functions
import { getWeather, getForecast, getAQI } from "./services/weatherService";

// Metric icons
import humidityIcon from "./images/flood.png";
import pressureIcon from "./images/wind.png";
import hotIcon from "./images/hot.png";
import visibilityIcon from "./images/eye.png";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [sunrise, setSunrise] = useState("-");
  const [sunset, setSunset] = useState("-");
  const [todayTemps, setTodayTemps] = useState([]);

  // -------------------------------
  // MAIN SEARCH FUNCTION
  // -------------------------------
  const handleSearch = async (city) => {
  try {
    // 1️⃣ FETCH CURRENT WEATHER
    const weatherRes = await getWeather(city);
    const data = weatherRes.data.data;
    setWeather(data);

    setSunrise(
      new Date(data.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    setSunset(
      new Date(data.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );

    const lat = data.lat;
    const lon = data.lon;

    // 2️⃣ FETCH FORECAST (NEW STRUCTURED RESPONSE)
    const forecastRes = await getForecast(lat, lon, city);

    // ⭐ NEW — set 5 day forecast
    setForecast(forecastRes.data.fiveDays);

    // ⭐ NEW — set today's hourly temps
    setTodayTemps(forecastRes.data.today);

    // 3️⃣ FETCH AQI
    const aqiRes = await getAQI(lat, lon, city);
    setAqi(aqiRes.data.data);
  } catch (err) {
    console.error("Search error:", err);
    alert("City not found or server error.");
  }
};


  // -------------------------------
  // HOURLY TEMPS FOR TODAY
  // -------------------------------
  // const prepareTodayTemps = (list) => {
  //   const today = new Date().toISOString().split("T")[0];

  //   const filtered = list
  //     .filter((item) => item.dt_txt.startsWith(today))
  //     .slice(0, 6);

  //   const mapped = filtered.map((item) => ({
  //     time: new Date(item.dt_txt).toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //     temp: item.main.temp,
  //     icon: "/images/cloudy.png", // fallback icon
  //   }));

  //   setTodayTemps(mapped);
  // };

  return (
    <div className="app-container">

      {/* 🔍 Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* 🌤 CURRENT WEATHER */}
      <CurrentWeather weather={weather} />

      {/* Render only after search */}
      {weather && (
        <>
          {/* 🌡 METRIC CARDS */}
          <div className="metric-row">
            <MetricCard icon={humidityIcon} label="Humidity" value={weather.humidity} />
            <MetricCard icon={pressureIcon} label="Pressure" value={weather.pressure} />
            <MetricCard icon={hotIcon} label="Feels Like" value={weather.feels_like} />
            <MetricCard icon={visibilityIcon} label="Visibility" value={weather.visibility} />
          </div>

          {/* AQI + SUNRISE / SUNSET */}
          <div className="cards-row">
            <AQI aqi={aqi} />
            <SunriseSunset sunrise={sunrise} sunset={sunset} />
          </div>

          {/* 5 DAY FORECAST */}
          <Forecast forecast={forecast} />

          {/* TODAY TEMPS */}
          <TodayTemps todayTemps={todayTemps} />
        </>
      )}
    </div>
  );
};

export default App;
