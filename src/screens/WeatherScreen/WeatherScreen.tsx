import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {Button} from '@components/atoms/Button/Button';
import {Heading, Paragraph} from '@components/atoms/Text';
import {SelectWeekDay} from '@components/molecules/SelectWeekDay/SelectWeekDay';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import {StackScreenProps} from '@react-navigation/stack';
import {useQuery} from 'react-query';

import {weatherService} from '@services/weatherService/weatherService';

import {DaysOfWeek} from 'src/models/DaysOfWeek';
import {QueryKey} from 'src/models/QueryKey';
import {RootStackParamList} from 'src/router/Router';
import {dateUtils} from 'src/utils/dateUtils';

import {DayWeatherInfo} from './components/DayWeatherInfo/DayWeatherInfo';
import {WeatherDetails} from './components/WeatherDetails/WeatherDetails';
import {WeatherOverview} from './components/WeatherOverview/WeatherOverview';

type ScreenProps = StackScreenProps<RootStackParamList, 'WeatherScreen'>;
export function WeatherScreen({route}: ScreenProps) {
  const [day, setDay] = useState<DaysOfWeek>(dateUtils.getCurrentDayOfWeek());

  const {
    geoCoordinates: {latitude, longitude},
    address,
  } = route.params;

  const {
    data: weatherInfo,
    refetch,
    isFetching,
  } = useQuery(QueryKey.WEATHER, () =>
    weatherService.getCurrentWeather(latitude, longitude),
  );

  return (
    <ScreenTemplate canGoBack>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
        <Heading mb={4} size="large">
          Clima Agora
        </Heading>
        {weatherInfo && (
          <WeatherOverview
            city={address?.city}
            temp={weatherInfo.current.temp}
            weather={weatherInfo.current.weather[0]}
          />
        )}
        {weatherInfo && (
          <Paragraph mt={4} textAlign="center" size="large">
            {weatherInfo.current.weather[0].description}
          </Paragraph>
        )}
        {weatherInfo && (
          <WeatherDetails
            humidity={weatherInfo.current.humidity}
            pressure={weatherInfo.current.pressure}
            uvi={weatherInfo.current.uvi}
            wind_speed={weatherInfo.current.wind_speed}
            visibility={weatherInfo.current.visibility}
            clouds={weatherInfo.current.clouds}
          />
        )}

        <Heading mt={8} mb={4} size="large">
          Próximos dias
        </Heading>
        <SelectWeekDay value={day} onChangeValue={setDay} />
        {weatherInfo && <DayWeatherInfo day={day} daily={weatherInfo?.daily} />}

        <Button
          mt={8}
          isLoading={isFetching}
          title="Atualizar Dados"
          onPress={refetch}
        />
      </ScrollView>
    </ScreenTemplate>
  );
}
