import {Platform} from 'react-native';

import {
  check,
  PERMISSIONS,
  checkMultiple,
  PermissionStatus,
} from 'react-native-permissions';

async function checkIOSLocation(): Promise<PermissionStatus> {
  const status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  return status;
}

//TODO: validar android 12: https://developer.android.com/training/location/permissionss
async function checkAndroidLocation(): Promise<PermissionStatus> {
  const status = await checkMultiple([
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  ]);
  // const coarseStatus = status['android.permission.ACCESS_COARSE_LOCATION']
  const fineStatus = status['android.permission.ACCESS_FINE_LOCATION'];
  return fineStatus;
}

async function checkLocation(): Promise<PermissionStatus> {
  if (Platform.OS === 'android') {
    return await checkAndroidLocation();
  }
  return await checkIOSLocation();
}

export const permissionService = {
  checkLocation,
};
