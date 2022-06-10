import React from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from 'styled-components/native';

export function LoadingIndicator() {
  const {colors} = useTheme();
  return <ActivityIndicator size={'large'} color={colors.primary} />;
}
