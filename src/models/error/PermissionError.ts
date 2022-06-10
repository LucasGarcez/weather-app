import {PermissionStatus} from 'react-native-permissions';

export class PermissionError extends Error {
  status: PermissionStatus;

  constructor(status: PermissionStatus) {
    super(status);
    this.status = status;
  }
}
