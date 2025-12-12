import calendarIcon from "../images/calendar.png";
import timeIcon from "../images/time.png";
import cloudIcon from "../images/cloudy.png";

const CurrentWeather = ({ weather }) => {
  if (!weather) {
    return (
      <div className="weather-card empty">
        <p>Search for a city to see weather data</p>
      </div>
    );
  }

  return (
    <div className="weather-card">
      {/* City Name */}
      <h2 className="city-name">{weather.city}</h2>

      {/* Temperature + Weather Icon */}
      <div className="temp-section">
        <img src={cloudIcon} alt="weather" className="weather-main-icon" />
        <h1 className="temperature">{weather.temperature}°C</h1>
      </div>

      {/* Sky Description */}
      <h3 className="sky">{weather.sky}</h3>

      {/* Date & Time Section */}
      <div className="datetime">
        <div className="date-row">
          <img src={calendarIcon} alt="calendar" className="icon-small" />
          <span>{weather.date}</span>
        </div>

        <div className="time-row">
          <img src={timeIcon} alt="time" className="icon-small" />
          <span>{weather.time}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
