import React, { FunctionComponent } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';

export interface ButtonProps extends MuiButtonProps {

}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
    return (
        <MuiButton {...props}>
            {children}
        </MuiButton>
    )
};

export default Button;
