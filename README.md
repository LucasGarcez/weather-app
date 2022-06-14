# React Native Weather App

This is a React Native App to show information about location and weather. The App use two service to handle this information.

- [Here API](https://www.here.com/) to reverse geocoding
- [Open Weather API](https://openweathermap.org/api) for weather

### Setup Environment

Project created with React Native CLI.[ See official docs](https://reactnative.dev/docs/environment-setup) to set up the environment.

**Env Variables**

Create a file called .env in the root of the project with the following variables:

```
HERE_API_KEY=
WEATHER_API_KEY=
```

There is an example in [.env.example](./.env.example). **You need request the keys to the project owner**.

### Run

**Install dependencies**

```
yarn
```

**Install IOS Pods**

```
cd ios && pod install
```

**Run IOS**

```
yarn ios
```

**Run Android**

```
yarn android
```

**Run Tests**

```
yarn test
```

### 🛠 Tech and Libraries

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/): Routing and navigation
- [Axios](https://github.com/axios/axios): Promise based HTTP client
- [React Query](https://react-query.tanstack.com/): Fetching, caching, synchronizing and updating server state.
- [Geolocation](https://github.com/Agontuk/react-native-geolocation-service): Geolocation service
- [styled-components](https://styled-components.com/) and [styled-system](https://styled-system.com/) for theme and build UI

### App Screenshots

|                |              Android (Light)               |              Android (Dark)               | IOS (Light)                            | IOS (Dark)                            |
| :------------: | :----------------------------------------: | :---------------------------------------: | -------------------------------------- | ------------------------------------- |
| Address Screen | ![](docs/images/android/light_address.png) | ![](docs/images/android/dark_address.png) | ![](docs/images/ios/light_address.png) | ![](docs/images/ios/dark_address.png) |
| Weather Screen | ![](docs/images/android/light_weather.png) | ![](docs/images/android/dark_weather.png) | ![](docs/images/ios/light_weather.png) | ![](docs/images/ios/dark_weather.png) |
| Config Screen  | ![](docs/images/android/light_config.png)  | ![](docs/images/android/dark_config.png)  | ![](docs/images/ios/light_config.png)  | ![](docs/images/ios/dark_config.png)  |
|      Menu      |  ![](docs/images/android/light_menu.png)   |  ![](docs/images/android/dark_menu.png)   | ![](docs/images/ios/light_menu.png)    | ![](docs/images/ios/dark_menu.png)    |
