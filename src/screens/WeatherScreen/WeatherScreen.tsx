import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {weatherService} from '@services/weatherService/weatherService';

import {RootStackParamList} from 'src/router/Router';

type ScreenProps = StackScreenProps<RootStackParamList, 'WeatherScreen'>;
export function WeatherScreen({route, navigation}: ScreenProps) {
  const [test, setTest] = useState('s');
  const {geoCoordinates} = route.params;

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const resp = await weatherService.getCurrentWeather(
      geoCoordinates.latitude,
      geoCoordinates.longitude,
    );

    setTest(resp.current.clouds.toString());
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Weather Screen</Text>
      {test && <Text>{test}</Text>}
    </View>
  );
}
