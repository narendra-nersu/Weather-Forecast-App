import axios from "axios";
import AqiRecord from "../models/AqiRecord.js";

export const getAqiData = async (req, res) => {
  try {
    const { lat, lon, city } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ success: false, message: "Latitude & Longitude required" });
    }

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API_KEY}`;

    const response = await axios.get(url);

    const components = response.data.list[0].components;

    // Save AQI data
    await AqiRecord.create({
      lat,
      lon,
      city,
      aqi: components
    });

    res.json({ success: true, data: components });
  } catch (error) {
    res.json({
      success: false,
      message: "AQI fetch error",
      error: error.message
    });
  }
};
