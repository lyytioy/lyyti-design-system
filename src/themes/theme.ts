import { createMuiTheme } from '@material-ui/core/styles';
import ObjektivMk1RgTff from '../fonts/Objektiv Mk1 Regular.ttf';
import ObjektivMk1ItalicTff from '../fonts/Objektiv Mk1 Italic.ttf';
import ObjektivMk1MdTff from '../fonts/Objektiv Mk1 Medium Regular.ttf';
import ObjektivMk1MdItalicTff from '../fonts/Objektiv Mk1 Medium Italic.ttf';
import ObjektivMk1BoldTff from '../fonts/Objektiv Mk1 Bold.ttf';
import ObjektivMk1BoldItalicTff from '../fonts/Objektiv Mk1 Bold Italic.ttf';
import ObjektivMk3RgTff from '../fonts/Objektiv Mk3 Regular.ttf';
import ObjektivMk3ItalicTff from '../fonts/Objektiv Mk3 Italic.ttf';
import ObjektivMk3MdTff from '../fonts/Objektiv Mk3 Medium Regular.ttf';
import ObjektivMk3MdItalicTff from '../fonts/Objektiv Mk3 Medium Italic.ttf';
import ObjektivMk3BoldTff from '../fonts/Objektiv Mk3 Bold Regular.ttf';
import ObjektivMk3BoldItalicTff from '../fonts/Objektiv Mk3 Bold Italic.ttf';
import type {} from '@material-ui/lab/themeAugmentation';

const objektivMk1Rg = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `url('/${ObjektivMk1RgTff}') format('truetype')`,
};

const objektivMk1Italic = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `url('/${ObjektivMk1ItalicTff}') format('truetype')`,
};

const objektivMk1Md = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `url('/${ObjektivMk1MdTff}') format('truetype')`,
};

const objektivMk1MdItalic = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `url('/${ObjektivMk1MdItalicTff}') format('truetype')`,
};

const objektivMk1Bold = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `url('/${ObjektivMk1BoldTff}') format('truetype')`,
};

const objektivMk1BoldItalic = {
  fontFamily: 'Objektiv MK1',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `url('/${ObjektivMk1BoldItalicTff}') format('truetype')`,
};

const objektivMk3Rg = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: ` url('/${ObjektivMk3RgTff}') format('truetype')`,
};

const objektivMk3Italic = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 400,
  src: `url('/${ObjektivMk3ItalicTff}') format('truetype')`,
};

const objektivMk3Md = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `url('/${ObjektivMk3MdTff}') format('truetype')`,
};

const objektivMk3MdItalic = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 500,
  src: `url('/${ObjektivMk3MdItalicTff}') format('truetype')`,
};

const objektivMk3Bold = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'normal',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `url('/${ObjektivMk3BoldTff}') format('truetype')`,
};

const objektivMk3BoldItalic = {
  fontFamily: 'Objektiv MK3',
  fontStyle: 'italic',
  fontDisplay: 'swap' as const,
  fontWeight: 700,
  src: `url('/${ObjektivMk3BoldItalicTff}') format('truetype')`,
};

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

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    primaryStates: ColorStateOptions;
  }
  interface PaletteOptions {
    primaryStates: ColorStateOptions;
  }
}

export default createMuiTheme({
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
    info: {
      main: '#1F98CD',
      dark: '#18769F',
      light: '#7CCEE9',
      contrastText: '#1F98CD',
    },
    error: {
      main: '#D1492E',
      dark: '#A33924',
      light: '#F4A094',
      contrastText: '#D1492E',
    },
    warning: {
      main: '#F09000',
      dark: '#B86D00',
      light: '#FFC573',
      contrastText: '#F09000',
    },
    success: {
      main: '#50B54E',
      dark: '#3E903C',
      light: '#99DCA1',
      contrastText: '#50B54E',
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
    primaryStates: {
      activeContained: 'rgba(255, 255, 255, 0.3)',
      hover: 'rgba(4, 91, 86, 0.1)',
      selected: 'rgba(4, 91, 86, 0.08)',
      activeOutlined: 'rgba(4, 91, 86, 0.24)',
      outlinedStroke: '#045B56',
      disabledBg: '#739C9A',
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
  },
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
    MuiSwitch: {
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          objektivMk1Rg,
          objektivMk1Italic,
          objektivMk1Md,
          objektivMk1MdItalic,
          objektivMk1Bold,
          objektivMk1BoldItalic,
          objektivMk3Rg,
          objektivMk3Italic,
          objektivMk3Md,
          objektivMk3MdItalic,
          objektivMk3Bold,
          objektivMk3BoldItalic,
        ],
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04)',
      },
    },
    MuiAutocomplete: {
      option: {
        '&[data-focus="true"]': {
          backgroundColor: 'rgba(4,91,86,0.1)',
        },
      },
    },
  },
});
