import React from 'react';

import {QueryClient, QueryClientProvider, setLogger} from 'react-query';

import {ThemeProvider} from 'src/themes/Theme';

export const ComponentWrapper: React.FC = ({children}) => {
  setLogger({
    log: () => {},
    warn: () => {},
    error: () => {},
  });
  const queryClient = new QueryClient({
    defaultOptions: {queries: {cacheTime: 0, retry: false}},
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
