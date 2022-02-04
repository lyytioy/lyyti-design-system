import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

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
