import React, { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";
import { CssBaseline } from "@material-ui/core";

interface ThemeSelectorProps {
    children: ReactNode;
}

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeSelector;
