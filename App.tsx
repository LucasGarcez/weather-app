import 'react-native-gesture-handler';

import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import {darkTheme} from 'src/themes/darkTheme';

import {Router} from './src/router/Router';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
