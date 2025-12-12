import axios from "axios";

export const getWeatherData = async (req, res) => {
  try {
    const city = req.query.city;
    if (!city) {
      return res.status(400).json({ success: false, message: "City is required" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OWM_API_KEY}&units=metric`;
    const response = await axios.get(url);

    const d = response.data;

    const record = {
      city: d.name,
      temperature: d.main.temp,
      humidity: d.main.humidity,
      pressure: d.main.pressure,
      feels_like: d.main.feels_like,
      visibility: d.visibility,
      sky: d.weather[0].description,
      lat: d.coord.lat,
      lon: d.coord.lon,
      sunrise: d.sys.sunrise,     
      sunset: d.sys.sunset, 
      date: new Date(d.dt * 1000).toLocaleDateString(),
      time: new Date(d.dt * 1000).toLocaleTimeString()
    };

    res.json({ success: true, data: record });

  } catch (err) {
    res.status(500).json({ success: false, message: "Weather fetch error", error: err.message });
  }
};
