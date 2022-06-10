import React from 'react';

import {Box, BoxProps, PressableBox} from '@components/atoms/Box';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';

type Props = {canGoBack?: boolean} & BoxProps;
export const ScreenTemplate: React.FC<Props> = ({
  children,
  canGoBack,
  ...rest
}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {top} = useSafeAreaInsets();

  return (
    <Box
      flex={1}
      backgroundColor={'background'}
      paddingX={4}
      paddingTop={top + 2}
      paddingBottom={6}
      {...rest}>
      {canGoBack && (
        <PressableBox mb={4} onPress={navigation.goBack}>
          <Icon name={'arrow-left'} size={30} color={colors.secondary} />
        </PressableBox>
      )}
      {children}
    </Box>
  );
};
