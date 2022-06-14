import {GeoPosition} from 'react-native-geolocation-service';

const geoPosition: GeoPosition = {
  coords: {
    accuracy: 1,
    altitude: 1,
    latitude: 1,
    altitudeAccuracy: 1,
    longitude: 1,
    speed: 1,
    heading: 1,
  },
  timestamp: 1,
};

export const mocks = {
  geoPosition,
};
