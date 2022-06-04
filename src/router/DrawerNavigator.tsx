import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {AddressScreen} from '@screens/AddressScreen/AddressScreen';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="AddressScreen">
      <Drawer.Screen name="AddressScreen" component={AddressScreen} />
    </Drawer.Navigator>
  );
}
