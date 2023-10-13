import { createTheme } from '@mui/material/styles';

const baseFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const objektivMk1FontFamily = ['"Objektiv MK1"'].concat(baseFontStack).join(',');
const objektivMk3FontFamily = ['"Objektiv MK3"'].concat(baseFontStack).join(',');

export default createTheme({
  palette: {
    primary: {
      main: '#045B56',
      dark: '#034E49',
      light: '#05756F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EE8B3A',
      dark: '#DD6E13',
      light: '#F2A96D',
      contrastText: '#FFFFFF',
    },
    light: {
      main: '#FAFAFA',
      dark: '#F3F3F3',
      light: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#192832',
      secondary: '#7A8389',
      disabled: 'rgba(122, 131, 137, 0.5)',
    },
    action: {
      hover: 'rgba(122, 131, 137, 0.1)',
      selected: 'rgba(122, 131, 137, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    grey: {
      '50': '#F9FAFB',
      '100': '#E3E6E9',
      '200': '#B1B9BE',
      '300': '#7A8389',
      '400': '#46545B',
      '500': '#192832',
    },
    sky: {
      '50': '#CDF2F4',
      '100': '#96E4E8',
      '200': '#81DFE4',
      '300': '#42CED6',
      '400': '#0F8898',
      '500': '#0A545D',
    },
    balticSea: {
      '50': '#BFEDE4',
      '100': '#07A8A0',
      '200': '#05756F',
      '300': '#045B56',
      '400': '#11403D',
      '500': '#11302E',
    },
    coral: {
      '50': '#F9C8CB',
      '100': '#F4959C',
      '200': '#F2828B',
      '300': '#EF6872',
      '400': '#9E1919',
      '500': '#690000',
    },
    sunset: {
      '50': '#FADEC7',
      '100': '#F3AF77',
      '200': '#F19E5B',
      '300': '#EE8B3A',
      '400': '#C24700',
      '500': '#561F00',
    },
    sun: {
      '50': '#FEECBD',
      '100': '#FEE095',
      '200': '#FED671',
      '300': '#FDCB49',
      '400': '#D49A00',
      '500': '#805D00',
    },
    sand: {
      '50': '#FCF8F3',
      '100': '#F9F1E7',
      '200': '#F7ECDF',
      '300': '#F4E6D4',
      '400': '#E0C9AC',
      '500': '#735632',
    },
    white: {
      main: '#FFFFFF',
      dark: '#B1B9BE',
      light: '#F3F3F3',
      contrastText: '#045B56',
    },
    primaryStates: {
      activeContained: 'rgba(4, 91, 86, 0.3)',
      hover: 'rgba(4, 91, 86, 0.1)',
      selected: 'rgba(4, 91, 86, 0.08)',
      activeOutlined: 'rgba(4, 91, 86, 0.24)',
      outlinedStroke: 'rgba(4, 91, 86, 0.5)',
    },
    secondaryStates: {
      activeContained: 'rgba(238, 139, 58, 0.3)',
      hover: 'rgba(238, 139, 58, 0.1)',
      selected: 'rgba(238, 139, 58, 0.08)',
      activeOutlined: 'rgba(238, 139, 58, 0.24)',
      outlinedStroke: 'rgba(238, 139, 58, 0.5)',
    },
    errorStates: {
      activeContained: 'rgba(211, 47, 47, 0.3)',
      hover: 'rgba(211, 47, 47, 0.1)',
      selected: 'rgba(211, 47, 47, 0.08)',
      activeOutlined: 'rgba(211, 47, 47, 0.24)',
      outlinedStroke: 'rgba(211, 47, 47, 0.5)',
    },
    infoStates: {
      activeContained: 'rgba(2, 136, 209, 0.3)',
      hover: 'rgba(2, 136, 209, 0.1)',
      selected: 'rgba(2, 136, 209, 0.08)',
      activeOutlined: 'rgba(2, 136, 209, 0.24)',
      outlinedStroke: 'rgba(2, 136, 209, 0.5)',
    },
    warningStates: {
      activeContained: 'rgba(237, 108, 2, 0.3)',
      hover: 'rgba(237, 108, 2, 0.1)',
      selected: 'rgba(237, 108, 2, 0.08)',
      activeOutlined: 'rgba(237, 108, 2, 0.24)',
      outlinedStroke: 'rgba(237, 108, 2, 0.5)',
    },
    successStates: {
      activeContained: 'rgba(46, 125, 50, 0.3)',
      hover: 'rgba(46, 125, 50, 0.1)',
      selected: 'rgba(46, 125, 50, 0.08)',
      activeOutlined: 'rgba(46, 125, 50, 0.24)',
      outlinedStroke: 'rgba(46, 125, 50, 0.5)',
    },
    lightStates: {
      activeContained: 'rgba(250, 250, 250, 0.3)',
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 255, 255, 0.08)',
      activeOutlined: 'rgba(255, 255, 255, 0.24)',
      outlinedStroke: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: objektivMk3FontFamily,
    h1: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '3rem',
      letterSpacing: '-2%',
    },
    h2: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '2.25rem',
      letterSpacing: '-2%',
    },
    h3: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.875rem',
      letterSpacing: '-1%',
    },
    h4: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.375rem',
      letterSpacing: '0em',
    },
    h5: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 400,
      fontSize: '1.125rem',
      letterSpacing: '0em',
    },
    subtitle1: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.1px',
    },
    subtitle2: {
      fontFamily: objektivMk1FontFamily,
      fontWeight: 500,
      fontSize: '0.9375rem',
      letterSpacing: '0.1px',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0em',
    },
    body2: {
      fontSize: '1rem',
      letterSpacing: '0em',
    },
    button: {
      fontFamily: objektivMk1FontFamily,
      textTransform: 'none',
      letterSpacing: '0.01rem',
    },
    caption: {
      fontFamily: objektivMk1FontFamily,
      fontSize: '0.75rem',
      letterSpacing: '0em',
    },
    overline: {},
    navigationLink: {
      fontFamily: objektivMk1FontFamily,
      fontSize: '0.75rem',
      letterSpacing: '0.8px',
    },
  },
  components: {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow:
            '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});
