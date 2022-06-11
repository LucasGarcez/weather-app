import Geolocation from 'react-native-geolocation-service';

import {permissionService} from '@services/permissionService/permissionService';

import {geoLocationApi} from 'src/api/geolocation/geolocationApi';
import {Address} from 'src/models/Address';
import {GeoLocationError} from 'src/models/error/GeoLocationError';
import {PermissionError} from 'src/models/error/PermissionError';
import {GeoCoordinates} from 'src/models/Geolocation';

async function getCurrentCoordinates(): Promise<GeoCoordinates> {
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

async function getAddressByCoordinates(
  lat: string | number,
  long: string | number,
): Promise<Address> {
  const resp = await geoLocationApi.searchByCoordinates(
    lat.toString(),
    long.toString(),
  );
  const first = resp.items[0];
  return first.address;
}

export const geolocationService = {
  getCurrentCoordinates,
  getAddressByCoordinates,
};
