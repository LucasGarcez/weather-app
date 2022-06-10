import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {WeatherScreen} from '@screens/WeatherScreen/WeatherScreen';

import {Address} from 'src/models/Address';
import {GeoCoordinates} from 'src/models/Geolocation';

import {DrawerNavigator} from './DrawerNavigator';

export type RootStackParamList = {
  DrawerNavigator: undefined;
  WeatherScreen: {geoCoordinates: GeoCoordinates; address?: Address};
};

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
