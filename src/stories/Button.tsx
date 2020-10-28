import React, { FunctionComponent } from 'react';
import {Button as MuiButton, ButtonProps as MuiButtonProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: chunky => ({
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: '3px',
    padding: (chunky ? '16px 24px' : '10px 24px'),
  }),
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    '&:active': {
      backgroundColor: theme.palette.primary.light,
      borderColor: theme.palette.primary.light
    },
    '&:disabled': {
      color: theme.palette.primary.contrastText,
      backgroundColor: '#739C9A',
      borderColor: '#739C9A',
    }
  },
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.palette.tertiary.dark,
      borderColor: theme.palette.primary.dark
    },
    '&:active': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.tertiary.light,
      borderColor: theme.palette.primary.light
    },
    '&:disabled': {
      color: '#739C9A',
      borderColor: '#739C9A',
    }
  },
  outlinedTertiary: {
    color: theme.palette.primary.main,
    border: '1px solid',
    borderColor: '#045b5626',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      color: theme.palette.primary.dark,
      backgroundColor: theme.palette.tertiary.dark,
      borderColor: '#034e4926'
    },
    '&:active': {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.tertiary.light,
      borderColor: '#05756f26'
    },
    '&:disabled': {
      color: '#739C9A',
      borderColor: '#045b5626',
    }
  },
  containedDestructive: {
    color: theme.palette.destructive.contrastText,
    backgroundColor: theme.palette.destructive.main,
    border: '1px solid',
    borderColor: theme.palette.destructive.main,
    '&:hover': {
      backgroundColor: theme.palette.destructive.dark,
      borderColor: theme.palette.destructive.dark
    },
    '&:active': {
      backgroundColor: theme.palette.destructive.light,
      borderColor: theme.palette.destructive.light
    },
    '&:disabled': {
      color: theme.palette.destructive.contrastText,
      backgroundColor: '#D09081',
      borderColor: '#D09081',
    }
  },
}))

export type ColorTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive";

export type ButtonProps = { color: ColorTypes, chunky?: boolean } & Omit<MuiButtonProps, "color">;

const Button: FunctionComponent<ButtonProps> = ({ children, color, chunky, ...props }) => {
  const classes = useStyles(chunky);
  const colorName = color.slice(0,1).toUpperCase() + color.slice(1, color.length)
  const className = classes?.[`${props.variant}${colorName}`]
    return (
        <MuiButton classes={{ root: classes.root}} className={className} {...props}>
            {children}
        </MuiButton>
    )
};

export default Button;
