import React, {ComponentProps} from 'react';

import {render, fireEvent, waitFor} from '@testing-library/react-native';
import RNPermissionMock from 'react-native-permissions/mock';
import {ComponentWrapper} from 'testUitls/ComponentWrapper';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {PermissionBox} from '../PermissionBox';

function renderComponent(props: ComponentProps<typeof PermissionBox>) {
  return render(
    <ComponentWrapper>
      <PermissionBox {...props} />
    </ComponentWrapper>,
  );
}

describe('PermissionBox', () => {
  describe('status is blocked', () => {
    it('render Button to user grant access', () => {
      const {getByText} = renderComponent({status: 'blocked'});
      const buttonElement = getByText('Conceder');
      expect(buttonElement).toBeTruthy();
    });

    describe('user pressed button', () => {
      it('call service to get current coordinates', async () => {
        const spyService = spyOn(geolocationService, 'getCurrentCoordinates');
        const {getByText} = renderComponent({status: 'blocked'});
        const buttonElement = getByText('Conceder');

        fireEvent.press(buttonElement);

        await waitFor(async () => {
          expect(spyService).toBeCalled();
        });
      });
    });
  });
  describe('status is denied', () => {
    it('render Button to user open device settings', () => {
      const {getByText} = renderComponent({status: 'denied'});
      const buttonElement = getByText('Abrir Configurações');
      expect(buttonElement).toBeTruthy();
    });

    describe('user pressed button', () => {
      it('open settings', async () => {
        const {getByText} = renderComponent({status: 'denied'});
        const buttonElement = getByText('Abrir Configurações');

        fireEvent.press(buttonElement);

        await waitFor(async () => {
          expect(RNPermissionMock.openSettings).toBeCalled();
        });
      });
    });
  });
});
