import axios from 'axios';
import Config from 'react-native-config';

import {RevGeocodeResponse} from './HereAPIModels';

const BASE_URL = 'https://revgeocode.search.hereapi.com/v1/';
const API_TOKEN = Config.HERE_API_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
});

async function searchByCoordinates(
  lat: string,
  long: string,
): Promise<RevGeocodeResponse> {
  const response = await api.get<RevGeocodeResponse>(
    `revgeocode?at=${lat}%2C${long}&lang=en-US&apiKey=${API_TOKEN}`,
  );
  return response.data;
}

export const geoLocationApi = {searchByCoordinates};
