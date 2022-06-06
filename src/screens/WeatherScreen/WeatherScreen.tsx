import React, {useState} from 'react';

import {Paragraph} from '@components/atoms/Text';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import {StackScreenProps} from '@react-navigation/stack';

import {weatherService} from '@services/weatherService/weatherService';

import {RootStackParamList} from 'src/router/Router';
import {WeatherOverview} from './components/WeatherOverview/WeatherOverview';
import {SelectWeekDay} from '@components/molecules/SelectWeekDay/SelectWeekDay';
import {DaysOfWeek} from 'src/models/DaysOfWeek';

type ScreenProps = StackScreenProps<RootStackParamList, 'WeatherScreen'>;
export function WeatherScreen({route, navigation}: ScreenProps) {
  const [day, setDay] = useState<DaysOfWeek>(DaysOfWeek.Monday);
  return (
    <ScreenTemplate>
      <WeatherOverview />
      <SelectWeekDay value={day} onChangeValue={setDay} />
    </ScreenTemplate>
  );
}
