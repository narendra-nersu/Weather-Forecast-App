import express from "express";
import { getForecastData } from "../controllers/forecastController.js";

const router = express.Router();

router.get("/", getForecastData);

export default router;
