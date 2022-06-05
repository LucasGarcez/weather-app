import Geolocation from 'react-native-geolocation-service';

export class GeoLocationError extends Error {
  geoErro: Geolocation.GeoError;

  constructor(geoErro: Geolocation.GeoError) {
    super(geoErro.message);
    this.geoErro = geoErro;
  }
}
