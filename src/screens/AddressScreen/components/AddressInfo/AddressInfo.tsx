import React from 'react';

import {Button} from '@components/atoms/Button/Button';
import {LoadingIndicator} from '@components/molecules/LoadingIndicator/LoadingIndicator';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';

import {geolocationService} from '@services/geolocationService/geolocationService';

import {GeoCoordinates} from 'src/models/Geolocation';
import {QueryKey} from 'src/models/QueryKey';

import {InfoList} from '../InfoList/InfoList';

interface Props {
  geoCoordinates: GeoCoordinates;
}
export function AddressInfo({geoCoordinates}: Props) {
  const navigation = useNavigation();

  const {
    data: address,
    isLoading,
    error,
  } = useQuery(QueryKey.ADDRESS, () =>
    geolocationService.getAddressByCoordinates(
      geoCoordinates.latitude,
      geoCoordinates.longitude,
    ),
  );

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    //handle erro
  }

  if (address) {
    return (
      <>
        <InfoList
          title="Endereço"
          items={[
            {label: 'País', value: address.countryName},
            {label: 'Estado', value: address.state},
            {label: 'Cidade', value: address.city},
            {label: 'Rua', value: address.street},
            {label: 'Número', value: address.houseNumber},
          ]}
        />
        <Button
          mt={8}
          variant="primary"
          iconName="weather-sunny"
          title="VER CLIMA"
          onPress={() =>
            navigation.navigate('WeatherScreen', {
              geoCoordinates: geoCoordinates,
              address,
            })
          }
        />
      </>
    );
  }

  return null;
}
