import React from 'react';
import {Image} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Paragraph} from '@components/atoms/Text';
import {BoxCard} from '@components/molecules/BoxCard/BoxCard';

import {weatherService} from '@services/weatherService/weatherService';

import {WeatherOneCallResponse} from 'src/api/weather/WeatherAPIModels';
import {DaysOfWeek} from 'src/models/DaysOfWeek';
import {formatUtils} from 'src/utils/formatUtils';

const mapDayToIndex = {
  [DaysOfWeek.Monday]: 0,
  [DaysOfWeek.Tuesday]: 1,
  [DaysOfWeek.Wednesday]: 2,
  [DaysOfWeek.Thursday]: 3,
  [DaysOfWeek.Friday]: 4,
  [DaysOfWeek.Saturday]: 5,
  [DaysOfWeek.Sunday]: 6,
};

interface Props {
  day: DaysOfWeek;
  daily: WeatherOneCallResponse['daily'];
}

export function DayWeatherInfo({day, daily}: Props) {
  const selectedDay = daily[mapDayToIndex[day]];

  const weather = selectedDay.weather[0];

  return (
    <BoxCard
      mt={4}
      flexDirection={'row'}
      alignItems="center"
      justifyContent={'space-between'}>
      <Image
        style={{width: 80, height: 80, marginLeft: -20}}
        source={{uri: weatherService.getIconURL(weather.icon)}}
      />
      <Box>
        <Paragraph fontWeight={'bold'}>
          Mínima:{' '}
          <Paragraph>{formatUtils.formatTem(selectedDay.temp.min)}</Paragraph>
        </Paragraph>
        <Paragraph fontWeight={'bold'}>
          Máxima:{' '}
          <Paragraph>{formatUtils.formatTem(selectedDay.temp.max)}</Paragraph>
        </Paragraph>
      </Box>
    </BoxCard>
  );
}
