import React from 'react';

import {render} from '@testing-library/react-native';
import {ComponentWrapper} from 'testUitls/ComponentWrapper';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {PermissionError} from 'src/models/error/PermissionError';

import {CoordinatesInfo} from '../CoordinatesInfo';

import {mock} from './mocks';

function renderComponent() {
  return render(
    <ComponentWrapper>
      <CoordinatesInfo />
    </ComponentWrapper>,
  );
}

describe('CoordinatesInfo', () => {
  describe('the service return coordinates', () => {
    it('show latitude and longitude', async () => {
      jest
        .spyOn(geolocationService, 'getCurrentCoordinates')
        .mockResolvedValueOnce(mock.geoCoordinates);

      const {findByText, getByText} = renderComponent();

      const lat = mock.geoCoordinates.latitude.toString();
      const long = mock.geoCoordinates.longitude.toString();

      await findByText(lat);

      expect(getByText(lat)).toBeTruthy();
      expect(getByText(long)).toBeTruthy();
    });
  });
  describe('the service throw a error', () => {
    it('render PermissionBox', async () => {
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      jest
        .spyOn(geolocationService, 'getCurrentCoordinates')
        .mockRejectedValueOnce(new PermissionError('blocked'));

      const {findByTestId} = renderComponent();

      const permissionComponent = await findByTestId('PermissionBox');

      expect(permissionComponent).toBeTruthy();
    });
  });
});
