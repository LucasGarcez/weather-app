import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {GeoCoordinates} from 'src/models/Geolocation';

export function AddressScreen() {
  const [geoCoordinates, setGeoCoordinates] = useState<GeoCoordinates>();

  const [error, setError] = useState<Geolocation.PositionError>();
  const navigation = useNavigation();

  useEffect(() => {
    getCoordinates();
  }, []);

  async function getCoordinates() {
    try {
      const coords = await geolocationService.getCurrentCoordinates();
      setGeoCoordinates(coords);
    } catch (error) {
      console.log('handle:', error);
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Address Screen</Text>

      {geoCoordinates && <Text>COORDs: {geoCoordinates.latitude}</Text>}
      {error && <Text>ERROR: {error}</Text>}
      <Button title="tela de clima" onPress={getCoordinates} />
    </View>
  );
}
