import React from 'react';

import {QueryClient, QueryClientProvider} from 'react-query';

import {ThemeProvider} from 'src/themes/Theme';

export const ComponentWrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient({
    defaultOptions: {queries: {cacheTime: 0}},
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
