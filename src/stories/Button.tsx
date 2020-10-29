import React, { FunctionComponent } from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: chunky => ({
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: '3px',
    padding: (chunky ? '16px 20px' : '10px 20px'),
  }),
  textPrimary: {
    border: '1px solid #045b561a',
  },
  textSecondary: {
    border: '1px solid #ee8b3a1a',
  }
}))

export type ColorTypes =
  | "primary"
  | "secondary";

export type ButtonProps = { color: ColorTypes, chunky?: boolean } & Omit<MuiButtonProps, "color">;

const Button: FunctionComponent<ButtonProps> = ({ children, chunky, ...props }) => {
  const classes = useStyles(chunky);

    return (
        <MuiButton classes={{ root: classes.root, textPrimary: classes.textPrimary, textSecondary: classes.textSecondary }} {...props}>
            {children}
        </MuiButton>
    )
};

export default Button;
