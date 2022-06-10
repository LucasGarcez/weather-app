import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from 'styled-components/native';

import {AddressScreen} from '@screens/AddressScreen/AddressScreen';
import {SettingsScreen} from '@screens/SettingsScreen/SettingsScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: colors.secondary,
        drawerInactiveTintColor: colors.onBackground,
        headerTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.background,
        },
        drawerStyle: {
          backgroundColor: colors.background,
        },
      }}
      initialRouteName="AddressScreen">
      <Drawer.Screen
        name="AddressScreen"
        options={{title: 'Coordenadas e Endereço'}}
        component={AddressScreen}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Configurações'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
