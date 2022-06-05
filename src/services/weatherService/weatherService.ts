import {weatherApi} from 'src/api/weather/weatherApi';
import {WeatherOneCallResponse} from 'src/api/weather/WeatherAPIModels';

async function getCurrentWeather(
  lat: string | number,
  long: string | number,
): Promise<WeatherOneCallResponse> {
  const response = await weatherApi.getCurrentAndForecast(
    lat.toString(),
    long.toString(),
  );

  return response;
}

export const weatherService = {getCurrentWeather};
