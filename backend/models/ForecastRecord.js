import mongoose from "mongoose";

const forecastRecordSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  city: String,
  forecast: Array, // list of forecast items
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("ForecastRecord", forecastRecordSchema);
