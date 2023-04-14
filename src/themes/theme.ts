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

interface ColorStateOptions {
  activeContained: string;
  hover: string;
  selected: string;
  activeOutlined: string;
  outlinedStroke: string;
  disabledBg: string;
}

interface ColorShadeOptions {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
}

interface ColorRangeOptions {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    primaryStates: ColorStateOptions;
    secondaryStates: ColorStateOptions;
    errorStates: ColorStateOptions;
    light: ColorShadeOptions;
    lightStates: ColorStateOptions;
    sky: ColorRangeOptions;
    balticSea: ColorRangeOptions;
    coral: ColorRangeOptions;
    sunset: ColorRangeOptions;
    sun: ColorRangeOptions;
    sand: ColorRangeOptions;
  }
  interface PaletteOptions {
    primaryStates: ColorStateOptions;
    secondaryStates: ColorStateOptions;
    errorStates: ColorStateOptions;
    light: ColorShadeOptions;
    lightStates: ColorStateOptions;
    sky: ColorRangeOptions;
    balticSea: ColorRangeOptions;
    coral: ColorRangeOptions;
    sunset: ColorRangeOptions;
    sun: ColorRangeOptions;
    sand: ColorRangeOptions;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    navigationLink: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    navigationLink?: React.CSSProperties;
  }
  interface PaletteColor {
    darkText?: string;
    lightBg?: string;
  }
  interface SimplePaletteColorOptions {
    darkText?: string;
    lightBg?: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navigationLink: true;
  }
}

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
    info: {
      main: '#1F98CD',
      dark: '#18769F',
      light: '#7CCEE9',
      contrastText: '#1F98CD',
      darkText: '#0C3D52',
      lightBg: '#D2EAF5',
    },
    error: {
      main: '#CF482E',
      dark: '#A33924',
      light: '#F4A094',
      contrastText: '#FFFFFF',
      darkText: '#531D11',
      lightBg: '#F5DAD5',
    },
    warning: {
      main: '#F09000',
      dark: '#B86D00',
      light: '#FFC573',
      contrastText: '#F09000',
      darkText: '#603A00',
      lightBg: '#FCE9CC',
    },
    success: {
      main: '#50B54E',
      dark: '#3E903C',
      light: '#99DCA1',
      contrastText: '#50B54E',
      darkText: '#20481F',
      lightBg: '#DCF0DC',
    },
    text: {
      primary: '#192832',
      secondary: '#7A8389',
      disabled: 'rgba(122, 131, 137, 0.5)',
    },
    action: {
      hover: 'rgba(122, 131, 137, 0.1)',
      selected: 'rgba(122, 131, 137, 0.08)',
      disabled: '#B8BCBF',
      disabledBackground: 'rgba(122, 131, 137, 0.5)',
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
    primaryStates: {
      activeContained: 'rgba(4, 91, 86, 0.3)',
      hover: 'rgba(4, 91, 86, 0.1)',
      selected: 'rgba(4, 91, 86, 0.08)',
      activeOutlined: 'rgba(4, 91, 86, 0.24)',
      outlinedStroke: '#045B56',
      disabledBg: '#739C9A',
    },
    secondaryStates: {
      activeContained: 'rgba(238, 139, 58, 0.3)',
      hover: 'rgba(238, 139, 58, 0.1)',
      selected: 'rgba(238, 139, 58, 0.08)',
      activeOutlined: 'rgba(238, 139, 58, 0.24)',
      outlinedStroke: '#EE8B3A',
      disabledBg: '#E4BE9F',
    },
    errorStates: {
      activeContained: 'rgba(209, 73, 46, 0.3)',
      hover: 'rgba(209, 73, 46, 0.1)',
      selected: 'rgba(209, 73, 46, 0.08)',
      activeOutlined: 'rgba(209, 73, 46, 0.24)',
      outlinedStroke: '#D1492E',
      disabledBg: '#F4A094',
    },
    lightStates: {
      activeContained: 'rgba(250, 250, 250, 0.3)',
      hover: 'rgba(255, 255, 255, 0.1)',
      selected: 'rgba(255, 255, 255, 0.08)',
      activeOutlined: 'rgba(255, 255, 255, 0.24)',
      outlinedStroke: 'rgba(255, 255, 255, 0.5)',
      disabledBg: '#E9E9E9',
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
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.625',
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
