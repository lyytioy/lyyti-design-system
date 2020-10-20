import { createMuiTheme } from "@material-ui/core/styles";

import lightBlue from "@material-ui/core/colors/lightBlue";
import indigo from "@material-ui/core/colors/indigo";
import purple from "@material-ui/core/colors/purple";
import amber from "@material-ui/core/colors/amber";
import deepOrange from "@material-ui/core/colors/deepOrange";

export default createMuiTheme({
    palette: {
        primary: indigo,
        secondary: purple,
        error: deepOrange,
        action: {
            disabledBackground: amber[400]
        },
        text: {
            primary: indigo[600],
            secondary: indigo[300],
            disabled: lightBlue[100]
        }
    },
});
