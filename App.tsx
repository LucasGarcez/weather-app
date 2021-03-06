import 'react-native-gesture-handler';

import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ThemeProvider} from 'src/themes/Theme';

import {Router} from './src/router/Router';

Icon.loadFont();

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
