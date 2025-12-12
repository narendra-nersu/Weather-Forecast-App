import mongoose from "mongoose";

const aqiRecordSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  city: String,
  aqi: Object,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("AqiRecord", aqiRecordSchema);
