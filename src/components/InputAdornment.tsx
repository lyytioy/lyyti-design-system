import React, { FunctionComponent } from 'react';
import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
    },
  })
);

export type InputAdornmentProps = MuiInputAdornmentProps;

const InputAdornment: FunctionComponent<InputAdornmentProps> = (props) => {
  const classes = useStyles();

  return <MuiInputAdornment {...props} classes={{ root: classes.root }} />;
};

export default InputAdornment;
