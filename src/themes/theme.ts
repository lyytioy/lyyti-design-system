import { createMuiTheme } from "@material-ui/core/styles";

import lightBlue from "@material-ui/core/colors/lightBlue";
import indigo from "@material-ui/core/colors/indigo";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
      tertiary: Palette['primary'];
      destructive: Palette['primary'];
    }
    interface PaletteOptions {
      tertiary: PaletteOptions['primary'];
      destructive: PaletteOptions['primary'];
    }
}

export default createMuiTheme({
    palette: {
        primary: {
            main: '#045B56',
            dark: '#034E49',
            light: '#05756F',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#EE8B3A',
            dark: '#DD6E13',
            light: '#F2A96D',
            contrastText: '#FFFFFF'
        },
        tertiary: {
            main: '#FFFFFF',
            dark: '#DDE6E6',
            light: '#E6F1F1',
        },
        destructive: {
            main: '#C24127',
            dark: '#A8321B',
            light: '#D75339',
            contrastText: '#FFFFFF'
        },
        info: {
            main: '#1F98CD',
            dark: '#18769F',
            light: '#7CCEE9',
            contrastText: '#1F98CD'
        },
        error: {
            main: '#D1492E',
            dark: '#A33924',
            light: '#F4A094',
            contrastText: '#D1492E'
        },
        warning: {
            main: '#F09000',
            dark: '#B86D00',
            light: '#FFC573',
            contrastText: '#F09000'
        },
        success: {
            main: '#50B54E',
            dark: '#3E903C',
            light: '#99DCA1',
            contrastText: '#50B54E'
        },
        text: {
            primary: indigo[600],
            secondary: indigo[300],
            disabled: lightBlue[100]
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 500,
        }
    }
});
