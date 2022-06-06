import React from 'react';

import {Box, BoxProps} from '@components/atoms/Box';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = BoxProps;
export const ScreenTemplate: React.FC<Props> = ({children, ...rest}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      backgroundColor={'background'}
      paddingX={4}
      paddingTop={top + 2}
      paddingBottom={6}
      {...rest}>
      {children}
    </Box>
  );
};
