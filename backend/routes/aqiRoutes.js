import express from "express";
import { getAqiData } from "../controllers/aqiController.js";

const router = express.Router();

router.get("/", getAqiData);

export default router;
