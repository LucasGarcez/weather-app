import React, {createContext, useState} from 'react';

import {ThemeProvider as ThemeProviderStyled} from 'styled-components/native';

import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}
const themes = {
  light: lightTheme,
  dark: darkTheme,
};
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
export const ThemeProvider: React.FunctionComponent = ({children}) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
