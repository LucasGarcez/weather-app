import React from 'react';
import {Image} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Heading, Paragraph} from '@components/atoms/Text';
import {BoxCard} from '@components/molecules/BoxCard/BoxCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';

import {weatherService} from '@services/weatherService/weatherService';

import {Weather} from 'src/api/weather/WeatherAPIModels';

interface Props {
  city: string;
  weather: Weather;
  temp: number;
}
export function WeatherOverview({city, weather, temp}: Props) {
  const {colors} = useTheme();
  return (
    <BoxCard
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Image
        style={{width: 200, height: 200, margin: -32}}
        source={{uri: weatherService.getIconURL(weather.icon)}}
      />
      <Box alignItems={'flex-end'}>
        <Heading>{Math.round(temp)}°</Heading>

        <Box mt={4} flexDirection="row" alignItems="center">
          <Icon
            name="map-marker-outline"
            size={20}
            color={colors.onBackground}
          />
          <Paragraph ml={2} size="large">
            {city}
          </Paragraph>
        </Box>
      </Box>
    </BoxCard>
  );
}
