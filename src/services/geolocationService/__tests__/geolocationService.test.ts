import Geolocation from 'react-native-geolocation-service';

import {permissionService} from '@services/permissionService/permissionService';

import {GeoLocationError} from 'src/models/error/GeoLocationError';
import {PermissionError} from 'src/models/error/PermissionError';

import {geolocationService} from '../geolocationService';

import {mocks} from './mocks';

describe('geolocationService', () => {
  describe('getCurrentCoordinates', () => {
    describe('location permission is NOT granted', () => {
      it('throw a PermissionError', async () => {
        jest
          .spyOn(permissionService, 'checkLocation')
          .mockResolvedValueOnce('denied');
        Geolocation.getCurrentPosition = jest
          .fn()
          .mockImplementation((successCallback, _) => {
            successCallback();
          });
        try {
          await geolocationService.getCurrentCoordinates();
          expect(true).toBe(false);
        } catch (e) {
          expect(e instanceof PermissionError).toBeTruthy();
        }
      });
    });
    describe('location permission is  granted', () => {
      describe('Geolocation found position', () => {
        it('return coords', async () => {
          jest
            .spyOn(permissionService, 'checkLocation')
            .mockResolvedValueOnce('granted');
          Geolocation.getCurrentPosition = jest
            .fn()
            .mockImplementation((successCallback, _) => {
              successCallback(mocks.geoPosition);
            });
          const coords = await geolocationService.getCurrentCoordinates();
          expect(coords).toBe(mocks.geoPosition.coords);
        });
      });
      describe('Geolocation NOT found position', () => {
        it('throw GeoLocationError', async () => {
          jest
            .spyOn(permissionService, 'checkLocation')
            .mockResolvedValueOnce('granted');
          Geolocation.getCurrentPosition = jest
            .fn()
            .mockImplementation((_, errorCallback) => {
              errorCallback({
                code: 1,
                message: 'error message 42',
              });
            });
          try {
            await geolocationService.getCurrentCoordinates();
            expect(true).toBe(false);
          } catch (e) {
            expect(e instanceof GeoLocationError).toBeTruthy();
          }
        });
      });
    });
  });
  describe('getAddressByCoordinates', () => {
    //TODO:
  });
});
