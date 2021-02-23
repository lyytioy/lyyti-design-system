import React, { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme';
import { CssBaseline } from '@material-ui/core';
import './buttonStyles.css';

interface ThemeSelectorProps {
  children: ReactNode;
}

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({ children }: ThemeSelectorProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSelector;
