import { createMuiTheme } from "@material-ui/core/styles";

import lightBlue from "@material-ui/core/colors/lightBlue";
import indigo from "@material-ui/core/colors/indigo";

export default createMuiTheme({
    palette: {
        primary: {
            main: '#045B56'
        },
        error: {
            main: '#C24127'
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
