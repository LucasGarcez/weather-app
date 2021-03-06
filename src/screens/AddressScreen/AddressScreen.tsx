import React from 'react';

import {Box} from '@components/atoms/Box';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useQuery} from 'react-query';
import {useTheme} from 'styled-components/native';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {QueryKey} from 'src/models/QueryKey';

import {AddressInfo} from './components/AddressInfo/AddressInfo';
import {CoordinatesInfo} from './components/CoordinatesInfo/CoordinatesInfo';

export function AddressScreen() {
  const {colors} = useTheme();

  const {data: geoCoordinates} = useQuery(
    QueryKey.GEOLOCATION,
    geolocationService.getCurrentCoordinates,
  );

  return (
    <ScreenTemplate pt={4}>
      <Box flex={1} justifyContent="space-between">
        <Box>
          <Box alignItems="center">
            <Icon name="map-marker-outline" size={100} color={colors.primary} />
          </Box>

          <Box mt={4}>
            <CoordinatesInfo />
          </Box>

          {geoCoordinates && (
            <Box mt={4}>
              <AddressInfo geoCoordinates={geoCoordinates} />
            </Box>
          )}
        </Box>
      </Box>
    </ScreenTemplate>
  );
}
