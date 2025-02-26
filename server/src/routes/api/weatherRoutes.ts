import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  // TODO: GET weather data from city name
  try {
    const Weather = WeatherService.getWeatherForCity(req.body.city);
    res.json(Weather);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // TODO: save city to search history
  HistoryService.addCity(req.body.city);
});

// TODO: GET search history
router.get('/history', async (req, res) => {
  // get search history from searchHistory.json file
  try {
    const searchHistory = await HistoryService.getCities();
    res.json(searchHistory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
});

// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req, res) => {});

export default router;
