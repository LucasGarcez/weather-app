import 'react-native-gesture-handler';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components/native';

import {darkTheme} from 'src/themes/darkTheme';

import {Router} from './src/router/Router';

Icon.loadFont();

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
