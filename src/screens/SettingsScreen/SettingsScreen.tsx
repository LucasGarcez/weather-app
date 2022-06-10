import React, {useContext} from 'react';
import {Switch} from 'react-native';

import {Box} from '@components/atoms/Box';
import {Heading} from '@components/atoms/Text';
import {ScreenTemplate} from '@components/templates/screen/ScreenTemplate';
import {useTheme} from 'styled-components/native';

import {ThemeContext, ThemeType} from 'src/themes/Theme';

export function SettingsScreen() {
  const {toggleTheme, theme} = useContext(ThemeContext);
  const {colors} = useTheme();

  const darkThemeIsEnabled = theme === ThemeType.dark;
  return (
    <ScreenTemplate>
      <Box flexDirection="row" justifyContent="space-between">
        <Heading size="small">Ativar tema Dark:</Heading>
        <Switch
          trackColor={{false: colors.secondary, true: colors.primary}}
          thumbColor={darkThemeIsEnabled ? colors.secondary : colors.gray}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={darkThemeIsEnabled}
        />
      </Box>
    </ScreenTemplate>
  );
}
