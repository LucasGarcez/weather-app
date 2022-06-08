import React, {useEffect, useState} from 'react';

import {Box} from '@components/atoms/Box';
import {Button} from '@components/atoms/Button/Button';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {Address} from 'src/models/Address';
import {GeoCoordinates} from 'src/models/Geolocation';

import {InfoList} from './components/InfoList/InfoList';

export function AddressScreen() {
  const [geoCoordinates, setGeoCoordinates] = useState<GeoCoordinates>();
  const [address, setAddress] = useState<Address>();
  const [error, setError] = useState<Geolocation.PositionError>();
  const {colors} = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    if (geoCoordinates) {
      getAddress(geoCoordinates.latitude, geoCoordinates.longitude);
    }
  }, [geoCoordinates]);

  async function getAddress(lat: number, long: number) {
    try {
      const _address = await geolocationService.getAddressByCoordinates(
        lat,
        long,
      );
      console.log({_address});
      setAddress(_address);
    } catch (e) {
      //TODO: Handle Erro
      console.log('address Error:', e);
    }
  }

  async function getCoordinates() {
    try {
      const coords = await geolocationService.getCurrentCoordinates();
      setGeoCoordinates(coords);
    } catch (e) {
      //TODO: Handle Erro
      console.log('handle:', e);
    }
  }

  return (
    <ScreenTemplate>
      <Box alignItems="center">
        <Icon name="map-marker-outline" size={150} color={colors.primary} />
      </Box>

      {geoCoordinates && (
        <InfoList
          title="Coordenadas"
          items={[
            {label: 'Latitude', value: geoCoordinates.latitude},
            {label: 'Longitude', value: geoCoordinates.latitude},
          ]}
        />
      )}

      <Box mt={4}>
        {address && (
          <InfoList
            title="Endereço"
            items={[
              {label: 'País', value: address.countryName},
              {label: 'Estado', value: address.state},
              {label: 'Cidade', value: address.city},
              {label: 'Rua', value: address.street},
              {label: 'Número', value: address.houseNumber},
            ]}
          />
        )}
      </Box>

      {geoCoordinates && address && (
        <Button
          mt={8}
          variant="secondary"
          iconName="weather-sunny"
          title="VER CLIMA"
          onPress={() =>
            navigation.navigate('WeatherScreen', {geoCoordinates, address})
          }
        />
      )}
    </ScreenTemplate>
  );
}
