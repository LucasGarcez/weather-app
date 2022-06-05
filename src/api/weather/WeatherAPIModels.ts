//TODO: handle Icon https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
//TODO: Ref: https://openweathermap.org/api/one-call-3
export interface Weather {
  id: number;
  main: string; //'Clouds';
  description: string; // 'scattered clouds';
  icon: string; //'03d';
}

export interface WeatherOneCallResponse {
  lat: number;
  lon: number;
  timezone: number; //'America/New_York';
  timezone_offset: number; // -18000;
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
  };
  minutely: [
    {
      dt: string;
      precipitation: string;
    },
  ];
  hourly: [
    {
      dt: number;
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: Weather[];
      pop: number;
    },
  ];
  daily: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      moon_phase: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      dew_point: number;
      wind_speed: number;
      wind_deg: number;
      wind_gust: number;
      weather: Weather[];
      clouds: number;
      pop: number;
      rain: number;
      uvi: number;
    },
  ];
}
