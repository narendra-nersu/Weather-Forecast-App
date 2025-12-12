import React from "react";

const TodayTemps = ({ today }) => {
  if (!today || today.length === 0)
    return <p className="no-today">No data for today.</p>;

  return (
    <div className="today-grid">
      {today.map((item, index) => (
        <div key={index} className="today-card">
          <p className="today-time">{item.time}</p>

          <img
            src={item.icon}
            alt="weather icon"
            className="today-icon"
          />

          <p className="today-temp">{item.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default TodayTemps;
