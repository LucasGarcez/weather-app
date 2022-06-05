import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {GeoCoordinates} from 'src/models/Geolocation';
import {Address} from 'src/models/Address';

export function AddressScreen() {
  const [geoCoordinates, setGeoCoordinates] = useState<GeoCoordinates>();
  const [address, setAddress] = useState<Address>();

  const [error, setError] = useState<Geolocation.PositionError>();
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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Address Screen</Text>

      {geoCoordinates && <Text>COORDs: {geoCoordinates.latitude}</Text>}
      {address && <Text>ADDRESS: {address.city}</Text>}
      {error && <Text>ERROR: {error}</Text>}
      {geoCoordinates && (
        <Button
          title="ver informações climáticas"
          onPress={() => navigation.navigate('WeatherScreen', {geoCoordinates})}
        />
      )}
    </View>
  );
}
