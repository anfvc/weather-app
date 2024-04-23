import { getWeather, searchByCity } from "../Controller/weatherController.js";
import express from "express";

const router = express.Router();

router.get("/", getWeather); // /weather

router.get("/:input", searchByCity); //* API/weather/:input

export default router;
