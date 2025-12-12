import axios from "axios";
import ForecastRecord from "../models/ForecastRecord.js";

export const getForecastData = async (req, res) => {
  try {
    const { lat, lon, city } = req.query;

    if (!lat || !lon) {
      return res
        .status(400)
        .json({ success: false, message: "Latitude & Longitude required" });
    }

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API_KEY}&units=metric`;

    const response = await axios.get(url);
    const list = response.data.list;

    // -----------------------------------------
    // 1️⃣ FORMAT TODAY HOURLY FORECAST
    // -----------------------------------------
    const todayDate = new Date().toISOString().split("T")[0];

    const today = list
      .filter((item) => item.dt_txt.startsWith(todayDate))
      .map((item) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: item.main.temp,
        icon: item.weather[0].icon,
      }));

    // -----------------------------------------
    // 2️⃣ FORMAT 5-DAY FORECAST
    // pick only one reading per day (12:00 PM)
    // -----------------------------------------
    const dailyMap = {};

    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!dailyMap[date] || item.dt_txt.includes("12:00:00")) {
        dailyMap[date] = {
          date,
          day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          temp: item.main.temp,
          icon: item.weather[0].icon,
        };
      }
    });

    const fiveDays = Object.values(dailyMap).slice(0, 5);

    // Save
    await ForecastRecord.create({
      lat,
      lon,
      city,
      forecast: list,
    });

    // -----------------------------------------
    // 3️⃣ FINAL CLEAN RESPONSE
    // -----------------------------------------
    res.json({
      success: true,
      today,
      fiveDays,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Forecast fetch error",
      error: error.message,
    });
  }
};
