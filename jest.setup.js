/* eslint-disable no-undef */
import mockInfo from 'react-native-permissions/mock';
jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
}));

jest.mock('react-native-permissions', () => mockInfo);
