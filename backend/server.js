import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import forecastRoutes from "./routes/forecastRoutes.js";
import aqiRoutes from "./routes/aqiRoutes.js";


dotenv.config(); 
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/weather", weatherRoutes);
app.use("/api/forecast", forecastRoutes);
app.use("/api/aqi", aqiRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
