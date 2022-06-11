import React from 'react';

import {Box} from '@components/atoms/Box';
import {Button} from '@components/atoms/Button/Button';
import {Paragraph} from '@components/atoms/Text';
import {PermissionStatus, openSettings} from 'react-native-permissions';
import {useQuery} from 'react-query';

import {geolocationService} from '@services/geolocationService/geolocationService';

interface Props {
  status: PermissionStatus;
}
export function PermissionBox({status}: Props) {
  let component = null;

  const {refetch} = useQuery(
    'location',
    geolocationService.getCurrentCoordinates,
    {
      enabled: false,
    },
  );

  switch (status) {
    case 'blocked':
      component = (
        <>
          <Paragraph mb={2}>É preciso conceder acesso a localização</Paragraph>
          <Button variant="outline" title="Conceder" onPress={refetch} />
        </>
      );
      break;

    case 'denied':
      component = (
        <>
          <Paragraph mb={2}>
            É preciso conceder acesso a localização através das configurações do
            seu dispositivo
          </Paragraph>
          <Button
            variant="outline"
            title="Abrir Configurações"
            onPress={openSettings}
          />
        </>
      );
      break;
  }
  return <Box testID="PermissionBox">{component}</Box>;
}
