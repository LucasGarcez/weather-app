import 'react-native-gesture-handler';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeProvider} from 'styled-components/native';

Icon.loadFont();

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
