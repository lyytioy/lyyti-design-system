import React, { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";

interface ThemeSelectorProps {
    children: ReactNode;
}

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeSelector;
