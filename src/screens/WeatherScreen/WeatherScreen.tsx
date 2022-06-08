import React, {useEffect, useState} from 'react';

import {Heading, Paragraph} from '@components/atoms/Text';
import {SelectWeekDay} from '@components/molecules/SelectWeekDay/SelectWeekDay';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import {StackScreenProps} from '@react-navigation/stack';

import {weatherService} from '@services/weatherService/weatherService';

import {WeatherOneCallResponse} from 'src/api/weather/WeatherAPIModels';
import {DaysOfWeek} from 'src/models/DaysOfWeek';
import {RootStackParamList} from 'src/router/Router';

import {WeatherDetails} from './components/WeatherDetails/WeatherDetails';
import {WeatherOverview} from './components/WeatherOverview/WeatherOverview';

type ScreenProps = StackScreenProps<RootStackParamList, 'WeatherScreen'>;
export function WeatherScreen({route}: ScreenProps) {
  const [day, setDay] = useState<DaysOfWeek>(DaysOfWeek.Monday);
  const [weatherInfo, setWeatherInfo] = useState<WeatherOneCallResponse>();
  const {geoCoordinates, address} = route.params;

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getWeather() {
    try {
      const _weatherInfo = await weatherService.getCurrentWeather(
        geoCoordinates.latitude,
        geoCoordinates.longitude,
      );

      setWeatherInfo(_weatherInfo);
    } catch (error) {
      //TODO: Handle Error
    }
  }

  return (
    <ScreenTemplate canGoBack>
      <Heading mb={4} size="large">
        Clima Agora
      </Heading>
      {weatherInfo && (
        <WeatherOverview
          city={address.city}
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
    </ScreenTemplate>
  );
}
