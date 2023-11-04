import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Paragraph} from '@components/atoms/Text';
import {BoxCard} from '@components/molecules/BoxCard/BoxCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components/native';

interface WeatherDetailsProps {
  humidity: number;
  pressure: number;
  uvi: number;
  wind_speed: number;
  visibility: number;
  clouds: number;
}

const NUM_COLUMNS = 3;
export function WeatherDetails({
  humidity,
  pressure,
  uvi,
  wind_speed,
  visibility,
  clouds,
}: WeatherDetailsProps) {
  const line1: ItemProps[] = [
    {iconName: 'water-percent', value: humidity, label: 'umidade'},
    {iconName: 'earth', value: pressure, label: 'pressão'},
    {iconName: 'weather-sunny', value: uvi, label: 'UV'},
  ];

  const line2: ItemProps[] = [
    {iconName: 'tailwind', value: wind_speed, label: 'vento'},
    {iconName: 'eye', value: visibility, label: 'visibilidade'},
    {iconName: 'cloud', value: clouds, label: 'nuvens'},
  ];

  const lines = [line1, line2];

  return (
    <BoxCard padding={0} mt={4}>
      {lines.map((line, index) => {
        return (
          <Box key={index} flexDirection="row">
            {line.map(item => (
              <Item key={item.label} {...item} />
            ))}
          </Box>
        );
      })}
    </BoxCard>
  );
}

interface ItemProps {
  iconName: string;
  value: number;
  label: string;
}
function Item({iconName, value, label}: ItemProps) {
  const {colors, space} = useTheme();
  const WIDTH = (Dimensions.get('screen').width - 2 * space[4]) / NUM_COLUMNS;
  return (
    <Box width={WIDTH} alignItems="center" padding={4}>
      <Icon name={iconName} size={30} color={colors.onBackground} />
      <Paragraph fontWeight="bold">{value}</Paragraph>
      <Paragraph>{label}</Paragraph>
    </Box>
  );
}
