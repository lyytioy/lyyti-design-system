import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme';
import { CssBaseline } from '@material-ui/core';

interface ThemeSelectorProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeSelector = ({ children }: ThemeSelectorProps): JSX.Element => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeSelector;
