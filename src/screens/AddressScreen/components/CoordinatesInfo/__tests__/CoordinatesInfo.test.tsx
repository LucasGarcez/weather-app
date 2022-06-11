import React from 'react';

import {render} from '@testing-library/react-native';
import {ComponentWrapper} from '__tests__/ComponentWrapper';

import {geolocationService} from '@services/geolocationService/geolocationService';

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
});
