import Geolocation from 'react-native-geolocation-service';

import {permissionService} from '@services/permissionService/permissionService';

import {GeoLocationError} from 'src/models/error/GeoLocationError';
import {PermissionError} from 'src/models/error/PermissionError';

// https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-reverse-geocode-brief.html
async function getCurrentCoordinates(): Promise<Geolocation.GeoCoordinates> {
  const permissionStatus = await permissionService.checkLocation();
  if (permissionStatus !== 'granted') {
    throw new PermissionError(permissionStatus);
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      geoPosition => {
        resolve(geoPosition.coords);
      },
      geoError => {
        reject(new GeoLocationError(geoError));
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
}

export const geolocationService = {getCurrentCoordinates};
