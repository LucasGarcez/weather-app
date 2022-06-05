import axios from 'axios';
import Config from 'react-native-config';

import {WeatherOneCallResponse} from './WeatherAPIModels';

const BASE_URL = 'https://api.openweathermap.org/data/3.0/';
const API_KEY = Config.WEATHER_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
});

async function getCurrentAndForecast(
  lat: string,
  long: string,
): Promise<WeatherOneCallResponse> {
  const response = await api.get<WeatherOneCallResponse>(
    `onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`,
  );

  return response.data;
}

export const weatherApi = {getCurrentAndForecast};
