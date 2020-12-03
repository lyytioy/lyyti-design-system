import { createMuiTheme } from "@material-ui/core/styles";
import ObjektivMk1RgTff from "../fonts/ObjektivMk1_Rg.ttf";
import ObjektivMk1MdTff from "../fonts/ObjektivMk1_Md.ttf";
import ObjektivMk3RgTff from "../fonts/ObjektivMk3_Rg.ttf";

const objektivMk1Rg = {
    fontFamily: 'Objektiv MK1 Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap' as const,
    fontWeight: 400,
    src: `
        local('Objektiv MK1 Regular'),
        url(/${ObjektivMk1RgTff}) format('truetype'),
    `,
};

const objektivMk1Md = {
    fontFamily: 'Objektiv MK1 Medium',
    fontStyle: 'normal',
    fontDisplay: 'swap' as const,
    fontWeight: 500,
    src: `
        local('Objektiv MK1 Medium'),
        url(/${ObjektivMk1MdTff}) format('truetype'),
    `,
};

const objektivMk3Rg = {
    fontFamily: 'Objektiv MK3 Regular',
    fontStyle: 'normal',
    fontDisplay: 'swap' as const,
    fontWeight: 400,
    src: `
        local('Objektiv MK3 Regular'),
        url(/${ObjektivMk3RgTff}) format('truetype'),
    `,
};

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
            primary: "#192832",
            secondary: '#7A8389',
            disabled: 'rgba(122, 131, 137, 0.5)',
        },
        action: {
            hover: 'rgba(122, 131, 137, 0.1)',
            selected: 'rgba(122, 131, 137, 0.08)',
            disabled: '#B8BCBF',
            disabledBackground: 'rgba(122, 131, 137, 0.5)'
        },
        grey: {
             "50": '#F9FAFB',
             "100": '#E3E6E9',
             "200": '#B1B9BE',
             "300": '#7A8389',
             "400": '#46545B',
             "500": '#192832'
        }
    },
    typography: {
        fontFamily: 'Objektiv MK1 Regular, sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 500,
        }
    },
    props: {
        MuiCheckbox: {
            color: 'primary'
        },
        MuiRadio: {
            color: 'primary'
        },
        MuiSwitch: {
            color: 'primary',
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [objektivMk1Rg, objektivMk1Md, objektivMk3Rg],
            },
        },
    },
});
