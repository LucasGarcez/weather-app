import React from 'react';

import {Box, BoxProps} from '@components/atoms/Box';

export const BoxCard: React.FC<BoxProps> = ({children, ...boxProps}) => {
  return (
    <Box
      borderWidth={1}
      borderColor={'primary'}
      borderRadius={6}
      paddingX={4}
      {...boxProps}>
      {children}
    </Box>
  );
};
