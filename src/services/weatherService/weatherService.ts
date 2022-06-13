import {weatherApi} from 'src/api/weather/weatherApi';
import {WeatherOneCallResponse} from 'src/api/weather/WeatherAPIModels';

async function getCurrentWeather(
  lat: string | number,
  long: string | number,
): Promise<WeatherOneCallResponse> {
  const weatherOneCall = await weatherApi.getCurrentAndForecast(
    lat.toString(),
    long.toString(),
  );

  return weatherOneCall;
}

function getIconURL(iconName: string) {
  return `https://openweathermap.org/img/wn/${iconName}@4x.png`;
}
export const weatherService = {getCurrentWeather, getIconURL};
