import React from 'react';

import {LoadingIndicator} from '@components/molecules/LoadingIndicator/LoadingIndicator';
import {useQuery} from 'react-query';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {PermissionError} from 'src/models/error/PermissionError';
import {QueryKey} from 'src/models/QueryKey';

import {InfoList} from '../InfoList/InfoList';
import {PermissionBox} from '../PermissionBox/PermissionBox';

export function CoordinatesInfo() {
  const {data, error, isLoading} = useQuery(
    QueryKey.GEOLOCATION,
    geolocationService.getCurrentCoordinates,
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    if (error instanceof PermissionError) {
      return <PermissionBox status={error.status} />;
    }
  }

  if (data) {
    return (
      <InfoList
        title="Coordenadas"
        items={[
          {label: 'Latitude', value: data.latitude},
          {label: 'Longitude', value: data.longitude},
        ]}
      />
    );
  }

  return null;
}
