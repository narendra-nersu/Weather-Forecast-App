import axios from "axios";

// Fetch current weather
export const getWeather = (city) => {
  return axios.get(`/api/weather?city=${city}`);
};

// Fetch 5-day forecast (lat, lon from weather API)
export const getForecast = (lat, lon, city) => {
  return axios.get(`/api/forecast?lat=${lat}&lon=${lon}&city=${city}`);
};

// Fetch Air Quality Index
export const getAQI = (lat, lon, city) => {
  return axios.get(`/api/aqi?lat=${lat}&lon=${lon}&city=${city}`);
};
