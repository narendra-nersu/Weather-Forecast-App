const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast-container">
      <h2 className="section-title">Coming 5 Days</h2>

      {forecast.map((day, index) => (
        <div className="forecast-row" key={index}>
          
          {/* WEATHER ICON */}
          <div className="forecast-icon">
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}.png`}
              alt="weather icon"
            />
          </div>

          {/* TEMP */}
          <div className="forecast-temp">{day.temp}°C</div>

          {/* DAY NAME */}
          <div className="forecast-day">{day.day}</div>

          {/* DATE */}
          <div className="forecast-date">{day.date}</div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
