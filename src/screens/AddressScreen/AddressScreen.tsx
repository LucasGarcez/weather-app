import React from 'react';
import {Button, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export function AddressScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Address Screen</Text>
      <Button
        title="tela de clima"
        onPress={() => navigation.navigate('WeatherScreen')}
      />
    </View>
  );
}
