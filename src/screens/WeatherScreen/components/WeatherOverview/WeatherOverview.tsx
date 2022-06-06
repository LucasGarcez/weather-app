import React from 'react';
import {Image} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Heading, Paragraph} from '@components/atoms/Text';

export function WeatherOverview() {
  return (
    <Box
      borderWidth={1}
      borderColor={'primary'}
      borderRadius={6}
      paddingX={4}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Image
        style={{width: 200, height: 200, margin: -32}}
        source={{
          uri: 'https://openweathermap.org/img/wn/02d@4x.png',
        }}
      />
      <Box alignItems={'flex-end'}>
        <Heading>21</Heading>
        <Paragraph size="large">city name</Paragraph>
      </Box>
    </Box>
  );
}
