import mongoose from "mongoose";

const weatherRecordSchema = new mongoose.Schema({
  city: { type: String, required: true },
  temperature: Number,
  humidity: Number,
  pressure: Number,
  feels_like: Number,
  visibility: Number,
  sky: String,
  lat: Number,
  lon: Number,
  date: String,
  time: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("WeatherRecord", weatherRecordSchema);
